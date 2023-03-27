$(function() {
    $('.faq ul>li .answer').hide();

    $('.faq ul > li > a').click(function(e) {
        e.preventDefault();
        if($(this).next().css('display') == 'block'){
            $(this).children('img').animate({'rotate': '360deg'});
            $(this).next().slideUp(500);
        }else {
            $(this).children('img').animate({'rotate': '180deg'},500);
            $(this).next().slideDown(500);
        }
    })

    function dropdown() {
        $(this).children('.dropdown').toggleClass('active');
        $(this).next().slideToggle();
    }
    
    $('.floor-info .group-title').on('click', dropdown);
    $('.faq-list .q-box').on('click', dropdown);
})