// MAP SCRIPT 
const lat = 21.03829956367568
const lng = 105.7826629531152

const map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution:  '© Vietbando'
}).addTo(map);

// Thêm marker cho quán ăn và tạo popup
L.marker([restaurantLat, restaurantLng]).addTo(map)
  .bindPopup('Your Restaurant Here!<br>Enjoy delicious food.')
  .openPopup();