import {event, toggleClass} from './functions.js';


event('.conditions__box', 'click', function (e) {
    e.preventDefault();

    toggleClass(this, 'active');

    if (this.classList.contains('active')) {
        document.querySelectorAll('.conditions__box.vis').forEach(el => {
            el.classList.remove('vis');
            el.classList.remove('active');
        });
        this.classList.add('vis');
    } else {
        this.classList.remove('vis');
    }
});
//
event('.personal-area__btns-filter *', 'click', function (e) {
    this.classList.add('active');

    if (this.classList.contains('active')) {
        document.querySelectorAll('.personal-area__btns-filter *').forEach(el => {
            el.classList.remove('active');
        });
        this.classList.add('active');
    } else {
        this.classList.remove('active');
    }
});

event('.personal-area__table-row', 'click', function (e) {
    // e.preventDefault();

    toggleClass(this, 'active');

    if (this.classList.contains('active')) {
        document.querySelectorAll('.personal-area__table-row.active').forEach(el => {
            el.classList.remove('active');
        });
        this.classList.add('active');
    } else {
        this.classList.remove('active');
    }
});

event('.personal-main__hidden-menu-btn', 'click', function (e) {
    if (!this.nextElementSibling.classList.contains('active')) {
        document.querySelectorAll('.personal-main__hidden-menu.active').forEach(el => {
            el.classList.remove('active');
        });
        this.nextElementSibling.classList.add('active');
    } else {
        this.nextElementSibling.classList.remove('active');
    }
});

event('.personal-main__demo-row--header', 'click', function (e) {
    toggleClass(this, 'active');
    toggleClass(this.nextElementSibling, 'active');
});


var thisHash = location.hash;
var content = '';
var accordions = '';

if (thisHash != '' &&  document.querySelector('a[href="'+ thisHash +'"]')) {
    content = document.querySelector(thisHash);
    document.querySelectorAll('.accordion-toggle').forEach(el => {
        el.classList.remove('active');
    });

    document.querySelectorAll('a[href="'+ thisHash +'"]').forEach(el => {
        el.classList.add('active');
    });

    accordions = document.querySelectorAll('.accordion-cont.active');
    for (var i = 0; i < accordions.length; i++) {
        accordions[i].classList.remove('active');
    }
    content.classList.toggle('active');
}

document.addEventListener('click', function (event) {
    if (!event.target.classList.contains('accordion-toggle')) return;

    content = document.querySelector(event.target.hash);


    if (event.target.classList.contains('active')) {
        event.target.classList.remove('active');
    } else {
        document.querySelectorAll('.accordion-toggle').forEach(el => {
            el.classList.remove('active');
        });
        event.target.classList.add('active');
    }

    if (!content) return;

    event.preventDefault();

    if (content.classList.contains('active')) {
        content.classList.remove('active');
        return;
    }

    accordions = document.querySelectorAll('.accordion-cont.active');
    for (var i = 0; i < accordions.length; i++) {
        accordions[i].classList.remove('active');
    }
    content.classList.toggle('active');
});


document.addEventListener('click', function (event) {
    if (!event.target.classList.contains('setting-toggle')) return;

    var content = document.querySelector(event.target.hash);


    if (event.target.classList.contains('active')) {
        event.target.classList.remove('active');
        event.target.parentNode.classList.remove('active');
    } else {
        document.querySelectorAll('.setting-toggle').forEach(el => {
            el.classList.remove('active');
        });

        document.querySelectorAll('.setting__block').forEach(el => {
            el.classList.remove('active');
        });
        event.target.classList.add('active');
        event.target.parentNode.classList.add('active');
    }

    if (!content) return;

    event.preventDefault();

    if (content.classList.contains('active')) {
        content.classList.remove('active');
        return;
    }

    var accordions = document.querySelectorAll('.setting-cont.active');
    for (var i = 0; i < accordions.length; i++) {
        accordions[i].classList.remove('active');
    }
    content.classList.toggle('active');
});

event('.setting__btn-close', 'click', function (e) {
    this.nextElementSibling.click();
});
