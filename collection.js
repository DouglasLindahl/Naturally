let collectionSection = document.querySelector(".collectionSection");
let collectionCards = document.querySelector(".collectionCards");

const collectionCardsInfo = [
    {name: "jacket", description: "", price: 2495},
    {name: "trousers", description: "", price: 2495},
    {name: "cap", description: "", price: 2495},
]

const variants = [
    {name: "jacket", normalUrl: "", greenUrl: ""},
    {name: "trousers", normalUrl: "", greenUrl: ""},
    {name: "cap", normalUrl: "", greenUrl: ""},
]

for(let i = 0; i < collectionCardsInfo.length; i++)
{
    let collectionCard = document.createElement("article");
    let collectionCardImageContainer = document.createElement("div");
    let collectionCardImage = document.createElement("img");
    let collectionCardText = document.createElement("div");
    let itemDescription = document.createElement("p");
    let itemPrice = document.createElement("p");

    collectionCard.classList.add("collectionCard");
    collectionCardImageContainer.classList.add("collectionCardImage");
    collectionCardText.classList.add("collectionCardText");
    itemDescription.classList.add("itemDescription");
    itemPrice.classList.add("itemPrice");

    collectionCard.append(collectionCardImageContainer);
    collectionCardImageContainer.append(collectionCardImage);
    collectionCard.append(collectionCardText);
    collectionCardText.append(itemDescription);
    collectionCardText.append(itemPrice);

    collectionCardImage.src = variants[i].normalUrl;
    itemDescription.textContent = collectionCardsInfo[i].description;
    itemPrice.textContent = collectionCardsInfo[i].price;
    
    collectionCards.append(collectionCard);
}