import { JSXElementConstructor, ReactElement } from "react";
import { LatLngExpression, Popup } from "leaflet";

import { Pin } from "../../../context/models";

export default interface MarkerWithResponsivePopupProps {
  centerMap?: boolean;
  markerCoords: LatLngExpression;
  pin: Pin;
  PopupContent: ReactElement<Popup, string | JSXElementConstructor<Popup>>;
}
