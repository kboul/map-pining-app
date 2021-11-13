import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "font-awesome/css/font-awesome.min.css";

import NewPin from "./NewPin";
import Pins from "./Pins";
import useAxios from "./hooks";
import { mapOptions } from "./constants";

export default function Map() {
  const { data: pins } = useAxios({ method: "get", url: "/pins" });

  return (
    <MapContainer
      center={mapOptions.position}
      zoom={mapOptions.zoom}
      style={mapOptions.style}>
      <TileLayer
        attribution={mapOptions.attribution}
        url={mapOptions.tileUrl}
      />
      <Pins pins={pins} />
      <NewPin />
    </MapContainer>
  );
}
