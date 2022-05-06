import "./Title.css";

interface TitleProps {
  label: string;
  color?: string;
  titleSize?: "small" | "medium" | "large";
}

export const Title = ({
  color,
  label = "Your title goes here",
  titleSize = "medium",
  ...props
}: TitleProps) => (
  <header
    className={["title", `title--${titleSize}`].join(" ")}
    style={{ color }}
    {...props}
  >
    {label}
  </header>
);
