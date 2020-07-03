import {event} from "./functions.js";

if (document.querySelector('input#predefined')) {
    if(document.querySelector('input#predefined').checked || document.querySelector('input#predefined2').checked){
        document.querySelector('.history__date').classList.add('disabled');
        document.querySelector('#predefined-span').classList.remove('disabled');
    }
    event('input#predefined, input#predefined2', 'click', function (e) {
        if(document.querySelector('input#predefined').checked || document.querySelector('input#predefined2').checked){
            document.querySelector('.history__date').classList.add('disabled');
            document.querySelector('#predefined-span').classList.remove('disabled');
        }
    });




    if(document.querySelector('input#custom').checked || document.querySelector('input#custom2').checked){
        document.querySelector('.history__date').classList.remove('disabled');
        document.querySelector('#predefined-span').classList.add('disabled');
    }
    event('input#custom, input#custom2', 'click', function (e) {
        if(document.querySelector('input#custom').checked || document.querySelector('input#custom2').checked){
            document.querySelector('.history__date').classList.remove('disabled');
            document.querySelector('#predefined-span').classList.add('disabled');
        }
    });
}
