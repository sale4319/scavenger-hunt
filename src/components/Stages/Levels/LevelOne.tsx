import React, { useCallback, useContext, useEffect, useState } from "react";
import { GameSettingsContext } from "../../../providers/GameSettingsContext";
import { RoutingContext } from "../../../providers/RoutingContext";
import { Title } from "../../../stories/headers";
import {
  PrimaryButton,
  SkipButton,
  UnlockButton,
} from "../../../stories/buttons";
import { useLockNoPrompt } from "../../../utils/lockNavigation";
import { PlaceHolder } from "../../../stories/headers";
import { DefaultMessages, LevelOneMessages } from "../../../Messages";
import { TestList } from "../../../shared/services/api/types";
import testPurposesFixture from "../../../shared/services/api/mocks/fixtures/testPurposesFixture.json";
import ApiService from "../../../shared/services/api/apiService";
import { isFeatureFlagEnabled } from "../../../utils/featureFlag";

export const LevelOne = () => {
  const [unLockNavigation, setUnlockNavigation] = useState(true);
  const { skipMode } = useContext(GameSettingsContext);
  const { routeLevelOne } = useContext(RoutingContext);
  const [testData, setTestData] = useState<Array<TestList>>([]);

  useLockNoPrompt(unLockNavigation);
  useEffect(() => {
    ApiService.fetchMockData()
      .then((testList: TestList[]) => {
        setTestData(testList);
      })
      .catch(() => {
        setTestData(testPurposesFixture.testEndpoint);
      });
  }, []);

  const routeChange = useCallback(() => {
    routeLevelOne();
  }, [unLockNavigation]);

  const handleUnlockNavigation = () => {
    setUnlockNavigation(false);
  };

  return (
    <>
      <PlaceHolder size="large">
        <UnlockButton
          data-testid="unlockButton"
          onClick={handleUnlockNavigation}
          label={LevelOneMessages.UNLOCK}
        />
      </PlaceHolder>
      {isFeatureFlagEnabled("TEST_PURPOSE_ONLY") &&
        testData &&
        testData.map((info, index) => (
          <p key={index}>
            {info.info} {info.info2} {info.info3}
          </p>
        ))}

      <Title label={LevelOneMessages.HINT} />

      <PrimaryButton
        onClick={routeChange}
        primary={unLockNavigation}
        size={"medium"}
        isLocked={unLockNavigation}
        data-testid="continueButton"
      />
      {skipMode && (
        <SkipButton
          onClick={handleUnlockNavigation}
          label={DefaultMessages.SKIP_LEVEL}
        />
      )}
    </>
  );
};
