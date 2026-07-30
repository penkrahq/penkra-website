import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export const githubUrl = "https://github.com/penkrahq/penkra";
export const downloadHref = "/download";

export function PenkraMark({ withWordmark = false }: { withWordmark?: boolean }) {
  return (
    <span className="pk-brand" aria-hidden="true">
      <svg className="pk-mark" viewBox="0 0 512 512" role="img">
        <path
          d="M89 278v-67c0-91.7 74.3-166 166-166 92.2 0 167 74.3 167 166 0 88.5-70.3 160.8-158.2 163h-3.8v-71c50.8 0 92-41.2 92-92 0-52.5-42.5-95-95-95-54.7 0-99 43.1-99 95v67h-69zm0 25h69v164H89z"
          fill="currentColor"
        />
        <path d="M182 303h78v71h-78z" fill="#8cb8e1" />
      </svg>
      {withWordmark ? <span className="pk-wordmark">Penkra</span> : null}
    </span>
  );
}

export function ProductNav() {
  return (
    <header className="pk-nav">
      <div className="pk-nav-inner">
        <Link className="pk-home-link" href="/" aria-label="Penkra home">
          <PenkraMark withWordmark />
        </Link>

        <nav className="pk-nav-links" aria-label="Primary navigation">
          <Link href="/#product">Product</Link>
          <Link href="/#apps">Apps</Link>
          <Link href="/#security">Security</Link>
          <Link href="/#developers">Developers</Link>
          <a href={githubUrl} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </nav>

        <Link className="pk-button pk-button-small" href={downloadHref}>
          Download Penkra
        </Link>

        <details className="pk-mobile-menu">
          <summary aria-label="Open navigation">
            <span />
            <span />
          </summary>
          <nav aria-label="Mobile navigation">
            <Link href="/#product">Product</Link>
            <Link href="/#apps">Apps</Link>
            <Link href="/#security">Security</Link>
            <Link href="/#developers">Developers</Link>
            <a href={githubUrl} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <Link className="pk-button" href={downloadHref}>
              Download Penkra
            </Link>
          </nav>
        </details>
      </div>
    </header>
  );
}

export function ProductButton({
  children,
  href,
  secondary = false,
  external = false,
}: {
  children: ReactNode;
  href: string;
  secondary?: boolean;
  external?: boolean;
}) {
  const className = `pk-button${secondary ? " pk-button-secondary" : ""}`;

  if (external) {
    return (
      <a className={className} href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link className={className} href={href}>
      {children}
    </Link>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  body,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  body: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`pk-section-header pk-section-header-${align}`}>
      <span className="pk-eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
}

export function ProductWindow({
  src,
  alt,
  className = "",
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <figure className={`pk-product-window ${className}`}>
      <div className="pk-window-bar" aria-hidden="true">
        <span className="pk-window-lights">
          <i />
          <i />
          <i />
        </span>
        <span>Penkra</span>
      </div>
      <div className="pk-product-image">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 720px) calc(100vw - 40px), (max-width: 1200px) calc(100vw - 64px), 1280px"
        />
      </div>
    </figure>
  );
}

const footerGroups = [
  {
    title: "Product",
    links: [
      ["Overview", "/"],
      ["Apps", "/#apps"],
      ["Security", "/#security"],
      ["Download", downloadHref],
    ],
  },
  {
    title: "Developers",
    links: [
      ["Docs", "/#developers"],
      ["App authoring", "/#developers"],
      ["GitHub", githubUrl],
    ],
  },
  {
    title: "Resources",
    links: [
      ["Changelog", `${githubUrl}/commits/main`],
      ["Updates", `${githubUrl}/releases`],
      ["Support", "mailto:support@penkra.com"],
    ],
  },
  {
    title: "Company",
    links: [
      ["About", githubUrl],
      ["Contact", "mailto:hello@penkra.com"],
    ],
  },
];

export function ProductFooter() {
  return (
    <footer className="pk-footer">
      <div className="pk-footer-inner">
        <div className="pk-footer-groups">
          {footerGroups.map((group) => (
            <div key={group.title}>
              <h2>{group.title}</h2>
              {group.links.map(([label, href]) =>
                href.startsWith("http") || href.startsWith("mailto:") ? (
                  <a
                    href={href}
                    key={label}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noreferrer" : undefined}
                  >
                    {label}
                  </a>
                ) : (
                  <Link href={href} key={label}>
                    {label}
                  </Link>
                ),
              )}
            </div>
          ))}
        </div>

        <div className="pk-footer-bottom">
          <p>© {new Date().getFullYear()} Penkra. Open source under the MIT License.</p>
          <div>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
