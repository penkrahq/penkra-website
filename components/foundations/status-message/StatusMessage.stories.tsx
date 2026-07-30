import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { StatusMessage } from "./StatusMessage";

const meta = {
  args: {
    children: "Email or password is incorrect.",
  },
  component: StatusMessage,
  parameters: {
    pencil: {
      componentId: "QxdKk",
      sourceNodeIds: {
        error: "tz7EA/d1GZk",
      },
    },
  },
  title: "Foundations/Status Message/Shared",
} satisfies Meta<typeof StatusMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Error: Story = {};
