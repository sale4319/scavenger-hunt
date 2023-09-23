import type { Meta, StoryObj } from "@storybook/react";
import { GameSettingsProvider } from "../../../providers/GameSettingsContext";
import { GalaxyBackground } from "./GalaxyBackground";

const meta: Meta<typeof GalaxyBackground> = {
  title: "Pages/GalaxyBackground",
  component: GalaxyBackground,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof GalaxyBackground>;

export const Preview: Story = {
  render: () => (
    <GameSettingsProvider>
      <GalaxyBackground />
    </GameSettingsProvider>
  ),
};
