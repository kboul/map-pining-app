import { useEffect } from "react";
import ReactDOMServer from "react-dom/server";
import { useMap } from "react-leaflet";
import L from "leaflet";

import { icon, respPopupOptions } from "../constants";
import { Label } from "../../styledComponents";
import {
  AddPinButton,
  NewPinForm,
  RatingSelect,
  ReviewTextarea,
  TitleInput
} from "./styledComponents";

export default function NewPin() {
  const map = useMap();

  const PopupContent = (
    <NewPinForm>
      <Label>Title</Label>
      <TitleInput placeholder="Enter a title" />
      <Label>Review</Label>
      <ReviewTextarea placeholder="Tell us something about the place" />
      <Label>Rating</Label>
      <RatingSelect>
        {new Array(5).fill(undefined).map((_, id) => (
          <option value={id + 1}>{id + 1}</option>
        ))}
      </RatingSelect>
      <AddPinButton type="submit">Add Pin</AddPinButton>
    </NewPinForm>
  );

  useEffect(() => {
    if (!map) return;

    map.on("dblclick", (e: any) => {
      const popup = L.responsivePopup(respPopupOptions).setContent(
        ReactDOMServer.renderToString(PopupContent)
      );
      L.marker(e.latlng, { icon }).addTo(map).bindPopup(popup);
    });
  }, [map]);

  return null;
}
