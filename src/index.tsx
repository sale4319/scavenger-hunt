import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { DarkModeProvider } from "./providers/DarkModeContext";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <HashRouter>
      <DarkModeProvider>
        <App />
      </DarkModeProvider>
    </HashRouter>
  </React.StrictMode>
);
