---
name: add-glossary-term
description: >-
  Add a term to the Agent Ecosystem Glossary as a full entry in the appropriate
  category page plus a scannable stub in quick-reference.md that links to
  it.
---

# Add a Glossary Term

Every term lives in two places - a **full entry** on a category page, and a
**scannable stub** on `content/quick-reference.md` that links to it.
Both are required — a term isn't "added" until both exist and the link
resolves.

## 1. Pick the category

| Category | Description |
|---|---|
| `content/anatomy/_index.md` | What agents _are_ - structural components, training that define abilities/limitations (`agent`, `harness`, `LLM`, `temperature`) |
| `content/interaction/_index.md` | What agents _do_ - behavior, commands, communication, mechanisms that govern responses (`hook`, `MCP server`, `planning`, `system prompt`) |
| `content/evaluation/_index.md` | Evaluation methodology (`evaluation`, `LLM-as-a-Judge`, `robustness`) |
| `content/evaluation/benchmarks.md` | Named benchmark datasets (`MMLU`, `HumanEval`) |
| `content/evaluation/metrics.md` | Output metrics (`BLEU`, `CSAT`, `pass@k`) |
| `content/research/_index.md` | Research methodology (`experimental design`, `taxonomy`) |
| `content/research/qualitative.md` | Non-numerical research methods (`affinity mapping`, `codebook`) |
| `content/research/quantitative.md` | Statistical methods — including stats formulas used *on* qualitative data, e.g. Cohen's kappa (`P value`, `confidence interval`) |
| `content/search/_index.md` | How agents find content - access control, retrieval mechanics, visibility (`GEO`, `robots.txt`, `retrieval pool`) |

`content/tools/_index.md` is out of scope for this skill — named products/platforms
(e.g. `Playwright MCP`, `LangChain`) use the **add-tool** skill instead, which
writes a bare name/description table row with no Definition/Purpose/Example
sections and no quick-reference stub.

If a term could plausibly sit in more than one place, look at how the term
itself is worded: if the existing quick-reference bullets already say
"statistical measure" or "evaluation metric," that phrase usually names the
right category. When it's still ambiguous, ask — don't guess.

## 2. Write the full entry

Insert a new `## term name` heading in **strict alphabetical order**
(case-insensitive) among the file's existing `##` headings. Format:

```markdown
## term name

**Definition**: what it is; one or two clauses, semicolon-joined, lowercase
except proper nouns/acronyms, no trailing period

**Purpose**: why it matters / how it's used; same clause style

**Example**: a concrete instance (omit if nothing concrete to add)

**Related Terms**: [term]({{< relref "path" >}}#anchor), [term]({{< relref "path" >}}#anchor)

---
```

- Do **not** add a `**Source**` or `**Sources**` field unless explicitly asked.
  When a source field is present, use `**Source**:` (singular) for a single source
  with the link on the same line as the label (no newline or whitespace before the link);
  use `**Sources**:` (plural) for multiple sources, each on its own line as a list item.
- Add 2-4 Related Terms, preferring terms that already exist as full entries.
  Cross-link both directions where it's a genuine pairing (e.g. `RLHF` ↔
  `sycophancy`), not just outward.

### relref path convention

- Link text is just the term.
- The `{{< relref >}}` target is always the **full path to the file the
  heading lives in**, even for links from within that same file:
  - `anatomy/_index.md` → `{{< relref "anatomy" >}}` (self) or `{{< relref "/anatomy" >}}` (from elsewhere — both work, but match whichever style the surrounding file already uses)
  - `interaction/_index.md` → `{{< relref "interaction" >}}` (self) or `{{< relref "/interaction" >}}` (from elsewhere)
  - `evaluation/_index.md` → `{{< relref "evaluation" >}}` (self) or `{{< relref "/evaluation" >}}` (from elsewhere — both work, but match whichever style the surrounding file already uses)
  - `evaluation/metrics.md` → `{{< relref "/evaluation/metrics" >}}`
  - `evaluation/benchmarks.md` → `{{< relref "/evaluation/benchmarks" >}}`
  - `research/_index.md` → `{{< relref "/research" >}}`
  - `research/qualitative.md` → `{{< relref "/research/qualitative" >}}`
  - `research/quantitative.md` → `{{< relref "/research/quantitative" >}}`
  - `search/_index.md` → `{{< relref "search" >}}` (self) or `{{< relref "/search" >}}` (from elsewhere)
- Never write a plain Markdown relative link (`[x](page.md#term)`). Hugo
  doesn't publish `.md` files or rewrite `.md` links, and this repo has no
  custom render hook — a raw `.md` link 404s. `{{< relref >}}` is the only
  link form that resolves correctly and fails the build loudly if the target
  page doesn't exist.

## 3. Add the quick-reference stub

This step applies only when adding a **new** full entry. If you're instead
editing an *existing* entry, leave `content/quick-reference.md` untouched.

In `content/quick-reference.md`, insert a `### term name` heading under the
correct `## X` first-letter section, alphabetical within that section.
Format:

```markdown
### term name

- terse bullet fragment, not a full sentence
- terse bullet fragment

**Glossary Term Entry Location**: [Label]({{< relref "path" >}}#anchor)

---
```

**Label** depends on where the full entry lives:
- Parent page (`_index.md`) → just the category name: `[Anatomy]`, `[Interaction]`, `[Evaluation]`, `[Research]`, `[Search]`
- Child page → `[Parent, Subcategory]`: `[Evaluation, Metrics & Scoring]`, `[Evaluation, Benchmarks]`, `[Research, Qualitative]`, `[Research, Quantitative]`

If the term already has quick-reference bullets but no full entry yet, keep
the bullets as-is and just append the `**Glossary Term Entry Location**`
line. If the term's full entry already exists elsewhere under a different
name (e.g. `eval` → `evaluation`), rename the heading to match and fix any
bullet text that no longer makes sense after the rename.

## 4. Verify the anchor

Hugo auto-generates heading IDs by lowercasing the heading and
collapsing each run of non-alphanumeric characters to a single hyphen —
**except apostrophes and en-dashes, which are stripped with no hyphen
inserted.** This breaks the naive guess:

| Heading | Wrong guess | Actual anchor |
|---|---|---|
| `A/B test` | `#a-b-test` | `#ab-test` |
| `Goodhart's law` | `#goodhart-s-law` | `#goodharts-law` |
| `Cohen's kappa coefficient` | `#cohen-s-kappa-coefficient` | `#cohens-kappa-coefficient` |
| `Flesch–Kincaid readability tests` | `#flesch-kincaid-readability-tests` | `#fleschkincaid-readability-tests` |

## 5. Verify with a build

```bash
hugo 2>&1 | tail -30                      # confirm it builds with no warnings
grep -o 'id="[a-z0-9-]*"' public/<category-path>/index.html | grep <slug>
grep -oE 'href="[^"]*#<slug>"' public/quick-reference/index.html
rm -rf public/ resources/_gen/            # build artifacts — not tracked, don't leave around
```

Confirm the `id=` on the category page matches the `href=` used in both the
quick-reference link and any Related Terms links pointing at it. Fix and
rebuild if they don't match — don't ship an unverified anchor.
