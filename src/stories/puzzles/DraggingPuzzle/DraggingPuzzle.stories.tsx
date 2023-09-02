import type { Meta, StoryObj } from "@storybook/react";
import { GameSettingsProvider } from "../../../providers/GameSettingsContext";
import DraggingPuzzle from "./DraggingPuzzle";

const meta: Meta<typeof DraggingPuzzle> = {
  title: "Puzzles/DraggingPuzzle",
  component: DraggingPuzzle,
};

export default meta;
type Story = StoryObj<typeof DraggingPuzzle>;

export const Default: Story = {
  render: () => (
    <GameSettingsProvider>
      <DraggingPuzzle mode="pulse" />
    </GameSettingsProvider>
  ),
};
