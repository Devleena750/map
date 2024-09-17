// Initialize the map and set its view to a specific geographical location and zoom level
const map = L.map('map').setView([51.505, -0.09], 13);

// Add a tile layer to the map (this is the base map layer)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Add a marker to the map
const marker = L.marker([51.5, -0.09]).addTo(map);

// Bind a popup to the marker
marker.bindPopup('<b>Hello world!</b><br>I am a popup.').openPopup();

// Optionally, add more markers or interact with the map
// Example: Adding another marker
const anotherMarker = L.marker([51.515, -0.1]).addTo(map);
anotherMarker.bindPopup('<b>Another marker</b><br>Different location.');
