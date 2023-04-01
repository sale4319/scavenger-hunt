import { useContext, useEffect } from "react";
import { SettingsModalMessages } from "../../../Messages";
import { GameSettingsContext } from "../../../providers/GameSettingsContext";
import { ToggleSwitch } from "../../buttons/ToggleSwitch/ToggleSwitch";
import "./SettingsModal.css";

export const SettingsModal = ({ onRequestClose }) => {
  const { quizMode, skipMode, setSkipMode, setQuizMode, darkMode } =
    useContext(GameSettingsContext);
  // Use useEffect to add an event listener to the document
  useEffect(() => {
    function onKeyEsc(event: { keyCode: number }) {
      if (event.keyCode === 27) {
        // Close the modal when the Escape key is pressed
        onRequestClose();
      }
    }

    // Prevent scrolling
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyEsc);

    // Clear things up when unmounting this component
    return () => {
      document.body.style.overflow = "visible";
      document.removeEventListener("keydown", onKeyEsc);
    };
  });

  const handleQuizMode = () => setQuizMode(!quizMode);
  const handleSkipMode = () => setSkipMode(!skipMode);
  return (
    <div className="modal__backdrop">
      <div
        className={[
          "modal__container",
          `modal__container--${darkMode ? "dark" : "light"}`,
        ].join(" ")}
      >
        <h2 className="title">{SettingsModalMessages.TITLE}</h2>
        <h3 className="title">{SettingsModalMessages.INFO}</h3>
        <ToggleSwitch
          onChange={handleQuizMode}
          defaultChecked={quizMode}
          toggle={quizMode}
          label="Quiz mode"
        />
        <ToggleSwitch
          onChange={handleSkipMode}
          defaultChecked={quizMode}
          toggle={skipMode}
          label="Skip mode"
        />
        <button
          className={[
            "main-button",
            `main-button--${darkMode ? "dark" : "light"}`,
          ].join(" ")}
          onClick={onRequestClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};
