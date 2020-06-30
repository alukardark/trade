import {event, toggleClass} from './functions.js';
import './slider.js';
import './burger.js';
import './lng-btn.js';
import './login-btn.js';
import './parallax.js';
import './hidden-block.js';
import './deposit-copy.js';
// import {accordion} from './squeezebox.js';



new WOW().init({
    mobile: false,
});

// window.addEventListener('load', function () {
//     if (document.querySelector('.accordion') !== null) {
//         accordion();
//         // document.querySelector('.accordion-head.open').click();
//
//     }
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

setTimeout(function(){
    document.querySelectorAll('.wow').forEach(el => {
        el.classList.remove('wow');
    });
},2000);


document.querySelectorAll('.parallax').forEach(el => {
    el.classList.add('vis');
});


document.querySelectorAll('[data-tabs]').forEach((el) => {
    new Tabby('#' + el.id);
});


if (document.querySelector('.js-choice--search') !== null) {
    new Choices('.js-choice--search', {
        itemSelectText: '',
        searchEnabled: true,
        shouldSort: false,
        noResultsText: 'No results found',
        classNames: {
            listDropdown: 'choices__list--dropdown js-choice--search',
        }
    });
}
if(document.querySelector('.js-choice--default')){
    new Choices('.js-choice--default', {
        itemSelectText: '',
        searchEnabled: false,
        shouldSort: false,
    });
}


if (document.querySelector('.personal-area__calculator-col.scrollbar')) {
    document.querySelectorAll('.personal-area__calculator-col.scrollbar').forEach(el => {
        el.addEventListener(
            'showDropdown',
            function (event) {
                new SimpleBar(el.querySelector('.choices__list--dropdown .choices__list'), {
                    autoHide: false
                });
            },
            false,
        );
    });
}

if (document.querySelector('.accordion-cont .scrollbar')) {
    document.querySelectorAll('.accordion-cont .scrollbar').forEach(el => {
        new SimpleBar(el, {
            autoHide: false
        });
    });
}









