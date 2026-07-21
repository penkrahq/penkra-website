import type { Metadata } from "next";
import { pageMetadata } from "../../lib/metadata";
import { AlSubpage } from "../../components/al-subpage";

export const metadata: Metadata = pageMetadata({
  title: "Disclosures",
  description: "How penkra uses AI agents alongside senior human review, and what that means for the work we deliver.",
  path: "/disclosures",
});

export default function DisclosuresPage() {
  return (
    <AlSubpage
      eyebrow="$ DISCLOSURES"
      title="How we use AI, and where humans stay in the loop."
      subtitle="Transparency on how penkra's agents and senior team work together on your requests."
      sections={[
        {
          heading: "AI usage",
          items: [
            "AI agents produce first drafts and initial builds for most requests",
            "A senior human reviews and refines agent output before delivery",
            "Some requests may be delivered with light or no human edits, at our discretion, based on complexity",
            "You can request human-only handling for a given task",
          ],
        },
        {
          heading: "Client data",
          items: [
            "Client materials may be used by agents to complete your requests",
            "We do not use client data to train third-party models",
            "See our Data Center resource for full detail on data handling",
          ],
        },
      ]}
    />
  );
}
