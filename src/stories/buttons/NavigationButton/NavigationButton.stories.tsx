import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { NavigationButton } from "./NavigationButton";

export default {
  title: "Buttons/NavigationButton",
  component: NavigationButton,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof NavigationButton>;

const Template: ComponentStory<typeof NavigationButton> = (args) => (
  <NavigationButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  id: "githubButton",
};

export const Large = Template.bind({});
Large.args = {
  id: "pdButton",
};

export const Small = Template.bind({});
Small.args = {
  id: "githubButton",
};
