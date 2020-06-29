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
