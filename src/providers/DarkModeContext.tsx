import React, { createContext } from "react";
import { useLocalStorage } from "../utils/useLocalStorage";

const DarkModeContext = createContext<any>({});

function DarkModeProvider(props: any) {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div>
      <DarkModeContext.Provider
        value={{ darkMode, setDarkMode, toggleDarkMode }}
      >
        {props.children}
      </DarkModeContext.Provider>
    </div>
  );
}

export { DarkModeContext, DarkModeProvider };
