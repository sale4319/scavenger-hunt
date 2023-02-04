import React, { useContext, useState } from "react";
import { DarkModeContext } from "../../../providers/DarkModeContext";
import { AppBar } from "../../headers";
import questionMark from "../../assets/question-mark.png";
import "./Container.css";
import { SettingsModal } from "../../modals/SettingsModal/SettingsModal";

interface ContainerProps {
  children: any;
}

export const Container = ({ children, ...props }: ContainerProps) => {
  const { darkMode } = useContext(DarkModeContext);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isModalOpen, setModalIsOpen] = useState(false);

  console.log(useState("hello")[1]);
  const toggleModal = () => {
    setModalIsOpen(!isModalOpen);
  };

  const handleStop = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <AppBar />
      <article className={darkMode ? "container-dark" : "container-light"}>
        <section
          className={
            darkMode
              ? "container section-container container-dark "
              : "container section-container container-light"
          }
        >
          {children}
        </section>
        {isModalOpen && <SettingsModal onRequestClose={toggleModal} />}
        <button className="settings-button" onClick={toggleModal} type="button">
          <img
            src={questionMark}
            className={isPlaying ? "question-mark" : "question-mark--paused"}
            alt="question"
            onClick={handleStop}
          />
        </button>
      </article>
    </>
  );
};
