import type { Meta, StoryObj } from "@storybook/react";

import { UnlockToolTip } from "./UnlockToolTip";

const meta: Meta<typeof UnlockToolTip> = {
  title: "ToolTips/UnlockToolTip",
  component: UnlockToolTip,
};

export default meta;
type Story = StoryObj<typeof UnlockToolTip>;

export const Default: Story = {
  render: () => <UnlockToolTip />,
};
