import {event, toggleClass} from './functions.js';
import './slider.js';
import './burger.js';
import './lng-btn.js';

new simpleParallax(document.querySelectorAll('.parallax'), {
    delay: 0,
    orientation: 'down',
    scale: 1.5,
    overflow: true,
});


// // window.matchMedia("(max-width: 949px)").matches ||

