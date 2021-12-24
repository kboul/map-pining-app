import State from "./model";

const getNewPin = (state: State) => ({
  username: "kostas",
  title: state.title,
  description: state.review,
  rating: state.rating,
  lat: state?.newPinPosition?.lat,
  lng: state?.newPinPosition?.lng
});

export { getNewPin };
