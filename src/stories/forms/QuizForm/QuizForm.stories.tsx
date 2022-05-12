import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Quiz } from "./QuizForm";

export default {
  title: "Forms/QuizForm",
  component: Quiz,
} as ComponentMeta<typeof Quiz>;

const Template: ComponentStory<typeof Quiz> = (args) => <Quiz {...args} />;

export const Default = Template.bind({});
