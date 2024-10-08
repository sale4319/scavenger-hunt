import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { GameSettingsProvider } from "../../../providers/GameSettingsContext";
import { RoutingProvider } from "../../../providers/RoutingContext";
import { LevelOne, LevelTwo, LevelFour } from "./";
import {
  LevelFourMessages,
  LevelOneMessages,
  LevelTwoMessages,
} from "../../../Messages";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

const RenderedLevelOne = (
  <MemoryRouter>
    <GameSettingsProvider>
      <RoutingProvider>
        <LevelOne />
      </RoutingProvider>
    </GameSettingsProvider>
  </MemoryRouter>
);

const RenderedLevelTwo = (
  <MemoryRouter>
    <GameSettingsProvider>
      <RoutingProvider>
        <LevelTwo />
      </RoutingProvider>
    </GameSettingsProvider>
  </MemoryRouter>
);

const RenderedLevelFour = (
  <MemoryRouter>
    <GameSettingsProvider>
      <RoutingProvider>
        <LevelFour />
      </RoutingProvider>
    </GameSettingsProvider>
  </MemoryRouter>
);

describe("Test level one", () => {
  test("Renders header", () => {
    render(RenderedLevelOne);
    const header = screen.getByText(LevelOneMessages.HINT);
    expect(header).toBeInTheDocument();
  });

  test("Unlock button does not navigate", () => {
    render(RenderedLevelOne);
    const unlockButton = screen.getByTestId("unlockButton");
    fireEvent.click(unlockButton);
    expect(mockedUsedNavigate).not.toHaveBeenCalledWith("/levelTwo");
  });

  test("Unlocks and navigates to /levelTwo", () => {
    render(RenderedLevelOne);
    const unlockButton = screen.getByTestId("unlockButton");
    const continueButton = screen.getByTestId("continueButton");
    fireEvent.click(unlockButton);
    fireEvent.click(continueButton);
    expect(mockedUsedNavigate).toHaveBeenCalledWith("/levelTwo");
  });
});

describe("Test level two", () => {
  test("Renders header", () => {
    render(RenderedLevelTwo);
    const header = screen.getByText(LevelTwoMessages.HINT);
    expect(header).toBeInTheDocument();
  });

  test("Unlock button does not navigate", () => {
    render(RenderedLevelTwo);
    const unlockButton = screen.getByTestId("unlockButton");
    fireEvent.click(unlockButton);
    expect(mockedUsedNavigate).not.toHaveBeenCalledWith("/levelTwo");
  });

  test("Unlocks and navigates to /levelThree", () => {
    render(RenderedLevelTwo);
    const continueButton = screen.getByTestId("continueButton");
    fireEvent.click(continueButton);
    expect(mockedUsedNavigate).toHaveBeenCalledWith("/levelThree");
  });
});

describe("Test level four", () => {
  test("Renders header", () => {
    render(RenderedLevelFour);
    const header = screen.getByText(LevelFourMessages.HINT);
    expect(header).toBeInTheDocument();
  });

  test("Continue button navigates to /stepEndClassic", () => {
    render(RenderedLevelFour);
    const continueButton = screen.getByTestId("continueButton");
    fireEvent.click(continueButton);
    expect(mockedUsedNavigate).toHaveBeenCalledWith("/stepEndClassic");
  });
});
