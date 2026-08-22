---
title: "Evaluation"
weight: 6
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

**Related Terms**: [benchmark]({{< relref "/evaluation" >}}#benchmark), [evaluation]({{< relref "/evaluation" >}}#evaluation-1), [HellaSwag]({{< relref "/evaluation/benchmarks" >}}#hellaswag), [Winogrande]({{< relref "/evaluation/benchmarks" >}}#winogrande)

**Source**: [IBM: "What Are LLM Benchmarks?" by Rina Diane Caballar, Cole Stryker](https://www.ibm.com/think/topics/llm-benchmarks)

---

## Agent-as-a-Judge

**Definition**: evaluation methodology where an agent assesses the performance of other agents;
examines outputs, behaviors, or decision-making processes

**Purpose**: related to LLM-as-judge, but focuses on agentic system evaluation rather than just
text outputs

**Related Terms**: [Agent Reading Test]({{< relref "/evaluation/benchmarks" >}}#agent-reading-test), [LLM-as-judge]({{< relref "/evaluation" >}}#llm-as-judge), [stepwise evaluation]({{< relref "/evaluation" >}}#stepwise-evaluation), [trajectory-based evaluation]({{< relref "/evaluation" >}}#trajectory-based-evaluation)

---

## benchmark

**Definition**: standardized test or dataset used to evaluate and compare system performance;
provides consistent metrics - such as task completion rates, accuracy scores, reasoning
capabilities - across different LLMs, agents or approaches

**Purpose**: enables objective comparison across LLMs and tracks progress in the field;
typically supplies sample data, a set of questions or tasks, metrics for evaluation and a
scoring mechanism; _no benchmark is a neutral instrument_ - each embodies a theory of what the
task actually requires, so picking the wrong one for a use case points evaluation at the wrong
agent

**Example**: tests coding, common sense, reasoning, translation capabilities; custom benchmarks
include a golden dataset and scoring built for a specific domain, but not directly comparable
across releases or vendors due to various type of changes and also carry structural limits on
what they can measure -

| **Change Mechanism** | **Effect** |
| --- | --- |
| **Budget** | small budgets favor token-frugal models while maximizing completion favors token-heavy ones; scores shift with allocated compute |
| **Harness** | vendors revise evaluation methodology after release; Anthropic retroactively updated `Claude Opus 4.7`'s `OSWorld-Verified` score once harness changed |
| **Judge** | human, automated, vendor-built judges score identical behavior differently |

| **Limitation** | **Description** |
| --- | --- |
| **Bounded Scoring** | once an LLM reaches the highest possible score, the benchmark has saturated and must be replaced with harder tasks to keep separating models |
| **Broad Dataset** | sample data spans a wide range of subjects and tasks, which may not represent edge cases, specialized domains, or a specific use case |
| **Finite Assessment** | only evaluates a model's capabilities as they exist at one point in time; new benchmarks are needed as LLMs develop new abilities |
| **Overfitting** | training an LLM on the same dataset the benchmark uses inflates its score without improving real-world performance |

**Related Terms**: [evaluation]({{< relref "/evaluation" >}}#evaluation-1), [functional correctness]({{< relref "/evaluation" >}}#functional-correctness), [harness]({{< relref "/anatomy" >}}#harness), [LLM-as-judge]({{< relref "/evaluation" >}}#llm-as-judge), [LLM leaderboard]({{< relref "/evaluation" >}}#llm-leaderboard), [overfitting]({{< relref "/evaluation" >}}#overfitting)

**Sources**:

- [HumanSignal, "Building custom golden datasets for regression testing"](https://humansignal.com/ai-benchmarks/)
- [IBM: "What Are LLM Benchmarks?" by Rina Diane Caballar, Cole Stryker](https://www.ibm.com/think/topics/llm-benchmarks)
- [o-mega: "AI Computer Use Benchmarks 2026: Top Agents Ranked"](https://o-mega.ai/articles/the-2025-2026-guide-to-ai-computer-use-benchmarks-and-top-ai-agents)

---

## canary phrase

**Definition**: unique marker string embedded in content to verify its presence in a system;
named after canaries used in coal mines as early warning detectors;
[canary deployments](https://dev.to/semaphore/what-is-canary-deployment-the-pros-and-the-cons-5953),
describe the practice of releasing a small subset of production traffic to a new software version
to detect failures before a full rollout

**Purpose**: its appearance in output confirms that specific content was loaded and/or processed,
verifying whether a prompt, document, or instruction actually reached the LLM

**Example**: in the [Agent Reading Test](https://agentreadingtest.com/), canary tokens like
`CANARY-TRUNC-75K-summit` are placed at specific positions within large pages -
at 10K, 40K, 75K, 100K, and 130K characters - to measure whether an agent's web fetch pipeline
delivered content at each depth, or whether filtering, truncation, summarization, or dropped
content before the agent could read it

**Related Terms**: [Agent Reading Test]({{< relref "/evaluation/benchmarks" >}}#agent-reading-test),
[benchmark]({{< relref "/evaluation" >}}#benchmark), [prompt injection vulnerability]({{< relref "/evaluation/metrics" >}}#prompt-injection-vulnerability)

**Source**: [Dachary Carey: "Designing an Agent Reading Test"](https://dacharycarey.com/2026/04/06/designing-agent-reading-test/)

---

## evaluation

**Definition**: process of assessing and understanding an agent's performance in executing tasks,
decision-making and interacting with users

**Purpose**: assess behavior, task success and alignment with user intent; balances concerns of
function in terms of quality and cost vs non-functional and/or safety

**Evaluation vs Benchmarking**: benchmarking is static testing against a fixed dataset to establish
baselines while evaluation describes a dynamic, ongoing measurement of agent performance

**Evaluating Platform-Written Specs**: platform-published specs for agent-friendly practices needs
their own scrutiny before adoption as business incentives shape what the spec measures and what it
leaves out; using [Vercel's agent-readiness guidance](https://vercel.com/kb/guide/agent-readability-spec)
as a case study -

| **Check** | **Question** |
| --- | --- |
| **Audience Definition** | _Does the spec distinguish user types?_ Vercel's spec conflates coding agents with training crawlers, which behave and need fundamentally differently |
| **Empirical Grounding** | _Does the spec cite data, or are claims presented as fact?_ Vercel's _"sites optimized for agent readability get cited more often"_ is an unsupported hypothesis, not a finding |
| **Omission Analysis** | _Do the gaps align with the publisher's business constraints?_ Vercel's spec never measures content-start-position, which would expose problems inherent to `Next.js` |
| **Self-Consistency** | _Would the publisher's own properties pass its own checks?_ Vercel's `llms.txt` exceeds the size threshold its spec recommends |

| **Recommendation** | **Description** |
| --- | --- |
| **Evaluate, Don't Dismiss** | Don't reject platform guidance outright, but assess each recommendation on its own merits |
| **Examine Incentive Alignment** | Be skeptical when a recommendation conveniently omits the publisher's own limitations |
| **Prioritize Empirical Specs** | Favor guidance grounded in observed agent behavior with measured thresholds |
| **Test Directly** | Validate with agents rather than relying solely published recommendations |

**Related Terms**: [agent-friendliness]({{< relref "/search" >}}#agent-friendliness),
[Agent-Friendly Documentation Spec]({{< relref "/search" >}}#agent-friendly-documentation-spec),
[benchmark]({{< relref "/evaluation" >}}#benchmark), [final response evaluation]({{< relref "/evaluation" >}}#final-response-evaluation),
[`llms.txt`]({{< relref "/search" >}}#llmstxt), [SAP Labs agent eval taxonomy]({{< relref "/evaluation" >}}#sap-labs-agent-eval-taxonomy),
[stepwise evaluation]({{< relref "/evaluation" >}}#stepwise-evaluation), [trajectory-based evaluation]({{< relref "/evaluation" >}}#trajectory-based-evaluation),
[truncation budget]({{< relref "/search" >}}#truncation-budget)

**Sources**:

- [HumanSignal, Label Studio: "LLM Evaluation vs. LLM Benchmarking"](https://labelstud.io/learningcenter/llm-evaluation-vs-llm-benchmarking/)
- [IBM: "What is AI agent evaluation?" by Cole Stryker and Michal Schmueli-Scheuer](https://www.ibm.com/think/topics/ai-agent-evaluation)
- [Dachary Carey: "How to Evaluate a Platform-Written Spec"](https://dacharycarey.com/2026/03/28/how-to-evaluate-platform-written-spec/)

---

## EDD

**Definition**: acronym for _Evaluation-driven Development_; software development methodology where
evaluation guides design and iteration; structurally similar to TDD - _test-driven development_

**Purpose**: incorporates continuous assessment of agent capabilities, reliability, and safety, using
testing and metrics to inform architectural decisions throughout the development lifecycle; emphasizes
measurable outcomes and systematic improvement

**Related Terms**: [benchmark]({{< relref "/evaluation" >}}#benchmark), [evaluation]({{< relref "/evaluation" >}}#evaluation-1), [final response evaluation]({{< relref "/evaluation" >}}#final-response-evaluation), [regression testing]({{< relref "/evaluation" >}}#regression-testing), [stepwise evaluation]({{< relref "/evaluation" >}}#stepwise-evaluation)

**Source**: [Braintrust: "What is eval-driven development: How to ship high-quality agents without guessing"](https://www.braintrust.dev/articles/eval-driven-development)

---

## few-shot

**Definition**: standardized setting under which many benchmarks are evaluated; prompting approach
that supplies an LLM with a small number of examples showing how to fulfill a task before prompting

**Purpose**: demonstrates an LLM's ability to learn from scarce data; one of the three
common LLM benchmark testing approaches, alongside zero-shot and fine-tuning

**Related Terms**: [benchmark]({{< relref "/evaluation" >}}#benchmark), [evaluation]({{< relref "/evaluation" >}}#evaluation-1), [HellaSwag]({{< relref "/evaluation/benchmarks" >}}#hellaswag), [MMLU]({{< relref "/evaluation/benchmarks" >}}#mmlu), [zero-shot]({{< relref "/evaluation" >}}#zero-shot)

**Source**: [IBM: "What Are LLM Benchmarks?" by Rina Diane Caballar, Cole Stryker](https://www.ibm.com/think/topics/llm-benchmarks)

---

## final response evaluation

**Definition**: evaluation methodology that assesses only the end result or output of an agent's
execution; judges success based on whether the final answer or outcome is correct

**Purpose**: streamlined implementation with clear success criteria; provides no insight into the reasoning
process, intermediate steps, or failure points

**Related Terms**: [benchmark]({{< relref "/evaluation" >}}#benchmark), [evaluation]({{< relref "/evaluation" >}}#evaluation-1), [EDD]({{< relref "/evaluation" >}}#edd), [stepwise evaluation]({{< relref "/evaluation" >}}#stepwise-evaluation), [trajectory-based evaluation]({{< relref "/evaluation" >}}#trajectory-based-evaluation)

**Source**: [Arize: "How to evaluate AI agents: a production workflow"](https://arize.com/guides/ai-agent-handbook/agent-evaluation/)

---

## function calling evaluation

**Definition**: assessment of an agent's tool invocation behavior to APIs, databases, and/or web services

**Purpose**: rule-based metrics cover structural correctness of a tool call; semantic metrics,
based on LLM-as-a-judge, cover parameter value grounding and unit transformation -

| **Metric** | **Flags** |
| --- | --- |
| **allowed values** | value outside the set of accepted or predefined values for that parameter |
| **hallucinated parameter** | included in the call, but not defined or supported by function requirements |
| **missing parameters** | function call omits one or more parameters necessary for execution |
| **wrong function** | call exists, but with an incorrect case, name, and/or spelling |
| **wrong type** | parameter type doesn't match function requirements |

**Related Terms**: [functional correctness]({{< relref "/evaluation" >}}#functional-correctness), [parameter value grounding]({{< relref "/evaluation/metrics" >}}#parameter-value-grounding), [unit transformation]({{< relref "/evaluation/metrics" >}}#unit-transformation)

**Source**: [IBM: "What is AI agent evaluation?" by Cole Stryker, Michal Schmueli-Scheuer](https://www.ibm.com/think/topics/ai-agent-evaluation)

---

## functional correctness

**Definition**: evaluation criterion for code generation benchmarks; judges solutions
by whether LLMs pass the corresponding unit tests

**Purpose**: provides an objective, executable measure of code quality used by HumanEval,
MBPP and similar coding benchmarks

**Related Terms**: [benchmark]({{< relref "/evaluation" >}}#benchmark), [evaluation]({{< relref "/evaluation" >}}#evaluation-1), [function calling evaluation]({{< relref "/evaluation" >}}#function-calling-evaluation), [pass@k]({{< relref "/evaluation/metrics" >}}#passk), [HumanEval]({{< relref "/evaluation/benchmarks" >}}#humaneval), [MBPP]({{< relref "/evaluation/benchmarks" >}}#mbpp)

**Source**: [IBM: "What Are LLM Benchmarks?" by Rina Diane Caballar, Cole Stryker](https://www.ibm.com/think/topics/llm-benchmarks)

---

## golden dataset

**Definition**: curated set of prompts and verified answers for a specific business domain;
replaces public leaderboards to predict production success for an application

**Purpose**: serves as the basis for custom benchmarks and regression testing;
ground truth that calibrates automated evaluation systems

**Related Terms**: [benchmark]({{< relref "/evaluation" >}}#benchmark), [evaluation]({{< relref "/evaluation" >}}#evaluation-1), [ground truth]({{< relref "/evaluation" >}}#ground-truth), [regression testing]({{< relref "/evaluation" >}}#regression-testing)

**Source**: [HumanSignal, Label Studio: "LLM Evaluation vs. LLM Benchmarking"](https://labelstud.io/learningcenter/llm-evaluation-vs-llm-benchmarking/)

---

## Goodhart's law

**Definition**: _"when a measure becomes a target, it ceases to be a good measure"_; optimizing for
a proxy metric leads to gaming the metric rather than improving underlying quality

**Purpose**: warns that agents may learn to maximize benchmark scores without developing genuine
capabilities; critical for effective benchmark design to prevent reward hacking and/or overfitting

**Example**: training an LLM on benchmark data so it scores well on the test but fails on real-world data

**Related Terms**: [benchmark]({{< relref "/evaluation" >}}#benchmark), [evaluation]({{< relref "/evaluation" >}}#evaluation-1), [overfitting]({{< relref "/evaluation" >}}#overfitting)

**Source**: [Wikipedia: "Goodhart's law"](https://en.wikipedia.org/wiki/Goodhart%27s_law)

---

## ground truth

**Definition**: reference data and/or information assumed to be objectively correct; distinct
from a benchmark's human baseline - the measured human completion rate used to gauge whether
a model has surpassed human performance

**Purpose**: benchmarks categorize assessment criteria by whether they rely on ground truth or
on human preferences reflecting real world usage; guides metrics and defines golden datasets;
human baseline shifts per benchmark and signals saturation once frontier models exceed it

**Example**: `OSWorld-Verified`'s human baseline was ~72% task completion; frontier models now
exceed it

**Related Terms**: [accuracy]({{< relref "/evaluation/metrics" >}}#accuracy), [benchmark]({{< relref "/evaluation" >}}#benchmark),
[evaluation]({{< relref "/evaluation" >}}#evaluation-1),
[exact match]({{< relref "/evaluation/metrics" >}}#exact-match), [golden dataset]({{< relref "/evaluation" >}}#golden-dataset),
[OSWorld]({{< relref "/evaluation/benchmarks" >}}#osworld)

**Sources**:

- [IBM: "What Are LLM Benchmarks?" by Rina Diane Caballar, Cole Stryker](https://www.ibm.com/think/topics/llm-benchmarks)
- [o-mega: "AI Computer Use Benchmarks 2026: Top Agents Ranked"](https://o-mega.ai/articles/the-2025-2026-guide-to-ai-computer-use-benchmarks-and-top-ai-agents)

---

## Hawthorne effect

**Definition**: type of behavioral reactivity in which individuals modify an aspect of their behavior
in response to their awareness of being observed; observed in agent behavior in which the
agent changes its behavior when it recognizes it is being evaluated; the agent becomes a more motivated,
persistent reader than it would be during normal use, alignment faking, retrying failed fetches, trying
fallback approaches, and scanning more carefully

**Purpose**: different from score inflation or unreliable narration, which are reporting problems;
the broader concept describes an LLM's ability to recognize when it is being tested, estimated at roughly
80% for frontier models, is the underlying mechanism that triggers this behavioral shift

**Example**: running the [Agent Reading Test](https://agentreadingtest.com/) with Claude in a conversational
client, the agent recognized the evaluation context - _"Got the instructions. This is a
well-designed diagnostic."_ - then retried failed fetches, tried fallback approaches, and scanned
for canary tokens more carefully than it would during normal documentation lookup

**Related Terms**: [benchmark]({{< relref "/evaluation" >}}#benchmark), [evaluation]({{< relref "/evaluation" >}}#evaluation-1),
[Goodhart's law]({{< relref "/evaluation" >}}#goodharts-law), [sycophancy]({{< relref "/anatomy" >}}#sycophancy)

**Sources**:

- [arXiv: "The Hawthorne Effect in Reasoning Models: Evaluating and Steering Test Awareness" by Sahar Abdelnabi, Ahmed Salem](https://arxiv.org/abs/2505.14617)
- [Dachary Carey: "Designing an Agent Reading Test"](https://dacharycarey.com/2026/04/06/designing-agent-reading-test/)
- [IAPS: "Evaluation Awareness: Why Frontier AI Models Are Getting Harder To Test" by Sambhav Maheshwari](https://www.iaps.ai/research/evaluation-awareness-why-frontier-ai-models-are-getting-harder-to-test)
- [Wikipedia: "Hawthorne effect"](https://en.wikipedia.org/wiki/Hawthorne_effect)

---

## human-in-the-loop

**Definition**: system design where humans actively participate in AI decision-making or
evaluation process; human provides feedback, validation, or intervention at critical points

**Purpose**: balances automation with human judgment and oversight; common in agent evaluation to
assess quality, safety, and alignment with human values

**Related Terms**: [LLM-as-judge]({{< relref "/evaluation" >}}#llm-as-judge), [semantic evaluation]({{< relref "/evaluation" >}}#semantic-evaluation)

---

## LLM-as-judge

**Definition**: automated evaluation methodology in which a LLM assesses quality of text outputs;
the LLM scores or ranks responses based on criteria like accuracy, helpfulness or safety

**Purpose**: enables scalable evaluation compared to human annotation alone at significantly
lower cost; limitations include potential biases and consistency issues

**Related Terms**: [benchmark]({{< relref "/evaluation" >}}#benchmark), [evaluation]({{< relref "/evaluation" >}}#evaluation-1),
[probability]({{< relref "/research/quantitative" >}}#probability), [semantic evaluation]({{< relref "/evaluation" >}}#semantic-evaluation)

**Sources**:

- [arXiv: "Judging LLM-as-a-Judge with MT-Bench and Chatbot Arena" by Zheng et al.](https://arxiv.org/abs/2306.05685)
- [IBM: "What is AI agent evaluation?" by Cole Stryker, Michal Schmueli-Scheuer](https://www.ibm.com/think/topics/ai-agent-evaluation)

---

## LLM leaderboard

**Definition**: published ranking of LLMs based on a variety of benchmarks; aggregate results into
LLM-selection aid

**Purpose**: provides a way to track and compare the performance of many LLMs

**Example**: [Hugging Face Open LLM Leaderboard](https://huggingface.co/spaces/open-llm-leaderboard/open_llm_leaderboard)

**Related Terms**: [benchmark]({{< relref "/evaluation" >}}#benchmark), [Chatbot Arena]({{< relref "/evaluation/benchmarks" >}}#chatbot-arena), [evaluation]({{< relref "/evaluation" >}}#evaluation-1), [MMLU]({{< relref "/evaluation/benchmarks" >}}#mmlu)

**Source**: [IBM: "What Are LLM Benchmarks?" by Rina Diane Caballar, Cole Stryker](https://www.ibm.com/think/topics/llm-benchmarks)

---

## overfitting

**Definition**: mathematical modeling concept used in machine learning, LLM and/or agent evaluation;
model learns training data, including noise and quirks closely enough that it performs well on that
data but fails to generalize to new, unseen inputs; in LLM and/or agent benchmarking this describes
successful performance on test data, but poorly on real-world data

**Purpose**: supports the importance of domain-specific data over public benchmarks to close validity
gaps; in Machine Learning, guards against models that memorize rather than learn underlying
patterns; in an LLM benchmark context, occurs when an LLM is trained on the same dataset the benchmark
uses, producing a score that does not reflect the LLM's actual abilities

**Overfitting vs Underfitting**: overfitting learns the training data too closely, while underfitting
is a model too simple to capture the underlying pattern in the first place, performing poorly on training
and real-world data alike

**Example**: a LLM that handles physics questions on a leaderboard may fail to summarize
a standard internal meeting transcript

**Related Terms**: [benchmark]({{< relref "/evaluation" >}}#benchmark), [evaluation]({{< relref "/evaluation" >}}#evaluation-1),
[Goodhart's law]({{< relref "/evaluation" >}}#goodharts-law)

**Sources**:

- [HumanSignal, Label Studio: "LLM Evaluation vs. LLM Benchmarking"](https://labelstud.io/learningcenter/llm-evaluation-vs-llm-benchmarking/)
- [IBM: "What Are LLM Benchmarks?" by Rina Diane Caballar, Cole Stryker](https://www.ibm.com/think/topics/llm-benchmarks)
- [Wikipedia: "Overfitting"](https://en.wikipedia.org/wiki/Overfitting)

---

## regression testing

**Definition**: running a curated benchmark dataset as a test suite every time a base LLM is swapped
or a system prompt is updated; turns custom benchmarks into operational part of the development
lifecycle

**Purpose**: detects when a new LLM version fails a task a previous version passed; reframes benchmarking
as an internal measure of stability rather than a global ranking tool

**Related Terms**: [benchmark]({{< relref "/evaluation" >}}#benchmark), [evaluation]({{< relref "/evaluation" >}}#evaluation-1), [golden dataset]({{< relref "/evaluation" >}}#golden-dataset), [Discriminability Score]({{< relref "/evaluation/metrics" >}}#discriminability-score)

**Sources**:

- [Agent Engineering: "Regression Testing for Agents"](https://agentengineering.org/articles/regression-testing-for-agents/)
- [HumanSignal, Label Studio: "LLM Evaluation vs. LLM Benchmarking"](https://labelstud.io/learningcenter/llm-evaluation-vs-llm-benchmarking/)

---

## robustness

**Definition**: system's ability to maintain performance under varying or adverse conditions; in
agent context, handling unexpected inputs, recovering from errors, and adapting to environment
changes

**Purpose**: critical for deployment in real-world, unpredictable environments; evaluated through
stress testing, edge cases, and challenging scenarios; named as a Reliability dimension in the SAP
Labs agent eval taxonomy alongside hallucinations and error handling

**Related Terms**: [edge case]({{< relref "/research" >}}#edge-case), [error rate]({{< relref "/evaluation/metrics" >}}#error-rate), [SAP Labs agent eval taxonomy]({{< relref "/evaluation" >}}#sap-labs-agent-eval-taxonomy)

---

## SAP Labs agent eval taxonomy

**Definition**: two-axis framework for organizing LLM agent evaluation, proposed by SAP Labs; splits
evaluation into Evaluation Objectives - what is measured - and Evaluation Process - how it is measured

**Purpose**: provides a shared vocabulary for scoping an evaluation effort - which objective(s) to
target, what interaction mode and data to use, how metrics get computed, what tooling and environment
run the tests - before selecting specific metrics or benchmarks

**Evaluation Objectives**:

| Dimension | Description | Examples |
| --- | --- | --- |
| Agent Behavior | outcome oriented; did the agent produce the correct, efficient, affordable result? | task completion, interaction quality, latency & cost |
| Agent Capabilities | process oriented; did the agent follow the right reasoning process? | planning & reasoning, memory & context, tool use, multi-agent behavior |
| Reliability | consistency across time and input variations | robustness, hallucinations, error handling |
| Safety & Alignment | is the agent compliant, safe, and non-harmful? | fairness, harm/toxicity/bias, compliance & policy adherence |

**Evaluation Process**:

| Dimension | Description | Subcategories |
| --- | --- | --- |
| Interaction Mode | how evaluation data is provided to the system | static/offline vs. dynamic/online |
| Evaluation Data | what data is used to evaluate the system | human-annotated, synthetic, interaction-generated |
| Metrics Computation Methods | what method computes the evaluation metrics | code based, LLM-as-judge, human-as-a-judge |
| Evaluation Tooling | pre-existing tooling supporting evaluation | testing, observability, debugging, monitoring |
| Evaluation Contexts | environment the agent is tested in | mocked APIs, simulators, live |

**Notable Benchmarks by Objective**:

| Objective | Benchmarks |
| --- | --- |
| Tool Use | ToolBench, API-Bank |
| Planning | TaskBench, ScienceAgentBench |
| Safety | AgentHarm, CoSafe, AgentDojo |
| Long-Term Memory | LongEval, SocialBench |
| Web Interaction | WebArena, BrowserGym |

**Related Terms**: [benchmark]({{< relref "/evaluation" >}}#benchmark), [evaluation]({{< relref "/evaluation" >}}#evaluation-1), [function calling evaluation]({{< relref "/evaluation" >}}#function-calling-evaluation), [LLM-as-judge]({{< relref "/evaluation" >}}#llm-as-judge), [task completion rate]({{< relref "/evaluation/metrics" >}}#task-completion-rate)

**Source**: [SAP: "Evaluation and Benchmarking of LLM Agents: A Survey" by Mahmoud Mohammadi, Yipeng Li, Jane Lo, Wendy Yip (KDD 2025 Tutorial)](https://sap-samples.github.io/llm-agents-eval-tutorial/2025_KDD_Evaluation_and_Benchmarking_of_LLM_Agents.pdf)

---

## separation of concerns

**Definition**: software design principle holding that a complex problem should be divided into
distinct aspects and/or issues that can be analyzed, addressed, or managed individually,
even when they belong to the same system; achieved through techniques such as temporal sequencing,
quality separation, view-based separation, and modularity

**Purpose**: reduces cognitive load by letting each concern be studied in isolation, improves
maintainability, and enables self-contained parts to be developed and tested independently before
integration; in agent evaluation, this means each participant - agent, scoring system, human - does
what it is structurally good at

**Example**: the [Agent Reading Test](https://agentreadingtest.com/) splits its design across three
participants - the agent reads pages and answers questions, a static scoring form compares reported
values against a known answer key by string comparison, and a human judges whether the agent's
summary actually matches the reference material; _"No single participant is asked to do something
it's structurally bad at"_ - the agent never sees the scoring rubric that would bias its answers,
and nuanced comparison is reserved for human judgment rather than forced onto the agent

**Related Terms**: [benchmark]({{< relref "/evaluation" >}}#benchmark), [evaluation]({{< relref "/evaluation" >}}#evaluation-1),
[human-in-the-loop]({{< relref "/evaluation" >}}#human-in-the-loop), [LLM-as-judge]({{< relref "/evaluation" >}}#llm-as-judge)

**Sources**:

- [Dachary Carey: "Designing an Agent Reading Test"](https://dacharycarey.com/2026/04/06/designing-agent-reading-test/)
- [Wikipedia: "Separation of concerns"](https://en.wikipedia.org/wiki/Separation_of_concerns)

---

## semantic evaluation

**Definition**: assessment approach based on meaning rather than structure; uses LLM-as-a-judge
to score outputs for relevance, factuality and correctness where no ground truth exists

**Purpose**: _"did the agent produce a factually correct response?"_ rather than
_"did the agent return the right format?"_; contrasts with rule-based checks that
verify syntax and function-call shape

**Related Terms**: [benchmark]({{< relref "/evaluation" >}}#benchmark), [evaluation]({{< relref "/evaluation" >}}#evaluation-1), [function calling evaluation]({{< relref "/evaluation" >}}#function-calling-evaluation), [ground truth]({{< relref "/evaluation" >}}#ground-truth), [LLM-as-judge]({{< relref "/evaluation" >}}#llm-as-judge)

**Source**: [IBM: "What is AI agent evaluation?" by Cole Stryker, Michal Schmueli-Scheuer](https://www.ibm.com/think/topics/ai-agent-evaluation)

---

## stepwise evaluation

**Definition**: evaluation methodology that assesses agent performance at each individual step of task
execution; examines correctness of intermediate actions, decisions, and reasoning at a granular level

**Purpose**: enables debugging and improvement of specific reasoning or action-taking capabilities and
identifies exactly where an agent succeeds or fails in multi-step processes; more resource-intensive than
final response evaluation but provides richer diagnostic information

**Related Terms**: [benchmark]({{< relref "/evaluation" >}}#benchmark), [EDD]({{< relref "/evaluation" >}}#edd), [evaluation]({{< relref "/evaluation" >}}#evaluation-1), [final response evaluation]({{< relref "/evaluation" >}}#final-response-evaluation), [trajectory-based evaluation]({{< relref "/evaluation" >}}#trajectory-based-evaluation)

---

## trajectory-based evaluation

**Definition**: evaluation methodology that analyzes the complete path or sequence of actions an agent
takes; examines the entire decision-making process from initial state to final outcome

**Purpose**: considers not just correctness but efficiency, reasoning quality, and recovery from errors;
enables evaluation of process quality rather than only outcome quality, providing a holistic view of
agent behavior including planning, adaptation, and tool use patterns

**Related Terms**: [benchmark]({{< relref "/evaluation" >}}#benchmark), [EDD]({{< relref "/evaluation" >}}#edd), [evaluation]({{< relref "/evaluation" >}}#evaluation-1), [final response evaluation]({{< relref "/evaluation" >}}#final-response-evaluation), [stepwise evaluation]({{< relref "/evaluation" >}}#stepwise-evaluation)

**Sources**:

- [Atlan: "How to Measure Agent Trajectory: The Path, Not the Answer" by Karthik Pasupathy](https://atlan.com/know/ai-agent/ai-agent-trajectory-evaluation/)
- [Confident AI, Inc., DeepEval: "Trajectory-Based Evaluation"](https://deepeval.com/docs/evaluation-trajectory-based-llm-evals)

---

## zero-shot

**Definition**: benchmark prompting approach where an LLM is prompted to complete a task
without having seen any examples beforehand

**Purpose**: unveils an LLM's ability to comprehend new concepts and adapt to novel
scenarios; one of the three common benchmark testing approaches

**Related Terms**: [benchmark]({{< relref "/evaluation" >}}#benchmark), [evaluation]({{< relref "/evaluation" >}}#evaluation-1), [few-shot]({{< relref "/evaluation" >}}#few-shot)

**Source**: [IBM: "What Are LLM Benchmarks?" by Rina Diane Caballar, Cole Stryker](https://www.ibm.com/think/topics/llm-benchmarks)
