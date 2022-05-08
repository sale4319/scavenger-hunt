import React, { useContext } from "react";
import { DarkModeContext } from "../../../providers/DarkModeContext";
import { NavigationButton, DarkModeButton } from "../../buttons/";
import { Links } from "../../../Messages";
import "./AppBar.css";

export const AppBar = () => {
  const { darkMode } = useContext(DarkModeContext);

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
          id="pdButton"
          href={`${Links.PD_LINK}`}
          target="_blank"
          rel="noopener noreferrer"
          light={darkMode}
        />

        <DarkModeButton />
      </div>
    </header>
  );
};
