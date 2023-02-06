import React, { useState, useContext, useCallback } from "react";
import { RoutingContext } from "../../providers/RoutingContext";
import { Title } from "../../stories/headers";
import { QuestionIconToolTip } from "../../stories/tool-tips";
import { PrimaryButton } from "../../stories/buttons";
import { CountdownTimer } from "../../stories/timer/CountdownTimer/CountdownTimer";
import { StartTimerMessages, TooltipMessages } from "../../Messages";

export const Start = () => {
  const [unLockNavigation, setUnlockNavigation] = useState(true);
  const { routeStart } = useContext(RoutingContext);

  const routeChange = useCallback(() => {
    routeStart();
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
