const openSideBar = () => {
    document.querySelector('.side-bar').style.transform = 'translateX(0)';
    document.querySelector('.back-drop').style.display = 'block';
};

const closeSideBar = () => {
    document.querySelector('.back-drop').style.display = 'none';
    document.querySelector('.side-bar').style.transform = 'translateX(-250px)';
};



// aligning the popup due to the nav height

const navHeight = document.querySelector('nav').clientHeight;



// envent listeners

document.querySelector('.nav__side-box').addEventListener('click', openSideBar);

document.querySelector('.back-drop').addEventListener('click', closeSideBar);
