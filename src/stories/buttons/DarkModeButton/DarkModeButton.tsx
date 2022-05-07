import React, { useContext } from "react";
import { DarkModeContext } from "../../../providers/DarkModeContext";
import { useLocalStorage } from "../../../utils/useLocalStorage";
import "./DarkModeButton.css";

export const DarkModeButton = () => {
  let clickedClass = "clicked";
  const body = document.body;
  const lightTheme = "light";
  const darkTheme = "dark";
  const [theme, setTheme] = useLocalStorage("theme", darkTheme);
  const { toggleDarkMode } = useContext(DarkModeContext);

  if (theme === lightTheme || theme === darkTheme) {
    body.classList.add(theme);
  }

  const switchTheme = (e) => {
    if (theme === lightTheme) {
      body.classList.replace(lightTheme, darkTheme);
      e.target.classList.remove(clickedClass);
      localStorage.setItem("darkMode", JSON.stringify(true));
      setTheme(darkTheme);
    } else {
      body.classList.replace(darkTheme, lightTheme);
      e.target.classList.add(clickedClass);
      localStorage.setItem("darkMode", JSON.stringify(false));
      setTheme(lightTheme);
    }
    toggleDarkMode();
  };

  return (
    <button
      className={theme === "light" ? clickedClass : ""}
      id="darkMode"
      onClick={(e) => switchTheme(e)}
    ></button>
  );
};
