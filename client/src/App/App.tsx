import { AppNavbar, AppMap } from "../components";
import { Provider } from "../context";

export default function App() {
  return (
    <Provider>
      <AppNavbar />
      <AppMap />
    </Provider>
  );
}
