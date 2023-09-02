import React from "react";

import { MemoryRouter } from "react-router";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { GameSettingsProvider } from "../../../providers/GameSettingsContext";
import { PageNotFound } from "./PageNotFound";

export default {
  title: "Pages/PageNotFound",
  component: PageNotFound,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof PageNotFound>;

const Template: ComponentStory<typeof PageNotFound> = (args) => (
  <GameSettingsProvider>
    <MemoryRouter initialEntries={["/"]}>
      <PageNotFound />
    </MemoryRouter>
  </GameSettingsProvider>
);

export const Preview = Template.bind({});
Preview.args = {};
