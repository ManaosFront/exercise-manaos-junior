import React from "react";
import { Router } from "../common/router";
import { routes } from "./routes";
import "./global.css";

export function App() {
  return <Router routes={routes} />;
}

export default App;
