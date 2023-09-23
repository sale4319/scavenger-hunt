import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { GameSettingsProvider } from "./providers/GameSettingsContext";
import { RoutingProvider } from "./providers/RoutingContext";
import App from "./App";
import "./index.css";
import {
  IS_DEVELOPMENT,
  MOCK_API_REQUESTS,
  PUBLIC_URL,
} from "./shared/services/api/mocks/constants";
import { worker } from "./shared/services/api/mocks/browser";

if (window && !window.__ENV__) {
  window.__ENV__ = {};
}

if (IS_DEVELOPMENT) {
  if (window.location.pathname === process.env.PUBLIC_URL) {
    window.location.pathname = `${process.env.PUBLIC_URL}/`;
  }

  if (MOCK_API_REQUESTS) {
    /* eslint-disable-next-line @typescript-eslint/no-floating-promises */
    worker.start({
      serviceWorker: {
        url: `${PUBLIC_URL}/mockServiceWorker.js`,
      },
      onUnhandledRequest: "bypass",
    });
  }
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <HashRouter>
      <GameSettingsProvider>
        <RoutingProvider>
          <App />
        </RoutingProvider>
      </GameSettingsProvider>
    </HashRouter>
  </React.StrictMode>
);
