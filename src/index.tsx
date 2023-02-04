import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { DarkModeProvider } from "./providers/DarkModeContext";
import App from "./App";
import "./index.css";
import { FeatureFlagProvider } from "./providers/FeatureFlagContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <HashRouter>
      <FeatureFlagProvider>
        <DarkModeProvider>
          <App />
        </DarkModeProvider>
      </FeatureFlagProvider>
    </HashRouter>
  </React.StrictMode>
);
