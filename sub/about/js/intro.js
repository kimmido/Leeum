$(function() {
    $(window).on("scroll", function() {
        AOS.init();
    })
}) 

window.onload = function() {
    const close = document.querySelector('#close > a');
    const slide = document.querySelector('.slide-in');
    let backUrl = document.referrer;
    let page = backUrl ? backUrl : '../../index.html';
    let scrollLocation = window.scrollY;
    
    close.addEventListener('click', e => {
        e.preventDefault();
        window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
        
        window.onscroll = () => {
            if(scrollLocation < 100) {
                slide.classList.add("silde-out");
                setTimeout(() => {
                    location.href = `${page}`;
                }, 350); 
            }
        }
        
        if(scrollLocation < 100) {
            slide.classList.add("silde-out");
            setTimeout(() => {
                location.href = `${page}`;
            }, 350); 
        }        
    });
    
    window.addEventListener('scroll', () => {
        scrollLocation = this.scrollY;
        let viewH = this.innerHeight;
        let documentH = document.body.scrollHeight;
    
        if (scrollLocation + viewH >= documentH) {
            close.classList.toggle("end");
        };
    });
}