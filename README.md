# Connecting — онлайн-визитки для NFC

MVP платформы, где ты создаёшь визитку через админку, а клиент открывает её по ссылке (например, `connecting.uz/jamshid`) с NFC-карты или QR-кода и моментально сохраняет твой контакт в телефон.

## Что внутри

- **Node.js + Express + SQLite** — один процесс, без отдельной БД
- **Админка** `/admin` — список, создание, редактирование, удаление визиток
- **Страница визитки** `/:slug` — тёмный минимализм, быстрые действия, PWA
- **Моментальный vCard** — `/:slug/vcard` отдаёт `.vcf` 3.0 (работает в iOS и Android)
- **PWA** — динамический manifest на каждую визитку, Service Worker, установка на экран
- **QR-код** — `/:slug/qr.png` (генерируется на лету)
- **Аналитика** — просмотры и количество сохранений контакта

## Быстрый старт

```bash
cd "D:\Claude проекты\Визитка"
copy .env.example .env    # поменяй SESSION_SECRET и пароль админа!
npm install
npm start
```

Открой http://localhost:3000

- Лендинг: `/`
- Админка: `/admin` (логин/пароль из `.env`, по умолчанию `admin` / `admin123`)
- Визитка: `/jamshid` (создай через админку)

## Иконки PWA

По умолчанию работает SVG-иконка — этого достаточно для Chrome/Android. Для iOS/Safari и более стабильной установки сгенерируй PNG:

```bash
npm install --save-dev sharp
node scripts/build-icons.js
```

Создаст `public/icons/icon-192.png` и `icon-512.png` из `icon.svg`.

## Настройка для продакшена

Отредактируй `.env`:

```
PORT=3000
SESSION_SECRET=<длинная случайная строка>
ADMIN_LOGIN=<твой логин>
ADMIN_PASSWORD=<твой пароль>
BASE_URL=https://connecting.uz
```

Поставь за reverse proxy (nginx/Caddy) и настрой HTTPS — PWA работает только по HTTPS (кроме localhost).

### Пример nginx

```nginx
server {
  listen 443 ssl http2;
  server_name connecting.uz;

  ssl_certificate /etc/letsencrypt/live/connecting.uz/fullchain.pem;
  ssl_certificate_key /etc/letsencrypt/live/connecting.uz/privkey.pem;

  location / {
    proxy_pass http://127.0.0.1:3000;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
  }
}
```

### systemd

```ini
[Unit]
Description=Connecting
After=network.target

[Service]
WorkingDirectory=/opt/connecting
ExecStart=/usr/bin/node server.js
Restart=always
User=www-data
Environment=NODE_ENV=production

[Install]
WantedBy=multi-user.target
```

## Запись на NFC-карту

1. В админке выбери визитку — там есть QR-код и кнопка «Скопировать ссылку»
2. Установи на телефон приложение `NFC Tools` (iOS/Android)
3. Записать → Добавить запись → URL → `https://connecting.uz/jamshid`
4. Приложить к NFC-карте — готово

## Структура проекта

```
Визитка/
├── server.js              # Express, роуты, логика
├── db.js                  # SQLite схема
├── vcard.js               # Генерация vCard 3.0
├── package.json
├── .env.example
├── scripts/
│   ├── init-admin.js      # ручная инициализация админа
│   └── build-icons.js     # SVG → PNG (опционально)
├── views/
│   ├── index.html         # Лендинг
│   ├── login.html         # Вход в админку
│   ├── admin.html         # Админка (SPA)
│   ├── card.html          # Страница визитки
│   └── 404.html
├── public/
│   ├── manifest.json      # PWA manifest по умолчанию
│   ├── sw.js              # Service Worker
│   ├── icons/
│   │   └── icon.svg       # Исходная иконка
│   └── uploads/           # Загруженные аватарки
└── data/
    └── connecting.db      # SQLite (создаётся автоматически)
```

## Как работает "моментальное сохранение"

1. Пользователь открывает `/jamshid` и жмёт «Сохранить контакт»
2. Браузер скачивает `.vcf` файл (vCard 3.0)
3. iOS/Android автоматически открывают карточку контакта с кнопкой «Добавить»
4. Счётчик `saves` увеличивается на сервере

Если визитка установлена как PWA (standalone), прямая `download`-ссылка не всегда работает — мы используем `window.location.href` как fallback.

## Безопасность

- Пароль админа захэширован через bcrypt (10 rounds)
- Сессия в http-only cookie на 7 дней
- `SESSION_SECRET` должен быть длинным и случайным в продакшене
- Загружаются только изображения ≤ 5MB
- Slug ограничен символами `[a-z0-9_-]` и не может совпасть с системными путями (`admin`, `api`, …)

## Лицензия

MIT — делай что хочешь.
