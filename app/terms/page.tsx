import type { Metadata } from "next";
import { LegalPage } from "../../components/legal-page";
import { pageMetadata } from "../../lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Terms of Service",
  description: "Terms for using Penkra's paperwork, admin, records, and logistics services.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalPage
      badge="Terms"
      title="Terms of service"
      description="These terms set expectations for working with Penkra. They are practical operating terms and can be expanded as our services, countries, and payment flows mature."
      sections={[
        {
          title: "Service scope",
          body: [
            "Penkra provides operational support for paperwork, admin coordination, records, logistics, compliance awareness, and related service requests.",
            "Each request may include different work items, third-party fees, timelines, and dependencies. We clarify the scope before work starts where possible.",
          ],
        },
        {
          title: "Client responsibilities",
          body: [
            "Clients are responsible for providing accurate information, responsive communication, required documents, and timely approvals.",
            "Delays, incomplete details, third-party processing times, government portal issues, and payment delays may affect timelines.",
          ],
        },
        {
          title: "Professional advice",
          body: [
            "Penkra may provide process guidance, compliance reminders, and administrative support, but we are not a substitute for legal, tax, accounting, immigration, or regulated financial advice unless a qualified professional is explicitly engaged for that work.",
            "Clients should seek qualified professional advice where a decision requires regulated or specialist judgment.",
          ],
        },
        {
          title: "Approvals and submissions",
          body: [
            "For sensitive, official, payment, or submission-ready actions, Penkra may require client confirmation before proceeding.",
            "We may refuse work that appears unlawful, misleading, unsafe, or outside our operational capacity.",
          ],
        },
        {
          title: "Changes",
          body: [
            "We may update these terms as Penkra's services mature. Updated terms will be published on this page.",
          ],
        },
      ]}
    />
  );
}
