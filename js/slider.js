import './slider.js';
if (document.querySelector('.main-banner__slider')) {

    const swiperAnimation = new SwiperAnimation();

    var mainBanner = new Swiper('.main-banner__slider .swiper-container', {
        loop: true,
        simulateTouch: false,
        speed: 300,
        slidesPerView: 1,
        spaceBetween: 15,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        navigation: {
            nextEl: '.main-banner__next',
            prevEl: '.main-banner__prev',
        },
        breakpoints: {
            // when window width is >= 320px
            // 767: {
            //     noSwiping: false,
            // }
        },

        on: {
            init: function () {
                swiperAnimation.init(this).animate();
            },
            slideChange: function () {
                swiperAnimation.init(this).animate();
            }
        }

    });
}

if (document.querySelector('.platform__slider')) {

    const swiperAnimation = new SwiperAnimation();

    new Swiper('.platform__slider .swiper-container', {
        loop: true,
        speed: 400,
        slidesPerView: 1,
        spaceBetween: 15,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        navigation: {
            nextEl: '.platform__next',
            prevEl: '.platform__prev',
        },
        on: {
            init: function () {
                swiperAnimation.init(this).animate();
            },
            slideChange: function () {
                swiperAnimation.init(this).animate();
            }
        }
    });
}

