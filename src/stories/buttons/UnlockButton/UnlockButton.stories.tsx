import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { UnlockButton } from "./UnlockButton";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Buttons/UnlockButton",
  component: UnlockButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof UnlockButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof UnlockButton> = (args) => (
  <UnlockButton {...args} />
);

export const Unlock = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Unlock.args = {
  unlock: true,
};
