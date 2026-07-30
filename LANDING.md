# Penkra Landing and Website Plan

**Research date:** 2026-07-29  
**Status:** Evidence and planning only. No landing-page design has been approved.

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

Claims that are not yet safe for public copy:

- that users can use every existing AI subscription
- a free inference allowance
- final pricing
- a public App marketplace available on launch day
- support for every desktop operating system on launch day
- customer counts, productivity metrics, testimonials, or enterprise logos
- features tagged `?` or `F` in `STORIES.md`

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

## Recommended positioning

### Category sentence

> Penkra is the open-source desktop workspace for agentic work.

This is already settled and should appear in the first screen.

### Recommended hero direction

> **Your work. Moving on every front.**
>
> Run multiple AI agents across your files, browser, and Apps in one open-source
> desktop workspace—while you stay in control.

This is a direction, not approved final copy. It expresses the transformation first,
then defines the product without making an unsettled subscription, pricing, or
marketplace claim.

### Alternate, more explicit direction

> **Put AI agents to work—without losing control.**
>
> Penkra brings concurrent agent threads, files, the web, and permissioned Apps into
> one desktop workspace built for knowledge work.

## Recommended landing-page narrative

### 1. Navigation

- Penkra mark and wordmark
- Product
- Apps
- Security
- Developers
- GitHub
- one primary CTA

Pricing should not appear until pricing exists. Sign in should appear only if a
website account is useful before downloading.

### 2. Hero: promise, category, action

- one transformation headline
- one category-defining paragraph
- primary CTA based on actual launch status
- secondary open-source/GitHub CTA if the repository is public
- one large, composed Penkra product view using the canonical desktop design

The product view should show multiple active threads and a useful right-panel App so
the hero proves the category instead of showing an empty chat.

### 3. The concurrency story

Working message: **Work on more than one thing at once.**

Show:

- one active thread streaming
- another completed in the background
- a third waiting for approval
- persistent status in navigation without hijacking the current task

This is Penkra's clearest immediate distinction from ordinary chat products.

### 4. The workspace story

Working message: **The context stays with the work.**

Show a folder containing threads, with Files or Browser beside the conversation.
Explain the user outcome rather than the three-panel geometry.

### 5. Agent choice

Working message: **Choose the agent for the job.**

Show the built-in harnesses truthfully. Do not claim that every paid subscription can
be reused until authentication and entitlement support is settled and implemented.

### 6. Apps and capabilities

Working message: **Add what your work needs.**

Explain one coherent unit—an App—and show three understandable examples:

- a visible App in the right panel
- a capability the agent can use
- a skill that teaches the agent when and why to use it

The public page should not lead with SDK terminology.

### 7. Control and permissions

Working message: **Capability without invisible access.**

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

### 9. Final action

Repeat the exact primary CTA. Do not introduce a new conversion goal at the bottom.

### 10. Footer

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
4. `/apps` — App model and bundled Apps; directory only when the registry is public
5. `/developers` — App author overview and documentation entry point
6. `/privacy`
7. `/terms`
8. authentication and account-recovery routes already represented in Pencil

### Add when the underlying product is real

1. `/pricing`
2. `/apps/[publisher]/[app]`
3. `/docs/...`
4. `/changelog`
5. `/blog` or `/updates`
6. `/enterprise`

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

1. **Transformation:** several pieces of work can move at the same time.
2. **Category:** Penkra is an open-source desktop workspace for agentic work.
3. **Mechanism:** threads, agents, files, browser, and Apps stay together.
4. **Control:** the person sees progress and approves consequential actions.
5. **Extensibility:** Apps add useful capabilities without silently reading Penkra data.
6. **Proof:** authentic product states, implemented behavior, source, and documentation.

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
- primary CTA

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
- availability note when platform or rollout limitations matter
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
- the hero does not claim universal provider subscription reuse unless approved

### Section 03 — Concurrency

**Purpose:** Establish the strongest product distinction.

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

### Section 04 — Workspace and context

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

### Section 05 — Agent choice

**Purpose:** Show that Penkra is a workspace, not another model vendor.

**Content:**

- Claude Agent
- Codex
- OpenCode
- a short explanation of choosing the right agent per thread

**Possible interaction:**

- selector changes the agent badge and a short example of its use
- no fake benchmark or “best model” ranking
- provider logos retain their approved proportions and minimum sizes

**Claim boundary:** Authentication methods, subscription reuse, included inference, and
model availability must be maintained in a separate approved claim table before copy
is published.

### Section 06 — Apps

**Purpose:** Explain extensibility in user language.

**Sequence:**

1. Start useful with bundled Files + Editor and Browser Apps.
2. Add an App when a job needs a new interface or capability.
3. Review required and optional permissions.
4. Use it immediately without restarting Penkra.

**Visual:**

- App detail or install state
- permission review sheet
- installed App open in the right panel

**Interaction:**

- a three-step controlled sequence is acceptable
- the sequence must work with keyboard and touch
- each state has a static fallback

**Do not:**

- call connectors Apps
- show a public directory before the registry exists
- imply an App can read the current conversation

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

### Section 09 — Final CTA

**Purpose:** Convert after the visitor has seen promise, mechanism, and control.

**Rules:**

- repeat hero primary action verbatim
- one reassurance line based on real availability
- no email capture and download CTA competing in the same block
- no false urgency or countdown

### Section 10 — Footer

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
| Harness badge | Claude/Codex/OpenCode; default/selected/disabled |
| App card | bundled/registry/local; default/hover/installed/update |
| Permission row | required/optional; on/off/denied |
| FAQ item | closed/open; default/hover/focus |
| Download control | macOS/Windows/Linux; available/coming soon/unsupported |
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

Recommended sections:

1. plain-language trust model
2. what Apps cannot read
3. how permissions are requested
4. what changes during App updates
5. how native connectors are detected and disabled
6. local versus network-dependent behavior
7. vulnerability reporting
8. enterprise controls only when implemented

### `/apps`

Before the registry is public, this route explains:

- what an App is
- bundled Apps
- visible UI Apps versus tool-only Apps
- installation and permissions
- how developer mode differs from registry installation

After launch, the directory becomes progressive enhancement of this explanation, not a
replacement for it.

### `/developers`

Recommended sections:

- five-minute first App path
- App shapes
- UI and SDK model
- skills
- settings declarations
- permissions
- publishing
- compatibility and deprecation
- examples and reference documentation

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

Homepage title direction:

> Penkra — Open-source desktop workspace for agentic work

Description direction:

> Run multiple AI agents across your files, browser, and Apps in one desktop workspace
> built for knowledge work and control.

These remain draft until positioning is approved.

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

- answer the decisions at the end of this document
- mark every candidate claim as approved, conditional, future, or prohibited
- confirm primary CTA and launch platforms
- confirm source/license visibility

### Phase 1 — Content architecture

- approve one hero direction
- approve section order
- write first-pass copy for every section
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

## Decisions needed before the first landing-page composition

1. What is the primary conversion at the current stage: download, waitlist, sign up,
   or follow the GitHub repository?
2. Which operating systems may the public page promise at launch?
3. Is the GitHub repository public at launch, and should “open source” link directly to it?
4. Which agent sign-in methods are implemented strongly enough to name on the page?
5. Is the App registry a launch feature, a preview, or a future direction?
6. Is there any approved pricing or is pricing intentionally absent for the first release?
7. Should the brand voice feel more direct and utilitarian, or more warm and human,
   while remaining product-led?
