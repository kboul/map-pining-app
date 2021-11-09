import L from "leaflet";

const icon = L.icon({
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  iconUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png"
});

const position = { lat: 46, lng: 17 };

const mapStyle = { height: "100vh" };

const mapZoom = 5;

const tileUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

export { icon, mapStyle, mapZoom, position, tileUrl };
