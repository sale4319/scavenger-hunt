import { useContext, useState } from "react";
import { GameSettingsContext } from "../../../providers/GameSettingsContext";
import { SettingsModal } from "../../modals/SettingsModal/SettingsModal";
import "./Container.css";

interface ContainerProps {
  children: React.ReactNode;
}

export const Container = ({ children, ...props }: ContainerProps) => {
  const { darkMode } = useContext(GameSettingsContext);
  const [isModalOpen, setModalIsOpen] = useState(false);

  const toggleModal = () => {
    setModalIsOpen(!isModalOpen);
  };

  return (
    <div className="container">
      <article className={darkMode ? " container-dark" : " container-light"}>
        <section
          className={
            darkMode
              ? "section-container container-dark "
              : "section-container container-light"
          }
        >
          {children}
        </section>
        {isModalOpen && <SettingsModal onRequestClose={toggleModal} />}
        <button className="settings-button" onClick={toggleModal} type="button">
          <i className="settings-icon"></i>
        </button>
      </article>
    </div>
  );
};
