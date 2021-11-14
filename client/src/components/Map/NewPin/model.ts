import { LatLngLiteral } from "leaflet";

export default interface State {
  newPinPosition: LatLngLiteral | null;
  title: string;
  review: string;
  rating: string;
  callApi: boolean;
}
