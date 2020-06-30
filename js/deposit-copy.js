import {event, toggleClass} from './functions.js';

var button = document.getElementById("deposit-copy"),
    contentHolder = document.getElementById("deposit"),
    depositVal = '';

if (button) {
    button.addEventListener("click", function () {
        depositVal = contentHolder.value;
        contentHolder.select();
        document.execCommand("copy");
        button.classList.add('personal-main__deposit-copy--ok');

        document.querySelector(".copied-successfully").classList.add('active');

        setTimeout(function(){
            document.querySelector(".copied-successfully").classList.remove('active');
        },2000);
    }, false);
};

event('.personal-main__new-adress', 'click', function (e) {
    button.classList.remove('personal-main__deposit-copy--ok');
});


event('.personal-main__send', 'click', function (e) {
    if(!document.querySelector("#deposit-pust-input").value && !document.querySelector("#deposit-pust-input").classList.contains('off')) {
        e.target.classList.add('off');
        document.querySelector(".deposit-error").classList.add('active');
    }else{
        e.target.classList.remove('off');
        document.querySelector(".deposit-error").classList.remove('active');
    }
});

event('#deposit-pust-input', 'keyup', function (e) {
    document.querySelector(".deposit-error").classList.remove('active');
    document.querySelector(".personal-main__send").classList.remove('off');
});





