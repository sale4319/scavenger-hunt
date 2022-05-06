import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { UnlockToolTip } from "./UnlockToolTip";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ToolTips/UnlockToolTip",
  component: UnlockToolTip,
} as ComponentMeta<typeof UnlockToolTip>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof UnlockToolTip> = (args) => (
  <UnlockToolTip {...args} />
);

export const Default = Template.bind({});
