
const body = document.querySelector("body");
const elementCardsRightArrow = document.querySelector(".rightArrow");
const elementCardsLeftArrow = document.querySelector(".leftArrow");
const elementCardNavigation = document.querySelector(".cardNavigation")


let currentElementCard = 0;
const howManyCards = 4;

for(let i = 0; i <= howManyCards; i++)
{
    let cardNavi = document.createElement("div");
    cardNavi.classList.add("navigationLine");
    elementCardNavigation.append(cardNavi);
}

const hideArrows = () => {
    if(currentElementCard == 0)
    {
        elementCardsLeftArrow.classList.add("invisible");
    }
    else
    {
        elementCardsLeftArrow.classList.remove("invisible");
    }
    if(currentElementCard == elementCardNavigation.children.length - 1)
    {
        elementCardsRightArrow.classList.add("invisible");
    }
    else
    {
        elementCardsRightArrow.classList.remove("invisible");
    }
}

const changeElementsSlide = () => {

    elementCardsLeftArrow.addEventListener("click", () => {
        if(currentElementCard > 0)
        {
            elementCardNavigation.children[currentElementCard].classList.remove("navLineSelected");
            currentElementCard --;
            elementCardNavigation.children[currentElementCard].classList.add("navLineSelected");
            hideArrows();
        }
    })
    elementCardsRightArrow.addEventListener("click", () => {
        if(currentElementCard < elementCardNavigation.children.length -1)
        {
            elementCardNavigation.children[currentElementCard].classList.remove("navLineSelected");
            currentElementCard ++;
            elementCardNavigation.children[currentElementCard].classList.add("navLineSelected");
            hideArrows();
        }
    })
}


changeElementsSlide();