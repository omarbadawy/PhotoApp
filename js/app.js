//var deferredPrompt;

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./ServiceWorker.js')
    .then(function() {
        console.log('Service Worker regesterd');
    });
}

window.addEventListener('beforeinstallprompt', function(event) {
    console.log('beforeinstallprompt fired');
    event.preventDefault();
    //deferredPrompt = event;
    event.prompt();
    event.userChoice.then(function(choiceResult) {
        console.log(choiceResult.outcome);

        if (choiceResult.outcome === 'dismissed') {
            console.log('User cancelled');
        } else {
            console.log('added to the home screen');
        }
    });
    return false;
});