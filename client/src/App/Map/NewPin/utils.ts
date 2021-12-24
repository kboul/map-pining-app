import State from "./model";

const getNewPin = (currentUser: string, state: State) => ({
  username: currentUser,
  title: state.title,
  description: state.review,
  rating: state.rating,
  lat: state?.newPinPosition?.lat,
  lng: state?.newPinPosition?.lng
});

export { getNewPin };
