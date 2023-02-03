import React, { useState, useEffect, FC } from "react";
import Countdown from "react-countdown";
import { useNavigate } from "react-router-dom";
import { StyleSheet, css } from "aphrodite";
import { Title } from "../../stories/headers";
import { PrivateRoutes } from "../../PrivateRoutes";
import { QuestionIconToolTip } from "../../stories/tool-tips/";
import { PrimaryButton } from "../../stories/buttons/";
import { StartTimerMessages, TooltipMessages } from "../../Messages";
import { modes } from "../../flags";

const styles = StyleSheet.create({
  timeCounter: {
    fontSize: "100px",
    color: "var(--react-blue)",
    lineHeight: "120px",
  },
});

const twoDigits = (num) => String(num).padStart(2, "0");

type Props = {
  hours: any;
  minutes: any;
  seconds: any;
  completed: any;
};

const renderer: FC<Props> = ({ hours, minutes, seconds }) => {
  return (
    <span>
      {twoDigits(hours)}:{twoDigits(minutes)}:{twoDigits(seconds)}
    </span>
  );
};

let getLocalStorageValue = (s: any) => localStorage.getItem(s);

const StartTimer = () => {
  const [data, setData] = useState(
    { date: Date.now(), delay: 86400000 } //Milliseconds
  );
  const wantedDelay = 86400000; //Milliseconds
  const navigate = useNavigate();
  const [unLockNavigation, setUnlockNavigation] = useState(true);

  const routeChange = () => {
    modes.quizMode
      ? navigate(`${PrivateRoutes.PARAM_QUIZ_ONE}`)
      : navigate(`${PrivateRoutes.PARAM_LEVEL_ONE}`);
  };

  const handleunLockNavigation = () => {
    setUnlockNavigation(false);
  };

  useEffect(() => {
    const savedDate = getLocalStorageValue("end_date");
    if (savedDate != null) {
      const currentTime = Date.now();
      const delta = parseInt(savedDate, 10) - currentTime;

      if (delta > wantedDelay) {
        // @ts-ignore: Object is possibly 'null'.
        if (localStorage.getItem("end_date").length > 0)
          localStorage.removeItem("end_date");
      } else {
        setData({ date: currentTime, delay: delta });
      }
    }
  }, []);

  return (
    <div>
      <div>
        <Title titleSize="medium" label={StartTimerMessages.TITLE} />
        <Title
          titleSize="small"
          color="#75F8E2"
          label={StartTimerMessages.INSTRUCTION}
        />
      </div>
      <span className={css(styles.timeCounter)}>
        <Countdown
          date={data.date + data.delay}
          renderer={renderer}
          onStart={(delta) => {
            if (localStorage.getItem("end_date") == null)
              localStorage.setItem(
                "end_date",
                JSON.stringify(data.date + data.delay)
              );
          }}
          onComplete={() => {
            if (localStorage.getItem("end_date") != null)
              localStorage.removeItem("end_date");
          }}
        />
      </span>

      <Title titleSize="medium" label={StartTimerMessages.HINT} />

      <QuestionIconToolTip
        size="medium"
        onClick={handleunLockNavigation}
        content={TooltipMessages.START_HINT}
      />

      <div>
        <PrimaryButton
          onClick={unLockNavigation ? handleunLockNavigation : routeChange}
          primary={unLockNavigation}
          size={"small"}
          isLocked={unLockNavigation}
        />
      </div>
    </div>
  );
};

export default StartTimer;
