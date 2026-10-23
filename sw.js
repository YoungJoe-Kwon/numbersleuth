/* 자동 생성: 빌드마다 version이 바뀌면 새 캐시로 교체된다 */
const CACHE = 'rf-4ce38033ef';
const FILES = ["./","index.html","assets/index-CnvzHOV3.js","assets/App-BjAVTGqY.js","assets/admob-CfGt6e_g.js","assets/analytics-Ca0-IWnb.js","assets/config-BOczGFzY.js","assets/dist-BB0IEui2.js","assets/esm-3aVaGtpU.js","assets/esm-62P7ZIzz.js","assets/esm-B2uzSooA.js","assets/esm-B6rasBvJ.js","assets/esm-BNVSqxxy.js","assets/esm-CUm2-ZtJ.js","assets/esm-DOrxVcT-.js","assets/esm-i6q-SqOV.js","assets/esm-v_0OoYbo.js","assets/notify-BfhHx1vu.js","assets/persist-CYRHm6Iv.js","assets/purchases-DckWjFz8.js","assets/pwa-Bvfzk4Xe.js","assets/rolldown-runtime-DK3Fl9T5.js","assets/settings-DcM6oHrr.js","assets/shareCard-DlSGNikn.js","assets/web-BL4noIW7.js","assets/web-BWuzSnyz.js","assets/web-CbHh8wY5.js","assets/web-CoZs6jo9.js","assets/web-D-q-hSuD.js","assets/web-D7cAVL5v.js","assets/web-DHZkRgBo.js","assets/web-DYoGtAlX.js","assets/web-TqCa9Vml.js","assets/index-6f1sydWQ.css","assets/levels-CIwZ33Hn.json","icons/apple-touch-icon.png","icons/icon-192.png","icons/icon-512.png","icons/icon-maskable-512.png","icons/icon.svg","manifest.webmanifest","og.png","robots.txt"];
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES.map((f) => new URL(f, self.registration.scope).href))).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k.startsWith('rf-') && k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  if (req.mode === 'navigate') {
    // 문서는 네트워크 우선(새 버전을 빨리 받도록), 오프라인이면 캐시된 앱 셸
    e.respondWith(fetch(req).catch(() => caches.match(new URL('index.html', self.registration.scope).href, { ignoreVary: true })));
    return;
  }
  e.respondWith(caches.match(req, { ignoreVary: true }).then((hit) => hit || fetch(req).then((res) => {
    if (res.ok) { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(req, copy)); }
    return res;
  })));
});
