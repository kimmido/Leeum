$(function() {

    // 상세페이지용 이미지 슬라이드
    const $slideMain = $(".slide-main");
    const $slideNav = $(".slide-nav");
    
    $slideMain.slick({
        slide: ".slide-item",
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveWidth: true,
        adaptiveHeight: true,
        infinite: true,
        speed: 300,
    });

    $slideMain.on("afterChange", function (event, slick, currentSlide) {
        $slideNav.slick("slickGoTo", currentSlide);
        $slideNav.find(".slick-slide.is-active").removeClass("is-active");
        $slideNav
            .find('.slick-slide[data-slick-index="' + currentSlide + '"]')
            .addClass("is-active");
    });

    $slideNav.on("init", function (event, slick) {
        $(this).find(".slick-slide.slick-current").addClass("is-active");
    })
    .slick({
		slide: ".slide-item",
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		focusOnSelect: false,
		infinite: false,
	});

    $slideNav.on("click", ".slick-slide", function (e) {
        e.preventDefault();
        var goToMainSlide = $(this).data("slick-index");
        $slideMain.slick("slickGoTo", goToMainSlide);
    });

    $('.slick-cloned a').removeAttr('data-fancybox'); 
    $('.slick-cloned a').attr('data-fancybox-trigger', 'collect');
})