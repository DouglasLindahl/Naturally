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
    const collectionCardText = document.createElement("div");
    const itemDescription = document.createElement("p");
    const itemPrice = document.createElement("p");
    const colorButtonOrange = document.createElement("div");
    const colorButtonGreen = document.createElement("div");


    collectionCard.classList.add("collectionCard");
    collectionCardImageContainer.classList.add("collectionCardMediaContainer");
    collectionCardText.classList.add("collectionCardText");
    itemDescription.classList.add("itemDescription");
    itemPrice.classList.add("itemPrice");
    colorButtonOrange.classList.add("viewColorOrange");
    colorButtonGreen.classList.add("viewColorGreen");

    collectionCard.append(collectionCardImageContainer, collectionCardText);
    collectionCardText.append(itemDescription, itemPrice);
    collectionCardImageContainer.append(colorButtonOrange, colorButtonGreen);

    itemDescription.textContent = collectionCardsInfo[i].description;
    itemPrice.textContent = collectionCardsInfo[i].price;
    
    collectionCards.append(collectionCard);

    if (variants[i].normalUrl.includes(".png", ".jpg", ".jpeg", ".gif", ".svg") === true)
    {
        const collectionCardImage = document.createElement("img");
        collectionCardImage.src = variants[i].normalUrl;

        collectionCardImage.classList.add("collectionVideo");

        collectionCardImageContainer.append(collectionCardImage);

    }
    else{
        const collectionCardVideo = document.createElement("video");
        const collectionCardVideoSource = document.createElement("source");

        collectionCardVideoSource.src = variants[i].normalUrl;

        collectionCardVideo.append(collectionCardVideoSource);
        collectionCardImageContainer.append(collectionCardVideo);

        collectionCardVideo.classList.add("collectionVideo");

        collectionCardVideo.setAttribute("onmouseover", "this.play()");
        collectionCardVideo.setAttribute("onmouseout", "this.pause();this.currentTime=0;");
        collectionCardVideo.muted=true;
    }
}