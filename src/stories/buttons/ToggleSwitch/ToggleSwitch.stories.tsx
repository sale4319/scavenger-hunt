import type { Meta, StoryObj } from "@storybook/react";
import { ToggleSwitch } from "./ToggleSwitch";

const meta: Meta<typeof ToggleSwitch> = {
  title: "Buttons/ToggleSwitch",
  component: ToggleSwitch,
};

export default meta;
type Story = StoryObj<typeof ToggleSwitch>;

export const SwitchOn: Story = {
  render: () => <ToggleSwitch toggle={true} label="ToggleSwitch" />,
};

export const SwitchOff: Story = {
  render: () => <ToggleSwitch toggle={false} label="ToggleSwitch" />,
};
