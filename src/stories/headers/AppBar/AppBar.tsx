import { GithubButton } from "../../buttons/";
import reactHeart from "../../assets/reactHeart.svg";
import { EndClassicMessages } from "../../../Messages";
import "./AppBar.css";

type User = {
  name: string;
};

interface AppBarProps {
  user?: User;
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
}

export const AppBar = ({
  user,
  onLogin,
  onLogout,
  onCreateAccount,
}: AppBarProps) => (
  <header>
    <div className="wrapper">
      <div>
        <GithubButton
          href={`${EndClassicMessages.GITHUB}`}
          target="_blank"
          rel="noopener noreferrer"
          size={35}
        />
        <h1>Scavenger Hunt</h1>
      </div>
      <div>
        <img src={reactHeart} alt="gift-logo" />
        <h1>Light Mode</h1>
      </div>
    </div>
  </header>
);
