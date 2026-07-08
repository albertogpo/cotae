const CACHE_NAME = 'cotae-cache-v1';
const APP_SHELL = [
  './',
  './index.html',
  './manifest.json',
  './icons/cotae-icon-192.png',
  './icons/cotae-icon-512.png',
  './icons/cotae-icon-180.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // Nunca fazer cache de chamadas à API do Dropbox -- sempre rede.
  if (url.hostname.includes('dropboxapi.com')) {
    event.respondWith(fetch(event.request));
    return;
  }

  // App shell: cache-first, com atualização em segundo plano.
  event.respondWith(
    caches.match(event.request).then(cached => {
      const network = fetch(event.request)
        .then(response => {
          if (response && response.ok) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
          }
          return response;
        })
        .catch(() => cached);
      return cached || network;
    })
  );
});
