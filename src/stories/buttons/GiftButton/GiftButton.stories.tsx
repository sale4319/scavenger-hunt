import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { GiftButton } from "./GiftButton";

const meta: Meta<typeof GiftButton> = {
  title: "Buttons/GiftButton",
  component: GiftButton,
};

export default meta;
type Story = StoryObj<typeof GiftButton>;

export const Primary: Story = {
  render: () => <GiftButton primary label="Button" />,
};

export const Secondary: Story = {
  render: () => <GiftButton label="Button" />,
};

export const Large: Story = {
  render: () => <GiftButton label="Button" size="large" />,
};

export const Small: Story = {
  render: () => <GiftButton label="Button" size="small" />,
};
