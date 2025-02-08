import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import Routes from "./routes.jsx";
import { CountriesProvider } from "./store/CountriesContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CountriesProvider>
      <BrowserRouter basename="/react-countries-api/">
        <Routes />
      </BrowserRouter>
    </CountriesProvider>
  </StrictMode>
);
