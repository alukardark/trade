import {event, toggleClass} from './functions.js';
import './slider.js';
import './burger.js';
import './lng-btn.js';
import './login-btn.js';
import './parallax.js';
import './hidden-block.js';
// import {accordion} from './squeezebox.js';



new WOW().init({
    mobile: false,
});

// window.addEventListener('load', function () {
//     accordion();
// });

if (navigator.userAgent.match(/(iPad|iPhone|iPod|Android|Silk)/gi)) {
   setTimeout(function(){
       document.querySelectorAll('.wow').forEach(el => {
           el.classList.remove('wow');
           el.classList.remove('animated');
           el.removeAttribute('style');
       });
   }, 300);
}


document.querySelectorAll('.parallax').forEach(el => {
    el.classList.add('vis');
});


document.querySelectorAll('[data-tabs]').forEach((el) => {
    new Tabby('#' + el.id);
});



if (document.querySelector('.js-choice') !== null) {
    new Choices(' .js-choice', {
        itemSelectText: '',
        loadingText: 'Загрузка...',
        searchEnabled: false,
        shouldSort: false,
    });
}

if (document.querySelector(' .js-choice')) {
    document.querySelector(' .js-choice').addEventListener(
        'showDropdown',
        function (event) {
            new SimpleBar(document.querySelector('  .choices__list--dropdown .choices__list'), {
                autoHide: false
            });
        },
        false,
    );
}

//header-burger
event('.personal-area__btns-filter *', 'click', function (e) {
    // toggleClass(this, 'active');
    this.classList.add('active');

    if (this.classList.contains('active')) {

        document.querySelectorAll('.personal-area__btns-filter *').forEach(el => {
            el.classList.remove('active');
        });

        this.classList.add('active');
    } else {
        this.classList.remove('active');
    }
});
