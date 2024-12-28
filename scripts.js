
// MAP SCRIPT 
var map = L.map('map').setView([21.02014554822514, 105.784259312448], 13);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
