---
name: add-tool
description: Add a tool entry to the Agent Ecosystem Glossary as a quick reference in the Tools category page, following the established format for tools.
---

# Add Tool Skill

## Overview

This skill adds tool entries to the Agent Ecosystem Glossary. Tools are external products, platforms, or services 
that are foundational to the agent ecosystem.

## Guidelines

### Scope
- Keep descriptions **brief and factual** (what the tool does, not why it's better).
- Link to external documentation rather than duplicating content.

### Format

Tools are added to `content/tools/_index.md` as a Markdown table:

```markdown
## Tool Name

| **Name** | **Description** |
| --- | --- |
| [Website](https://example.com) | Brief description of what the tool does |
```

### Entry Structure

Each tool entry should include:
1. **Name**: The tool's official name, which links to its website or documentation
2. **Description**: One-sentence description of what the tool does

### Example

```markdown
## Anthropic

| **Name** | **Description** |
| --- | --- |
| [Anthropic](https://anthropic.com) | AI safety company that develops Claude LLMs and related tools |
```

## Steps

1. Read `content/tools/_index.md` to understand the current structure
2. Add the new tool entry to the appropriate section in the table
3. Ensure the entry follows the format guidelines
4. Verify the link is correct and accessible

## Notes

- Tools are NOT full glossary entries with Definition/Purpose/Example sections
- Add tools to `quick-reference.md` as individual entries that point to the main tool table
- Focus on factual descriptions, not promotional language
- Update the table of contents if needed