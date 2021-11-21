import { Map, NavbarWithAvatar } from "./components";
import { Provider } from "./context";

export default function App() {
  return (
    <Provider>
      <NavbarWithAvatar />
      <Map />
    </Provider>
  );
}
