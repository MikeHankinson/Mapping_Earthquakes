// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([40.7, -94.5], 4);


// TILE LAYER -- background of the map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY  
    // pk.eyJ1IjoiaGFua2ltcyIsImEiOiJja2p1OHNpdG4wMDR1MzBxdHFtdXVjd2Z0In0.i3d_PQV5IltgsiTOXn5AcA";

});
// Then add the 'graymap' tile layer to the map.
streets.addTo(map);