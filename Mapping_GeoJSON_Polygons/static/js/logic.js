console.log("working");



// -----------------------------------------------------------------------
// Map GeoJSON Polygons - 13.5.6
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
    center: [43.7, -79.3],
    zoom: 11,
    layers:  [streets]
  });

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);


// // Then we add our 'graymap' tile layer to the map.
// streets.addTo(map);

// Accessing the toronto routs GeoJSON URL
let torontoHoods = "https://raw.githubusercontent.com/MikeHankinson/Mapping_Earthquakes/main/torontoNeighborhoods.json";


// Create a style for the lines.
let myStyle = {
  color: "#0000FF",
  weight: 1
}


d3.json(torontoHoods).then(function(data) {
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


// =========================================================
// Previous Work Below
// =========================================================

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
// let cityData = cities;

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
// let line = [
//     [33.9416, -118.4085],
//     [37.6213, -122.3790],
//     [40.7899, -111.9791],
//     [47.4502, -122.3088]
//   ];

// Create a polyline using the line coordinates and make the line black.
// L.polyline(line, {
//     color: "yellow"
//  }).addTo(map);


 // -----------------------------------------------------------------------
// Map GEOJSON Point Type - 13.5.2
// -----------------------------------------------------------------------
// Add GeoJSON data.
// let sanFranAirport =
// {"type":"FeatureCollection","features":[{
//     "type":"Feature",
//     "properties":{
//         "id":"3469",
//         "name":"San Francisco International Airport",
//         "city":"San Francisco",
//         "country":"United States",
//         "faa":"SFO",
//         "icao":"KSFO",
//         "alt":"13",
//         "tz-offset":"-8",
//         "dst":"A",
//         "tz":"America/Los_Angeles"},
//         "geometry":{
//             "type":"Point",
//             "coordinates":[-122.375,37.61899948120117]}}
// ]};


// Adding GeoJSON layer, Grabbing the GeoJSON data and Adding to the map. 
// L.geoJSON(sanFranAirport).addTo(map);

// Bind a POPUP to a MARKER:  pointToLayer Callback Function................

// Grabbing our GeoJSON data.
// L.geoJson(sanFranAirport, {
//   // We turn each feature into a marker on the map.
//   pointToLayer: function(feature, latlng) {
//     console.log(feature);
//     return L.marker(latlng)
//   .bindPopup("<h2>" + feature.properties.city + "</h2>")
//   }

// }).addTo(map);


// Bind a POPUP to a MARKER:  onEachFeature Callback Function................
// L.geoJson(sanFranAirport, {
//   onEachFeature: function(feature, layer) {
//     console.log(layer);
//     layer.bindPopup("<h2>" + feature.properties.name + "</h2><hr>" + 
//     "<h3>" + feature.properties.id + "</h3><p>");
//    }
// }).addTo(map);


// -----------------------------------------------------------------------
// Map  Multiple GEOJSON Points - 13.5.3
// -----------------------------------------------------------------------

// Grabbing our GeoJSON data.
// d3.json(airportData).then(function(data) {
//     console.log(data);
//   // Creating a GeoJSON layer with the retrieved data.
//   L.geoJson(data, {
//       onEachFeature: function(feature, layer) {
//           layer.bindPopup("<h2>Airport Code: " + feature.properties.faa + "</h2><hr>" + 
//               "<h2>Airport Name: " + feature.properties.name + "</h3><p>");
//       }
//   }).addTo(map);
// })


// -----------------------------------------------------------------------
// Add GEOJSON Points - 13.5.4
// -----------------------------------------------------------------------

// Create the map object with a center and zoom of....
// let map = L.map('mapid').setView([30, 30], 2);
// alternative to the above setView is a bit below....


// // TILE LAYER: STREET VIEW-- the background of the map.
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });

// // TILE LAYER:  DARK VIEW  that will be an option for our map.
// let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });

// // Create a base layer that holds both maps.
// let baseMaps = {
//     Street: streets,
//     Dark: dark
//   };

//   // Create the map object with center, zoom level and default layer.
//   let map = L.map("mapid", {
//     center: [40.7, -94.5],
//     zoom: 4
//   });

// // Pass our map layers into our layers control and add the layers control to the map.
// L.control.layers(baseMaps).addTo(map);


// // // Then we add our 'graymap' tile layer to the map.
// // streets.addTo(map);


// // Accessing the airport GeoJSON URL
// let airportData = "https://raw.githubusercontent.com/MikeHankinson/Mapping_Earthquakes/main/majorAirports.json";


// // Grabbing our GeoJSON data.
// d3.json(airportData).then(function(data) {
//     console.log(data);
//   // Creating a GeoJSON layer with the retrieved data.
//   L.geoJson(data, {
//       onEachFeature: function(feature, layer) {
//           layer.bindPopup("<h2>Airport Code: " + feature.properties.faa + "</h2><hr>" + 
//               "<h2>Airport Name: " + feature.properties.name + "</h3><p>");
//       }
//   }).addTo(map);
// })


// -----------------------------------------------------------------------
// Add GEOJSON Linestrings - 13.5.5
// -----------------------------------------------------------------------

// Create the map object with a center and zoom of....
// let map = L.map('mapid').setView([30, 30], 2);
// alternative to the above setView is a bit below....


// TILE LAYER: (LIGHT) STREET VIEW-- the background of the map.
// let light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });

// // TILE LAYER:  DARK VIEW  that will be an option for our map.
// let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });

// // Create a base layer that holds both maps.
// let baseMaps = {
//     Light: light,
//     Dark: dark
//   };

//   // Create the map object with center, zoom level and default layer.
//   let map = L.map("mapid", {
//     center: [44, -80.0],
//     zoom: 4,
//     layers:  [light]
//   });

// // Pass our map layers into our layers control and add the layers control to the map.
// L.control.layers(baseMaps).addTo(map);


// // // Then we add our 'graymap' tile layer to the map.
// // streets.addTo(map);

// // Accessing the toronto routs GeoJSON URL
// let torontoData = "https://raw.githubusercontent.com/MikeHankinson/Mapping_Earthquakes/main/torontoRoutes.json";


// // Create a style for the lines.
// let myStyle = {
//   color: "#ffffa1",
//   weight: 2
// }

// // Grabbing our GeoJSON data.
// d3.json(torontoData).then(function(data) {
//     console.log(data);
//   // Creating a GeoJSON layer with the retrieved data.
//   L.geoJson(data, {
//       style: myStyle,
//       onEachFeature: function(feature, layer) {
//           layer.bindPopup("<h2>Airline: " + feature.properties.airline + "</h2><hr>" + 
//               "<h2>Destination: " + feature.properties.dst + "</h3><p>");
//       }
//   }).addTo(map);
// })
