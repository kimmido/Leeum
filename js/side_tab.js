$(function() {
    $('.side-tab .tab-wrap').find('li').on('click', function(e) {
        var $this = $(this);
        var $index = $this.index();
        var $all_tab= $this.parents('.tab-wrap').find('.tab');

        // 관람안내
        if($this.parents('.floor-select-group')) {
            let $tab_contents = $this.parents('.side-tab').find('.side-con-box');
    
            $all_tab.removeClass('selected');
            $this.addClass('selected');

            $tab_contents.find('li').removeClass('view');
            $tab_contents.find(`li:eq(${$index})`).addClass('view');
        }

        // 재질
        if($this.parents('.damage-type')) {
            let $tab_contents = $this.parents('.side-tab').find('.side-con-box');
    
            $all_tab.removeClass('on');
            $this.addClass('on');

            $tab_contents.find('li').removeClass('view');
            $tab_contents.find(`li:eq(${$index})`).addClass('view');

            $tab_contents.find('.img-l').css("background-image", "url('../collect/image/conserve_texture_damage\(" + $index + "\).png')");
            
        }

        // 사례
        if($this.parents('before-after')) {
            var $back_img = $this.parents('.side-tab').find('.con-box').find('.background-img');
            var $fore_img = $this.parents('.side-tab').find('.con-box').find('.foreground-img');
                        
            $all_tab.removeClass('on');
            $this.addClass('on');
            
            $back_img.css("background-image", "url('../collect/image/conserve_case_after\(" + $index + "\).png')");
            $fore_img.css("background-image", "url('../collect/image/conserve_case_before\(" + $index + "\).png')");
        }
    });
}) 