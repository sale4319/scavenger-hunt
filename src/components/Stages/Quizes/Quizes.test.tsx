import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { GameSettingsProvider } from "../../../providers/GameSettingsContext";
import { RoutingProvider } from "../../../providers/RoutingContext";
import { QuizOne, QuizTwo, QuizThree, QuizFour } from "./";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

const RenderedQuizOne = (
  <MemoryRouter>
    <GameSettingsProvider>
      <RoutingProvider>
        <QuizOne />
      </RoutingProvider>
    </GameSettingsProvider>
  </MemoryRouter>
);

const RenderedQuizTwo = (
  <MemoryRouter>
    <GameSettingsProvider>
      <RoutingProvider>
        <QuizTwo />
      </RoutingProvider>
    </GameSettingsProvider>
  </MemoryRouter>
);

const RenderedQuizThree = (
  <MemoryRouter>
    <GameSettingsProvider>
      <RoutingProvider>
        <QuizThree />
      </RoutingProvider>
    </GameSettingsProvider>
  </MemoryRouter>
);

const RenderedQuizFour = (
  <MemoryRouter>
    <GameSettingsProvider>
      <RoutingProvider>
        <QuizFour />
      </RoutingProvider>
    </GameSettingsProvider>
  </MemoryRouter>
);

describe("Test quiz one", () => {
  test("Continue button navigates to /levelOne", () => {
    render(RenderedQuizOne);
    const continueButton = screen.getByTestId("continueButton");
    fireEvent.click(continueButton);
    expect(mockedUsedNavigate).toHaveBeenCalledWith("/levelOne");
  });
});

describe("Test quiz two", () => {
  test("Continue button navigates to /levelTwo", () => {
    render(RenderedQuizTwo);
    const continueButton = screen.getByTestId("continueButton");
    fireEvent.click(continueButton);
    expect(mockedUsedNavigate).toHaveBeenCalledWith("/levelTwo");
  });
});

describe("Test quiz three", () => {
  test("Continue button navigates to /levelThree", () => {
    render(RenderedQuizThree);
    const continueButton = screen.getByTestId("continueButton");
    fireEvent.click(continueButton);
    expect(mockedUsedNavigate).toHaveBeenCalledWith("/levelThree");
  });
});

describe("Test quiz four", () => {
  test("Continue button navigates to /stepEndClassic", () => {
    render(RenderedQuizFour);
    const continueButton = screen.getByTestId("continueButton");
    fireEvent.click(continueButton);
    expect(mockedUsedNavigate).toHaveBeenCalledWith("/stepEndClassic");
  });
});
