import type { Metadata } from "next";
import { LegalPage } from "../../components/legal-page";
import { pageMetadata } from "../../lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Data Handling",
  description: "How Penkra handles documents, identity files, business records, and sensitive paperwork.",
  path: "/data-handling",
});

export default function DataHandlingPage() {
  return (
    <LegalPage
      badge="Trust"
      title="Data handling"
      description="Many Penkra services involve documents and sensitive business information. We treat document handling as an operational control, not an afterthought."
      sections={[
        {
          title: "Minimum necessary access",
          body: [
            "We ask for the information and files needed for the service at hand. If a document or detail is not needed, we prefer not to collect it.",
            "Where possible, we separate working files, final records, billing records, and communication history so access can be limited over time.",
          ],
        },
        {
          title: "Storage and transfer",
          body: [
            "Documents may be stored in controlled cloud storage and linked to client/service records. Access should be limited to people or systems involved in the work.",
            "Clients should avoid sending unnecessary sensitive data through insecure channels. When better upload or portal flows are available, Penkra may direct clients there.",
          ],
        },
        {
          title: "Human review",
          body: [
            "Documents, forms, official submissions, payment actions, and sensitive client communications should be reviewed before final action.",
            "Automation can help prepare and organize work, but final responsibility for sensitive operational actions requires human oversight.",
          ],
        },
        {
          title: "Future controls",
          body: [
            "As Penkra's internal app matures, we plan to add audit logs, role-based access, retention controls, signed links, and clearer client record workflows.",
          ],
        },
      ]}
    />
  );
}
