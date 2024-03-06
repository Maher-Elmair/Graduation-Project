let groupSelect = document.querySelectorAll(".group-select-text")
let groupSelectOptions = document.querySelectorAll(".group-select-options")

for (let i = 0; i < groupSelect.length; i++) {
    groupSelect[i].addEventListener("click", () => {
        groupSelectOptions[i].classList.toggle("open")
    })
}

// add and remove hidden class from locations-list
document.querySelector(".befor-map").firstElementChild.addEventListener("click", () => {
    document.querySelector(".befor-map").classList.toggle("hidden")
}
)

// add google map in support page 
function initAutocomplete() {
    // List of location and text title about location in array
    const tourStops = [
        [
            { lat: 30.14042412984508, lng: 31.390768821759067 },
            "Authorized distributor for Toshiba Al Arabi",
        ],
        [
            { lat: 30.04837697870085, lng: 31.20073799671004 },
            "Authorized distributor for Toshiba Al Arabi"
        ],
        [
            { lat: 29.995647330961123, lng: 30.938143651750813 },
            "Authorized distributor for Toshiba Al Arabi"
        ],
        [
            { lat: 31.256752154628792, lng: 29.995851369896034 },
            "Authorized distributor for Toshiba Al Arabi"
        ],
        [
            { lat: 27.38170623035183, lng: 33.65066137680101 },
            "Authorized distributor for Toshiba Al Arabi"
        ],
        [
            { lat: 30.797014122314227, lng: 31.00468932744937 },
            "Authorized distributor for Toshiba Al Arabi"
        ],
        [
            { lat: 31.0310596923409, lng: 31.39393969877573 },
            "Authorized distributor for Toshiba Al Arabi"
        ],
        [
            { lat: 31.045652078558696, lng: 30.468300862080245 },
            "Authorized distributor for Toshiba Al Arabi"
        ],
        [
            { lat: 31.102024318424704, lng: 30.94126894267821 },
            "Authorized distributor for Toshiba Al Arabi"
        ],
    ];

    var map = new google.maps.Map(document.getElementById('map'), {
        center: tourStops[5][0],
        zoom: 8,
        mapTypeId: 'roadmap'
    });

    // Create the search box and link it to the UI element.
    var input = document.getElementById('pac-input');
    var searchBox = new google.maps.places.SearchBox(input);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    // Bias the SearchBox results towards current map's viewport.
    map.addListener('bounds_changed', function () {
        searchBox.setBounds(map.getBounds());
    });

    var markers = [];
    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
    searchBox.addListener('places_changed', function () {
        var places = searchBox.getPlaces();

        if (places.length == 0) {
            return;
        }

        // Clear out the old markers.
        markers.forEach(function (marker) {
            marker.setMap(null);
        });
        markers = [];

        // For each place, get the icon, name and location.
        var bounds = new google.maps.LatLngBounds();
        places.forEach(function (place) {
            if (!place.geometry) {
                console.log("Returned place contains no geometry");
                return;
            }

            // Create a marker for each place.
            markers.push(new google.maps.Marker({
                map: map,
                title: place.name,
                position: place.geometry.location
            }));

            if (place.geometry.viewport) {
                // Only geocodes have viewport.
                bounds.union(place.geometry.viewport);
            } else {
                bounds.extend(place.geometry.location);
            }
        });
        map.fitBounds(bounds);
    });

    // Create an info window to share between markers.
    const infoWindow = new google.maps.InfoWindow();

    // Create the markers.
    tourStops.forEach(([position, title], i) => {
        const marker = new google.maps.Marker({
            position,
            map,
            title: `${title}`,
            title: `${i + 1}. ${title}`,
            label: `${i + 1}`,
            // optimized: false,
        });

        // Add a click listener for each marker, and set up the info window.
        marker.addListener("click", () => {
            infoWindow.close();
            infoWindow.setContent(marker.getTitle());
            infoWindow.open(marker.getMap(), marker);
        });
    });

    // locations variable
    let cairo = document.getElementById("cairo");
    let alexandria = document.getElementById("alexandria");
    let hurghada = document.getElementById("hurghada");
    let tanta = document.getElementById("tanta");
    let mansoura = document.getElementById("mansoura");
    let damanhour = document.getElementById("damanhour");
    let kafrEl_shaikh = document.getElementById("kafrEl_shaikh");

    // when click on location set zoom and center and removeclass hidden in all locations
    cairo.addEventListener("click", () => {
        map.setZoom(10);
        map.setCenter(tourStops[1][0])
        document.querySelector(".befor-map").classList.remove("hidden")
    })
    alexandria.addEventListener("click", () => {
        map.setZoom(13);
        map.setCenter(tourStops[3][0])
        document.querySelector(".befor-map").classList.remove("hidden")
    })
    hurghada.addEventListener("click", () => {
        map.setZoom(13);
        map.setCenter(tourStops[4][0])
        document.querySelector(".befor-map").classList.remove("hidden")
    })
    tanta.addEventListener("click", () => {
        map.setZoom(13);
        map.setCenter(tourStops[5][0])
        document.querySelector(".befor-map").classList.remove("hidden")
    })
    mansoura.addEventListener("click", () => {
        map.setZoom(13);
        map.setCenter(tourStops[6][0])
        document.querySelector(".befor-map").classList.remove("hidden")
    })
    damanhour.addEventListener("click", () => {
        map.setZoom(13);
        map.setCenter(tourStops[7][0])
        document.querySelector(".befor-map").classList.remove("hidden")
    })
    kafrEl_shaikh.addEventListener("click", () => {
        map.setZoom(13);
        map.setCenter(tourStops[8][0])
        document.querySelector(".befor-map").classList.remove("hidden")
    })
}

