import { GlobalStateProvider } from "../components/GlobalStateProvider/GlobalStateProvider";
import { Router } from "../common/router";
import { routes } from "./routes";
import "./global.css";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

export function App() {
  return (
    <GlobalStateProvider>
      <Router routes={routes} />
    </GlobalStateProvider>
  );
}

export default App;
