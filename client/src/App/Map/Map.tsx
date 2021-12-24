import { useEffect } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import NewPin from "./NewPin";
import Pins from "./Pins";
import { useAppContext, changeState, types } from "../../context";
import { useAxios } from "../../hooks";
import { mapOptions } from "./constants";

export default function Map() {
  const { dispatch } = useAppContext();

  const { data: pins } = useAxios({ method: "get", url: "/pins" });

  useEffect(() => {
    if (pins && pins.length > 0)
      dispatch(changeState(types.pinsChanged, { pins }));
  }, [pins]);

  return (
    <MapContainer
      center={mapOptions.position}
      zoom={mapOptions.zoom}
      style={mapOptions.style}>
      <TileLayer
        attribution={mapOptions.attribution}
        url={mapOptions.tileUrl}
      />
      <Pins />
      <NewPin />
    </MapContainer>
  );
}
