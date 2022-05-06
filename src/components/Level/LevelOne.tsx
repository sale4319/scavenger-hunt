import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PrimaryButton, UnlockButton } from "../../stories/buttons/";
import { useLockNoPrompt, useLockPrompt } from "../../utils/utils";
import { PrivateRoutes } from "../../PrivateRoutes";
import { modes, featFlags } from "../../flags";
import { LevelOneMessages, PromptMessages } from "../../Messages";

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
      <UnlockButton
        onClick={handleUnlockNavigation}
        label={LevelOneMessages.UNLOCK}
      />

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
