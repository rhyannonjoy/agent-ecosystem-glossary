---
title: "Evaluation"
weight: 2
bookToc: true
---

# Evaluation

Foundational concepts and methodology for measuring, comparing, and improving agent
performance. Understand the difference between static benchmarking and dynamic evaluation
to choose the appropriate approach for LLM selection, regression testing, production
monitoring, and general tuning for reliable behavior.

Visit [Benchmarks]({{< relref "benchmarks" >}}) for standardized datasets and
[Metrics & Scoring]({{< relref "metrics" >}}) for quantifying strategies.

---

## adversarial filtering

**Definition**: data construction technique used to generate hard, plausible negatives for benchmark
datasets; algorithmically constructs incorrect answers that look realistic enough to mislead an LLM;
shapes how evaluation difficulty is calibrated

**Purpose**: avoids ceiling effects and benchmark saturation by ensuring distractors are
challenging rather than trivially wrong; keeps leaderboard scores meaningful by preventing
LLMs from gaming simple patterns

**Example**: HellaSwag generates story endings that are realistic, but incorrect, so LLMs
can't guess by surface plausibility

**Related Terms**: benchmark, evaluation, HellaSwag, Winogrande

**Source**:

- [IBM: "What Are LLM Benchmarks?" by Rina Diane Caballar, Cole Stryker](https://www.ibm.com/think/topics/llm-benchmarks)

---

## bounded scoring

**Definition**: limitation of LLM benchmarks in which an LLM reaches the highest possible score;
contributes to ineffectiveness of public benchmarks and motivates more custom eval pipelines

**Purpose**: highlights when a benchmark saturates and must be updated with more difficult tasks
to remain a useful measure

**Example**: once every major LLM scores near 100% on MMLU, that score no longer separates models

**Related Terms**: benchmark, evaluation, overfitting

**Source**:

- [IBM: "What Are LLM Benchmarks?" by Rina Diane Caballar, Cole Stryker?"](https://www.ibm.com/think/topics/llm-benchmarks)

---

## benchmark

**Definition**: standardized test or dataset used to evaluate and compare system performance;
provides consistent metrics - such as task completion rates, accuracy scores, reasoning
capabilities - across different LLMs, agents or approaches

**Purpose**: enables objective comparison across LLMs and tracks progress in the field;
typically supplies sample data, a set of questions or tasks, metrics for evaluation and a
scoring mechanism

**Example**: tests coding, common sense, reasoning, translation capabilities; custom benchmarks
include a golden dataset and scoring built for a specific domain

**Related Terms**: evaluation, functional correctness, LLM leaderboard

**Sources**:

- [HumanSignal, "Building custom golden datasets for regression testing"](https://humansignal.com/ai-benchmarks/)
- [IBM: "What Are LLM Benchmarks?" by Rina Diane Caballar, Cole Stryker](https://www.ibm.com/think/topics/llm-benchmarks)

---

## evaluation

**Definition**: process of assessing and understanding an agent's performance in executing tasks,
decision-making and interacting with users

**Purpose**: assess behavior, task success and alignment with user intent; balances concerns of
function in terms of quality and cost vs non-functional and/or safety

**Evaluation vs Benchmarking**: benchmarking is static testing against a fixed dataset to establish
baselines while evaluation describes a dynamic, ongoing measurement of agent performance

**Example**: a team continuously scores a RAG pipeline's answers for relevance and factuality rather
than running a one-off generic test

**Related Terms**: benchmark, Final Response Evaluation, Stepwise Evaluation, Trajectory-Based Assessment

**Sources**:

- [HumanSignal, Label Studio: "LLM Evaluation vs. LLM Benchmarking"](https://labelstud.io/learningcenter/llm-evaluation-vs-llm-benchmarking/)
- [IBM: "What is AI agent evaluation?" by Cole Stryker and Michal Schmueli-Scheuer](https://www.ibm.com/think/topics/ai-agent-evaluation)

---

## EDD

**Definition**: acronym for _Evaluation-driven Development_; software development methodology where
evaluation guides design and iteration; structurally similar to TDD - _test-driven development_

**Purpose**: incorporates continuous assessment of agent capabilities, reliability, and safety, using
testing and metrics to inform architectural decisions throughout the development lifecycle; emphasizes
measurable outcomes and systematic improvement

**Related Terms**: benchmark, evaluation, Final Response Evaluation, regression testing, Stepwise Evaluation

**Source**:

- [Braintrust: "What is eval-driven development: How to ship high-quality agents without guessing"](https://www.braintrust.dev/articles/eval-driven-development)

---

## few-shot

**Definition**: standardized setting under which many benchmarks are evaluated; prompting approach
that supplies an LLM with a small number of examples showing how to fulfill a task before prompting

**Purpose**: demonstrates an LLM's ability to learn from scarce data; one of the three
common LLM benchmark testing approaches, alongside zero-shot and fine-tuning

**Related Terms**: benchmark, evaluation, HellaSwag, MMLU, zero-shot

**Source**:

- [IBM: "What Are LLM Benchmarks?" by Rina Diane Caballar, Cole Stryker](https://www.ibm.com/think/topics/llm-benchmarks)

---

## Final Response Evaluation

**Definition**: evaluation methodology that assesses only the end result or output of an agent's
execution; judges success based on whether the final answer or outcome is correct

**Purpose**: streamlined implementation with clear success criteria; provides no insight into the reasoning
process, intermediate steps, or failure points

**Related Terms**: benchmark, evaluation, EDD, Stepwise Evaluation, Trajectory-Based Assessment

**Source**:

- [Arize: "How to evaluate AI agents: a production workflow"](https://arize.com/guides/ai-agent-handbook/agent-evaluation/)

---

## function calling evaluation

**Definition**: assessment of an agent's tool invocation behavior

**Purpose**: rule-based metrics cover structural correctness - wrong function name, missing
required parameters, wrong parameter value type, disallowed values, hallucinated parameters;
semantic metrics, based on LLM-as-a-judge, cover parameter value grounding and unit transformation

**Related Terms**: functional correctness, parameter value grounding, tool use, unit transformation

**Source**:

- [IBM: "What is AI agent evaluation?" by Cole Stryker, Michal Schmueli-Scheuer](https://www.ibm.com/think/topics/ai-agent-evaluation)

---

## functional correctness

**Definition**: evaluation criterion for code generation benchmarks; judges solutions
by whether LLMs pass the corresponding unit tests

**Purpose**: provides an objective, executable measure of code quality used by HumanEval,
MBPP and similar coding benchmarks

**Related Terms**: benchmark, evaluation, function calling evaluation, pass@k, HumanEval, MBPP

**Source**:

- [IBM: "What Are LLM Benchmarks?" by Rina Diane Caballar, Cole Stryker](https://www.ibm.com/think/topics/llm-benchmarks)

---

## golden dataset

**Definition**: curated set of prompts and verified answers for a specific business domain;
replaces public leaderboards to predict production success for an application

**Purpose**: serves as the basis for custom benchmarks and regression testing;
ground truth that calibrates automated evaluation systems

**Related Terms**: benchmark, evaluation, ground truth, regression testing

**Source**:

- [HumanSignal, Label Studio: "LLM Evaluation vs. LLM Benchmarking"](https://labelstud.io/learningcenter/llm-evaluation-vs-llm-benchmarking/)

---

## Goodhart's law

**Definition**: _"when a measure becomes a target, it ceases to be a good measure"_; optimizing for
a proxy metric leads to gaming the metric rather than improving underlying quality

**Purpose**: warns that agents may learn to maximize benchmark scores without developing genuine
capabilities; critical for effective benchmark design to prevent reward hacking and/or overfitting

**Example**: training an LLM on benchmark data so it scores well on the test but fails on real-world data

**Related Terms**: benchmark, bounded scoring, evaluation, overfitting

**Source**:

- [Wikipedia: "Goodhart's law"](https://en.wikipedia.org/wiki/Goodhart%27s_law)

---

## ground truth

**Definition**: reference data and/or information assumed to be objectively correct

**Purpose**: benchmarks categorize assessment criteria by whether they rely on ground truth or
on human preferences reflecting real world usage; guides metrics and defines golden datasets

**Related Terms**: accuracy, benchmark, evaluation, exact match, golden dataset

**Source**:

- [IBM: "What Are LLM Benchmarks?" by Rina Diane Caballar, Cole Stryker](https://www.ibm.com/think/topics/llm-benchmarks)

---

## LLM-as-a-Judge

**Definition**: automated evaluation methodology in which a LLM assesses quality of text outputs;
the LLM scores or ranks responses based on criteria like accuracy, helpfulness or safety

**Purpose**: enables scalable evaluation compared to human annotation alone at significantly
lower cost; limitations include potential biases and consistency issues

**Related Terms**: Agent-as-a-Judge, benchmark, evaluation, semantic evaluation

**Sources**:

- [arXiv:  "Judging LLM-as-a-Judge with MT-Bench and Chatbot Arena" by Zheng et al.](https://arxiv.org/abs/2306.05685)
- [IBM: "What is AI agent evaluation?" by Cole Stryker, Michal Schmueli-Scheuer](https://www.ibm.com/think/topics/ai-agent-evaluation)

---

## LLM leaderboard

**Definition**: published ranking of LLMs based on a variety of benchmarks; aggregate results into
LLM-selection aid

**Purpose**: provides a way to track and compare the performance of many LLMs

**Example**: [Hugging Face Open LLM Leaderboard](https://huggingface.co/spaces/open-llm-leaderboard/open_llm_leaderboard)

**Related Terms**: benchmark, Chatbot Arena, evaluation, MMLU

**Source**:

- [IBM: "What Are LLM Benchmarks?" by Rina Diane Caballar, Cole Stryker](https://www.ibm.com/think/topics/llm-benchmarks)

---

## overfitting

**Definition**: limitation of LLM benchmarks where an LLM performs well
on training or test data but poorly on real-world data; supports importance of
domain-specific data over public benchmarks to close validity gaps

**Purpose**: occurs when an LLM is trained on the same dataset the benchmark uses, producing
a score that does not reflect the LLM's actual abilities

**Example**: a LLM that handles physics questions on a leaderboard may fail to summarize
a standard internal meeting transcript

**Related Terms**: benchmark, bounded scoring, evaluation, Goodhart's law

**Sources**:

- [HumanSignal, Label Studio: "LLM Evaluation vs. LLM Benchmarking"](https://labelstud.io/learningcenter/llm-evaluation-vs-llm-benchmarking/)
- [IBM: "What Are LLM Benchmarks?" by Rina Diane Caballar, Cole Stryker](https://www.ibm.com/think/topics/llm-benchmarks)

---

## regression testing

**Definition**: running a curated benchmark dataset as a test suite every time a base LLM is swapped
or a system prompt is updated; turns custom benchmarks into operational part of the development
lifecycle

**Purpose**: detects when a new LLM version fails a task a previous version passed; reframes benchmarking
as an internal measure of stability rather than a global ranking tool

**Related Terms**: benchmark, evaluation, golden dataset, Discriminability Score

**Sources**:

- [Agent Engineering: "Regression Testing for Agents"](https://agentengineering.org/articles/regression-testing-for-agents/)
- [HumanSignal, Label Studio: "LLM Evaluation vs. LLM Benchmarking"](https://labelstud.io/learningcenter/llm-evaluation-vs-llm-benchmarking/)

---

## semantic evaluation

**Definition**: assessment approach based on meaning rather than structure; uses LLM-as-a-judge
to score outputs for relevance, factuality and correctness where no ground truth exists

**Purpose**: _"did the agent produce a factually correct response?"_ rather than
_"did the agent return the right format?"_; contrasts with rule-based checks that
verify syntax and function-call shape

**Related Terms**: benchmark, evaluation, function calling evaluation, ground truth, LLM-as-a-Judge

**Source**:

- [IBM: "What is AI agent evaluation?" by Cole Stryker, Michal Schmueli-Scheuer](https://www.ibm.com/think/topics/ai-agent-evaluation)

---

## Stepwise Evaluation

**Definition**: evaluation methodology that assesses agent performance at each individual step of task
execution; examines correctness of intermediate actions, decisions, and reasoning at a granular level

**Purpose**: enables debugging and improvement of specific reasoning or action-taking capabilities and
identifies exactly where an agent succeeds or fails in multi-step processes; more resource-intensive than
final response evaluation but provides richer diagnostic information

**Related Terms**: benchmark, EDD, evaluation, Final Response Evaluation, Trajectory-Based Assessment

---

## Trajectory-Based Assessment

**Definition**: evaluation methodology that analyzes the complete path or sequence of actions an agent
takes; examines the entire decision-making process from initial state to final outcome

**Purpose**: considers not just correctness but efficiency, reasoning quality, and recovery from errors;
enables evaluation of process quality rather than only outcome quality, providing a holistic view of
agent behavior including planning, adaptation, and tool use patterns

**Related Terms**: benchmark, EDD, evaluation, Final Response Evaluation, Stepwise Evaluation

**Source**:

- [Atlan: "How to Measure Agent Trajectory: The Path, Not the Answer" by Karthik Pasupathy](https://atlan.com/know/ai-agent/ai-agent-trajectory-evaluation/)

---

## zero-shot

**Definition**: benchmark prompting approach where an LLM is prompted to complete a task
without having seen any examples beforehand

**Purpose**: unveils an LLM's ability to comprehend new concepts and adapt to novel
scenarios; one of the three common benchmark testing approaches

**Related Terms**: benchmark, evaluation, few-shot

**Source**:

- [IBM: "What Are LLM Benchmarks?" by Rina Diane Caballar, Cole Stryker](https://www.ibm.com/think/topics/llm-benchmarks)

---
