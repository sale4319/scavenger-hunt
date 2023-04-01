import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { AppMenu } from "./AppMenu";

export default {
  title: "Headers/AppMenu",
  component: AppMenu,
} as ComponentMeta<typeof AppMenu>;

const Template: ComponentStory<typeof AppMenu> = () => <AppMenu />;

export const Default = Template.bind({});
