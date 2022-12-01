
const body = document.querySelector("body");

const elementCardsRightArrow = document.querySelector(".rightArrow");
const elementCardsLeftArrow = document.querySelector(".leftArrow");
const heroScrollDownArrow = document.querySelector(".scrollArrow");
const arrowContainer = document.querySelector(".arrowContainer");

const elementCardsContainer = document.querySelector(".elementCardsContainer");
const elementCardNavigation = document.querySelector(".cardNavigation")
const elementCardsScrollContainer = document.querySelector(".scrollContainer");
const elementCardsScroll = document.getElementById("elementCardsScroll");
const elementScroll = document.querySelector("elementScroll");
const elementSwipeCheck = document.getElementById("elementSwipeCheck");

const heroJumpSection = document.getElementById("heroJumpSection");

const windowWidth = window.matchMedia("(min-width: 1024px)");

let isMobile;

let touchStart = 0;
let touchEnd = 0;
const swipeLength = 50;

let currentElementCard = 0;
let automaticElementCardSlide = true;
const howManyCards = 4;

//element cards infomation
const cards = [
    {header: "CONTROL THE ELEMENTS", img:"images/elements/element1.svg", infoHeader: "ALWAYS WATERPROOF", info: "Shields you and keeps you dry in all your endeavours. From snowstorms to moonsoon rain, or while commuting to work."},
    {header: "CONTROL THE ELEMENTS", img:"images/elements/element2.svg", infoHeader: "PERFECTLY WINDPROOF", info: "Guards you from one of the strongest elements, wind. No gust will cool you of, even when exposed to icy winds."},
    {header: "CONTROL THE ELEMENTS", img:"images/elements/element3.svg", infoHeader: "DIRT NEGLECTING", info: "Defends you from dirt and scratches. With our new tecnology it´s hard to leave a mark on your gear even during the toughest adventures."},
    {header: "CONTROL THE ELEMENTS", img:"images/elements/element4.svg", infoHeader: "FIRE RESISTANT", info: "Shelter you from the campfire without harming the gear. This material feature has already saved many lives."}
];








function myFunction(x) {
    if (x.matches) { 
        isMobile = false;
        elementCardsScroll.style.marginLeft = "0px";
    } else {
        isMobile = true;
    }
  }

  myFunction(windowWidth);
  windowWidth.addListener(myFunction);










//creating element cards for each of the cards information
for (let i = 0; i < cards.length; i++) {
    //creates card section
    let elementCard = document.createElement("article");
    elementCard.classList.add("elementCard")

    //creates a section for the header
    let cardHeader = document.createElement("h3");
    
    //creates a section for the image
    let cardImg = document.createElement("img");
    
    //creates a section for the main information in the card
    let cardText = document.createElement("div");
    cardText.classList.add("elementText")

    //creates a section for the main information to put in
    let cardInfoHeader = document.createElement("h4");
    let cardInfoText = document.createElement("p");

    //adds the correct information from the cards array to the card that is being created
    cardHeader.textContent = cards[i].header;
    cardImg.src = cards[i].img;
    cardInfoHeader.textContent = cards[i].infoHeader;
    cardInfoText.textContent = cards[i].info;

    //places all the sections of the card into the correct sections in the correct order
    cardText.append(cardInfoHeader);
    cardText.append(cardInfoText);
    elementCard.append(cardHeader);
    elementCard.append(cardImg);
    elementCard.append(cardText);

    //places the card under the scroll card section
    elementCardsScroll.append(elementCard);

}
//places the card under the main card section



//creates the navigation lines to see which card you are viewing
for(let i = 0; i < howManyCards; i++)
{
    let cardNavi = document.createElement("div");
    cardNavi.classList.add("navigationLine");
    elementCardNavigation.append(cardNavi);
    elementCardNavigation.children[currentElementCard].classList.add("navLineSelected");
}


//allows the user to scroll down to the section after the hero by clicking the arrow on the hero
heroScrollDown = () => {
    heroScrollDownArrow.addEventListener("click", () => {
        console.log("clicked");
        heroJumpSection.scrollIntoView();
    })
}

//slides the card slider to the side calculated by which card you are currently viewing 
cardMove = () => {
    let howMuchToMove = 100 * (-currentElementCard);
    elementCardsScroll.style.marginLeft = howMuchToMove + "vw";
}


changeElementsSlideLeft = () => 
{
    if(currentElementCard > 0)
    {
        //removes the old navigation line
        elementCardNavigation.children[currentElementCard].classList.remove("navLineSelected");
        currentElementCard --;
        //adds a new navigation line
        elementCardNavigation.children[currentElementCard].classList.add("navLineSelected");
    }
    else if(currentElementCard <= 0)
    {
        //removes the old navigation line
        elementCardNavigation.children[currentElementCard].classList.remove("navLineSelected");
        currentElementCard = cards.length - 1;
        //adds a new navigation line
        elementCardNavigation.children[currentElementCard].classList.add("navLineSelected");
    }
    //moves the card after calculating where to move it
    cardMove();
}

changeElementsSlideRight = () => {
    if(currentElementCard < elementCardNavigation.children.length - 1)
    {
        //removes the old navigation line
        elementCardNavigation.children[currentElementCard].classList.remove("navLineSelected");
        currentElementCard ++;
        //adds a new navigation line
        elementCardNavigation.children[currentElementCard].classList.add("navLineSelected");
    }
    else if(currentElementCard >= elementCardNavigation.children.length - 1)
    {
        //removes the old navigation line
        elementCardNavigation.children[currentElementCard].classList.remove("navLineSelected");
        currentElementCard = 0;
        //adds a new navigation line
        elementCardNavigation.children[currentElementCard].classList.add("navLineSelected");
    }
    //moves the card after calculating where to move it
    cardMove();
}


//calculating which slide you will view after clicking arrow to the next slide
const changeElementsSlideClick = () => {
    elementCardsLeftArrow.addEventListener("click", () => {
        changeElementsSlideLeft();
        automaticElementCardSlide = false;
    })
    elementCardsRightArrow.addEventListener("click", () => {
        changeElementsSlideRight();
        automaticElementCardSlide = false;
    })
}

const elementSlideSwipeCheck = () => {
    elementSwipeCheck.addEventListener("touchstart", (e) => {
        touchStart = e.changedTouches[0].screenX;
    })
    elementSwipeCheck.addEventListener("touchend", (e) => {
        touchEnd = e.changedTouches[0].screenX;
        if(touchStart > touchEnd && (Math.abs(touchStart-touchEnd) > swipeLength)) changeElementsSlideRight();
        if(touchStart < touchEnd && (Math.abs(touchStart - touchEnd) > swipeLength)) changeElementsSlideLeft();

        automaticElementCardSlide = false;
    })
}

automaticSlide = () => {
    if(isMobile)
    {
        if(window.scrollY > 0)
        {
            if(automaticElementCardSlide == true)
            {
                changeElementsSlideRight();
            }
            else
            {
                setTimeout(() => {
                    automaticElementCardSlide = true;
                    console.log(automaticElementCardSlide);
                }, 10000);
            }
        }
    }

}



window.setInterval(automaticSlide, 5000);

elementSlideSwipeCheck();

//always checking if the change slide buttons are being pressed 
changeElementsSlideClick();
//always checking if the user is clicking on the arrow to jump down from the hero
heroScrollDown();