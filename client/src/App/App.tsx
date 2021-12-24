import Map from "./Map";
import NavbarWithAvatar from "./NavbarWithAvatar";
import { Provider } from "../context";

export default function App() {
  return (
    <Provider>
      <NavbarWithAvatar />
      <Map />
    </Provider>
  );
}
