import { ProductFooter, ProductNav } from "./product-site";

export type ProductLegalSection = {
  title: string;
  body: string[];
};

type ProductLegalPageProps = {
  title: string;
  description: string;
  effectiveDate: string;
  sections: ProductLegalSection[];
};

export function ProductLegalPage({
  title,
  description,
  effectiveDate,
  sections,
}: ProductLegalPageProps) {
  return (
    <div className="product-site pk-legal-page">
      <ProductNav />
      <main>
        <header className="pk-legal-hero">
          <span className="pk-eyebrow">LEGAL</span>
          <h1>{title}</h1>
          <p>{description}</p>
          <time>{effectiveDate}</time>
        </header>

        <div className="pk-legal-layout">
          <aside>
            <span>ON THIS PAGE</span>
            <nav aria-label={`${title} sections`}>
              {sections.map((section, index) => (
                <a href={`#legal-section-${index}`} key={section.title}>
                  {section.title}
                </a>
              ))}
            </nav>
          </aside>

          <article>
            {sections.map((section, index) => (
              <section id={`legal-section-${index}`} key={section.title}>
                <h2>{section.title}</h2>
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
            ))}
          </article>
        </div>
      </main>
      <ProductFooter />
    </div>
  );
}
