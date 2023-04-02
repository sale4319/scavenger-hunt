import { DefaultMessages } from "../../../Messages";
import "./MobileWarning.css";

export const MobileWarning = () => {
  return (
    <div className="mobile-view-container">{DefaultMessages.MOBILE_VIEW}</div>
  );
};
