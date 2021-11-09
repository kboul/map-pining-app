import { Marker, Popup } from "react-leaflet";
import { format } from "timeago.js";

import { Pin } from "./models";
import {
  Date,
  Description,
  Label,
  Place,
  PopupInfo,
  Star,
  StarContainer,
  User,
  Username
} from "./styledComponents";
import { icon } from "./constants";

export default function Pins({ pins }: { pins: Pin[] }) {
  return (
    <>
      {pins.map((pin: Pin) => (
        <Marker
          icon={icon}
          key={pin._id}
          position={{ lat: pin.latitude, lng: pin.longitude }}>
          <Popup>
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
          </Popup>
        </Marker>
      ))}
    </>
  );
}
