import type { Metadata } from "next";
import Image from "next/image";
import {
  ProductButton,
  ProductFooter,
  ProductNav,
  ProductWindow,
  SectionHeader,
  downloadHref,
  githubUrl,
} from "../components/product-site";

export const metadata: Metadata = {
  title: {
    absolute: "Penkra — Give your AI agents Apps",
  },
  description:
    "Penkra is the free, open-source desktop workspace where AI agents use Apps to work with your files, browser, and tools.",
};

const agents = [
  ["Claude", "UHPei.png"],
  ["Codex", "R3VAsK.png"],
  ["Cursor", "Ympaa.png"],
  ["Grok", "x7O54.png"],
  ["Droid", "eKNhZ.png"],
  ["Kilo", "voEK6.png"],
  ["Pi", "I15im.png"],
  ["GitHub", "fCOLZ.png"],
  ["OpenCode", "mbMUu.png"],
] as const;

const faqs = [
  [
    "How much does Penkra cost?",
    "Penkra is free and open source under the MIT License. Your AI provider may charge for its own subscription or API usage.",
  ],
  [
    "Which operating systems does Penkra support?",
    "Penkra is available for macOS, Windows, and Linux.",
  ],
  [
    "Which agents can I use?",
    "Penkra includes Claude Agent, Codex, and OpenCode. You can sign in with Claude or ChatGPT, or connect an API key.",
  ],
  [
    "Which API-key providers are supported?",
    "Connect Anthropic, OpenAI, Google, OpenRouter, or a compatible custom base URL.",
  ],
  [
    "Can Apps read my conversations?",
    "No. Apps cannot browse your conversations, folders, threads, settings, or other Apps. They receive only arguments an agent explicitly passes and permissions you approve.",
  ],
  [
    "What comes with Penkra?",
    "Files + Editor, Browser, and themes are bundled. You can install more Apps from Penkra's App registry.",
  ],
] as const;

