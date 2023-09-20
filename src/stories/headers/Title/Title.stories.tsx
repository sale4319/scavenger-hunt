import type { Meta, StoryObj } from "@storybook/react";
import { GameSettingsProvider } from "../../../providers/GameSettingsContext";
import { Title } from "./Title";

const meta: Meta<typeof Title> = {
  title: "Headers/Title",
  component: Title,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Title>;

export const Preview: Story = {
  render: () => (
    <GameSettingsProvider>
      <Title label="Your  title" />
    </GameSettingsProvider>
  ),
};

export const Large: Story = {
  render: () => (
    <GameSettingsProvider>
      <Title label="Your large title" titleSize="large" />
    </GameSettingsProvider>
  ),
};

export const Meduim: Story = {
  render: () => (
    <GameSettingsProvider>
      <Title label="Your medium title" titleSize="medium" color="#61dafb" />
    </GameSettingsProvider>
  ),
};

export const Small: Story = {
  render: () => (
    <GameSettingsProvider>
      <Title label="Your small title" titleSize="small" color="#61dafb" />
    </GameSettingsProvider>
  ),
};
