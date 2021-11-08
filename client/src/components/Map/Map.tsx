import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import { icon, mapStyle, position } from "./constants";

export default function Map() {
  return (
    <MapContainer center={position} zoom={13} style={mapStyle}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Marker position={position} icon={icon}>
        <Popup>A pretty CSS3 popup.Easily customizable.</Popup>
      </Marker>
    </MapContainer>
  );
}
