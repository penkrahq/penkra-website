import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { pageMetadata } from "../../../lib/metadata";
import { AlSubpage } from "../../../components/al-subpage";

const RESOURCES = {
  learn: {
    eyebrow: "$ LEARN",
    title: "Everything you need to know about working with an AI agency.",
    subtitle:
      "Guides on how penkra works — from your first request to a shipped result — written for founders who've never worked with agents before.",
    sections: [
      {
        heading: "Start here",
        items: [
          "How a request moves from prompt to shipped result",
          "What agents handle vs. what humans review",
          "Setting expectations on turnaround and quality",
          "How pricing and plans work",
        ],
      },
    ],
  },
  blog: {
    eyebrow: "$ BLOG",
    title: "Notes from the studio.",
    subtitle:
      "Field notes on building with AI agents — what we're shipping, what we're learning, and how the craft of an agency changes when agents do the first draft.",
    sections: [
      {
        heading: "Recent topics",
        items: [
          "How we built an agent that ships a website in 4 hours",
          "The human-in-the-loop pattern that makes AI actually useful",
          "What an AI-powered growth team looks like in practice",
          "Why your next hire should be an agent, not a freelancer",
        ],
      },
    ],
  },
  "help-center": {
    eyebrow: "$ HELP CENTER",
    title: "Answers, fast.",
    subtitle:
      "Common questions about requests, plans, delivery times, and working with your dedicated team — answered directly, no ticket queue required.",
    sections: [
      {
        heading: "Popular questions",
        items: [
          "How do I submit a new request?",
          "What's the difference between plans?",
          "How fast will my request be delivered?",
          "Can I talk to a human on my project?",
          "How do I cancel or change my plan?",
        ],
      },
    ],
  },
  "education-center": {
    eyebrow: "$ EDUCATION CENTER",
    title: "Get more out of every request.",
    subtitle:
      "Short, practical lessons on how to brief an agent, what makes a good request, and how to get agency-quality output on the first pass.",
    sections: [
      {
        heading: "Lessons",
        items: [
          "Writing a brief that gets you a better first draft",
          "How to review and give feedback on agent output",
          "Getting the most out of your weekly call",
          "When to escalate to a senior human directly",
        ],
      },
    ],
  },
  "data-center": {
    eyebrow: "$ DATA CENTER",
    title: "How we handle your data.",
    subtitle:
      "A plain-language look at what data we collect, how agents access it, and the safeguards senior humans keep in place around anything sensitive.",
    sections: [
      {
        heading: "What to know",
        items: [
          "What information we collect and why",
          "How agent access to your data is scoped and logged",
          "Where your data is stored and for how long",
          "How to request deletion or export",
        ],
      },
    ],
  },
  "case-studies": {
    eyebrow: "$ CASE STUDIES",
    title: "Real requests, real results.",
    subtitle:
      "A look at what founders have shipped with penkra — from first prompt to live product, with the timeline and team behind each one.",
    sections: [
      {
        heading: "Featured work",
        items: [
          "A seed-stage founder's landing page, live in under 48 hours",
          "A content engine that took a newsletter from 0 to 10k subscribers",
          "A brand refresh shipped in a single week",
          "A support inbox handled end-to-end by agents, reviewed daily",
        ],
      },
    ],
  },
  "client-wins": {
    eyebrow: "$ CLIENT WINS",
    title: "Milestones our clients hit with us.",
    subtitle:
      "The numbers behind the work — funding rounds closed, launches shipped, and campaigns that moved the needle, all built with agents and reviewed by seniors.",
    sections: [
      {
        heading: "Highlights",
        items: [
          "$40M+ in client revenue generated",
          "120+ projects shipped end-to-end",
          "40+ founders served across six years",
          "98% on-time delivery rate",
        ],
      },
    ],
  },
} as const;

type ResourceSlug = keyof typeof RESOURCES;

export function generateStaticParams() {
  return Object.keys(RESOURCES).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const resource = RESOURCES[slug as ResourceSlug];
  if (!resource) return pageMetadata({ path: `/resources/${slug}` });
  return pageMetadata({
    title: resource.title,
    description: resource.subtitle,
    path: `/resources/${slug}`,
  });
}

export default async function ResourcePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const resource = RESOURCES[slug as ResourceSlug];
  if (!resource) notFound();
  return <AlSubpage {...resource} />;
}
