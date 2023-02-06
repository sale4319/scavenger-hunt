import { fireEvent, render, screen } from "@testing-library/react";
import { StyleSheetTestUtils } from "aphrodite";
import {
  LevelOneMessages,
  LevelThreeMessages,
  LevelTwoMessages,
} from "../../../Messages";
import { LevelOne } from "./LevelOne";
import { GameSettingsProvider } from "../../../providers/GameSettingsContext";
import { MemoryRouter } from "react-router-dom";
import { LevelTwo } from "./LevelTwo";
import { LevelThree } from "./LevelThree";
import userEvent from "@testing-library/user-event";
import {
  RoutingContext,
  RoutingProvider,
} from "../../../providers/RoutingContext";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

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

const RenderedLevelThree = (
  <MemoryRouter>
    <GameSettingsProvider>
      <RoutingProvider>
        <LevelThree />
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
    const unlockButton = screen.getByTestId("unlockButton");
    const continueButton = screen.getByTestId("continueButton");
    userEvent.click(unlockButton);
    userEvent.click(continueButton);
    expect(mockedUsedNavigate).toHaveBeenCalledWith("/levelThree");
  });
});

describe("Test level three", () => {
  test("Renders header", () => {
    render(RenderedLevelThree);
    const header = screen.getByText(LevelThreeMessages.HINT);
    expect(header).toBeInTheDocument();
  });

  test("Continue button navigates to /stepEndClassic", () => {
    render(RenderedLevelThree);
    const continueButton = screen.getByTestId("continueButton");
    fireEvent.click(continueButton);
    expect(mockedUsedNavigate).toHaveBeenCalledWith("/stepEndClassic");
  });
});
