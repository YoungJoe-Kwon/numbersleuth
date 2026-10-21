/* 자동 생성: 빌드마다 version이 바뀌면 새 캐시로 교체된다 */
const CACHE = 'rf-a737c0b1b9';
const FILES = ["./","index.html","assets/index-DUFAaoH7.js","assets/App-B7Eduacl.js","assets/admob-DlBY4ICh.js","assets/analytics-9S2qffnn.js","assets/config-BOczGFzY.js","assets/dist-BB0IEui2.js","assets/esm-BEplhhLw.js","assets/esm-C1SL1zqp.js","assets/esm-C2xnpCLp.js","assets/esm-CZgdJdrb.js","assets/esm-DCNXACzr.js","assets/esm-DVjQJ-c5.js","assets/esm-DpcvyFtA.js","assets/esm-KTL4BiU5.js","assets/esm-jr_pvVXy.js","assets/notify-kJbe8Axy.js","assets/persist-Bw-xKifJ.js","assets/purchases-CUAg7GfC.js","assets/pwa-DKO1cIWw.js","assets/rolldown-runtime-DK3Fl9T5.js","assets/settings-ChJIc6Kb.js","assets/shareCard-CBseW-3E.js","assets/web-BIBXqvdN.js","assets/web-BL4noIW7.js","assets/web-CgRRtzMa.js","assets/web-D-q-hSuD.js","assets/web-D7cAVL5v.js","assets/web-DHZkRgBo.js","assets/web-DYoGtAlX.js","assets/web-TqCa9Vml.js","assets/web-sv8C46zJ.js","assets/index-ZVhSP0uB.css","assets/levels-CIwZ33Hn.json","icons/apple-touch-icon.png","icons/icon-192.png","icons/icon-512.png","icons/icon-maskable-512.png","icons/icon.svg","manifest.webmanifest","og.png","robots.txt"];
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
