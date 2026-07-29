import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { ContinueWithGoogleButton } from "./ContinueWithGoogleButton";
import styles from "../provider-button/ProviderButton.module.css";

const meta = {
  component: ContinueWithGoogleButton,
  decorators: [
    (Story) => (
      <div className={styles.storyWidth}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    pencil: {
      componentId: "IdovB",
      sectionMarkerId: "AxsD0",
    },
  },
  title: "Website/Button/Continue with Google",
} satisfies Meta<typeof ContinueWithGoogleButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
