---
title: "Search"
weight: 5
bookToc: true
---

# Search

How agents *find* content: retrieval mechanics, visibility, access control, and the strategies that determine what gets surfaced in AI-generated answers.

---

## citation share

**Definition**: percentage of an AI search platform's cited sources that come from a specific
domain or source category; a core metric for measuring visibility within AI-generated answers

**Purpose**: functions as the GEO equivalent of search ranking position; tracks whether content
is actually being surfaced by AI search engines and how visibility shifts over time across platforms

**Example**: Reddit holding 3.83% of ChatGPT Search citations before August 14, 2026, then
dropping to 0.52% — an 86.4% relative decline in citation share

**Related Terms**: [GEO]({{< relref "search" >}}#geo), [query fan-out]({{< relref "search" >}}#query-fan-out), [retrieval pool]({{< relref "search" >}}#retrieval-pool)

**Source**:

- [explainx.ai: "Reddit's ChatGPT Citations Collapsed 86% on August 14 — What Happened"](https://www.explainx.ai/blog/reddit-citations-chatgpt-search-drop-august-2026)

---

## data-licensing

**Definition**: commercial agreements where publishers grant AI companies structured API access
to their content for training, search retrieval, or product integration

**Purpose**: shapes the pipeline through which AI models access publisher content; when licensing
terms change or are revoked, AI search citation behavior can shift dramatically — as seen when
Reddit cut off ChatGPT's access despite an existing data-licensing partnership

**Example**: the May 2024 OpenAI-Reddit data-licensing partnership that gave OpenAI structured
API access for training and product use, separate from ordinary web crawling

**Related Terms**: [citation share]({{< relref "search" >}}#citation-share), [robots.txt]({{< relref "search" >}}#robotstxt), [training data]({{< relref "/anatomy" >}}#training-data)

**Source**:

- [explainx.ai: "Reddit's ChatGPT Citations Collapsed 86% on August 14 — What Happened"](https://www.explainx.ai/blog/reddit-citations-chatgpt-search-drop-august-2026)

---

## GEO

**Definition**: abbreviation for _Generative Engine Optimization_; practice of optimizing
content to be cited in AI-generated answers rather than ranked in traditional search results

**Purpose**: represents a shift from SEO-focused strategies where the goal was ranking on
search engine results pages to a new paradigm where the goal is citation within AI-generated
responses; understanding GEO is essential for content strategy as AI search platforms
increasingly replace traditional search

**Example**: optimizing a help center article so it gets cited by ChatGPT when users ask
questions about a product, rather than trying to rank on Google's first page

**Related Terms**: [context window]({{< relref "/anatomy" >}}#context-window), [LLM]({{< relref "/anatomy" >}}#llm), [planning]({{< relref "/interaction" >}}#planning), [query fan-out]({{< relref "search" >}}#query-fan-out)

**Source**:

- [explainx.ai: "Reddit's ChatGPT Citations Collapsed 86% on August 14 — What Happened"](https://www.explainx.ai/blog/reddit-citations-chatgpt-search-drop-august-2026)

---

## query fan-out

**Definition**: retrieval technique where an AI search platform breaks a single user query into
multiple more specific sub-queries, fetches results for each, then synthesizes an answer from the
combined results

**Purpose**: enables AI search engines to retrieve more relevant and comprehensive information by
exploring different aspects of a query in parallel; understanding query fan-out is critical for
GEO because changes to fan-out behavior can dramatically alter which domains and content get cited

**Example**: ChatGPT breaking "best project management software for small teams" into sub-queries
like "best project management software 2026," "small team project management reviews," and
"affordable project management tools" — each retrieving different sources

**Related Terms**: [context window]({{< relref "/anatomy" >}}#context-window), [GEO]({{< relref "search" >}}#geo), [LLM]({{< relref "/anatomy" >}}#llm), [prompt]({{< relref "/interaction" >}}#prompt)

**Source**:

- [explainx.ai: "Reddit's ChatGPT Citations Collapsed 86% on August 14 — What Happened"](https://www.explainx.ai/blog/reddit-citations-chatgpt-search-drop-august-2026)

---

## retrieval pool

**Definition**: set of documents and pages an AI search engine draws from when synthesizing an
answer to a user query; populated by the sub-queries generated through query fan-out

**Purpose**: determines which sources are even candidates for citation; changes to retrieval
pool composition — whether from fan-out adjustments, ranking changes, or crawler access blocks —
directly alter citation share

**Example**: when ChatGPT's query fan-out changed on August 8, 2026, the sub-queries became
longer and more qualifier-heavy, which changed which pages entered the retrieval pool and
disproportionately excluded Reddit thread-style content

**Related Terms**: [citation share]({{< relref "search" >}}#citation-share), [GEO]({{< relref "search" >}}#geo), [query fan-out]({{< relref "search" >}}#query-fan-out)

**Source**:

- [explainx.ai: "Reddit's ChatGPT Citations Collapsed 86% on August 14 — What Happened"](https://www.explainx.ai/blog/reddit-citations-chatgpt-search-drop-august-2026)

---

## robots.txt

**Definition**: web standard file placed at a site's root that instructs web crawlers which
paths they may or may not access; a single `Disallow` directive can block an entire domain

**Purpose**: the lowest-level access control layer for web content; a publisher can cut off an
AI search engine's citation pipeline unilaterally with a one-line change, making robots.txt a
critical dependency for any GEO strategy that relies on live crawled content

**Example**: Reddit adding a blanket `Disallow: /` to its robots.txt in August 2026, which
caused ChatGPT's citation share from Reddit to collapse from 3.83% to 0.52% in one day

**Related Terms**: [citation share]({{< relref "search" >}}#citation-share), [GEO]({{< relref "search" >}}#geo), [retrieval pool]({{< relref "search" >}}#retrieval-pool)

**Source**:

- [explainx.ai: "Reddit's ChatGPT Citations Collapsed 86% on August 14 — What Happened"](https://www.explainx.ai/blog/reddit-citations-chatgpt-search-drop-august-2026)

---

## user-generated content

**Definition**: content created by end users rather than brands, publishers, or organizations;
often discussion-based, forum-style, or Q&A-format material

**Purpose**: in the GEO context, user-generated content has historically been a major citation
source for AI search engines due to its breadth and conversational tone; the article documents
how AI platforms are increasingly deprioritizing UGC in favor of structured first-party sources
like documentation and help centers

**Example**: Reddit threads, forum discussions, and community Q&A sites that previously
commanded significant citation share in ChatGPT but declined sharply after August 2026

**Related Terms**: [citation share]({{< relref "search" >}}#citation-share), [GEO]({{< relref "search" >}}#geo), [retrieval pool]({{< relref "search" >}}#retrieval-pool)

**Source**:

- [explainx.ai: "Reddit's ChatGPT Citations Collapsed 86% on August 14 — What Happened"](https://www.explainx.ai/blog/reddit-citations-chatgpt-search-drop-august-2026)
