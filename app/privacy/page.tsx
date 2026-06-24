import type { Metadata } from "next";
import { LegalPage } from "../../components/legal-page";
import { pageMetadata } from "../../lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description: "How Penkra collects, uses, stores, and protects information shared with us.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <LegalPage
      badge="Privacy"
      title="Privacy policy"
      description="Penkra handles paperwork, admin, records, and logistics. That means people may share sensitive information with us, so our default posture is to collect only what is needed and keep it controlled."
      sections={[
        {
          title: "Information we collect",
          body: [
            "We may collect contact details, service request details, business information, identity or supporting documents, communication history, billing records, and files needed to complete requested work.",
            "We may also collect basic website analytics if analytics are enabled, such as pages viewed, referrers, device information, and CTA clicks. We do not need this data to be personally identifying for normal website measurement.",
          ],
        },
        {
          title: "How we use information",
          body: [
            "We use information to understand requests, prepare paperwork, coordinate logistics, communicate updates, maintain records, issue invoices, and improve our service operations.",
            "We may use AI-assisted tools to organize information, draft documents, summarize communications, or prepare internal checklists. Human review remains part of sensitive or submission-ready work.",
          ],
        },
        {
          title: "Sharing and third parties",
          body: [
            "We share information only when needed to complete a requested service, such as with government portals, payment providers, storage providers, communication tools, or other service providers involved in the work.",
            "We do not sell client information. We do not publish client details, documents, or case studies without explicit permission.",
          ],
        },
        {
          title: "Retention and deletion",
          body: [
            "We keep records while work is active and for a reasonable period afterward for billing, follow-up, compliance awareness, dispute handling, and continuity.",
            "A client may request deletion of records, subject to operational, legal, billing, or compliance reasons that require limited retention.",
          ],
        },
        {
          title: "Contact",
          body: [
            "For privacy questions or record requests, contact emmanuel@penkra.com. We may need to verify the requester before making changes to records.",
          ],
        },
      ]}
    />
  );
}
