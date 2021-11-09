import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "font-awesome/css/font-awesome.min.css";

import { Pin } from "./models";
import { icon, mapStyle, mapZoom, position, tileUrl } from "./constants";
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
import useAxios from "./hooks";

export default function Map() {
  const { data: pins } = useAxios({ method: "get", url: "/pins" });

  return (
    <MapContainer center={position} zoom={mapZoom} style={mapStyle}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url={tileUrl}
      />
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
              <Date>{pin.createdAt}</Date>
            </PopupInfo>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
