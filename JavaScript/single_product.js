// Main Variables
// shadow gallery and images selectors

let thumbnails = document.querySelectorAll('.thumbnails');
let gallery = document.querySelector('.shadow-gallery');
let expandImg = document.querySelectorAll(".expand");
let images = document.querySelectorAll(".thumbnail-img");


const next = document.querySelectorAll(".next");
const previous = document.querySelectorAll(".previous");


expandImg.forEach((expand) => {
    // Loop through thumbnail images
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener("click", function () {
            for (let i = 0; i < thumbnails.length; i++) {
                thumbnails[i].classList.remove("active");
            }
            this.classList.add("active");
        });
    })
    // show img in mater image when click all images
    images.forEach((img) => {
        img.addEventListener("click", () => {
            expand.src = img.src;
        });
    });

    // Set Event listener for the next button to view next product image
    next.forEach((next) => {
        next.addEventListener("click", () => {
            currentImg = expand.src;
            let i = 0;
            while (i < images.length - 1) {
                if (currentImg === images[i].src) {
                    expand.src = images[i + 1].src;
                }
                i++;
            }
        });
    })

    // Set Event listener for the previous button to view previous product image
    previous.forEach((prev) => {
        prev.addEventListener("click", () => {
            currentImg = expand.src;
            let i = images.length - 1;
            while (i > 0) {
                if (currentImg === images[i].src) {
                    expand.src = images[i - 1].src;
                }
                i--;
            }
        });
    })

    // shadow gallery  on all content
    expand.addEventListener("click", () => {
        if (window.innerWidth <= 480) {
            gallery.style.display = "none";
        } else {
            gallery.style.display = "flex";
        }
    })
})

// delete gallery on click x mark
document.getElementById("xmark").onclick = () => {
    gallery.style.display = "none";
}

//  click in specs "faq"
let faqs  = document.querySelectorAll(".product-organ-list");
let minusSign  = document.querySelectorAll(".minus-sign ");
let plusSign  = document.querySelectorAll(".plus-sign");

for (let i = 0; i < plusSign.length; i++) {
    plusSign[i].addEventListener("click", function () {
        faqs[i].classList.add("organ-list-active");
    });
}

for (let i = 0; i < minusSign.length; i++) {
    minusSign[i].addEventListener("click", function () {
        faqs[i].classList.remove("organ-list-active");
    });
}