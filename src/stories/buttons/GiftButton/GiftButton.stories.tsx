import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { GiftButton } from "./GiftButton";

export default {
  title: "Buttons/GiftButton",
  component: GiftButton,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof GiftButton>;

const Template: ComponentStory<typeof GiftButton> = (args) => (
  <GiftButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Button",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Button",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Button",
};
