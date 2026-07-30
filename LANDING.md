# Penkra Landing and Website Plan

**Research date:** 2026-07-29  
**Decision date:** 2026-07-29

**Status:** Approved one-shot planning brief. No landing-page design has been created or approved.

## Execution contract

This document is the single implementation brief for the public Penkra website. A
designer or implementation agent should be able to execute it without inventing the
product position, page order, copy hierarchy, responsive intent, interaction model,
reference set, or verification criteria.

The implementer must:

1. Read this document, `PENKRA.md`, and the `D1` stories in `STORIES.md` before working.
2. Treat the approved decisions and exact copy deck below as authoritative.
3. Use `penkra/penkra.pen` only as the source for product UI and product captures.
4. Build shared website components in `penkra-website/penkra-website.pen` before pages.
5. Never redesign the desktop product while composing marketing visuals.
6. Never substitute a fabricated UI, generic AI illustration, stock dashboard, or
   competitor screenshot for Penkra product proof.
7. Stop and record the blocker when an exact source asset is missing. Do not guess.
8. Verify each component, section, breakpoint, route, claim, and final full-page result
   against the acceptance matrices in this document.

The one-shot scope is the complete design plan and implementation specification. It
does not authorize silently resolving contradictions in the product design. If a
canonical product screen is visibly broken, incomplete, or inconsistent with its
component master, repair or approval is a separate task.

## Approved launch decisions

These operator decisions supersede earlier conditional language in this document:

