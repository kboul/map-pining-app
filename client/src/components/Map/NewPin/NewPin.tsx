import {
  ChangeEvent,
  SyntheticEvent,
  useEffect,
  useRef,
  useState
} from "react";
import { Marker, Popup, useMap } from "react-leaflet";

import { Label } from "../../styledComponents";
import {
  AddPinButton,
  NewPinForm,
  RatingSelect,
  ReviewTextarea,
  TitleInput
} from "./styledComponents";
import { useAxios } from "../../../hooks";
import { getNewPin } from "./utils";
import State from "./model";
import { icon } from "../constants";
import { initialState } from "./constants";
import { changeState, useAppContext } from "../../../context";

export default function NewPin() {
  const map = useMap();
  const {
    state: { pins },
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

  const { requestSuccessful } = useAxios(
    {
      method: "post",
      url: "/pins",
      data: getNewPin(state)
    },
    callApi
  );

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    setValue("callApi", true);
  };

  useEffect(() => {
    if (!requestSuccessful) return;

    if (popupRef.current) popupRef.current._close();
    dispatch(changeState("pinsChanged", { pins: [...pins, getNewPin(state)] }));
    setState(initialState);
  }, [requestSuccessful]);

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

  const buttonDisabled = !title || !review;

  if (newPinPosition)
    return (
      <Marker position={newPinPosition} icon={icon} ref={markerRef}>
        <Popup ref={popupRef}>
          <NewPinForm onSubmit={handleSubmit}>
            <Label>Title</Label>
            <TitleInput
              onChange={handleTitleChange("title")}
              placeholder="Enter a title"
              value={title}
            />
            <Label>Review</Label>
            <ReviewTextarea
              onChange={handleReviewChange("review")}
              placeholder="Tell us something about the place"
              value={review}
            />
            <Label>Rating</Label>
            <RatingSelect onChange={handleRatingChange("rating")}>
              {new Array(5).fill(undefined).map((_, id) => (
                <option key={id} value={id + 1}>
                  {id + 1}
                </option>
              ))}
            </RatingSelect>
            <AddPinButton disabled={buttonDisabled} type="submit">
              Add Pin
            </AddPinButton>
          </NewPinForm>
        </Popup>
      </Marker>
    );
  return null;
}
