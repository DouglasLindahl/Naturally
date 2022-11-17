
const body = document.querySelector("body");
const elementCardsRightArrow = document.querySelector(".rightArrow");
const elementCardsLeftArrow = document.querySelector(".leftArrow");
const heroScrollDownArrow = document.querySelector(".scrollArrow");
const elementCardNavigation = document.querySelector(".cardNavigation")
const elementCardsContainer = document.querySelector(".elementCardsContainer");
const elementCardsScrollContainer = document.querySelector(".scrollContainer");
const elementCardsScrollContainerTwo = document.getElementById("test");
const heroJumpSection = document.getElementById("heroJumpSection");
const elementScroll = document.querySelector("elementScroll");


let currentElementCard = 0;
const howManyCards = 4;

const cards = [
    {header: "CONTROL THE ELEMENTS", img:"images/triangle.png", infoHeader: "ALWAYS WATERPROOF", info: "Shields you and keeps you dry in all your endeavours. From snowstorms to moonsoon rain, or while commuting to work."},
    {header: "CONTROL THE ELEMENTS", img:"images/triangle.png", infoHeader: "PERFECTLY WINDPROOF", info: "Guards you from one of the strongest elements, wind. No gust will cool you of, even when exposed to icy winds."},
    {header: "DIRT NEGLECTING", img:"images/triangle.png", infoHeader: "DIRT NEGLECTING", info: "Defends you from dirt and scratches. With our new tecnology it´s hard to leave a mark on your gear even during the toughest adventures."},
    {header: "FIRE RESISTANT", img:"images/triangle.png", infoHeader: "FIRE RESISTANT", info: "Shelter you from the campfire without harming the gear. This material feature has allready saved many lives."}
]
const card = {header: "CONTROL THE ELEMENTS", img:"images/triangle.png", infoHeader: "ALWAYS WATERPROOF", info: "Shields you and keeps you dry in all your endeavours. From snowstorms to moonsoon rain, or while commuting to work."};

for (let i = 0; i < cards.length; i++) {
    let elementCard = document.createElement("article");
    elementCard.classList.add("elementCard")

    let cardHeader = document.createElement("h3");
    let cardImg = document.createElement("img");

    let cardText = document.createElement("div");
   cardText.classList.add("elementText")

    let cardInfoHeader = document.createElement("h4");
    let cardInfoText = document.createElement("p");

    cardHeader.textContent = cards[i].header;
    cardImg.src = cards[i].img;
    cardInfoHeader.textContent = cards[i].infoHeader;
    cardInfoText.textContent = cards[i].info;

    cardText.append(cardInfoHeader);
    cardText.append(cardInfoText);
    elementCard.append(cardHeader);
    elementCard.append(cardImg);
    elementCard.append(cardText);

    elementCardsScrollContainerTwo.append(elementCard);
}
elementCardsScrollContainer.append(elementScroll);
for(let i = 0; i < howManyCards; i++)
{
    let cardNavi = document.createElement("div");
    cardNavi.classList.add("navigationLine");
    elementCardNavigation.append(cardNavi);
}



heroScrollDown = () => {
    heroScrollDownArrow.addEventListener("click", () => {
        heroJumpSection.scrollIntoView();
    })
}

cardMove = () => {
    let howMuchToMove = 100 * (-currentElementCard);
    elementCardsScrollContainerTwo.style.marginLeft = howMuchToMove + "vw";
}
const changeElementsSlide = () => {

    elementCardsLeftArrow.addEventListener("click", () => {
        if(currentElementCard > 0)
        {
            elementCardNavigation.children[currentElementCard].classList.remove("navLineSelected");
            currentElementCard --;
            elementCardNavigation.children[currentElementCard].classList.add("navLineSelected");
        }
        else if(currentElementCard <= 0)
        {
            elementCardNavigation.children[currentElementCard].classList.remove("navLineSelected");
            currentElementCard = cards.length;
            elementCardNavigation.children[currentElementCard].classList.add("navLineSelected");
        }
        cardMove();
    })
    elementCardsRightArrow.addEventListener("click", () => {
        if(currentElementCard < elementCardNavigation.children.length - 1)
        {
            elementCardNavigation.children[currentElementCard].classList.remove("navLineSelected");
            currentElementCard ++;
            elementCardNavigation.children[currentElementCard].classList.add("navLineSelected");
        }
        else if(currentElementCard >= elementCardNavigation.children.length - 1)
        {
            elementCardNavigation.children[currentElementCard].classList.remove("navLineSelected");
            currentElementCard = 0;
            elementCardNavigation.children[currentElementCard].classList.add("navLineSelected");
        }
        cardMove();
    })
}


changeElementsSlide();
heroScrollDown();