import type { Meta, StoryObj } from "@storybook/react";

import { PrimaryButton } from "./PrimaryButton";

const meta: Meta<typeof PrimaryButton> = {
  title: "Buttons/PrimaryButton",
  component: PrimaryButton,
};

export default meta;
type Story = StoryObj<typeof PrimaryButton>;

export const Fill: Story = {
  render: () => <PrimaryButton primary label="Fill" mode="fill" />,
};

export const Pulse: Story = {
  render: () => <PrimaryButton label="Pulse" mode="pulse" />,
};

export const Close: Story = {
  render: () => <PrimaryButton label="Close" mode="close" />,
};

export const Raise: Story = {
  render: () => <PrimaryButton label="Raise" mode="raise" />,
};

export const Up: Story = {
  render: () => <PrimaryButton label="Fill Up" mode="up" />,
};

export const Slide: Story = {
  render: () => <PrimaryButton label="Slide" mode="slide" />,
};

export const Offset: Story = {
  render: () => <PrimaryButton label="Offset" mode="offset" />,
};
