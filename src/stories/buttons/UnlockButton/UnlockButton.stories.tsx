import type { Meta, StoryObj } from "@storybook/react";

import { UnlockButton } from "./UnlockButton";

const meta: Meta<typeof UnlockButton> = {
  title: "Buttons/UnlockButton",
  component: UnlockButton,
};

export default meta;
type Story = StoryObj<typeof UnlockButton>;

export const Unlock: Story = {
  render: () => <UnlockButton unlock={true} />,
};
