import type { Meta, StoryObj } from "@storybook/react";
import { GameSettingsProvider } from "../../../providers/GameSettingsContext";
import { IndicatorBadge } from "./IndicatorBadge";

const meta: Meta<typeof IndicatorBadge> = {
  title: "indicators/IndicatorBadge",
  component: IndicatorBadge,
};

export default meta;
type Story = StoryObj<typeof IndicatorBadge>;

export const Indicator: Story = {
  render: () => (
    <GameSettingsProvider>
      <IndicatorBadge level={3} color="blue" />
    </GameSettingsProvider>
  ),
};
