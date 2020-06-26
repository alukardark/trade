import {event, toggleClass} from './functions.js';
import './slider.js';
import './burger.js';
import './lng-btn.js';

new simpleParallax(document.querySelectorAll('.parallax'), {
    delay: 0,
    orientation: 'down',
    scale: 1.8,
    overflow: true,
});

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


