
// MAP SCRIPT 
var map = L.map('map').setView([21.02014554822514, 105.784259312448], 13);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);



//Side navbar 
const menuBtn = document.getElementById('menu-btn');
const sideNavbar = document.getElementById('side-navbar');
const overlay = document.getElementById('overlay');

menuBtn.addEventListener('click', () => {
  sideNavbar.style.transform = 'translateX(0)';
  overlay.classList.add('active');
});

const closeNavbar = () => {
  sideNavbar.style.transform = 'translateX(100%)';
  overlay.classList.remove('active');

}




//Search box
const searchBox = document.getElementById('search-box');
const closeBtn = document.getElementById('close-btn');
const searchBtn = document.getElementById('search-btn');

searchBtn.addEventListener('click', () => {
  searchBox.style.transform = 'translateX(0)';
  overlay.classList.add('active');
})

const closeSearchBox = () => {
  searchBox.style.transform = 'translateX(100%)';
}
closeBtn.addEventListener('click', closeSearchBox);


//Close All
overlay.addEventListener('click', () => {
  closeNavbar();
  closeSearchBox();
});

