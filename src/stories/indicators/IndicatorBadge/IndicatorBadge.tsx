import "./IndicatorBadge.css";

type IndicatorBadgeProps = {
  level: number;
  color?: string;
};

export const IndicatorBadge = ({
  level,
  color = "green",
}: IndicatorBadgeProps) => {
  return (
    <div data-testid="parentDiv" className={"indicator-badge"}>
      <div className="indicator">
        <span
          className={level >= 1 ? `indicator--${color}` : undefined}
          data-testid={level >= 1 ? "coloured" : undefined}
        />
        <span
          className={level >= 2 ? `indicator--${color}` : undefined}
          data-testid={level >= 2 ? "coloured" : undefined}
        />
        <span
          className={level >= 3 ? `indicator--${color}` : undefined}
          data-testid={level >= 3 ? "coloured" : undefined}
        />
        <span
          className={level >= 4 ? `indicator--${color}` : undefined}
          data-testid={level >= 4 ? "coloured" : undefined}
        />
      </div>
    </div>
  );
};
