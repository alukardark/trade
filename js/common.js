import {event, toggleClass} from './functions.js';
import './slider.js';

new simpleParallax(document.querySelectorAll('.parallax'), {
    delay: 0,
    orientation: 'down',
    scale: 1.5,
    overflow: true,
});

event('.header .burger', 'click', function (e) {
    e.preventDefault();
    toggleClass(this, 'active');
    if (window.matchMedia("(max-width: 949px)").matches) {
        toggleClass(document.querySelector('html'), 'overflow-hide');
        toggleClass(document.body, 'overflow-hide');
    }
    toggleClass(document.querySelector('.header__mobile-menu'), 'vis');


    document.querySelectorAll('.overlayout').forEach((el) => {
        toggleClass(el, 'active');
    });
});

window.addEventListener('resize', function () {
    if (document.querySelector('.header .burger').classList.contains('active')) {
        document.querySelector('.header .burger').click();
    }
}, true);


if (document.querySelector('.header')) {
    document.addEventListener('click', function (event) {
        let menu = document.querySelector('.header__mobile-menu');
        let menuBtn = document.querySelector('.header');
        let isClickInside = menuBtn.contains(event.target);
        if (!isClickInside && menu.classList.contains('vis')) {
            menuBtn.querySelector('.burger').click();
        }
    });
}

event('.header__lng', 'click', function (e) {
    toggleClass(document.querySelector('.header__lng-list'), 'active');
});


if (document.querySelector('.header__lng')) {
    document.addEventListener('click', function (event) {
        let menu = document.querySelector('.header__lng-list');
        let menuBtn = document.querySelector('.header__lng');
        let isClickInside = menuBtn.contains(event.target);
        if (!isClickInside && menu.classList.contains('vis')) {
            menuBtn.querySelector('.header__lng').click();
        }
    });
}


// // window.matchMedia("(max-width: 949px)").matches ||
// window.addEventListener('resize', function () {
//     if (document.querySelector('burger').classList.contains('active')) {
//         document.querySelector('html').classList.add('overflow-hide');
//         document.body.classList.add('overflow-hide');
//
//         document.querySelector('.overlayout').classList.add('active');
//
//     } else {
//         document.querySelector('html').classList.remove('overflow-hide');
//         document.body.classList.remove('overflow-hide');
//         document.querySelector('.overlayout').classList.remove('active');
//
//     }
// }, true);