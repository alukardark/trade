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
    if(!this.nextElementSibling.classList.contains('active')){
        document.querySelectorAll('.personal-main__hidden-menu.active').forEach(el => {
            el.classList.remove('active');
        });
        this.nextElementSibling.classList.add('active');
    }else{
        this.nextElementSibling.classList.remove('active');
    }
});

event('.personal-main__demo-row--header', 'click', function (e) {
    toggleClass(this, 'active');
    toggleClass(this.nextElementSibling, 'active');
});

// event('a.accordion-head', 'click', function (e) {
//     e.preventDefault();
//     toggleClass(this, 'active');
//     var $link = this.getAttribute('href');
//     document.querySelector('.personal-main__btns a[href="'+$link+'"]').click();
// });
//
// event('.personal-main__btns a', 'click', function (e) {
//     e.preventDefault();
//     var $link = this.getAttribute('href');
//     document.querySelector('a.accordion-head[href="'+$link+'"]').parentNode.querySelectorAll('a').forEach(el => {
//         el.classList.remove('active');
//     });
//     document.querySelector('a.accordion-head[href="'+$link+'"]').classList.add('active');
// });












// Listen for click on the document
document.addEventListener('click', function (event) {

    if (!event.target.classList.contains('accordion-toggle')) return;

    var content = document.querySelector(event.target.hash);

    if(event.target.classList.contains('active')){
        event.target.classList.remove('active');
    }else{
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

    var accordions = document.querySelectorAll('.accordion-cont.active');
    for (var i = 0; i < accordions.length; i++) {
        accordions[i].classList.remove('active');
    }
    content.classList.toggle('active');

})