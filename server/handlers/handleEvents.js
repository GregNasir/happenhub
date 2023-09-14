const Event = require('../models/Event');

// apikeys for TicketMaster
let request = new XMLHttpRequest();
let APIKEY = "m0o6ngepm1tvjHNa09clKOFNQZnWVpzK";
let apiData;
//Variables
const eventsListDiv = document.getElementById("events-list");
const searchBtn = document.getElementById("searchBtn");
eventsListDiv.innerHTML = "";

//we push the cities where the events are taking place
function populateCity(apiData) {
    let select = document.getElementById("city-select");
    if (select.options.length > 0) {
        removeOptions(select);
    }
    let cityArray = [];
    for (i in apiData["_embedded"].events) { //our scope
        let currentEvent = apiData["_embedded"].events[i];
        let city = currentEvent["_embedded"].venues[0].city.name;
        if (cityArray.indexOf(city) == -1) { //we make this so the city is not repeated
            let opt = document.createElement('option');
            opt.value = city;
            opt.innerHTML = city;
            select.appendChild(opt);
            cityArray.push(city);
        }
    }

    //we create our variable city from the selected city in our select
    let eleCity = document.getElementById("city-select");
    let city = eleCity.options[eleCity.selectedIndex].text;

    //we create our variable genre from the selected genre in our select
    let eleGenre = document.getElementById("genre-select");
    let genre = eleGenre.options[eleGenre.selectedIndex].text;

    displayNicely(apiData, city, genre);
}

//we push the genre available for the events are taking place
function populateGenre(apiData) {
    let select = document.getElementById("genre-select");
    if (select.options.length > 0) {
        removeOptions(select);
    }

    //we create our variable city from the selected city in our select
    let eleCity = document.getElementById("city-select");
    let city = eleCity.options[eleCity.selectedIndex].text;

    let genreArray = [];
    for (i in apiData["_embedded"].events) { //our scope

        if (apiData._embedded.events[i]._embedded.venues[0].city.name == city) {
            let currentEvent = apiData["_embedded"].events[i];
            let segment = currentEvent.classifications[0].segment.name;
            if (genreArray.indexOf(segment) == -1) {
                let opt = document.createElement('option');
                opt.value = segment;
                opt.innerHTML = segment;
                select.appendChild(opt);
                genreArray.push(segment);
            }

        }
    }

    //we create our variable genre from the selected genre in our select
    let eleGenre = document.getElementById("genre-select");
    let genre = eleGenre.options[eleGenre.selectedIndex].text;

    displayNicely(apiData, city, genre);
}

// function displayNicely loops through the apiData and only displays for the selected country, city and genre.

