import type { Meta, StoryObj } from "@storybook/react";

import { NavigationButton } from "./NavigationButton";

const meta: Meta<typeof NavigationButton> = {
  title: "Buttons/NavigationButton",
  component: NavigationButton,
};

export default meta;
type Story = StoryObj<typeof NavigationButton>;

export const GithubButton: Story = {
  render: () => <NavigationButton id="githubButton" light={false} />,
};

export const PDButton: Story = {
  render: () => <NavigationButton id="pdButton" />,
};

export const TrelloButton: Story = {
  render: () => <NavigationButton id="trelloButton" />,
};
