const burger = document.querySelector('.nav__burger');
const header = document.querySelector('.header');

burger.addEventListener('click', ()=>{
    document.body.classList.toggle('overflow-h');
    burger.classList.toggle('nav__burger-active');
    header.classList.toggle('header-active');
});