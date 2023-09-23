import { useContext } from "react";
import { GameSettingsContext } from "../../../providers/GameSettingsContext";
import { DarkModeButton } from "../../buttons";

import { Links } from "../../../Messages";
import "./AppMenu.css";

export const AppMenu = () => {
  const { darkMode } = useContext(GameSettingsContext);
  return (
    <nav className="menu">
      <input
        type="checkbox"
        className="menu-open"
        name="menu-open"
        id="menu-open"
      />
      <label
        className={
          darkMode
            ? "menu-open-button menu-open-button--dark"
            : "menu-open-button menu-open-button--light"
        }
        htmlFor="menu-open"
      >
        <span className="hamburger hamburger-1"></span>
        <span className="hamburger hamburger-2"></span>
        <span className="hamburger hamburger-3"></span>
      </label>
      <a
        href={`${Links.GITHUB}`}
        className="menu-item"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="githubButton"></i>
      </a>
      <a
        href={`${Links.TRELLO}`}
        className="menu-item"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="trelloButton"></i>
      </a>
      <div className="menu-item">
        <DarkModeButton />
      </div>
    </nav>
  );
};
