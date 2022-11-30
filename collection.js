let collectionSection = document.querySelector(".collectionSection");
let collectionCards = document.querySelector(".collectionCards");

const collectionCardsInfo = [
    {name: "jacket", description: "THE XTREME JACKET 3.0", price: "2495 SEK"},
    {name: "trousers", description: "THE XTREME TROUSERS 3.0", price: "2495 SEK"},
    {name: "cap", description: "THE XTREME CAP 3.0", price: "495 SEK"},
    {name: "keyring", description: "THE XTREME KEYRING 3.0", price: "495 SEK"}
]

const variants = [
    {name: "jacket", normalUrl: "images/collection/jacketOrange.mp4", greenUrl: "images/collection/Jacket-green-180.gif"},
    {name: "trousers", normalUrl: "images/collection/pantsOrange.mp4", greenUrl: "images/collection/green-pant-180.gif"},
    {name: "cap", normalUrl: "images/collection/cap-box.png", greenUrl: ""},
    {name: "keychain", normalUrl: "images/collection/keychain.png", greenUrl: ""}
]

for(let i = 0; i < collectionCardsInfo.length; i++)
{
    // let collectionCard = document.createElement("article");
    // let collectionCardImageContainer = document.createElement("div");
    // let collectionCardImage = document.createElement("img");
    // let collectionCardText = document.createElement("div");
    // let itemDescription = document.createElement("p");
    // let itemPrice = document.createElement("p");

    // collectionCard.classList.add("collectionCard");
    // collectionCardImageContainer.classList.add("collectionCardImage");
    // collectionCardText.classList.add("collectionCardText");
    // itemDescription.classList.add("itemDescription");
    // itemPrice.classList.add("itemPrice");

    // collectionCard.append(collectionCardImageContainer);
    // collectionCardImageContainer.append(collectionCardImage);
    // collectionCard.append(collectionCardText);
    // collectionCardText.append(itemDescription);
    // collectionCardText.append(itemPrice);

    // collectionCardImage.src = variants[i].normalUrl;
    // itemDescription.textContent = collectionCardsInfo[i].description;
    // itemPrice.textContent = collectionCardsInfo[i].price;
    
    // collectionCards.append(collectionCard);

    let collectionCard = document.createElement("article");
    let collectionCardImageContainer = document.createElement("div");
    let collectionCardVideo = document.createElement("video");
    let collectionCardVideoSource = document.createElement("source");
    let collectionCardText = document.createElement("div");
    let itemDescription = document.createElement("p");
    let itemPrice = document.createElement("p");

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

    // collectionCardVideo.addEventListener("mouseover", () => {
    //     collectionCardVideo.play();
    // })
    // collectionCardVideo.addEventListener("mouseout", () => {
    //     collectionCardVideo.pause();
    // })
    
    collectionCards.append(collectionCard);
}