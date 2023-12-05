import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";

import App from "./App.tsx";
import { NavbarFixed } from "./components/Navbar";

import "./assets/styles/main.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NavbarFixed />
    <App />
  </React.StrictMode>
);
