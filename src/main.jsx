import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./global.scss";
import { ModalContextProvider } from "./contexts/modalContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ModalContextProvider>
      <App />
    </ModalContextProvider>
  </React.StrictMode>
);
