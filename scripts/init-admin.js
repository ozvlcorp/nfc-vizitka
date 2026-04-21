// Создаёт администратора из .env при первом запуске
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env') });
const bcrypt = require('bcryptjs');
const db = require('../db');

const login = process.env.ADMIN_LOGIN || 'admin';
const password = process.env.ADMIN_PASSWORD || 'admin123';

const existing = db.prepare('SELECT id FROM admins WHERE login = ?').get(login);
if (existing) {
  console.log(`Администратор "${login}" уже существует. Пропускаю.`);
  process.exit(0);
}

const hash = bcrypt.hashSync(password, 10);
db.prepare('INSERT INTO admins (login, password_hash) VALUES (?, ?)').run(login, hash);
console.log(`Администратор создан: логин="${login}", пароль="${password}"`);
console.log('ВАЖНО: смените пароль после первого входа и уберите его из .env!');
