import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import Routes from "./Routes.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/react-countries-api/">
      <Routes />
    </BrowserRouter>
  </StrictMode>
);
