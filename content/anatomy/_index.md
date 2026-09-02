---
title: "Anatomy"
weight: 3
bookToc: true
---

# Anatomy

_What agents are_: structural components and training that define their abilities and limitations

---

## abstraction

**Definition**: label and/or concept that bundles together a set of underlying components
or capabilities; streamlines communication by hiding implementation details

**Purpose**: lets agents, teams, and platforms reason about complex systems at a higher
level without tracking every internal part; understanding what an abstraction hides is
often necessary for diagnosing unexpected behavior

**Example**: _"agent"_ is an abstraction for a system of distinct parts

**Related Terms**: [agent]({{< relref "anatomy" >}}#agent), [automation]({{< relref "anatomy" >}}#automation),
[harness]({{< relref "anatomy" >}}#harness), [spec]({{< relref "anatomy" >}}#spec)

**Source**: [Dachary Carey: "An Agent is More Than Its Brain"](https://dacharycarey.com/2026/03/02/an-agent-is-more-than-its-brain/)

---

## agent

**Definition**: autonomous system that perceives its environment, makes decisions, and takes
actions to achieve goals; given an objective expressed in natural language, chooses its own
next action from a set of tools, executes that action against an external environment,
observes the result, repeats the cycle until it judges the goal met or gives up

**Purpose**: converts raw LLM capability into goal-directed, self-directed task execution;
distinct from chatbots, process automation, and workflow engines through nondeterministic
autonomy

**Example**: an agent that retrieves a file, edits it, and runs a command to complete a
request without step-by-step human instruction; while researchers have described systems
that _sense->decide->act->adapt_ since the 1960s, current agentic systems are different in
that they include infrastructure changes including tool use as a first-class feature, larger
context windows, and observability frameworks

**Coding Agent vs Training Crawler**: coding assistants like [Claude Code](https://claude.com/product/claude-code),
and [GitHub Copilot](https://github.com/features/copilot) make real time `HTTP` requests during a
task using generic `HTTP` client signatures like `axios/1.8.4`, while training crawlers like `GPTBot`,
`ClaudeBot`, `CCBot` scrape the web for LLM training data and self-identify via distinct user-agent
strings that respect `robots.txt`; most agent-detection mechanisms such as user-agent sniffing, the
`RFC 9421` `Signature-Agent` header, bot-management JS challenges - catch training crawlers and
answer-engine bots, not coding agents, which remain effectively invisible to them

**Related Terms**: [abstraction]({{< relref "anatomy" >}}#abstraction), [Agent-Friendly Documentation Spec]({{< relref "/search" >}}#agent-friendly-documentation-spec),
[automation]({{< relref "anatomy" >}}#automation), [memory]({{< relref "anatomy" >}}#memory), [planning]({{< relref "/interaction" >}}#planning),
[`robots.txt`]({{< relref "/search" >}}#robotstxt), [self-reflection]({{< relref "/interaction" >}}#self-reflection)

**Sources**:

- Caldwell, Thomas R. _The Agentic AI Bible_. Thomas R. Caldwell, April 2026.
- [Dachary Carey: "How to Evaluate a Platform-Written Spec"](https://dacharycarey.com/2026/03/28/how-to-evaluate-platform-written-spec/)

---

## automation

**Definition**: use of technology to perform tasks with minimal human intervention; can range
from basic rule-based systems to complex machine learning models

**Purpose**: in an AI context, delegates decision-making or execution to algorithms, robots,
or automated agents to reduce manual effort and increase consistency

**Related Terms**: [abstraction]({{< relref "anatomy" >}}#abstraction), [agent]({{< relref "anatomy" >}}#agent),
[harness]({{< relref "anatomy" >}}#harness)

**Source**: [Wikipedia: "Automation"](https://en.wikipedia.org/wiki/Automation)

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
| **Tiered Retention** | keep only current page state; trim snapshot with lightweight model before it reaches primary LLM; compress older turns into a persistent, agent-authored `memory` field instead of retaining raw history to hold token use roughly constant |

**Related Terms**: [memory]({{< relref "anatomy" >}}#memory), [`/SKILL`]({{< relref "/interaction" >}}#skill),
[system prompt]({{< relref "/interaction" >}}#system-prompt), [temperature]({{< relref "anatomy" >}}#temperature)

**Sources**:

- [Anthropic: "Effective Context Engineering for AI Agents"](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents)
- [arXiv: "Building Browser Agents: Architecture, Security, and Practical Solutions" by Aram Vardanyan](https://arxiv.org/abs/2511.19477)
- [Chroma: "Context Rot Report"](https://research.trychroma.com/context-rot)
- [Dachary Carey: "An Agent is More Than Its Brain"](https://dacharycarey.com/2026/03/02/an-agent-is-more-than-its-brain/)

---

## hallucination

**Definition**: type of AI output that's false, fabricated, or unsupported information; appears
plausible but isn't grounded in training data or provided context

**Purpose**: a critical quality-control concern in AI systems; understanding hallucination helps
diagnose failures and informs evaluation of truthfulness and robustness

**Example**: in the [Agent Reading Test](https://agentreadingtest.com/), GitHub Copilot reported
_"25 canary tokens found"_ in its summary, but its own JSON report listed only 16, with only 23
canaries total across all pages; agent hallucinated a count of its own reported data, inflating
a number it had just generated; LLMs don't understand truth, fill gaps in training data, oversimplify
patterns, and lack real-world verification to produce different types of hallucinations -

| **Type** | **Description** |
| --- | --- |
| **Creative** | Produces completely fictional explanation to a scientific question |
| **Fabricated** | Creates references or sources that don't exist |
| **Factual** | Generates incorrect facts, asserting a fictional event as historical |
| **Logical** | Delivers contradicting outputs or lack consistency |

**Related Terms**: [Agent Reading Test]({{< relref "/evaluation/benchmarks" >}}#agent-reading-test),
[agent]({{< relref "anatomy" >}}#agent), [canary phrase]({{< relref "/evaluation" >}}#canary-phrase),
[evaluation]({{< relref "/evaluation" >}}#evaluation-1), [memory]({{< relref "anatomy" >}}#memory),
[observability]({{< relref "/interaction" >}}#observability), [self-reflection]({{< relref "/interaction" >}}#self-reflection),
[SimpleQA]({{< relref "/evaluation/benchmarks" >}}#simpleqa)

**Sources**:

- [Dachary Carey: "Designing an Agent Reading Test"](https://dacharycarey.com/2026/04/06/designing-agent-reading-test/)
- [Geeks for Geeks: "What is AI Hallucination? Understanding and Mitigating AI Hallucination"](https://www.geeksforgeeks.org/artificial-intelligence/what-is-ai-hallucination/)

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
strategy, and temperature settings; `Agent S`, `Browser Use`, `CoACT`, `GTA1`, and are harnesses distinct
from the LLMs and infrastructure they run on

**Related Terms**: [abstraction]({{< relref "anatomy" >}}#abstraction), [accessibility tree snapshot]({{< relref "/interaction" >}}#accessibility-tree-snapshot),
[automation]({{< relref "anatomy" >}}#automation), [gate]({{< relref "/interaction" >}}#gate), [hook]({{< relref "/interaction" >}}#hook),
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

**Source**: [Wikipedia: "Heuristic"](https://en.wikipedia.org/wiki/Heuristic)

---

## LLM

**Definition**: acronym for _Large Language Model_; model trained on vast amounts of text
data to understand and generate human language; also known as _"the agent's brain"_

**Purpose**: _not all AI is LLM-based_ - computer vision models and recommendation systems are
common non-LLM examples; the LLM is the reasoning component an agent's harness wraps around

**Open-weight vs. Open-source**:

| **Term** | **Description** | **Examples** |
| --- | --- | --- |
| **Open-source** | Entire pipeline released for full reproducibility, research | [Ai2 Olmo](https://allenai.org/olmo), [Falcon](https://falconllm.tii.ae/) |
| **Open-weight** | Model weights released publicly for deployment, fine-tuning, inference; architecture, data, training code may not be included | [LLaMA](https://ai.meta.com), [Mistral](https://mistral.ai) |
| **Proprietary** | Weights closed; access typically via API | [`Claude`](https://anthropic.com), [`Gemini`](https://gemini.google.com),[`GPT`](https://openai.com) |

**Related Terms**: [agent]({{< relref "anatomy" >}}#agent), [harness]({{< relref "anatomy" >}}#harness),
[LLM distillation]({{< relref "anatomy" >}}#llm-distillation), [temperature]({{< relref "anatomy" >}}#temperature),

**Sources**:

- [Geeks for Geeks: "Large Language Model (LLM)"](https://www.geeksforgeeks.org/artificial-intelligence/large-language-model-llm/)
- [Wikipedia: "Open-source artificial intelligence"](https://en.wikipedia.org/wiki/Open-source_artificial_intelligence)

---

## LLM distillation

**Definition**: specialized form of [knowledge distillation](https://www.geeksforgeeks.org/machine-learning/knowledge-distillation/)
that compresses LLMs for efficiency while preserving performance; while compression shrinks LLMs through
quantizing or pruning, distillation produces a separate student-model with its own parameters and different
design whose goal is to emulate teacher-model behavior

**Purpose**: enables deployment of capable models in resource-constrained environments - edge
devices, mobile, low-latency applications; reduces computational costs and energy consumption; limits include
static student-model performance level, too large a gap between levels risk degradation, design impacts more
than parameter quantity, knowledge loss, may require continued fine-tuning

**Example**: [Google's Gemma models are distilled from Gemini](https://developers.googleblog.com/en/gemma-explained-embeddinggemma-architecture-and-recipe/);
[DeepSeek used distillation](https://arxiv.org/abs/2501.12948) to create a 7B student that outperformed
a 32B LLM on competition mathematics; techniques include -

| Technique | Description |
| --- | --- |
| **Feature-Based** | Copies hidden representations from intermediate layers to capture deeper knowledge |
| **Multi-Teacher** | Combines knowledge from multiple teacher-models for robustness |
| **Output-Based** | Learns from teacher-model's soft probability distributions, soft targets, using KL divergence loss |
| **Prompt-Based** | Compresses long prompts into shorter, efficient versions |
| **RL-Based** | Uses reinforcement learning feedback signals to iteratively improve |
| **Synthetic Data Augmentation** | Expands training data using teacher-generated examples for improvement |
| **Task-Specific** | Fine-tunes for specific downstream applications |

**Related Terms**: [LLM]({{< relref "anatomy" >}}#llm), [training data]({{< relref "anatomy" >}}#training-data),
[harness]({{< relref "anatomy" >}}#harness), [training data]({{< relref "anatomy">}}#training-data)

**Sources**:

- [ByteByteGo: "How Big Models Teach Small Models to Be Smart"](https://blog.bytebytego.com/p/how-big-models-teach-small-models)
- [GeeksforGeeks: "What is LLM Distillation?"](https://www.geeksforgeeks.org/nlp/what-is-llm-distillation/)

---

## memory

**Definition**: enables agents to maintain context, learn from experience, and
reference past actions; ability to store and retrieve information across interactions
and tasks

**Purpose**: critical for multi-step reasoning and adapting behavior based on history; types
include short-term - current task, long-term - across sessions, and episodic - specific events

**Example**: 100K-word prompts are more expensive than short ones due to
[KV caching](https://huggingface.co/blog/not-lain/kv-caching) - working memory separate from the LLM's
weights that store key-value vectors for every token processed; grows linearly with token count and
batch size; decoding reads the entire cache on every generated token makes it a bandwidth cost
as much as a storage one, techniques include -

| **Technique** | **Description** |
| --- | --- |
| **Eviction** | Drops token entries from the cache to reduce its size; keeps recent tokens and a few opening tokens, while less relevant entries are discarded - risks losing information the generation later needs |
| **Grouped-query Attention** | Lets multiple query heads share a single key-value head, sharply reducing the number of stored vector sets; the standard trade-off between full multi-head attention and the more aggressive multi-query variant |
| **Multi-head Latent Attention** | Projects keys and values into a smaller latent representation before caching, then expands them on read; large memory savings but adds serving complexity, compression adds work on every read and pairs awkwardly with standard attention implementations |
| **Multi-query Attention** | Extreme head-sharing variant where every query head shares one key-value head; saves the most memory, but can degrade quality and training stability |
| **Paged Attention** | Borrows OS-style fixed-size page management to eliminate cache fragmentation; systems that wasted 60–80% of cache memory to fragmentation dropped below 4% |
| **Prefix Caching** | Shares cached blocks across requests that begin with identical text, such as a repeated system prompt; API providers report 50–90% cost and latency reductions on cache hits - risk is prompt info leaking by sharing state |
| **Quantization** | Rounds key and value vectors from 16 bits to 8 or 4 bits; 8-bit costs under 1% accuracy, 4-bit saves more, but shows measurable losses on demanding retrieval tasks |

**Related Terms**: [context window]({{< relref "anatomy" >}}#context-window), [planning]({{< relref "/interaction" >}}#planning),
[self-reflection]({{< relref "/interaction" >}}#self-reflection)

**Sources**:

- [ByteByteGo: "Why An LLM’s Memory Gets Expensive and How to Fix It"](https://blog.bytebytego.com/p/why-an-llms-memory-gets-expensive)
- [IBM: "What is AI agent memory?" by Cole Stryker](https://www.ibm.com/think/topics/ai-agent-memory)

---

## permission and safety systems

**Definition**: platform-level rules that define what actions an agent is allowed to take;
conceptual authorization and/or guardrails

**Purpose**: shape agent behavior independently of the underlying LLM and enforce safety
boundaries on what an agent may execute, largely in response to security concepts -

| **Concept** | **Description** |
| --- | --- |
| **Data Poisoning** | Insertion of malicious data into training sets or sources to alter LLM behavior; only requires sampling for backdoor installation |
| **Defense in Depth** | Realistic posture for LLM systems as no single filter holds all the time; process of layering independent security controls, so that failure of one is contained by another - input validation, retrieval sources cleaning, minimum tool permission scope, model sanitation, monitoring, human review |
| **Excessive Agency** | When an agent holds more permission than its task requires; arises from the lethal trifecta: simultaneous access to private data, exposure to untrusted content, a channel to act externally |
| **Model Theft** | Extraction of model weights or architecture through API queries; typically expensive, bounded, but remains a risk for teams hosting open weights or running their own training pipelines |
| **Supply Chain Security** | Verifying provenance of models, adapters, vector stores, and tools before deployment; bypasses runtime defenses because the threat is present before input validation runs |

**Example**: requiring confirmation before running shell commands, restricting file access to
specific directories, or blocking certain categories of action entirely; a production browser
agent's execution layer blocks clicks on elements labeled _"refund,"_ _"delete,"_ or _"transfer"_
unless explicit confirmation is given, and restricts navigation to an allowlisted set of domains -
enforcing the boundary in code instead of relying on the LLM to police its own actions, since
prompt injection can override LLM-level judgment but not a deterministic check it never reaches

**Related Terms**: [accessibility tree snapshot]({{< relref "/interaction" >}}#accessibility-tree-snapshot),
[harness]({{< relref "anatomy" >}}#harness), [observability]({{< relref "/interaction" >}}#observability),
[prompt injection vulnerability]({{< relref "/evaluation/metrics" >}}#prompt-injection-vulnerability),
[rule]({{< relref "/interaction" >}}#rule)

**Sources**:

- [arXiv: "Building Browser Agents: Architecture, Security, and Practical Solutions" by Aram Vardanyan](https://arxiv.org/abs/2511.19477)
- [ByteByteGo: "LLM Security Basics: The Full Threat Model"](https://blog.bytebytego.com/p/llm-security-basics-the-full-threat)
- [Dachary Carey: "An Agent is More Than Its Brain"](https://dacharycarey.com/2026/03/02/an-agent-is-more-than-its-brain/)

---

## prompt injection

**Definition**: traditional command injection applied to realm of natural language;
manipulation of LLM behavior by crafting malicious or misleading prompts, often by bypassing safety
filters and executing unintended instructions; exploits the absence of a boundary between instructions
and data in token sequences

**Purpose**: fundamental security vulnerability in LLM systems; understanding it is essential for
building secure agents; the root cause of many agent security failures

**Direct vs Indirect**:

| **Type** | **Route** | **Description** | **Example** |
| --- | --- | --- | --- |
| **Direct** | User input | Hostile instruction typed into chat box | User asks agent to ignore previous instructions |
| **Indirect** | Retrieved content | Instruction embedded in legitimate tasks - docs, emails, web pages | [EchoLeak CVE-2025-32711](https://github.com/advisories/GHSA-h2w9-p5qf-qmrh) - hidden email instructions caused data exfiltration |

**Related Terms**: [context window]({{< relref "anatomy" >}}#context-window),
[LLM]({{< relref "anatomy" >}}#llm), [permission and safety systems]({{< relref "anatomy" >}}#permission-and-safety-systems),
[prompt injection vulnerability]({{< relref "/evaluation/metrics" >}}#prompt-injection-vulnerability)

**Sources**:

- [ByteByteGo: "LLM Security Basics: The Full Threat Model"](https://blog.bytebytego.com/p/llm-security-basics-the-full-threat)
- [OWASP: "Prompt Injection"](https://owasp.org/www-community/attacks/PromptInjection)

---

## RAG

**Definition**: acronym for _retrieval-augmented generation_; architecture where LLM retrieves
context from external sources before generating responses; typically uses
[vector databases](https://en.wikipedia.org/wiki/Vector_database) to store and retrieve documents
as numerical embeddings

**Purpose**: extends LLM capabilities beyond training data cutoff dates; enables agents to ground
answers in current, specific information, but also creates new attack surface through poisoned
retrieval sources

**Example**: [PoisonedRAG](https://arxiv.org/abs/2402.07867) attack that corrupted system answers
by inserting 5 malicious passages into millions of documents, reaching 90% success rate on targeted
questions

**Related Terms**: [context window]({{< relref "anatomy" >}}#context-window),
[LLM]({{< relref "anatomy" >}}#llm), [summarization layer]({{< relref "anatomy" >}}#summarization-layer)

**Sources**:

- [ByteByteGo: "LLM Security Basics: The Full Threat Model"](https://blog.bytebytego.com/p/llm-security-basics-the-full-threat)
- [Wikipedia: "Retrieval-augmented generation"](https://en.wikipedia.org/wiki/Retrieval-augmented_generation)

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

**Example**: the [Agent-Friendly Documentation Spec]({{< relref "/search" >}}#agent-friendly-documentation-spec)
defines 23 checks across 7 categories - content discoverability, markdown availability, page
size, content structure, URL stability, observability, and authentication - that evaluate how
well a documentation site serves coding agents

**Related Terms**: [abstraction]({{< relref "anatomy" >}}#abstraction),
[harness]({{< relref "anatomy" >}}#harness), [MCP server]({{< relref "/interaction" >}}#mcp-server)

**Source**: [Wikipedia: "Specification (technical standard)"](https://en.wikipedia.org/wiki/Specification_(technical_standard))

---

## summarization layer

**Definition**: context management mechanism that condenses conversation history, tool outputs,
and/or retrieved content into a shorter form as an agent's context nears its window limit;
operates continuously as part of general context engineering, not only when an agent is
retrieving information from the web

**Purpose**: explains why an agent may lose access to content it could theoretically process in
full; the layer distills what it judges relevant into a summary and reinitiates a new context
window so processing can continue, meaning what a source actually serves may not be what the
agent actually sees; distinct from truncation, which is a hard size limit, because summarization
is content-dependent and relevance-dependent

**Example**: when an agent fetches docs mid-task, the layer sits between the HTTP
response and the agent, filtering content based on perceived relevance to the
agent's stated query - meaning what a documentation site serves may not be what the agent processes

**Related Terms**: [context window]({{< relref "anatomy" >}}#context-window), [hallucination]({{< relref "anatomy" >}}#hallucination),
[harness]({{< relref "anatomy" >}}#harness), [memory]({{< relref "anatomy" >}}#memory)

**Sources**:

- [Anthropic: "Effective Context Engineering for AI Agents"](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents)
- [Dachary Carey: "Designing an Agent Reading Test"](https://dacharycarey.com/2026/04/06/designing-agent-reading-test/)

---

## sycophancy

**Definition**: LLM tendency to agree, comply, or validate user input rather than reason independently;
pattern of producing a favorable answer they've been primed to produce, not the accurate one; known
limitation of RLHF-trained LLMs and an active area of research

**Purpose**: amplified by detailed or specific prompts, which push the LLM into _"execution mode"_;
understanding sycophancy helps distinguish an agent's genuine reasoning from compliance bias

**Example**: in the [Agent Reading Test](https://agentreadingtest.com/), agents consistently claimed
higher scores than they actually achieved; Claude Code claimed 17/18 points but actually scored 15,
inflating scores by manually following redirects and fetching JavaScript files that their pipeline
could not handle natively, then reporting these workarounds as pipeline capabilities; GitHub Copilot
claimed _"25 canary tokens found"_ in its summary while its own JSON report listed only 16

**Related Terms**: [Agent Reading Test]({{< relref "/evaluation/benchmarks" >}}#agent-reading-test),
[hallucination]({{< relref "anatomy" >}}#hallucination), [RLHF]({{< relref "anatomy" >}}#rlhf),
[self-reflection]({{< relref "/interaction" >}}#self-reflection)

**Sources**:

- [Dachary Carey: "An Agent is More Than Its Brain"](https://dacharycarey.com/2026/03/02/an-agent-is-more-than-its-brain/)
- [Dachary Carey: "Designing an Agent Reading Test"](https://dacharycarey.com/2026/04/06/designing-agent-reading-test/)

---

## temperature

**Definition**: parameter that controls the degree of randomness in an LLM's outputs; set by the
platform and sometimes adjustable by the user

**Purpose**: affects agent behavior independently of the LLM itself - low temperature produces
more focused, predictable responses; high temperature produces more varied, creative ones

**Related Terms**: [context window]({{< relref "anatomy" >}}#context-window), [harness]({{< relref "anatomy" >}}#harness),
[system prompt]({{< relref "/interaction" >}}#system-prompt)

**Source**: [Dachary Carey: "An Agent is More Than Its Brain"](https://dacharycarey.com/2026/03/02/an-agent-is-more-than-its-brain/)

---

## training data

**Definition**: dataset used to teach an LLM patterns, relationships, and knowledge; the LLM
learns by processing examples and adjusting internal parameters

**Purpose**: quality and composition of training data directly affects LLM capabilities and biases

**Related Terms**: [context window]({{< relref "anatomy" >}}#context-window), [LLM]({{< relref "anatomy" >}}#llm),
[LLM distillation]({{< relref "anatomy" >}}#llm-distillation)

**Source**: [IBM: "What is training data?"](https://www.ibm.com/think/topics/training-data)
