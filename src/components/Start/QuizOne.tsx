import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Quiz } from "../../stories/forms/QuizForm/QuizForm";
import { useLockNoPrompt } from "../../utils/lockNavigation";
import { PrivateRoutes } from "../../PrivateRoutes";
import { DefaultMessages } from "../../Messages";
import { PrimaryButton, SkipButton } from "../../stories/buttons";
import { questionSetOne } from "../../QuizSets";
import { FeatureFlagContext } from "../../providers/FeatureFlagContext";

export const QuizOne = () => {
  const navigate = useNavigate();
  const [unLockNavigation, setUnlockNavigation] = useState(true);
  const { skipMode } = useContext(FeatureFlagContext);

  useLockNoPrompt(unLockNavigation);

  const routeChange = () => {
    navigate(`${PrivateRoutes.PARAM_LEVEL_ONE}`);
  };

  const handleUnlockNavigation = () => {
    setUnlockNavigation(false);
  };

  return (
    <>
      <PrimaryButton
        onClick={routeChange}
        primary={unLockNavigation}
        size={"small"}
        isLocked={unLockNavigation}
        data-testid="continueButton"
      />
      <Quiz questions={questionSetOne} handleUnlock={handleUnlockNavigation} />
      {skipMode && (
        <SkipButton
          onClick={handleUnlockNavigation}
          label={DefaultMessages.SKIP_QUIZ}
        />
      )}
    </>
  );
};
