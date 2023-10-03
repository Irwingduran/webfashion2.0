const header = document.querySelector('.main-header');

window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    if (scrollPos > 10) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
})

'use strict'

const grande = document.querySelector('.grande')
const punto = document.querySelectorAll('.punto')