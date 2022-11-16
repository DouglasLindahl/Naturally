
const body = document.querySelector("body");
const elementCardsRightArrow = document.querySelector(".rightArrow");
const elementCardsLeftArrow = document.querySelector(".leftArrow");
const elementCardNavigation = document.querySelector(".cardNavigation")


let currentElementCard = 0;

console.log(elementCardNavigation.children.length);
const changeElementsSlide = () => {
    console.log(currentElementCard);
    if(currentElementCard >= 0 && currentElementCard < elementCardNavigation.children.length - 1)
    {
        elementCardsRightArrow.addEventListener("click", () => {
            elementCardNavigation.children[currentElementCard].classList.remove("navLineSelected");
            currentElementCard ++;
            elementCardNavigation.children[currentElementCard].classList.add("navLineSelected");
        })
        elementCardsLeftArrow.addEventListener("click", () => {
            elementCardNavigation.children[currentElementCard].classList.remove("navLineSelected");
            currentElementCard --;
            elementCardNavigation.children[currentElementCard].classList.add("navLineSelected");
        })
    }
}

changeElementsSlide();