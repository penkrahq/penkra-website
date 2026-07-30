import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { ButtonPrimary } from "../../foundations/button-primary/ButtonPrimary";
import { StatusMessage } from "../../foundations/status-message/StatusMessage";
import { VerificationCodeInput } from "../../foundations/verification-code-input/VerificationCodeInput";
import { AccountFlowCard } from "./AccountFlowCard";
import formStyles from "./AccountFlowForm.module.css";

const meta = {
  component: AccountFlowCard,
  decorators: [
    (Story) => (
      <div
        style={{
          alignItems: "center",
          background: "var(--auth-canvas)",
          display: "flex",
          justifyContent: "center",
          minHeight: "100vh",
          padding: 32,
        }}
      >
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "fullscreen",
    pencil: {
      componentIds: {
        forgotPassword: "UTH4m",
        resetCodeSent: "Cr83x",
        setNewPassword: "mg5D5",
        verificationComplete: "ZabHp",
        verifyEmail: "OtzTd",
      },
    },
  },
  title: "Website/Authentication/Account Flow Cards",
} satisfies Meta<typeof AccountFlowCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const VerifyEmail: Story = {
  args: {
    heading: "Verify your email",
    subhead: "We sent a six-digit code to emmanuel@penkra.com.",
  },
  render: (args) => (
    <AccountFlowCard {...args}>
      <form className={formStyles.form}>
        <VerificationCodeInput onChange={() => undefined} value="" />
        <ButtonPrimary fullWidth>Verify email</ButtonPrimary>
        <p className={formStyles.note}>The code expires in 10 minutes.</p>
      </form>
    </AccountFlowCard>
  ),
};

export const InvalidCode: Story = {
  args: {
    heading: "Verify your email",
    subhead: "We sent a six-digit code to emmanuel@penkra.com.",
  },
  render: (args) => (
    <AccountFlowCard {...args}>
      <form className={formStyles.form}>
        <VerificationCodeInput
          invalid
          onChange={() => undefined}
          value="482901"
        />
        <StatusMessage>That code isn’t valid. Check it and try again.</StatusMessage>
        <ButtonPrimary fullWidth>Verify email</ButtonPrimary>
      </form>
    </AccountFlowCard>
  ),
};

export const VerificationComplete: Story = {
  args: {
    heading: "Email verified",
    status: "success",
    subhead: "Your account is ready. We’re returning you to the Penkra app.",
  },
  render: (args) => (
    <AccountFlowCard {...args}>
      <ButtonPrimary fullWidth>Open Penkra</ButtonPrimary>
    </AccountFlowCard>
  ),
};

export const PasswordResetComplete: Story = {
  args: {
    heading: "Password reset",
    status: "success",
    subhead: "Your password has been updated. Sign in with your new password.",
  },
  render: (args) => (
    <AccountFlowCard {...args}>
      <ButtonPrimary fullWidth>Sign in</ButtonPrimary>
    </AccountFlowCard>
  ),
};
