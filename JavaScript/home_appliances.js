// work with show-cheek-mark class name Where it is not repeated more than once

let cardHomeAppliances = document.querySelectorAll(".card");
let cheekBoxMark = document.querySelectorAll(".cheek-box");


for (let i = 0; i < cardHomeAppliances.length; i++) {
    cardHomeAppliances[i].addEventListener("click", function () {
        for (let n = 0; n < cardHomeAppliances.length; n++) {
            cheekBoxMark[n].classList.remove("show-cheek-mark");
        }
        cheekBoxMark[i].classList.add("show-cheek-mark");

        // work with show-products class name Where it is not repeated more than once
        let productsCards = document.querySelectorAll(".products-cards ");

        let laundryProducts = document.getElementById("laundry_products")
        let refrigeratorProducts = document.getElementById("refrigerator_products")
        let othersProducts = document.getElementById("others_products")

        if (cardHomeAppliances[0].firstElementChild.classList.contains("show-cheek-mark")) {
            for (let x = 0; x < productsCards.length; x++) {
                productsCards[x].classList.remove("show-products");
            }
            laundryProducts.classList.add("show-products");
        }
        if (cardHomeAppliances[1].firstElementChild.classList.contains("show-cheek-mark")) {
            for (let x = 0; x < productsCards.length; x++) {
                productsCards[x].classList.remove("show-products");
            }
            refrigeratorProducts.classList.add("show-products");
        }
        if (cardHomeAppliances[2].firstElementChild.classList.contains("show-cheek-mark")) {
            for (let x = 0; x < productsCards.length; x++) {
                productsCards[x].classList.remove("show-products");
            }
            othersProducts.classList.add("show-products");
        }
    });
}