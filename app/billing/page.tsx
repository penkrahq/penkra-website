import type { Metadata } from "next";
import { LegalPage } from "../../components/legal-page";
import { pageMetadata } from "../../lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Billing and Refund Policy",
  description:
    "How Penkra handles the founding subscription, itemized billing, third-party fees, refunds, and disputes.",
  path: "/billing",
});

export default function BillingPage() {
  return (
    <LegalPage
      badge="Billing"
      title="Billing and refunds"
      description="Penkra uses granular, itemized billing because real service work often combines preparation, follow-up, logistics, third-party fees, and ongoing admin."
      sections={[
        {
          title: "Founding subscription",
          body: [
            "The Ghana founding subscription is GHS 400 per month. It covers access to ongoing operational help, AI-assisted work, and light operator supervision.",
            "The subscription does not include government fees, third-party provider fees, physical logistics, heavy manual fulfilment, licensed professional advice, or paid filing/submission costs.",
          ],
        },
        {
          title: "Itemized billing",
          body: [
            "Service work, logistics, third-party fees, follow-up work, and other approved costs may be itemized separately.",
            "For ongoing clients, invoices may be consolidated and sent monthly unless another arrangement is agreed.",
          ],
        },
        {
          title: "Third-party and government fees",
          body: [
            "Government, registry, portal, courier, payment processor, professional, or other third-party fees may be passed through to the client.",
            "These fees are usually non-refundable once paid to a third party, unless that third party refunds them.",
          ],
        },
        {
          title: "Refunds",
          body: [
            "Refunds depend on the stage of work, costs already incurred, and whether the work can reasonably be reversed.",
            "If Penkra has not started a paid service item, that item may be eligible for cancellation or refund. Work already completed, time spent, filings made, and third-party fees are generally not refundable.",
          ],
        },
        {
          title: "Disputes",
          body: [
            "If an invoice or charge looks wrong, contact emmanuel@penkra.com with the service request, invoice, and the item being disputed.",
            "We will review the record of work, approvals, and third-party costs before adjusting an invoice.",
          ],
        },
      ]}
    />
  );
}
