// Bump this version when changing the offline shell. Online requests always
// fetch fresh content, so edits to index.html and assets are not hidden by cache.
const CACHE_PREFIX = `savannah-oasis:${self.registration.scope}:`;
const CACHE_NAME = `${CACHE_PREFIX}v1`;
const appURL = path => new URL(path, self.registration.scope).href;
const SHELL = [
  './index.html', './pwa.js', './manifest.webmanifest', './icons/flower.svg',
  './icons/favicon-32.png', './icons/apple-touch-icon.png',
  './icons/icon-192.png', './icons/icon-512.png', './icons/maskable-512.png'
].map(appURL);

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(SHELL)));
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const names = await caches.keys();
    await Promise.all(names.filter(name => name.startsWith(CACHE_PREFIX) && name !== CACHE_NAME)
      .map(name => caches.delete(name)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', event => {
  const request = event.request;
  // Audio range requests must reach the server unchanged. We do not download
  // the entire music library, or the unused models, just to install the app.
  if (request.method !== 'GET' || request.headers.has('range')) return;
  const url = new URL(request.url);
  const withinApp = url.href.startsWith(self.registration.scope);
  const threeModule = url.origin === 'https://cdn.jsdelivr.net'
    && url.pathname.startsWith('/npm/three@0.170.0/');
  if ((!withinApp && !threeModule) || /\.mp3$/i.test(url.pathname)) return;

  const response = (async () => {
    try {
      return await fetch(request);
    } catch (error) {
      const cache = await caches.open(CACHE_NAME);
      const cached = await cache.match(request);
      if (cached) return cached;
      if (request.mode === 'navigate') {
        const shell = await cache.match(appURL('./index.html'));
        if (shell) return shell;
      }
      throw error;
    }
  })();

  event.respondWith(response);
  event.waitUntil(response.then(async result => {
    if (result.status !== 200 || result.type === 'opaque') return;
    const copy = result.clone();
    const cache = await caches.open(CACHE_NAME);
    await cache.put(request, copy);
  }).catch(() => {
    // A full cache or interrupted connection must never stop the live app.
  }));
});
