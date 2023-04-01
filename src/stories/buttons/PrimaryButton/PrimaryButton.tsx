import "./PrimaryButton.css";

interface PrimaryButtonProps {
  primary?: boolean;
  size?: "small" | "medium" | "large";
  mode?: "fill" | "pulse" | "close" | "raise" | "up" | "slide" | "offset";
  buttonType?: "button" | "submit";
  isLocked?: boolean;
  label?: string;
  onClick?: () => void;
}

export const PrimaryButton = ({
  primary,
  buttonType,
  size = "medium",
  mode = "fill",
  isLocked,
  label,
  ...props
}: PrimaryButtonProps) => {
  const toggleColor = primary
    ? "fill--locked"
    : primary === undefined
    ? mode
    : "pulse--unlocked";
  return (
    <button
      type={buttonType}
      className={[
        "primary-button",
        `primary-button--${size}`,
        toggleColor,
      ].join(" ")}
      {...props}
    >
      {isLocked ? "Locked" : isLocked === undefined ? label : "Unlocked"}
    </button>
  );
};
