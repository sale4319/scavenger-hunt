import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { GameSettingsProvider } from "../../../providers/GameSettingsContext";
import { IndicatorBadge } from "./IndicatorBadge";

export default {
  title: "indicators/IndicatorBadge",
  component: IndicatorBadge,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof IndicatorBadge>;

const Template: ComponentStory<typeof IndicatorBadge> = (args) => (
  <GameSettingsProvider>
    <IndicatorBadge {...args} />
  </GameSettingsProvider>
);

export const Indicator = Template.bind({});
Indicator.args = { level: 3, color: "blue" };
