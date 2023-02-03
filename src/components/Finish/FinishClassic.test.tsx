import { fireEvent, render, screen } from "@testing-library/react";
import { StyleSheetTestUtils } from "aphrodite";
import { EndClassicMessages } from "../../Messages";
import FinishClassic from "./FinishClassic";
import { DarkModeProvider } from "../../providers/DarkModeContext";
import { MemoryRouter } from "react-router-dom";

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

const RenderedComponent = (
  <MemoryRouter>
    <DarkModeProvider>
      <FinishClassic />
    </DarkModeProvider>
  </MemoryRouter>
);

test("Renders header", () => {
  render(RenderedComponent);
  const header = screen.getByText(EndClassicMessages.CONGRATS);
  expect(header).toBeInTheDocument();
});

test("Unlock button does not navigate", () => {
  render(RenderedComponent);
  const unlockButton = screen.getByTestId("unlockButton");
  fireEvent.click(unlockButton);
  expect(mockedUsedNavigate).not.toHaveBeenCalledWith("/levelOne");
});

test("Unlocks and navigates to home", () => {
  render(RenderedComponent);
  const unlockButton = screen.getByTestId("unlockButton");
  const continueButton = screen.getByTestId("continueButton");
  fireEvent.click(unlockButton);
  fireEvent.click(continueButton);
  expect(mockedUsedNavigate).toHaveBeenCalledWith("/");
});
