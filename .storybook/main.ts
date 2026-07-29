import type { StorybookConfig } from "@storybook/nextjs-vite";

const config = {
  addons: ["@storybook/addon-docs", "@storybook/addon-a11y"],
  docs: {
    defaultName: "Documentation",
  },
  framework: {
    name: "@storybook/nextjs-vite",
    options: {},
  },
  staticDirs: ["../public"],
  stories: ["../components/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
} satisfies StorybookConfig;

export default config;
