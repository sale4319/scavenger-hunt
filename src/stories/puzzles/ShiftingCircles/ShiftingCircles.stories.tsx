import type { Meta, StoryObj } from "@storybook/react";
import { GameSettingsProvider } from "../../../providers/GameSettingsContext";
import ShiftingCircles from "./ShiftingCircles";

const meta: Meta<typeof ShiftingCircles> = {
  title: "Puzzles/ShiftingCircles",
  component: ShiftingCircles,
};

export default meta;
type Story = StoryObj<typeof ShiftingCircles>;

export const Default: Story = {
  render: () => (
    <GameSettingsProvider>
      <ShiftingCircles />
    </GameSettingsProvider>
  ),
};
