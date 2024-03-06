/*=============== the navigation menu ===============*/
// Variables
let body = document.querySelector("body");
let menu = document.querySelector(".menu");

let ul = document.querySelector(".items");
let nav = document.querySelector(".nav-content");
let card = document.createElement("div");

// Hide the navigation menu specifically (UL) and show it again when the menu button pressed
menu.addEventListener('click', () => {
    // parentElement.insertBefore(newElement, parentElement.children[2]);
    menu.classList.toggle("open")
    if (menu.classList.contains("open")) {
        body.style.overflowY = "hidden";
        card.classList.add("add");
        nav.insertBefore(card, nav.children[1]);
        card.appendChild(ul);
    }
    else {
        body.style.overflowY = "scroll";
        nav.insertBefore(ul, nav.children[1]);
        card.remove();
    }
})

// add and remove active class from navigation  link

let navLink = document.querySelectorAll('.nav-link')

for (let i = 0; i < navLink.length; i++) {
    navLink[i].addEventListener("click", function () {
        if (navLink[i].classList.contains("active")) {
            navLink[i].classList.remove("active");
        } else {
            for (let n = 0; n < navLink.length; n++) {
                navLink[n].classList.remove("active");
            }
            navLink[i].classList.add("active");
        }
    });
}

// change Language when click the button press
const ChangeLanguage = (language) => {
    const changeLanguage = document.getElementById(language);
    changeLanguage.addEventListener('click', function () {
        if (changeLanguage.dataset.language === "English") {
            changeLanguage.dataset.language = "Arabic"
            changeLanguage.innerText = "En"
        } else {
            changeLanguage.dataset.language = "English"
            changeLanguage.innerText = "Ar"
        }
        console.log(changeLanguage.dataset.language);
    })
}
ChangeLanguage("Change_language");

/*=============== SEARCH BAR JS ===============*/
const toggleSearch = (search, button) => {
    const searchBar = document.getElementById(search),
        searchButton = document.getElementById(button);

    searchButton.addEventListener('click', () => {
        // We add the show-search class, so that the search bar expands
        searchBar.classList.toggle('show-search')
    })
}
toggleSearch('search-bar', 'search-button')