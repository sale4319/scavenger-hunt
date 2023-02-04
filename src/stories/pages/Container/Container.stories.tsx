import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { GameSettingsProvider } from "../../../providers/GameSettingsContext";
import { Container } from "./Container";

export default {
  title: "Pages/Container",
  component: Container,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args) => (
  <GameSettingsProvider>
    <Container {...args} />
  </GameSettingsProvider>
);

export const Preview = Template.bind({});
Preview.args = {};
