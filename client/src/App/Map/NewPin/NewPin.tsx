import {
  ChangeEvent,
  SyntheticEvent,
  useEffect,
  useRef,
  useState
} from "react";
import { Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";

import { Label } from "../styledComponents";
import * as Styled from "./styledComponents";
import { useAxios } from "../../../hooks";
import { changeState, useAppContext, types } from "../../../context";
import { getNewPin } from "./utils";
import State from "./model";
import { initialState } from "./constants";

export default function NewPin() {
  const map = useMap();
  const {
    state: { currentUser, pins },
    dispatch
  } = useAppContext();

  const [state, setState] = useState<State>(initialState);
  const popupRef = useRef<any>();
  const markerRef = useRef<any>();

  const { newPinPosition, title, review, callApi } = state;

  const setValue = (key: string, value: any) =>
    setState(prevState => ({ ...prevState, [key]: value }));

  const handleTitleChange =
    (key: string) => (e: ChangeEvent<HTMLInputElement>) =>
      setValue(key, e.target.value);

  const handleReviewChange =
    (key: string) => (e: ChangeEvent<HTMLTextAreaElement>) =>
      setValue(key, e.target.value);

  const handleRatingChange =
    (key: string) => (e: ChangeEvent<HTMLSelectElement>) =>
      setValue(key, e.target.value);

  const { data: newPin } = useAxios(
    {
      method: "post",
      url: "/pins",
      data: getNewPin(currentUser, state)
    },
    callApi
  );

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    if (!currentUser) {
      popupRef.current._close();
      setState(initialState);
      return alert("Please login to be able to save a pin!");
    }

    setValue("callApi", true);
  };

  useEffect(() => {
    if (!newPin) return;

    if (popupRef.current) popupRef.current._close();
    dispatch(changeState(types.pinsChanged, { pins: [...pins, newPin] }));
    setState(initialState);
  }, [newPin]);

  useEffect(() => {
    if (!map) return;

    map.on("dblclick", (e: any) => {
      const { lat, lng } = e.latlng;
      setState(prevState => ({ ...prevState, newPinPosition: { lat, lng } }));
    });
  }, [map]);

  useEffect(() => {
    if (markerRef.current) markerRef.current.openPopup();
  }, [newPinPosition]);

  const icon = L.divIcon({ html: "", className: "" });
  const addPinBtnDisabled = !title || !review;

  if (newPinPosition)
    return (
      <Marker position={newPinPosition} icon={icon} ref={markerRef}>
        <Popup ref={popupRef}>
          <Styled.NewPinForm onSubmit={handleSubmit}>
            <Label>Title</Label>
            <Styled.TitleInput
              onChange={handleTitleChange("title")}
              placeholder="Enter a title"
              value={title}
            />
            <Label>Review</Label>
            <Styled.ReviewTextarea
              onChange={handleReviewChange("review")}
              placeholder="Tell us something about the place"
              value={review}
            />
            <Label>Rating</Label>
            <Styled.RatingSelect onChange={handleRatingChange("rating")}>
              {new Array(5).fill(undefined).map((_, id) => (
                <option key={id} value={id + 1}>
                  {id + 1}
                </option>
              ))}
            </Styled.RatingSelect>
            <Styled.AddPinButton disabled={addPinBtnDisabled} type="submit">
              Add Pin
            </Styled.AddPinButton>
          </Styled.NewPinForm>
        </Popup>
      </Marker>
    );
  return null;
}
