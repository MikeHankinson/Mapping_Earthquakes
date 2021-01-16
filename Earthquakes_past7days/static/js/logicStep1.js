console.log("working");



// -----------------------------------------------------------------------
// Add Earthquake Data to a Map - 13.6.1 - 13.6.6
// -----------------------------------------------------------------------

// Create the map object with a center and zoom of....
// let map = L.map('mapid').setView([30, 30], 2);
// alternative to the above setView is a bit below....


// TILE LAYER: (LIGHT) STREET VIEW-- the background of the map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// TILE LAYER:  DARK VIEW  that will be an option for our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
    "Streets": streets,
    "Satellite Streets": satelliteStreets
  };

  // Create the map object with center, zoom level and default layer.
  let map = L.map("mapid", {
    center: [39.5, -98.5],
    zoom: 33,
    layers:  [streets]
  });

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);


// Accessing the toronto routs GeoJSON URL
let sevenDayQuakes = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";


// Create a style for the lines.
let myStyle = {
  color: "#0000FF",
  weight: 1
}


d3.json(sevenDayQuakes).then(function(data) {
  console.log(data);
});


// Grabbing our GeoJSON data.
d3.json(torontoHoods).then(function(data) {
    console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJson(data, {
      style: myStyle,
      onEachFeature: function(feature, layer) {
          layer.bindPopup("<h2>Neighborhood: "
           + feature.properties.AREA_NAME + "</h2><hr>");
          }
      }).addTo(map);
})
