"use client";

import { Reveal } from "./reveal";
import { bookCallLink } from "../lib/links";
import { AlNav, AlFinalCta, AlFooter, useAlHomeBodyClass } from "./al-chrome";

export interface AlSubpageSection {
  heading: string;
  items: readonly string[];
}

export interface AlSubpageProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  ctaLabel?: string;
  sections: readonly AlSubpageSection[];
}

export function AlSubpage({ eyebrow, title, subtitle, ctaLabel, sections }: AlSubpageProps) {
  useAlHomeBodyClass();

  return (
    <div className="al-home">
      <AlNav />
      <section className="al-hero al-subpage-hero" id="top">
        <div className="al-inner al-hero-inner">
          <Reveal>
            <p className="al-eyebrow">{eyebrow}</p>
          </Reveal>
          <Reveal delay={40}>
            <h1 className="al-subpage-title">{title}</h1>
          </Reveal>
          <Reveal delay={80}>
            <p className="al-hero-sub">{subtitle}</p>
          </Reveal>
          <Reveal delay={120}>
            <a className="al-hero-cta" href={bookCallLink()} target="_blank" rel="noopener noreferrer">
              {ctaLabel ?? "Book a 30-min call"}
            </a>
          </Reveal>
        </div>
      </section>

      {sections.map((section) => (
        <section className="al-subpage-body" key={section.heading}>
          <div className="al-inner">
            <Reveal>
              <h2 className="al-subpage-body-heading">{section.heading}</h2>
            </Reveal>
            <ul className="al-subpage-list">
              {section.items.map((item, i) => (
                <Reveal key={item} delay={40 + i * 40}>
                  <li>
                    <span className="al-pricing-check">✓</span>
                    <span>{item}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>
      ))}

      <AlFinalCta />
      <AlFooter />
    </div>
  );
}
