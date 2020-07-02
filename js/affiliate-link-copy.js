import {event, toggleClass} from './functions.js';

var button = document.getElementById("affiliate-link-copy"),
    contentHolder = document.getElementById("affiliate-link"),
    depositVal = '';

if (button) {
    button.addEventListener("click", function () {
        depositVal = contentHolder.value;
        contentHolder.select();
        document.execCommand("copy");
        button.classList.add('reffers__affiliate-link-copy--ok');

        document.querySelector(".copied-address-successfully").classList.add('active');

        setTimeout(function(){
            document.querySelector(".copied-address-successfully").classList.remove('active');
        },2000);
    }, false);
};






