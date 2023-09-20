import type { Meta, StoryObj } from "@storybook/react";

import { Quiz } from "./QuizForm";

const meta: Meta<typeof Quiz> = {
  title: "Forms/QuizForm",
  component: Quiz,
};

export default meta;
type Story = StoryObj<typeof Quiz>;

export const Default: Story = {
  render: () => <Quiz />,
};
