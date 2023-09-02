import type { Meta, StoryObj } from "@storybook/react";
import { GameSettingsProvider } from "../../../providers/GameSettingsContext";

import { AppBar } from "./AppBar";

const meta: Meta<typeof AppBar> = {
  title: "Headers/AppBar",
  component: AppBar,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof AppBar>;

export const Default: Story = {
  render: () => (
    <GameSettingsProvider>
      <AppBar />
    </GameSettingsProvider>
  ),
};
