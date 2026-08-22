"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

import type { DownloadPlatform, MacArchitecture } from "../lib/download-assets";

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
    build: "Apple silicon or Intel · .dmg",
    description: "For Apple silicon and Intel-based Macs. Includes automatic updates.",
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

const macArchitectures: readonly {
  id: MacArchitecture;
  label: string;
}[] = [
  { id: "arm64", label: "Apple silicon" },
  { id: "x64", label: "Intel" },
];

export function DownloadPageContent() {
  const [selectedPlatform, setSelectedPlatform] = useState<DownloadPlatform>("macos");
  const [detectedPlatform, setDetectedPlatform] = useState<DownloadPlatform | null>(null);
  const [selectedMacArchitecture, setSelectedMacArchitecture] =
    useState<MacArchitecture>("arm64");
  const [detectedMacArchitecture, setDetectedMacArchitecture] =
    useState<MacArchitecture | null>(null);
  const macArchitectureWasChosen = useRef(false);

  useEffect(() => {
    let disposed = false;
    const detected = detectPlatform(window.navigator);
    setDetectedPlatform(detected);
    if (detected) setSelectedPlatform(detected);

    if (detected === "macos") {
      void detectMacArchitecture(window.navigator).then((architecture) => {
        if (disposed || architecture === null) return;
        setDetectedMacArchitecture(architecture);
        if (!macArchitectureWasChosen.current) setSelectedMacArchitecture(architecture);
      });
    }

    return () => {
      disposed = true;
    };
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
            ? detectedPlatform === "macos" && detectedMacArchitecture
              ? `macOS (${macArchitectureLabel(detectedMacArchitecture)}) detected on this device`
              : `${platformName(detectedPlatform)} detected on this device`
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
            const isMac = platform.id === "macos";
            const build = isMac
              ? `${macArchitectureLabel(selectedMacArchitecture)} · .dmg`
              : platform.build;
            const description = isMac
              ? `For ${macArchitectureDescription(selectedMacArchitecture)} Macs. Includes automatic updates.`
              : platform.description;
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
                    <small>{build}</small>
                  </span>
                  {selected ? <CheckIcon /> : null}
                </button>
                <p>{description}</p>
                {isMac ? (
                  <div className="pk-mac-architecture-wrap">
                    <div className="pk-mac-architecture" role="group" aria-label="Mac processor">
                      {macArchitectures.map((architecture) => (
                        <button
                          key={architecture.id}
                          type="button"
                          aria-pressed={selectedMacArchitecture === architecture.id}
                          onClick={() => {
                            macArchitectureWasChosen.current = true;
                            setSelectedMacArchitecture(architecture.id);
                            setSelectedPlatform("macos");
                          }}
                        >
                          {architecture.label}
                        </button>
                      ))}
                    </div>
                    <small>Not sure? Apple menu → About This Mac</small>
                  </div>
                ) : null}
                <a
                  className="pk-platform-download"
                  data-primary={selected}
                  href={
                    isMac
                      ? `/download/macos?arch=${selectedMacArchitecture}`
                      : `/download/${platform.id}`
                  }
                  data-download-platform={platform.id}
                >
                  <DownloadIcon />
                  Download for {platform.name}
                  {isMac ? ` — ${macArchitectureLabel(selectedMacArchitecture)}` : ""}
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

interface ArchitectureNavigator extends Pick<Navigator, "platform" | "userAgent"> {
  readonly userAgentData?: {
    getHighEntropyValues?: (
      hints: readonly string[],
    ) => Promise<{ readonly architecture?: unknown }>;
  };
}

export async function detectMacArchitecture(
  navigatorValue: ArchitectureNavigator,
): Promise<MacArchitecture | null> {
  const getHighEntropyValues = navigatorValue.userAgentData?.getHighEntropyValues;
  if (!getHighEntropyValues) return null;

  try {
    const values = await getHighEntropyValues.call(navigatorValue.userAgentData, ["architecture"]);
    if (typeof values.architecture !== "string") return null;
    const architecture = values.architecture.toLowerCase();
    if (["arm", "arm64", "aarch64"].includes(architecture)) return "arm64";
    if (["x86", "x86_64", "x64", "amd64"].includes(architecture)) return "x64";
  } catch {
    // Architecture hints are optional and unavailable in several major browsers.
  }
  return null;
}

function macArchitectureLabel(architecture: MacArchitecture): string {
  return architecture === "arm64" ? "Apple silicon" : "Intel";
}

function macArchitectureDescription(architecture: MacArchitecture): string {
  return architecture === "arm64" ? "Apple silicon" : "Intel-based";
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
