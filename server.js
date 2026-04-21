require('dotenv').config();

const express = require('express');
const session = require('cookie-session');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const multer = require('multer');
const QRCode = require('qrcode');
const path = require('path');
const fs = require('fs');

const db = require('./db');
const views = require('./views');
const { buildVCard } = require('./vcard');

const app = express();
const PORT = process.env.PORT || 3000;
const BASE_URL = process.env.BASE_URL || `http://localhost:${PORT}`;

// ======================
// Инициализация БД и запуск
// ======================
async function bootstrap() {
  try {
    await db.initDb();

    // Автосоздание админа
    const login = process.env.ADMIN_LOGIN || 'admin';
    const password = process.env.ADMIN_PASSWORD || 'admin123';
    
    const rowRes = await db.client.execute({
      sql: 'SELECT id FROM admins WHERE login = ?',
      args: [login]
    });
    
    if (rowRes.rows.length === 0) {
      const hash = bcrypt.hashSync(password, 10);
      await db.client.execute({
        sql: 'INSERT INTO admins (login, password_hash) VALUES (?, ?)',
        args: [login, hash]
      });
      console.log(`[INIT] Создан администратор: ${login} / ${password}`);
    }

    // Only listen if this file is run directly (local development)
    if (require.main === module) {
      app.listen(PORT, () => {
        console.log(`\n🟣 Connecting запущен на ${BASE_URL}`);
        console.log(`   Админка: ${BASE_URL}/admin`);
        console.log(`   Логин:   ${login}`);
        console.log(`   Пример:  ${BASE_URL}/jamshid\n`);
      });
    }
  } catch (err) {
    console.error('[BOOTSTRAP ERROR]', err.message);
    if (require.main === module) process.exit(1);
  }
}

// Store the promise so the serverless handler can await DB init before first request
const bootstrapDone = bootstrap();

module.exports = app;
module.exports.bootstrapDone = bootstrapDone;


// ======================
// Загрузка аватарок (memory storage — работает в serverless/Netlify)
// ======================
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const ok = /image\/(jpeg|png|webp|gif)/.test(file.mimetype);
    cb(ok ? null : new Error('Только изображения (jpg, png, webp, gif)'), ok);
  }
});

// ======================
// Middleware
// ======================
app.use(express.json({ limit: '2mb' }));
app.use(express.urlencoded({ extended: true, limit: '2mb' }));
app.use(cookieParser());
app.use(session({
  name: 'session',
  keys: [process.env.SESSION_SECRET || 'connecting-dev-secret-change-me'],
  maxAge: 7 * 24 * 60 * 60 * 1000 // 7 дней
}));

// Статика (PWA, картинки, CSS)
app.use(express.static(path.join(__dirname, 'public')));

// Views are bundled as JS strings in views.js — no filesystem access needed

function requireAdmin(req, res, next) {
  if (req.session && req.session.adminId) return next();
  if (req.headers.accept && req.headers.accept.includes('application/json')) {
    return res.status(401).json({ error: 'unauthorized' });
  }
  return res.redirect('/login');
}

// ======================
// Публичные страницы
// ======================
app.get('/', (req, res) => {
  res.type('html').send(views.index);
});

app.get('/login', (req, res) => {
  res.type('html').send(views.login);
});

app.post('/login', async (req, res) => {
  const { login, password } = req.body;
  console.log(`[LOGIN] Attempt: login="${login}", password="${password ? '***' : '(empty)'}"`);
  
  try {
    const result = await db.client.execute({
      sql: 'SELECT * FROM admins WHERE login = ?',
      args: [login]
    });
    
    const admin = result.rows[0];
    console.log(`[LOGIN] DB result:`, admin ? { id: admin.id, login: admin.login } : 'not found');
    
    if (!admin || !bcrypt.compareSync(password || '', admin.password_hash)) {
      console.log(`[LOGIN] Failed: ${!admin ? 'admin not found' : 'password mismatch'}`);
      return res.status(401).type('html').send(
        views.login.replace('<!--ERROR-->', '<div class="error">Неверный логин или пароль</div>')
      );
    }
    
    console.log(`[LOGIN] Success for ${login}`);
    req.session.adminId = admin.id;
    req.session.adminLogin = admin.login;
    res.redirect('/admin');
  } catch (err) {
    console.error('[LOGIN ERROR]', err.message);
    res.status(500).send('Database error');
  }
});

app.post('/logout', (req, res) => {
  req.session = null;
  res.redirect('/login');
});

// ======================
// Админка
// ======================
app.get('/admin', requireAdmin, (req, res) => {
  res.type('html').send(views.admin);
});

