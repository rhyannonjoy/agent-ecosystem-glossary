---
title: "Anatomy"
weight: 3
bookToc: true
---

# Anatomy

_What agents are_: structural components and training that define their abilities and limitations.

---

## abstraction

**Definition**: label and/or concept that bundles together a set of underlying components
or capabilities; streamlines communication by hiding implementation details

**Purpose**: lets agents, teams, and platforms reason about complex systems at a higher
level without tracking every internal part; understanding what an abstraction hides is
often necessary for diagnosing unexpected behavior

**Example**: "agent" is an abstraction for a collection of distinct parts

**Related Terms**: [agent]({{< relref "anatomy" >}}#agent), [automation]({{< relref "anatomy" >}}#automation)
 [harness]({{< relref "anatomy" >}}#harness), [spec]({{< relref "anatomy" >}}#spec)

**Source**:

- [Dachary Carey: "An Agent is More Than Its Brain"](https://dacharycarey.com/2026/03/02/an-agent-is-more-than-its-brain/)

---

## agent

**Definition**: autonomous system that perceives its environment, makes decisions, and takes
actions to achieve goals; typically LLM-based, able to use tools, maintain memory, and
execute multi-step tasks

**Purpose**: converts raw LLM capability into goal-directed, self-directed task execution;
distinct from chatbots, process automation, and workflow engines through autonomy

**Example**: an agent that retrieves a file, edits it, and runs a command to complete a
request without step-by-step human instruction

**Related Terms**: [abstraction]({{< relref "anatomy" >}}#abstraction), [automation]({{< relref "anatomy" >}}#automation),
[memory]({{< relref "anatomy" >}}#memory), [planning]({{< relref "/interaction" >}}#planning),
[self-reflection]({{< relref "/interaction" >}}#self-reflection)

---

## automation

**Definition**: use of technology to perform tasks with minimal human intervention; can range
from basic rule-based systems to complex machine learning models

**Purpose**: in an AI context, delegates decision-making or execution to algorithms, robots,
or automated agents to reduce manual effort and increase consistency

**Related Terms**: [abstraction]({{< relref "anatomy" >}}#abstraction), [agent]({{< relref "anatomy" >}}#agent),
[harness]({{< relref "anatomy" >}}#harness)

---

## context window

**Definition**: total amount of text, measured in tokens, an LLM can process at once; includes
system prompt, conversation history, and any injected context

**Purpose**: bounds what information is directly available to the LLM during a given interaction;
content outside the window is not directly accessible

**Example**: agent platforms handle conversations approaching the limit through
summarization, selective truncation, or compression; quality of context window management
strategy determines whether agents retain earlier instructions or _"forget"_ context
in a few ways:

| **Challenge** | **Description** |
| --- | --- |
| **Compaction** | LLM summarization / rewriting, or server-side opaque compression |
| **Context Rot** | Performance degradation as length increases ~30k+ tokens |
| **Lost in the Middle** | LLMs use info at context beginning, end more than middle |

**Related Terms**: [memory]({{< relref "anatomy" >}}#memory), [`/SKILL`]({{< relref "/interaction" >}}#skill),
[system prompt]({{< relref "/interaction" >}}#system-prompt), [temperature]({{< relref "anatomy" >}}#temperature)

**Sources**:

- [Anthropic: "Effective Context Engineering for AI Agents"](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents)
- [Chroma: "Context Rot Report"](https://research.trychroma.com/context-rot)
- [Dachary Carey: "An Agent is More Than Its Brain"](https://dacharycarey.com/2026/03/02/an-agent-is-more-than-its-brain/)

---

## hallucination

**Definition**: type of AI output that's false, fabricated, or unsupported information; appears
plausible but isn't grounded in training data or provided context

**Purpose**: a critical quality-control concern in AI systems; understanding hallucination helps
diagnose failures and informs evaluation of truthfulness and robustness

**Related Terms**: [agent]({{< relref "anatomy" >}}#agent), [evaluation]({{< relref "/evaluation" >}}#evaluation-1),
[memory]({{< relref "anatomy" >}}#memory), [observability]({{< relref "/interaction" >}}#observability),
[self-reflection]({{< relref "/interaction" >}}#self-reflection), [SimpleQA]({{< relref "/evaluation/benchmarks" >}}#simpleqa)

---

## harness

**Definition**: platform layer that wraps around an LLM; provides configuration, permission
settings, system prompts, and tools

**Purpose**: shapes agent behavior independently of the underlying LLM; agents sharing the same
LLM can behave very differently depending on their harness configuration; in computer-use agents,
forms the middle tier of a three-layer stack that includes an LLM below for perception and decision-making
and infrastructure above for managed environments; the same harness can run different LLMs
or infrastructure

**Example**: code search, file operations, shell execution, web access, content management
strategy, and temperature settings; Browser Use, Agent S, GTA1, and CoACT are harnesses distinct
from the LLMs and infrastructure they run on

**Related Terms**: [abstraction]({{< relref "anatomy" >}}#abstraction), [automation]({{< relref "anatomy" >}}#automation),
[gate]({{< relref "/interaction" >}}#gate), [hook]({{< relref "/interaction" >}}#hook),
[MCP server]({{< relref "/interaction" >}}#mcp-server),
[permission and safety systems]({{< relref "anatomy" >}}#permission-and-safety-systems),
[temperature]({{< relref "anatomy" >}}#temperature)

**Sources**:

- [Dachary Carey: "An Agent is More Than Its Brain"](https://dacharycarey.com/2026/03/02/an-agent-is-more-than-its-brain/)
- [o-mega: "AI Computer Use Benchmarks 2026: Top Agents Ranked"](https://o-mega.ai/articles/the-2025-2026-guide-to-ai-computer-use-benchmarks-and-top-ai-agents)

---

## heuristic

**Definition**: practical problem-solving approach that uses shortcuts or rules of thumb to find
satisfactory solutions; differs from algorithms that guarantee optimal solutions

**Purpose**: trades optimality for speed and feasibility when exhaustive search is impractical;
in agent systems, guides decision-making when perfect information or unlimited computation is
unavailable

**Example**: A* search, greedy algorithms, hand-crafted evaluation functions

**Related Terms**: [planning]({{< relref "/interaction" >}}#planning), [self-reflection]({{< relref "/interaction" >}}#self-reflection)

---

## LLM

**Definition**: acronym for _Large Language Model_; model trained on vast amounts of text
data to understand and generate human language; also known as _"the agent's brain"_

**Purpose**: not all AI is LLM-based - computer vision models and recommendation systems are
common non-LLM examples; the LLM is the reasoning component an agent's harness wraps around

**Example**: `GPT` - _Generative Pre-trained Transformer_, Claude, and Llama

**Related Terms**: [agent]({{< relref "anatomy" >}}#agent), [harness]({{< relref "anatomy" >}}#harness),
[temperature]({{< relref "anatomy" >}}#temperature)

---

## memory

**Definition**: in an agent context, ability to store and retrieve information across
interactions and tasks; enables agents to maintain context, learn from experience, and
reference past actions

**Purpose**: critical for multi-step reasoning and adapting behavior based on history; types
include short-term - current task, long-term - across sessions, and episodic - specific events

**Related Terms**: [context window]({{< relref "anatomy" >}}#context-window), [planning]({{< relref "/interaction" >}}#planning),
[self-reflection]({{< relref "/interaction" >}}#self-reflection)

---

## permission and safety systems

**Definition**: platform-level rules that define what actions an agent is allowed to take;
conceptual authorization and/or guardrails

**Purpose**: shape agent behavior independently of the underlying LLM and enforce safety
boundaries on what an agent may execute

**Example**: requiring confirmation before running shell commands, restricting file access to
specific directories, or blocking certain categories of action entirely

**Related Terms**: [harness]({{< relref "anatomy" >}}#harness), [observability]({{< relref "/interaction" >}}#observability),
[rule]({{< relref "/interaction" >}}#rule)

**Source**:

- [Dachary Carey: "An Agent is More Than Its Brain"](https://dacharycarey.com/2026/03/02/an-agent-is-more-than-its-brain/)

---

## RLHF

**Definition**: acronym for _reinforcement learning from human feedback_; training methodology in
which human evaluators rate LLM outputs and the ratings fine-tune the LLM toward preferred
behaviors; uses reward models to quantify preferences and reinforcement learning to optimize
the model; not immune to selection and human evaluation bias

**Purpose**: creates a strong instruction-following bias; LLMs trained with RLHF tend to
prioritize explicit user instructions, sometimes at the expense of broader context; aligns
models with human values and reduces harmful outputs

**Process**: SFT on instruction-response pairs → reward model trained
on human preference data → RL algorithm updates LLM to maximize reward → iterative refinement

| **Component** | **Description** |
| --- | --- |
| **DPO** | _Direct Preference Optimization_; eliminates separate reward model by using preference data directly |
| **KL Divergence** | Measures difference between original and updated model distributions; prevents reward hacking |
| **KTO** | _Kahneman-Tversky Optimization_; utility-based approach using binary feedback instead of paired preferences |
| **OOD Generalization** | _Out-of-distribution performance_; ability to handle scenarios not seen in training |
| **PPO** | _Proximal Policy Optimization_; stable RL algorithm using clipped objective function |
| **Reward Hacking** | Model manipulates reward system to get high scores without solving the actual problem |
| **Reward Model** | Neural network trained to predict human preferences; outputs scalar reward values |
| **RLAIF** | _Reinforced Learning from AI Feedback_; uses LLM instead of human annotators for preference labels |
| **SFT** | _Supervised fine-tuning_; initial step using high-quality instruction-response pairs |

| **Aspect** | **PPO** | **DPO** | **KTO** |
| --- | --- | --- | --- |
| **Objective** | Maximize reward, prevent large policy updates | Optimize policy based on human preferences using binary classification | Model alignment, maximize utility based on prospect theory |
| **Input** | Prompt and reward signal | Prompt and human preference pairs | Prompt and binary feedback |
| **Output** | Actions taken in environment | Actions taken in environment aligned with human preferences | LLM outputs with binary labels |
| **Learning Mechanism** | Policy gradients, clipped objective | Binary cross-entropy optimization on human preference data | Based on LLM alignment without complex preference models |
| **Network Components** | Separate policy and value networks | Single policy network | LLM framework, adapted to KTO methodology |
| **Feedback Mechanism** | Rewards from environment | Human preference data | Binary feedback on LLM outputs |
| **Stability** | Maintained by clipping mechanism | Preferences with dynamic per-example weighting | Focus on utility maximization |
| **Complexity** | Dual network, maximization with policy update stability | Bypasses explicit reward modeling, human preference optimizes policy | Reduces complexity for binary utility optimization |
| **Applicability** | General-purpose RL alignment | When human preference alignment crucial | When rapid alignment with human feedback desired |

**Related Terms**: [LLM]({{< relref "anatomy" >}}#llm), [permission and safety systems]({{< relref "anatomy" >}}#permission-and-safety-systems),
[sycophancy]({{< relref "anatomy" >}}#sycophancy), [system prompt]({{< relref "/interaction" >}}#system-prompt),
[training data]({{< relref "anatomy" >}}#training-data)

**Sources**:

- [Dachary Carey: "An Agent is More Than Its Brain"](https://dacharycarey.com/2026/03/02/an-agent-is-more-than-its-brain/)
- [Ionio: "A Comprehensive Guide to fine-tuning LLMs using RLHF" by Pranav Patel, Garima Saroj](https://www.ionio.ai/blog/a-comprehensive-guide-to-fine-tuning-llms-using-rlhf-part-1)

---

## spec

**Definition**: abbreviation for _specification_; implementation guide that informs everyone
building on a format exactly what to expect

**Purpose**: documents which fields exist, what values are valid, how files should be
structured, and what behavior is required versus optional

**Related Terms**: [abstraction]({{< relref "anatomy" >}}#abstraction), [harness]({{< relref "anatomy" >}}#harness),
[MCP server]({{< relref "/interaction" >}}#mcp-server)

---

## sycophancy

**Definition**: tendency in LLMs to agree with, validate, or comply with user input rather than
reasoning independently; known limitation of RLHF-trained LLMs and an active area of research

**Purpose**: amplified by detailed or specific prompts, which push the LLM into _"execution mode"_;
understanding sycophancy helps distinguish an agent's genuine reasoning from compliance bias

**Related Terms**: [hallucination]({{< relref "anatomy" >}}#hallucination), [RLHF]({{< relref "anatomy" >}}#rlhf),
[self-reflection]({{< relref "/interaction" >}}#self-reflection)

**Source**:

- [Dachary Carey: "An Agent is More Than Its Brain"](https://dacharycarey.com/2026/03/02/an-agent-is-more-than-its-brain/)

---

## temperature

**Definition**: parameter that controls the degree of randomness in an LLM's outputs; set by the
platform and sometimes adjustable by the user

**Purpose**: affects agent behavior independently of the LLM itself - low temperature produces
more focused, predictable responses; high temperature produces more varied, creative ones

**Related Terms**: [context window]({{< relref "anatomy" >}}#context-window), [harness]({{< relref "anatomy" >}}#harness),
[system prompt]({{< relref "/interaction" >}}#system-prompt)

**Source**:

- [Dachary Carey: "An Agent is More Than Its Brain"](https://dacharycarey.com/2026/03/02/an-agent-is-more-than-its-brain/)

---

## training data

**Definition**: dataset used to teach an LLM patterns, relationships, and knowledge; the LLM
learns by processing examples and adjusting internal parameters

**Purpose**: quality and composition of training data directly affects LLM capabilities and biases

**Related Terms**: [context window]({{< relref "anatomy" >}}#context-window), [LLM]({{< relref "anatomy" >}}#llm)
