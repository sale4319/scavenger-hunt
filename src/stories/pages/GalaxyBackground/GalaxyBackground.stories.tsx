import type { Meta, StoryObj } from "@storybook/react";
import { GameSettingsProvider } from "../../../providers/GameSettingsContext";
import { Container } from "../Container/Container";

const meta: Meta<typeof Container> = {
  title: "Pages/Container",
  component: Container,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Container>;

export const Preview: Story = {
  render: () => (
    <GameSettingsProvider>
      <Container children />
    </GameSettingsProvider>
  ),
};
