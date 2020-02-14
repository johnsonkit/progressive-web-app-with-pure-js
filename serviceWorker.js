const staticDevWinnie = "dev-winnie-site-v1"
const DOMAIN = 'https://johnsonkit.github.io/progressive-web-app-with-pure-js';
const assets = [
  `${DOMAIN}/`,
  `${DOMAIN}/index.html`,
  `${DOMAIN}/css/style.css`,
  `${DOMAIN}/js/app.js`,
  `${DOMAIN}/images/winnie-the-pooh_01.png`,
  `${DOMAIN}/images/winnie-the-pooh_02.png`,
  `${DOMAIN}/images/winnie-the-pooh_03.png`,
  `${DOMAIN}/images/winnie-the-pooh_04.png`,
  `${DOMAIN}/images/winnie-the-pooh_05.jpg`,
  `${DOMAIN}/images/winnie-the-pooh_06.jpg`,
  `${DOMAIN}/images/winnie-the-pooh_07.jpg`,
  `${DOMAIN}/images/winnie-the-pooh_08.jpg`,
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevWinnie).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});