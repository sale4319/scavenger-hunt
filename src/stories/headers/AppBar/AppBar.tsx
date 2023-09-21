import { useContext } from "react";
import { GameSettingsContext } from "../../../providers/GameSettingsContext";
import { NavigationButton, DarkModeButton } from "../../buttons/";

import { Links } from "../../../Messages";
import "./AppBar.css";

export const AppBar = () => {
  const { darkMode } = useContext(GameSettingsContext);

  return (
    <header>
      <div
        className={
          darkMode
            ? "app-wrapper app-wrapper--dark"
            : "app-wrapper app-wrapper--light"
        }
      >
        <NavigationButton
          id="githubButton"
          href={`${Links.GITHUB}`}
          target="_blank"
          rel="noopener noreferrer"
          light={darkMode}
        />
        <NavigationButton
          id="trelloButton"
          href={`${Links.TRELLO}`}
          target="_blank"
          rel="noopener noreferrer"
          light={darkMode}
        />
        <DarkModeButton />
      </div>
    </header>
  );
};
