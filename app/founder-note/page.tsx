import type { Metadata } from "next";
import { FinalCta } from "../../components/final-cta";
import { JsonLd } from "../../components/json-ld";
import { PageHero } from "../../components/page-hero";
import { Reveal } from "../../components/reveal";
import { SectionHeading } from "../../components/section-heading";
import { bookCallLink } from "../../lib/links";
import { absoluteUrl, pageMetadata } from "../../lib/metadata";
import { FINAL_CTA, wa } from "../../lib/site-content";

const noteParagraphs = [
  "I am building Penkra because a lot of useful work gets slowed down by unclear paperwork, follow-ups, admin, logistics, and records that no one has time to manage properly.",
  "The first version is intentionally simple for clients. You message what you need handled, we ask the right clarifying questions, and we turn the request into practical next steps. Behind that simple conversation, Penkra is building the internal systems, checklists, agents, and review workflows needed to make delegated work faster and clearer.",
  "Penkra starts with Ghana business registration support and operational help around paperwork, records, follow-ups, and logistics. The goal is not to replace professional judgment where legal, tax, accounting, financial, immigration, or other licensed advice is required. The goal is to remove the avoidable operational drag around the work.",
  "The standard I care about is clarity, convenience, and speed. Clients should know what is needed, what is pending, what costs money, what needs approval, and where the final records are.",
];

export const metadata: Metadata = pageMetadata({
  title: "Founder Note",
  description:
    "A founder note from Emmanuel on why Penkra exists and how it helps people and businesses delegate operational work.",
  path: "/founder-note",
});

export default function FounderNotePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "A founder note on Penkra",
          description:
            "A founder note from Emmanuel on why Penkra exists and how it helps people and businesses delegate operational work.",
          url: absoluteUrl("/founder-note"),
          author: {
            "@type": "Person",
            name: "Emmanuel Gyekye Atta-Penkra",
          },
          publisher: {
            "@id": absoluteUrl("/#organization"),
          },
          mainEntityOfPage: absoluteUrl("/founder-note"),
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
              name: "Founder note",
              item: absoluteUrl("/founder-note"),
            },
          ],
        }}
      />

      <PageHero
        badge="Founder note"
        h1="A note from Emmanuel."
        copy="Penkra is being built for people and businesses that need operational work handled without turning every task into a new system they have to manage."
        primary={{ label: "Message Penkra", href: wa("home"), external: true }}
        secondary={{ label: "Read launch note", href: "/launch" }}
        variant="compact"
      />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "18px",
              maxWidth: "820px",
            }}
          >
            {noteParagraphs.map((paragraph, index) => (
              <Reveal key={paragraph} delay={index * 45}>
                <p
                  style={{
                    fontSize: "var(--text-body)",
                    lineHeight: "var(--leading-body)",
                    color: "var(--color-charcoal)",
                  }}
                >
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--color-linen-blue)" }}>
        <div className="container">
          <SectionHeading
            badge="Operating principle"
            heading="The client experience should stay simple."
            body="A client should be able to send a message, approve what needs approval, and receive useful updates and records. The complexity belongs behind the scenes."
          />
        </div>
      </section>

      <FinalCta
        heading={FINAL_CTA.home.heading}
        body={FINAL_CTA.home.body}
        primary={{ label: "Message Penkra", href: wa("home"), external: true }}
        secondary={{ label: "Book a call", href: bookCallLink(), external: true }}
      />
    </>
  );
}
