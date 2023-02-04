import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { GameSettingsProvider } from "../../../providers/GameSettingsContext";

import { DarkModeButton } from "./DarkModeButton";

export default {
  title: "Buttons/DarkModeButton",
  component: DarkModeButton,
} as ComponentMeta<typeof DarkModeButton>;

const Template: ComponentStory<typeof DarkModeButton> = (args) => (
  <GameSettingsProvider>
    <DarkModeButton />
  </GameSettingsProvider>
);

export const Default = Template.bind({});
