import "./ToggleSwitch.css";

interface PrimaryButtonProps {
  toggle?: boolean;
  label?: string;
  defaultChecked?: boolean;
  onChange?: () => void;
}

export const ToggleSwitch = ({
  toggle,
  label,
  onChange,
  defaultChecked,
  ...props
}: PrimaryButtonProps) => {
  return (
    <div className="toggle-container">
      <span className="toggle-label">{label}</span>
      <div>
        <label className="toggle-switch">
          <input
            className="toggle-switch-input"
            type="checkbox"
            onChange={onChange}
            defaultChecked={toggle}
          />
          <span className="slider round"></span>
        </label>
        <br />
        {toggle ? (
          <span className="toggle-text">on</span>
        ) : (
          <span className="toggle-text">off</span>
        )}
      </div>
    </div>
  );
};
