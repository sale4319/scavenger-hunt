import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Title } from "../../stories/headers";
import { UnlockToolTip } from "../../stories/tool-tips/";
import { PrimaryButton, SkipButton } from "../../stories/buttons/";
import { useLockNoPrompt } from "../../utils/utils";
import { PrivateRoutes } from "../../PrivateRoutes";
import { modes } from "../../flags";
import {
  LevelTwoMessages,
  TooltipMessages,
  DefaultMessages,
} from "../../Messages";

export const LevelTwo = () => {
  const navigate = useNavigate();
  const [unLockNavigation, setUnlockNavigation] = useState(true);

  useLockNoPrompt(unLockNavigation);

  const routeChange = () => {
    navigate(`${PrivateRoutes.PARAM_QUIZ_THREE}`);
  };

  const handleUnlockNavigation = () => {
    setUnlockNavigation(false);
  };

  return (
    <div>
      <UnlockToolTip
        content={TooltipMessages.LEVEL_TWO_CONGRATS}
        onClick={handleUnlockNavigation}
      />
      <div>
        <Title titleSize="small" label={LevelTwoMessages.HINT} />
      </div>

      <PrimaryButton
        onClick={routeChange}
        primary={unLockNavigation}
        size={"small"}
        unlock={unLockNavigation}
      />
      {modes.skipMode && (
        <SkipButton
          onClick={handleUnlockNavigation}
          label={DefaultMessages.SKIP_LEVEL}
        />
      )}
    </div>
  );
};
