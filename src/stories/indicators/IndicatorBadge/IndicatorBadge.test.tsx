import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { IndicatorBadge } from "./IndicatorBadge";

const component = <IndicatorBadge level={3} />;

describe("IndicatorBadge", () => {
  test("should render IndicatorBadge", async () => {
    render(component);

    const level = await screen.findByTestId("parentDiv");
    expect(level).toBeInTheDocument();
  });

  test("when level is 1, only one badge is coloured", () => {
    render(<IndicatorBadge level={1} />);

    const colouredIndicators = screen.getAllByTestId("coloured");
    expect(colouredIndicators.length).toBe(1);
  });

  test("when level is 4, all badges are coloured", () => {
    render(<IndicatorBadge level={4} />);

    const colouredIndicators = screen.getAllByTestId("coloured");
    expect(colouredIndicators.length).toBe(4);
  });
});
