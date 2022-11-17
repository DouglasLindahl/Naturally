
const body = document.querySelector("body");
const elementCardsRightArrow = document.querySelector(".rightArrow");
const elementCardsLeftArrow = document.querySelector(".leftArrow");
const elementCardNavigation = document.querySelector(".cardNavigation")
const elementCardsContainer = document.querySelector(".elementCardsContainer");
const elementCardsScrollContainer = document.querySelector(".scrollContainer");
const elementCardsScrollContainerTwo = document.getElementById("test");


let currentElementCard = 0;
const howManyCards = 4;

const cards = [
    {header: "CONTROL THE ELEMENTS", img:"images/triangle.png", infoHeader: "ALWAYS WATERPROOF", info: "Shields you and keeps you dry in all your endeavours. From snowstorms to moonsoon rain, or while commuting to work."},
    {header: "CONTROL aa THE ELEMENTS", img:"images/triangle.png", infoHeader: "ALWAYS WATERPROOF", info: "Shields you and keeps you dry in all your endeavours. From snowstorms to moonsoon rain, or while commuting to work."}
]
const card = {header: "CONTROL THE ELEMENTS", img:"images/triangle.png", infoHeader: "ALWAYS WATERPROOF", info: "Shields you and keeps you dry in all your endeavours. From snowstorms to moonsoon rain, or while commuting to work."};
/*
for (let i = 0; i < 4; i++) {
    let elementCard = document.createElement("article");
    elementCard.classList.add("elementCard")

    let cardHeader = document.createElement("h3");
    let cardImg = document.createElement("img");

    let cardText = document.createElement("div");
   cardText.classList.add("elementText")

    let cardInfoHeader = document.createElement("h4");
    let cardInfoText = document.createElement("p");

    cardHeader.textContent = cards[1].header;
    cardImg.src = cards[0].img;
    cardInfoHeader.textContent = cards[0].infoHeader;
    cardInfoText.textContent = cards[0].info;

    cardText.append(cardInfoHeader);
    cardText.append(cardInfoText);
    elementCard.append(cardHeader);
    elementCard.append(cardImg);
    elementCard.append(cardText);

    elementCardsScrollContainer.append(elementCard);
}*/
for(let i = 0; i < howManyCards; i++)
{
    let cardNavi = document.createElement("div");
    cardNavi.classList.add("navigationLine");
    elementCardNavigation.append(cardNavi);
}

const hideArrows = () => {
    if(currentElementCard == 0)
    {
        //elementCardsLeftArrow.classList.add("invisible");
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

cardMove = () => {
    let howMuchToMove = 200 * (currentElementCard);
    elementCardsScrollContainerTwo.style.marginRight = howMuchToMove + "vw";
}
const changeElementsSlide = () => {

    elementCardsLeftArrow.addEventListener("click", () => {
        if(currentElementCard > 0)
        {
            elementCardNavigation.children[currentElementCard].classList.remove("navLineSelected");
            currentElementCard --;
            cardMove();
            elementCardNavigation.children[currentElementCard].classList.add("navLineSelected");
            hideArrows();
        }
    })
    elementCardsRightArrow.addEventListener("click", () => {
        if(currentElementCard < elementCardNavigation.children.length -1)
        {
            elementCardNavigation.children[currentElementCard].classList.remove("navLineSelected");
            currentElementCard ++;
            cardMove();
            elementCardNavigation.children[currentElementCard].classList.add("navLineSelected");
            hideArrows();
        }
    })
}


changeElementsSlide();