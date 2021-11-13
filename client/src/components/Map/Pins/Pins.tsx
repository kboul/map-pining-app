import { format } from "timeago.js";

import MarkerWithResponsivePopup from "../MarkerWithResponsivePopup";
import { Pin, PinProps } from "./models";
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

export default function Pins({ pins }: PinProps) {
  return (
    <>
      {pins.map((pin: Pin) => (
        <MarkerWithResponsivePopup
          key={pin._id}
          markerCoords={{ lat: pin.latitude, lng: pin.longitude }}
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
