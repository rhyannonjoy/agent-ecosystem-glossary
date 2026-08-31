---
name: determine-glossary-addition
description: >-
  Evaluate whether a term should be added to the Agent Ecosystem Glossary by
  analyzing its relevance, novelty, and fit within existing categories.
---

# Determine Glossary Addition

This skill provides a framework for evaluating whether a term from external
content should be added to the Agent Ecosystem Glossary.

## 1. Relevance Assessment

### Core Question

**Does this term describe something essential to understanding agents, their components, their behavior, or their evaluation?**

### Relevance Criteria

| Criterion | Weight | Description |
|---|---|---|
| **Agent-Centric** | High | Term directly relates to agent architecture, behavior, or evaluation |
| **Ecosystem Coverage** | High | Fills a gap in current glossary coverage of the agent ecosystem |
| **Practical Utility** | Medium | Term helps practitioners build, evaluate, or secure agents |
| **Research Foundation** | Medium | Term appears in peer-reviewed research or industry standards |
| **Specificity** | Low | Term is specific enough to warrant its own entry, isn't a synonym |

### Exclusion Triggers

- Term is too general - "software," "algorithm"
- Term is a brand name or product, use `add-tool/SKILL` instead
- Term is a synonym for existing entry - e.g., "AI" vs "LLM"
- Term is too niche; mentioned once in passing

## 2. Novelty Check

### Step 2.1: Search Existing Glossary

Before proposing addition, verify term does not already exist:

```bash
# Check quick-reference.md for existing stubs
grep -i "### <term>" content/quick-reference.md

# Check category pages for existing entries
grep -i "## <term>" content/anatomy/_index.md content/interaction/_index.md \
  content/evaluation/_index.md content/evaluation/benchmarks.md \
  content/evaluation/metrics.md content/research/_index.md \
  content/research/qualitative.md content/research/quantitative.md \
  content/search/_index.md
```

### Step 2.2: Identify Synonyms

If term already exists under different name:
- Use existing name - "eval" → "evaluation"
- Update existing entry if new context adds value
- Do not create duplicate entries

### Step 2.3: Assess Overlap

If term is closely related to existing entry:
- Consider expanding existing entry with new section
- Only add new entry if term has distinct definition, purpose, and example
- Cross-link related terms in both directions

## 3. Category Placement

### Decision Matrix

| If the term describes... | Place in... |
|---|---|
| What agents _are_: components, training, structure | `content/anatomy/_index.md` |
| What agents _do_: behavior, commands, communication | `content/interaction/_index.md` |
| How to measure agent output | `content/evaluation/_index.md` |
| Specific benchmark datasets | `content/evaluation/benchmarks.md` |
| Output metrics | `content/evaluation/metrics.md` |
| Research methodology | `content/research/_index.md` |
| Non-numerical research methods | `content/research/qualitative.md` |
| Statistical methods | `content/research/quantitative.md` |
| How agents retrieve information | `content/search/_index.md` |

### Ambiguity Resolution

If term could fit multiple categories:
1. Check how term is worded in quick-reference bullets
2. "statistical measure" → `research/quantitative.md`
3. "evaluation metric" → `evaluation/metrics.md`
4. "agent component" → `anatomy/_index.md`
5. If still ambiguous, ask user for clarification

## 4. Quality Assessment

### Entry Requirements
Each term must support:

**Definition**: One or two clauses, semicolon-joined, lowercase except proper nouns/acronyms
- Must be precise enough to distinguish from related terms
- Must not be circular

**Purpose**: Why it matters / how it's used
- Must explain practical utility for agent practitioners
- Must connect to real-world agent systems

**Example**:
- Concrete instance from literature, research, or practice
- Must be verifiable, cite source if possible

**Related Terms**: 2-4 cross-references
- Prefer terms that already exist as full entries
- Cross-link both directions for genuine pairings
- Use `{{< relref >}}` syntax only

### Quality Red Flags

- Definition is vague or overly broad
- Purpose is unclear or trivial
- Example is hypothetical or unverifiable
- Related terms are forced or irrelevant

### Source Handling
- Do **not** add Source field unless explicitly asked
- If adding: use singular for one source, plural for multiple
- Place link on same line as label, no newline before link

## Output Format

### If Adding: Provide
1. **Category**: Where entry belongs
2. **Heading**: Exact term name (case-sensitive)
3. **Definition**: Draft definition following format
4. **Purpose**: Draft purpose following format
5. **Example**: Concrete example (if available)
6. **Related Terms**: 2-4 cross-references
7. **Quick Reference**: 2-3 bullet points for stub
8. **Anchor**: Auto-generated heading ID

### If Not Adding: Provide
1. **Reason**: Why term should not be added
2. **Alternative**: Suggestion (expand existing term, add tool entry, etc.)
3. **Partial Content**: Any useful definition/purpose that could be merged

## 8. Verification Checklist

Before finalizing addition:
- [ ] Term does not already exist in glossary
- [ ] Term is not a synonym for existing entry
- [ ] Category placement is clear and correct
- [ ] Definition is precise and non-circular
- [ ] Purpose explains practical utility
- [ ] Example is concrete and verifiable
- [ ] Related Terms are genuine pairings
- [ ] Anchor will be auto-generated correctly
- [ ] Source meets quality criteria (if adding Source field)
- [ ] Quick-reference bullets are scannable
