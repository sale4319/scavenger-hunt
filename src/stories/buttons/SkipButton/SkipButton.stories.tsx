import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SkipButton } from "./SkipButton";

export default {
  title: "Buttons/SkipButton",
  component: SkipButton,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof SkipButton>;

const Template: ComponentStory<typeof SkipButton> = (args) => (
  <SkipButton {...args} />
);

export const Skip = Template.bind({});
Skip.args = {};
