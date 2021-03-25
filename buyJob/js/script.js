const enterBtn = document.querySelectorAll('.nav__list-btn');
const enterPopup = document.querySelector('.enter');
const registerPopup = document.querySelector('.register');
const popupCloses = document.querySelectorAll('.popup__close');
const regBtn = document.querySelector('#reg__open');
const burger = document.querySelector('.nav__burger');
const menu = document.querySelector('.menu');

burger.addEventListener('click', ()=>{
    window.scrollTo(pageXOffset, 0);
    document.body.classList.toggle('overflow-h');
    burger.classList.toggle('nav__burger-active');
    menu.classList.toggle('menu-active');
});

enterBtn.forEach(item=>{
    item.addEventListener('click', e=>{
        e.preventDefault();
        enterPopup.classList.add('popup-active');
        document.body.style.overflow = 'hidden';
    });
});

popupCloses.forEach(item=>{
    item.addEventListener('click', e=>{
        e.preventDefault();
        item.parentElement.parentElement.parentElement.classList.remove('popup-active');
        document.body.style.overflow = 'visible';
    });
});

regBtn.addEventListener('click', e=>{
    e.preventDefault();
    registerPopup.classList.add('popup-active');
    setTimeout(()=>regBtn.parentElement.parentElement.parentElement.parentElement.classList.remove('popup-active'), 500);
});