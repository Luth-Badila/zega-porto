import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { NavbarFixed } from "./components/Navbar";
import "./assets/styles/main.scss";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NavbarFixed />
    <App />
  </React.StrictMode>
);