| Decision | Approved launch fact |
|---|---|
| Primary conversion | **Download Penkra** |
| Platforms | **macOS, Windows, and Linux** |
| Source | Public at [github.com/penkrahq/penkra](https://github.com/penkrahq/penkra) |
| License | MIT, verified from `penkra/LICENSE` |
| Price | **Free**; there is no pricing page or paid plan on the launch website |
| Agent connection methods | All methods represented in onboarding launch: **Sign in with Claude**, **Sign in with ChatGPT**, and **Use an API key** |
| API-key providers | Anthropic, OpenAI, Google, OpenRouter, and Custom base URL, following `STORIES.md` 1.2 |
| Built-in harnesses | Claude Agent, Codex, and OpenCode, following `PENKRA.md` S5 |
| Agent connections shown in onboarding | Claude, Codex, Cursor, Grok, Droid, Kilo, Pi, GitHub, and OpenCode |
| Apps | Apps and Penkra's App registry are launch features |
| Voice | Direct, product-led, and human; concrete outcomes first, technical depth second |

“All platforms” means macOS, Windows, and Linux. Do not expand it to mobile, web,
ChromeOS, or another operating system without a later explicit decision.

## Product truth to design from

The landing page must follow the settled product architecture and the day-one stories,
not the legacy agency/service website.

Penkra is:

- an open-source desktop application for agentic work
- designed first for knowledge workers, not only developers
- a workspace where multiple threads continue running concurrently
- a host for the built-in Claude Agent, Codex, and OpenCode harnesses
- organized around folders, threads, one chat per thread, and a persistent navigation area
- shipped with Files + Editor and Browser Apps
- extensible through one installable unit called an App
- built around explicit App permissions and strong isolation from Penkra-owned data
- designed so supported native applications can be detected and used through first-party
  connectors after one explicit onboarding permission

Claims that are not safe for public copy:

- that every provider subscription or every model in existence is supported
- a Penkra-funded inference allowance
- customer counts, productivity metrics, testimonials, or enterprise logos
- features tagged `?` or `F` in `STORIES.md`
- security certifications, audits, or compliance claims not actually held
- “offline AI”; installed Apps load locally, but model and network-dependent work may
  still require a connection

## Competitive audit

### Closest positioning references

| Product | What the page sells | Useful pattern | What Penkra should avoid |
|---|---|---|---|
| [Claude Cowork](https://claude.com/product/cowork) | Delegated knowledge work across files and tools | Transformation-led hero, workflow examples, control and permissions, pricing and FAQ | Anchoring the product to one model/provider |
| [ChatGPT Work](https://openai.com/chatgpt-work/) | Finished work made from scattered context | Short narrative, outcome categories, prominent demo, restrained proof | Generic “AI for every team” language without a distinct product model |
| [Synara](https://www.trysynara.com/) | One local workspace for multiple coding agents | Agent choice, parallel work, product screenshots, data/privacy explanation | Coding-first language and copying the direct visual structure of Penkra's upstream reference |
| [Raycast](https://www.raycast.com/) | An extendable desktop productivity launcher | Extremely clear category line, download-first hero, extension ecosystem as a major story | Listing many utilities before the core transformation is understood |

### Interaction and product-proof references

| Product | What the page does well | Relevance to Penkra |
|---|---|---|
| [Cursor](https://cursor.com/) | Leads with a concise category statement, a direct download, and a large authentic product view; then proves autonomous and parallel work | Product-first hero and high-fidelity screenshots |
| [OpenAI Codex](https://openai.com/codex/) | Builds a clear sequence from real work, to multi-agent workflows, to scheduled/background work, to cross-surface availability | Concurrency and background-work storytelling |
| [Warp](https://www.warp.dev/) | Makes openness, agent choice, data ownership, and local/cloud flexibility visible early | Open platform and control language |
| [Zed](https://zed.dev/) | Uses a memorable category phrase, a three-part value model, authentic product media, open-source proof, and community credibility | Product identity and open-source proof |
| [Claude Code](https://claude.com/product/claude-code) | Shows where the product works, demonstrates real UI, explains concrete use cases, and makes pricing actionable | Distribution and use-case clarity |
| [Factory](https://factory.ai/) | Creates a cinematic enterprise impression with strong art direction | Visual ambition only; its scroll/lazy effects also produced long blank capture regions and must not become a content dependency |
| [T3 Chat](https://t3.chat/) | Makes the homepage the usable product rather than a marketing page | Evidence for immediacy and low cognitive load, not a direct landing-page template |

## Market patterns

The strongest current pages converge on:

1. One category-defining sentence before feature detail.
2. A primary CTA that matches the product's real availability.
3. A large, authentic product demonstration in or immediately below the hero.
4. Product outcomes before exhaustive feature lists.
5. Real screenshots organized into a narrative rather than a screenshot gallery.
6. Trust explained through control, privacy, permissions, and data boundaries.
7. Provider, integration, or platform openness shown visually.
8. A second conversion point near the bottom.
9. Detailed navigation and legal/resource links moved to the footer.

Common weaknesses:

- pages become excessively long by giving every feature equal weight
- cinematic scroll effects leave content blank or illegible when motion fails
- generic claims such as “ship faster” do not define a product
- unverified customer logos and testimonials are used as decoration
- screenshots become unreadable thumbnails on mobile
- developer jargon is used as the category explanation

## Approved positioning and exact copy deck

### Category sentence

> Penkra is the open-source desktop workspace where AI agents use Apps.

This is already settled and should appear in the first screen.

### Hero copy

> **Give your AI agents Apps.**
>
> Penkra gives the agents you already use Apps to work with your files, browser, and
> tools—all from one desktop workspace.

- Eyebrow: **Open-source desktop workspace for agentic work**
- Primary CTA: **Download Penkra**
- Secondary CTA: **View on GitHub**
- Availability line: **Free and open source · macOS, Windows, and Linux**

This wording is final for the first composition. Copy may be revised only through an
explicit content review, not ad hoc while laying out the page.

### Section copy

Use the following as the first complete copy pass. The visual design may control line
breaks but must not paraphrase the meaning.

#### Apps

- Eyebrow: **Penkra Apps**
- Heading: **Apps make agents useful for your work.**
- Body: **Each App can add an interface you use, capabilities your agents call, and
  skills that teach them how. Start with Files + Editor and Browser, then install more.**
- CTA: **Explore Apps**

#### Concurrency

- Eyebrow: **Work in parallel**
- Heading: **Run tasks in parallel—not one by one.**
- Body: **Each thread runs independently. See what’s working, what needs approval, and
  what’s done—without opening every conversation.**

#### Workspace

- Eyebrow: **One workspace**
- Heading: **Files, browser, and conversations—together.**
- Body: **Open a file, check a page, and talk to an agent side by side. Everything stays
  attached to the thread where the work belongs.**

#### Agent choice

- Eyebrow: **Your agents**
- Heading: **Use the agents you already know.**
- Body: **Connect Claude, Codex, Cursor, Grok, Droid, Kilo, Pi, GitHub, and OpenCode—then
  choose the right one per thread.**
- Supporting line: **API keys support Anthropic, OpenAI, Google, OpenRouter, and custom
  compatible endpoints.**

#### Control

- Eyebrow: **Permissioned by design**
- Heading: **Apps only see what you hand them.**
- Body: **An App cannot browse your conversations, folders, settings, or other Apps. It
  gets only the input an agent passes and the permissions you approve.**
- CTA: **How Penkra protects your work**

#### Open source

- Eyebrow: **Open platform**
- Heading: **Free, open source, and built to extend.**
- Body: **Inspect the code, contribute to Penkra, or build Apps with familiar web
  technologies and the open Agent Skills format.**
- Primary CTA: **View on GitHub**
- Secondary CTA: **Read developer docs**

#### Final conversion

- Heading: **Download Penkra. Put your agents to work.**
- Body: **Free and open source for macOS, Windows, and Linux.**
- CTA: **Download Penkra**
- Availability line: **Free and open source · macOS, Windows, and Linux**

## Recommended landing-page narrative

### 1. Navigation

- Penkra mark and wordmark
- Product
- Apps
- Security
- Developers
- GitHub
- **Download Penkra** primary CTA

Pricing must not appear; Penkra is free. Sign in stays out of the marketing navigation
unless a website account becomes necessary outside the desktop onboarding flow.

### 2. Hero: promise, category, action

- one transformation headline
- one category-defining paragraph
- **Download Penkra** primary CTA
- **View on GitHub** secondary CTA
- one large, composed Penkra product view using the canonical desktop design

The product view should show multiple active threads and a useful right-panel App so
the hero proves the category instead of showing an empty chat.

### 3. Apps are the main positioning

Working message: **Give your AI agents Apps.**

Show:

- the bundled Apps available from first launch
- an App adding a visible interface
- an App exposing a capability an agent can call
- a skill teaching an agent when and how to use the capability
- the registry as the way people discover and install more

Apps are Penkra's clearest category distinction. They are not an ecosystem footnote or
a late-page extensibility pitch. They are the mechanism that turns a general agent into
an agent equipped for the person's actual work.

### 4. The concurrency story

Working message: **Run tasks in parallel—not one by one.**

Show:

- one active thread streaming
- another completed in the background
- a third waiting for approval
- persistent status in navigation without hijacking the current task

Concurrency is supporting product proof, not the primary category position.

### 5. The workspace story

Working message: **Files, browser, and conversations—together.**

Show a folder containing threads, with Files or Browser beside the conversation.
Explain the user outcome rather than the three-panel geometry.

### 6. Agent choice

Working message: **Use the agents you already know.**

Show all nine canonical onboarding agent marks: Claude, Codex, Cursor, Grok, Droid,
Kilo, Pi, GitHub, and OpenCode. Separately and accurately explain that Penkra's built-in
harness set is Claude Agent, Codex, and OpenCode. Do not broaden “Sign in with Claude”
or “Sign in with ChatGPT” into a promise that every provider plan, entitlement, or
model is supported.

### 7. Control and permissions

Working message: **Apps only see what you hand them.**

Explain:

- Apps cannot read conversations, folders, threads, or other Apps
- the agent passes only the relevant arguments when it invokes a capability
- required and optional permissions are separated
- new permissions stop an update until the user reviews them

This needs a clear visual explanation, not a wall of security copy.

### 8. Open-source and developer invitation

Show:

- source availability
- the web-application model for App authors
- familiar APIs and the open Agent Skills format
- a path to documentation

This section is secondary on the homepage because the primary audience is a knowledge
worker.

### 9. FAQ

Resolve the practical questions most likely to block a download: price, platforms,
agent connections, provider usage, Apps, and data access. Use the exact FAQ copy in
the detailed specification below.

### 10. Final action

Repeat the exact primary CTA. Do not introduce a new conversion goal at the bottom.

### 11. Footer

- Product: Overview, Apps, Security, Download
- Developers: Docs, App authoring, GitHub
- Resources: Changelog, Blog or Updates, Support
- Company: About or Principles, Contact
- Legal: Privacy, Terms, Data handling

## Entire website architecture

### Launch-critical

1. `/` — product landing page
2. `/download` — platform detection, requirements, install instructions, release notes link
3. `/security` — permissions, App isolation, local/runtime boundaries, reporting
4. `/apps` — App model, bundled Apps, and public launch registry
5. `/developers` — App author overview and documentation entry point
6. `/privacy`
7. `/terms`
8. authentication and account-recovery routes already represented in Pencil

### Navigation and action map

| Label/action | Destination | Rule |
|---|---|---|
| Penkra mark/wordmark | `/` | Accessible name: “Penkra home” |
| Product | `/#apps` | Lands at the primary Apps narrative |
| Apps | `/apps` | Registry and App explanation |
| Security | `/security` | Trust model and permissions |
| Developers | `/developers` | App-author entry point |
| GitHub | `https://github.com/penkrahq/penkra` | External; label remains “GitHub” |
| Download Penkra | `/download` | Same destination in nav, hero, and final CTA |
| Explore Apps | `/apps` | Apps section CTA |
| How Penkra protects your work | `/security` | Control section CTA |
| Read developer docs | `/developers` | Until a stable docs root exists |

Do not link a CTA to `#`, an empty handler, a speculative route, or an unavailable
artifact. A preview build may use a documented temporary destination, but the release
gate rejects placeholders.

### Post-launch, only when the underlying surface is real

1. `/docs/...` beyond the launch developer entry point
2. `/changelog`
3. `/blog` or `/updates`
4. `/enterprise`

`/pricing` is intentionally excluded because Penkra is free. The launch App registry
requires `/apps/[publisher]/[app]` and any directory/filter routes needed by the
implemented registry.

### Legacy website cleanup

The current implementation still contains the unrelated agency/operations homepage,
service routes, Ghana routes, WhatsApp CTAs, invented customer statistics, agency
pricing, and agency-specific assets. These should be removed in a deliberate migration,
not left hidden behind the new homepage.

Keep only reusable technical infrastructure and verified product surfaces:

- Next.js deployment, metadata, sitemap, robots, and manifest infrastructure
- authentication and account recovery
- product brand assets that match the current approved identity
- generic foundations that still match the new design
- legal copy only after it is audited against the product

## Visual direction

- Start from Penkra's product UI and brand, not the discarded agency landing pages.
- Use a dark or near-dark product-led canvas if it matches the canonical desktop design.
- Reserve the accent for actions, active state, and progress.
- Prefer authentic product compositions over abstract AI imagery.
- Use one strong alignment axis per section.
- Keep copy lines within roughly 50–75 characters.
- Alternate explanation and product proof to create rhythm.
- Use motion as enhancement only; all content must exist and remain understandable with
  JavaScript delayed and reduced motion enabled.
- Build desktop and mobile together, with readable mobile product crops rather than
  shrinking a 1440-pixel screenshot.

### Layout blueprint

Use these as the first composition constraints, not loose suggestions:

| Property | Wide desktop | Compact desktop/tablet | Mobile |
|---|---:|---:|---:|
| Reference viewport | 1440 | 1280 | 390 |
| Minimum stress viewport | — | — | 320 |
| Main content maximum | 1200 | viewport minus 64 | viewport minus 40 |
| Page gutter | 80 minimum | 32 | 20 |
| Text-column maximum | 640 | 600 | fill available width |
| Hero top/bottom space | 96 / 80 | 80 / 64 | 56 / 48 |
| Major section space | 144 | 112 | 80 |
| Internal section gap | 48–64 | 40–56 | 28–40 |
| Product media radius | derive from product window; 16 maximum | same | 12 maximum |

The 1200-pixel content maximum applies to copy, navigation, and ordinary section
content. A product stage may occupy up to 1320 pixels at 1440 when it remains centered,
does not cause horizontal scrolling, and preserves at least 24 pixels from the viewport
edge.

### Type blueprint

Use the approved product/brand font if one exists in the canonical foundations. If no
approved public-site font exists, use Inter for the first composition and record that
fallback. Do not introduce a decorative display face merely to make the marketing site
feel different from the product.

| Role | Desktop | Mobile | Guidance |
|---|---:|---:|---|
| Hero heading | 72–80 / 0.95–1.0 | 44–52 / 1.0 | 700–750 weight; maximum two desktop lines |
| Section heading | 48–56 / 1.0–1.08 | 34–40 / 1.05 | maximum three mobile lines |
| Subsection heading | 28–32 / 1.15 | 24–28 / 1.15 | sentence case |
| Hero body | 20 / 1.5 | 18 / 1.5 | maximum 640-pixel measure |
| Body | 17–18 / 1.55 | 16–17 / 1.55 | no body copy below 16 in primary sections |
| Navigation/button | 14–15 / 1.2 | 15–16 / 1.2 | labels remain single line |
| Eyebrow/metadata | 12–13 / 1.3 | 12–13 / 1.3 | high contrast; never the sole label |

Exact sizes may move within the stated ranges to fit the approved font, but roles,
hierarchy, and line-count limits are acceptance requirements.

### Color and surface blueprint

- Derive neutrals and accent colors from current Penkra product variables.
- The page uses one dominant near-dark canvas and at most two subordinate surface
  elevations.
- Black remains the foundation, but the page must not be one uninterrupted flat
  surface. Alternate selected sections with restrained near-black shifts and
  low-opacity blue depth tied to Apps, active agents, or permission boundaries.
- Depth comes from hierarchy, authentic product media, subtle borders, and localized
  accent light—not ornamental gradients behind every section.
- The primary CTA uses the same approved accent family as the product's primary action.
- Provider colors belong only to provider marks or small identifying details.
- Text/surface combinations must meet WCAG AA; focus indicators must reach 3:1 against
  adjacent colors.
- Do not use a decorative rainbow, “AI gradient,” glowing orb, glass-card grid, or
  purple-blue haze as the page's identity.
- Borders, shadows, and radii must be tokenized. No section receives a bespoke shadow
  or corner language.

## Audience and message hierarchy

### Primary audience

The reference visitor is a knowledge worker who:

- already uses ChatGPT, Claude, or another agent but treats it mainly as chat
- works across files, browser tabs, documents, and several concurrent responsibilities
- understands outcomes and permissions better than runtimes, manifests, or APIs
- wants to delegate meaningful work without surrendering visibility or control
- may never open a terminal or inspect source code

The first page should make sense to this visitor without requiring the words
`harness`, `SDK`, `runtime`, `manifest`, `MCP`, or `webview`.

### Secondary audiences

1. A developer or technical operator attracted by agent choice and open source.
2. An App author evaluating the platform surface.
3. A team or security stakeholder evaluating permissions, control, and deployment.

Secondary audiences get clear routes from the homepage but do not share the hero.

### Message order

1. **Category:** Penkra is the open-source desktop workspace where agents use Apps.
2. **Mechanism:** an App can contribute an interface, agent capabilities, and skills.
3. **Immediate proof:** Files + Editor and Browser are useful bundled Apps on first launch.
4. **Workspace benefit:** threads, agents, files, browser, and Apps stay together.
5. **Parallel benefit:** several pieces of work can move at the same time.
6. **Control:** the person sees progress and approves consequential actions.
7. **Proof:** authentic product states, implemented behavior, source, and documentation.

### Vocabulary rules

Use:

- work
- agent
- thread
- folder
- App
- file
- browser
- permission
- approval
- open source

Explain before using:

- concurrent
- connector
- skill

Keep off the primary homepage:

- harness
- manifest
- runtime
- IPC
- webview
- capability negotiation
- publisher namespace

## Detailed homepage specification

### Global frame

**Purpose:** Make the site feel like the public face of the same product, not a separate
marketing theme.

**Desktop:**

- page width remains fluid
- content uses a consistent centered maximum width
- screenshots may extend beyond the text column but remain inside a controlled stage
- section spacing is generous and consistent, not individually improvised

**Mobile:**

- one column
- no horizontal page scrolling
- all CTAs become full-width only when that improves tap clarity
- screenshots use intentional crops or alternate mobile compositions
- navigation never obscures the first heading after opening or closing

**Acceptance:**

- shared background, type, radius, stroke, and accent tokens
- every section aligns to the same page grid
- no one-off color, shadow, or button treatment

### Section 01 — Navigation

**Purpose:** Orient and convert without competing with the hero.

**Content:**

- approved Penkra mark and wordmark
- Product
- Apps
- Security
- Developers
- GitHub
- Download Penkra

**Behavior:**

- transparent or low-contrast at the very top
- becomes a solid or blurred readable surface only when content passes underneath
- current-page state is visible
- mobile menu traps focus while open, closes on Escape, and returns focus to its trigger
- CTA label and destination are identical to the hero's primary action

**Do not:**

- add a mega-menu until there are enough real destinations to justify one
- hide primary navigation on scroll if that also removes the download action
- show Pricing or Enterprise before those destinations exist

### Section 02 — Hero

**Purpose:** Communicate the complete pitch inside one desktop viewport.

**Required content:**

- optional small category eyebrow
- one headline, ideally no more than two desktop lines
- one supporting paragraph, ideally two or three lines
- one primary CTA
- at most one secondary CTA
- **Free and open source · macOS, Windows, and Linux**
- one authentic product composition

**Product composition:**

- visible project/folder structure
- at least three threads with meaningfully different statuses
- active conversation with readable content
- composer visible
- one right-panel App visible
- no fabricated customer data or sensitive-looking realistic records

**Behavior:**

- product stage may reveal in layers, but is fully present without animation
- no autoplay video with sound
- if video is used, provide a poster image and explicit play control
- CTA remains visible before the product stage on mobile

**Acceptance:**

- a first-time visitor can answer what Penkra is, who it is for, and what to do next
  without scrolling
- the screenshot remains legible at its rendered size
- the hero does not broaden approved connection methods into universal provider,
  entitlement, or model support

### Section 03 — Apps

**Purpose:** Establish Penkra's primary category distinction immediately after the hero.

**Sequence:**

1. Start useful with bundled Files + Editor and Browser Apps.
2. Discover and add an App from Penkra's launch registry when a job needs a new
   interface or capability.
3. Review required and optional permissions.
4. Use it immediately without restarting Penkra.

**Visual:**

- an App interface visible inside Penkra
- a capability the agent can call
- a skill associated with that App
- registry or onboarding installation state

The page must explain the three-part App model without leading with SDK terminology.

**Interaction:**

- a controlled interface/capability/skill sequence is acceptable
- the sequence must work with keyboard and touch
- each state has a static fallback

**Do not:**

- call connectors Apps
- reduce Apps to a decorative marketplace-card grid
- imply an App can read the current conversation

### Section 04 — Concurrency

**Purpose:** Prove that the App-equipped workspace can keep multiple pieces of work
moving.

**Narrative:** The person can start work, move elsewhere, and return when an agent
finishes or needs input.

**Visual states:**

1. Thread A — actively streaming.
2. Thread B — running in the background.
3. Thread C — needs approval.
4. Thread D — completed.

**Interaction:**

- desktop may use a controlled state sequence or tabbed demonstration
- mobile uses a vertical sequence or one state at a time
- status differences cannot rely on color alone
- pause all automatic transitions when hovered, focused, or reduced motion is requested

**Copy proof:** Use day-one stories 8.16–8.18, not invented throughput numbers.

### Section 05 — Workspace and context

**Purpose:** Show that Penkra is not another isolated chat window.

**Visual:**

- a named folder with several related threads
- Files or Browser visible beside the thread
- switching threads changes the right-panel context

**Message:**

- work stays grouped by the user's real project or client
- files and pages remain beside the conversation
- context is scoped to the work rather than mixed globally

**Do not:**

- explain the interface as “left rail / middle panel / right panel”
- imply that every future search or memory story is already available

### Section 06 — Agent choice

**Purpose:** Show that Penkra is a workspace, not another model vendor.

**Content:**

- Claude Agent
- Codex
- OpenCode
- Cursor
- Grok
- Droid
- Kilo
- Pi
- GitHub
- Sign in with Claude
- Sign in with ChatGPT
- Use an API key
- a short explanation of choosing the right agent per thread

**Interaction:**

- selector changes the agent badge and a short example of its use
- no fake benchmark or “best model” ranking
- provider logos retain their approved proportions and minimum sizes

**Claim boundary:** Use the approved launch table and `STORIES.md` 1.1–1.2. Do not claim
included inference or access to plans/models beyond what each connected account or key
actually provides.

### Section 07 — Control and privacy

**Purpose:** Turn architecture into understandable trust.

**Recommended visual model:**

`Your conversation → agent chooses relevant input → App receives only that input`

Beside it, show what an App cannot enumerate:

- conversations
- folders and threads
- other Apps
- Penkra settings

**Copy levels:**

- headline: human outcome
- short paragraph: plain-language rule
- optional “How this works” link to the Security page

**Do not:**

- say “zero access” without the qualification that Apps can access their own storage
  and whatever arguments the agent explicitly passes
- say “offline” about model work; only installed App loading is settled as local/offline
- overload the homepage with every permission type

### Section 08 — Open source and developers

**Purpose:** Provide verifiable platform proof and recruit App authors.

**Content:**

- source link
- license, once confirmed
- ordinary web technologies for App interfaces
- familiar Web/Node-shaped APIs
- open Agent Skills format
- documentation CTA

**Visual:**

- small code example only if it is copied from the implemented public API
- otherwise use a diagram or App-author workflow

**Hierarchy:** This section is compact. Developer documentation carries the technical
depth.

### Section 09 — FAQ

**Purpose:** Remove launch objections without turning the page into documentation.

Use these questions and answers:

1. **How much does Penkra cost?**

   **Penkra is free and open source under the MIT License. Your AI provider may charge
   for its own subscription or API usage.**
2. **Which operating systems does Penkra support?**

   **Penkra is available for macOS, Windows, and Linux.**
3. **Which agents can I use?**

   **Connect Claude, Codex, Cursor, Grok, Droid, Kilo, Pi, GitHub, and OpenCode. Penkra
   includes built-in Claude Agent, Codex, and OpenCode harnesses.**
4. **Which API-key providers are supported?**

   **Connect Anthropic, OpenAI, Google, OpenRouter, or a compatible custom base URL.**
5. **Can Apps read my conversations?**

   **No. Apps cannot browse your conversations, folders, threads, settings, or other
   Apps. They receive only arguments an agent explicitly passes and permissions you
   approve.**
6. **What comes with Penkra?**

   **Files + Editor, Browser, and themes are bundled. You can install more Apps from
   Penkra's App registry.**

**Behavior:**

- first item closed by default; do not force one item open
- multiple items may remain open so answers can be compared
- full keyboard operation with visible focus
- question button exposes expanded state semantically
- opening an answer does not scroll or reposition the page unexpectedly

### Section 10 — Final CTA

**Purpose:** Convert after the visitor has seen promise, mechanism, and control.

**Rules:**

- repeat hero primary action verbatim
- one reassurance line based on real availability
- no email capture and download CTA competing in the same block
- no false urgency or countdown

### Section 11 — Footer

**Purpose:** Hold complete navigation, legal routes, and less-frequent resources.

**Behavior:**

- desktop columns collapse into logical mobile groups
- legal links remain visible without an accordion
- external destinations are identifiable
- copyright year is generated
- social links appear only for active, maintained profiles

## Responsive behavior

### Breakpoint intent

Breakpoints follow content failure, not device names:

- **wide desktop:** full product stage and side-by-side feature narratives
- **compact desktop/tablet:** reduced margins, preserved screenshot legibility
- **mobile:** one-column copy and alternate/cropped product compositions
- **stress width:** no overflow at 320 pixels

### Mobile-specific content rules

- do not reproduce every desktop visual detail
- keep the hero headline to roughly three or four short lines
- stack primary and secondary CTA only when both remain necessary
- use one product state per viewport rather than an unreadable three-panel overview
- move supporting labels below visuals when overlay contrast becomes fragile
- all horizontal carousels need visible affordances and non-drag keyboard controls
- avoid scroll-jacking and pinned sections on mobile

### Typography behavior

- body text never below 14 pixels
- primary reading copy targets 16–18 pixels
- headings use fluid sizes with explicit minimum and maximum values
- center-aligned paragraphs remain short
- labels and eyebrow text may be smaller only when nonessential and high contrast

## Motion and interaction policy

Motion communicates state; it is not a substitute for content.

Allowed:

- short opacity/position reveals
- status changes
- controlled screenshot/state transitions
- subtle progress and completion motion

Avoid:

- long scroll-scrub sequences
- required content rendered only after intersection observers fire
- parallax that changes reading order
- constant decorative movement behind copy
- autoplay product carousels without pause controls

Reduced motion:

- all information appears immediately
- transitions become near-instant
- video remains user initiated
- focus movement is not animated

## Content and asset inventory

### Source precedence

When sources disagree, use this order:

1. Explicit operator decisions in **Approved launch decisions**.
2. Settled rules in `PENKRA.md`.
3. `D1` stories in `STORIES.md`.
4. Composed component instances in `penkra/penkra.pen`.
5. This document's copy and presentation requirements.
6. Competitor references for pattern quality only.

A competitor reference never overrides Penkra's product truth, brand, information
architecture, or UI.

### Reference library and intended use

| Reference | Use it for | Do not copy |
|---|---|---|
| [Raycast](https://www.raycast.com/) | Download-first hierarchy, platform clarity, ecosystem progression | Its launcher category, dense utility inventory, or exact section styling |
| [Cursor](https://cursor.com/) | Concise hero, authentic product proof, repeat download conversion | Developer-only language or visual identity |
| [Claude Cowork](https://claude.com/product/cowork) | Knowledge-work outcomes, delegation examples, control language | Single-provider framing |
| [ChatGPT Work](https://openai.com/chatgpt-work/) | Short outcome-led narrative and restrained section copy | Generic “AI for everyone” positioning |
| [Synara](https://www.trysynara.com/) | Multiple-agent orchestration and visible state | Its exact layout, wording, or upstream visual structure |
| [OpenAI Codex](https://openai.com/codex/) | Parallel/background work narrative | Product-specific Codex interaction model |
| [Warp](https://www.warp.dev/) | Openness, agent choice, ownership and control | Terminal-first framing |
| [Zed](https://zed.dev/) | Category confidence, open-source proof, product media | Editor-first audience assumptions |

Reference priority by section:

- Hero: Raycast ecosystem clarity + Cursor product proof.
- Apps: Raycast's central extension positioning, expressed through Penkra's distinct
  interface + capability + skill model.
- Concurrency: Codex sequencing + Synara state visibility.
- Knowledge-work framing: Claude Cowork + ChatGPT Work.
- Agent choice and openness: Warp.
- Open-source proof: Zed.

“Use” means analyze hierarchy and behavior, not reproduce trade dress. Penkra must remain
recognizable as Penkra when competitor logos and names are removed from the review.

### Canonical Pencil source map

These IDs were read from the live canonical `penkra/penkra.pen` on 2026-07-29. Re-read
each node immediately before export because the shared file is live.

| Marketing use | Canonical source | Required treatment |
|---|---|---|
| Hero workspace | `UG43r` — Main — 3 rails | Primary product composition; preserve its 1440×900 geometry |
| Hero left navigation | `UG43r/S0ES4`, instance of `UPCCE` | Do not redraw or flatten independently |
| Hero thread | `UG43r/bv0J6` and `UG43r/O9J2t`, using `X3cN0l` and `y0DmC` | Composer and message stream must remain visible |
| Hero App panel | `UG43r/F9KhZF`, instance of `nT768` | Keep enough detail to prove Apps without competing with the thread |
| Thread states and concurrency | `X3cN0l`, `y0DmC`, `RR4w3`, `aHzOp`, `kapCo` | Compose from instances; add no invented thread-row style |
| Message/action detail | `BDWPr`, `kUqNe`, `Bx6FM`, `vI265` | Use only verified default/hover states |
| Composer detail | `TKKOp`, `JwTiI`, `g1dQ5`, `eFqUm` | Preserve current component variants and sizing |
| Agent choice | `HKAkV`, `BnEQu`, `UHPei`, `R3VAsK`, `Ympaa`, `x7O54`, `eKNhZ`, `voEK6`, `I15im`, `fCOLZ`, `mbMUu` | Use all nine canonical onboarding marks; do not fabricate provider icons |
| Connection methods | `BiK9J`, `pQHTj`, `EU9Dz`, `cv14N`, `YzDKb` | Show Claude, ChatGPT, and API-key routes from onboarding truth |
| Bundled Apps / first setup | `nsUrf`, `YmEq2`, `lHJt3` | Primary first-pass Apps proof; shows real Apps and enabled states |
| Registry/search/detail | `fcm2a`, `loYIZ`, `LbQmm`, `Q0YrUi`, `fgUwH` | Do not export the full screens while their App-owned viewport is hatched/empty; repair and verify first |
| App permissions | `irJ7w`, `p3iWcp`, `r5wcGn`, `t8z9QM` | Explain required versus optional permissions |
| Settings/control depth | `P3rhe3`, `aS32i`, `Q6Nzkr`, `pwz9i` | Supporting route imagery only, not hero content |
| Shared Penkra mark | `XUUPq` | Use the approved shared mark; compare with website `T9Z9s` before export |

Do not use nodes named `Legacy Export Snapshot` or `Unverified` in public assets.

### Required output asset manifest

The design handoff must produce this manifest. Filenames are stable so implementation
does not invent asset names:

| File | Source/use | Formats |
|---|---|---|
| `landing-hero-workspace` | `UG43r`; desktop hero | AVIF/WebP + PNG review export |
| `landing-hero-workspace-mobile` | approved intentional crop/alternate composition | AVIF/WebP + PNG |
| `landing-concurrency` | four thread statuses composed from shared instances | AVIF/WebP or accessible state demo poster |
| `landing-workspace-context` | folder + thread + Files/Browser | AVIF/WebP |
| `landing-agent-choice` | harness and connection choice | AVIF/WebP |
| `landing-agent-marks` | all nine canonical onboarding agent marks | SVG/PNG source assets |
| `landing-apps-onboarding` | `nsUrf`; first bundled Apps | AVIF/WebP |
| `landing-apps-registry` | repaired and verified registry/search/detail sequence | AVIF/WebP |
| `landing-app-permissions` | required/optional permission review | AVIF/WebP |
| `landing-control-model` | purpose-built explanatory diagram | SVG + PNG review export |
| `penkra-download-mark` | verified shared Penkra mark | SVG + PNG |
| `og-home` | homepage sharing card | PNG/JPEG at 1200×630 |

Every manifest entry must record the source `.pen` file, source node ID, export date,
pixel dimensions, and whether it is a direct export or an approved marketing
composition.

### Required product captures

1. Hero: composed three-region workspace.
2. Concurrency: running, approval-needed, and completed threads.
3. Workspace: folder, thread, Files, and Browser context.
4. Agent choice: approved harness icons and selector state.
5. Apps: detail, permission review, installed panel.
6. Control: purpose-built explanatory diagram.
7. Download: approved application icon and installer/platform assets.

### Capture rules

- source every product visual from `penkra.pen`
- use composed instances, not flattened one-off recreations
- remove personal, client, medical, financial, and authentication data
- use deliberate fictional content that cannot be mistaken for a real customer record
- export at least 2× intended display dimensions
- retain an editable source reference for every crop
- record the Pencil node ID used for each exported asset

### Evidence assets

Do not create:

- customer logos without permission
- testimonials without a real attributed record
- usage totals without an authoritative measurement
- security certifications not actually held

Permitted substitutes:

- supported agent/harness marks
- GitHub/source proof
- architecture/control explanations
- real product workflows
- release or changelog evidence

## Component contract for the eventual Pencil work

Each shared component needs named properties rather than duplicate masters.

| Component | Required variants or properties |
|---|---|
| Navigation | desktop/mobile; top/scrolled; menu closed/open |
| Button | primary/secondary/ghost/icon; default/hover/focus/pressed/disabled |
| Product window | desktop/mobile crop; static/video poster; caption on/off |
| Feature narrative | visual left/right; compact/full; dark/subtle surface |
| Status badge | running/waiting/approval/completed/error |
| Agent badge | Claude/Codex/Cursor/Grok/Droid/Kilo/Pi/GitHub/OpenCode; default/selected/disabled |
| App card | bundled/registry/local; default/hover/installed/update |
| Permission row | required/optional; on/off/denied |
| FAQ item | closed/open; default/hover/focus |
| Download control | macOS/Windows/Linux; recommended/current-platform/other-platform |
| Footer group | desktop/mobile; expanded/collapsed only if necessary |

Component acceptance:

- every landing screen uses instances
- overrides change content, not structural styling
- text properties tolerate expected length variation
- hover, focus, selected, disabled, and open are visible in component stories
- overlay content is not clipped by component containers
- responsive compositions do not detach into unrelated copies

## Page-level routes

### `/download`

**Hero copy:**

- Eyebrow: **Penkra for desktop**
- Heading: **Download Penkra**
- Body: **Free and open source for macOS, Windows, and Linux.**

**Primary platform controls:**

- **Download for macOS**
- **Download for Windows**
- **Download for Linux**
- Small secondary link: **View all releases on GitHub**

Recommend the detected platform first, but keep all three available. Never replace
explicit platform choices with a forced redirect.

**Page order:**

1. Hero and three platform choices.
2. Current version, release date, and release-notes link.
3. Platform requirements and package choices.
4. Three-step start:
   - Download and install Penkra.
   - Sign in to your Penkra account.
   - Connect Claude, ChatGPT, or an API key.
5. Integrity/signing information.
6. Troubleshooting and GitHub issue link.
7. Compact final download action.

Must answer:

- which platforms are available
- minimum requirements
- current version and release date
- install steps
- release notes
- checksum/signature information when available
- what account or provider access is needed after install

Do not silently redirect based on platform. Detect and recommend, while keeping all
available downloads visible.

### `/security`

**Hero copy:**

- Eyebrow: **Security and control**
- Heading: **Your work stays under your control.**
- Body: **Penkra makes access visible. Apps receive only the permissions you approve
  and the arguments an agent explicitly passes.**
- CTA: **View the source**

Recommended sections:

1. **The boundary is explicit.**

   Show `Your conversation → relevant arguments → App`. Explain that an App cannot
   enumerate conversations, folders, threads, other Apps, or Penkra settings.
2. **Permissions before capability.**

   Explain required and optional permissions. Required permissions block installation
   when declined; optional permissions leave the App functional in a reduced form.
3. **Updates cannot quietly expand access.**

   Updates with the same permission set can apply normally. Added permissions pause
   the update until the person reviews them.
4. **Installed Apps live on your machine.**

   App contents are downloaded locally. Network-dependent features may still use the
   network only with the relevant permission.
5. **Native connectors are first-party and permissioned.**

   Detection follows the explicit onboarding permission. Connectors are not
   marketplace content and can be disabled.
6. **Open source is verifiable.**

   Link to the MIT-licensed repository.
7. **Report a vulnerability.**

   Use the repository's verified security-reporting route. Do not publish a guessed
   email address.

**Security route acceptance:**

- distinguish Penkra accounts, agent-provider credentials, Apps, and connectors
- do not say “zero knowledge,” “sandboxed,” “encrypted,” “local-first,” or “offline”
  unless the exact statement has implementation evidence
- diagram and copy agree on every data boundary
- security reporting action reaches a maintained destination

### `/apps`

**Hero copy:**

- Eyebrow: **Penkra Apps**
- Heading: **Apps make agents useful for your work.**
- Body: **Install interfaces you use, capabilities your agents call, and skills that
  teach them how—from Penkra's App registry.**
- Primary action: focus the registry search field
- Secondary CTA: **Build an App**

The launch route combines explanation and the public registry:

- what an App is
- bundled Apps
- visible UI Apps versus tool-only Apps
- installation and permissions
- how developer mode differs from registry installation
- searchable/filterable registry results
- App detail routes with publisher, capabilities, permissions, compatibility, version,
  and install action

The directory progressively enhances the explanation; it does not replace it. A visitor
must understand Apps even when no query/filter is selected.

**Page order:**

1. Hero and search.
2. Bundled Apps: Files + Editor and Browser.
3. Featured or curated Apps sourced from real registry data.
4. Category/filter controls.
5. Results grid/list.
6. Plain-language App model.
7. Permissions explanation and Security link.
8. Developer invitation.

**Registry states:**

- initial/featured
- query with results
- query with no results
- category filter
- loading
- recoverable error
- unavailable/offline

No-results copy: **No Apps match that search. Try another term or clear your filters.**

Recoverable-error copy: **Apps could not be loaded. Check your connection and try
again.**

Each App result needs:

- icon
- App name
- verified publisher name
- one-sentence purpose
- category
- compatibility
- rating only when backed by real review data
- installed state only when the website can truthfully know it

**App detail route `/apps/[publisher]/[app]`:**

1. identity: icon, name, verified publisher, purpose
2. install/open action
3. screenshots
4. capabilities
5. required and optional permissions
6. compatibility, version, updated date, and package size
7. privacy/support/source links supplied by the publisher
8. version history
9. report action

Do not use fake ratings, download totals, reviews, “popular” labels, or featured status.

### `/developers`

**Hero copy:**

- Eyebrow: **Developers**
- Heading: **Build an App for agentic work.**
- Body: **Create focused interfaces, capabilities, and skills with familiar web
  technologies—then publish them to Penkra's App registry.**
- Primary CTA: **Build your first App**
- Secondary CTA: **View Penkra on GitHub**

Recommended sections:

1. **Start with the shape your App needs.**

   Explain visible interface, agent capability, skill, and combinations in plain
   language.
2. **Use familiar tools.**

   Introduce the implemented Web/Node-shaped APIs without advertising unimplemented
   framework support.
3. **Declare settings once.**

   Settings appear inside Penkra's consistent settings experience.
4. **Ask only for the permissions you need.**

   Link to the permission reference and Security page.
5. **Teach agents with open skills.**

   Explain the Agent Skills format and progressive discovery.
6. **Test locally.**

   Explain developer mode and local-folder/URL installation.
7. **Publish to Penkra.**

   Explain account, verified publisher namespace, package validation, and registry
   submission.
8. **Maintain compatibility.**

   Link versioning, deprecation, and changelog policies.
9. **Examples and reference.**

   Use only runnable examples from the public repository or published docs.

The five-minute path must be executable, versioned, and tested in a clean environment.
Never place illustrative pseudo-code in a copyable production code block.

### Authentication routes

Sign up, sign in, verification, and password recovery remain visually consistent with
the public site but must stay task-focused. They do not inherit the landing page's long
navigation or promotional sections.

## SEO and sharing

Every public route needs:

- unique title and description
- canonical URL
- Open Graph title, description, and image
- social card crop verified at common aspect ratios
- accurate structured data only where a matching schema exists
- inclusion or exclusion in sitemap based on whether the page is public and useful

Homepage title:

> Penkra — Give your AI agents Apps

Homepage description:

> Penkra is the open-source desktop workspace that gives the agents you already use
> Apps for working with your files, browser, and tools.

## Analytics and privacy

Track only decisions needed to improve the funnel:

- primary CTA click by location
- secondary CTA click by location
- download platform chosen
- navigation destination
- product demo started
- FAQ expanded
- outbound GitHub/docs link
- authentication start

Do not record:

- typed prompts
- file names
- private route contents
- clipboard data
- full URLs containing user parameters

Event names and properties must be documented before implementation. Analytics must not
be used as proof for marketing claims until measurement quality is verified.

## Performance budget

Targets for the implemented homepage:

- useful text and CTA render without waiting for product media
- no layout shift when screenshots or video posters load
- responsive images use explicit dimensions and appropriate sources
- no landing-only dependency that materially enlarges authentication routes
- videos do not preload full files before user intent
- animations do not keep the main thread busy while idle
- route remains usable with JavaScript delayed

Concrete numeric budgets should be set against the implementation stack during build,
then enforced in CI or a repeatable local audit.

## Legacy migration plan

### Inventory before removal

Classify every current route and asset as:

- keep unchanged
- keep but redesign
- replace with product content
- redirect
- delete

### Known replacement surface

- agency homepage and its pricing/testimonial content
- services and “what we handle”
- Ghana and country-service routes
- WhatsApp and book-a-call conversion flows
- agency product cards, statistics, customer labels, and imagery
- agency-specific header/footer navigation

### Preserve until audited

- authentication routes and their shared components
- privacy, terms, billing, and data-handling routes
- deployment and metadata infrastructure
- brand assets that match the approved Penkra identity

### Redirect policy

Before deleting any already-public URL:

1. confirm whether it has traffic, backlinks, or indexed content
2. choose a relevant replacement destination
3. add a permanent redirect only when the old and new intent genuinely match
4. return a real not-found response when no honest replacement exists

Do not redirect every removed route to the homepage.

## Work phases

### Phase 0 — Decisions and claim ledger

- complete: primary CTA, launch platforms, source visibility, license, pricing,
  connection methods, App-registry launch status, and voice are approved above
- during implementation, mark any newly introduced claim as approved, conditional,
  future, or prohibited before it enters public copy

### Phase 1 — Content architecture

- use the approved hero and copy deck in this document
- use the approved section order
- extend only supporting copy that the route specifications require
- map every copy claim to evidence
- select the exact product states needed for visuals

### Phase 2 — Website foundations in Pencil

- establish page grid, type scale, surfaces, borders, radii, and action colors
- build shared component variants and stories
- verify the components independently

### Phase 3 — Landing compositions in Pencil

- compose 1440 desktop
- compose 1280 compact desktop
- compose 390 mobile
- stress-test 320 behavior
- inspect full-page rhythm and every product crop

### Phase 4 — Supporting website screens

- Download
- Security
- Apps overview
- Developers overview
- footer/navigation states
- required legal and account routes

### Phase 5 — Implementation migration

- implement from approved Pencil components and screens
- remove or redirect legacy routes deliberately
- replace legacy metadata and social images
- keep authentication functional throughout migration

### Phase 6 — Verification and release

- visual comparison
- responsive, accessibility, performance, and link checks
- product-claim audit
- production build
- preview/deployment review
- verified commit and push checkpoint

## Component plan in Pencil

Create shared website components before composing pages:

- navigation: desktop, mobile closed, mobile open
- button: primary, secondary, icon, hover, focus, disabled
- section eyebrow and heading
- product-window frame
- feature narrative block: text-left and text-right variants
- product screenshot/card
- provider or harness badge
- trust/control explainer row
- quote/case-study card, only when real evidence exists
- FAQ item: closed and open
- platform download control
- final CTA
- footer: desktop and mobile

The landing desktop and mobile screens should be composed from these masters, with
real variants and props. They should not be independent flat copies.

## Verification plan

Before a design is considered complete:

1. Verify every public claim against `PENKRA.md`, `STORIES.md`, the implemented product,
   or an approved operator statement.
2. Inspect component instances and variants in Pencil.
3. Check desktop at 1440 and 1280 pixels.
4. Check mobile at 390 pixels and a narrow 320-pixel stress case.
5. Check text wrapping, ellipsis, image crops, and CTA widths.
6. Check keyboard focus, contrast, and semantic heading order in implementation.
7. Check reduced motion and no-motion behavior.
8. Check navigation, download, GitHub, legal, and authentication links.
9. Check page weight, responsive image sizes, layout shift, and lazy-loading fallback.
10. Capture full-page desktop and mobile screenshots and compare them with the approved
    Pencil screens.
11. Run typecheck, tests, and production build.
12. Commit and push only after the design or implementation checkpoint is verified.

### Required implementation commands

Run from `penkra-website/`:

```sh
pnpm typecheck
pnpm test
pnpm build-storybook
pnpm build
```

The current repository exposes these scripts in `package.json`. If a script changes,
update this document in the same checkpoint.

Add browser-level coverage for:

- homepage primary/secondary CTAs
- desktop and mobile navigation
- FAQ keyboard and expanded states
- platform recommendation without hiding other downloads
- App search results, empty, loading, and error states
- reduced-motion behavior
- no horizontal overflow at 320, 390, 1280, and 1440
- authentication routes surviving the site-shell migration

### Visual review matrix

| Route | 1440 | 1280 | 390 | 320 stress | Reduced motion | Keyboard |
|---|---:|---:|---:|---:|---:|---:|
| `/` | required | required | required | required | required | required |
| `/download` | required | required | required | required | required | required |
| `/security` | required | required | required | required | required | required |
| `/apps` | required | required | required | required | required | required |
| App detail | required | required | required | required | required | required |
| `/developers` | required | required | required | required | required | required |
| Authentication flows | required | required | required | required | n/a | required |

For every cell, capture the viewport, inspect the full page, and record pass/fail plus
the artifact path. A successful build alone is not visual verification.

## One-shot readiness gate

The brief is ready for a single design-and-implementation run only when the executor
can check every item below before touching the canvas or code:

- [ ] `LANDING.md`, `PENKRA.md`, and relevant `D1` stories have been read.
- [ ] Both canonical `.pen` files are open and confirmed by absolute path.
- [ ] Every referenced source node still exists and has been re-read.
- [ ] Current website and product tokens, marks, and icon assets have been inventoried.
- [ ] The exact page order and copy deck above are loaded into the work plan.
- [ ] The legacy-route migration inventory has been produced.
- [ ] Missing assets or broken canonical product screens are recorded as blockers,
      not silently recreated.
- [ ] The executor has reserved verification passes for components, desktop, compact
      desktop, mobile, 320-pixel stress, accessibility, reduced motion, performance,
      claims, and final full-page comparison.

No product, commercial, platform, CTA, pricing, registry, source, or voice decision
remains open for the first composition.

The following are implementation facts to verify, not creative decisions:

- final downloadable artifact URLs and current version metadata
- platform-specific minimum system requirements
- release signing/checksum details
- final public documentation URLs
- App registry API/data availability
- production analytics provider and consent behavior

If one is unavailable, design the state required by this brief with clearly marked
realistic placeholder data, record the dependency, and do not publish the affected
claim or action until it resolves.
