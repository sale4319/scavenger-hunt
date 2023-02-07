import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { GameSettingsProvider } from "../../../providers/GameSettingsContext";

import { SkipButton } from "./SkipButton";

export default {
  title: "Buttons/SkipButton",
  component: SkipButton,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof SkipButton>;

const Template: ComponentStory<typeof SkipButton> = (args) => (
  <GameSettingsProvider>
    <SkipButton {...args} />
  </GameSettingsProvider>
);

export const Skip = Template.bind({});
Skip.args = {};
