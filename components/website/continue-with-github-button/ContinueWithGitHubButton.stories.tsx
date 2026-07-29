import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { ContinueWithGitHubButton } from "./ContinueWithGitHubButton";
import styles from "../provider-button/ProviderButton.module.css";

const meta = {
  component: ContinueWithGitHubButton,
  decorators: [
    (Story) => (
      <div className={styles.storyWidth}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    pencil: {
      componentId: "r5iDQb",
      sectionMarkerId: "AxsD0",
    },
  },
  title: "Website/Button/Continue with GitHub",
} satisfies Meta<typeof ContinueWithGitHubButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
