import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Leaflet CSS
import "leaflet/dist/leaflet.css";

// Your global CSS (keep this if you have it)
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);