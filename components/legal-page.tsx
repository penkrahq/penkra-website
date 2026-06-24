import { PageHero } from "./page-hero";
import { Reveal } from "./reveal";
import { mailtoLink } from "../lib/links";

type LegalSection = {
  title: string;
  body: string[];
};

type LegalPageProps = {
  badge: string;
  title: string;
  description: string;
  sections: LegalSection[];
};

export function LegalPage({ badge, title, description, sections }: LegalPageProps) {
  return (
    <>
      <PageHero
        badge={badge}
        h1={title}
        copy={description}
        primary={{ label: "Contact Penkra", href: mailtoLink(), external: true }}
        variant="compact"
      />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "18px",
              maxWidth: "860px",
            }}
          >
            {sections.map((section, index) => (
              <Reveal key={section.title} delay={index * 35}>
                <section
                  style={{
                    borderTop: "1px solid var(--color-hairline-gray)",
                    paddingTop: "24px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "11px",
                  }}
                >
                  <h2
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "var(--text-body)",
                      lineHeight: 1.3,
                      fontWeight: 500,
                      color: "var(--color-blue-ink)",
                      letterSpacing: 0,
                    }}
                  >
                    {section.title}
                  </h2>
                  {section.body.map((paragraph) => (
                    <p
                      key={paragraph}
                      style={{
                        fontSize: "var(--text-body-sm)",
                        lineHeight: "var(--leading-body-sm)",
                        color: "var(--color-charcoal)",
                      }}
                    >
                      {paragraph}
                    </p>
                  ))}
                </section>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
