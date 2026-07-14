const CACHE_NAME = 'cotae-public-cache-v1';
const APP_SHELL = [
  './',
  './index.html',
  './manifest.json',
  './privacidade.html',
  './icons/cotae-icon-192.png',
  './icons/cotae-icon-512.png',
  './icons/cotae-icon-32.png'
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

  // Só cuida do app shell, do mesmo domínio. Qualquer coisa de outro
  // domínio (Firebase Auth, Firestore, Google, GoatCounter, Google Fonts)
  // passa direto pra rede, sem cache nem interferência -- login e
  // sincronização não podem depender do service worker.
  if (url.origin !== self.location.origin){
    return; // deixa o navegador tratar normalmente
  }

  event.respondWith(
    caches.match(event.request).then(cached => {
      const network = fetch(event.request)
        .then(response => {
          if (response && response.ok){
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