function displayNicely(apiData, city, genre) {

    console.log(apiData); //To display the data in the console

    let htmlString="HappenHub"; //String used to display api text information in the main HTML element

    for (let i = 0; i < apiData._embedded.events.length; i++) {

        if (apiData._embedded.events[i]._embedded.venues[0].city.name == city) {
            if (apiData._embedded.events[i].classifications[0].segment.name == genre) {
                if (typeof(apiData._embedded.events[i].name) !== "undefined") {
                    htmlString += "<h2><i class='fas fa-star star'></i> " + apiData._embedded.events[i].name + "</h2>";
                }


                if (typeof(apiData._embedded.events[i].images) !== "undefined") {
                    htmlString += "<div class='row justify-content-center'><img src= " + apiData._embedded.events[i].images[0].url + " class='artist-image rounded img-fluid'> </div>"; //artist image***    
                }


                if (typeof(apiData._embedded.events[i].classifications[0].segment.name) !== "undefined") {
                    htmlString += "<p><strong>SEGMENT: </strong> " + apiData._embedded.events[i].classifications[0].segment.name + "</p>";
                }

                if (typeof(apiData._embedded.events[i].classifications[0].genre.name) !== "undefined") {
                    htmlString += "<p><strong>GENRE: </strong>" + apiData._embedded.events[i].classifications[0].genre.name + "</p>";
                }

                if (typeof(apiData._embedded.events[i].classifications[0].subGenre.name) !== "undefined") {
                    htmlString += "<p><strong>SUBGENRE: </strong>" + apiData._embedded.events[i].classifications[0].subGenre.name + "</p>";
                }


                if (typeof(apiData["_embedded"].events[i].classifications[0].type) !== "undefined") {
                    if (apiData["_embedded"].events[i].classifications[0].type.name !== "Undefined") {
                        htmlString += "<p><strong>TYPE: </strong>" + apiData._embedded.events[i].classifications[0].type.name + "</p>";
                    }
                }

                if (typeof(apiData._embedded.events[i].sales.public.startDateTime) !== "undefined") {
                    htmlString += "<p><strong>START DATE TIME: </strong>" + apiData._embedded.events[i].sales.public.startDateTime + "</p>";
                }

                if (typeof(apiData._embedded.events[i].sales.public.endDateTime) !== "undefined") {
                    htmlString += "<p><strong>END DATE TIME: </strong>" + apiData._embedded.events[i].sales.public.endDateTime + "</p>";
                }


                if (typeof(apiData._embedded.events[i].dates.timezone) !== "undefined") {
                    htmlString += "<p><strong>TIMEZONE: </strong>" + apiData._embedded.events[i].dates.timezone + "</p>";
                }


                if (typeof(apiData._embedded.events[i].dates.status.code) !== "undefined") {
                    htmlString += "<p><strong>STATUS: </strong>" + apiData._embedded.events[i].dates.status.code + "</p>";
                }

                if (typeof(apiData._embedded.events[i].info) !== "undefined") {
                    htmlString += "<p><strong>INFORMATION: </strong>" + apiData._embedded.events[i].info + "</p>";
                }

                if (typeof(apiData._embedded.events[i].pleaseNote) !== "undefined") {
                    htmlString += "<p><strong>PLEASE NOTE: </strong>" + apiData._embedded.events[i].pleaseNote + "</p>";
                }

                if (typeof(apiData._embedded.events[i].priceRanges) !== "undefined") {

                    htmlString += "<p><strong>PRICE TYPE: </strong>" + apiData._embedded.events[i].priceRanges[0].type + "</p>";
                    htmlString += "<p><strong>CURRENCY: </strong>" + apiData._embedded.events[i].priceRanges[0].currency + "</p>";
                    htmlString += "<p><strong>PRICE RANGE: </strong>" + apiData._embedded.events[i].priceRanges[0].min + " - ";
                    htmlString += apiData._embedded.events[i].priceRanges[0].max + "</p>";
                }

                if (typeof(apiData._embedded.events[i].ticketLimit) !== "undefined") {
                    htmlString += "<p><strong>TICKET LIMIT INFORMATION: </strong>" + apiData._embedded.events[i].ticketLimit.info + "</p>";
                }

                if (typeof(apiData._embedded.events[i].products) !== "undefined") {
                    htmlString += "<p><strong>PRODUCT TYPE: </strong>" + apiData._embedded.events[i].products[0].type + "</p>";
                }


                if (typeof(apiData._embedded.events[i].seatmap) !== "undefined") {
                    htmlString += "<h3>SEATMAP</h3><div class='row justify-content-center'><img src = " + apiData._embedded.events[i].seatmap.staticUrl + " class='seat-map img-fluid'></div>"; //ADD THE MAP IMAGE DEPENDING ON EACH EVENT*******
                }


                if (typeof(apiData._embedded.events[i]._embedded.venues[0].city.name) !== "undefined") {
                    htmlString += "<p><strong>CITY: </strong>" + apiData._embedded.events[i]._embedded.venues[0].city.name + "</p>"; //CITY***
                }

                if (typeof(apiData._embedded.events[i]._embedded.venues[0].country.name) !== "undefined") {
                    htmlString += "<p><strong>COUNTRY: </strong>" + apiData._embedded.events[i]._embedded.venues[0].country.name + "</p>";
                }

                if (typeof(apiData._embedded.events[i]._embedded.venues[0].country.countryCode) !== "undefined") {
                    htmlString += "<p><strong>COUNTRY CODE: </strong>" + apiData._embedded.events[i]._embedded.venues[0].country.countryCode + "</p>";
                }


                if (typeof(apiData._embedded.events[i]._embedded.venues[0].address.line1) !== "undefined") {
                    htmlString += "<p><strong>VENUE'S ADDRESS: </strong>" + apiData._embedded.events[i]._embedded.venues[0].address.line1 + "</p>";
                }


                if (typeof(apiData._embedded.events[i]._embedded.venues[0].generalInfo) !== "undefined") {
                    htmlString += "<p><strong>CHILD INFORMATION: </strong>" + apiData._embedded.events[i]._embedded.venues[0].generalInfo.childRule + "</p>";
                    htmlString += "<p><strong>GENERAL INFORMATION: </strong>" + apiData._embedded.events[i]._embedded.venues[0].generalInfo.generalRule + "</p>";
                }

                if (typeof(apiData["_embedded"].events[i]["_embedded"].venues[0].images) !== "undefined") { //we add the venue images***

                    htmlString += "<h3>VENUE: </h3><div class='row justify-content-center'><img src =" + apiData._embedded.events[i]._embedded.venues[0].images[0].url + " class='venue-img rounded img-fluid'></div>";
                }


                if (typeof(apiData._embedded.events[i]._embedded.venues[0].parkingDetail) !== "undefined") {
                    htmlString += "<p><strong>PARKING DETAILS: </strong>" + apiData._embedded.events[i]._embedded.venues[0].parkingDetail + "</p>";
                }


                if (typeof(apiData._embedded.events[i].url) !== "undefined") {
                    htmlString += "<p><i class='fas fa-ticket-alt ticket'></i> <strong>BUY YOUR TICKETS HERE: </strong>" + "<a href=" + apiData._embedded.events[i].url + ">Click here</a></p>";
                }

                htmlString += "<hr>";

            }
        }
    }document.getElementById("concert-data").innerHTML = htmlString; //we add the content to our div with id="concert-data"
}

