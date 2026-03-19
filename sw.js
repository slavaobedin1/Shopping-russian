const CACHE_NAME = 'shopping-ru-v1';
const urlsToCache = [
  '/Shopping-russian/',
  '/Shopping-russian/index.html',
  '/Shopping-russian/manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
