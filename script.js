
const body = document.querySelector("body");
const elementCardsRightArrow = document.querySelector(".rightArrow");
const elementCardsLeftArrow = document.querySelector(".leftArrow");
const elementCardNavigation = document.querySelector(".cardNavigation")


let currentElementCard = 0;


const changeElementsSlide = () => {

    elementCardsLeftArrow.addEventListener("click", () => {
        if(currentElementCard > 0)
        {
            elementCardNavigation.children[currentElementCard].classList.remove("navLineSelected");
            currentElementCard --;
            elementCardNavigation.children[currentElementCard].classList.add("navLineSelected");
        }
    })
    elementCardsRightArrow.addEventListener("click", () => {
        if(currentElementCard < elementCardNavigation.children.length -1)
        {
            elementCardNavigation.children[currentElementCard].classList.remove("navLineSelected");
            currentElementCard ++;
            elementCardNavigation.children[currentElementCard].classList.add("navLineSelected");
        }
    })
}


changeElementsSlide();