import React, { createContext } from "react";
import { useLocalStorage } from "../utils/useLocalStorage";

const defaultValues = {
  quizMode: true,
  darkMode: true,
  skipMode: true,
  setDarkMode: () => {},
  setQuizMode: () => {},
  setSkipMode: () => {},
  toggleQuizMode: () => {},
  toggleDarkMode: () => {},
  toggleSkipMode: () => {},
};

export const GameSettingsContext = createContext<any>(defaultValues);

export const GameSettingsProvider = ({ children }) => {
  const [quizMode, setQuizMode] = useLocalStorage("quiz mode", false);
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);
  const [skipMode, setSkipMode] = useLocalStorage("skip mode", false);

  const toggleQuizMode = () => {
    setQuizMode(!quizMode);
  };
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  const toggleSkipMode = () => {
    setSkipMode(!skipMode);
  };
  return (
    <GameSettingsContext.Provider
      value={{
        quizMode,
        skipMode,
        darkMode,
        setDarkMode,
        setQuizMode,
        setSkipMode,
        toggleQuizMode,
        toggleSkipMode,
        toggleDarkMode,
      }}
    >
      {children}
    </GameSettingsContext.Provider>
  );
};
