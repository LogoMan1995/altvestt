const burgerBtn = document.querySelector('.nav__burger-btn');
const navLinks = document.querySelector('.nav__links');
const header = document.querySelector('.header');


function toggleMenu() {
    navLinks.classList.toggle('open');
    header.classList.toggle('open');
}

burgerBtn.addEventListener('click', toggleMenu);
