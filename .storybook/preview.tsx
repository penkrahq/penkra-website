import "../app/globals.css";

import type { Preview } from "@storybook/nextjs-vite";
import { Inter, Manrope, Newsreader } from "next/font/google";

const manrope = Manrope({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
});

const newsreader = Newsreader({
  display: "swap",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["300", "400"],
});

const authInter = Inter({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-auth-inter",
});

const preview = {
  decorators: [
    (Story) => (
      <div className={`${manrope.variable} ${newsreader.variable} ${authInter.variable}`}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    actions: {
      disable: true,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      sort: "requiredFirst",
    },
    layout: "centered",
    nextjs: {
      appDirectory: true,
    },
    pencil: {
      file: "penkra-website.pen",
      repository: "penkra-website",
    },
  },
  tags: ["autodocs"],
} satisfies Preview;

export default preview;
