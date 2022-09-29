import React, { useContext, useState } from "react";
import { DarkModeContext } from "../../../providers/DarkModeContext";
import { AppBar } from "../../headers";
import questionMark from "../../assets/question-mark.png";
import "./Container.css";

interface ContainerProps {
  children: any;
}

export const Container = ({ children, ...props }: ContainerProps) => {
  const { darkMode } = useContext(DarkModeContext);
  const [isPlaying, setIsPlaying] = useState(true);

  const handleStop = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <article className={darkMode ? "container-dark" : "container-light"}>
      <AppBar />
      <section
        className={
          darkMode
            ? "container section-container container-dark "
            : "container section-container container-light"
        }
      >
        {children}
      </section>
      <button onClick={handleStop}>
        <img
          src={questionMark}
          className={isPlaying ? "question-mark" : "question-mark--paused"}
          alt="question"
        />
      </button>
    </article>
  );
};
