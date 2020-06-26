import {event, toggleClass} from "./functions.js";

//header-burger
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
            menuBtn.querySelector('.header .burger').click();
        }
    });
}




//footer-burger
event('.footer .burger', 'click', function (e) {
    e.preventDefault();
    toggleClass(this, 'active');
    if (window.matchMedia("(max-width: 949px)").matches) {
        // toggleClass(document.querySelector('html'), 'overflow-hide');
        // toggleClass(document.body, 'overflow-hide');
    }
    toggleClass(document.querySelector('.footer__mobile-menu'), 'vis');

    document.querySelectorAll('.overlayout').forEach((el) => {
        toggleClass(el, 'active');
    });
});

window.addEventListener('resize', function () {
    if (document.querySelector('.footer .burger').classList.contains('active')) {
        document.querySelector('.footer .burger').click();
    }
}, true);

if (document.querySelector('.footer')) {
    document.addEventListener('click', function (event) {
        let menu = document.querySelector('.footer__mobile-menu');
        let menuBtn = document.querySelector('.footer');
        let isClickInside = menuBtn.contains(event.target);
        if (!isClickInside && menu.classList.contains('vis')) {
            menuBtn.querySelector('.footer .burger').click();
        }
    });
}

