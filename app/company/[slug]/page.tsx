import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { pageMetadata } from "../../../lib/metadata";
import { AlSubpage } from "../../../components/al-subpage";

const COMPANY = {
  about: {
    eyebrow: "$ ABOUT",
    title: "We're an AI agency. Agents do the work, seniors review it.",
    subtitle:
      "penkra exists because most teams don't need another freelancer or another SaaS tool — they need work done. We pair AI agents with senior experts so requests ship in days, not months.",
    sections: [
      {
        heading: "What we believe",
        items: [
          "Agents should do the first draft, every time",
          "A senior human reviews everything before it ships",
          "Speed and craft aren't a tradeoff when the loop is right",
          "Founders should be able to type a task and trust it gets done",
        ],
      },
    ],
  },
  process: {
    eyebrow: "$ OUR PROCESS",
    title: "From prompt to shipped, on a schedule you can set your watch to.",
    subtitle:
      "Every request follows the same loop: an agent builds the first version, a senior human reviews and refines it, and you get a result — not a project plan.",
    sections: [
      {
        heading: "How it works",
        items: [
          "You submit a request — as detailed or as rough as you like",
          "An agent scaffolds a first version within hours",
          "A senior expert reviews, refines, and hardens the work",
          "You get the shipped result, with room for one round of revisions",
        ],
      },
    ],
  },
  careers: {
    eyebrow: "$ CAREERS",
    title: "Join a team that builds alongside its own agents.",
    subtitle:
      "We're looking for senior designers, engineers, writers, and strategists who want to spend their time on judgment and craft — not repetitive first drafts.",
    sections: [
      {
        heading: "Why work here",
        items: [
          "Every hire works directly with our agent tooling, not around it",
          "You review and refine, you don't start from a blank page",
          "Small senior team, high leverage, real client outcomes",
          "Remote-first, async-friendly",
        ],
      },
    ],
  },
  engineering: {
    eyebrow: "$ ENGINEERING",
    title: "The systems behind the agents.",
    subtitle:
      "A look at how we build and operate the agent infrastructure that powers every request — from orchestration to the human review layer that keeps quality high.",
    sections: [
      {
        heading: "What we build",
        items: [
          "Agent orchestration and task routing",
          "Review tooling for senior experts to refine agent output",
          "Delivery pipelines for shipping client work safely",
          "Internal tooling for tracking quality and turnaround",
        ],
      },
    ],
  },
} as const;

type CompanySlug = keyof typeof COMPANY;

export function generateStaticParams() {
  return Object.keys(COMPANY).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = COMPANY[slug as CompanySlug];
  if (!entry) return pageMetadata({ path: `/company/${slug}` });
  return pageMetadata({
    title: entry.title,
    description: entry.subtitle,
    path: `/company/${slug}`,
  });
}

export default async function CompanyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = COMPANY[slug as CompanySlug];
  if (!entry) notFound();
  return <AlSubpage {...entry} />;
}
