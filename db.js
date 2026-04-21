const { createClient } = require('@libsql/client/web');
require('dotenv').config();

const url = process.env.TURSO_DATABASE_URL;
const authToken = process.env.TURSO_AUTH_TOKEN;

if (!url) {
  throw new Error('[DB] TURSO_DATABASE_URL is not set. Add it to Netlify environment variables.');
}

const client = createClient({ url, authToken });

/**
 * Initialize Cloud Database tables
 */
async function initDb() {
  console.log('[DB] Initializing tables on', url || 'local file');
  
  try {
    // Admins table
    await client.execute(`
      CREATE TABLE IF NOT EXISTS admins (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        login TEXT UNIQUE NOT NULL,
        password_hash TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );
    `);

    // Cards table
    await client.execute(`
      CREATE TABLE IF NOT EXISTS cards (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        slug TEXT UNIQUE NOT NULL,
        first_name TEXT NOT NULL,
        last_name TEXT,
        position TEXT,
        company TEXT,
        bio TEXT,
        phone TEXT,
        phone_secondary TEXT,
        email TEXT,
        website TEXT,
        address TEXT,
        map_url TEXT,
        instagram TEXT,
        telegram TEXT,
        whatsapp TEXT,
        linkedin TEXT,
        facebook TEXT,
        youtube TEXT,
        tiktok TEXT,
        avatar_url TEXT,
        accent_color TEXT DEFAULT '#7c5cff',
        theme TEXT DEFAULT 'dark',
        views INTEGER DEFAULT 0,
        saves INTEGER DEFAULT 0,
        is_active INTEGER DEFAULT 1,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );
    `);

    // Index
    await client.execute(`CREATE INDEX IF NOT EXISTS idx_cards_slug ON cards(slug);`);
    
    console.log('[DB] Initialization complete');
  } catch (err) {
    console.error('[DB] Initialization error:', err);
    if (err.rawMessage) console.error('[DB] Raw Message:', err.rawMessage);
    throw err;
  }
}

module.exports = {
  client,
  initDb
};
