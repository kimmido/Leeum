$(function() {

    // PDF 다운로드 버튼
    $('.down-img a').on({
        mouseenter: function() {
            $(this).children('img').css('filter', 'brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg) brightness(103%) contrast(103%)');
        },
        mouseleave: function() {
            $(this).children('img').css('filter', 'brightness(0) saturate(100%)');
        }
    });

    // 출판물 슬라이드 hover
    $('.preview .item a').on({
        mouseenter: function() {
            $(this).children('.i-pic').css('filter','brightness(0.5)');
            $(this).children('.i-des').css('opacity','1');
        },
        mouseleave: function() {
            $(this).children('.i-pic').css('filter','');
            $(this).children('.i-des').css('opacity','0');

        }
    });

    // 공지사항 탭메뉴
    $('.tab-menu .gnb li').on('click', function() {
        const type = $(this).attr("id");

        $('.tab-menu .gnb li').removeClass('on');
        $(this).addClass('on');

        $('div.cont').children('ul').children('li').addClass('hidden');

        if($(this).attr("id") == 't1') { // 전체
            $('div.cont').children('ul').children('li').removeClass('hidden');
            $('section.paging').removeClass('hidden');
            $('div.count b').text(87);
        } else if ($('div.cont').find(`${type}`)) { // 나머지
            $(`.${type}`).parents('li').removeClass('hidden');
            $('section.paging').addClass('hidden');
            $('div.count b').text($(`.${type}`).parents('li').length);
        }
    });
})