function refreshCities() { //onchange for cities select
    
    //we create our variable city from the selected city in our select
    let eleCity = document.getElementById("city-select");
    let city = eleCity.options[eleCity.selectedIndex].text;

    //we create our variable genre from the selected genre in our select
    let eleGenre = document.getElementById("genre-select");
    let genre = eleGenre.options[eleGenre.selectedIndex].text;

    populateGenre(apiData); //this is going to happen when onchange in the cities select
}

function refreshGenres() { //onchange for genres select

    //we create our variable city from the selected city in our select
    let eleCity = document.getElementById("city-select");
    let city = eleCity.options[eleCity.selectedIndex].text;

    //we create our variable genre from the selected genre in our select
    let eleGenre = document.getElementById("genre-select");
    let genre = eleGenre.options[eleGenre.selectedIndex].text;

    displayNicely(apiData, city, genre); //this is going to happen when onchange in the genres select
}

//what data I want to retrive.......API CALL   OBTAIN OUR DATA
function obtainZipcode() {
    let zipcodeSelect = document.getElementById("zipcode-select"); //we're getting the select element with id="country-select"
    let zipcode = zipcodeSelect.options[zipcodeSelect.selectedIndex].value; //we're getting the value of the option within the select element
    request.open("GET", "https://app.ticketmaster.com/discovery/v2/events.json?zipcode=" + zipcode + "&apikey=m0o6ngepm1tvjHNa09clKOFNQZnWVpzK"); //GET zipcode
    request.send();
}

// CREATE A NEW REQUEST FOR EACH SELECT ELEMENT BECAUSE FROM OUR REQUEST WE GET OUR DATA IN OUR API CALL 
request.onreadystatechange = function() { //the answer is here if we request both the country and the city******* //WE DISPLAY OUR REQUEST IF READYSTATE==4 AND STATUS==200
    if (this.readyState == 4) {
        if (this.status == 200) {
            apiData = JSON.parse(this.responseText)
            populateCity(apiData);
            populateGenre(apiData);
            // displayNicely(apiData); //displayNicely is displayed with the data retrived from the IPA CALL with our request.
            // document.getElementById("concert-data").innerHTML = displayNicely(apiData);
        }
        else if (this.status == 404) {
            document.getElementById("concert-data").innerHTML = "<h2>City not found! Please try again</h2>"
        }

    }
    
}