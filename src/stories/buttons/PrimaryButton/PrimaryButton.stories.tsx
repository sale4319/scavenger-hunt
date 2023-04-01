import { ComponentStory, ComponentMeta } from "@storybook/react";

import { PrimaryButton } from "./PrimaryButton";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Buttons/PrimaryButton",
  component: PrimaryButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof PrimaryButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PrimaryButton> = (args) => (
  <PrimaryButton {...args} />
);

export const Fill = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Fill.args = {
  mode: "fill",
  label: "Fill In",
};

export const Pulse = Template.bind({});
Pulse.args = {
  mode: "pulse",
  label: "Pulse",
};

export const Close = Template.bind({});
Close.args = {
  mode: "close",
  label: "Close",
};

export const Raise = Template.bind({});
Raise.args = {
  mode: "raise",
  label: "Raise",
};

export const Up = Template.bind({});
Up.args = {
  mode: "up",
  label: "Fill Up",
};

export const Slide = Template.bind({});
Slide.args = {
  mode: "slide",
  label: "Slide",
};

export const Offset = Template.bind({});
Offset.args = {
  mode: "offset",
  label: "Offset",
};
