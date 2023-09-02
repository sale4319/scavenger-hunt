import type { Meta, StoryObj } from "@storybook/react";
import { GameSettingsProvider } from "../../../providers/GameSettingsContext";
import { PlaceHolder } from "./PlaceHolder";

const meta: Meta<typeof PlaceHolder> = {
  title: "Headers/PlaceHolder",
  component: PlaceHolder,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof PlaceHolder>;

export const Preview: Story = {
  render: () => (
    <GameSettingsProvider>
      <PlaceHolder />
    </GameSettingsProvider>
  ),
};
