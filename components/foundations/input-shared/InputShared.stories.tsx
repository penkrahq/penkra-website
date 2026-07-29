import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, userEvent } from "storybook/test";

import { InputShared } from "./InputShared";
import styles from "./InputShared.module.css";

const meta = {
  args: {
    "aria-label": "Email address",
    icon: "mail",
    placeholder: "you@company.com",
    type: "email",
  },
  component: InputShared,
  decorators: [
    (Story) => (
      <div className={styles.storyWidth}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    pencil: {
      parentComponentId: "P8VhfD",
      sourceNodeIds: {
        email: "Canaw",
        password: "BrHZI",
      },
    },
  },
  title: "Foundations/Input/Shared",
} satisfies Meta<typeof InputShared>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Focused: Story = {
  play: async ({ canvas }) => {
    await canvas.getByRole("textbox").focus();
  },
};

export const Typed: Story = {
  play: async ({ canvas }) => {
    const input = canvas.getByRole("textbox");
    await userEvent.type(input, "hello@penkra.com");
    await expect(input).toHaveValue("hello@penkra.com");
  },
};

export const Error: Story = {
  args: {
    invalid: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
