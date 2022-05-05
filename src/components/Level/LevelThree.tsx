import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PrimaryButton } from "../../stories/buttons/PrimaryButton/PrimaryButton";
import { useLockPrompt, useLockNoPrompt } from "../../utils/utils";
import Form from "../../utils/QuestionMechanism";
import { PrivateRoutes } from "../../PrivateRoutes";
import { modes } from "../../flags";
import { LevelThreeMessages, PromptMessages } from "../../Messages";

export const LevelThree = () => {
  const navigate = useNavigate();
  const [unLockNavigation, setUnlockNavigation] = useState(true);

  const routeChange = () => {
    navigate(`${PrivateRoutes.PARAM_END_CLASSIC}`);
  };

  modes.promptMode
    ? useLockPrompt(`${PromptMessages.DEFAULT}`, unLockNavigation)
    : useLockNoPrompt(unLockNavigation);

  const handleUnlockNavigation = () => {
    setUnlockNavigation(false);
  };

  return (
    <div>
      <h3>{LevelThreeMessages.HINT}</h3>
      <PrimaryButton
        onClick={routeChange}
        primary={unLockNavigation}
        size={"small"}
        label={LevelThreeMessages.CONTINUE}
      />
      <div>
        <Form setUnlockNavigation={handleUnlockNavigation} />
      </div>
    </div>
  );
};
