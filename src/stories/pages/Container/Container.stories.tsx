import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { DarkModeProvider } from "../../../providers/DarkModeContext";
import { Container } from "./Container";

export default {
  title: "Pages/Container",
  component: Container,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args) => (
  <DarkModeProvider>
    <Container {...args} />
  </DarkModeProvider>
);

export const Preview = Template.bind({});
Preview.args = {};
