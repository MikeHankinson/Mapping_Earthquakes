console.log("working");

// Create the map object with a center and zoom level.
// let map = L.map('mapid').setView([34.0522, -118.2437], 14);
// let map = L.map('mapid').setView([40.7, -94.5], 4);
// let map = L.map('mapid').setView([36.1733, -120.1794], 7);
// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.6213, -122.3790], 5);

// TILE LAYER -- the background of the map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

// -----------------------------------------------------------------------
// Map a Single Point - 13.4.1
// -----------------------------------------------------------------------

//  Add a MARKER to the map for Los Angeles, California. 
// let marker = L.marker([34.0522, -118.2437]).addTo(map);



//  Add a CIRCLE to the map for Los Angeles, California. 
// OPTION 1
// L.circle([34.0522, -118.2437], {
//     radius: 100,
//     color: "red"
//     // fill opacity:
//  }).addTo(map);


//  Add a CIRCLE to the map for Los Angeles, California. 
// OPTION 2
// L.circleMarker([34.0522, -118.2437], {
//     radius: 300,
//     color: "black",
//     // fill color: '#ffffa1'
// }).addTo(map);


//  Add a CIRCLE to the map for Los Angeles, California. 4.3.1
// OPTION 2
// L.circleMarker([34.0522, -118.2437], {
//     radius: 300,
//     color: "black",
//     fillColor: '#ffffa1'
// }).addTo(map);


// -----------------------------------------------------------------------
// Map Multiple Points - 13.4.2
// -----------------------------------------------------------------------
// Replace MARKER variable with CITYDATA variable.    
// Get data from cities.js
let cityData = cities;

// Loop through the cities array and create one MARKER for each city.
// cityData.forEach(function(city) {
//     console.log(city)
//     L.marker(city.location).addTo(map)
//     .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>");
// });

// !!Tried doing above in the manner of Activities 01 below (Dimas Liked) --  Doesn't work
// cityData.forEach(city => L.marker(city.city)
//                         .bindPopup(`<h1>${city.state}</h1> <hr> <h3>Population ${city.population}</h3>`)
//                         .addTo(map));



// Loop through the cities array and create CIRCLE with radius
// proportional to city's population
// cityData.forEach(function(city) {
//     console.log(city)
//     L.circleMarker(city.location, {
//         radius: city.population/100000
//     })
//     .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
//     .addTo(map);
// });



// -----------------------------------------------------------------------
// Map Lines - 13.4.3
// -----------------------------------------------------------------------

// 1 Line......................
// Coordinates for each point to be used in the line.
// let line = [
//     [33.9416, -118.4085],
//     [37.6213, -122.3790]
//   ];

// Create a polyline using the line coordinates and make the line red.
// L.polyline(line, {
//     color: "red"
//   }).addTo(map);

// Multiple Lines............
// Coordinates for each point to be used in the polyline.
let line = [
    [33.9416, -118.4085],
    [37.6213, -122.3790],
    [40.7899, -111.9791],
    [47.4502, -122.3088]
  ];

// Create a polyline using the line coordinates and make the line black.
L.polyline(line, {
    color: "yellow"
 }).addTo(map);
