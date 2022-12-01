let showcase = document.querySelector(".showcaseVideo");

const mobileShowcase = "images/showcase/showcaseMobile.mp4";
const desktopShowcase = "images/showcase/showcaseDesktop.mp4";



function showcaseFunction(x) {
    if (x.matches) { 
        showcase.setAttribute("src", desktopShowcase);
        console.log(desktopShowcase);
    } else {
        showcase.setAttribute("src", mobileShowcase);
        console.log(mobileShowcase);
    }
  }

  showcaseFunction(windowWidth);
  windowWidth.addListener(showcaseFunction);