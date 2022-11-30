
const languageMenuClose = document.querySelector(".closeLanguageSelectMenu");
const languageSelection = document.querySelector(".languageSelection");
let languageMenu = document.querySelector(".languageMenu")


languageSelection.addEventListener("click", () => {
    languageMenu.classList.toggle("hidden");
})

languageMenuClose.addEventListener("click", () => {
    languageMenu.classList.toggle("hidden");
})
