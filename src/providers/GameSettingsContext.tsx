import React, { createContext } from "react";
import { useLocalStorage } from "../utils/useLocalStorage";

const GameSettingsContext = createContext<any>({});

function GameSettingsProvider(props: any) {
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
    <div>
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
        {props.children}
      </GameSettingsContext.Provider>
    </div>
  );
}

export { GameSettingsContext, GameSettingsProvider };
