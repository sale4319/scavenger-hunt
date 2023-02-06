import React, { useState, useContext, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Title } from "../../stories/headers";
import { PrivateRoutes } from "../../PrivateRoutes";
import { QuestionIconToolTip } from "../../stories/tool-tips";
import { PrimaryButton } from "../../stories/buttons";
import { StartTimerMessages, TooltipMessages } from "../../Messages";
import { GameSettingsContext } from "../../providers/GameSettingsContext";
import { CountdownTimer } from "../../stories/timer/CountdownTimer/CountdownTimer";

export const Start = () => {
  const navigate = useNavigate();
  const [unLockNavigation, setUnlockNavigation] = useState(true);
  const { quizMode } = useContext(GameSettingsContext);

  const routeChange = useCallback(() => {
    quizMode
      ? navigate(`${PrivateRoutes.PARAM_QUIZ_ONE}`)
      : navigate(`${PrivateRoutes.PARAM_LEVEL_ONE}`);
  }, [unLockNavigation]);

  const handleunLockNavigation = () => {
    setUnlockNavigation(false);
  };

  return (
    <div>
      <Title titleSize="medium" label={StartTimerMessages.TITLE} />
      <Title
        titleSize="small"
        color="#75F8E2"
        label={StartTimerMessages.INSTRUCTION}
      />

      <CountdownTimer />

      <Title titleSize="medium" label={StartTimerMessages.HINT} />

      <QuestionIconToolTip
        size="medium"
        onClick={handleunLockNavigation}
        content={TooltipMessages.START_HINT}
      />
      <br></br>
      <PrimaryButton
        onClick={unLockNavigation ? handleunLockNavigation : routeChange}
        primary={unLockNavigation}
        size={"small"}
        isLocked={unLockNavigation}
        data-testid="unlockButton"
      />
    </div>
  );
};
