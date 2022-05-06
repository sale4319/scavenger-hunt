import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { GithubButton } from "./GithubButton";

export default {
  title: "Buttons/GithubButton",
  component: GithubButton,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof GithubButton>;

const Template: ComponentStory<typeof GithubButton> = (args) => (
  <GithubButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  size: 35,
};

export const Large = Template.bind({});
Large.args = {
  size: 45,
};

export const Small = Template.bind({});
Small.args = {
  size: 25,
};
