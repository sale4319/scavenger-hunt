import { useContext, useEffect } from "react";
import { DarkModeContext } from "../../../providers/DarkModeContext";
import { FeatureFlagContext } from "../../../providers/FeatureFlagContext";
import { ToggleSwitch } from "../../buttons/ToggleSwitch/ToggleSwitch";
import { Title } from "../../headers";
import "./SettingsModal.css";

export const SettingsModal = ({ onRequestClose }) => {
  const { quizMode, skipMode, setSkipMode, setQuizMode } =
    useContext(FeatureFlagContext);
  const { darkMode } = useContext(DarkModeContext);
  // Use useEffect to add an event listener to the document
  useEffect(() => {
    function onKeyDown(event) {
      if (event.keyCode === 27) {
        // Close the modal when the Escape key is pressed
        onRequestClose();
      }
    }

    // Prevent scrolling
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    // Clear things up when unmounting this component
    return () => {
      document.body.style.overflow = "visible";
      document.removeEventListener("keydown", onKeyDown);
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
        <Title label="Settings" titleSize="medium" />

        <Title
          label="Bellow you can turn on and off available modes:"
          titleSize="small"
        />
        <ToggleSwitch
          onClick={handleQuizMode}
          toggle={quizMode}
          label="Quiz mode"
        />
        <ToggleSwitch
          onClick={handleSkipMode}
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
