import { fireEvent, render, screen } from "@testing-library/react";
import { StyleSheetTestUtils } from "aphrodite";
import { StartTimerMessages } from "../../Messages";
import StartTimer from "./StartTimer";
import { DarkModeProvider } from "../../providers/DarkModeContext";

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

test("Renders header", () => {
  render(
    <DarkModeProvider>
      <StartTimer />
    </DarkModeProvider>
  );
  const header = screen.getByText(StartTimerMessages.TITLE);
  expect(header).toBeInTheDocument();
});

test("First click enable the button", () => {
  render(
    <DarkModeProvider>
      <StartTimer />
    </DarkModeProvider>
  );
  const button = screen.getByTestId("unlockButton");
  fireEvent.click(button);
  expect(mockedUsedNavigate).not.toHaveBeenCalledWith("/levelOne");
});

test("Second click navigates to /levelOne", () => {
  render(
    <DarkModeProvider>
      <StartTimer />
    </DarkModeProvider>
  );
  const button = screen.getByTestId("unlockButton");
  fireEvent.click(button);
  fireEvent.click(button);
  expect(mockedUsedNavigate).toHaveBeenCalledWith("/levelOne");
});
