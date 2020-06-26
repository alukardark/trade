import {event, toggleClass} from "./functions.js";
event('.header__lng', 'click', function (e) {
    toggleClass(this, 'active');

    if(document.querySelector('.header .burger').classList.contains('active')){
        document.querySelector('.header .burger').click();
        document.querySelector('.header__lng').click();
    }
});


if (document.querySelector('.header__profile .header__lng')) {
    document.addEventListener('click', function (event) {
        let menu = document.querySelector('.header__profile .header__lng');
        let menuBtn = document.querySelector('.header__profile .header__lng');
        let isClickInside = menu.contains(event.target);
        if (!isClickInside && menuBtn.classList.contains('active')) {
            menuBtn.click();
        }
    });
}


window.addEventListener('resize', function () {
    if (document.querySelector('.header__profile .header__lng').classList.contains('active')) {
        document.querySelector('.header__profile .header__lng').click();
    }
}, true);



event('.footer__lng', 'click', function (e) {
    toggleClass(this, 'active');

    if(document.querySelector('.footer .burger').classList.contains('active')){
        document.querySelector('.footer .burger').click();
        document.querySelector('.footer__lng').click();
    }
});


if (document.querySelector('.footer__profile .footer__lng')) {
    document.addEventListener('click', function (event) {
        let menu = document.querySelector('.footer__profile .footer__lng');
        let menuBtn = document.querySelector('.footer__profile .footer__lng');
        let isClickInside = menu.contains(event.target);
        if (!isClickInside && menuBtn.classList.contains('active')) {
            menuBtn.click();
        }
    });
}


window.addEventListener('resize', function () {
    if (document.querySelector('.footer__profile .footer__lng').classList.contains('active')) {
        document.querySelector('.footer__profile .footer__lng').click();
    }
}, true);