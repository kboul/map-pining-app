import { useEffect } from "react";
import ReactDOMServer from "react-dom/server";
import { useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet-responsive-popup";
import "leaflet-responsive-popup/leaflet.responsive.popup.css";

import { SvgIcon } from "../..";
import MarkerWithResponsivePopupProps from "./model";
import { useAppContext } from "../../../context";

const getIcon = (color: string) =>
  L.divIcon({
    html: ReactDOMServer.renderToString(
      <SvgIcon height="32" fill={color} icon="geoAltFill" width="32" />
    ),
    className: "",
    iconAnchor: [15, 28],
    popupAnchor: [0, -25]
  });

export default function MarkerWithResponsivePopup({
  centerMap = true,
  markerCoords,
  pin,
  PopupContent
}: MarkerWithResponsivePopupProps) {
  const map = useMap();

  const {
    state: { currentUser }
  } = useAppContext();

  const icon = getIcon(pin.username === currentUser ? "tomato" : "purple");

  useEffect(() => {
    const marker = L.marker(markerCoords, { icon });
    const popup = L.responsivePopup().setContent(
      ReactDOMServer.renderToString(PopupContent)
    );

    marker.addTo(map).bindPopup(popup);

    map.on("popupopen", (e: any) => {
      if (centerMap) map.flyTo(e.popup.getLatLng());
    });
  }, [currentUser]);

  return null;
}
