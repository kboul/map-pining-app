import Map from "./components/Map";
import { Provider } from "./context";

export default function App() {
  return (
    <Provider>
      <Map />
    </Provider>
  );
}
