import React from "react";
import "./NavigationButton.css";

interface NavigationButtonProps {
  id: string;
  light?: boolean;
  backgroundColor?: string;
  target?: string;
  href?: string;
  rel?: string;
  onClick?: () => void;
}

export const NavigationButton = ({
  light = true,
  id = "githubButton",
  backgroundColor,
  target,
  href,
  rel,
  ...props
}: NavigationButtonProps) => {
  const mode = light ? "dark-mode" : "light-mode";
  return (
    <>
      <input type="checkbox" id={id} />
      <label htmlFor={id}>
        <a href={href} target={target} rel={rel}>
          <img className={mode} id={id} alt="logo" />
        </a>
      </label>
    </>
  );
};
