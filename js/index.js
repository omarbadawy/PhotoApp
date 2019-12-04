const openSideBar = () => {
    document.querySelector('.side-bar').style.transform = 'translateX(0)';
    document.querySelector('.back-drop').style.display = 'block';
};

const closeSideBar = () => {
    document.querySelector('.back-drop').style.display = 'none';
    document.querySelector('.side-bar').style.transform = 'translateX(-250px)';
};

const openPopup = () => {
    document.querySelector('.share-image__container').classList.remove('share-image__container--hidden');
    document.querySelector('.share-image__container').classList.add('share-image__container--visible');
    document.body.style.overflow = 'hidden';

    if (deferredPrompt) {
        deferredPrompt.prompt();

        deferredPrompt.userChoice.then(function(choiceResult) {
            console.log(choiceResult.outcome);

            if (choiceResult.outcome === 'dismissed') {
                console.log('User cancelled');
            } else {
                console.log('added to the home screen');
            }
        });

        deferredPrompt = null;
    }
};

const closePopup = () => {
    document.querySelector('.share-image__container').classList.remove('share-image__container--visible');
    document.querySelector('.share-image__container').classList.add('share-image__container--hidden');
    document.body.style.overflow = 'auto';
};



// aligning the popup due to the nav height

const navHeight = document.querySelector('nav').clientHeight;
document.querySelector('.share-image__container').style.top = navHeight + 'px';



// envent listeners

document.querySelector('.nav__side-box').addEventListener('click', openSideBar);

document.querySelector('.back-drop').addEventListener('click', closeSideBar);

document.querySelector('.add-photo').addEventListener('click', openPopup);

document.querySelector('.cancel-photo').addEventListener('click', closePopup);

