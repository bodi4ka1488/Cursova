const center = [50.152270061694075, 30.37076258590746];
let map2 = L.map("map").setView(center, 30);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 13,
}).addTo(map2);

L.marker(center).addTo(map2);
