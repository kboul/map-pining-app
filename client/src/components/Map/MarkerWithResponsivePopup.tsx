import { JSXElementConstructor, ReactElement, useEffect, useRef } from "react";
import ReactDOMServer from "react-dom/server";
import { useMap } from "react-leaflet";
import L, { CircleMarker, LatLngExpression } from "leaflet";
import "leaflet-responsive-popup";
import "leaflet-responsive-popup/leaflet.responsive.popup.css";

import { circleMarkerOptions, icon } from "./constants";

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
    const popup = L.responsivePopup().setContent(
      ReactDOMServer.renderToString(PopupContent)
    );

    marker.addTo(map).bindPopup(popup);

    // Events on marker click
    map.on("popupopen", (e: any) => {
      const popupLatLng = e.popup.getLatLng();
      highlight.current = L.circleMarker(
        popupLatLng,
        circleMarkerOptions
      ).addTo(map);
      if (centerMap) map.flyTo(popupLatLng);
    });

    map.on("popupclose", () => {
      if (highlight.current) map.removeLayer(highlight.current);
    });
  }, []);

  return null;
}
