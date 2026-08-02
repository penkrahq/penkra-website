"use client";

import { useEffect, useState, type ReactNode } from "react";

import type { DownloadPlatform } from "../lib/download-assets";

interface PlatformOption {
  readonly id: DownloadPlatform;
  readonly name: string;
  readonly build: string;
  readonly description: string;
  readonly icon: "laptop" | "monitor" | "terminal";
}

const platforms: readonly PlatformOption[] = [
  {
    id: "macos",
    name: "macOS",
    build: "Apple silicon · .dmg",
    description: "For Macs with Apple silicon. Includes automatic updates.",
    icon: "laptop",
  },
  {
    id: "windows",
    name: "Windows",
    build: "Windows 10 or later · .exe",
    description: "For 64-bit Windows PCs. Includes automatic updates.",
    icon: "monitor",
  },
  {
    id: "linux",
    name: "Linux",
    build: "64-bit · .AppImage",
    description: "A portable AppImage for supported Linux distributions.",
    icon: "terminal",
  },
];

const installationSteps = [
  ["Download the installer", "Choose your platform above and save the installer."],
  ["Install and open Penkra", "Follow your system’s normal installation flow."],
  ["Connect an agent", "Sign in to Codex or Claude, or add an API key."],
] as const;

export function DownloadPageContent() {
  const [selectedPlatform, setSelectedPlatform] = useState<DownloadPlatform>("macos");
  const [detectedPlatform, setDetectedPlatform] = useState<DownloadPlatform | null>(null);

  useEffect(() => {
    const detected = detectPlatform(window.navigator);
    setDetectedPlatform(detected);
    if (detected) setSelectedPlatform(detected);
  }, []);

  const selectedName = platformName(selectedPlatform);

  return (
    <main>
      <section className="pk-download-hero">
        <span className="pk-eyebrow">DOWNLOAD PENKRA</span>
        <h1>Download Penkra.</h1>
        <p>
          Choose your operating system and put your agents, files, browser, and Apps in
          one workspace.
        </p>
        <div className="pk-detected-platform" aria-live="polite">
          <CheckIcon />
          {detectedPlatform
            ? `${platformName(detectedPlatform)} detected on this device`
            : `${selectedName} selected`}
        </div>
      </section>

      <section className="pk-download-platforms" aria-labelledby="download-platform-heading">
        <header>
          <h2 id="download-platform-heading">Choose your download</h2>
          <p>Your detected platform is selected. You can choose another at any time.</p>
        </header>

        <div className="pk-platform-grid">
          {platforms.map((platform) => {
            const selected = platform.id === selectedPlatform;
            return (
              <article className="pk-platform-card" data-selected={selected} key={platform.id}>
                <button
                  className="pk-platform-select"
                  type="button"
                  aria-pressed={selected}
                  aria-label={`Select ${platform.name}`}
                  onClick={() => setSelectedPlatform(platform.id)}
                >
                  <span className="pk-platform-icon" aria-hidden="true">
                    <PlatformIcon kind={platform.icon} />
                  </span>
                  <span>
                    <strong>{platform.name}</strong>
                    <small>{platform.build}</small>
                  </span>
                  {selected ? <CheckIcon /> : null}
                </button>
                <p>{platform.description}</p>
                <a
                  className="pk-platform-download"
                  data-primary={selected}
                  href={`/download/${platform.id}`}
                  data-download-platform={platform.id}
                >
                  <DownloadIcon />
                  Download for {platform.name}
                </a>
              </article>
            );
          })}
        </div>

        <div className="pk-release-links">
          <span>Latest stable release</span>
          <i aria-hidden="true" />
          <a href="https://github.com/penkrahq/penkra/releases" target="_blank" rel="noreferrer">
            View all releases →
          </a>
        </div>
      </section>

      <section className="pk-install-guide">
        <div className="pk-install-intro">
          <span className="pk-eyebrow">GET STARTED</span>
          <h2>From download to first thread in minutes.</h2>
          <p>
            Penkra keeps your workspace on your computer and guides you through connecting
            an agent.
          </p>
        </div>
        <ol>
          {installationSteps.map(([title, description], index) => (
            <li key={title}>
              <span>{index + 1}</span>
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}

export function detectPlatform(navigatorValue: Pick<Navigator, "platform" | "userAgent">) {
  const browserNavigator = navigatorValue as Pick<Navigator, "platform" | "userAgent"> & {
    userAgentData?: { platform?: string };
  };
  const value = `${browserNavigator.userAgentData?.platform ?? ""} ${navigatorValue.platform} ${navigatorValue.userAgent}`.toLowerCase();
  if (value.includes("mac")) return "macos" as const;
  if (value.includes("win")) return "windows" as const;
  if (value.includes("linux") || value.includes("x11")) return "linux" as const;
  return null;
}

function platformName(platform: DownloadPlatform): string {
  return platforms.find((candidate) => candidate.id === platform)?.name ?? "macOS";
}

function PlatformIcon({ kind }: { kind: PlatformOption["icon"] }) {
  const paths: Record<PlatformOption["icon"], ReactNode> = {
    laptop: (
      <>
        <rect x="4" y="5" width="16" height="11" rx="1.5" />
        <path d="M2.5 19h19" />
      </>
    ),
    monitor: (
      <>
        <rect x="3" y="4" width="18" height="13" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </>
    ),
    terminal: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="m7 9 3 3-3 3M13 15h4" />
      </>
    ),
  };
  return <Icon>{paths[kind]}</Icon>;
}

function CheckIcon() {
  return (
    <Icon className="pk-check-icon">
      <circle cx="12" cy="12" r="9" />
      <path d="m8 12 2.5 2.5L16 9" />
    </Icon>
  );
}

function DownloadIcon() {
  return (
    <Icon>
      <path d="M12 3v12m0 0 4-4m-4 4-4-4M5 20h14" />
    </Icon>
  );
}

function Icon({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <svg
      className={className}
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  );
}
