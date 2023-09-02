import React, { useContext, useState } from "react";
import { GameSettingsContext } from "../../../providers/GameSettingsContext";
import "./DraggingPuzzle.css";

interface DraggingPuzzleProps {
  handleUnlockNavigation?: () => void;
  mode?: string;
  onClick?: () => void;
}

function DraggingPuzzle({
  handleUnlockNavigation,
  mode = "pulse",
}: DraggingPuzzleProps) {
  const { darkMode } = useContext(GameSettingsContext);
  const dark = darkMode ? "light" : "dark";
  const containerWidth = 150;
  const containerHeight = 100;

  const [buttonPosition, setButtonPosition] = useState<{
    x: number;
    y: number;
  }>({
    x: containerWidth + 500, // Adjust initial position left/right
    y: containerHeight, // Adjust initial position top/bottom
  });
  const [buttonClickable, setButtonClickable] = useState(false);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e: MouseEvent) => {
    const newX = e.clientX - 80; // Adjust cursor position left/right on button
    const newY = e.clientY - 20; // Adjust cursor position top/bottom on button
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
    <>
      <button
        id="draggable-button"
        className={[dark, buttonClickable ? mode : "clickable"].join(" ")}
        style={{ left: buttonPosition.x, top: buttonPosition.y }}
        onMouseDown={handleMouseDown}
        onClick={handleButtonClick}
      >
        {buttonClickable ? "Aw yiiiieeaas" : "Drag me harder"}
      </button>
      {buttonClickable ? <div className="corner-shine"></div> : <></>}
    </>
  );
}

export default DraggingPuzzle;
