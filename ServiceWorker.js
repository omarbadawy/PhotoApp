self.addEventListener('install', e => {
    console.log('[service worker]Installing service', e);
});

self.addEventListener('activate', e => {
    console.log('[service worker]activating service', e);
    return self.clients.claim();
});

self.addEventListener('fetch', e => {
    console.log('[service worker] Fetching somthing', e);
    e.respondWith(fetch(e.request));
});