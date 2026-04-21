// Connecting Service Worker — сетевая стратегия "сеть с кэшем на fallback"
const CACHE = 'connecting-v1';
const CORE = ['/icons/icon-192.png', '/icons/icon-512.png'];

self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE).catch(() => {})));
});

self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);

  // Не кешируем API, vCard, логин, админку
  if (url.pathname.startsWith('/api/') ||
      url.pathname.endsWith('/vcard') ||
      url.pathname.endsWith('/qr.png') ||
      url.pathname === '/login' ||
      url.pathname === '/admin' ||
      url.pathname === '/logout') {
    return;
  }

  // Стратегия: сеть сначала, кэш как fallback
  e.respondWith((async () => {
    try {
      const fresh = await fetch(req);
      if (fresh && fresh.status === 200 && url.origin === self.location.origin) {
        const clone = fresh.clone();
        caches.open(CACHE).then(c => c.put(req, clone)).catch(() => {});
      }
      return fresh;
    } catch (err) {
      const cached = await caches.match(req);
      if (cached) return cached;
      // Для навигационных запросов — стартовая страница из кэша
      if (req.mode === 'navigate') {
        const any = await caches.match('/');
        if (any) return any;
      }
      throw err;
    }
  })());
});
