import { MemoryRouter } from "react-router";
import type { Meta, StoryObj } from "@storybook/react";
import { GameSettingsProvider } from "../../../providers/GameSettingsContext";
import { PageNotFound } from "./PageNotFound";

const meta: Meta<typeof PageNotFound> = {
  title: "Pages/PageNotFound",
  component: PageNotFound,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof PageNotFound>;

export const Fill: Story = {
  render: () => (
    <GameSettingsProvider>
      <MemoryRouter initialEntries={["/"]}>
        <PageNotFound />
      </MemoryRouter>
    </GameSettingsProvider>
  ),
};
