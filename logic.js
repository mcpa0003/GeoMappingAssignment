// // Store our API endpoint inside queryUrl
// // var queryUrl = "http://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2014-01-01&endtime=" +
// //   "2014-01-02&maxlongitude=-69.52148437&minlongitude=-123.83789062&maxlatitude=48.74894534&minlatitude=25.16517337";

// var queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_month.geojson";

// // Perform a GET request to the query URL
// d3.json(queryUrl, function(data) {
//   // Once we get a response, send the data.features object to the createFeatures function
//   createFeatures(data.features);
// });

// function createFeatures(earthquakeData) {

//   // Define a function we want to run once for each feature in the features array
//   // Give each feature a popup describing the place and time of the earthquake
//   function onEachFeature(feature, layer) {
//     layer.bindPopup("<h3>" + feature.properties.place +
//       "</h3><hr><p>" + new Date(feature.properties.time) + "</p>" +
//       "</h3><hr><p>" + "Magnitude: " + feature.properties.mag + "</p>");

       
    

  
  
  
  
//     }






  

//   // Create a GeoJSON layer containing the features array on the earthquakeData object
//   // Run the onEachFeature function once for each piece of data in the array
//   var earthquakes = L.geoJSON(earthquakeData, {
//     onEachFeature: onEachFeature
//   });

//   // Sending our earthquakes layer to the createMap function
//   createMap(earthquakes);
// }

// function createMap(earthquakes) {

//   // Define streetmap and darkmap layers
//   var streetmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
//     attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
//     maxZoom: 18,
//     id: "mapbox.streets",
//     accessToken: API_KEY
//   });

//   var darkmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
//     attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
//     maxZoom: 18,
//     id: "mapbox.dark",
//     accessToken: API_KEY
//   });

//   // Define a baseMaps object to hold our base layers
//   var baseMaps = {
//     "Street Map": streetmap,
//     "Dark Map": darkmap
//   };

//   // Create overlay object to hold our overlay layer
//   var overlayMaps = {
//     Earthquakes: earthquakes
//   };

//   // Create our map, giving it the streetmap and earthquakes layers to display on load
//   var myMap = L.map("map", {
//     center: [
//       37.09, -95.71
//     ],
//     zoom: 5,
//     layers: [streetmap, earthquakes]
//   });

//   // Create a layer control
//   // Pass in our baseMaps and overlayMaps
//   // Add the layer control to the map
//   L.control.layers(baseMaps, overlayMaps, {
//     collapsed: false
//   }).addTo(myMap);
// }





//Loop through the cities array and create one marker for each city object
// for (var i = 0; i < countries.length; i++) {

//   // Conditionals for countries points
//   var color = "";
//   if (countries[i].points > 200) {
//     color = "yellow";
//   }
//   else if (countries[i].points > 100) {
//     color = "blue";
//   }
//   else if (countries[i].points > 90) {
//     color = "green";
//   }
//   else {
//     color = "red";
//   }

  
//   // Add circles to map
//   L.circle(countries[i].location, {
//     fillOpacity: 0.75,
//     color: "white",
//     fillColor: color,
//     // Adjust radius
//     radius: countries[i].points * 1500
//   }).bindPopup("<h1>" + countries[i].name + "</h1> <hr> <h3>Points: " + 
//   countries[i].points + "</h3>").addTo(myMap);
// }








// Store our API endpoint inside queryUrl
// var queryUrl = "http://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2014-01-01&endtime=" +
//   "2014-01-02&maxlongitude=-69.52148437&minlongitude=-123.83789062&maxlatitude=48.74894534&minlatitude=25.16517337";

var queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_month.geojson";

// Perform a GET request to the query URL
d3.json(queryUrl, function(data) {
  // Once we get a response, send the data.features object to the createFeatures function
  createFeatures(data.features);
});







// function colors(population) {
//   return population / 40;
// }
// radius: markerSize(cities[i].population)







  function styleInformation(feature) {




    var x = "";
    if (feature.properties.mag > 6.2) {
      x = "red";
    }
    else if (feature.properties.mag > 5.5) {
      x = "yellow";
    }
    else if (feature.properties.mag > 4.8) {
      x = "green";
    }
    else {
      x = "blue";
    }



  



    return {
      opacity: 1,
      fillOpacity: 1,
      //fillColor: "#98ee00",
      fillColor: x,
      //fillColor: "red",
      //color: "#000000",
      color: "black",
      radius: ((feature.properties.mag) - 2.7) * 4.2,
      stroke: true,
      weight: 0.5
    };
  }

