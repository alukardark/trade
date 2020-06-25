if (document.querySelector('.main-banner__slider')) {
    new Swiper('.main-banner__slider .swiper-container', {
        loop: true,
        speed: 700,
        slidesPerView: 1,
        spaceBetween: 15,
        // effect: 'fade',
        // fadeEffect: {
        //     crossFade: true
        // },
        navigation: {
            nextEl: '.main-banner__next',
            prevEl: '.main-banner__prev',
        },

    });
}

if (document.querySelector('.platform__slider')) {
    new Swiper('.platform__slider .swiper-container', {
        loop: true,
        speed: 700,
        slidesPerView: 1,
        spaceBetween: 15,
        // effect: 'fade',
        // fadeEffect: {
        //     crossFade: true
        // },
        navigation: {
            nextEl: '.platform__next',
            prevEl: '.platform__prev',
        },

    });
}