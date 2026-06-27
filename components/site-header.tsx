"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { wa } from "../lib/site-content";
import { Button } from "./button";
import { CountrySelector } from "./country-selector";
import { ServicesDropdown } from "./services-dropdown";

const NAV = [
  { label: "Ghana", href: "/ghana" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastY = 0;
    const onScroll = () => {
      const y = window.scrollY;
      if (y > 120 && y > lastY) setHidden(true);
      else setHidden(false);
      lastY = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-penkra-header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: "var(--color-linen-white)",
        borderBottom: "1px solid var(--color-hairline-gray)",
        transform: hidden ? "translateY(-100%)" : "translateY(0)",
        transition:
          "transform 400ms cubic-bezier(0,0,0,1), background-color 300ms cubic-bezier(0,0,0,1), border-color 300ms cubic-bezier(0,0,0,1)",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "70px",
          gap: "21px",
        }}
      >
        <Link
          href="/"
          aria-label="Penkra home"
          className="header-wordmark"
          style={{ display: "inline-flex", alignItems: "center" }}
        >
          {/* Plain <img> for the SVG wordmark to avoid next/image 0x0 sizing issues with width/height auto */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brand/penkra-wordmark.svg"
            alt="Penkra"
            width={156}
            height={45}
            style={{ display: "block", height: "40px", width: "auto" }}
          />
        </Link>

        <nav aria-label="Primary" className="header-nav" style={{ display: "none" }}>
          <ul style={{ display: "flex", gap: "7px", alignItems: "center" }}>
            <li>
              <ServicesDropdown />
            </li>
            <li>
              <CountrySelector />
            </li>
            {NAV.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    style={{
                      display: "inline-block",
                      padding: "9px 14px",
                      borderRadius: "var(--radius-nav)",
                      fontSize: "var(--text-body-sm)",
                      color: "var(--color-charcoal)",
                      background: active ? "var(--color-linen-blue)" : "transparent",
                      transition: "background-color 300ms cubic-bezier(0,0,0,1)",
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <Button
            href={wa("home")}
            external
            aria-label="Message us on WhatsApp — opens a new tab"
            ctaId="header_whatsapp"
            ctaLocation="site_header"
            style={{ padding: "11px 18px" }}
          >
            Message us
          </Button>
          <details className="mobile-menu">
            <summary aria-label="Open menu" className="menu-toggle">
              <span aria-hidden className="menu-lines">
                <span />
                <span />
                <span />
              </span>
            </summary>
            <div className="mobile-menu-panel">
              <Link
                href="/services"
                style={mobileLinkStyle(pathname === "/services")}
              >
                Services
              </Link>
              <Link
                href="/ghana/business-registration"
                style={mobileLinkStyle(pathname === "/ghana/business-registration")}
              >
                Business registration
              </Link>
              <Link
                href="/ghana"
                style={mobileLinkStyle(pathname === "/ghana")}
              >
                Ghana
              </Link>
              <Link
                href="/countries"
                style={mobileLinkStyle(pathname === "/countries")}
              >
                Countries
              </Link>
              <Link
                href="/contact"
                style={mobileLinkStyle(pathname === "/contact")}
              >
                Contact
              </Link>
            </div>
          </details>
        </div>
      </div>

      <style>{`
        .mobile-menu {
          display: none;
          position: relative;
        }
        .menu-toggle {
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: var(--radius-nav);
          border: 1px solid var(--color-hairline-gray);
          background: var(--color-linen-white);
          cursor: pointer;
          list-style: none;
        }
        .menu-toggle::-webkit-details-marker {
          display: none;
        }
        .menu-lines {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }
        .menu-lines span {
          width: 20px;
          height: 1.5px;
          background: var(--color-blue-ink);
          transition: transform 200ms cubic-bezier(0,0,0,1), opacity 200ms cubic-bezier(0,0,0,1);
        }
        .mobile-menu[open] .menu-lines span:first-child {
          transform: translateY(6.5px) rotate(45deg);
        }
        .mobile-menu[open] .menu-lines span:nth-child(2) {
          opacity: 0;
        }
        .mobile-menu[open] .menu-lines span:last-child {
          transform: translateY(-6.5px) rotate(-45deg);
        }
        .mobile-menu-panel {
          position: fixed;
          top: 70px;
          left: 0;
          right: 0;
          display: flex;
          flex-direction: column;
          gap: 7px;
          padding: 0 var(--gutter-mobile) 21px;
          background: var(--color-linen-white);
          border-bottom: 1px solid var(--color-hairline-gray);
        }
        @media (min-width: 880px) {
          .header-nav { display: block !important; }
          .mobile-menu { display: none !important; }
        }
        @media (max-width: 879px) {
          .mobile-menu { display: block !important; }
          .menu-toggle { display: inline-flex !important; }
          .header-wordmark img { width: 118px !important; height: auto !important; }
        }
      `}</style>
    </header>
  );
}

function mobileLinkStyle(active: boolean): React.CSSProperties {
  return {
    padding: "14px 14px",
    borderRadius: "var(--radius-nav)",
    fontSize: "var(--text-body)",
    color: "var(--color-charcoal)",
    background: active ? "var(--color-linen-blue)" : "transparent",
    borderBottom: "1px solid var(--color-hairline-gray)",
  };
}
