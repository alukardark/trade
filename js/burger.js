import {event, toggleClass} from "./functions.js";

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



    if(document.querySelector('.header__lng').classList.contains('active')){
    }


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
