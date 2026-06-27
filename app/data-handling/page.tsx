import type { Metadata } from "next";
import { JsonLd } from "../../components/json-ld";
import { LegalPage } from "../../components/legal-page";
import { absoluteUrl, pageMetadata } from "../../lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Document And Data Handling",
  description:
    "How Penkra handles documents, identity files, business records, payments, submissions, and sensitive operational information.",
  path: "/data-handling",
});

export default function DataHandlingPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "How Penkra handles documents and sensitive information",
          description:
            "How Penkra handles documents, identity files, business records, payments, submissions, and sensitive operational information.",
          url: absoluteUrl("/data-handling"),
          author: {
            "@id": absoluteUrl("/#organization"),
          },
          publisher: {
            "@id": absoluteUrl("/#organization"),
          },
          mainEntityOfPage: absoluteUrl("/data-handling"),
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: absoluteUrl("/"),
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Data handling",
              item: absoluteUrl("/data-handling"),
            },
          ],
        }}
      />
      <LegalPage
        badge="Trust"
        title="Document and data handling"
        description="Many Penkra services involve identity files, business records, forms, payments, submissions, and private context. We treat document handling as part of the work itself, not an afterthought."
        sections={[
          {
            title: "We ask for what the task needs",
            body: [
              "Penkra should collect the information and files needed for the current step. If a document or detail is not needed yet, the safer default is not to ask for it early.",
              "For early conversations, a plain-language description is often enough. Sensitive documents should come later, when the next action actually requires them.",
            ],
          },
          {
            title: "Sensitive actions are human-reviewed",
            body: [
              "Documents, official forms, payment actions, submissions, and important outbound messages should be reviewed before final action.",
              "AI-assisted tools can help organize, summarize, draft, and check work, but sensitive operational actions still need human oversight.",
            ],
          },
          {
            title: "Records are kept with context",
            body: [
              "Working files, final records, billing records, communication history, and follow-up reminders may need to be kept together so the work can be audited and continued later.",
              "Where possible, Penkra separates working files from final handoff records and billing records so access can be limited over time.",
            ],
          },
          {
            title: "Storage and transfer",
            body: [
              "Documents may be stored in controlled cloud storage and linked to client or service records. Access should be limited to people or systems involved in the work.",
              "Clients should avoid sending unnecessary sensitive data through insecure channels. As better upload or portal flows become available, Penkra may direct clients there for higher-risk files.",
            ],
          },
          {
            title: "Client permission and specialist boundaries",
            body: [
              "Penkra may need client approval before submitting paperwork, paying third-party fees, contacting an office, or sending sensitive information to another provider.",
              "Penkra can help coordinate with legal, tax, accounting, immigration, financial, or other specialists, but it does not replace regulated professional advice.",
            ],
          },
          {
            title: "Future controls",
            body: [
              "As Penkra's internal app matures, we plan to add audit logs, role-based access, retention controls, signed links, and clearer client record workflows.",
              "The goal is simple for clients: send what is needed, know what happens next, and avoid spreading sensitive files across unnecessary channels.",
            ],
          },
        ]}
      />
    </>
  );
}
