import React, { useContext } from "react";
import { DarkModeContext } from "../../../providers/DarkModeContext";

import { AppBar } from "../../headers";
import "./Container.css";

interface ContainerProps {
  children: any;
}

export const Container = ({ children, ...props }: ContainerProps) => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <article className={darkMode ? "container-dark" : "container-light"}>
      <AppBar />
      <section
        className={
          darkMode ? "container container-dark" : "container container-light"
        }
      >
        {children}
      </section>
    </article>
  );
};
