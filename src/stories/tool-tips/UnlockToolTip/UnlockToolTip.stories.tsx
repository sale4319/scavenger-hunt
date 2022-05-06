import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { UnlockToolTip } from "./UnlockToolTip";

export default {
  title: "ToolTips/UnlockToolTip",
  component: UnlockToolTip,
} as ComponentMeta<typeof UnlockToolTip>;

const Template: ComponentStory<typeof UnlockToolTip> = (args) => (
  <UnlockToolTip {...args} />
);

export const Default = Template.bind({});
