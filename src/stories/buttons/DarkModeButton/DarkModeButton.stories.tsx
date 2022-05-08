import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { DarkModeProvider } from "../../../providers/DarkModeContext";

import { DarkModeButton } from "./DarkModeButton";

export default {
  title: "Buttons/DarkModeButton",
  component: DarkModeButton,
} as ComponentMeta<typeof DarkModeButton>;

const Template: ComponentStory<typeof DarkModeButton> = (args) => (
  <DarkModeProvider>
    <DarkModeButton />
  </DarkModeProvider>
);

export const Default = Template.bind({});
