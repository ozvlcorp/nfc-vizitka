// Auto-generated: HTML templates bundled as JS strings for Netlify esbuild compatibility
module.exports = {
  login: `<!doctype html>
<html lang="ru">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="theme-color" content="#0b0b10">
<title>Вход — Connecting</title>
<style>
* { box-sizing: border-box; }
html, body { margin: 0; padding: 0; height: 100%; }
body {
  font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Inter', 'Segoe UI', Roboto, sans-serif;
  background: #0b0b10; color: #fff;
  display: flex; align-items: center; justify-content: center;
  min-height: 100vh;
  position: relative; overflow: hidden;
}
body::before {
  content: ''; position: absolute; inset: -50%;
  background:
    radial-gradient(40% 30% at 30% 30%, rgba(124,92,255,0.35) 0%, transparent 60%),
    radial-gradient(40% 30% at 70% 70%, rgba(91,140,255,0.25) 0%, transparent 60%);
  filter: blur(80px); z-index: 0;
}
.card {
  position: relative; z-index: 1;
  width: 100%; max-width: 380px;
  background: rgba(20,20,28,0.8);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 20px; padding: 32px 28px;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}
.logo {
  display: flex; align-items: center; gap: 10px;
  font-size: 18px; font-weight: 700; margin-bottom: 20px;
  justify-content: center;
}
.logo-dot {
  width: 32px; height: 32px; border-radius: 9px;
  background: linear-gradient(135deg, #7c5cff, #5b8cff);
}
h1 { font-size: 22px; margin: 0 0 6px; text-align: center; }
.sub { color: rgba(255,255,255,0.55); font-size: 14px; text-align: center; margin-bottom: 22px; }
.field { margin-bottom: 12px; }
.field label { display: block; font-size: 12px; color: rgba(255,255,255,0.5); margin-bottom: 4px; }
.field input {
  width: 100%; padding: 12px 14px; font-size: 15px;
  background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.1);
  border-radius: 10px; color: #fff; font-family: inherit;
}
.field input:focus { outline: none; border-color: #7c5cff; }
.btn {
  width: 100%; padding: 13px 18px; margin-top: 6px;
  background: linear-gradient(135deg, #7c5cff, #5b8cff);
  color: #fff; border: none; border-radius: 10px;
  font-size: 15px; font-weight: 600; cursor: pointer;
  font-family: inherit;
}
.error {
  background: rgba(255,92,92,0.12); border: 1px solid rgba(255,92,92,0.3);
  color: #ff5c5c; padding: 10px 14px; border-radius: 10px;
  font-size: 13px; margin-bottom: 12px;
}
</style>
</head>
<body>
<form class="card" method="post" action="/login">
  <div class="logo">
    <div class="logo-dot"></div>
    Connecting
  </div>
  <h1>Вход в админку</h1>
  <p class="sub">Управление онлайн-визитками</p>
  <!--ERROR-->
  <div class="field">
    <label>Логин</label>
    <input name="login" autocomplete="username" required autofocus>
  </div>
  <div class="field">
    <label>Пароль</label>
    <input name="password" type="password" autocomplete="current-password" required>
  </div>
  <button type="submit" class="btn">Войти</button>
</form>
</body>
</html>
`,
  admin: `<!doctype html>
<html lang="ru">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="theme-color" content="#0b0b10">
<title>Connecting — Админка</title>
<style>
:root {
  --bg: #0b0b10;
  --bg-2: #14141c;
  --fg: #ffffff;
  --fg-dim: rgba(255,255,255,0.7);
  --fg-mute: rgba(255,255,255,0.5);
  --card: rgba(255,255,255,0.04);
  --card-border: rgba(255,255,255,0.08);
  --accent: #7c5cff;
  --accent-2: #5b8cff;
  --danger: #ff5c5c;
  --success: #22c55e;
  --radius: 14px;
}
* { box-sizing: border-box; }
html, body { margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Inter', 'Segoe UI', Roboto, sans-serif; background: var(--bg); color: var(--fg); }
body { min-height: 100vh; }

.layout { display: grid; grid-template-columns: 280px 1fr; min-height: 100vh; }
@media (max-width: 900px) { .layout { grid-template-columns: 1fr; } }

.sidebar {
  background: var(--bg-2);
  border-right: 1px solid var(--card-border);
  padding: 20px 16px;
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
}
@media (max-width: 900px) {
  .sidebar { position: relative; height: auto; border-right: none; border-bottom: 1px solid var(--card-border); }
}
.logo {
  display: flex; align-items: center; gap: 10px;
  font-size: 18px; font-weight: 700; margin-bottom: 20px;
  padding: 8px 10px;
}
.logo-dot {
  width: 28px; height: 28px; border-radius: 8px;
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
}
.sidebar-actions { display: flex; gap: 8px; margin-bottom: 16px; }
.btn-new {
  flex: 1;
  display: flex; align-items: center; justify-content: center; gap: 6px;
  padding: 10px 12px; border-radius: 10px;
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  color: #fff; border: none; font-weight: 600; cursor: pointer;
  font-size: 14px;
}
.btn-icon {
  width: 36px; height: 36px;
  border-radius: 10px;
  background: var(--card); border: 1px solid var(--card-border);
  color: var(--fg); cursor: pointer;
  display: flex; align-items: center; justify-content: center;
}
.search {
  width: 100%; padding: 10px 12px;
  background: var(--card); border: 1px solid var(--card-border);
  border-radius: 10px; color: var(--fg);
  font-size: 14px; margin-bottom: 12px;
}
.search:focus { outline: none; border-color: var(--accent); }

.card-list { display: flex; flex-direction: column; gap: 4px; }
.card-item {
  display: flex; align-items: center; gap: 10px;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.15s;
}
.card-item:hover { background: var(--card); }
.card-item.active { background: color-mix(in srgb, var(--accent) 20%, transparent); }
.card-item-avatar {
  width: 36px; height: 36px; border-radius: 50%;
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  display: flex; align-items: center; justify-content: center;
  font-size: 13px; font-weight: 600; color: #fff;
  overflow: hidden; flex-shrink: 0;
}
.card-item-avatar img { width: 100%; height: 100%; object-fit: cover; }
.card-item-body { flex: 1; min-width: 0; }
.card-item-name { font-size: 14px; font-weight: 500; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.card-item-slug { font-size: 12px; color: var(--fg-mute); }
.card-item-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--success); flex-shrink: 0; }
.card-item-dot.off { background: var(--fg-mute); }

.sidebar-footer {
  margin-top: 20px; padding-top: 12px;
  border-top: 1px solid var(--card-border);
  display: flex; justify-content: space-between; align-items: center;
  font-size: 12px; color: var(--fg-mute);
}
.sidebar-footer form { display: inline; }
.sidebar-footer button {
  background: transparent; border: none; color: var(--fg-mute); cursor: pointer;
  font-size: 12px; padding: 4px 8px;
}
.sidebar-footer button:hover { color: var(--fg); }

.main { padding: 24px 28px; max-width: 900px; width: 100%; margin: 0 auto; }
@media (max-width: 700px) { .main { padding: 16px; } }

.main-header {
  display: flex; align-items: center; justify-content: space-between;
  margin-bottom: 20px; gap: 12px; flex-wrap: wrap;
}
.main-title { font-size: 22px; font-weight: 700; }
.main-actions { display: flex; gap: 8px; flex-wrap: wrap; }
.badge {
  display: inline-flex; align-items: center; gap: 6px;
  padding: 4px 10px; border-radius: 20px;
  background: var(--card); border: 1px solid var(--card-border);
  font-size: 12px; color: var(--fg-dim);
}
.badge.on { background: color-mix(in srgb, var(--success) 15%, transparent); color: var(--success); border-color: transparent; }
.badge.off { background: color-mix(in srgb, var(--fg-mute) 10%, transparent); color: var(--fg-mute); }

.stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 10px; margin-bottom: 18px; }
.stat {
  background: var(--card); border: 1px solid var(--card-border);
  border-radius: var(--radius); padding: 14px 16px;
}
.stat-label { font-size: 11px; color: var(--fg-mute); text-transform: uppercase; letter-spacing: 0.08em; }
.stat-value { font-size: 22px; font-weight: 700; margin-top: 4px; }

.form-grid { display: grid; gap: 10px; }
.form-section {
  background: var(--card); border: 1px solid var(--card-border);
  border-radius: var(--radius); padding: 18px;
  margin-bottom: 14px;
}
.form-section h3 { margin: 0 0 12px; font-size: 13px; text-transform: uppercase; letter-spacing: 0.08em; color: var(--fg-mute); font-weight: 600; }
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
@media (max-width: 600px) { .form-row { grid-template-columns: 1fr; } }
.field label { display: block; font-size: 12px; color: var(--fg-mute); margin-bottom: 4px; }
.field input, .field textarea, .field select {
  width: 100%; padding: 11px 12px;
  background: var(--bg-2); border: 1px solid var(--card-border);
  border-radius: 10px; color: var(--fg);
  font-size: 14px; font-family: inherit;
}
.field input:focus, .field textarea:focus, .field select:focus {
  outline: none; border-color: var(--accent);
}
.field textarea { resize: vertical; min-height: 70px; }
.field-hint { font-size: 11px; color: var(--fg-mute); margin-top: 4px; }

.color-picker { display: flex; align-items: center; gap: 10px; }
.color-picker input[type="color"] { width: 44px; height: 44px; border-radius: 10px; border: 1px solid var(--card-border); background: var(--bg-2); cursor: pointer; padding: 2px; }
.color-swatches { display: flex; gap: 6px; flex-wrap: wrap; }
.swatch { width: 28px; height: 28px; border-radius: 50%; cursor: pointer; border: 2px solid transparent; transition: border-color 0.15s; }
.swatch:hover, .swatch.active { border-color: var(--fg); }

.avatar-upload { display: flex; align-items: center; gap: 14px; }
.avatar-preview {
  width: 72px; height: 72px; border-radius: 50%;
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  display: flex; align-items: center; justify-content: center;
  font-size: 24px; font-weight: 600; color: #fff;
  overflow: hidden; flex-shrink: 0;
}
.avatar-preview img { width: 100%; height: 100%; object-fit: cover; }
.avatar-upload-btn {
  padding: 8px 14px; border-radius: 10px;
  background: var(--card); border: 1px solid var(--card-border);
  color: var(--fg); cursor: pointer; font-size: 13px;
}
.avatar-upload input[type="file"] { display: none; }

.actions-row { display: flex; gap: 10px; margin-top: 14px; flex-wrap: wrap; }
.btn {
  padding: 11px 18px; border-radius: 10px; border: none;
  font-size: 14px; font-weight: 600; cursor: pointer;
  font-family: inherit;
  display: inline-flex; align-items: center; gap: 8px;
}
.btn-primary { background: linear-gradient(135deg, var(--accent), var(--accent-2)); color: #fff; }
.btn-secondary { background: var(--card); border: 1px solid var(--card-border); color: var(--fg); }
.btn-danger { background: color-mix(in srgb, var(--danger) 15%, transparent); color: var(--danger); border: 1px solid color-mix(in srgb, var(--danger) 40%, transparent); }

.empty {
  text-align: center; padding: 60px 20px;
  color: var(--fg-mute);
}
.empty h2 { font-size: 20px; color: var(--fg); margin-bottom: 8px; }

.toast {
  position: fixed; top: 20px; right: 20px;
  padding: 12px 18px; background: var(--bg-2);
  border: 1px solid var(--card-border); border-radius: 10px;
  font-size: 14px; color: var(--fg);
  transform: translateX(400px); transition: transform 0.25s;
  z-index: 100;
  box-shadow: 0 10px 40px rgba(0,0,0,0.5);
}
.toast.show { transform: translateX(0); }
.toast.error { border-color: var(--danger); }
.toast.success { border-color: var(--success); }

.qr-wrap { display: flex; gap: 14px; align-items: center; }
.qr-wrap img { width: 120px; height: 120px; background: #fff; border-radius: 8px; padding: 8px; }
.qr-wrap-body { font-size: 13px; color: var(--fg-dim); }
.qr-wrap-body code { background: var(--bg-2); padding: 2px 8px; border-radius: 6px; font-size: 12px; }
</style>
</head>
<body>
<div class="layout">
  <aside class="sidebar">
    <div class="logo">
      <div class="logo-dot"></div>
      Connecting
    </div>

    <div class="sidebar-actions">
      <button class="btn-new" id="new-btn">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
        Новая визитка
      </button>
    </div>

    <input class="search" id="search" placeholder="Поиск…">

    <div class="card-list" id="card-list"></div>

    <div class="sidebar-footer">
      <span>Админ</span>
      <form action="/logout" method="post"><button type="submit">Выйти</button></form>
    </div>
  </aside>

  <main class="main" id="main"></main>
</div>

<div class="toast" id="toast"></div>

<script>
const COLORS = ['#7c5cff', '#5b8cff', '#22c55e', '#f59e0b', '#ef4444', '#ec4899', '#06b6d4', '#0f172a'];

let cards = [];
let currentSlug = null;
let originalCard = null;

async function fetchCards() {
  const res = await fetch('/api/cards', { headers: { 'Accept': 'application/json' } });
  if (res.status === 401) { location.href = '/login'; return; }
  cards = await res.json();
  renderList();
}

function renderList(filter = '') {
  const list = document.getElementById('card-list');
  const filtered = cards.filter(c => {
    const q = filter.toLowerCase();
    return !q || c.slug.toLowerCase().includes(q) || (c.first_name || '').toLowerCase().includes(q) || (c.last_name || '').toLowerCase().includes(q);
  });
  list.innerHTML = '';
  filtered.forEach(c => {
    const el = document.createElement('div');
    el.className = 'card-item' + (c.slug === currentSlug ? ' active' : '');
    el.innerHTML = \`
      <div class="card-item-avatar">\${c.avatar_url ? \`<img src="\${c.avatar_url}">\` : initials(c)}</div>
      <div class="card-item-body">
        <div class="card-item-name">\${escape(c.first_name)} \${escape(c.last_name || '')}</div>
        <div class="card-item-slug">/\${c.slug}</div>
      </div>
      <div class="card-item-dot \${c.is_active ? '' : 'off'}" title="\${c.is_active ? 'Активна' : 'Отключена'}"></div>
    \`;
    el.onclick = () => openCard(c.slug);
    list.appendChild(el);
  });
  if (filtered.length === 0) {
    list.innerHTML = '<div style="padding: 14px; color: var(--fg-mute); font-size: 13px; text-align:center;">Ничего не найдено</div>';
  }
}

function initials(c) {
  return ((c.first_name || '?').charAt(0) + (c.last_name ? c.last_name.charAt(0) : '')).toUpperCase();
}
function escape(s) {
  return String(s || '').replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
}

function openCard(slug) {
  currentSlug = slug;
  const card = cards.find(c => c.slug === slug);
  originalCard = card;
  renderForm(card);
  renderList(document.getElementById('search').value);
}

function openNew() {
  currentSlug = null;
  originalCard = null;
  renderForm(null);
  renderList(document.getElementById('search').value);
}

function renderForm(card) {
  const isNew = !card;
  const c = card || { slug: '', first_name: '', accent_color: '#7c5cff', is_active: 1 };
  const baseUrl = location.origin;

  document.getElementById('main').innerHTML = \`
    <div class="main-header">
      <div>
        <div class="main-title">\${isNew ? 'Новая визитка' : escape(c.first_name + ' ' + (c.last_name || ''))}</div>
        \${!isNew ? \`<div style="font-size:13px;color:var(--fg-mute);margin-top:4px;">
          <a href="/\${c.slug}" target="_blank" style="color:var(--accent);text-decoration:none;">\${baseUrl}/\${c.slug}</a>
          <span class="badge \${c.is_active ? 'on' : 'off'}" style="margin-left:8px;">\${c.is_active ? 'Активна' : 'Отключена'}</span>
        </div>\` : ''}
      </div>
      <div class="main-actions">
        \${!isNew ? \`<a class="btn btn-secondary" href="/\${c.slug}" target="_blank">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          Открыть
        </a>\` : ''}
        \${!isNew ? \`<a class="btn btn-secondary" href="/\${c.slug}/vcard" download>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          vCard
        </a>\` : ''}
      </div>
    </div>

    \${!isNew ? \`<div class="stats">
      <div class="stat"><div class="stat-label">Просмотры</div><div class="stat-value">\${c.views || 0}</div></div>
      <div class="stat"><div class="stat-label">Сохранения</div><div class="stat-value">\${c.saves || 0}</div></div>
      <div class="stat"><div class="stat-label">Создана</div><div class="stat-value" style="font-size:14px;">\${new Date(c.created_at).toLocaleDateString('ru-RU')}</div></div>
    </div>\` : ''}

    <form id="card-form" autocomplete="off">
      <div class="form-section">
        <h3>Основное</h3>
        <div class="avatar-upload">
          <div class="avatar-preview" id="avatar-preview">
            \${c.avatar_url ? \`<img src="\${c.avatar_url}">\` : (c.first_name ? initials(c) : '?')}
          </div>
          <label class="avatar-upload-btn">
            Загрузить фото
            <input type="file" name="avatar" accept="image/*" id="avatar-input">
          </label>
          \${c.avatar_url ? \`<button type="button" class="btn btn-secondary" id="remove-avatar" style="padding:8px 12px;font-size:12px;">Убрать</button>\` : ''}
        </div>
        <div style="height:12px"></div>
        <div class="form-row">
          <div class="field">
            <label>Ссылка (slug) *</label>
            <input name="slug" value="\${escape(c.slug)}" \${isNew ? '' : 'readonly'} placeholder="jamshid" pattern="[a-z0-9_-]+" required>
            <div class="field-hint">\${baseUrl}/<span id="slug-preview">\${escape(c.slug || 'jamshid')}</span></div>
          </div>
          <div class="field">
            <label>Статус</label>
            <select name="is_active">
              <option value="1" \${c.is_active ? 'selected' : ''}>Активна</option>
              <option value="0" \${!c.is_active ? 'selected' : ''}>Отключена</option>
            </select>
          </div>
        </div>
        <div style="height:10px"></div>
        <div class="form-row">
          <div class="field"><label>Имя *</label><input name="first_name" value="\${escape(c.first_name)}" required></div>
          <div class="field"><label>Фамилия</label><input name="last_name" value="\${escape(c.last_name)}"></div>
        </div>
        <div style="height:10px"></div>
        <div class="form-row">
          <div class="field"><label>Должность</label><input name="position" value="\${escape(c.position)}" placeholder="CEO, Дизайнер…"></div>
          <div class="field"><label>Компания</label><input name="company" value="\${escape(c.company)}"></div>
        </div>
        <div style="height:10px"></div>
        <div class="field">
          <label>О себе (необязательно)</label>
          <textarea name="bio" placeholder="Короткое описание">\${escape(c.bio)}</textarea>
        </div>
      </div>

      <div class="form-section">
        <h3>Контакты</h3>
        <div class="form-row">
          <div class="field"><label>Телефон</label><input name="phone" value="\${escape(c.phone)}" placeholder="+998 90 123 45 67" inputmode="tel"></div>
          <div class="field"><label>Доп. телефон</label><input name="phone_secondary" value="\${escape(c.phone_secondary)}" inputmode="tel"></div>
        </div>
        <div style="height:10px"></div>
        <div class="form-row">
          <div class="field"><label>Email</label><input name="email" type="email" value="\${escape(c.email)}"></div>
          <div class="field"><label>Сайт</label><input name="website" value="\${escape(c.website)}" placeholder="https://example.com"></div>
        </div>
        <div style="height:10px"></div>
        <div class="form-row">
          <div class="field"><label>Адрес</label><input name="address" value="\${escape(c.address)}" placeholder="Ташкент, …"></div>
          <div class="field"><label>Ссылка на карту</label><input name="map_url" value="\${escape(c.map_url)}" placeholder="https://maps.google.com/…"></div>
        </div>
      </div>

      <div class="form-section">
        <h3>Соц.сети и мессенджеры</h3>
        <div class="form-row">
          <div class="field"><label>Instagram</label><input name="instagram" value="\${escape(c.instagram)}" placeholder="username"></div>
          <div class="field"><label>Telegram</label><input name="telegram" value="\${escape(c.telegram)}" placeholder="username"></div>
        </div>
        <div style="height:10px"></div>
        <div class="form-row">
          <div class="field"><label>WhatsApp</label><input name="whatsapp" value="\${escape(c.whatsapp)}" placeholder="998901234567" inputmode="tel"></div>
          <div class="field"><label>LinkedIn</label><input name="linkedin" value="\${escape(c.linkedin)}" placeholder="username"></div>
        </div>
        <div style="height:10px"></div>
        <div class="form-row">
          <div class="field"><label>Facebook</label><input name="facebook" value="\${escape(c.facebook)}" placeholder="username"></div>
          <div class="field"><label>YouTube</label><input name="youtube" value="\${escape(c.youtube)}" placeholder="username"></div>
        </div>
        <div style="height:10px"></div>
        <div class="form-row">
          <div class="field"><label>TikTok</label><input name="tiktok" value="\${escape(c.tiktok)}" placeholder="username"></div>
          <div class="field"></div>
        </div>
      </div>

      <div class="form-section">
        <h3>Цвет акцента</h3>
        <div class="color-picker">
          <input type="color" name="accent_color" value="\${c.accent_color || '#7c5cff'}" id="accent-input">
          <div class="color-swatches">
            \${COLORS.map(col => \`<div class="swatch \${col === (c.accent_color || '#7c5cff') ? 'active' : ''}" style="background:\${col}" data-color="\${col}"></div>\`).join('')}
          </div>
        </div>
      </div>

      \${!isNew ? \`<div class="form-section">
        <h3>QR-код и ссылка для NFC</h3>
        <div class="qr-wrap">
          <img src="/\${c.slug}/qr.png" alt="QR">
          <div class="qr-wrap-body">
            Запишите в NFC-метку или распечатайте:<br>
            <code>\${baseUrl}/\${c.slug}</code>
            <div style="margin-top:8px;">
              <button type="button" class="btn btn-secondary" id="copy-url" style="padding:6px 12px;font-size:12px;">Скопировать</button>
              <a class="btn btn-secondary" href="/\${c.slug}/qr.png" download="qr-\${c.slug}.png" style="padding:6px 12px;font-size:12px;text-decoration:none;">Скачать QR</a>
            </div>
          </div>
        </div>
      </div>\` : ''}

      <div class="actions-row">
        <button type="submit" class="btn btn-primary">\${isNew ? 'Создать визитку' : 'Сохранить'}</button>
        \${!isNew ? \`<button type="button" class="btn btn-danger" id="delete-btn">Удалить</button>\` : ''}
      </div>
    </form>
  \`;

  attachFormHandlers(isNew);
}

function renderEmpty() {
  document.getElementById('main').innerHTML = \`
    <div class="empty">
      <div style="font-size: 48px; margin-bottom: 10px;">✦</div>
      <h2>Выберите визитку</h2>
      <p>или создайте новую кнопкой слева</p>
    </div>
  \`;
}

function attachFormHandlers(isNew) {
  const form = document.getElementById('card-form');

  // Slug preview
  const slugInput = form.querySelector('[name=slug]');
  const slugPreview = document.getElementById('slug-preview');
  if (slugInput && slugPreview) {
    slugInput.addEventListener('input', () => {
      const clean = slugInput.value.toLowerCase().replace(/[^a-z0-9_-]/g, '');
      slugInput.value = clean;
      slugPreview.textContent = clean || 'jamshid';
    });
  }

  // Цветовые свотчи
  const accentInput = document.getElementById('accent-input');
  document.querySelectorAll('.swatch').forEach(s => {
    s.addEventListener('click', () => {
      const c = s.dataset.color;
      accentInput.value = c;
      document.querySelectorAll('.swatch').forEach(x => x.classList.remove('active'));
      s.classList.add('active');
    });
  });

  // Аватар preview
  const avInput = document.getElementById('avatar-input');
  const avPreview = document.getElementById('avatar-preview');
  if (avInput) {
    avInput.addEventListener('change', (e) => {
      const f = e.target.files[0];
      if (!f) return;
      const reader = new FileReader();
      reader.onload = (ev) => { avPreview.innerHTML = \`<img src="\${ev.target.result}">\`; };
      reader.readAsDataURL(f);
    });
  }
  const remAv = document.getElementById('remove-avatar');
  if (remAv) {
    remAv.addEventListener('click', async () => {
      if (!confirm('Убрать фото?')) return;
      const fd = new FormData();
      fd.append('avatar_url', '');
      const res = await fetch('/api/cards/' + currentSlug, { method: 'PUT', body: fd });
      if (res.ok) { toast('Фото удалено', 'success'); await fetchCards(); openCard(currentSlug); }
    });
  }

  // Копирование ссылки
  const copyBtn = document.getElementById('copy-url');
  if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
      await navigator.clipboard.writeText(location.origin + '/' + currentSlug);
      toast('Ссылка скопирована', 'success');
    });
  }

  // Удаление
  const delBtn = document.getElementById('delete-btn');
  if (delBtn) {
    delBtn.addEventListener('click', async () => {
      if (!confirm(\`Удалить визитку /\${currentSlug}? Это необратимо.\`)) return;
      const res = await fetch('/api/cards/' + currentSlug, { method: 'DELETE' });
      if (res.ok) {
        toast('Визитка удалена', 'success');
        currentSlug = null;
        await fetchCards();
        renderEmpty();
      } else {
        toast('Ошибка удаления', 'error');
      }
    });
  }

  // Сабмит формы
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    const url = isNew ? '/api/cards' : '/api/cards/' + currentSlug;
    const method = isNew ? 'POST' : 'PUT';

    const btn = form.querySelector('button[type=submit]');
    btn.disabled = true;
    btn.textContent = 'Сохранение…';

    try {
      const res = await fetch(url, { method, body: fd });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Ошибка');

      toast(isNew ? 'Визитка создана' : 'Сохранено', 'success');
      currentSlug = data.slug;
      await fetchCards();
      openCard(currentSlug);
    } catch (err) {
      toast(err.message, 'error');
      btn.disabled = false;
      btn.textContent = isNew ? 'Создать визитку' : 'Сохранить';
    }
  });
}

function toast(msg, type = '') {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.className = 'toast show ' + type;
  clearTimeout(toast._t);
  toast._t = setTimeout(() => t.className = 'toast ' + type, 2500);
}

// ======================
// Init
// ======================
document.getElementById('new-btn').addEventListener('click', openNew);
document.getElementById('search').addEventListener('input', (e) => renderList(e.target.value));

fetchCards().then(() => {
  if (cards.length > 0) openCard(cards[0].slug);
  else openNew();
});
</script>
</body>
</html>
`,
  card: `<!doctype html>
<html lang="ru">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="theme-color" content="<!--THEME_COLOR-->">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="mobile-web-app-capable" content="yes">
<title><!--TITLE--></title>
<meta name="description" content="<!--DESC-->">
<meta property="og:title" content="<!--TITLE-->">
<meta property="og:description" content="<!--DESC-->">
<meta property="og:type" content="profile">
<link rel="icon" href="/icons/icon.svg" type="image/svg+xml">
<link rel="alternate icon" href="/icons/icon-192.png" type="image/png">
<link rel="apple-touch-icon" href="/icons/icon-192.png">
<!--MANIFEST-->
<style>
:root {
  --bg: #0b0b10;
  --bg-2: #14141c;
  --fg: #ffffff;
  --fg-dim: rgba(255,255,255,0.65);
  --fg-mute: rgba(255,255,255,0.45);
  --card: rgba(255,255,255,0.04);
  --card-border: rgba(255,255,255,0.08);
  --accent: #7c5cff;
  --accent-2: #5b8cff;
  --radius: 20px;
}
* { box-sizing: border-box; }
html, body { margin: 0; padding: 0; }
body {
  font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Inter', 'Segoe UI', Roboto, sans-serif;
  background: var(--bg);
  color: var(--fg);
  min-height: 100vh;
  min-height: 100dvh;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding-top: env(safe-area-inset-top);
  padding-bottom: env(safe-area-inset-bottom);
}
body::before {
  content: '';
  position: fixed;
  inset: -50%;
  background:
    radial-gradient(40% 30% at 30% 20%, color-mix(in srgb, var(--accent) 40%, transparent) 0%, transparent 60%),
    radial-gradient(40% 30% at 80% 10%, color-mix(in srgb, var(--accent-2) 30%, transparent) 0%, transparent 60%),
    radial-gradient(40% 40% at 50% 100%, color-mix(in srgb, var(--accent) 20%, transparent) 0%, transparent 60%);
  filter: blur(60px);
  z-index: -1;
  pointer-events: none;
}
.wrap {
  max-width: 440px;
  margin: 0 auto;
  padding: 24px 20px 40px;
  position: relative;
}
.avatar {
  width: 112px;
  height: 112px;
  border-radius: 50%;
  margin: 20px auto 16px;
  display: block;
  object-fit: cover;
  border: 3px solid rgba(255,255,255,0.15);
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  box-shadow: 0 20px 60px -20px color-mix(in srgb, var(--accent) 60%, transparent);
}
.avatar-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 44px;
  font-weight: 600;
  color: #fff;
}
h1 {
  text-align: center;
  font-size: 26px;
  line-height: 1.2;
  margin: 0 0 6px;
  font-weight: 700;
  letter-spacing: -0.02em;
}
.tagline {
  text-align: center;
  color: var(--fg-dim);
  font-size: 15px;
  margin: 0 0 4px;
}
.company {
  text-align: center;
  color: var(--fg-mute);
  font-size: 14px;
  margin: 0 0 8px;
}
.bio {
  text-align: center;
  color: var(--fg-dim);
  font-size: 14px;
  line-height: 1.5;
  margin: 12px 8px 0;
}
.cta {
  margin: 28px 0 20px;
  display: grid;
  gap: 10px;
}
.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  padding: 16px 20px;
  border-radius: 16px;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: transform 0.15s ease, opacity 0.15s ease;
  font-family: inherit;
  color: #fff;
}
.btn:active { transform: scale(0.98); }
.btn-primary {
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  box-shadow: 0 10px 30px -10px color-mix(in srgb, var(--accent) 60%, transparent);
}
.btn-primary:hover { opacity: 0.95; }
.btn-ghost {
  background: var(--card);
  border: 1px solid var(--card-border);
}
.row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}
.actions {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  margin: 10px 0 20px;
}
.action {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 14px 6px;
  border-radius: 14px;
  background: var(--card);
  border: 1px solid var(--card-border);
  color: var(--fg);
  text-decoration: none;
  transition: transform 0.15s, background 0.15s;
}
.action:active { transform: scale(0.95); }
.action:hover { background: rgba(255,255,255,0.07); }
.action svg { width: 24px; height: 24px; }
.action span { font-size: 11px; color: var(--fg-dim); }
.section {
  background: var(--card);
  border: 1px solid var(--card-border);
  border-radius: var(--radius);
  padding: 6px;
  margin-bottom: 14px;
}
.section-title {
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--fg-mute);
  padding: 10px 14px 6px;
}
.item {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px;
  border-radius: 14px;
  color: var(--fg);
  text-decoration: none;
  transition: background 0.15s;
}
.item:hover { background: rgba(255,255,255,0.04); }
.item:active { background: rgba(255,255,255,0.07); }
.item-icon {
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: rgba(255,255,255,0.06);
}
.item-icon svg { width: 20px; height: 20px; }
.item-body { flex: 1; min-width: 0; }
.item-label { font-size: 12px; color: var(--fg-mute); margin-bottom: 2px; }
.item-value { font-size: 15px; color: var(--fg); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.item-arrow { opacity: 0.4; }
.qr-block {
  text-align: center;
  padding: 24px;
  margin-top: 20px;
}
.qr-block img {
  width: 160px;
  height: 160px;
  background: rgba(255,255,255,0.05);
  border-radius: 16px;
  padding: 12px;
}
.qr-block p { color: var(--fg-mute); font-size: 13px; margin: 10px 0 0; }
.footer {
  text-align: center;
  margin-top: 28px;
  color: var(--fg-mute);
  font-size: 12px;
}
.footer a { color: var(--fg-dim); text-decoration: none; }
.pwa-banner {
  position: fixed;
  left: 12px;
  right: 12px;
  bottom: 12px;
  bottom: calc(env(safe-area-inset-bottom, 0) + 12px);
  padding: 14px 16px;
  background: rgba(20,20,28,0.95);
  border: 1px solid var(--card-border);
  border-radius: 16px;
  box-shadow: 0 20px 60px -10px rgba(0,0,0,0.6);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  display: none;
  align-items: center;
  gap: 12px;
  z-index: 100;
  max-width: 420px;
  margin: 0 auto;
  animation: slideUp 0.3s ease;
}
.pwa-banner.show { display: flex; }
.pwa-banner img { width: 40px; height: 40px; border-radius: 8px; flex-shrink: 0; }
.pwa-banner-body { flex: 1; min-width: 0; }
.pwa-banner-title { font-size: 14px; font-weight: 600; margin-bottom: 2px; }
.pwa-banner-text { font-size: 12px; color: var(--fg-dim); }
.pwa-banner-btn {
  padding: 8px 14px;
  border-radius: 10px;
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  color: #fff;
  border: none;
  font-weight: 600;
  font-size: 13px;
  cursor: pointer;
  flex-shrink: 0;
}
.pwa-banner-close {
  background: transparent;
  border: none;
  color: var(--fg-mute);
  font-size: 20px;
  cursor: pointer;
  padding: 4px 8px;
  flex-shrink: 0;
}
@keyframes slideUp {
  from { transform: translateY(100px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
.toast {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%) translateY(-100px);
  background: rgba(20,20,28,0.95);
  border: 1px solid var(--card-border);
  padding: 10px 16px;
  border-radius: 12px;
  font-size: 14px;
  backdrop-filter: blur(20px);
  transition: transform 0.3s ease;
  z-index: 200;
}
.toast.show { transform: translateX(-50%) translateY(0); }

@media (max-width: 380px) {
  .wrap { padding: 20px 16px; }
  .actions { grid-template-columns: repeat(4, 1fr); gap: 8px; }
  .action { padding: 12px 4px; }
}
</style>
</head>
<body>
<!--CARD_JSON-->

<div class="wrap">
  <div id="avatar-slot"></div>
  <h1 id="name"></h1>
  <p class="tagline" id="position"></p>
  <p class="company" id="company"></p>
  <p class="bio" id="bio"></p>

  <!-- ГЛАВНАЯ кнопка — моментальное сохранение -->
  <div class="cta">
    <a id="save-contact" class="btn btn-primary" href="#" download>
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
        <line x1="20" y1="8" x2="20" y2="14"/>
        <line x1="23" y1="11" x2="17" y2="11"/>
      </svg>
      Сохранить контакт
    </a>
    <div class="row">
      <button class="btn btn-ghost" id="share-btn">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
        </svg>
        Поделиться
      </button>
      <button class="btn btn-ghost" id="copy-btn">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
        </svg>
        Копировать ссылку
      </button>
    </div>
  </div>

  <!-- Быстрые действия -->
  <div class="actions" id="quick-actions"></div>

  <!-- Контакты и соц.сети секции -->
  <div id="sections"></div>

  <!-- QR-код -->
  <div class="section qr-block">
    <img id="qr-img" alt="QR-код визитки">
    <p>Покажите QR — или приложите NFC-карту</p>
  </div>

  <div class="footer">
    <a href="/" target="_blank">Создай свою визитку на Connecting</a>
  </div>
</div>

<!-- PWA установка -->
<div class="pwa-banner" id="pwa-banner">
  <img src="/icons/icon-192.png" alt="">
  <div class="pwa-banner-body">
    <div class="pwa-banner-title">Сохранить на экран</div>
    <div class="pwa-banner-text">Установите визитку как приложение</div>
  </div>
  <button class="pwa-banner-btn" id="pwa-install">Установить</button>
  <button class="pwa-banner-close" id="pwa-close" aria-label="Закрыть">×</button>
</div>

<div class="toast" id="toast"></div>

<script>
(function() {
  const card = JSON.parse(document.getElementById('card-data').textContent);
  const accent = card.accent_color || '#7c5cff';
  document.documentElement.style.setProperty('--accent', accent);

  // ====== Заголовки ======
  const fullName = [card.first_name, card.last_name].filter(Boolean).join(' ');
  document.getElementById('name').textContent = fullName;
  document.title = fullName + (card.company ? ' — ' + card.company : '');

  const pos = document.getElementById('position');
  if (card.position) pos.textContent = card.position; else pos.remove();
  const comp = document.getElementById('company');
  if (card.company) comp.textContent = card.company; else comp.remove();
  const bio = document.getElementById('bio');
  if (card.bio) bio.textContent = card.bio; else bio.remove();

  // ====== Аватар ======
  const slot = document.getElementById('avatar-slot');
  if (card.avatar_url) {
    const img = document.createElement('img');
    img.src = card.avatar_url;
    img.className = 'avatar';
    img.alt = fullName;
    slot.appendChild(img);
  } else {
    const ph = document.createElement('div');
    ph.className = 'avatar avatar-placeholder';
    const letters = (card.first_name || '?').charAt(0).toUpperCase() + (card.last_name ? card.last_name.charAt(0).toUpperCase() : '');
    ph.textContent = letters;
    slot.appendChild(ph);
  }

  // ====== Кнопка "Сохранить контакт" — ключевой момент ======
  // Два пути: прямая .vcf загрузка (Android/iOS) + fallback для платформ где download не работает
  const saveBtn = document.getElementById('save-contact');
  const vcardUrl = '/' + card.slug + '/vcard';
  saveBtn.href = vcardUrl;
  saveBtn.setAttribute('download', card.slug + '.vcf');

  saveBtn.addEventListener('click', function(e) {
    // iOS PWA в standalone не умеет download — делаем window.location
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone;
    if (isStandalone) {
      e.preventDefault();
      window.location.href = vcardUrl;
    }
    showToast('Открываем контакт…');
  });

  // ====== Быстрые действия ======
  const quickActions = [];
  if (card.phone) quickActions.push({
    href: 'tel:' + card.phone.replace(/\\s/g, ''),
    label: 'Позвонить',
    icon: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>'
  });
  if (card.whatsapp) quickActions.push({
    href: 'https://wa.me/' + card.whatsapp.replace(/\\D/g, ''),
    label: 'WhatsApp',
    icon: '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>',
    target: '_blank'
  });
  if (card.telegram) quickActions.push({
    href: 'https://t.me/' + card.telegram.replace(/^@/, ''),
    label: 'Telegram',
    icon: '<path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>',
    target: '_blank'
  });
  if (card.email) quickActions.push({
    href: 'mailto:' + card.email,
    label: 'Email',
    icon: '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>'
  });

  const qa = document.getElementById('quick-actions');
  quickActions.slice(0, 4).forEach(a => {
    const el = document.createElement('a');
    el.className = 'action';
    el.href = a.href;
    if (a.target) el.target = a.target;
    el.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' + a.icon + '</svg><span>' + a.label + '</span>';
    qa.appendChild(el);
  });
  if (quickActions.length === 0) qa.remove();

  // ====== Секции с деталями ======
  function sectionBlock(title) {
    const wrap = document.createElement('div');
    wrap.className = 'section';
    const t = document.createElement('div');
    t.className = 'section-title';
    t.textContent = title;
    wrap.appendChild(t);
    return wrap;
  }
  function itemRow({ href, label, value, icon, target }) {
    const a = document.createElement('a');
    a.className = 'item';
    a.href = href;
    if (target) a.target = target;
    a.innerHTML = \`
      <div class="item-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\${icon}</svg>
      </div>
      <div class="item-body">
        <div class="item-label">\${label}</div>
        <div class="item-value"></div>
      </div>
      <div class="item-arrow">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
      </div>\`;
    a.querySelector('.item-value').textContent = value;
    return a;
  }

  const sectionsEl = document.getElementById('sections');

  // Контакты
  const contactRows = [];
  if (card.phone) contactRows.push({
    href: 'tel:' + card.phone.replace(/\\s/g, ''),
    label: 'Телефон', value: card.phone,
    icon: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>'
  });
  if (card.phone_secondary) contactRows.push({
    href: 'tel:' + card.phone_secondary.replace(/\\s/g, ''),
    label: 'Доп. телефон', value: card.phone_secondary,
    icon: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>'
  });
  if (card.email) contactRows.push({
    href: 'mailto:' + card.email,
    label: 'Email', value: card.email,
    icon: '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>'
  });
  if (card.website) contactRows.push({
    href: card.website.startsWith('http') ? card.website : 'https://' + card.website,
    label: 'Сайт', value: card.website.replace(/^https?:\\/\\//, ''),
    icon: '<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
    target: '_blank'
  });
  if (card.address) contactRows.push({
    href: card.map_url || ('https://maps.google.com/?q=' + encodeURIComponent(card.address)),
    label: 'Адрес', value: card.address,
    icon: '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
    target: '_blank'
  });
  if (contactRows.length) {
    const s = sectionBlock('Контакты');
    contactRows.forEach(r => s.appendChild(itemRow(r)));
    sectionsEl.appendChild(s);
  }

  // Соц.сети
  const socials = [];
  if (card.instagram) socials.push({
    href: 'https://instagram.com/' + card.instagram.replace(/^@/, ''),
    label: 'Instagram', value: '@' + card.instagram.replace(/^@/, ''),
    icon: '<rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>',
    target: '_blank'
  });
  if (card.telegram) socials.push({
    href: 'https://t.me/' + card.telegram.replace(/^@/, ''),
    label: 'Telegram', value: '@' + card.telegram.replace(/^@/, ''),
    icon: '<path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>',
    target: '_blank'
  });
  if (card.whatsapp) socials.push({
    href: 'https://wa.me/' + card.whatsapp.replace(/\\D/g, ''),
    label: 'WhatsApp', value: card.whatsapp,
    icon: '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>',
    target: '_blank'
  });
  if (card.linkedin) socials.push({
    href: card.linkedin.startsWith('http') ? card.linkedin : 'https://linkedin.com/in/' + card.linkedin,
    label: 'LinkedIn', value: card.linkedin.replace(/^https?:\\/\\/(www\\.)?linkedin\\.com\\/(in\\/)?/, ''),
    icon: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>',
    target: '_blank'
  });
  if (card.facebook) socials.push({
    href: card.facebook.startsWith('http') ? card.facebook : 'https://facebook.com/' + card.facebook,
    label: 'Facebook', value: card.facebook.replace(/^https?:\\/\\/(www\\.)?facebook\\.com\\//, ''),
    icon: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>',
    target: '_blank'
  });
  if (card.youtube) socials.push({
    href: card.youtube.startsWith('http') ? card.youtube : 'https://youtube.com/@' + card.youtube.replace(/^@/, ''),
    label: 'YouTube', value: '@' + card.youtube.replace(/^@/, ''),
    icon: '<path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>',
    target: '_blank'
  });
  if (card.tiktok) socials.push({
    href: 'https://tiktok.com/@' + card.tiktok.replace(/^@/, ''),
    label: 'TikTok', value: '@' + card.tiktok.replace(/^@/, ''),
    icon: '<path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>',
    target: '_blank'
  });
  if (socials.length) {
    const s = sectionBlock('Соц.сети');
    socials.forEach(r => s.appendChild(itemRow(r)));
    sectionsEl.appendChild(s);
  }

  // QR
  document.getElementById('qr-img').src = '/' + card.slug + '/qr.png';

  // ====== Toast ======
  function showToast(msg) {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => t.classList.remove('show'), 1800);
  }

  // ====== Share + Copy ======
  document.getElementById('share-btn').addEventListener('click', async () => {
    const shareData = { title: fullName, text: fullName + (card.position ? ' — ' + card.position : ''), url: window.location.href };
    if (navigator.share) {
      try { await navigator.share(shareData); } catch (e) { /* отмена */ }
    } else {
      await navigator.clipboard.writeText(window.location.href);
      showToast('Ссылка скопирована');
    }
  });
  document.getElementById('copy-btn').addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      showToast('Ссылка скопирована');
    } catch { showToast('Не удалось скопировать'); }
  });

  // ====== PWA установка ======
  let deferredPrompt = null;
  const banner = document.getElementById('pwa-banner');
  const installBtn = document.getElementById('pwa-install');
  const closeBtn = document.getElementById('pwa-close');
  const dismissKey = 'pwa-dismissed-' + card.slug;

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    if (sessionStorage.getItem(dismissKey)) return;
    setTimeout(() => banner.classList.add('show'), 1200);
  });

  installBtn.addEventListener('click', async () => {
    banner.classList.remove('show');
    if (deferredPrompt) {
      deferredPrompt.prompt();
      await deferredPrompt.userChoice;
      deferredPrompt = null;
    }
  });
  closeBtn.addEventListener('click', () => {
    banner.classList.remove('show');
    sessionStorage.setItem(dismissKey, '1');
  });

  // iOS: нет beforeinstallprompt, показываем подсказку "Поделиться → На экран Домой"
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone;
  if (isIOS && !isStandalone && !sessionStorage.getItem(dismissKey)) {
    document.querySelector('.pwa-banner-text').textContent = 'Поделиться → На экран «Домой»';
    installBtn.style.display = 'none';
    setTimeout(() => banner.classList.add('show'), 1500);
  }

  // ====== Регистрация service worker ======
  // Корневой скоуп, чтобы работал кэш для всех визиток
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
      .catch(err => console.warn('SW register failed', err));
  }

  window.showToast = showToast;
})();
</script>
</body>
</html>
`,
  index: `<!doctype html>
<html lang="ru">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="theme-color" content="#0b0b10">
<title>Connecting — онлайн-визитки для NFC</title>
<meta name="description" content="Онлайн-визитки для NFC: создай, прикрепи к карте, делись одним касанием">
<style>
* { box-sizing: border-box; }
html, body { margin: 0; padding: 0; }
body {
  font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Inter', 'Segoe UI', Roboto, sans-serif;
  background: #0b0b10; color: #fff; min-height: 100vh;
}
body::before {
  content: ''; position: fixed; inset: -50%;
  background:
    radial-gradient(40% 30% at 20% 20%, rgba(124,92,255,0.3) 0%, transparent 60%),
    radial-gradient(40% 30% at 80% 10%, rgba(91,140,255,0.25) 0%, transparent 60%);
  filter: blur(80px); z-index: -1;
}
.wrap { max-width: 900px; margin: 0 auto; padding: 40px 24px; }
nav { display: flex; justify-content: space-between; align-items: center; margin-bottom: 60px; }
.logo { display: flex; align-items: center; gap: 10px; font-size: 18px; font-weight: 700; }
.logo-dot { width: 32px; height: 32px; border-radius: 9px; background: linear-gradient(135deg, #7c5cff, #5b8cff); }
nav a { color: rgba(255,255,255,0.7); text-decoration: none; font-size: 14px; padding: 8px 16px; border-radius: 10px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.08); }
h1 { font-size: clamp(32px, 6vw, 56px); line-height: 1.05; letter-spacing: -0.02em; margin: 0 0 20px; font-weight: 800; }
h1 span { background: linear-gradient(135deg, #7c5cff, #5b8cff); -webkit-background-clip: text; background-clip: text; color: transparent; }
.lead { font-size: 18px; color: rgba(255,255,255,0.7); max-width: 620px; line-height: 1.5; margin-bottom: 30px; }
.cta { display: inline-flex; align-items: center; gap: 10px; padding: 14px 24px; border-radius: 12px; background: linear-gradient(135deg, #7c5cff, #5b8cff); color: #fff; text-decoration: none; font-weight: 600; }
.features { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 14px; margin-top: 60px; }
.feature { padding: 22px; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; }
.feature-icon { width: 40px; height: 40px; border-radius: 10px; background: linear-gradient(135deg, #7c5cff, #5b8cff); display: flex; align-items: center; justify-content: center; margin-bottom: 12px; }
.feature h3 { margin: 0 0 6px; font-size: 15px; }
.feature p { margin: 0; color: rgba(255,255,255,0.6); font-size: 13px; line-height: 1.5; }
footer { margin-top: 80px; padding-top: 30px; border-top: 1px solid rgba(255,255,255,0.08); color: rgba(255,255,255,0.4); font-size: 13px; text-align: center; }
</style>
</head>
<body>
<div class="wrap">
  <nav>
    <div class="logo"><div class="logo-dot"></div>Connecting</div>
    <a href="/admin">Админка →</a>
  </nav>

  <h1>Онлайн-визитка<br>одним <span>касанием</span></h1>
  <p class="lead">Прикрепи ссылку к NFC-карте, и любой сможет сохранить твой контакт в телефон за секунду. Без приложений, без регистрации.</p>
  <a href="/admin" class="cta">
    Создать визитку
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
  </a>

  <div class="features">
    <div class="feature">
      <div class="feature-icon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
      </div>
      <h3>Моментальное сохранение</h3>
      <p>Одна кнопка — контакт у клиента в телефоне. vCard 3.0, работает в iOS и Android.</p>
    </div>
    <div class="feature">
      <div class="feature-icon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
      </div>
      <h3>NFC и QR</h3>
      <p>Запиши ссылку в NFC-метку или распечатай QR-код. Работает везде.</p>
    </div>
    <div class="feature">
      <div class="feature-icon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h6v6H9z"/></svg>
      </div>
      <h3>PWA на экране</h3>
      <p>Клиент может установить визитку как приложение — всегда под рукой.</p>
    </div>
    <div class="feature">
      <div class="feature-icon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M9 17V9"/><path d="M13 17V5"/><path d="M17 17v-3"/></svg>
      </div>
      <h3>Аналитика</h3>
      <p>Считаем просмотры и сохранения — узнаешь, насколько работает твоя карта.</p>
    </div>
  </div>

  <footer>© 2026 Connecting</footer>
</div>
</body>
</html>
`,
  notFound: `<!doctype html>
<html lang="ru">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="theme-color" content="#0b0b10">
<title>Визитка не найдена — Connecting</title>
<style>
* { box-sizing: border-box; }
html, body { margin: 0; padding: 0; min-height: 100vh; }
body {
  font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Inter', 'Segoe UI', Roboto, sans-serif;
  background: #0b0b10; color: #fff;
  display: flex; align-items: center; justify-content: center;
  min-height: 100vh; padding: 20px;
  position: relative; overflow: hidden;
}
body::before {
  content: ''; position: absolute; inset: -50%;
  background: radial-gradient(40% 30% at 50% 40%, rgba(124,92,255,0.2) 0%, transparent 60%);
  filter: blur(60px); z-index: 0;
}
.box { position: relative; z-index: 1; text-align: center; max-width: 420px; }
.icon { font-size: 72px; margin-bottom: 12px; opacity: 0.3; }
h1 { font-size: 24px; margin: 0 0 10px; }
p { color: rgba(255,255,255,0.6); line-height: 1.5; margin-bottom: 20px; }
.btn {
  display: inline-block;
  padding: 12px 22px;
  background: linear-gradient(135deg, #7c5cff, #5b8cff);
  color: #fff; text-decoration: none; border-radius: 10px;
  font-weight: 600; font-size: 14px;
}
</style>
</head>
<body>
<div class="box">
  <div class="icon">∅</div>
  <h1>Визитка не найдена</h1>
  <p>Возможно, ссылка неверная или визитка была удалена.</p>
  <a href="/" class="btn">На главную</a>
</div>
</body>
</html>
`,
};
