// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
// let map = L.map('mapid').setView([34.0522, -118.2437], 14);
let map = L.map('mapid').setView([40.7, -94.5], 4);

// TILE LAYER -- background of the map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY  
    // pk.eyJ1IjoiaGFua2ltcyIsImEiOiJja2p1OHNpdG4wMDR1MzBxdHFtdXVjd2Z0In0.i3d_PQV5IltgsiTOXn5AcA";

});
// Then add the 'graymap' tile layer to the map.
streets.addTo(map);

// -----------------------------------------------------------------------
// Map a Single Point - 13.4.1
// -----------------------------------------------------------------------

// //  Add a MARKER to the map for Los Angeles, California. 
// let marker = L.marker([34.0522, -118.2437]).addTo(map);

// //  Add a CIRCLE to the map for Los Angeles, California. 
// // OPTION 1
// L.circle([34.0522, -118.2437], {
//     radius: 100,
//     color: "red"
//     // fill opacity:
//  }).addTo(map);

// //  Add a CIRCLE to the map for Los Angeles, California. 
// // OPTION 2
// L.circleMarker([34.0522, -118.2437], {
//     radius: 300,
//     color: "black",
//     // fill color: '#ffffa1'
// }).addTo(map);

// -----------------------------------------------------------------------
// Map Multiple Points - 13.4.2
// -----------------------------------------------------------------------
// Replace MARKER variable with CITYDATA variable.    
// Get data from cities.js
let cityData = cities;

// // Loop through the cities array and create one MARKER for each city.
// cityData.forEach(function(city) {
//     console.log(city)
//     L.marker(city.location).addTo(map)
//     .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>");
// });


// Loop through the cities array and create CIRCLE with radius
// proportional to city's population
cityData.forEach(function(city) {
    console.log(city)
    L.circleMarker(city.location, {
        radius: city.population/100000
    })
    .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
    .addTo(map);
});
