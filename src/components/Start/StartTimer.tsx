import React, { useState, useEffect, FC } from "react";
import Countdown from "react-countdown";
import { useNavigate } from "react-router-dom";
import { BsFillPatchQuestionFill } from "react-icons/bs";
import Tippy from "@tippyjs/react";
import { StyleSheet, css } from "aphrodite";
import { PrivateRoutes } from "../../PrivateRoutes";
import { useUnlock } from "../../utils";
import {
  StartTimerMessages,
  TooltipMessages,
  PromptMessages,
} from "../../Messages";

const styles = StyleSheet.create({
  timeCounter: {
    fontSize: "100px",
    color: "#61dafb",
  },

  questionIcon: {
    color: "#61dafb",
    outline: "none",
  },

  questionButton: {
    background: "transparent",
    padding: "0px",
    border: "none",
  },

  questionTooltip: {
    backgroundColor: "#61dafb",
    color: "#fff",
    textAlign: "center",
    padding: "8px",
    borderRadius: "6px",

    "::after": {
      content: '" "',
      position: "absolute",
      top: "100%",
      left: "50%",
      marginLeft: " -5px",
      borderWidth: "5px",
      borderStyle: "solid",
      borderColor: "#61dafb transparent transparent transparent",
    },
  },

  redButton: {
    background: "linear-gradient(#ff0000, #333)",
    borderStyle: "solid",
    borderColor: "#ff0000",
    borderRadius: "9px",
    cursor: "pointer",
    padding: "8px",
    color: "white",
    ":hover": {
      background: "linear-gradient(#333, #ff0000)",
      borderColor: "#fb5d5d",
    },
  },

  greenButton: {
    background: "linear-gradient(#98fe00, #333)",
    borderStyle: "solid",
    borderColor: "#adff2f",
    borderRadius: "9px",
    cursor: "pointer",
    padding: "8px",
    color: "white",
    ":hover": {
      background: "linear-gradient(#333, #98fe00)",
      borderColor: "#cbf094",
    },
  },
});

const Completionist = () => <span>You are good to go!</span>;

type Props = {
  hours: any;
  minutes: any;
  seconds: any;
  completed: any;
};

const renderer: FC<Props> = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    return <Completionist />;
  } else {
    return (
      <span>
        {hours}:{minutes}:{seconds}
      </span>
    );
  }
};

let getLocalStorageValue = (s: any) => localStorage.getItem(s);

const StartTimer = () => {
  const [data, setData] = useState(
    { date: Date.now(), delay: 86400000 } //Milliseconds
  );
  const wantedDelay = 86400000; //Milliseconds
  const navigate = useNavigate();
  const routeChange = () => {
    navigate(`${PrivateRoutes.PARAM_TWO}`);
  };

  const [enableButton, setEnableButton] = useState(true);

  useUnlock(`${PromptMessages.START}`, !enableButton);

  const handleEnable = () => {
    setEnableButton(false);
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
        <h1>{StartTimerMessages.TITLE}</h1>
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

      <p>
        {StartTimerMessages.HINT}
        <Tippy
          className={css(styles.questionTooltip)}
          content={TooltipMessages.START_HINT}
        >
          <button className={css(styles.questionButton)} onClick={handleEnable}>
            <BsFillPatchQuestionFill
              size={30}
              className={css(styles.questionIcon)}
            />
          </button>
        </Tippy>
      </p>
      {enableButton ? (
        <button className={css(styles.redButton)} onClick={handleEnable}>
          {StartTimerMessages.BUTTON}
        </button>
      ) : (
        <button className={css(styles.greenButton)} onClick={routeChange}>
          {StartTimerMessages.BUTTON}
        </button>
      )}
    </div>
  );
};

export default StartTimer;
