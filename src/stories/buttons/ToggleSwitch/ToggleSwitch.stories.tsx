import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ToggleSwitch } from "./ToggleSwitch";

export default {
  title: "Buttons/ToggleSwitch",
  component: ToggleSwitch,
  argTypes: {},
} as ComponentMeta<typeof ToggleSwitch>;

const Template: ComponentStory<typeof ToggleSwitch> = (args) => (
  <ToggleSwitch {...args} />
);

export const SwitchOn = Template.bind({});
SwitchOn.args = {
  label: "ToggleSwitch",
  toggle: true,
};

export const SwitchOff = Template.bind({});
SwitchOff.args = {
  label: "ToggleSwitch",
  toggle: false,
};
