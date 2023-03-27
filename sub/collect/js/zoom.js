$('.side-tab .type-img').find('li').on("mousemove", zoom);

function zoom(e) {
    let imgS = this.querySelector(".img-s"),
        imgL = this.querySelector(".img-l"),
        imgLeft = this.getBoundingClientRect().left,
        imgTop = window.pageYOffset + this.getBoundingClientRect().top,
        x = e.pageX - imgLeft, 
        y = e.pageY - imgTop,
        imgWidth = imgS.width,
        imgHeight = imgS.height,
        xperc = (x / imgWidth) * 100,
        yperc = (y / imgHeight) * 100;

    if (x > 0.01 * imgWidth) {
        xperc += 0.15 * xperc;
    }

    if (y >= 0.01 * imgHeight) {
        yperc += 0.15 * yperc;
    }

    imgL.style.backgroundPositionX = xperc - 9 + "%";
    imgL.style.backgroundPositionY = yperc - 9 + "%";
    imgL.style.left = x - 125 + "px";
    imgL.style.top = y - 125 + "px";
}