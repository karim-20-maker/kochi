/* Offline shell + stale-while-revalidate for CDN assets. Bump VERSION on each release. */
const VERSION = "kochi-v14";
const SHELL = ["./", "index.html", "style.css", "app.js", "foods.js", "firebase-config.js", "manifest.webmanifest", "icons/icon-192.png", "icons/icon-512.png"];
const CDN = ["www.gstatic.com", "fonts.googleapis.com", "fonts.gstatic.com"];
self.addEventListener("install", e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin === location.origin) {
    // network first so updates show up, cache as offline fallback
    e.respondWith(fetch(req).then(r => { const copy = r.clone(); caches.open(VERSION).then(c => c.put(req, copy)); return r; }).catch(() => caches.match(req).then(m => m || caches.match("index.html"))));
  } else if (CDN.indexOf(url.hostname) >= 0) {
    e.respondWith(caches.open(VERSION).then(c => c.match(req).then(m => { const net = fetch(req).then(r => { c.put(req, r.clone()); return r; }).catch(() => m); return m || net; })));
  }
});
