import { fireEvent, render, screen } from "@testing-library/react";
import { DarkModeProvider } from "../../../providers/DarkModeContext";
import { MemoryRouter } from "react-router-dom";
import { QuizOne } from "../../Start/QuizOne";
import { QuizTwo } from "./QuizTwo";
import { QuizThree } from "./QuizThree";
import { QuizFour } from "./QuizFour";
import { StyleSheetTestUtils } from "aphrodite";

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

const RenderedQuizOne = (
  <MemoryRouter>
    <DarkModeProvider>
      <QuizOne />
    </DarkModeProvider>
  </MemoryRouter>
);

const RenderedQuizTwo = (
  <MemoryRouter>
    <DarkModeProvider>
      <QuizTwo />
    </DarkModeProvider>
  </MemoryRouter>
);

const RenderedQuizThree = (
  <MemoryRouter>
    <DarkModeProvider>
      <QuizThree />
    </DarkModeProvider>
  </MemoryRouter>
);

const RenderedQuizFour = (
  <MemoryRouter>
    <DarkModeProvider>
      <QuizFour />
    </DarkModeProvider>
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
