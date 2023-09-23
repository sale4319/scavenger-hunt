import { useContext, useEffect, useState } from "react";
import { GameSettingsContext } from "../../../providers/GameSettingsContext";

import styles from "./ShiftingCircles.module.css";

interface Circle {
  color: string;
  x: number;
  y: number;
}

interface ShiftingCircle {
  handleUnlockNavigation?: () => void;
}

const getRandomPosition = (maxX: number, maxY: number) => {
  const x = Math.random() * (maxX - 200);
  const y = Math.random() * (maxY - 200);
  return { x, y };
};

function ShiftingCircles({ handleUnlockNavigation }: ShiftingCircle) {
  const { darkMode } = useContext(GameSettingsContext);
  const [circles, setCircles] = useState<Circle[]>(() => {
    const storedCircles = localStorage.getItem("clickedCircles");
    if (storedCircles) {
      return JSON.parse(storedCircles);
    }

    return [
      { color: "red", x: 0, y: 0 },
      { color: "green", x: 0, y: 0 },
      { color: "blue", x: 0, y: 0 },
    ];
  });

  const [clickOrder, setClickOrder] = useState<string[]>([]);
  const [message, setMessage] = useState<string>("");
  const [clickAttempts, setClickAttempts] = useState<number>(0);

  const randomlyPositionCircles = () => {
    const updatedCircles = circles.map((circle) => {
      const { x, y } = getRandomPosition(window.innerWidth, window.innerHeight);
      return { ...circle, x, y };
    });
    setCircles(updatedCircles);
  };

  const handleCircleClick = (color: string) => {
    if (clickAttempts === 3) {
      setClickAttempts(0);
      setClickOrder([]);
      setMessage("");
    }

    if (clickOrder.length === 0 && color === "red") {
      setClickOrder(["red"]);
    } else if (
      clickOrder.length === 1 &&
      color === "green" &&
      clickOrder[0] === "red"
    ) {
      setClickOrder(["red", "green"]);
    } else if (
      clickOrder.length === 2 &&
      color === "blue" &&
      clickOrder[0] === "red" &&
      clickOrder[1] === "green"
    ) {
      setClickOrder(["red", "green", "blue"]);
      setMessage("Success! You solved it correctly.");
      setTimeout(() => {
        setMessage("");
      }, 3000);

      setClickAttempts((prevAttempts) => prevAttempts + 1);
    } else {
      setClickOrder([]);
    }
    randomlyPositionCircles();
  };

  useEffect(() => {
    localStorage.setItem("clickedCircles", JSON.stringify(circles));
    clickAttempts === 3 && handleUnlockNavigation && handleUnlockNavigation();
  }, [circles]);

  useEffect(() => {
    randomlyPositionCircles();
    window.addEventListener("resize", randomlyPositionCircles);
    return () => {
      window.removeEventListener("resize", randomlyPositionCircles);
    };
    //eslint-disable-next-line
  }, []);

  return (
    <div>
      {circles.map((circle, index) => (
        <button
          key={index}
          className={`${styles.circle} ${styles[circle.color]}`}
          style={{
            left: `${circle.x}px`,
            top: `${circle.y}px`,
          }}
          onClick={() => handleCircleClick(circle.color)}
        ></button>
      ))}
      {message && <div className={styles.message}>{message}</div>}
      <div
        className={[
          styles.attempts,
          darkMode ? styles.attemptsDark : styles.attemptsLight,
        ].join(" ")}
      >
        Successful attempts: {clickAttempts}/3
      </div>
    </div>
  );
}

export default ShiftingCircles;
