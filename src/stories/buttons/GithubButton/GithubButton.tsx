import React from "react";
import { FaGithubAlt } from "react-icons/fa";
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
  const mode = primary ? "github-button--primary" : "github-button--secondary";
  return (
    <a href={href} target={target} rel={rel}>
      <FaGithubAlt
        size={size}
        className={["github-button", mode].join(" ")}
        style={{ backgroundColor }}
        {...props}
      />
    </a>
  );
};
