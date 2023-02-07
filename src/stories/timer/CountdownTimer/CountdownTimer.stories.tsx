import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CountdownTimer } from "./CountdownTimer";

export default {
  title: "timer/CountdownTimer",
  component: CountdownTimer,
  argTypes: {},
} as ComponentMeta<typeof CountdownTimer>;

const Template: ComponentStory<typeof CountdownTimer> = () => (
  <CountdownTimer />
);

export const Settings = Template.bind({});
Settings.args = {};
