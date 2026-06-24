import type { Metadata } from "next";
import { LegalPage } from "../../components/legal-page";
import { pageMetadata } from "../../lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "AI-Assisted Work",
  description: "How Penkra uses AI-assisted tools while keeping human review in sensitive workflows.",
  path: "/ai-assisted",
});

export default function AiAssistedPage() {
  return (
    <LegalPage
      badge="AI-assisted"
      title="AI-assisted, human-reviewed work"
      description="Penkra is built to use AI and agents for the boring operational work, while keeping judgment, approvals, and accountability human where they matter."
      sections={[
        {
          title: "Where AI may help",
          body: [
            "AI-assisted tools may help summarize messages, prepare checklists, draft forms, generate document outlines, classify requests, organize records, and surface follow-up steps.",
            "These tools are used to improve clarity, convenience, and speed. They do not remove the need for accurate client information or human review.",
          ],
        },
        {
          title: "Human checkpoints",
          body: [
            "Sensitive files, official submissions, payments, legal or compliance-sensitive decisions, and client-facing commitments should pass through a human checkpoint.",
            "If something is ambiguous, high-risk, or outside an agreed service scope, Penkra may ask for confirmation before proceeding.",
          ],
        },
        {
          title: "Client control",
          body: [
            "Clients can ask how AI is being used in their workflow and can request more manual handling for sensitive tasks where feasible.",
            "Penkra may decline requests that would require unsafe automation, misleading submissions, or use of AI outside reasonable controls.",
          ],
        },
      ]}
    />
  );
}
