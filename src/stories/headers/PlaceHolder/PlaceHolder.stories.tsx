import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { GameSettingsProvider } from "../../../providers/GameSettingsContext";
import { PlaceHolder } from "./PlaceHolder";

export default {
  title: "Pages/Container",
  component: PlaceHolder,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof PlaceHolder>;

const Template: ComponentStory<typeof PlaceHolder> = (args) => (
  <GameSettingsProvider>
    <PlaceHolder {...args} />
  </GameSettingsProvider>
);

export const Preview = Template.bind({});
Preview.args = {};
