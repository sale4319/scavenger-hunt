import React, { useState } from "react";
import "./SliperyClick.css";

interface SliperyClickProps {
  unlock?: boolean;
  label?: string;
  onClick?: () => void;
}

function SliperyClick({
  unlock = false,
  label = "Unlock button",
  ...props
}: SliperyClickProps) {
  const containerWidth = 400;
  const containerHeight = 400;

  const [buttonPosition, setButtonPosition] = useState<{
    x: number;
    y: number;
  }>({
    x: (containerWidth - 40) / 2, // Adjust for button size
    y: (containerHeight - 40) / 2, // Adjust for button size
  });
  const [buttonClickable, setButtonClickable] = useState(false);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e: MouseEvent) => {
    const newX = e.clientX - 20; // Adjust for button size
    const newY = e.clientY - 20; // Adjust for button size
    setButtonPosition({ x: newX, y: newY });

    if (
      newX >= 0 &&
      newX <= containerWidth - 40 &&
      newY >= window.innerHeight - containerHeight &&
      newY <= window.innerHeight - 20
    ) {
      setButtonClickable(true);
    } else {
      setButtonClickable(false);
    }
  };

  const handleMouseUp = () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  const handleButtonClick = () => {
    if (buttonClickable) {
      alert("wow");
    } else return;
  };

  return (
    <div>
      <button
        id="draggable-button"
        className={buttonClickable ? "clickable" : ""}
        style={{ left: buttonPosition.x, top: buttonPosition.y }}
        onMouseDown={handleMouseDown}
        onClick={handleButtonClick}
      >
        Drag Me
      </button>
    </div>
  );
}

export default SliperyClick;
