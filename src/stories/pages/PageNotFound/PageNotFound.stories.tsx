import React from "react";
import { addDecorator } from "@storybook/react";
import { MemoryRouter } from "react-router";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { GameSettingsProvider } from "../../../providers/GameSettingsContext";
import { PageNotFound } from "./PageNotFound";

addDecorator((story) => (
  <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
));

export default {
  title: "Pages/PageNotFound",
  component: PageNotFound,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof PageNotFound>;

const Template: ComponentStory<typeof PageNotFound> = (args) => (
  <GameSettingsProvider>
    <PageNotFound />
  </GameSettingsProvider>
);

export const Preview = Template.bind({});
Preview.args = {};
