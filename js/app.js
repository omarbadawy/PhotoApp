var deferredPrompt;

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./ServiceWorker.js')
    .then(function() {
        console.log('Service Worker regesterd');
    });
}

window.addEventListener('beforeinstallprompt', function(event) {
    console.log('beforeinstallprompt fired');
    event.preventDefault();
    deferredPrompt = event;
    return false;
});