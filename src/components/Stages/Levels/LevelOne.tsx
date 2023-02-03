import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Title } from "../../../stories/headers";
import {
  PrimaryButton,
  SkipButton,
  UnlockButton,
} from "../../../stories/buttons";
import { useLockNoPrompt } from "../../../utils/lockNavigation";
import { PrivateRoutes } from "../../../PrivateRoutes";
import { modes } from "../../../flags";
import { DefaultMessages, LevelOneMessages } from "../../../Messages";

export const LevelOne = () => {
  const navigate = useNavigate();
  const [unLockNavigation, setUnlockNavigation] = useState(true);

  useLockNoPrompt(unLockNavigation);

  const routeChange = () => {
    modes.quizMode
      ? navigate(`${PrivateRoutes.PARAM_QUIZ_TWO}`)
      : navigate(`${PrivateRoutes.PARAM_LEVEL_TWO}`);
  };

  const handleUnlockNavigation = () => {
    setUnlockNavigation(false);
  };

  return (
    <div>
      <UnlockButton
        data-testid="unlockButton"
        onClick={handleUnlockNavigation}
        label={LevelOneMessages.UNLOCK}
      />

      <Title label={LevelOneMessages.HINT} />

      <PrimaryButton
        onClick={routeChange}
        primary={unLockNavigation}
        size={"small"}
        isLocked={unLockNavigation}
        data-testid="continueButton"
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