import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { ButtonPrimary } from "./ButtonPrimary";
import styles from "./ButtonPrimary.module.css";

const meta = {
  args: {
    children: "Create an account",
  },
  component: ButtonPrimary,
  parameters: {
    pencil: {
      parentComponentId: "P8VhfD",
      sourceNodeId: "U0J4z",
    },
  },
  title: "Foundations/Button/Primary",
} satisfies Meta<typeof ButtonPrimary>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
  },
  decorators: [
    (Story) => (
      <div className={styles.storyWidth}>
        <Story />
      </div>
    ),
  ],
};
