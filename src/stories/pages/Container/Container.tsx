import React, { useContext } from "react";
import { DarkModeContext } from "../../../providers/DarkModeContext";
import { AppBar } from "../../headers";
import questionMark from "../../assets/mark-question.png";
import "./Container.css";

interface ContainerProps {
  children: any;
}

export const Container = ({ children, ...props }: ContainerProps) => {
  const { darkMode } = useContext(DarkModeContext);

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
      <img src={questionMark} className="question-mark" alt="question" />
    </article>
  );
};
