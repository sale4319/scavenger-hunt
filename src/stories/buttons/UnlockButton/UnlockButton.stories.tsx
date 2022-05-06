import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { UnlockButton } from "./UnlockButton";

export default {
  title: "Buttons/UnlockButton",
  component: UnlockButton,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof UnlockButton>;

const Template: ComponentStory<typeof UnlockButton> = (args) => (
  <UnlockButton {...args} />
);

export const Unlock = Template.bind({});
Unlock.args = {
  unlock: true,
};
