import { JSXElementConstructor, ReactElement, useEffect, useRef } from "react";
import ReactDOMServer from "react-dom/server";
import { useMap } from "react-leaflet";
import L, { CircleMarker, LatLngExpression } from "leaflet";
import "leaflet-responsive-popup";
import "leaflet-responsive-popup/leaflet.responsive.popup.css";

import { icon } from "./constants";

interface MarkerWithResponsivePopupProps {
  centerMap?: boolean;
  markerCoords: LatLngExpression;
  PopupContent: ReactElement<any, string | JSXElementConstructor<any>>;
}

export default function MarkerWithResponsivePopup({
  centerMap = true,
  markerCoords,
  PopupContent
}: MarkerWithResponsivePopupProps) {
  const map = useMap();
  const highlight = useRef<CircleMarker>();

  useEffect(() => {
    const marker = L.marker(markerCoords, { icon });
    const popup = L.responsivePopup({
      hasTip: true,
      autoPan: true,
      offset: [15, 20]
    }).setContent(ReactDOMServer.renderToString(PopupContent));

    marker.addTo(map).bindPopup(popup);

    // Events on marker click
    map.on("popupopen", (e: any) => {
      highlight.current = L.circleMarker(e.popup.getLatLng(), {
        radius: 15,
        opacity: 0,
        fillColor: "#000000",
        fillOpacity: 0.3
      }).addTo(map);
      if (centerMap) map.flyTo(e.popup.getLatLng());
    });

    map.on("popupclose", () => {
      if (highlight.current) map.removeLayer(highlight.current);
    });
  }, []);

  return null;
}