/*======== form ========*/

let form = document.getElementById("form");
let fName = document.getElementById("full_Name");
let email = document.getElementById("email");
let enquiryType = document.getElementById("enquiry_type");
let serialNumber = document.getElementById("serial_number");

form.addEventListener('submit', e => {
    e.preventDefault();
    const fullNameValue = fName.value.trim();
    const emailValue = email.value.trim();
    const enquiryTypeValue = enquiryType.value.trim();
    const serialNumberValue = serialNumber.value.trim();
   
    //Javascript reGex  
    const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
    const regName = /[a-zA-Z][^#&<>\"~;$^%{}?]{2,20}$/;
    const numberRegex = /^\d+$/;
    const textRegex = /^[A-Za-z]+$/;



    if (fullNameValue === "") {
        error(fName, "full Name Cannot be empty")
    } else if (!fullNameValue.match(regName)) {
        fName.value = "examole";
        error(fName, "please provide a valid Name")
    } else {
        success(fName);
    }

    if (emailValue === "") {
        error(email, "Email Cannot be empty")
    } else if (!emailValue.match(regEmail)) {
        email.value = "email@examole/com";
        error(email, "please provide a valid email address")
    } else {
        success(email, "Done")
    }

    if (serialNumberValue === "") {
        error(serialNumber, "Enquiry type Cannot be empty")
    }else if (!serialNumberValue.match(numberRegex)) {
        serialNumber.value = "4568";
        error(serialNumber, "please provide a valid serial number")
    }else {
        success(serialNumber, "Done");
    }

    if (enquiryTypeValue === "") {
        error(enquiryType, "Enquiry type Cannot be empty")
    }else if (!enquiryTypeValue.match(textRegex)) {
        enquiryType.value = "Technical";
        error(enquiryType, "please provide a valid enquiry type")
    }else {
        success(enquiryType, "Done");
    }
    

})

function error(req, message) {
    const formControl = req.parentElement;
    const span = formControl.querySelector("span");
    span.innerText = message || "Error";
    req.classList.add("error")
    span.classList = "error-text";
}

function success(req, message) {
    const formControl = req.parentElement;
    const span = formControl.querySelector("span");
    span.innerText = message || "Done";
    req.classList.add("success")
    span.classList = "success-text";
}