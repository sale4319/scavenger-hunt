import type { Meta, StoryObj } from "@storybook/react";
import { SettingsModal } from "./SettingsModal";

const meta: Meta<typeof SettingsModal> = {
  title: "Modals/SettingsModal",
  component: SettingsModal,
};

export default meta;
type Story = StoryObj<typeof SettingsModal>;

export const Fill: Story = {
  render: () => <SettingsModal />,
};
