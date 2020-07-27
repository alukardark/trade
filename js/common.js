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
import './sidebar-sticky.js';
import './google-authentication.js';


new WOW().init({
    mobile: false,
});

MicroModal.init({
    openTrigger: 'data-custom-open',
    disableScroll: true,
    disableFocus: true,
    awaitCloseAnimation: true,
    onShow: function (modal) {
        document.querySelector('.wrapper').classList.add('blur');
    },
    onClose: function (modal) {
        document.querySelector('.wrapper').classList.remove('blur');
    }
});


if (navigator.userAgent.match(/(iPad|iPhone|iPod|Android|Silk)/gi)) {
    setTimeout(function () {
        document.querySelectorAll('.wow').forEach(el => {
            el.classList.remove('wow');
            el.classList.remove('animated');
            el.removeAttribute('style');
        });
    }, 300);
}

setTimeout(function () {
    document.querySelectorAll('.wow').forEach(el => {
        el.classList.remove('wow');
    });
}, 1000);


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
if (document.querySelector('.js-choice--default')) {
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

if (document.querySelector('.personal-main__transfer-select.scrollbar')) {
    document.querySelectorAll('.personal-main__transfer-select.scrollbar').forEach(el => {
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


var smoothJumpUp = function () {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        window.scrollBy(0, -25);
        setTimeout(smoothJumpUp, 10);
    }
};
event('a[href="#history"]', 'click', function (e) {
    smoothJumpUp();
});


const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
    if (anchor.classList.contains('anchor')) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            let blockID = anchor.getAttribute('href');
            blockID = blockID.substring(blockID.lastIndexOf("#"));

            document.querySelector('' + blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    }
};