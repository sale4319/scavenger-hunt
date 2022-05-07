import React, { useContext } from "react";
import { DarkModeContext } from "../../../providers/DarkModeContext";
import { GithubButton, DarkModeButton } from "../../buttons/";
import PDBlue from "../../assets/PDBlue.svg";
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
        <div>
          <GithubButton
            href={`${Links.GITHUB}`}
            target="_blank"
            rel="noopener noreferrer"
            size={35}
          />
        </div>
        <a href={`${Links.PD_LINK}`} target="_blank" rel="noopener noreferrer">
          <img src={PDBlue} id="pdButton" alt="gift-logo" />
        </a>
        <div>
          <DarkModeButton />
        </div>
      </div>
    </header>
  );
};
