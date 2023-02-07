import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { GameSettingsProvider } from "../../../providers/GameSettingsContext";

import { AppBar } from "./AppBar";

export default {
  title: "Headers/AppBar",
  component: AppBar,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof AppBar>;

const Template: ComponentStory<typeof AppBar> = (args) => (
  <GameSettingsProvider>
    <AppBar />
  </GameSettingsProvider>
);

export const Preview = Template.bind({});
Preview.args = {};
