---
title: "Benchmarks"
weight: 3
bookToc: true
parent: "evaluation"
---

# Benchmarks

Standardized datasets and tasks used to measure and compare LLM and/or agent
performance across capabilities.

---

## ARC

**Definition**: acronym for _AI2 Reasoning Challenge_; benchmark measuring question answering and
reasoning through more than 7,000 grade-school natural science questions

**Purpose**: evaluates an LLM's ability to reason over knowledge, includes an easy set and a
challenge set of harder questions requiring multi-step reasoning

**Related Terms**: [benchmark]({{< relref "/evaluation" >}}#benchmark), [evaluation]({{< relref "/evaluation" >}}#evaluation-1), [few-shot]({{< relref "/evaluation" >}}#few-shot), [MMLU]({{< relref "/evaluation/benchmarks" >}}#mmlu), [zero-shot]({{< relref "/evaluation" >}}#zero-shot)

**Source**: [arXiv: "Think you have Solved Question Answering? Try ARC" by Clark et al.](https://arxiv.org/abs/1803.05457)

---

## Chatbot Arena

**Definition**: open benchmark platform that pits two anonymous chatbots against each other;
users hold real-world conversations and vote on which they prefer before identities are revealed

**Purpose**: produces crowdsourced pairwise comparison data fed into statistical methods that
estimate scores and create approximate LLM rankings

**Example**: user preference votes across matchups generate an Elo-style ranking of anonymous LLMs

**Related Terms**: [benchmark]({{< relref "/evaluation" >}}#benchmark), [evaluation]({{< relref "/evaluation" >}}#evaluation-1), [LLM leaderboard]({{< relref "/evaluation" >}}#llm-leaderboard), [MT-Bench]({{< relref "/evaluation/benchmarks" >}}#mt-bench)

**Source**: [arXiv: "Chatbot Arena: An Open Platform for Evaluating LLMs by Human Preference" by Chiang et al.](https://arxiv.org/abs/2403.04132)

---

## GAIA2

**Definition**: successor to GAIA, _General AI Assistants_, addressing general assistant-style agency;
suite of 800 scenarios run inside Meta's Agents Research Environments with asynchronous dynamic events,
continuous time, and capability-differentiated scoring

**Purpose**: measures how a system handles assistant workloads by default, including changing conditions -
scenarios evolve while the agent works - rather than a frozen question set; introduced `capability splits`
that report separate scores for execution, search, adaptability, temporal reasoning, and ambiguity handling
instead of a single success rate

**Example**: dataset evaluates seven core capabilites - execution, search, adaptability, time,
ambiguity, Agent2Agent, and noise

**Related Terms**: [benchmark]({{< relref "/evaluation" >}}#benchmark), [evaluation]({{< relref "/evaluation" >}}#evaluation-1), [OSWorld]({{< relref "/evaluation/benchmarks" >}}#osworld)

**Sources**:

- [Hugging Face: "Datasets: meta-agents-research-environments/gaia2"](https://huggingface.co/datasets/meta-agents-research-environments/gaia2)
- [o-mega: "AI Computer Use Benchmarks 2026: Top Agents Ranked"](https://o-mega.ai/articles/the-2025-2026-guide-to-ai-computer-use-benchmarks-and-top-ai-agents)

---

## GSM8K

**Definition**: acronym for _Grade School Math 8K_; benchmark testing an LLM's mathematical reasoning
with a corpus of 8,500 grade-school math word problems; one of the most-cited reasoning benchmarks
used on public LLM leaderboards

**Purpose**: measures math reasoning where solutions are collected in natural language rather than
mathematical expressions

**Related Terms**: [benchmark]({{< relref "/evaluation" >}}#benchmark), [evaluation]({{< relref "/evaluation" >}}#evaluation-1), [few-shot]({{< relref "/evaluation" >}}#few-shot), [LLM leaderboard]({{< relref "/evaluation" >}}#llm-leaderboard), [MMLU]({{< relref "/evaluation/benchmarks" >}}#mmlu)

**Source**: [arXiv: "Training Verifiers to Solve Math Word Problems" by Cobbe et al.](https://arxiv.org/abs/2110.14168)

---

## HellaSwag

**Definition**: acronym for _Harder Endings, Longer contexts and Low-Shot Activities for Situations With Adversarial Generations_;
benchmark centered on common sense reasoning and natural language inference

**Purpose**: tasks LLMs with completing sentences by choosing among endings, including wrong answers
created through adversarial filtering; evaluates accuracy for few-shot and zero-shot categories

**Related Terms**: [adversarial filtering]({{< relref "/evaluation" >}}#adversarial-filtering), [benchmark]({{< relref "/evaluation" >}}#benchmark), [evaluation]({{< relref "/evaluation" >}}#evaluation-1), [Winogrande]({{< relref "/evaluation/benchmarks" >}}#winogrande)

**Source**: [arXiv: "HellaSwag: Can a Machine Really Finish Your Sentence?" by Zellers et al.](https://arxiv.org/abs/1905.07830)

---

## HumanEval

**Definition**: benchmark assessing an LLM's code generation performance through functional correctness;
LLMs are given programming problems and evaluated on whether generated solutions pass corresponding unit tests

**Purpose**: establishes a reproducible standard for coding ability using the pass@k metric

**Related Terms**: [benchmark]({{< relref "/evaluation" >}}#benchmark), [evaluation]({{< relref "/evaluation" >}}#evaluation-1), [functional correctness]({{< relref "/evaluation" >}}#functional-correctness), [pass@k]({{< relref "/evaluation/metrics" >}}#passk), [MBPP]({{< relref "/evaluation/benchmarks" >}}#mbpp), [SWE-bench]({{< relref "/evaluation/benchmarks" >}}#swe-bench)

**Source**: [arXiv: "Evaluating Large Language Models Trained on Code" by Chen et al.](https://arxiv.org/abs/2107.03374)

---

## MBPP

**Definition**: acronym for _Mostly Basic Programming Problems_, also known as
_Mostly Basic Python Problems_; code generation benchmark with a corpus of more than 900 coding tasks

**Purpose**: assesses functional correctness based on passing a set of test cases,
evaluated in few-shot and fine-tuned settings

**Related Terms**: [benchmark]({{< relref "/evaluation" >}}#benchmark), [evaluation]({{< relref "/evaluation" >}}#evaluation-1), [functional correctness]({{< relref "/evaluation" >}}#functional-correctness), [HumanEval]({{< relref "/evaluation/benchmarks" >}}#humaneval), [pass@k]({{< relref "/evaluation/metrics" >}}#passk)

**Source**: [arXiv: "Program Synthesis with Large Language Models" by Austin et al.](https://arxiv.org/abs/2108.07732)

---

## MMLU

**Definition**: acronym for _Massive Multitask Language Understanding_; benchmark assessing
breadth of knowledge, depth of natural language understanding and problem-solving from knowledge;
largely saturated by frontier LLMs, reducing its usefullness as a differentiator

**Purpose**: dataset of more than 15,000 multiple-choice general-knowledge questions across 57
subjects, scored by average per-subject accuracy in few-shot and zero-shot settings

**Related Terms**: [benchmark]({{< relref "/evaluation" >}}#benchmark), [bounded scoring]({{< relref "/evaluation" >}}#bounded-scoring), [evaluation]({{< relref "/evaluation" >}}#evaluation-1), [few-shot]({{< relref "/evaluation" >}}#few-shot), [LLM leaderboard]({{< relref "/evaluation" >}}#llm-leaderboard)

**Sources**:

- [AI Benchmarking Hub, llm-stats: "MMLU"](https://llm-stats.com/benchmarks/mmlu)
- [arXiv: "Measuring Massive Multitask Language Understanding" by Hendrycks et al.](https://arxiv.org/abs/2009.03300)

---

## MT-Bench

**Definition**: benchmark designed to test how well an LLM engages in dialogue and follows instructions;
dataset of open-ended multi-turn questions, 10 each across coding, extraction, knowledge, math, reasoning,
roleplay and writing

**Purpose**: uses `GPT-4` as a judge to evaluate the responses of other LLMs; created by the
same researchers behind Chatbot Arena

**Related Terms**: [benchmark]({{< relref "/evaluation" >}}#benchmark), [Chatbot Arena]({{< relref "/evaluation/benchmarks" >}}#chatbot-arena), [evaluation]({{< relref "/evaluation" >}}#evaluation-1), [functional correctness]({{< relref "/evaluation" >}}#functional-correctness), [LLM-as-judge]({{< relref "/evaluation" >}}#llm-as-judge)

**Source**: [arXiv: "Judging LLM-as-judge with MT-Bench and Chatbot Arena" by Zheng et al.](https://arxiv.org/abs/2306.05685)

---

## Online-Mind2Web

**Definition**: live-web benchmark for evaluating web agents on real, dynamic websites rather than cached snapshots; 300 tasks across 136 real sites, difficulty-tiered from Easy - 1-5 steps - through Hard - 11+ steps

**Purpose**: tests agents against real popups, layout changes, and anti-bot friction that static web datasets omit; replaced the older Mind2Web standard for live-web evaluation because agents face genuine environment variability

**Related Terms**: [benchmark]({{< relref "/evaluation" >}}#benchmark), [evaluation]({{< relref "/evaluation" >}}#evaluation-1), [WebArena]({{< relref "/evaluation/benchmarks" >}}#webarena), [WebVoyager]({{< relref "/evaluation/benchmarks" >}}#webvoyager)

**Source**: [o-mega: "AI Computer Use Benchmarks 2026: Top Agents Ranked"](https://o-mega.ai/articles/the-2025-2026-guide-to-ai-computer-use-benchmarks-and-top-ai-agents)

---

## OSWorld

**Definition**: benchmark evaluating whether an AI can operate a desktop environment - files, browsers, office
applications, system settings - through screen observation and virtual mouse and keyboard control;
`OSWorld-Verified` fixed flawed tasks to enable reproducible scoring while `OSWorld 2.0` includes
108 long-horizon professional workflows

**Purpose**: measures agentic computer use on real operating systems rather than simulated web pages;
`Verified` is the standard citation for desktop control while `2.0` resets a saturated benchmark
with task counts averaging hundreds of tool calls and median human completion times near 1.6 hours

**Example**: public task types include _"How do I change my Mac desktop background?"_ and
_"Update the bookkeeping sheet with my recent transactions over the past few days in the provided folder."_

**Related Terms**: [benchmark]({{< relref "/evaluation" >}}#benchmark), [evaluation]({{< relref "/evaluation" >}}#evaluation-1), [GAIA2]({{< relref "/evaluation/benchmarks" >}}#gaia2), [WebArena]({{< relref "/evaluation/benchmarks" >}}#webarena)

**Sources**:

- [arXiv: "OSWorld: Benchmarking Multimodal Agents for Open-Ended Tasks in Real Computer Environments" by Tianbao Xie et al.](https://arxiv.org/abs/2404.07972)
- [o-mega: "AI Computer Use Benchmarks 2026: Top Agents Ranked"](https://o-mega.ai/articles/the-2025-2026-guide-to-ai-computer-use-benchmarks-and-top-ai-agents)
- ["OSWorld: Benchmarking Multimodal Agents for Open-Ended Tasks in Real Computer Environments"](http://osworld-v1.xlang.ai/)

---

## SimpleQA

**Definition**: fact-seeking benchmark for measuring an LLM's ability to provide verifiable answers

**Purpose**: used to track hallucination rates for attempted answers; verifiable recall metrics from
such tests provide a baseline that general reasoning benchmarks often overlook

**Related Terms**: [benchmark]({{< relref "/evaluation" >}}#benchmark), [evaluation]({{< relref "/evaluation" >}}#evaluation-1), [TruthfulQA]({{< relref "/evaluation/benchmarks" >}}#truthfulqa)

**Source**: [OpenAI: "Introducing SimpleQA" by Jason Wei et al.](https://openai.com/index/introducing-simpleqa/)

---

## SWE-bench

**Definition**: code generation evaluation framework focused on issue resolution; LLMs are tasked with
fixing a bug or addressing a feature request in a specific code base

**Purpose**: assessment metric is the percentage of resolved task instances, testing
real-world software maintenance ability

**Related Terms**: [benchmark]({{< relref "/evaluation" >}}#benchmark), [evaluation]({{< relref "/evaluation" >}}#evaluation-1), [functional correctness]({{< relref "/evaluation" >}}#functional-correctness), [HumanEval]({{< relref "/evaluation/benchmarks" >}}#humaneval)

**Source**: [arXiv: "SWE-bench: Can Language Models Resolve Real-World GitHub Issues?" by Jimenez et al.](https://arxiv.org/abs/2310.06770)

---

## tau-bench

**Definition**: also known as `τ`-bench and/or _Tool-Agent-User- interaction Benchmark_;
benchmark measuring tool-use reliability in conversational customer-service settings; agents must correctly invoke tools while holding a natural back-and-forth dialogue with a user

**Purpose**: evaluates the combination of tool calling and dialogue handling rather than isolated function calls, reflecting how agents handle cases that mix conversation with API actions

**Example**: public task types include conversation with interruptions, accents, and
background noise, retrieving-reasoning over a knowledge base

**Related Terms**: [benchmark]({{< relref "/evaluation" >}}#benchmark), [evaluation]({{< relref "/evaluation" >}}#evaluation-1), [function calling evaluation]({{< relref "/evaluation" >}}#function-calling-evaluation), [task completion rate]({{< relref "/evaluation/metrics" >}}#task-completion-rate)

**Sources**:

- [arXiv: "`τ` -bench: A Benchmark for Tool-Agent-User Interaction in Real-World Domains" by Shunyu Yao et al.](https://arxiv.org/abs/2406.12045)
- [o-mega: "AI Computer Use Benchmarks 2026: Top Agents Ranked"](https://o-mega.ai/articles/the-2025-2026-guide-to-ai-computer-use-benchmarks-and-top-ai-agents)
- [Sierra AI: `τ`-bench](http://taubench.com/)

---

## Terminal-Bench

**Definition**: collection of [harbor-native](https://www.tbench.ai/) benchmarks that
measure agentic performance in the command line - builds, scripts, and system administration;
evaluates whether agents correctly operate a terminal environment where output is text-native,
deterministic, and verifiable

**Purpose**: targets the one computer-use surface where deterministic verification is straightforward,
yielding agent scores that track ahead of GUI long-horizon results; became a shared citation across
model cards for terminal and infrastructure work

**Example**: public task types range from _"Write and execute small programs and CLI commands"_ to _"Build an entire codebase from scratch"_

**Related Terms**: [benchmark]({{< relref "/evaluation" >}}#benchmark), [evaluation]({{< relref "/evaluation" >}}#evaluation-1), [OSWorld]({{< relref "/evaluation/benchmarks" >}}#osworld)

**Source**:

- [o-mega: "AI Computer Use Benchmarks 2026: Top Agents Ranked"](https://o-mega.ai/articles/the-2025-2026-guide-to-ai-computer-use-benchmarks-and-top-ai-agents)
- [terminal-bench: benchmarks for ai agents in terminal environments](https://www.tbench.ai/)

---

## TruthfulQA

**Definition**: benchmark measuring an LLM's ability to generate truthful answers to questions;
addresses the tendency of LLMs to hallucinate and produce inaccurate outputs

**Purpose**: dataset contains 817 questions spanning 38 subjects including health, law, finance, and politics;
combines human evaluation with `GPT`s, fine-tuned on BLEU and ROUGE to predict human assessments of
informativeness and truthfulness; largest models were generally least truthful

**Related Terms**: [benchmark]({{< relref "/evaluation" >}}#benchmark), [evaluation]({{< relref "/evaluation" >}}#evaluation-1), [hallucination]({{< relref "/core-concepts" >}}#hallucination), [SimpleQA]({{< relref "/evaluation/benchmarks" >}}#simpleqa)

**Source**: [arXiv: "TruthfulQA: Measuring How Models Mimic Human Falsehoods" by Lin et al.](https://arxiv.org/abs/2109.07958)

---

## WebArena

**Definition**: benchmark for evaluating browser agents on reproducible, self-hosted simulated
websites rather than live web traffic; 812 tasks across e-commerce, forum discussion,
collaborative software development, content management, maps, and reference lookup

**Purpose**: provides controlled, repeatable web-agent experiments with functional success
criteria rather than production website variability; scores saturate faster than live-web
benchmarks because fixed environments reward memorization over adaptability

**Example**: public tasks include _"What is the top-1 best-selling product in 2022?"_ and
_"Tell me the full address of all international airports that are within a driving distance of 50 km to Carnegie Mellon University."_

**Related Terms**: [benchmark]({{< relref "/evaluation" >}}#benchmark), [evaluation]({{< relref "/evaluation" >}}#evaluation-1), [Online-Mind2Web]({{< relref "/evaluation/benchmarks" >}}#online-mind2web), [OSWorld]({{< relref "/evaluation/benchmarks" >}}#osworld), [WebVoyager]({{< relref "/evaluation/benchmarks" >}}#webvoyager)

**Sources**:

- [arXiv: "A Real-World Web Environment for Building Autonomous Agents" by Zhou et al.](https://arxiv.org/abs/2307.13854)
- [o-mega: "AI Computer Use Benchmarks 2026: Top Agents Ranked"](https://o-mega.ai/articles/the-2025-2026-guide-to-ai-computer-use-benchmarks-and-top-ai-agents)
- [Steel.dev: WebArena Leaderboard](https://leaderboard.steel.dev/leaderboards/webarena/)

---

## WebVoyager

**Definition**: benchmark evaluating a web agent's ability to complete tasks on live
websites through natural-language instructions and browser interaction

**Purpose**: measures end-to-end web task completion in a realistic environment;
interpreted as solved given saturation near the top of scores, making it a
sanity check rather than a differentiator

**Example**: public tasks include _"Provide a recipe for vegetarian lasagna with more than 100 reviews and a rating of at least 4.5 stars suitable for 6 people"_ and _"Search an Xbox Wireless controller with green color and rated above 4 stars."_

**Related Terms**: [benchmark]({{< relref "/evaluation" >}}#benchmark), [evaluation]({{< relref "/evaluation" >}}#evaluation-1), [Online-Mind2Web]({{< relref "/evaluation/benchmarks" >}}#online-mind2web), [WebArena]({{< relref "/evaluation/benchmarks" >}}#webarena)

**Sources**:

- [arXiv: "WebVoyager: Building an End-to-End Web Agent with Large Multimodal Models" by Hongliang He et al.](https://arxiv.org/abs/2307.13854)
- [o-mega: "AI Computer Use Benchmarks 2026: Top Agents Ranked"](https://o-mega.ai/articles/the-2025-2026-guide-to-ai-computer-use-benchmarks-and-top-ai-agents)
- [Steel.dev: WebVoyager Leaderboard](https://leaderboard.steel.dev/leaderboards/webvoyager/)

---

## Winogrande

**Definition**: benchmark evaluating an LLM's common sense reasoning capabilities;
builds on the original WSC, _Winograd Schema Challenge_ with 44,000 crowdsourced problems
using adversarial filtering

**Purpose**: scored based on accuracy, measuring coreference resolution and common sense reasoning

**Related Terms**: [adversarial filtering]({{< relref "/evaluation" >}}#adversarial-filtering), [HellaSwag]({{< relref "/evaluation/benchmarks" >}}#hellaswag)

**Source**: [arXiv: "WinoGrande: An Adversarial Winograd Schema Challenge at Scale" by Sakaguchi et al.](https://arxiv.org/abs/1907.10641)
