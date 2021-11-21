import { JSXElementConstructor, ReactElement, useEffect } from "react";
import ReactDOMServer from "react-dom/server";
import { useMap } from "react-leaflet";
import L, { LatLngExpression, Popup } from "leaflet";
import "leaflet-responsive-popup";
import "leaflet-responsive-popup/leaflet.responsive.popup.css";

import { BootstrapIcon } from "..";

const icon = L.divIcon({
  html: ReactDOMServer.renderToString(
    <BootstrapIcon height="32" fill="blue" icon="geoAltFill" width="32" />
  ),
  className: "",
  iconAnchor: [15, 28],
  popupAnchor: [0, -25]
});

interface MarkerWithResponsivePopupProps {
  centerMap?: boolean;
  markerCoords: LatLngExpression;
  PopupContent: ReactElement<Popup, string | JSXElementConstructor<Popup>>;
}

export default function MarkerWithResponsivePopup({
  centerMap = true,
  markerCoords,
  PopupContent
}: MarkerWithResponsivePopupProps) {
  const map = useMap();

  useEffect(() => {
    const marker = L.marker(markerCoords, { icon });
    const popup = L.responsivePopup().setContent(
      ReactDOMServer.renderToString(PopupContent)
    );

    marker.addTo(map).bindPopup(popup);

    map.on("popupopen", (e: any) => {
      if (centerMap) map.flyTo(e.popup.getLatLng());
    });
  }, []);

  return null;
}
