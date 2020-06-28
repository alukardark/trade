import {event, toggleClass} from "./functions.js";
event('.header__login', 'click', function (e) {
    toggleClass(this, 'active');

    if(document.querySelector('.header .burger').classList.contains('active')){
        document.querySelector('.header .burger').click();
        document.querySelector('.header__login').click();
    }
});


if (document.querySelector('.header__profile .header__login')) {
    document.addEventListener('click', function (event) {
        let menu = document.querySelector('.header__profile .header__login');
        let menuBtn = document.querySelector('.header__profile .header__login');
        let isClickInside = menu.contains(event.target);
        if (!isClickInside && menuBtn.classList.contains('active')) {
            menuBtn.click();
        }
    });
}


window.addEventListener('resize', function () {
    if (document.querySelector('.header__profile .header__login').classList.contains('active')) {
        document.querySelector('.header__profile .header__login').click();
    }
}, true);

