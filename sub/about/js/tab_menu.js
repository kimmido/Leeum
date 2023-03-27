$(function() {

    $(window).on('load resize', function() {
        if($(this).width() < 1400) {
            $('.tab-nav').addClass('fixed');
            $('.director img:eq(1)').css('top', '0');
            $('.director h3').css('top', '240px');
            $('.director p').css('top', '280px');
            $('.director .director-info').css('top', '340px');
        } else {
            $('.tab-nav').removeClass('fixed');
            $('.director img:eq(1)').css('top', '70px');
            $('.director h3').css('top', '');
            $('.director p').css('top', '');
            $('.director .director-info').css('top', '');
        }
    });
    
    $(window).on('load scroll', function() {
        AOS.init();
        
        var pos = $(window).scrollTop();

        if($(this).width() >= 1400) {
            if($(this).scrollTop() > 480) {
                $('.tab-nav').addClass('fixed');
            }
            else {
                $('.tab-nav').removeClass('fixed');
            }
            pos += 600;
        } else {
            pos += 300;
        }

        if($('.tab-nav').hasClass('membership')) {
            if (pos > $('#membership').offset().top) { activeTab('membership'); }
            if (pos > $('#corporate').offset().top)  { activeTab('corporate'); }
            if (pos > $('#associate').offset().top)  { activeTab('associate'); }
        }
    });

    $('.tabmenu-wrap .tab-nav').find('a').on('click', function(e) {
        AOS.refresh();
        var $this = $(this);
        var $all_tab_nav = $this.parents('.tab-nav').find('.nav');
        var $tab_contents = $this.parents('.tabmenu-wrap').find('.con-box');
        var id = $this.attr('href');
        
        if(!$(this).parents('.tab-nav').hasClass('membership')) {
            e.preventDefault();
            $('html').scrollTop(0);
            $all_tab_nav.removeClass('on');
            $this.parent().addClass('on');
            $tab_contents.hide();
            $(id).show();

            if($('footer').hasClass('facility')) {
                if(id == '#facility' || id == '#renewal') {
                    $('footer').css('margin-top', '0');
                } else {
                    $('footer').css('margin-top', '-450px');
                }
            }
        } else {
            $all_tab_nav.removeClass('on');
            $this.parent().addClass('on');
        }
    });

    
    // 다른 페이지에서 -> 해당 페이지의 탭메뉴로 다이렉트 이동
    var hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');

    for(var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
    }

    if(hash[1]) {
        $('.tabmenu-wrap .tab-nav').find('.nav').removeClass('on');
        $(`[href='#${hash[1]}']`).parent().addClass('on');
        $('.tab-con').find('.con-box').hide();
        $('.tab-con').find(`#${hash[1]}`).show();
        $('.facility').css('margin-top', '0');
    }
})

function activeTab(anchor) {
    $('.tabmenu-wrap .tab-nav').find('.nav').removeClass('on');
    $(`[href='#${anchor}']`).parent().addClass('on');
}