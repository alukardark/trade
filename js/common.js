import {event, toggleClass} from './functions.js';
import './slider.js';
import './burger.js';
import './lng-btn.js';
import './parallax.js';




new WOW().init({
    mobile: false,
});

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

