import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Tippy from "@tippyjs/react";
import { StyleSheet, css } from "aphrodite";
import { useLockNoPrompt, useLockPrompt } from "../../utils/utils";
import { PrivateRoutes } from "../../PrivateRoutes";
import { modes } from "../../flags";
import {
  LevelTwoMessages,
  PromptMessages,
  TooltipMessages,
} from "../../Messages";

const styles = StyleSheet.create({
  unlockButton: {
    backgroundColor: "transparent",
    color: "transparent",
    border: "none",
    padding: "0px",

    "::selection": { background: "transparent" },
  },

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
    background: "linear-gradient(#ff0000, #6f0404, #ff0000)",
    borderStyle: "solid",
    borderColor: "#870202",
    borderRadius: "9px",
    cursor: "pointer",
    padding: "8px",
    color: "white",

    ":hover": {
      zIndex: 1,

      background: "linear-gradient(#870202, #ff0000, #870202)",
      borderColor: "#870202",
      borderRadius: "9px",
      boxShadow: "5px 10px 15px red",
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
      boxShadow: "5px 10px 15px #cbf094",
      outline: "none",
    },

    "::selection": { background: "transparent" },
  },
});

export const LevelTwo = () => {
  const navigate = useNavigate();
  const [unLockNavigation, setUnlockNavigation] = useState(true);

  const routeChange = () => {
    navigate(`${PrivateRoutes.PARAM_LEVEL_THREE}`);
  };

  modes.promptMode
    ? useLockPrompt(`${PromptMessages.DEFAULT}`, unLockNavigation)
    : useLockNoPrompt(unLockNavigation);

  const handleUnlockNavigation = () => {
    setUnlockNavigation(false);
  };

  return (
    <div>
      <Tippy
        className={css(styles.questionTooltip)}
        content={TooltipMessages.LEVEL_TWO_CONGRATS}
      >
        <button
          className={css(styles.unlockButton)}
          onClick={handleUnlockNavigation}
        ></button>
      </Tippy>
      <h3>{LevelTwoMessages.HINT}</h3>
      <button
        className={css(
          unLockNavigation ? styles.redButton : styles.greenButton
        )}
        onClick={routeChange}
      >
        {LevelTwoMessages.CONTINUE}
      </button>
    </div>
  );
};
