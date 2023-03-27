$(function() {
    function removeFancyBox() {
        $(".type-img a").on('click', e => e.preventDefault());
        $(".type-img a").removeAttr('data-fancybox');
    }
    
    function addFancyBox() {
        $(".type-img a").unbind();
        $(".type-img a").attr('data-fancybox', 'gallery');
    }

    function fancybox() {
        if(window.innerWidth >= 1440) {
            removeFancyBox();
        } else {
            addFancyBox();
        }
    }
    
    let $fancybox;
    
    $(window).on({
        resize : function() {
            clearTimeout($fancybox);
            $fancybox = setTimeout(fancybox, 200);
        },
        load : fancybox
    });
});