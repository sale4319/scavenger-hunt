import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { QuestionIconToolTip } from "./QuestionIconToolTip";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ToolTips/QuestionIconToolTip",
  component: QuestionIconToolTip,
} as ComponentMeta<typeof QuestionIconToolTip>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof QuestionIconToolTip> = (args) => (
  <QuestionIconToolTip {...args} />
);

export const Default = Template.bind({});
