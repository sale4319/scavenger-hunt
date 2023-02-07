import { fireEvent, render, screen } from "@testing-library/react";
import { StartTimerMessages } from "../../Messages";
import { Start } from "./Start";
import { GameSettingsProvider } from "../../providers/GameSettingsContext";
import { MemoryRouter } from "react-router-dom";
import { RoutingProvider } from "../../providers/RoutingContext";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

const RenderedComponent = (
  <MemoryRouter>
    <GameSettingsProvider>
      <RoutingProvider>
        <Start />
      </RoutingProvider>
    </GameSettingsProvider>
  </MemoryRouter>
);

test("Renders header", () => {
  render(RenderedComponent);
  const header = screen.getByText(StartTimerMessages.TITLE);
  expect(header).toBeInTheDocument();
});

test("First click enable the button", () => {
  render(RenderedComponent);
  const button = screen.getByTestId("unlockButton");
  fireEvent.click(button);
  expect(mockedUsedNavigate).not.toHaveBeenCalledWith("/levelOne");
});

test("Second click navigates to /levelOne", () => {
  render(RenderedComponent);
  const button = screen.getByTestId("unlockButton");
  fireEvent.click(button);
  fireEvent.click(button);
  expect(mockedUsedNavigate).toHaveBeenCalledWith("/levelOne");
});
