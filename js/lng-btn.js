import {event, toggleClass} from "./functions.js";
event('.header .header__lng', 'click', function (e) {
    toggleClass(this, 'active');

    if(document.querySelector('.burger').classList.contains('active')){
        document.querySelector('.burger').click();
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