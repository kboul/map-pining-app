import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "font-awesome/css/font-awesome.min.css";

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

export default function Map() {
  return (
    <MapContainer center={position} zoom={mapZoom} style={mapStyle}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url={tileUrl}
      />
      <Marker position={position} icon={icon}>
        <Popup>
          <PopupInfo>
            <Label>Place</Label>
            <Place>Eiffel Tower</Place>
            <Label>Review</Label>
            <Description>Beautiful place. I like it.</Description>
            <Label>Rating</Label>
            <StarContainer>
              {new Array(5).fill(undefined).map((_, id) => (
                <Star className="fa fa-2x fa-star" key={id} />
              ))}
            </StarContainer>
            <Label>Information</Label>
            <User>
              Created by <Username>user</Username>
            </User>
            <Date>1 hour ago</Date>
          </PopupInfo>
        </Popup>
      </Marker>
    </MapContainer>
  );
}
