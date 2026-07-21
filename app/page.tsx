"use client";

import Image from "next/image";
import { useRef } from "react";
import { Reveal } from "../components/reveal";
import { bookCallLink } from "../lib/links";
import { AlNav, AlFinalCta, AlFooter, useAlHomeBodyClass } from "../components/al-chrome";

const PRODUCTS = [
  {
    n: "// 01",
    title: "Web & Product",
    body: "Raise capital, close deals, and manage your portfolio with one senior team.",
    image: "/home/product-web.png",
  },
  {
    n: "// 02",
    title: "Brand & Identity",
    body: "Raise capital and grow your fund with a done-for-you deal-by-deal team.",
    image: "/home/product-brand.png",
  },
  {
    n: "// 03",
    title: "Content & Social",
    body: "Eliminate the heavy operational burden by launching or scaling your content engine.",
    image: "/home/product-content.png",
  },
  {
    n: "// 04",
    title: "Growth & Marketing",
    body: "Replace subscription paperwork with flexible digital workflows that scale.",
    image: "/home/product-growth.png",
  },
];

const PARTNERS = ["AETHER", "SILVER", "NAUTILUS", "CORNERSTONE", "ALLVUE"];

const STATS = [
  { value: "$40M+", label: "REVENUE GENERATED FOR CLIENTS" },
  { value: "120+", label: "PROJECTS SHIPPED" },
  { value: "6", label: "YEARS BUILDING STARTUPS" },
  { value: "40+", label: "FOUNDERS SERVED" },
  { value: "98%", label: "ON-TIME DELIVERY" },
];

const AVATARS = [
  { src: "/home/avatar-1.png", x: 0, y: 10 },
  { src: "/home/avatar-2.png", x: 100, y: 30 },
  { src: "/home/avatar-3.png", x: 200, y: 0 },
];

const PRICING = [
  {
    tier: "STARTER",
    price: "$200",
    blurb: "Solo founders getting their first site live.",
    features: ["1 request at a time", "5-day delivery", "Email support", "Monthly 30-min call"],
    featured: false,
  },
  {
    tier: "GROWTH",
    price: "$1,000",
    blurb: "Teams ready to grow on multiple fronts, fast.",
    features: [
      "3 concurrent requests",
      "2-day delivery",
      "Priority Slack",
      "Weekly call",
      "Dedicated PM",
    ],
    featured: true,
  },
  {
    tier: "SCALE",
    price: "$5,000",
    blurb: "Companies serious about owning their category.",
    features: [
      "Unlimited requests",
      "24-hour delivery",
      "Dedicated team",
      "Daily Slack + 2x calls",
      "Custom strategy",
    ],
    featured: false,
  },
];

const ARTICLES = [
  {
    tag: "DESIGN",
    date: "JAN 15, 2026",
    read: "6 MIN READ",
    title: "How we built an agent that ships a website in 4 hours",
    color: "#2a3a30",
  },
  {
    tag: "GROWTH",
    date: "JAN 15, 2026",
    read: "6 MIN READ",
    title: "The human-in-the-loop pattern that makes AI actually useful",
    color: "#3a3028",
  },
  {
    tag: "OPS",
    date: "JAN 15, 2026",
    read: "6 MIN READ",
    title: "What an AI-powered growth team looks like in practice",
    color: "#282a30",
  },
  {
    tag: "BRAND",
    date: "JAN 15, 2026",
    read: "6 MIN READ",
    title: "Why your next hire should be an agent, not a freelancer",
    color: "#3a2a28",
  },
];

