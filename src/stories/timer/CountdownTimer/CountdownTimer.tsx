import { useState, useEffect, FC } from "react";
import Countdown, { CountdownRenderProps } from "react-countdown";
import "./CountdownTimer.css";

const twoDigits = (num: number) => String(num).padStart(2, "0");

const renderer: FC<CountdownRenderProps> = ({ hours, minutes, seconds }) => {
  return (
    <span>
      {twoDigits(hours)}:{twoDigits(minutes)}:{twoDigits(seconds)}
    </span>
  );
};

let getLocalStorageValue = (s: string) => localStorage.getItem(s);

export const CountdownTimer = () => {
  const [data, setData] = useState(
    { date: Date.now(), delay: 86400000 } //Milliseconds
  );
  const wantedDelay = 86400000; //Milliseconds

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
    <span className="time-counter">
      <Countdown
        date={data.date + data.delay}
        renderer={renderer}
        onStart={(_delta) => {
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
  );
};
