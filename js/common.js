//import  simpleParallax from '../node_modules/simple-parallax-js/dist/simpleParallax.js';




var images = document.querySelectorAll('.thumbnail');
new simpleParallax(images, {
    delay: 0,
    orientation: 'down',
    scale: 1.3,
    overflow: true,
});