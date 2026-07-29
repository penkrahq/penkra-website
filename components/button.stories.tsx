import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Button } from "./button";

const meta = {
  args: {
    children: "Book a consultation",
    href: "/contact",
  },
  argTypes: {
    ctaId: {
      table: {
        category: "Analytics",
      },
    },
    ctaLocation: {
      table: {
        category: "Analytics",
      },
    },
    external: {
      control: "boolean",
    },
    variant: {
      control: "inline-radio",
      options: ["primary", "secondary"],
    },
  },
  component: Button,
  parameters: {
    docs: {
      description: {
        component:
          "The shared website call-to-action link. Stories use labels and destinations representative of the production website.",
      },
    },
  },
  title: "Foundations/Button",
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Secondary: Story = {
  args: {
    children: "Explore our services",
    href: "/services",
    variant: "secondary",
  },
};

export const External: Story = {
  args: {
    "aria-label": "Contact Penkra — opens in a new tab",
    children: "Contact Penkra",
    external: true,
    href: "https://penkra.com/contact",
  },
};
