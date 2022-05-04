import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { StyleSheet, css } from "aphrodite";
import { useLockPrompt, useLockNoPrompt } from "../../utils/utils";
import Form from "../../utils/QuestionMechanism";
import { PrivateRoutes } from "../../PrivateRoutes";
import { modes } from "../../flags";
import { LevelThreeMessages, PromptMessages } from "../../Messages";

const styles = StyleSheet.create({
  questionTooltip: {
    backgroundColor: "#61dafb",
    color: "#fff",
    textAlign: "center",
    padding: "8px",
    borderRadius: "6px",

    "::after": {
      content: '" "',
      position: "absolute",
      top: "100%",
      left: "50%",
      marginLeft: " -5px",
      borderWidth: "5px",
      borderStyle: "solid",
      borderColor: "#61dafb transparent transparent transparent",
    },
  },

  redButton: {
    background: "linear-gradient(#870202, #ff0000, #870202)",
    borderStyle: "solid",
    borderColor: "#870202",
    borderRadius: "9px",
    cursor: "pointer",
    padding: "8px",
    color: "white",

    ":hover": {
      zIndex: 1,
      background: "linear-gradient(#ff0000, #6f0404, #ff0000)",
      borderColor: "#870202",
      borderRadius: "9px",
      backgroundColor: "white",
      boxShadow: "5px 10px 18px red",
      outline: "none",
    },

    "::selection": { background: "transparent" },
  },

  greenButton: {
    background: "linear-gradient(#65a800, #98fe00, #65a800)",
    borderStyle: "solid",
    borderColor: "#65a800",
    borderRadius: "9px",
    cursor: "pointer",
    padding: "8px",
    color: "white",

    ":hover": {
      zIndex: 1,
      background: "linear-gradient(#98fe00, #65a800, #98fe00)",
      borderColor: "#65a800",
      borderRadius: "9px",
      backgroundColor: "white",
      boxShadow: "5px 10px 18px #cbf094",
      outline: "none",
    },

    "::selection": { background: "transparent" },
  },
});

export const LevelThree = () => {
  const navigate = useNavigate();
  const [unLockNavigation, setUnlockNavigation] = useState(true);

  const routeChange = () => {
    navigate(`${PrivateRoutes.PARAM_END_CLASSIC}`);
  };

  modes.promptMode
    ? useLockPrompt(`${PromptMessages.DEFAULT}`, unLockNavigation)
    : useLockNoPrompt(unLockNavigation);

  const handleUnlockNavigation = () => {
    setUnlockNavigation(false);
  };

  return (
    <div>
      <h3>{LevelThreeMessages.HINT}</h3>
      <button
        className={css(
          unLockNavigation ? styles.redButton : styles.greenButton
        )}
        onClick={routeChange}
      >
        {LevelThreeMessages.CONTINUE}
      </button>
      <div>
        <Form setUnlockNavigation={handleUnlockNavigation} />
      </div>
    </div>
  );
};
