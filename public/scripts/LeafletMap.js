var map = L.map('map', {
    scrollWheelZoom: false,
    touchZoom: false,
    dragging: !L.Browser.mobile,
}).setView([45.956766, 12.613887], 17);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var myIcon = L.icon({
    iconUrl: 'marker.png',
    iconSize: [32, 53],
    iconAnchor: [16, 53],
});
L.marker([45.956766, 12.613887], {icon: myIcon}).addTo(map);
