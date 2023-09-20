import type { Meta, StoryObj } from "@storybook/react";
import { GameSettingsProvider } from "../../../providers/GameSettingsContext";

import { SkipButton } from "./SkipButton";

const meta: Meta<typeof SkipButton> = {
  title: "Buttons/SkipButton",
  component: SkipButton,
};

export default meta;
type Story = StoryObj<typeof SkipButton>;

export const Skip: Story = {
  render: () => (
    <GameSettingsProvider>
      <SkipButton />
    </GameSettingsProvider>
  ),
};
