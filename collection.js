const collectionSection = document.querySelector(".collectionSection");
const collectionCards = document.querySelector(".collectionCards");

const collectionCardsInfo = [
    {name: "jacket", description: "THE XTREME JACKET 3.0", price: "2495 SEK"},
    {name: "trousers", description: "THE XTREME TROUSERS 3.0", price: "2495 SEK"},
    {name: "cap", description: "THE XTREME CAP 3.0", price: "495 SEK"},
    {name: "keyring", description: "THE XTREME KEYRING 3.0", price: "495 SEK"}
]

const variants = [
    {name: "jacket", normalUrl: "images/collection/jacketOrange.mp4", greenUrl: "images/collection/Jacket-green-180.gif"},
    {name: "trousers", normalUrl: "images/collection/pantsOrange.mp4", greenUrl: "images/collection/green-pant-180.gif"},
    {name: "cap", normalUrl: "images/collection/Keps.png", greenUrl: ""},
    {name: "keychain", normalUrl: "images/collection/Nyckelring.png", greenUrl: ""}
]

for(let i = 0; i < collectionCardsInfo.length; i++)
{
    const collectionCard = document.createElement("article");
    const collectionCardImageContainer = document.createElement("div");
    const collectionCardVideo = document.createElement("video");
    const collectionCardVideoSource = document.createElement("source");
    const collectionCardText = document.createElement("div");
    const itemDescription = document.createElement("p");
    const itemPrice = document.createElement("p");

    collectionCard.classList.add("collectionCard");
    collectionCardImageContainer.classList.add("collectionCardImage");
    collectionCardText.classList.add("collectionCardText");
    itemDescription.classList.add("itemDescription");
    itemPrice.classList.add("itemPrice");
    collectionCardVideo.classList.add("collectionVideo");

    collectionCard.append(collectionCardImageContainer);
    collectionCardImageContainer.append(collectionCardVideo);
    collectionCard.append(collectionCardText);
    collectionCardText.append(itemDescription);
    collectionCardText.append(itemPrice);
    collectionCardVideo.append(collectionCardVideoSource);

    collectionCardVideo.muted=true;
    collectionCardVideoSource.src = variants[i].normalUrl;
    itemDescription.textContent = collectionCardsInfo[i].description;
    itemPrice.textContent = collectionCardsInfo[i].price;

    collectionCardVideo.setAttribute("onmouseover", "this.play()");
    collectionCardVideo.setAttribute("onmouseout", "this.pause();this.currentTime=0;");
    
    collectionCards.append(collectionCard);
}