import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Title } from "./Title";

export default {
  title: "Headers/Title",
  component: Title,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />;

export const Large = Template.bind({});
Large.args = { label: "Your large title", titleSize: "large" };

export const Primary = Template.bind({});
Primary.args = {
  label: "Your medium title",
  titleSize: "medium",
  color: "#61dafb",
};

export const Small = Template.bind({});
Small.args = { label: "Your small title", titleSize: "small" };