// API: список карточек
app.get('/api/cards', requireAdmin, async (req, res) => {
  try {
    const result = await db.client.execute('SELECT * FROM cards ORDER BY created_at DESC');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// API: получить одну
app.get('/api/cards/:slug', requireAdmin, async (req, res) => {
  try {
    const result = await db.client.execute({
      sql: 'SELECT * FROM cards WHERE slug = ?',
      args: [req.params.slug]
    });
    const row = result.rows[0];
    if (!row) return res.status(404).json({ error: 'not_found' });
    res.json(row);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// API: создать
app.post('/api/cards', requireAdmin, upload.single('avatar'), async (req, res) => {
  const data = req.body;
  if (!data.slug || !data.first_name) {
    return res.status(400).json({ error: 'slug и first_name обязательны' });
  }

  const slug = String(data.slug).trim().toLowerCase().replace(/[^a-z0-9_-]/g, '');
  if (!slug || ['admin', 'login', 'logout', 'api', 'manifest.json', 'sw.js', 'uploads'].includes(slug)) {
    return res.status(400).json({ error: 'Недопустимый slug' });
  }

  try {
    const existsRes = await db.client.execute({
      sql: 'SELECT id FROM cards WHERE slug = ?',
      args: [slug]
    });
    if (existsRes.rows.length > 0) return res.status(409).json({ error: 'Slug уже занят' });

    const avatar_url = req.file
      ? `data:${req.file.mimetype};base64,${req.file.buffer.toString('base64')}`
      : (data.avatar_url || null);

    const result = await db.client.execute({
      sql: `
        INSERT INTO cards (
          slug, first_name, last_name, position, company, bio,
          phone, phone_secondary, email, website, address, map_url,
          instagram, telegram, whatsapp, linkedin, facebook, youtube, tiktok,
          avatar_url, accent_color, theme
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `,
      args: [
        slug,
        data.first_name || '',
        data.last_name || null,
        data.position || null,
        data.company || null,
        data.bio || null,
        data.phone || null,
        data.phone_secondary || null,
        data.email || null,
        data.website || null,
        data.address || null,
        data.map_url || null,
        data.instagram || null,
        data.telegram || null,
        data.whatsapp || null,
        data.linkedin || null,
        data.facebook || null,
        data.youtube || null,
        data.tiktok || null,
        avatar_url,
        data.accent_color || '#7c5cff',
        data.theme || 'dark'
      ]
    });

    const rowRes = await db.client.execute({
      sql: 'SELECT * FROM cards WHERE id = ?',
      args: [result.lastInsertRowid]
    });
    res.status(201).json(rowRes.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// API: обновить
app.put('/api/cards/:slug', requireAdmin, upload.single('avatar'), async (req, res) => {
  try {
    const checkRes = await db.client.execute({
      sql: 'SELECT * FROM cards WHERE slug = ?',
      args: [req.params.slug]
    });
    const row = checkRes.rows[0];
    if (!row) return res.status(404).json({ error: 'not_found' });

    const data = req.body;
    const avatar_url = req.file
      ? `data:${req.file.mimetype};base64,${req.file.buffer.toString('base64')}`
      : (data.avatar_url !== undefined ? data.avatar_url : row.avatar_url);

    const is_active = data.is_active !== undefined ? (data.is_active === '1' || data.is_active === 1 || data.is_active === true ? 1 : 0) : row.is_active;

    await db.client.execute({
      sql: `
        UPDATE cards SET
          first_name=?, last_name=?, position=?, company=?, bio=?,
          phone=?, phone_secondary=?, email=?, website=?,
          address=?, map_url=?,
          instagram=?, telegram=?, whatsapp=?, linkedin=?,
          facebook=?, youtube=?, tiktok=?,
          avatar_url=?, accent_color=?, theme=?, is_active=?,
          updated_at=CURRENT_TIMESTAMP
        WHERE slug=?
      `,
      args: [
        data.first_name ?? row.first_name,
        data.last_name ?? row.last_name,
        data.position ?? row.position,
        data.company ?? row.company,
        data.bio ?? row.bio,
        data.phone ?? row.phone,
        data.phone_secondary ?? row.phone_secondary,
        data.email ?? row.email,
        data.website ?? row.website,
        data.address ?? row.address,
        data.map_url ?? row.map_url,
        data.instagram ?? row.instagram,
        data.telegram ?? row.telegram,
        data.whatsapp ?? row.whatsapp,
        data.linkedin ?? row.linkedin,
        data.facebook ?? row.facebook,
        data.youtube ?? row.youtube,
        data.tiktok ?? row.tiktok,
        avatar_url,
        data.accent_color ?? row.accent_color,
        data.theme ?? row.theme,
        is_active,
        row.slug
      ]
    });

    const updatedRes = await db.client.execute({
      sql: 'SELECT * FROM cards WHERE slug = ?',
      args: [row.slug]
    });
    res.json(updatedRes.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// API: удалить
app.delete('/api/cards/:slug', requireAdmin, async (req, res) => {
  try {
    const result = await db.client.execute({
      sql: 'DELETE FROM cards WHERE slug = ?',
      args: [req.params.slug]
    });
    if (result.rowsAffected === 0) return res.status(404).json({ error: 'not_found' });
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ======================
// PWA: динамический манифест для каждой визитки
// ======================
app.get('/:slug/manifest.json', async (req, res) => {
  try {
    const result = await db.client.execute({
      sql: 'SELECT * FROM cards WHERE slug = ? AND is_active = 1',
      args: [req.params.slug.toLowerCase()]
    });
    const card = result.rows[0];
    if (!card) return res.status(404).json({ error: 'not_found' });

    const name = [card.first_name, card.last_name].filter(Boolean).join(' ');
    res.json({
      name: `${name} — визитка`,
      short_name: name || card.slug,
      description: [card.position, card.company].filter(Boolean).join(' · ') || 'Онлайн-визитка',
      start_url: `/${card.slug}`,
      scope: `/${card.slug}`,
      display: 'standalone',
      orientation: 'portrait',
      background_color: '#0f0f14',
      theme_color: card.accent_color || '#7c5cff',
      icons: [
        { src: '/icons/icon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any' },
        { src: '/icons/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any maskable' },
        { src: '/icons/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any maskable' }
      ]
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ======================
// vCard — мгновенное сохранение в контакты
// ======================
app.get('/:slug/vcard', async (req, res) => {
  try {
    const result = await db.client.execute({
      sql: 'SELECT * FROM cards WHERE slug = ? AND is_active = 1',
      args: [req.params.slug.toLowerCase()]
    });
    const card = result.rows[0];
    if (!card) return res.status(404).send('Not found');

    await db.client.execute({
      sql: 'UPDATE cards SET saves = saves + 1 WHERE id = ?',
      args: [card.id]
    });

    const vcf = buildVCard(card, BASE_URL);
    const filename = `${card.slug}.vcf`;

    res.setHeader('Content-Type', 'text/vcard; charset=utf-8');
    res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
    res.setHeader('Cache-Control', 'no-store');
    res.send(vcf);
  } catch (err) {
    res.status(500).send('vcard error');
  }
});

// QR-код визитки (PNG)
app.get('/:slug/qr.png', async (req, res) => {
  try {
    const result = await db.client.execute({
      sql: 'SELECT slug FROM cards WHERE slug = ? AND is_active = 1',
      args: [req.params.slug.toLowerCase()]
    });
    const card = result.rows[0];
    if (!card) return res.status(404).send('Not found');
    const url = `${BASE_URL.replace(/\/$/, '')}/${card.slug}`;
    const buf = await QRCode.toBuffer(url, { width: 512, margin: 1, color: { dark: '#ffffff', light: '#00000000' } });
    res.setHeader('Content-Type', 'image/png');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.send(buf);
  } catch (e) {
    res.status(500).send('qr error');
  }
});

// ======================
// Страница визитки /:slug
// ======================
app.get('/:slug', async (req, res, next) => {
  const slug = req.params.slug.toLowerCase();
  // Исключаем системные пути
  if (['admin', 'login', 'logout', 'api', 'uploads', 'icons', 'favicon.ico', 'manifest.json', 'sw.js'].includes(slug)) {
    return next();
  }

  try {
    const result = await db.client.execute({
      sql: 'SELECT * FROM cards WHERE slug = ?',
      args: [slug]
    });
    const card = result.rows[0];
    
    if (!card || !card.is_active) {
      return res.status(404).type('html').send(views.notFound);
    }

    await db.client.execute({
      sql: 'UPDATE cards SET views = views + 1 WHERE id = ?',
      args: [card.id]
    });

    // Рендерим через подстановку JSON в шаблон
    const safeCard = JSON.stringify(card).replace(/</g, '\\u003c');
    const html = views.card
      .replace('<!--CARD_JSON-->', `<script id="card-data" type="application/json">${safeCard}</script>`)
      .replace('<!--MANIFEST-->', `<link rel="manifest" href="/${card.slug}/manifest.json">`)
      .replace(/<!--THEME_COLOR-->/g, card.accent_color || '#7c5cff')
      .replace(/<!--TITLE-->/g, `${[card.first_name, card.last_name].filter(Boolean).join(' ')}${card.company ? ' — ' + card.company : ''}`)
      .replace(/<!--DESC-->/g, [card.position, card.company].filter(Boolean).join(' · ') || 'Онлайн-визитка');

    res.type('html').send(html);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// ======================
// 404
// ======================
app.use((req, res) => {
  res.status(404).type('html').send(views.notFound);
});

// Обработка multer ошибок
app.use((err, req, res, next) => {
  console.error('[ERROR]', err.message);
  res.status(400).json({ error: err.message });
});

// Server now starts in bootstrap() above
