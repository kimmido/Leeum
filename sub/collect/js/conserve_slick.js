$(function() {

  const $slideMain = $(".slide-main");
  
  let slickOpt = {
    slide: ".slide-item",
    slidesToShow: 1.5,
    slidesToScroll: 1,
    infinite: false,
    speed: 100,
    pauseOnFocus: false,
    pauseOnHover: false,
    useTransform: false,
    touchThreshold: 500,
    draggable : true,
    mobileFirst: true
  }
  
  if($(window).width() < 1440) {
    $slideMain.slick(slickOpt);
  }
  
  $(window).resize(function() {
    if($(window).width() >= 1440) {
      $slideMain.slick("unslick");
    } else {
      $slideMain.slick(slickOpt);
    }
  })
})