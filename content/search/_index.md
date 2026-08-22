---
title: "Search"
weight: 5
bookToc: true
---

# Search

_How agents find content_: access control, retrieval mechanics, visibility, and the strategies that determine response quality.

---

## Agent-Friendly Documentation Spec

**Definition**: specification defining 23 checks across 7 categories that evaluate how well a
documentation site serves coding agents; grounded in empirical observation of real agent workflows

**Purpose**: provides a shared standard for documentation teams, tool builders, and platform
providers to measure and improve how effectively agents can discover, retrieve, and consume
documentation content; categories cover content discoverability, markdown availability, page
size and truncation risk, content structure, URL stability, observability, and authentication

**Example**: [`afdocs`](https://afdocs.dev/) is a companion CLI tool and Node.js library that
implements the spec; running `npx afdocs check https://docs.example.com --format scorecard`
produces a scorecard with category breakdowns, system-level diagnostics, and per-check results
with fix suggestions, and includes a vitest helper for CI integration to catch regressions

**Related Terms**: [Agent Reading Test]({{< relref "/evaluation/benchmarks" >}}#agent-reading-test),
[evaluation]({{< relref "/evaluation" >}}#evaluation-1), [`robots.txt`]({{< relref "search" >}}#robotstxt),
[spec]({{< relref "/anatomy" >}}#spec)

**Sources**:

- [AFDocs by Dachary Carey](https://afdocs.dev/)
- [Agent-Friendly Documentation Spec by Dachary Carey](https://agentdocsspec.com/)

---

## citation share

**Definition**: percentage of AI-generated answers, in a defined prompt cluster, that link to or name a specific
domain; a core metric for measuring visibility within AI-generated answers

**Purpose**: functions as the GEO equivalent of search ranking position; tracks whether content
is actually being surfaced by AI search engines and how visibility shifts over time across platforms

**Example**: Reddit holding 3.83% of `ChatGPT Search` citations before August 14, 2026, then
dropping to 0.52%, an 86.4% relative decline in citation share

**Related Terms**: [GEO]({{< relref "search" >}}#geo), [query fan-out]({{< relref "search" >}}#query-fan-out),
[retrieval pool]({{< relref "search" >}}#retrieval-pool)

**Source**:

- [explainx.ai: "Reddit's ChatGPT Citations Collapsed 86% on August 14 — What Happened" by Yash Thakker](https://www.explainx.ai/blog/reddit-citations-chatgpt-search-drop-august-2026)
- [GEO Rankings: "Citation Share vs Share of Voice vs Visibility Score: What Each Metric Actually Measures (And Which to Track)"](https://www.geosoftwarerankings.com/blog/citation-share-share-voice-visibility-score-each-metric/)

---

## data-licensing

**Definition**: commercial agreements where publishers grant AI companies structured API access
to their content for training, search retrieval, or product integration

**Purpose**: shapes the pipeline through which AI models access publisher content; when licensing
terms change or are revoked, AI search citation behavior can shift dramatically, as seen when
Reddit cut off `ChatGPT`'s access despite an existing partnership

**Example**: the May 2024 OpenAI-Reddit data-licensing partnership that gave OpenAI structured
API access for training and product use, separate from ordinary web crawling

**Related Terms**: [citation share]({{< relref "search" >}}#citation-share), [`robots.txt`]({{< relref "search" >}}#robotstxt),
[training data]({{< relref "/anatomy" >}}#training-data)

**Source**:

- [explainx.ai: "Reddit's ChatGPT Citations Collapsed 86% on August 14 — What Happened" by Yash Thakker](https://www.explainx.ai/blog/reddit-citations-chatgpt-search-drop-august-2026)

---

## GEO

**Definition**: abbreviation for _Generative Engine Optimization_; practice of optimizing
content to be cited in AI-generated answers rather than ranked in traditional search results

**Purpose**: essential for content strategy as AI search platforms increasingly replace traditional
search; represents a shift from SEO-focused strategies where the goal was ranking on
search engine results pages to a new paradigm where the goal is response citation

**Example**: optimizing a help center article so it gets cited by `ChatGPT` when users ask
questions about a product, rather than trying to rank on Google's first page

**Related Terms**: [context window]({{< relref "/anatomy" >}}#context-window), [LLM]({{< relref "/anatomy" >}}#llm),
[planning]({{< relref "/interaction" >}}#planning), [query fan-out]({{< relref "search" >}}#query-fan-out)

**Source**:

- [explainx.ai: "Reddit's ChatGPT Citations Collapsed 86% on August 14 — What Happened" by Yash Thakker](https://www.explainx.ai/blog/reddit-citations-chatgpt-search-drop-august-2026)

---

## `llms.txt`

**Definition**: Markdown file published at a site's root path (`/llms.txt`) that gives LLMs and
agents a curated, structured index of a site's content, distinct from the raw HTML a browser
renders; a companion `/llms-full.txt` inlines the complete content in one file

**Purpose**: reduces the cost of parsing full HTML pages for content discovery by giving agents a
direct, structured entry point; functions like `robots.txt` and XML sitemaps, but curates content
for consumption rather than gating access to it

**Example**: only one section is required, an `H1` heading naming the project or site; documentation
sites keep `/llms.txt` under 50,000 characters using a progressive disclosure pattern, linking out
to full pages for large doc sets rather than inlining everything

**Related Terms**: [Agent-Friendly Documentation Spec]({{< relref "search" >}}#agent-friendly-documentation-spec),
[`AGENTS.md`]({{< relref "/interaction" >}}#agentsmd), [evaluation]({{< relref "/evaluation" >}}#evaluation-1),
[`robots.txt`]({{< relref "search" >}}#robotstxt), [truncation budget]({{< relref "search" >}}#truncation-budget)

**Sources**:

- [llms.txt: The /llms.txt file by Jeremy Howard](https://llmstxt.org/)
- [Dachary Carey: "How to Evaluate a Platform-Written Spec"](https://dacharycarey.com/2026/03/28/how-to-evaluate-platform-written-spec/)

---

## query fan-out

**Definition**: retrieval technique where an AI search platform breaks a single user query into
multiple more specific sub-queries, fetches results for each, then synthesizes an answer from the
combined results

**Purpose**: enables AI search engines to retrieve more relevant and comprehensive information by
exploring different aspects of a query in parallel; understanding query fan-out is critical for
GEO because changes to fan-out behavior can dramatically alter which domains and content get cited

**Example**: `ChatGPT` breaks _"best project management software for small teams"_ into sub-queries
such as _"best project management software 2026,"_ _"small team project management reviews,"_ and
_"affordable project management tools"_, while each retrieves different sources

**Related Terms**: [context window]({{< relref "/anatomy" >}}#context-window), [GEO]({{< relref "search" >}}#geo),
[LLM]({{< relref "/anatomy" >}}#llm), [prompt]({{< relref "/interaction" >}}#prompt)

**Source**:

- [explainx.ai: "Reddit's ChatGPT Citations Collapsed 86% on August 14 — What Happened" by Yash Thakker](https://www.explainx.ai/blog/reddit-citations-chatgpt-search-drop-august-2026)

---

## retrieval pool

**Definition**: set of documents and pages an AI search engine draws from when synthesizing an
answer to a user query; populated by the sub-queries generated through query fan-out

**Purpose**: determines which sources are even candidates for citation; changes to retrieval
pool composition, whether from fan-out adjustments, ranking changes, or crawler access blocks —
directly alter citation share

**Example**: when `ChatGPT`'s query fan-out changed on August 8, 2026, the sub-queries became
longer and more qualifier-heavy, which changed which pages entered the retrieval pool and
disproportionately excluded Reddit thread-style content

**Related Terms**: [citation share]({{< relref "search" >}}#citation-share), [GEO]({{< relref "search" >}}#geo),
[query fan-out]({{< relref "search" >}}#query-fan-out)

**Source**:

- [explainx.ai: "Reddit's ChatGPT Citations Collapsed 86% on August 14 — What Happened" by Yash Thakker](https://www.explainx.ai/blog/reddit-citations-chatgpt-search-drop-august-2026)

---

## `robots.txt`

**Definition**: Robots Exclusion Protocol; web standard file placed at a site's root that
instructs web crawlers which paths they may or may not access

**Purpose**: the lowest-level access control layer for web content; a publisher can cut off an
AI search engine's citation pipeline unilaterally with a one-line change, making `robots.txt` a
critical dependency for any GEO strategy that relies on live crawled content

**Example**: Reddit adding a blanket `Disallow: /` to its `robots.txt` in August 2026, which
caused `ChatGPT`'s citation share from Reddit to collapse from 3.83% to 0.52% in one day

**Related Terms**: [agent]({{< relref "/anatomy" >}}#agent), [`AGENTS.md`]({{< relref "/interaction" >}}#agentsmd),
[citation share]({{< relref "search" >}}#citation-share), [GEO]({{< relref "search" >}}#geo),
[`llms.txt`]({{< relref "search" >}}#llmstxt), [retrieval pool]({{< relref "search" >}}#retrieval-pool)

**Source**:

- [explainx.ai: "Reddit's ChatGPT Citations Collapsed 86% on August 14 — What Happened" by Yash Thakker](https://www.explainx.ai/blog/reddit-citations-chatgpt-search-drop-august-2026)
- [Wikipedia: "robots.txt"](https://en.wikipedia.org/wiki/Robots.txt)

---

## truncation budget

**Definition**: platform-specific character or byte limit an agent's fetch pipeline reads from a
page before cutting the response off, independent of the LLM's own context window

**Purpose**: cost efficiency mechanism behind how identical page content reaches different agents in
different amounts; budgets vary widely by tool and fetch method

**Example**: a documentation page where actual content doesn't begin until 87% through the HTTP
response, after markup and navigation elements consume most of the truncation budget, leaves an
agent with only the page's last few paragraphs even though the full page loaded successfully

**Related Terms**: [canary phrase]({{< relref "/evaluation" >}}#canary-phrase), [context window]({{< relref "/anatomy" >}}#context-window),
[evaluation]({{< relref "/evaluation" >}}#evaluation-1), [`llms.txt`]({{< relref "search" >}}#llmstxt),
[summarization layer]({{< relref "/anatomy" >}}#summarization-layer)

**Sources**:

- [Dachary Carey: "How to Evaluate a Platform-Written Spec"](https://dacharycarey.com/2026/03/28/how-to-evaluate-platform-written-spec/)
- [Agent-Friendly Documentation Spec: "Agent platform comparisons" by Dachary Carey, Rhyannon Rodriguez](https://agentdocsspec.com/platforms/)

---

## user-generated content

**Definition**: also known as _UGC_, content created by end users rather than brands, publishers,
or organizations

**Purpose**: in GEO context, has historically been a major citation source for AI search engines
due to its breadth and conversational tone; AI platforms are increasingly deprioritizing UGC in favor
of authoritative, structured first-party sources like documentation and help centers

**Example**: Reddit threads, forum discussions, and community Q&A sites that previously
commanded significant citation share in `ChatGPT` but declined sharply after August 2026

**Related Terms**: [citation share]({{< relref "search" >}}#citation-share), [GEO]({{< relref "search" >}}#geo),
[retrieval pool]({{< relref "search" >}}#retrieval-pool)

**Source**:

- [explainx.ai: "Reddit's ChatGPT Citations Collapsed 86% on August 14 — What Happened" by Yash Thakker](https://www.explainx.ai/blog/reddit-citations-chatgpt-search-drop-august-2026)
