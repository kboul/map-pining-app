import { format } from "timeago.js";

import MarkerWithResponsivePopup from "../MarkerWithResponsivePopup";
import { Label } from "../../styledComponents";
import * as Styled from "./styledComponents";
import { useAppContext } from "../../../context";
import { Pin } from "../../../context/models";

export default function Pins() {
  const {
    state: { pins }
  } = useAppContext();

  return (
    <>
      {pins.map((pin: Pin) => (
        <Styled.PinContainer key={pin._id}>
          <MarkerWithResponsivePopup
            markerCoords={{ lat: pin.lat, lng: pin.lng }}
            PopupContent={
              <Styled.PopupInfo>
                <Label>Place</Label>
                <Styled.Place>{pin.title}</Styled.Place>
                <Label>Review</Label>
                <Styled.Description>{pin.description}</Styled.Description>
                <Label>Rating</Label>
                <Styled.StarContainer>
                  {new Array(pin.rating).fill(undefined).map((_, id) => (
                    <Styled.Star className="fa fa-2x fa-star" key={id} />
                  ))}
                </Styled.StarContainer>
                <Label>Information</Label>
                <Styled.User>
                  Created by <Styled.Username>{pin.username}</Styled.Username>
                </Styled.User>
                <Styled.Date>{format(pin.createdAt)}</Styled.Date>
              </Styled.PopupInfo>
            }
          />
        </Styled.PinContainer>
      ))}
    </>
  );
}
