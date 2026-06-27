import type { Metadata } from "next";
import { FinalCta } from "../../../../components/final-cta";
import { JsonLd } from "../../../../components/json-ld";
import { PageHero } from "../../../../components/page-hero";
import { PillBadge } from "../../../../components/pill-badge";
import { Reveal } from "../../../../components/reveal";
import { SectionHeading } from "../../../../components/section-heading";
import { bookCallLink } from "../../../../lib/links";
import { absoluteUrl, pageMetadata } from "../../../../lib/metadata";
import { FINAL_CTA, wa } from "../../../../lib/site-content";

const preparationItems = [
  "Proposed business names and alternate names.",
  "Plain-language description of what the business will do.",
  "Owner, partner, director, shareholder, or member details, depending on the structure.",
  "Contact details and address information that may be needed for the filing.",
  "Identification and supporting documents only when the next step requires them.",
  "Deadline, urgency, and any third-party dependency that affects timing.",
];

const mistakeItems = [
  "Waiting until submission time to collect owner or director details.",
  "Using vague business activity descriptions that need clarification later.",
  "Sharing sensitive IDs before the process actually needs them.",
  "Forgetting that registration may create follow-up admin, record keeping, and renewal work.",
  "Treating government or third-party fees as final before checking the current requirement.",
];

const updateItems = [
  "WhatsApp-first updates for quick back-and-forth.",
  "A clear next action when Penkra needs information, approval, or payment.",
  "Human review before official submissions, payment actions, or sensitive outbound messages.",
  "Status notes even when a government, registry, or third party has not moved yet.",
  "A completion handoff with final documents and records organized where possible.",
];

export const metadata: Metadata = pageMetadata({
  title: "Ghana Business Registration Guide",
  description:
    "A practical guide to preparing for Ghana business registration support: what to gather, common mistakes, and how Penkra keeps the work clear.",
  path: "/ghana/business-registration/guide",
  image: "/og/business-registration.png",
});

export default function BusinessRegistrationGuidePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Ghana business registration guide",
          description:
            "A practical guide to preparing for Ghana business registration support.",
          url: absoluteUrl("/ghana/business-registration/guide"),
          author: {
            "@id": absoluteUrl("/#organization"),
          },
          publisher: {
            "@id": absoluteUrl("/#organization"),
          },
          mainEntityOfPage: absoluteUrl("/ghana/business-registration/guide"),
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
              name: "Ghana",
              item: absoluteUrl("/ghana"),
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Business registration",
              item: absoluteUrl("/ghana/business-registration"),
            },
            {
              "@type": "ListItem",
              position: 4,
              name: "Guide",
              item: absoluteUrl("/ghana/business-registration/guide"),
            },
          ],
        }}
      />
      <PageHero
        badge="Ghana business registration guide"
        h1="Prepare before the paperwork starts."
        copy="A registration request moves faster when the basic facts, people, documents, approvals, and payment expectations are clear before submission work begins."
        primary={{ label: "Start on WhatsApp", href: wa("businessRegistration"), external: true }}
        secondary={{ label: "View service", href: "/ghana/business-registration" }}
        variant="compact"
      />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <SectionHeading
            badge="Overview"
            heading="Registration support is preparation, coordination, and follow-through."
            body="Penkra helps clarify the likely path, organize information, prepare work, coordinate filing steps where applicable, track follow-ups, and keep the final record easy to find. Government approvals and timelines still depend on the relevant authorities and complete information."
          />
        </div>
      </section>

      <section className="section" style={{ background: "var(--color-linen-blue)" }}>
        <div className="container">
          <SectionHeading
            badge="What to prepare"
            heading="Useful details to gather before registration support starts."
          />
          <div
            className="guide-list-grid"
            style={{
              marginTop: "42px",
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "18px",
            }}
          >
            {preparationItems.map((item, index) => (
              <Reveal key={item} delay={index * 45}>
                <GuideItem index={index + 1} text={item} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div
            className="guide-two-column"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "42px",
            }}
          >
            <div>
              <SectionHeading
                badge="Avoid delays"
                heading="Common mistakes that slow registration work."
              />
              <div style={{ marginTop: "28px", display: "grid", gap: "14px" }}>
                {mistakeItems.map((item, index) => (
                  <Reveal key={item} delay={index * 45}>
                    <GuideItem index={index + 1} text={item} />
                  </Reveal>
                ))}
              </div>
            </div>
            <div>
              <SectionHeading
                badge="Updates"
                heading="How Penkra keeps the work clear."
              />
              <div style={{ marginTop: "28px", display: "grid", gap: "14px" }}>
                {updateItems.map((item, index) => (
                  <Reveal key={item} delay={index * 45}>
                    <GuideItem index={index + 1} text={item} />
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
          <style>{`
            @media (min-width: 760px) {
              .guide-list-grid { grid-template-columns: repeat(2, 1fr) !important; }
            }
            @media (min-width: 1024px) {
              .guide-two-column { grid-template-columns: repeat(2, 1fr) !important; }
            }
          `}</style>
        </div>
      </section>

      <section className="section tight-mobile" style={{ paddingTop: 0, paddingBottom: "49px" }}>
        <div className="container">
          <Reveal>
            <div
              style={{
                background: "var(--color-blue-wash)",
                border: "1px solid var(--color-hairline-gray)",
                borderRadius: "var(--radius-cards)",
                padding: "28px",
                display: "flex",
                flexDirection: "column",
                gap: "14px",
                maxWidth: "88ch",
              }}
            >
              <PillBadge tone="soft">Important boundary</PillBadge>
              <p
                style={{
                  fontSize: "var(--text-body-sm)",
                  lineHeight: "var(--leading-body-sm)",
                  color: "var(--color-charcoal)",
                }}
              >
                This guide is general operational education. It is not legal, tax, accounting, or
                financial advice. Penkra can help coordinate the work, but specialist decisions
                should be reviewed with the right qualified professional.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <FinalCta
        heading={FINAL_CTA.businessRegistration.heading}
        body={FINAL_CTA.businessRegistration.body}
        primary={{ label: "Message Penkra", href: wa("businessRegistration"), external: true }}
        secondary={{ label: "Book a call", href: bookCallLink(), external: true }}
      />
    </>
  );
}

function GuideItem({ index, text }: { index: number; text: string }) {
  return (
    <div
      style={{
        background: "var(--color-linen-white)",
        border: "1px solid var(--color-hairline-gray)",
        borderRadius: "var(--radius-cards)",
        padding: "18px",
        display: "flex",
        gap: "14px",
        alignItems: "flex-start",
        minHeight: "100%",
      }}
    >
      <span
        aria-hidden
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: "32px",
          height: "32px",
          borderRadius: "var(--radius-nav)",
          background: "var(--color-blue-ink)",
          color: "var(--color-linen-white)",
          fontSize: "var(--text-caption)",
          flexShrink: 0,
        }}
      >
        {String(index).padStart(2, "0")}
      </span>
      <p
        style={{
          fontSize: "var(--text-body-sm)",
          lineHeight: "var(--leading-body-sm)",
          color: "var(--color-charcoal)",
        }}
      >
        {text}
      </p>
    </div>
  );
}
