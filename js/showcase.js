let showcase = document.querySelector(".showcaseVideo");

const mobileShowcase = "images/showcase/showcaseMobile.webm";
const desktopShowcase = "images/showcase/showcaseDesktop.webm";

function showcaseFunction(x) {
    if (x.matches) { 
        showcase.setAttribute("src", desktopShowcase);
    } else {
        showcase.setAttribute("src", mobileShowcase);
    }
  }

  showcaseFunction(windowWidth);
  windowWidth.addListener(showcaseFunction);