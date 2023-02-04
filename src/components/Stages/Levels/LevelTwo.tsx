import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GameSettingsContext } from "../../../providers/GameSettingsContext";
import { Title } from "../../../stories/headers";
import { UnlockToolTip } from "../../../stories/tool-tips";
import { PrimaryButton, SkipButton } from "../../../stories/buttons";
import { useLockNoPrompt } from "../../../utils/lockNavigation";
import { PrivateRoutes } from "../../../PrivateRoutes";
import {
  LevelTwoMessages,
  TooltipMessages,
  DefaultMessages,
} from "../../../Messages";

export const LevelTwo = () => {
  const navigate = useNavigate();
  const [unLockNavigation, setUnlockNavigation] = useState(true);
  const { quizMode, skipMode } = useContext(GameSettingsContext);

  useLockNoPrompt(unLockNavigation);

  const routeChange = () => {
    quizMode
      ? navigate(`${PrivateRoutes.PARAM_QUIZ_THREE}`)
      : navigate(`${PrivateRoutes.PARAM_LEVEL_THREE}`);
  };

  const handleUnlockNavigation = () => {
    setUnlockNavigation(false);
  };

  return (
    <div>
      <UnlockToolTip
        content={TooltipMessages.LEVEL_TWO_CONGRATS}
        onClick={handleUnlockNavigation}
        data-testid="unlockButton"
      />
      <div>
        <Title titleSize="small" label={LevelTwoMessages.HINT} />
      </div>

      <PrimaryButton
        onClick={routeChange}
        primary={unLockNavigation}
        size={"small"}
        isLocked={unLockNavigation}
        data-testid="continueButton"
      />
      {skipMode && (
        <SkipButton
          onClick={handleUnlockNavigation}
          label={DefaultMessages.SKIP_LEVEL}
        />
      )}
    </div>
  );
};
