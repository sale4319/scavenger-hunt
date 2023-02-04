import React, { useContext, useState } from "react";
import { GameSettingsContext } from "../../../providers/GameSettingsContext";
import questionMark from "../../assets/question-mark.png";
import "./Container.css";
import { SettingsModal } from "../../modals/SettingsModal/SettingsModal";

interface ContainerProps {
  children: any;
}

export const Container = ({ children, ...props }: ContainerProps) => {
  const { darkMode } = useContext(GameSettingsContext);
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
    <div className="container">
      <article className={darkMode ? " container-dark" : " container-light"}>
        <section
          className={
            darkMode
              ? "section-container container-dark "
              : "section-container container-light"
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
    </div>
  );
};
