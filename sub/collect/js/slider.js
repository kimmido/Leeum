window.addEventListener("load", function () {
    
    var sliderChange = function(e){
        var sliderPos = e != undefined ? e.target.value : document.querySelector("#slider").value;
        document.querySelector(".foreground-img").style.width = sliderPos + "%";
        document.querySelector(".slider-button").style.left = "calc(" + sliderPos + "% - 24px)";
    }
    
    let move;
    let sliderPos = document.querySelector("#slider");
    
    function slidermove(bool) {
        if(bool) {
            sliderPos.value = 0;
            move = setInterval(() => {
            sliderPos.value++;
            sliderChange();
    
            if(sliderPos.value == 100) {
                clearInterval(move);
            }
        }, 7);
        } else {
            clearInterval(move);
        }
    }

    document.querySelector(".tab-wrap").addEventListener("click", () => {
        slidermove(false);
        slidermove(true);
    });
    
    setTimeout(slidermove, 1000, true);
    sliderChange();        
    document.querySelector("#slider").addEventListener("input", sliderChange, false);
    document.querySelector("#slider").addEventListener("change", sliderChange, false);
    
})