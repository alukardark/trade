import {event, toggleClass} from './functions.js';
import './slider.js';
import './burger.js';
import './lng-btn.js';
import './login-btn.js';
import './parallax.js';
import './hidden-block.js';
import './deposit-copy.js';
import './affiliate-link-copy.js';
import './radio-button.js';



new WOW().init({
    mobile: false,
});
//
// MicroModal.init({
//     openTrigger: 'data-custom-open',
//     disableScroll: true,
//     disableFocus: true,
//     awaitCloseAnimation: true,
//     onShow: function (modal) {
//
//         let modalClass = modal.id + $i;
//
//         if (document.querySelector('#' + modal.id).classList.contains('modal-website-development')) {
//             if (modalClass == modal.id + '1') {
//                 accordion("." + modal.id);
//                 document.querySelector('.' + modal.id).classList.add('active');
//                 $i++;
//             } else {
//                 if (!document.querySelector('.' + modal.id).classList.contains('active')) {
//                     accordion("." + modal.id);
//                     document.querySelector('.' + modal.id).classList.add('active');
//                     $i++;
//                 }
//             }
//         }
//
//         if (modal.id == 'feedback') {
//             let $text = document.querySelector('.feedback-form .checkbox-list--discount').textContent;
//             document.querySelector('.modal-feedback-form .checkbox-list--discount').textContent = $text;
//         }
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
},1000);


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

if (document.querySelector('.history__select.scrollbar')) {
    document.querySelectorAll('.history__select.scrollbar').forEach(el => {
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

if (document.querySelector('.personal-main .scrollbar--horizontal')) {
    document.querySelectorAll('.personal-main .scrollbar--horizontal').forEach(el => {
        new SimpleBar(el, {
            autoHide: false
        });
    });
}


flatpickr("input[type='date']", {});

function goUp() {

}



var smoothJumpUp = function() {
    if (document.body.scrollTop>0 || document.documentElement.scrollTop>0) {
        window.scrollBy(0,-25);
        setTimeout(smoothJumpUp, 10);
    }
};
event('a[href="#history"]', 'click', function (e) {
    smoothJumpUp();
});




    var a = document.querySelector('#aside1'), b = null, P = 0;
    window.addEventListener('scroll', Ascroll, false);
    document.body.addEventListener('scroll', Ascroll, false);
    function Ascroll() {
        if (b == null) {
            var Sa = getComputedStyle(a, ''), s = '';
            for (var i = 0; i < Sa.length; i++) {
                if (Sa[i].indexOf('overflow') == 0 || Sa[i].indexOf('padding') == 0 || Sa[i].indexOf('border') == 0 || Sa[i].indexOf('outline') == 0 || Sa[i].indexOf('box-shadow') == 0 || Sa[i].indexOf('background') == 0) {
                    s += Sa[i] + ': ' +Sa.getPropertyValue(Sa[i]) + '; '
                }
            }
            b = document.createElement('div');
            b.style.cssText = s + ' box-sizing: border-box; width: ' + a.offsetWidth + 'px;';
            a.insertBefore(b, a.firstChild);
            var l = a.childNodes.length;
            for (var i = 1; i < l; i++) {
                b.appendChild(a.childNodes[1]);
            }
            a.style.height = b.getBoundingClientRect().height + 'px';
            a.style.padding = '0';
            a.style.border = '0';
        }
        var Ra = a.getBoundingClientRect(),
            R = Math.round(Ra.top + b.getBoundingClientRect().height - document.querySelector('#article').getBoundingClientRect().bottom);  // селектор блока, при достижении нижнего края которого нужно открепить прилипающий элемент
        if ((Ra.top - P) <= 0) {
            if ((Ra.top - P) <= R) {
                b.className = 'stop';
                b.style.top = - R +'px';
            } else {
                b.className = 'sticky';
                b.style.top = P + 'px';
            }
        } else {
            b.className = '';
            b.style.top = '';
        }
        window.addEventListener('resize', function() {
            a.children[0].style.width = getComputedStyle(a, '').width
        }, false);
    }


// //Плавная прокрутка
// const anchors = document.querySelectorAll('a[href*="#"]');
//
// for (let anchor of anchors) {
//     if (!anchor.classList.contains('questions__tab')) {
//         anchor.addEventListener('click', function (e) {
//             e.preventDefault();
//
//             let blockID = anchor.getAttribute('href');
//             blockID = blockID.substring(blockID.lastIndexOf("#"));
//
//             document.querySelector('' + blockID).scrollIntoView({
//                 behavior: 'smooth',
//                 block: 'start'
//             })
//         })
//     }
// }