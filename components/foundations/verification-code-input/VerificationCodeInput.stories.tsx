import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";

import { VerificationCodeInput } from "./VerificationCodeInput";

const meta = {
  component: VerificationCodeInput,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 360 }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    pencil: {
      componentId: "Mc1YK",
      instances: ["A5yrT", "map46", "FTq54", "S386q", "cWsFR", "ZZbcT"],
    },
  },
  render: (args) => {
    const [value, setValue] = useState(args.value);
    return <VerificationCodeInput {...args} onChange={setValue} value={value} />;
  },
  title: "Foundations/Input/Verification Code",
} satisfies Meta<typeof VerificationCodeInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  args: {
    onChange: () => undefined,
    value: "",
  },
};

export const Filled: Story = {
  args: {
    onChange: () => undefined,
    value: "482901",
  },
};

export const Error: Story = {
  args: {
    invalid: true,
    onChange: () => undefined,
    value: "482901",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    onChange: () => undefined,
    value: "482901",
  },
};
