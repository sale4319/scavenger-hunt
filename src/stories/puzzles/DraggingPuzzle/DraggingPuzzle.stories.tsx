import React from "react";

import { MemoryRouter } from "react-router";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { GameSettingsProvider } from "../../../providers/GameSettingsContext";
import DraggingPuzzle from "./DraggingPuzzle";

export default {
  title: "Puzzles/DraggingPuzzle",
  component: DraggingPuzzle,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof DraggingPuzzle>;

const Template: ComponentStory<typeof DraggingPuzzle> = (args) => (
  <GameSettingsProvider>
    <MemoryRouter initialEntries={["/"]}>
      <DraggingPuzzle />
    </MemoryRouter>
  </GameSettingsProvider>
);

export const Preview = Template.bind({});
Preview.args = {};
