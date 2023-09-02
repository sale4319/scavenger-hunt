import type { Meta, StoryObj } from "@storybook/react";
import { CountdownTimer } from "./CountdownTimer";

const meta: Meta<typeof CountdownTimer> = {
  title: "timer/CountdownTimer",
  component: CountdownTimer,
};

export default meta;
type Story = StoryObj<typeof CountdownTimer>;

export const Timer: Story = {
  render: () => <CountdownTimer />,
};
