const CACHE_NAME = 'xi-supply-cache-v1';
const urlsToCache = [
  'index.html',
  'manifest.json',
  'icon192x192.png',
  'icon512x512.png',
  'CamisetaBocaJuniorsBetsson.png',
  'CamisetaRiverPlateRetro.jpeg',
  'CamisetaArgentinoRetro.jpeg',
  'CamisetaRacingClubRCA.jpeg',
  'BocaJuniorsRetro2009.jpeg',
  'BarcelonaTravisScott.jpeg',
  'BayernMunich.jpeg',
  'ManchesterUnited.jpeg',
  'Arsenal.jpeg',
  'Chelsea.jpeg',
  'InterdeMilan.jpeg',
  'CamisetaSeleccionMexicoBlack.jpeg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});