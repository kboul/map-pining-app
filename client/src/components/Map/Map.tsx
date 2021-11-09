import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "font-awesome/css/font-awesome.min.css";

import Pins from "./Pins";
import useAxios from "./hooks";
import { mapStyle, mapZoom, position, tileUrl } from "./constants";

export default function Map() {
  const { data: pins } = useAxios({ method: "get", url: "/pins" });

  return (
    <MapContainer center={position} zoom={mapZoom} style={mapStyle}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url={tileUrl}
      />
      <Pins pins={pins} />
    </MapContainer>
  );
}
