import React from "react";
import ReactDOM from "react-dom/client";
import { DarkModeProvider } from "./providers/DarkModeContext";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <DarkModeProvider>
      <App />
    </DarkModeProvider>
  </React.StrictMode>
);
