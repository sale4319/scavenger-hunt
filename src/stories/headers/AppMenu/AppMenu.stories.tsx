import type { Meta, StoryObj } from "@storybook/react";
import { GameSettingsProvider } from "../../../providers/GameSettingsContext";
import { AppMenu } from "./AppMenu";

const meta: Meta<typeof AppMenu> = {
  title: "Headers/AppMenu",
  component: AppMenu,
};

export default meta;
type Story = StoryObj<typeof AppMenu>;

export const Default: Story = {
  render: () => (
    <GameSettingsProvider>
      <AppMenu />
    </GameSettingsProvider>
  ),
};
