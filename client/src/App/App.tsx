import { AppNavbar } from "../components";
import Map from "./Map";
import { Provider } from "../context";

export default function App() {
  return (
    <Provider>
      <AppNavbar />
      <Map />
    </Provider>
  );
}