function Hero() {
  return (
    <section className="al-hero" id="top">
      <div className="al-inner al-hero-inner">
        <Reveal>
          <div className="al-chip">
            <span>New: type a task, we ship it end-to-end</span>
            <span>→</span>
          </div>
        </Reveal>
        <Reveal delay={60}>
          <h1 className="al-hero-h1">
            Type a task.
            <br />
            We build it.
          </h1>
        </Reveal>
        <Reveal delay={120}>
          <p className="al-hero-sub">
            penkra is an AI agency. Our agents do the work, our senior experts review it — so you
            get websites, content, and growth, shipped end-to-end.
          </p>
        </Reveal>
        <Reveal delay={180}>
          <a className="al-hero-cta" href={bookCallLink()} target="_blank" rel="noopener noreferrer">
            Book a 30-min call
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function Products() {
  return (
    <section className="al-products" id="work">
      <div className="al-inner al-products-grid">
        {PRODUCTS.map((p, i) => (
          <Reveal key={p.title} delay={i * 70}>
            <div className="al-product-card">
              <div className="al-product-img">
                <Image
                  src={p.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 25vw, 90vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="al-product-content">
                <span className="al-product-tag">{p.n}</span>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
                <div className="al-product-link">
                  <span>Learn more</span>
                  <span>→</span>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Partners() {
  return (
    <section className="al-partners">
      <div className="al-inner al-partners-inner">
        <Reveal>
          <p className="al-partners-heading">Trusted by founders shipping with AI agents.</p>
        </Reveal>
        <Reveal delay={60}>
          <div className="al-partners-logos">
            {PARTNERS.map((p) => (
              <span key={p}>{p}</span>
            ))}
          </div>
        </Reveal>
        <Reveal delay={120}>
          <a className="al-partners-link" href={bookCallLink()} target="_blank" rel="noopener noreferrer">
            <span>
              Our premier partnership program assembles top professionals to deliver comprehensive
              expertise &amp; support
            </span>
            <span>→</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function FullService() {
  return (
    <section className="al-fullservice" id="process">
      <div className="al-inner al-fullservice-inner">
        <Reveal>
          <div className="al-fullservice-left">
            <h2>Agents in the lead. Humans in the loop.</h2>
            <p>
              Every task is run by an AI agent and reviewed by a senior human. You get speed
              without sacrificing craft.
            </p>
            <a
              className="al-fullservice-link"
              href={bookCallLink()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>See how the loop works</span>
              <span>→</span>
            </a>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <div className="al-avatar-cluster">
            {AVATARS.map((a, i) => (
              <div
                className="al-avatar"
                key={a.src}
                style={{ left: a.x, top: a.y, zIndex: i + 1 }}
              >
                <Image src={a.src} alt="" fill sizes="160px" style={{ objectFit: "cover" }} />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ByTheNumbers() {
  return (
    <section className="al-numbers">
      <div className="al-inner al-numbers-inner">
        <Reveal>
          <div className="al-numbers-left">
            <p className="al-numbers-eyebrow">BY THE NUMBERS</p>
            <h2 className="al-numbers-h2">Agents that ship. Humans that review.</h2>
            <p className="al-numbers-body">From first prompt to live in days, not months.</p>
          </div>
        </Reveal>
        <div className="al-numbers-right">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={80 + i * 60}>
              <div className="al-stat-row">
                <span className="al-stat-value">{s.value}</span>
                <span className="al-stat-label">{s.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section className="al-pricing" id="pricing">
      <div className="al-inner al-pricing-inner">
        <div className="al-pricing-head">
          <Reveal>
            <p className="al-eyebrow">$ PRICING</p>
          </Reveal>
          <Reveal delay={40}>
            <h2 className="al-pricing-title">Simple, transparent pricing.</h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="al-pricing-sub">
              Three tiers. Priority, speed, and access scale with the plan. Cancel anytime.
            </p>
          </Reveal>
        </div>
        <div className="al-pricing-grid">
          {PRICING.map((tier, i) => (
            <Reveal key={tier.tier} delay={120 + i * 80}>
              <div className={`al-pricing-card${tier.featured ? " al-pricing-card-featured" : ""}`}>
                {tier.featured ? <span className="al-pricing-badge">MOST POPULAR</span> : null}
                <span className="al-pricing-tier">{tier.tier}</span>
                <div className="al-pricing-price-row">
                  <span className="al-pricing-price">{tier.price}</span>
                  <span className="al-pricing-permo">/mo</span>
                </div>
                <p className="al-pricing-blurb">{tier.blurb}</p>
                <div className="al-pricing-divider" />
                <ul className="al-pricing-features">
                  {tier.features.map((f) => (
                    <li key={f}>
                      <span className="al-pricing-check">✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  className="al-pricing-cta"
                  href={bookCallLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a 30-min call
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="al-testimonials">
      <div className="al-testimonials-inner" id="about">
        <div className="al-testimonials-left">
          <Reveal>
            <div className="al-testimonial-dots">
              <span className="al-dot al-dot-active">●</span>
              <span className="al-dot">○</span>
              <span className="al-dot">○</span>
            </div>
          </Reveal>
          <Reveal delay={60}>
            <blockquote>
              &ldquo;I typed &lsquo;build me a landing page&rsquo; on Monday. By Wednesday,
              penkra&rsquo;s agent had shipped it, their designer had refined it, and we were
              collecting signups. That&rsquo;s the future of agencies.&rdquo;
            </blockquote>
          </Reveal>
          <Reveal delay={100}>
            <div className="al-testimonial-attr">
              <p className="al-testimonial-name">Marcus T.</p>
              <p className="al-testimonial-role">GP, Vesper Capital</p>
            </div>
          </Reveal>
        </div>
        <div className="al-testimonials-right">
          <Image
            src="/home/testimonial-marcus.png"
            alt=""
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  );
}

function Articles() {
  return (
    <section className="al-articles">
      <div className="al-inner al-articles-inner">
        <div className="al-articles-head">
          <Reveal>
            <p className="al-eyebrow">$ RESOURCES</p>
          </Reveal>
          <Reveal delay={40}>
            <h2 className="al-articles-title">Latest articles</h2>
          </Reveal>
        </div>
        <div className="al-articles-grid">
          {ARTICLES.map((a, i) => (
            <Reveal key={a.title} delay={80 + i * 60}>
              <article className="al-article-card">
                <div className="al-article-img" style={{ background: a.color }} />
                <div className="al-article-content">
                  <span className="al-article-tag">{a.tag}</span>
                  <h3>{a.title}</h3>
                  <p className="al-article-meta">
                    {a.date} <span>·</span> {a.read}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const rootRef = useRef<HTMLDivElement>(null);
  useAlHomeBodyClass();

  return (
    <div className="al-home" ref={rootRef}>
      <AlNav />
      <Hero />
      <Products />
      <Partners />
      <FullService />
      <ByTheNumbers />
      <Pricing />
      <Testimonials />
      <Articles />
      <AlFinalCta />
      <AlFooter />
    </div>
  );
}
