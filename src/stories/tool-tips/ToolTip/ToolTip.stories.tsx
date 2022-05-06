import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ToolTip } from "./ToolTip";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ToolTips/ToolTip",
  component: ToolTip,
} as ComponentMeta<typeof ToolTip>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ToolTip> = (args) => (
  <ToolTip {...args} />
);

export const Default = Template.bind({});
