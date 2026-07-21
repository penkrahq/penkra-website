"use client";

import { useEffect, useState } from "react";
import { Reveal } from "./reveal";
import { bookCallLink } from "../lib/links";
import { wa } from "../lib/site-content";

function Chevron() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.114 20.452H3.56V9h3.554z" />
    </svg>
  );
}

const PILL_ITEMS = [
  { key: "services", label: "Services", chevron: true, active: true, href: "/#work" },
  { key: "work", label: "Work", chevron: false, active: false, href: "/#work" },
  { key: "process", label: "Process", chevron: true, active: false, href: "/#process" },
  { key: "about", label: "About", chevron: false, active: false, href: "/#about" },
  { key: "pricing", label: "Pricing", chevron: false, active: false, href: "/#pricing" },
];

const DROPDOWN_COL1 = [
  { label: "Web & Product", href: "/services/web-product" },
  { label: "Brand & Identity", href: "/services/brand-identity" },
  { label: "Content & Social", href: "/services/content-social" },
  { label: "Growth & Marketing", href: "/services/growth-marketing" },
  { label: "Ops & Admin", href: "/services/ops-admin" },
  { label: "Customer Support", href: "/services/customer-support" },
];

const DROPDOWN_COL2 = [
  "Build me a website",
  "Write a blog post",
  "Launch a campaign",
  "Set up my inbox",
  "Create a pitch deck",
  "Automate a workflow",
];

export const FOOTER_COLUMNS = [
  {
    heading: "Capabilities",
    links: [
      { label: "Web & Product", href: "/services/web-product" },
      { label: "Brand & Identity", href: "/services/brand-identity" },
      { label: "Content & Social", href: "/services/content-social" },
      { label: "Growth & Marketing", href: "/services/growth-marketing" },
      { label: "Ops & Admin", href: "/services/ops-admin" },
      { label: "Customer Support", href: "/services/customer-support" },
    ],
  },
  {
    heading: "Pricing + Returns",
    links: [
      { label: "Pricing", href: "/#pricing" },
      { label: "Case Studies", href: "/resources/case-studies" },
      { label: "Client Wins", href: "/resources/client-wins" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Learn", href: "/resources/learn" },
      { label: "Blog", href: "/resources/blog" },
      { label: "Help Center", href: "/resources/help-center" },
      { label: "Education Center", href: "/resources/education-center" },
      { label: "Data Center", href: "/resources/data-center" },
    ],
  },
  {
    heading: "By penkra",
    links: [
      { label: "About", href: "/company/about" },
      { label: "Our Process", href: "/company/process" },
      { label: "Careers", href: "/company/careers" },
      { label: "Engineering", href: "/company/engineering" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

function useScrollHeader() {
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    let lastY = 0;
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > 120 && y > lastY);
      lastY = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return hidden;
}

function ServicesDropdown() {
  return (
    <div className="al-dropdown">
      <div className="al-dropdown-cols">
        <div className="al-dropdown-col">
          <span className="al-dropdown-label">WHAT WE BUILD</span>
          {DROPDOWN_COL1.map((l) => (
            <a key={l.label} href={l.href}>
              {l.label}
            </a>
          ))}
        </div>
        <div className="al-dropdown-col">
          <span className="al-dropdown-label">POPULAR TASKS</span>
          {DROPDOWN_COL2.map((l) => (
            <a key={l} href={wa("home")} target="_blank" rel="noopener noreferrer">
              {l}
            </a>
          ))}
        </div>
        <div className="al-dropdown-col al-dropdown-col-suite">
          <span className="al-dropdown-label">STUDIO AGENTS</span>
          <div className="al-dropdown-suite-item">
            <span className="al-dropdown-suite-icon">✦</span>
            <div>
              <p className="al-dropdown-suite-title">Build Agent</p>
              <p className="al-dropdown-suite-desc">Design, code, and ship</p>
            </div>
          </div>
          <div className="al-dropdown-suite-item">
            <span className="al-dropdown-suite-icon">◈</span>
            <div>
              <p className="al-dropdown-suite-title">Content Agent</p>
              <p className="al-dropdown-suite-desc">Write, post, and grow</p>
            </div>
          </div>
        </div>
      </div>
      <div className="al-dropdown-bottom">
        <a href="/#work">Open penkra →</a>
      </div>
    </div>
  );
}

export function AlNav() {
  const hidden = useScrollHeader();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  return (
    <header
      className="al-nav"
      style={{ transform: hidden && !open ? "translateY(-100%)" : "translateY(0)" }}
    >
      <div className="al-nav-inner">
        <a href="/#top" className="al-wordmark">
          penkra
        </a>
        <div className="al-nav-center">
          <div
            className="al-nav-pill-wrap"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <nav aria-label="Primary" className="al-nav-pill">
              {PILL_ITEMS.map((item) => (
                <a
                  key={item.key}
                  className={`al-nav-pill-item${item.active ? " al-nav-pill-item-active" : ""}`}
                  href={item.href}
                >
                  {item.label}
                  {item.chevron ? <Chevron /> : null}
                </a>
              ))}
            </nav>
            {servicesOpen ? <ServicesDropdown /> : null}
          </div>
        </div>
        <div className="al-nav-actions">
          <a
            className="al-nav-cta"
            href={bookCallLink()}
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a 30-min call
          </a>
          <button
            className={`al-menu-toggle${open ? " al-menu-toggle-open" : ""}`}
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
      {open ? (
        <div className="al-mobile-menu">
          {PILL_ITEMS.map((l) => (
            <a key={l.key} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a
            className="al-nav-cta"
            href={wa("home")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
          >
            Message us
          </a>
        </div>
      ) : null}
    </header>
  );
}

export function AlFinalCta() {
  return (
    <section className="al-finalcta">
      <div className="al-inner al-finalcta-inner">
        <Reveal>
          <p className="al-eyebrow">$ READY?</p>
        </Reveal>
        <Reveal delay={40}>
          <h2>Type a task. We&rsquo;ll build it.</h2>
        </Reveal>
        <Reveal delay={80}>
          <p>30 minutes. Tell us what you need shipped. Our agents start building while you sleep.</p>
        </Reveal>
        <Reveal delay={120}>
          <a className="al-finalcta-cta" href={bookCallLink()} target="_blank" rel="noopener noreferrer">
            Book a 30-min call
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export function AlFooter() {
  return (
    <footer className="al-footer">
      <div className="al-inner al-footer-inner">
        <div className="al-footer-top">
          <span className="al-wordmark">penkra</span>
          <div className="al-footer-top-ctas">
            <a
              className="al-footer-cta"
              href={bookCallLink()}
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a 30-min call
            </a>
            <a className="al-footer-signin" href={wa("home")} target="_blank" rel="noopener noreferrer">
              Sign in
            </a>
          </div>
        </div>
        <div className="al-footer-columns">
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.heading} className="al-footer-col">
              <h4>{col.heading}</h4>
              <ul>
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href}>{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="al-footer-bottom">
          <div className="al-footer-legal-links">
            <a href="/terms">Terms</a>
            <a href="/privacy">Privacy</a>
            <a href="/disclosures">Disclosures</a>
            <a href="/cookie-settings">Cookie Settings</a>
          </div>
          <div className="al-footer-social">
            <TwitterIcon />
            <LinkedInIcon />
          </div>
        </div>
        <p className="al-footer-copy">© 2026 penkra.com — an AI agency with humans in the loop.</p>
      </div>
    </footer>
  );
}

export function useAlHomeBodyClass() {
  useEffect(() => {
    document.body.classList.add("al-home-active");
    return () => document.body.classList.remove("al-home-active");
  }, []);
}
