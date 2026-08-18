const CACHE_NAME = 'trochoivui-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './games/index.html',
  './games/60_thcs_thien_van_hoc/index.html',
  './games/60_thcs_thien_van_hoc/game_01_Bat_dau.html'
];

// Install - cache core assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

// Activate - clean old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

// Fetch - Stale-While-Revalidate strategy
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.open(CACHE_NAME).then(cache =>
      cache.match(event.request).then(cached => {
        const fetchPromise = fetch(event.request)
          .then(response => {
            if (response.ok) cache.put(event.request, response.clone());
            return response;
          });
        return cached || fetchPromise;
      })
    )
  );
});
