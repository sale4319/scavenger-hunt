import "./ToggleSwitch.css";

interface PrimaryButtonProps {
  toggle?: boolean;
  label?: string;
  onClick?: () => void;
}

export const ToggleSwitch = ({
  toggle,
  label,
  onClick,
  ...props
}: PrimaryButtonProps) => {
  return (
    <div className="toggle-container">
      <span className="toggle-label">{label}</span>
      <div
        onClick={onClick}
        className={[
          "toggle-switch",
          `toggle-switch--${toggle ? "on" : "off"}`,
        ].join(" ")}
      >
        <div className={toggle ? "knob active" : "knob"} />
        {toggle ? (
          <span className="toggle-text">on</span>
        ) : (
          <span className="toggle-text">off</span>
        )}
      </div>
    </div>
  );
};