export default function HomePage() {
  return (
    <div className="product-site">
      <ProductNav />

      <main>
        <section className="pk-hero" id="product">
          <div className="pk-hero-copy">
            <span className="pk-eyebrow">OPEN-SOURCE DESKTOP WORKSPACE FOR AGENTIC WORK</span>
            <h1>Give your AI agents Apps.</h1>
            <p>
              Penkra gives the agents you already use Apps to work with your files,
              browser, and tools—all from one desktop workspace.
            </p>
          </div>
          <div className="pk-actions">
            <ProductButton href={downloadHref}>Download Penkra</ProductButton>
            <ProductButton href={githubUrl} external secondary>
              View on GitHub
            </ProductButton>
          </div>
          <p className="pk-availability">
            Free and open source · macOS, Windows, and Linux
          </p>
          <ProductWindow
            src="/landing/UG43r.png"
            alt="Penkra showing projects, a live agent thread, approvals, a composer, and Apps"
            className="pk-hero-window"
            priority
          />
        </section>

        <section className="pk-apps" id="apps">
          <SectionHeader
            eyebrow="PENKRA APPS"
            title="Apps make agents useful for your work."
            body="Each App can add an interface you use, capabilities your agents call, and skills that teach them how. Start with Files + Editor and Browser, then install more."
            align="center"
          />
          <ProductWindow
            src="/landing/nsUrf.png"
            alt="Penkra onboarding showing Apps that can be enabled for an agent"
            className="pk-apps-window"
          />
          <ProductButton href={`${githubUrl}/tree/main/apps`} external>
            Explore Apps
          </ProductButton>
        </section>

        <section className="pk-split-section pk-concurrency">
          <SectionHeader
            eyebrow="WORK IN PARALLEL"
            title="Run tasks in parallel—not one by one."
            body="Each thread runs independently. See what’s working, what needs approval, and what’s done—without opening every conversation."
          />
          <div className="pk-thread-proof">
            <div className="pk-proof-heading">
              <span>Four threads. One workspace.</span>
              <div>
                <span><i className="running" />2 running</span>
                <span><i className="approval" />1 needs approval</span>
                <span><i className="complete" />1 completed</span>
              </div>
            </div>
            <div className="pk-thread-list">
              <article>
                <span className="pk-thread-icon orange">✦</span>
                <div><b>Audit HIPAA compliance</b><small>Reviewing production controls</small></div>
                <em>Running</em>
              </article>
              <article>
                <span className="pk-thread-icon blue">◎</span>
                <div><b>Prepare launch notes</b><small>Waiting for your approval</small></div>
                <em className="approval">Review</em>
              </article>
              <article>
                <span className="pk-thread-icon purple">◆</span>
                <div><b>Organize website Apps</b><small>Building the release checklist</small></div>
                <em>Running</em>
              </article>
              <article>
                <span className="pk-thread-icon green">✓</span>
                <div><b>Update onboarding copy</b><small>Completed just now</small></div>
                <em className="complete">Done</em>
              </article>
            </div>
          </div>
        </section>

        <section className="pk-split-section pk-workspace">
          <ProductWindow
            src="/landing/X3cN0l.png"
            alt="A Penkra agent thread with selected context, approvals, and the composer"
            className="pk-workspace-window"
          />
          <SectionHeader
            eyebrow="ONE WORKSPACE"
            title="Files, browser, and conversations—together."
            body="Open a file, check a page, and talk to an agent side by side. Everything stays attached to the thread where the work belongs."
          />
        </section>

        <section className="pk-split-section pk-agents">
          <SectionHeader
            eyebrow="YOUR AGENTS"
            title="Use the agents you already know."
            body="Connect Claude, Codex, Cursor, Grok, Droid, Kilo, Pi, GitHub, and OpenCode—then choose the right one per thread."
          />
          <div className="pk-agent-field">
            <div className="pk-field-heading">
              <h3>Nine agents. One workspace.</h3>
              <p>Connect one or several. Choose per thread.</p>
            </div>
            <div className="pk-agent-grid">
              {agents.map(([name, image]) => (
                <div className="pk-agent" key={name}>
                  <Image
                    src={`/landing/agents/${image}`}
                    alt=""
                    width={32}
                    height={32}
                  />
                  <span>{name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pk-control" id="security">
          <SectionHeader
            eyebrow="PERMISSIONED BY DESIGN"
            title="Apps only see what you hand them."
            body="An App cannot browse your conversations, folders, settings, or other Apps. It gets only the input an agent passes and the permissions you approve."
            align="center"
          />
          <div className="pk-boundary">
            <div className="pk-boundary-card">
              <small>YOUR THREAD</small>
              <b>“Summarize this report”</b>
              <span>Instruction + selected context</span>
            </div>
            <div className="pk-boundary-arrow" aria-hidden="true">→</div>
            <div className="pk-boundary-card pk-boundary-core">
              <small>PENKRA CHOOSES THE BOUNDARY</small>
              <b>report.pdf + instruction</b>
              <span>Only the input needed for this action</span>
            </div>
            <div className="pk-boundary-arrow" aria-hidden="true">→</div>
            <div className="pk-boundary-card">
              <small>THE APP</small>
              <b>Runs its capability</b>
              <span>Receives this input—and nothing else</span>
            </div>
            <div className="pk-blocked">
              <small>BLOCKED BY DEFAULT</small>
              <span>Other threads · Folders · Settings · Other Apps</span>
            </div>
          </div>
          <ProductButton href="/privacy" secondary>
            How Penkra protects your work
          </ProductButton>
        </section>

        <section className="pk-open-source" id="developers">
          <SectionHeader
            eyebrow="OPEN PLATFORM"
            title="Free, open source, and built to extend."
            body="Inspect the code, contribute to Penkra, or build Apps with familiar web technologies and the open Agent Skills format."
            align="center"
          />
          <div className="pk-actions">
            <ProductButton href={githubUrl} external>
              View on GitHub
            </ProductButton>
            <ProductButton href={githubUrl} external secondary>
              Read developer docs
            </ProductButton>
          </div>
        </section>

        <section className="pk-faq">
          <h2>Frequently asked questions</h2>
          <div className="pk-faq-list">
            {faqs.map(([question, answer]) => (
              <details key={question}>
                <summary>
                  {question}
                  <span aria-hidden="true">+</span>
                </summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="pk-final-cta">
          <h2>Download Penkra. Put your agents to work.</h2>
          <p>Free and open source for macOS, Windows, and Linux.</p>
          <ProductButton href={downloadHref}>Download Penkra</ProductButton>
          <small>Free and open source · macOS, Windows, and Linux</small>
        </section>
      </main>

      <ProductFooter />
    </div>
  );
}
