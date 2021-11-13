import L, { ResponsivePopupOptions } from "leaflet";

const icon = L.icon({
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  iconUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png"
});

const mapOptions = {
  attribution:
    '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
  position: { lat: 46, lng: 17 },
  style: { height: "100vh" },
  tileUrl: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  zoom: 5
};

const respPopupOptions: ResponsivePopupOptions = {
  hasTip: true,
  autoPan: true,
  offset: [15, 20]
};

export { icon, mapOptions, respPopupOptions };
