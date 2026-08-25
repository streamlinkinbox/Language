/* Hikaya service worker
   v2 — network-first for app files (so updates show immediately),
   cache fallback for offline reading. Media stays cache-friendly. */
const CACHE = "hikaya-v19";
const CORE = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./data/stories.js",
  "./manifest.json"
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  const url = new URL(e.request.url);
  const isMedia = /\.(jpg|jpeg|png|mp3|woff2?)$/i.test(url.pathname) || url.hostname.includes("fonts.g");

  if (isMedia) {
    // cache-first for images/audio/fonts (they never change once generated)
    e.respondWith(
      caches.match(e.request).then((hit) => hit || fetch(e.request).then((res) => {
        if (res.ok) {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(e.request, copy));
        }
        return res;
      }))
    );
  } else {
    // network-first for HTML/CSS/JS so updates always arrive
    e.respondWith(
      fetch(e.request).then((res) => {
        if (res.ok && url.origin === self.location.origin) {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(e.request, copy));
        }
        return res;
      }).catch(() => caches.match(e.request))
    );
  }
});
