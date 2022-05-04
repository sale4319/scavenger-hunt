import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { StyleSheet, css } from "aphrodite";
import { useLockNoPrompt, useLockPrompt } from "../../utils/utils";
import { PrivateRoutes } from "../../PrivateRoutes";
import { modes, featFlags } from "../../flags";
import { LevelOneMessages, PromptMessages } from "../../Messages";

const styles = StyleSheet.create({
  unlockButton: {
    backgroundColor: "transparent",
    color: "transparent",
    border: "none",
    borderRadius: "9px",
    cursor: "pointer",
    padding: "3px",

    ":hover": {
      background: "linear-gradient(#333, #272727, #333)",
    },

    "::selection": { background: "transparent" },
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

export const LevelOne = () => {
  const navigate = useNavigate();
  const [unLockNavigation, setUnlockNavigation] = useState(true);

  const routeChange = () => {
    navigate(`${PrivateRoutes.PARAM_LEVEL_TWO}`);
  };

  modes.promptMode
    ? useLockPrompt(`${PromptMessages.DEFAULT}`, unLockNavigation)
    : useLockNoPrompt(unLockNavigation);

  const handleUnlockNavigation = () => {
    setUnlockNavigation(false);
  };

  return (
    <div>
      <button
        className={css(styles.unlockButton)}
        onClick={handleUnlockNavigation}
      >
        {LevelOneMessages.UNLOCK}
      </button>
      {featFlags.test && <h3>{LevelOneMessages.HINT} </h3>}
      <button
        className={css(
          unLockNavigation ? styles.redButton : styles.greenButton
        )}
        onClick={routeChange}
      >
        {LevelOneMessages.CONTINUE}
      </button>
    </div>
  );
};