function createFeatures(earthquakeData) {

  // Define a function we want to run once for each feature in the features array
  // Give each feature a popup describing the place and time of the earthquake
  function onEachFeature(feature, layer) {
    layer.bindPopup("<h3>" + feature.properties.place +
    "</h3><hr><p>" + new Date(feature.properties.time) + "</p>" +
    "</h3><hr><p>" + "Magnitude: " + feature.properties.mag + "</p>");


  }

  // Create a GeoJSON layer containing the features array on the earthquakeData object
  // Run the onEachFeature function once for each piece of data in the array
  var earthquakes = L.geoJSON(earthquakeData, {
    pointToLayer: function(feature, place) {
      return L.circleMarker(place);
    },
    style: styleInformation,
    onEachFeature: onEachFeature
  });

  // Sending our earthquakes layer to the createMap function
  createMap(earthquakes);
}


function createMap(earthquakes) {

  // Define streetmap and darkmap layers
  var streetmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken: API_KEY
  });

  var darkmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.dark",
    accessToken: API_KEY
  });

  // Define a baseMaps object to hold our base layers
  var baseMaps = {
    "Street Map": streetmap,
    "Dark Map": darkmap
  };

  // Create overlay object to hold our overlay layer
  var overlayMaps = {
    Earthquakes: earthquakes
  };

  // Create our map, giving it the streetmap and earthquakes layers to display on load
  var myMap = L.map("map", {
    center: [
      37.09, -95.71
    ],
    zoom: 3,
    layers: [streetmap, earthquakes]
  });

  // Create a layer control
  // Pass in our baseMaps and overlayMaps
  // Add the layer control to the map
  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(myMap);




  // var info = L.control({
  //   position: "bottomright"
  // });



  // info.onAdd = function() {
  //   var div = L.DomUtil.create("div", "legend");
  //   return div;
  // };
  // // Add the info legend to the map
  // info.addTo(map); 





// labels = ["high", "medium", "something", "low"]
//  colors1 = ["red", "yellow", "green", "blue"]


// for (var i = 0; i < colors1.length; i++) {

  // Conditionals for countries points
//   var color = "";
//   if (countries[i].points > 200) {
//     color = "yellow";
//   }
//   else if (countries[i].points > 100) {
//     color = "blue";
//   }
//   else if (countries[i].points > 90) {
//     color = "green";
//   }
//   else {
//     color = "red";
//   }




// //   // // Set up the legend
  var legend = L.control({ position: "bottomright" });
  legend.onAdd = function() {
    var div = L.DomUtil.create("div", "info legend");
    //var limits = geojson.options.limits;
    //var colors = geojson.options.colors;
    // var colors = colors1;
     var labels = [];

    // Add min & max
    var legendInfo = "<h3>Magnitude Legend</h3>" +
    "<hr>" +
    //"<p>Over 6.2</p>" +

    //"<hr>" + "<p>" + "Magnitude: " + "</p>" +

      // "<p id="something;">This is a paragraph.</p>" +
        
         "<p style=\"color:red;\">Over 6.2</p>" +
         "<p style=\"color:yellow;\">5.6 - 6.2</p>" +
         "<p style=\"color:green;\">4.9 - 5.5</p>" +
         "<p style=\"color:blue;\">4.5 - 4.8</p>" +
    //     "<p>Low Stations: " + "</p>",
    // "<p class='healthy'>Healthy Stations: " + "</p>"


      "</div>";

    div.innerHTML = legendInfo;

    // limits.forEach(function(limit, index) {
    //   labels.push("<li style=\"background-color: " + colors[index] + "\"></li>");
    // });

    // div.innerHTML += "<ul>" + labels.join("") + "</ul>";
    // return div;

    div.innerHTML += "<ul>" + "Richter Scale Readings" + "</ul>";
    return div;
  };

  // Adding legend to the map
  legend.addTo(myMap);







//   var legend = L.control({position: 'bottomright'});

// legend.onAdd = function (myMap) {

// var div = L.DomUtil.create('div', 'info legend'),
//     grades = [1795, 1945, 1960, 1980, 2000],
//     labels = [];

// for (var i = 0; i < grades.length; i++) {
//     div.innerHTML +=
//         '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
//         grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
//  }

//  return div;
//  };

//  legend.addTo(myMap);





// var breaks = [17, 14, 0];
// var labels = ['good', 'fair', 'poor'];

// function getColor(d) {
//   return d >= breaks[0] ? 'green' :
//   d >= breaks[1] ? "#ffff00" :
//   "red";
//  }


//  var legend = L.control({position: 'bottomright'});
// legend.onAdd = function (myMap) {
//  var div = L.DomUtil.create('div', 'info legend');
//  //loop through items and generate legend
//  for (var i = 0; i < breaks.length; i++) {
//  div.innterHTML +=
//  '<i style="background:' +
// getColor(breaks[i]) + ' "></i> ' +
//  labels[i] + (breaks ? ' ' + '<br>' : '');
//  }
//  return div;
// };
// legend.addTo(myMap);







}