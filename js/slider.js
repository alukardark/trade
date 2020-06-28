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
        pagination: {
            el: '.main-banner .swiper-pagination',
            type: 'bullets',
            clickable: true,
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


if (document.querySelector('.personal-area__tabs-slider.swiper-container')) {
    let howFindSwiper1 = undefined;

    function initNewsSwiper() {
        let w=window,
            d=document,
            e=d.documentElement,
            g=d.getElementsByTagName('body')[0],
            x=w.innerWidth||e.clientWidth||g.clientWidth,
            y=w.innerHeight||e.clientHeight||g.clientHeight;


        if (x < 768 && howFindSwiper1 == undefined) {
            howFindSwiper1 = new Swiper(".personal-area__tabs-slider.swiper-container", {
                slidesPerView: 'auto',
                spaceBetween: 0,
                slideToClickedSlide: true,
                freeMode: true,
                // centeredSlides: true,
                on: {
                    touchEnd: function () {
                        if( document.querySelector('.personal-area__tabs-slider .swiper-slide-active a') !== null){
                             document.querySelector('.personal-area__tabs-slider .swiper-slide-active a').click();
                        }
                    },
                    transitionEnd: function () {
                        if(document.querySelector('.personal-area__tabs-slider .swiper-slide-active a') !== null){
                            // document.querySelector('.personal-area__tabs-slider .swiper-slide-active a').click();
                        }

                    },
                }
            });

        } else if (x > 767 && howFindSwiper1 != undefined) {
            howFindSwiper1.destroy();
            howFindSwiper1 = undefined;
            document.querySelector('.personal-area__tabs-slider .swiper-wrapper').removeAttribute('style');
            document.querySelector('.personal-area__tabs-slider .swiper-slide').removeAttribute('style');
        }
    }


    window.addEventListener('resize', function () {
        initNewsSwiper();
    }, true);


    initNewsSwiper();
}


