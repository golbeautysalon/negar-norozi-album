const CACHE="negar-norozi-approved-ui-v2";
const ASSETS=["./", "./index.html", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png", "./images/gol-cube.gif", "./images/cover.jpg", "./images/page01.jpg", "./images/page02.jpg", "./images/page03.jpg", "./images/page04.jpg", "./images/page05.jpg", "./images/page06.jpg", "./images/page07.jpg", "./images/page08.jpg", "./images/page09.jpg", "./images/blank.jpg", "./images/last-logo.jpg"];
self.addEventListener("install",e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))));
self.addEventListener("fetch",e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
