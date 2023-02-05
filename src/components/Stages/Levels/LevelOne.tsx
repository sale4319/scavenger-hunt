import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GameSettingsContext } from "../../../providers/GameSettingsContext";
import { Title } from "../../../stories/headers";
import {
  PrimaryButton,
  SkipButton,
  UnlockButton,
} from "../../../stories/buttons";
import { useLockNoPrompt } from "../../../utils/lockNavigation";
import { PrivateRoutes } from "../../../PrivateRoutes";
import { DefaultMessages, LevelOneMessages } from "../../../Messages";
import { PlaceHolder } from "../../../stories/headers/PlaceHolder/PlaceHolder";

export const LevelOne = () => {
  const navigate = useNavigate();
  const [unLockNavigation, setUnlockNavigation] = useState(true);
  const { quizMode, skipMode } = useContext(GameSettingsContext);

  useLockNoPrompt(unLockNavigation);

  const routeChange = () => {
    quizMode
      ? navigate(`${PrivateRoutes.PARAM_QUIZ_TWO}`)
      : navigate(`${PrivateRoutes.PARAM_LEVEL_TWO}`);
  };

  const handleUnlockNavigation = () => {
    setUnlockNavigation(false);
  };

  return (
    <div>
      <PlaceHolder size="large">
        <UnlockButton
          data-testid="unlockButton"
          onClick={handleUnlockNavigation}
          label={LevelOneMessages.UNLOCK}
        />
      </PlaceHolder>

      <Title label={LevelOneMessages.HINT} />

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
