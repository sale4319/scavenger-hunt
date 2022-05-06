import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { DarkModeProvider } from "../../../providers/DarkModeContext";

import { AppBar } from "./AppBar";

export default {
  title: "Headers/AppBar",
  component: AppBar,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof AppBar>;

const Template: ComponentStory<typeof AppBar> = (args) => (
  <DarkModeProvider>
    <AppBar />
  </DarkModeProvider>
);

export const Preview = Template.bind({});
Preview.args = {};
