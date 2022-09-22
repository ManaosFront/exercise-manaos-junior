import React from "react";
import { Router } from "../common/router";
import { routes } from "./routes";
import "./global.css";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

export function App() {
  return <Router routes={routes} />;
}

export default App;
