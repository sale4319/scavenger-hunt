import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { QuestionIconToolTip } from "./QuestionIconToolTip";

export default {
  title: "ToolTips/QuestionIconToolTip",
  component: QuestionIconToolTip,
} as ComponentMeta<typeof QuestionIconToolTip>;

const Template: ComponentStory<typeof QuestionIconToolTip> = (args) => (
  <QuestionIconToolTip {...args} />
);

export const Default = Template.bind({});
