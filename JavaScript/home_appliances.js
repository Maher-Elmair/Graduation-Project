// add and remove class show-cheek-mark

let cardAppliances = document.querySelectorAll(".card")

for (let i = 0; i < cardAppliances.length; i++) {
    cardAppliances[i].addEventListener("click", () => {
        cardAppliances[i].firstElementChild.classList.toggle("show-cheek-mark")
    })
}