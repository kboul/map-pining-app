import { format } from "timeago.js";
import { Label, Rating } from "flowbite-react";

import MarkerWithResponsivePopup from "./MarkerWithResponsivePopup";
import { useAppContext } from "../../context";
import { Pin } from "../../context/models";

export default function Pins() {
  const {
    state: { pins }
  } = useAppContext();

  return (
    <>
      {pins.map((pin: Pin) => (
        <div key={pin._id}>
          <MarkerWithResponsivePopup
            markerCoords={{ lat: pin.lat, lng: pin.lng }}
            pin={pin}
            PopupContent={
              <form className="flex flex-col">
                <div className="mb-2">
                  <div className="mb-2 block">
                    <Label htmlFor="place" value="Place" />
                  </div>
                  <div>{pin.title}</div>
                </div>

                <div className="mb-2">
                  <div className="mb-2 block">
                    <Label htmlFor="review" value="Review" />
                  </div>
                  <div>{pin.description}</div>
                </div>

                <div className="mb-2">
                  <div className="mb-2 block">
                    <Label htmlFor="rating" value="Rating" />
                  </div>
                  <Rating>
                    {new Array(pin.rating).fill(undefined).map((_, id) => (
                      <Rating.Star key={id} />
                    ))}
                  </Rating>
                </div>

                <div className="mb-2">
                  <div className="mb-2 block">
                    <Label htmlFor="information" value="Information" />
                  </div>
                  <div>
                    Created by <b>{pin.username}</b> {format(pin.createdAt)}
                  </div>
                </div>
              </form>
            }
          />
        </div>
      ))}
    </>
  );
}
