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

export const GithubButton = Template.bind({});
GithubButton.args = {
  id: "githubButton",
  light: false,
};

export const PDButton = Template.bind({});
GithubButton.args = {
  id: "pdButton",
};
