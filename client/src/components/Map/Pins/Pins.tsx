import { format } from "timeago.js";

import MarkerWithResponsivePopup from "../MarkerWithResponsivePopup";
import { Label } from "../../styledComponents";
import {
  Date,
  Description,
  Place,
  PopupInfo,
  Star,
  StarContainer,
  User,
  Username
} from "./styledComponents";
import { useAppContext } from "../../../context";
import { Pin } from "../../../context/models";

export default function Pins() {
  const {
    state: { pins }
  } = useAppContext();

  return (
    <>
      {pins.map((pin: Pin) => (
        <MarkerWithResponsivePopup
          key={pin._id}
          markerCoords={{ lat: pin.lat, lng: pin.lng }}
          PopupContent={
            <PopupInfo>
              <Label>Place</Label>
              <Place>{pin.title}</Place>
              <Label>Review</Label>
              <Description>{pin.description}</Description>
              <Label>Rating</Label>
              <StarContainer>
                {new Array(pin.rating).fill(undefined).map((_, id) => (
                  <Star className="fa fa-2x fa-star" key={id} />
                ))}
              </StarContainer>
              <Label>Information</Label>
              <User>
                Created by <Username>{pin.username}</Username>
              </User>
              <Date>{format(pin.createdAt)}</Date>
            </PopupInfo>
          }
        />
      ))}
    </>
  );
}
