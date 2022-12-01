const collectionSection = document.querySelector(".collectionSection");
const collectionCards = document.querySelector(".collectionCards");

const collectionCardsInfo = [
    {name: "jacket", description: "THE XTREME JACKET 3.0", price: "2495 SEK"},
    {name: "trousers", description: "THE XTREME TROUSERS 3.0", price: "2495 SEK"},
    {name: "cap", description: "THE XTREME CAP 3.0", price: "495 SEK"},
    {name: "keyring", description: "THE XTREME KEYRING 3.0", price: "495 SEK"}
]

const variants = [
    {name: "jacket", normalUrl: "images/collection/jacketOrange.mp4", greenUrl: "images/collection/jacketGreen.mp4"},
    {name: "trousers", normalUrl: "images/collection/pantsOrange.mp4", greenUrl: "images/collection/pantsGreen.mp4"},
    {name: "cap", normalUrl: "images/collection/naturallyGreenCap.png"},
    {name: "keychain", normalUrl: "images/collection/naturallyKeyring.png"}
]

for(let i = 0; i < collectionCardsInfo.length; i++)
{   
    const collectionCard = document.createElement("article");
    const collectionCardImageContainer = document.createElement("div");
    const collectionCardText = document.createElement("div");
    const itemDescription = document.createElement("p");
    const itemPrice = document.createElement("p");

    collectionCard.classList.add("collectionCard");
    collectionCardImageContainer.classList.add("collectionCardMediaContainer");
    collectionCardText.classList.add("collectionCardText");
    itemDescription.classList.add("itemDescription");
    itemPrice.classList.add("itemPrice");

    collectionCard.append(collectionCardImageContainer, collectionCardText);
    collectionCardText.append(itemDescription, itemPrice);

    itemDescription.textContent = collectionCardsInfo[i].description;
    itemPrice.textContent = collectionCardsInfo[i].price;
    
    collectionCards.append(collectionCard);

    if (variants[i].normalUrl.includes(".png", ".jpg", ".jpeg", ".gif", ) === true)
    {
        const collectionCardImage = document.createElement("img");
        collectionCardImage.src = variants[i].normalUrl;

        collectionCardImage.classList.add("collectionVideo");

        collectionCardImageContainer.append(collectionCardImage);

    }
    else{
        const collectionCardVideo = document.createElement("video");
        const collectionCardVideoSource = document.createElement("source");
        const colorButtonOrange = document.createElement("div");
        const colorButtonGreen = document.createElement("div");  

        collectionCardVideo.setAttribute("src", variants[i].normalUrl);

        collectionCardVideo.append(collectionCardVideoSource);
        collectionCardImageContainer.append(collectionCardVideo);
        collectionCardImageContainer.append(colorButtonOrange, colorButtonGreen);

        collectionCardVideo.classList.add("collectionVideo");
        colorButtonOrange.classList.add("viewColorOrange");
        colorButtonOrange.classList.add("selectedButton");
        colorButtonGreen.classList.add("viewColorGreen");

        collectionCardVideo.setAttribute("onmouseover", "this.play()");
        collectionCardVideo.setAttribute("onmouseout", "this.pause();this.currentTime=0;");
        collectionCardVideo.muted=true;

        const changeItemColor = () => {
            colorButtonGreen.addEventListener("click", () => {
            colorButtonGreen.classList.add("selectedButton");
            colorButtonOrange.classList.remove("selectedButton");
            collectionCardVideo.setAttribute("src", variants[i].greenUrl);
        })
            colorButtonOrange.addEventListener("click", () => {
                colorButtonOrange.classList.add("selectedButton");
                colorButtonGreen.classList.remove("selectedButton");
                collectionCardVideo.setAttribute("src", variants[i].normalUrl);
            })
        }
        changeItemColor();
    }
}