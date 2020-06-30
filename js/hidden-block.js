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
    e.preventDefault();

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
    toggleClass(this.nextElementSibling, 'active');
});

event('.personal-main__demo-row--header', 'click', function (e) {
    toggleClass(this, 'active');
    toggleClass(this.nextElementSibling, 'active');
});