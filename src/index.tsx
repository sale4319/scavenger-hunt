import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
import { GameSettingsProvider } from "./providers/GameSettingsContext";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <HashRouter>
      <GameSettingsProvider>
        <App />
      </GameSettingsProvider>
    </HashRouter>
  </React.StrictMode>
);
