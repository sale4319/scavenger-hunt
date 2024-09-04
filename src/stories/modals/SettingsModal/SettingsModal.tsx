import { useContext, useEffect } from "react";
import { GameSettingsContext } from "../../../providers/GameSettingsContext";
import { ToggleSwitch, PrimaryButton } from "../../buttons";
import { Title } from "../../headers";

import { SettingsModalMessages } from "../../../Messages";

import "./SettingsModal.css";

type SettingsModalProps = {
  onRequestClose?: () => void;
};

export const SettingsModal = ({ onRequestClose }: SettingsModalProps) => {
  const { quizMode, skipMode, setSkipMode, setQuizMode, darkMode } =
    useContext(GameSettingsContext);
  // Use useEffect to add an event listener to the document
  useEffect(() => {
    function onKeyEsc(event: { keyCode: number }) {
      if (event.keyCode === 27) {
        // Close the modal when the Escape key is pressed
        onRequestClose && onRequestClose();
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
        <Title titleSize="medium" label={SettingsModalMessages.TITLE} />
        <Title titleSize="small" label={SettingsModalMessages.INFO} />
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
        <PrimaryButton
          size={"medium"}
          onClick={onRequestClose}
          label="Close"
          mode="close"
        />
      </div>
    </div>
  );
};
