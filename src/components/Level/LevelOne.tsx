import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { StyleSheet, css } from "aphrodite";
import { PrimaryButton } from "../../stories/buttons/PrimaryButton/PrimaryButton";
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

      <PrimaryButton
        onClick={routeChange}
        primary={unLockNavigation}
        size={"small"}
        label={LevelOneMessages.CONTINUE}
      />
    </div>
  );
};
