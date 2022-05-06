import React, { useContext } from "react";
import { DarkModeContext } from "../../../providers/DarkModeContext";
import { GithubButton } from "../../buttons/";
import reactHeart from "../../assets/reactHeart.svg";
import PDBlue from "../../assets/PDBlue.svg";
import { Links } from "../../../Messages";
import "./AppBar.css";

export const AppBar = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const handleClick = () => {
    toggleDarkMode();
  };

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
          <img src={PDBlue} alt="gift-logo" />
        </a>
        <div>
          <img
            className="pointer"
            src={reactHeart}
            alt="gift-logo"
            onClick={handleClick}
          />
        </div>
      </div>
    </header>
  );
};
