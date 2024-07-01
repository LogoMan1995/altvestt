document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const navLinks = document.querySelector('.nav__links');

    menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('open');
            menuBtn.classList.toggle('open');
        });
});
