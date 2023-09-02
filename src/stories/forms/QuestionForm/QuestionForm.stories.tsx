import type { Meta, StoryObj } from "@storybook/react";

import { QuestionForm } from "./QuestionForm";

const meta: Meta<typeof QuestionForm> = {
  title: "Forms/QuestionForm",
  component: QuestionForm,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof QuestionForm>;

export const Default: Story = {
  render: () => <QuestionForm />,
};
