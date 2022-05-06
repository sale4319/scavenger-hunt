import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { GithubButton } from "./GithubButton";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Buttons/GithubButton",
  component: GithubButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof GithubButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
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
