import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import QuestionForm from "./QuestionForm";

export default {
  title: "Forms/QuestionForm",
  component: QuestionForm,
} as ComponentMeta<typeof QuestionForm>;

const Template: ComponentStory<typeof QuestionForm> = (args) => (
  <QuestionForm {...args} />
);

export const Default = Template.bind({});
