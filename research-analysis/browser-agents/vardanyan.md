# Paper Summary: Building Browser Agents: Architecture, Security, and Practical Solutions

**Authors**: Aram Vardanyan (FillApp)
**Year**: 2025
**Venue**: arXiv preprint
**DOI/URL**: https://arxiv.org/abs/2511.19477
**SKILL used**: [read-arxiv-paper](https://www.skills.sh/karpathy/nanochat/read-arxiv-paper)

## Overview

This paper reports production experience from building and operating a browser
agent over roughly a year of real-world, authenticated-session usage. Its
central claim: LLM reasoning capability is not the bottleneck for autonomous
browser agents — architecture is. Four architectural dimensions are examined:
how the agent perceives page state (context management), how it acts on the
page (execution layer), how it manages growing conversation history (memory
management), and how safety is enforced (security). The paper argues that
general-purpose, unrestricted browsing agents are fundamentally unsafe given
current prompt-injection defenses, and that safety must instead be enforced
by deterministic execution-layer code rather than LLM judgment. The resulting
system reaches ~85% success on the 53-challenge WebGames benchmark, versus
~50% for the best prior browser agent (Gemini 2.5 Pro + Browser Use) and a
95.7% human baseline.

## Highlights

- **Hybrid perception**: accessibility-tree snapshots as the primary,
  token-efficient page representation, with vision (screenshots, and a
  delegated vision model for bounding-box detection) as a fallback for
  canvas-based or non-DOM content.
- **Element reference versioning**: refs are scoped to a snapshot version
  (e.g. `1:10`) so stale references fail safely instead of firing on the
  wrong element after a DOM mutation.
- **Bulk actions**: batching independent tool calls (e.g. filling a 28-field
  form) cut tool calls by 74%, wall-clock time by 57%, and tokens by 41%
  versus sequential execution.
- **Three-tier context control**: single-snapshot retention (discard prior
  snapshots), intelligent trimming of the current snapshot via a lightweight
  model, and compression of conversation history into agent-authored
  `memory` fields — holding token use roughly constant instead of growing
  linearly with task length (~12.6K vs. >43K tokens after 15 actions).
- **Security-as-architecture thesis**: prompt injection is treated as
  unsolvable at the LLM layer; the paper argues for programmatic action
  restriction, domain allowlisting, and — most emphasized — **specialization**
  (least-privilege agent types) as the only defenses that hold under
  adversarial pressure.
- **Agent specialization taxonomy**: Assistant Agents (read-only),
  Research Agents (navigate/click/type, domain-allowlisted), and Data Entry
  Agents (single-tab, single-workflow scope), each with a different
  risk/utility tradeoff.

## Strengths

- Grounded in a year of production operation with authenticated sessions,
  not just benchmark runs — failure modes are reported, not just wins.
- Quantified, reproducible-looking metrics (token growth curves, cost
  breakdowns, bulk-vs-sequential comparisons) rather than qualitative claims.
- Directly engages published security research (Brave's Comet prompt
  injection findings) instead of treating prompt injection as a hypothetical.
- Clear, falsifiable failure taxonomy for the 8 unsolved WebGames challenges
  (vision precision, sub-second reaction time, continuous cursor control) —
  it draws an honest boundary around what the architecture does _not_ fix.

## Weaknesses

- Single-system, single-author case study; no ablations isolating which of
  the four architectural levers (perception, execution, memory, security)
  contributes most to the 85% figure.
- WebGames and the cost benchmark both run on one underlying model family
  (GPT-5.1 / Gemini) — generalization across model providers is untested.
- The specialization taxonomy is presented as sufficient, but composing
  multiple specialized agents into one workflow (hand-offs, shared state)
  is not addressed — the paper stays at the single-agent level.
- "Programmatic constraints" for sensitive actions rely on keyword matching
  against element text (e.g. "refund", "delete") in the shown example, which
  is itself an evadable heuristic rather than a strict guarantee, though the
  paper's broader point is that _any_ deterministic check beats LLM judgment.

## Detailed Summary

### Background

Surveys the current landscape: AI-native browsers (ChatGPT Atlas, Perplexity
Comet), Anthropic's computer-use tooling and Claude for Chrome, open-source
frameworks (WebVoyager, Browser Use), and accessibility-tree-based MCP
servers (Playwright MCP, Chrome DevTools MCP). Positions this work as the
first to report long-horizon production operation rather than benchmark-only
results, combining perception design, execution-layer design, memory
management, and programmatic safety into one architecture.

### The Human-AI Gap

Frames why browser agents underperform humans on some tasks: the web is
built for continuous vision, motor control, and audio/timing perception,
while agents act through discrete tool calls on occasional snapshots. This
motivates hybrid (accessibility + vision) perception rather than pure
screenshot-driven agents.

### Context Management

Compares vision-only, raw-DOM, grid-overlay, and accessibility-tree
approaches. Raw DOM is rejected as too verbose (100+ lines for one form
field); grid overlays and screenshot annotation break down on dense UIs
(e.g. 24px date-picker cells). Accessibility-tree snapshots are adopted as
primary, with vision reserved for canvas/non-DOM content and delegated
bounding-box detection. Hybrid design also strengthens safety, since
semantic labels (not raw coordinates) support keyword-based action blocking.

### Execution Layer

Defines the tool surface (`click`, `type`, `hover`, `press_key`,
`select_option`, `upload_file`, `drag`, `pan`, `focus`, `wait_for`,
`handle_dialog`, `navigate`, `browser_tabs`, `snapshot`, `take_screenshot`)
and the element-reference-with-versioning scheme that prevents stale-ref
actions. Introduces bulk actions for latency/cost reduction and a
failure-adaptation protocol instructing the agent to change strategy rather
than retry identically after a failed action.

### Context & History Management

Details the three-tier strategy (single-snapshot retention, LLM-based
intelligent trimming with an explicit range-selection prompt, and
`memory`-field history compression) that keeps token consumption
near-constant across long-running, multi-tab tasks.

### Prompt Engineering & Optimization

Covers system-prompt structure (including explicit "time-awareness" framing
so the agent knows each tool call costs ~3-5s), and a caching strategy that
orders context by volatility (system prompt → session context → tab state →
compressed history → live snapshot) to maximize prefix-cache hits, reported
at ~89% cost reduction for extended sessions.

### Security & Safety

Core argument: prompt injection is a semantic-layer vulnerability that
input validation and sandboxing cannot address, and that permission prompts
and classifier-based detection both degrade in practice (alert fatigue;
classifiers processing the same untrusted content they're meant to
protect). Proposes four architectural countermeasures: deterministic
execution-layer safety checks, domain allowlisting, action restriction on
sensitive elements, and — as the most emphasized — specialization
(least-privilege agent scopes) to bound blast radius.

### Production Validation

Reports concrete cost data (one WebGames shopping task: $0.1454, 205s, 75%
cache hit rate) and the 85%-vs-50%-vs-95.7% WebGames comparison, with an
explicit failure taxonomy for the 8 unsolved challenges. Closes with the
three-tier specialization taxonomy (Assistant / Research / Data Entry
agents) and domain-specific prompt/context injection (e.g. stripping a
LinkedIn inbox from the snapshot before it ever reaches the LLM).

## Technical Details

- **Element reference versioning**: `{snapshot_version}:{ref}` — action
  fails safely on version mismatch instead of hitting a stale DOM node.
- **Snapshot size cap**: ~50,000 characters, with an explicit
  `[refs X-Y trimmed]` indicator and range-fetchable `snapshot(startRef,
  endRef)` tool.
- **Intelligent trimming**: a lightweight model (e.g. Gemini 2.5 Flash Lite)
  scores relevance of accessibility-tree ranges against the current
  conversation history before the primary model ever sees the snapshot;
  reported ~57% cost reduction despite a ~34% increase in re-request tool
  calls.
- **History compression**: agent-authored `memory` field per tool call,
  rolling buffer of ~40-50 full-detail steps, older steps summarized.
- **Cache ordering**: system prompt → session context → tab state →
  compressed history → live snapshot (least → most volatile).

## Related Work Context

Sits at the intersection of **agent architecture**, **web accessibility
tooling**, and **AI agent security**. Extends the MCP-based
accessibility-tree pattern (Playwright MCP, Chrome DevTools MCP) with
hybrid vision fallback, reference versioning, and bulk actions. Builds
directly on Browser Use's memory-field pattern for history compression.
On security, it corroborates and extends Brave's published Comet prompt-
injection findings into a general architectural prescription (specialization
over general intelligence) rather than a one-off vulnerability report.

## Potential Applications

- Design reference for any MCP-based or custom browser-automation tool
  layer (element reference schemes, bulk action batching, snapshot
  trimming).
- Security posture for agent deployments with access to authenticated,
  high-value sessions (banking, email, CRM): argues for scoped,
  domain-allowlisted agents over one general-purpose browsing agent.
- Cost/latency budgeting reference for long-horizon agent tasks (concrete
  token/cost/time-per-step baselines).

## Reproducibility Notes

- **Data**: WebGames benchmark (53 public challenges, cited standard
  benchmark) and one internal production cost trace; the production system
  itself (FillApp) is not open-sourced, so architecture details are
  reported narratively rather than as inspectable code.
- **Benchmarks**: WebGames results are compared against the benchmark
  authors' own published Gemini 2.5 Pro + Browser Use baseline (~50%) and
  human baseline (95.7%), which are independently citable.
- **Limitations**: cost/latency figures are model- and pricing-specific
  (GPT-5.1 rates at time of writing) and will drift as model pricing and
  capability change.

## Connections to the Agent Ecosystem Glossary

This project has no browser-agent codebase to cross-reference (unlike the
`read-arxiv-paper` skill's original nanochat context), so the relevant
connection is to the glossary's own term set:

- **Reinforces existing entries**: [`context window`](../../content/anatomy/_index.md)
  and [`prompt injection vulnerability`](../../content/evaluation/metrics.md)
  are both load-bearing concepts in this paper and could cite it as a
  production-grounded example (constant-vs-linear token growth; Comet-style
  injection attacks against agents holding authenticated sessions).
- **Existing benchmark entry**: `content/evaluation/benchmarks.md` already
  references browser-agent benchmarking generally; WebGames (53 challenges,
  human-calibrated baseline) is a citable concrete instance worth adding
  alongside it.
- **Candidate new glossary terms surfaced by this paper** (for
  `add-glossary-term` / `add-tool` follow-up, not added here):

- _accessibility tree snapshot_ — structured, role/label-based page
representation used as an LLM-facing alternative to raw DOM or
screenshots (Anatomy or Interaction category).
- _element reference versioning_ — snapshot-scoped ref IDs that fail
safely on stale DOM state (Anatomy or Interaction category).
- _bulk action_ / _action batching_ — grouping independent tool calls
into one request to cut latency and token cost (Interaction category).
- _deterministic safety boundary_ / _programmatic constraint_ — enforcing
agent safety in execution-layer code rather than via LLM judgment,
contrasted with permission prompts and classifier-based detection
(Evaluation or a Security-adjacent category).
- _agent specialization_ (Assistant / Research / Data Entry agent
patterns) — least-privilege scoping as a security strategy, distinct
from general-purpose agent design (Anatomy category).
