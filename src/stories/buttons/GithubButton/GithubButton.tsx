import React from "react";
import "./GithubButton.css";

interface GithubButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  target?: string;
  href?: string;
  rel?: string;
  size?: number;
  onClick?: () => void;
}

export const GithubButton = ({
  primary,
  size = 35,
  backgroundColor,
  target,
  href,
  rel,
  ...props
}: GithubButtonProps) => {
  return (
    <a href={href} target={target} rel={rel}>
      <button id="githubButton" style={{ backgroundColor }}></button>
    </a>
  );
};
