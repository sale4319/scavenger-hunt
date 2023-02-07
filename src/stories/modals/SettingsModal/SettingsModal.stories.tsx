import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SettingsModal } from "./SettingsModal";

export default {
  title: "Modals/SettingsModal",
  component: SettingsModal,
  argTypes: {},
} as ComponentMeta<typeof SettingsModal>;

const Template: ComponentStory<typeof SettingsModal> = (args) => (
  <SettingsModal {...args} />
);

export const Settings = Template.bind({});
Settings.args = {};
