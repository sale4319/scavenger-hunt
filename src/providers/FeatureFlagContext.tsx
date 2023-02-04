import React, { createContext } from "react";
import { useLocalStorage } from "../utils/useLocalStorage";

const FeatureFlagContext = createContext<any>({});

function FeatureFlagProvider(props: any) {
  const [quizMode, setQuizMode] = useLocalStorage("quiz mode", false);
  const [promptMode, setPromptMode] = useLocalStorage("prompt mode", false);
  const [skipMode, setSkipMode] = useLocalStorage("skip mode", false);

  const toggleQuizMode = () => {
    setQuizMode(!quizMode);
  };
  const togglePromptMode = () => {
    setPromptMode(!promptMode);
  };
  const toggleSkipMode = () => {
    setSkipMode(!skipMode);
  };
  return (
    <div>
      <FeatureFlagContext.Provider
        value={{
          quizMode,
          promptMode,
          skipMode,
          setQuizMode,
          setPromptMode,
          setSkipMode,
          toggleQuizMode,
          togglePromptMode,
          toggleSkipMode,
        }}
      >
        {props.children}
      </FeatureFlagContext.Provider>
    </div>
  );
}

export { FeatureFlagContext, FeatureFlagProvider };
