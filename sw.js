self.addEventListener('install', (event) => {
console.log('Service Worker instalat.');
});

self.addEventListener('fetch', (event) => {
// Dacă telefonul nu are internet, verifică dacă melodia există deja în Cache
event.respondWith(
caches.match(event.request).then((response) => {
return response || fetch(event.request);
})
);
});