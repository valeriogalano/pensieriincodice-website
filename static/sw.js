const CACHE_NAME = 'pic-v1';
const AUDIO_CACHE = 'pic-audio-v1';

const STATIC_ASSETS = [
  '/',
  '/manifest.json',
  '/fonts/fonts.css',
];

// Install: pre-cache static assets
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(STATIC_ASSETS);
    }).then(function() {
      return self.skipWaiting();
    })
  );
});

// Activate: remove old caches
self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(k) { return k !== CACHE_NAME && k !== AUDIO_CACHE; })
            .map(function(k) { return caches.delete(k); })
      );
    }).then(function() {
      return self.clients.claim();
    })
  );
});

self.addEventListener('fetch', function(e) {
  var url = e.request.url;

  // Audio files: Network-First with cache fallback
  if (e.request.destination === 'audio' || /\.(mp3|ogg|m4a|opus|aac)(\?|$)/i.test(url)) {
    e.respondWith(
      fetch(e.request).then(function(response) {
        if (response.ok) {
          var clone = response.clone();
          caches.open(AUDIO_CACHE).then(function(cache) { cache.put(e.request, clone); });
        }
        return response;
      }).catch(function() {
        return caches.match(e.request);
      })
    );
    return;
  }

  // Navigation requests: Network-First
  if (e.request.mode === 'navigate') {
    e.respondWith(
      fetch(e.request).catch(function() {
        return caches.match(e.request).then(function(r) { return r || caches.match('/'); });
      })
    );
    return;
  }

  // Static assets (CSS, JS, fonts, images): Cache-First
  e.respondWith(
    caches.match(e.request).then(function(cached) {
      if (cached) return cached;
      return fetch(e.request).then(function(response) {
        if (response.ok && e.request.method === 'GET') {
          var clone = response.clone();
          caches.open(CACHE_NAME).then(function(cache) { cache.put(e.request, clone); });
        }
        return response;
      });
    })
  );
});

// Message: cache a specific audio URL on demand
self.addEventListener('message', function(e) {
  if (e.data && e.data.type === 'CACHE_AUDIO' && e.data.url) {
    caches.open(AUDIO_CACHE).then(function(cache) {
      cache.add(e.data.url).catch(function() {});
    });
  }
});
