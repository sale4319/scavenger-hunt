import React, { useState } from "react";
import "./DraggingPuzzle.css";

interface DraggingPuzzleProps {
  handleUnlockNavigation?: () => void;
  label?: string;
  mode?: "pulse";
  onClick?: () => void;
}

function DraggingPuzzle({
  handleUnlockNavigation,
  label = "Drag me hard",
  mode = "pulse",
}: DraggingPuzzleProps) {
  const containerWidth = 150;
  const containerHeight = 150;

  const [buttonPosition, setButtonPosition] = useState<{
    x: number;
    y: number;
  }>({
    x: containerWidth + 450, // Adjust initial position
    y: containerHeight + 150, // Adjust initial position
  });
  const [buttonClickable, setButtonClickable] = useState(false);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e: MouseEvent) => {
    const newX = e.clientX - 60; // Adjust cursor position on button
    const newY = e.clientY - 20; // Adjust cursor position on button
    setButtonPosition({ x: newX, y: newY });

    if (
      newX >= 0 &&
      newX <= containerWidth - 20 &&
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
    if (buttonClickable && handleUnlockNavigation) {
      handleUnlockNavigation();
    } else return;
  };

  return (
    <button
      id="draggable-button"
      className={[buttonClickable ? mode : "clickable"].join(" ")}
      style={{ left: buttonPosition.x, top: buttonPosition.y }}
      onMouseDown={handleMouseDown}
      onClick={handleButtonClick}
    >
      {label}
    </button>
  );
}

export default DraggingPuzzle;
