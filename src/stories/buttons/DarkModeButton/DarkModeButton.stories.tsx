import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { GameSettingsProvider } from "../../../providers/GameSettingsContext";

import { DarkModeButton } from "./DarkModeButton";

const meta: Meta<typeof DarkModeButton> = {
  title: "Buttons/DarkModeButton",
  component: DarkModeButton,
};

export default meta;
type Story = StoryObj<typeof DarkModeButton>;

export const Default: Story = {
  render: () => (
    <GameSettingsProvider>
      <DarkModeButton />
    </GameSettingsProvider>
  ),
};
