import type { Meta, StoryObj } from "@storybook/react";

import { SubmitButton } from "./SubmitButton";

const meta: Meta<typeof SubmitButton> = {
  title: "Buttons/SubmitButton",
  component: SubmitButton,
};

export default meta;
type Story = StoryObj<typeof SubmitButton>;

export const Primary: Story = {
  render: () => <SubmitButton submit={true} label="Button" />,
};

export const Secondary: Story = {
  render: () => <SubmitButton label="Button" />,
};

export const Large: Story = {
  render: () => <SubmitButton label="Button" submit={true} size="large" />,
};

export const Small: Story = {
  render: () => <SubmitButton label="Button" submit={true} size="small" />,
};
