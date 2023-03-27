// *_detail : 탈그리드 아이템 슬라이드
$(function() {

    var swiper;
    
    $(window).on('load resize', function() {

        swiper = new Swiper(".mySwiper", {
            slidesPerView: 2,
            centeredSlides: false,
            spaceBetween: '2%',
            grabCursor: true
        });

        swiper = new Swiper('.prg-slider', {
            spaceBetween: 30,
            effect: 'fade',
            loop: true,
            autoplay: {
                delay: 15000,
                disableOnInteraction: false,
            },
            autoHeight: true,
            pagination: {
                el: '.slide-paging',
                clickable: true,
            }
            // mousewheel: {
            //   invert: false,
            // },
        });

        swiper = new Swiper(".conserve-swiper", {
            slidesPerView: 1.4,
            centeredSlides: false,
            spaceBetween: '2%',
            grabCursor: true
        });

        swiper = new Swiper(".guide-swiper", {
            slidesPerView: 1.2,
            centeredSlides: false,
            spaceBetween: '2%',
            grabCursor: true
        });
    });
})
