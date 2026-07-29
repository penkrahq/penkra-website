import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { AuthCard } from "./AuthCard";
import styles from "./AuthCard.module.css";

const meta = {
  component: AuthCard,
  parameters: {
    layout: "fullscreen",
    pencil: {
      componentId: "P8VhfD",
      groupId: "NTSQr",
      instances: {
        signIn: "de8aZ",
        signUp: "XibI9",
      },
    },
  },
  title: "Website/Auth Card/Shared",
} satisfies Meta<typeof AuthCard>;

export default meta;
type Story = StoryObj<typeof meta>;

const Frame = (Story: () => React.ReactNode) => (
  <div className={styles.storyCanvas}>
    <Story />
  </div>
);

export const SignIn: Story = {
  decorators: [Frame],
};

export const SignUp: Story = {
  args: {
    mode: "sign-up",
  },
  decorators: [Frame],
};

export const Submitting: Story = {
  args: {
    submitting: true,
  },
  decorators: [Frame],
};
