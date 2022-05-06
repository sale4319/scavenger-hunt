import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UnlockToolTip } from "../../stories/tool-tips/";
import { PrimaryButton } from "../../stories/buttons/";
import { useLockNoPrompt, useLockPrompt } from "../../utils/utils";
import { PrivateRoutes } from "../../PrivateRoutes";
import { modes } from "../../flags";
import {
  LevelTwoMessages,
  PromptMessages,
  TooltipMessages,
} from "../../Messages";

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
      <UnlockToolTip
        content={TooltipMessages.LEVEL_TWO_CONGRATS}
        onClick={handleUnlockNavigation}
      />

      <h3>{LevelTwoMessages.HINT}</h3>

      <PrimaryButton
        onClick={routeChange}
        primary={unLockNavigation}
        size={"small"}
        label={LevelTwoMessages.CONTINUE}
      />
    </div>
  );
};
