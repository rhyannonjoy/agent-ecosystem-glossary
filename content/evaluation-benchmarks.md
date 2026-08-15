---
title: "Evaluation & Benchmarks"
weight: 2
bookToc: true
---

# Evaluation & Benchmarks

Ways to measure, compare, and improve agent performance. Understand the difference between
static benchmarking and dynamic evaluation to choose the appropriate approach
for LLM selection, regression testing, production monitoring, and general tuning for
reliable behavior.

---

## accuracy

**Definition**: also known as precision; percentage of correct predictions made by an LLM; foundational
to evaluation, the most widely reported scoring metric in benchmarks and/or leaderboards; paired with
recall and combined into the F1 score

**Purpose**: serves as the primary quantitative metric across classification; provides a single number
for comparing how often an LLM produces a correct answer

**Example**: a benchmark with 100 questions where an LLM answers 93 correctly yields 93% accuracy

**Related Terms**: benchmark, evaluation, exact match, F1 score, precision, recall

**Source**:

- [IBM: "What Are LLM Benchmarks?" by Rina Diane Caballar, Cole Stryker](https://www.ibm.com/think/topics/llm-benchmarks)

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

## BLEU

**Definition**: acronym for _Bilingual Evaluation Understudy_; one of the canonical
automated metrics used to score LLM output on translation-style semantic meaning;
evaluates machine translation by computing matching `n-grams` - sequences of `n` adjacent
text symbols - between an LLM's predicted translation and a human-produced translation

**Purpose**: provides a lower-cost alternative to ground-truth-based evaluation; complements
human evaluation of coherence, relevance and semantic meaning

**Related Terms**: benchmark, evaluation, exact match, ground truth, ROUGE

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

## Chatbot Arena

**Definition**: open benchmark platform that pits two anonymous chatbots against each other;
users hold real-world conversations and vote on which they prefer before identities are revealed

**Purpose**: produces crowdsourced pairwise comparison data fed into statistical methods that
estimate scores and create approximate LLM rankings

**Example**: user preference votes across matchups generate an Elo-style ranking of anonymous LLMs

**Related Terms**: benchmark, evaluation, LLM leaderboard, MT-Bench

**Source**:

- [arXiv: "Chatbot Arena: An Open Platform for Evaluating LLMs by Human Preference" by Chiang et al.](https://arxiv.org/abs/2403.04132)

---

## Discriminability Score

**Definition**: metric used to filter benchmark datasets by identifying tasks that separate
a good response from a bad one; supports building lean, custom benchmarks that provide
a stronger signal than large, generic ones

**Purpose**: intends to reduce test size while maintaining evaluation accuracy; creates
a tighter, faster regression suite by removing redundant questions

**Example**: a team prunes hundreds of redundant questions down to the edge cases and
reasoning tasks that actually differentiate its application

**Related Terms**: benchmark, evaluation, golden dataset, regression testing

**Source**:

- [HumanSignal, Label Studio: "LLM Evaluation vs. LLM Benchmarking"](https://labelstud.io/learningcenter/llm-evaluation-vs-llm-benchmarking/)

---

## error rate

**Definition**: measures the percentage of incorrect outputs or failed operations,
tracked alongside success and task completion rates

**Purpose**: provides an inverse view of success, helping teams quantify failures and failed operations

**Related Terms**: benchmark, evaluation, function calling evaluation, task completion rate

**Source**:

- [IBM: "What is AI agent evaluation?" by Cole Stryker and Michal Schmueli-Scheuer](https://www.ibm.com/think/topics/ai-agent-evaluation)

---

## exact match

**Definition**: common ground truth metric for generative tasks;
proportion of an LLM's predictions that match the expected answer exactly

**Purpose**: valuable criterion for translation and question-answering benchmarks;
stricter than semantic similarity metrics

**Related Terms**: accuracy, benchmark, BLEU, evaluation, ground truth, ROUGE

**Source**:

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

## F1 score

**Definition**: common combined metric in classsification and retrieval evaluation;
blends accuracy and recall into a single measure; treats the two as equally weighted
to balance false positives and false negatives

**Purpose**: provides a single 0-1 score where 1 signifies excellent recall and precision,
useful when both false positives and false negatives matter

**Related Terms**: accuracy, benchmark, evaluation, precision, recall

**Source**:

- [IBM: "What Are LLM Benchmarks?" by Rina Diane Caballar, Cole Stryker](https://www.ibm.com/think/topics/llm-benchmarks)

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

## GSM8K

**Definition**: acronym for _Grade School Math 8K_; benchmark testing an LLM's mathematical reasoning
with a corpus of 8,500 grade-school math word problems; one of the most-cited reasoning benchmarks
used on public LLM leaderboards

**Purpose**: measures math reasoning where solutions are collected in natural language rather than
mathematical expressions

**Related Terms**: benchmark, evaluation, few-shot, LLM leaderboard, MMLU

**Source**:

- [arXiv: "Training Verifiers to Solve Math Word Problems" by Cobbe et al.](https://arxiv.org/abs/2110.14168)

---

## HellaSwag

**Definition**: acronym for _Harder Endings, Longer contexts and Low-Shot Activities for Situations With Adversarial Generations_;
benchmark centered on common sense reasoning and natural language inference

**Purpose**: tasks LLMs with completing sentences by choosing among endings, including wrong answers
created through adversarial filtering; evaluates accuracy for few-shot and zero-shot categories

**Related Terms**: adversarial filtering, benchmark, evaluation, Winogrande

**Source**:

- [arXiv: "HellaSwag: Can a Machine Really Finish Your Sentence?" by Zellers et al.](https://arxiv.org/abs/1905.07830)

---

## HumanEval

**Definition**: benchmark assessing an LLM's code generation performance through functional correctness;
LLMs are given programming problems and evaluated on whether generated solutions pass corresponding unit tests

**Purpose**: establishes a reproducible standard for coding ability using the pass@k metric

**Related Terms**: benchmark, evaluation, functional correctness, pass@k, MBPP, SWE-bench

**Source**:

- [arXiv: "Evaluating Large Language Models Trained on Code" by Chen et al.](https://arxiv.org/abs/2107.03374)

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

## MBPP

**Definition**: acronym for _Mostly Basic Programming Problems_, also known as
_Mostly Basic Python Problems_; code generation benchmark with a corpus of more than 900 coding tasks

**Purpose**: assesses functional correctness based on passing a set of test cases,
evaluated in few-shot and fine-tuned settings

**Related Terms**: benchmark, evaluation, functional correctness, HumanEval, pass@k

**Source**:

- [arXiv: "Program Synthesis with Large Language Models" by Austin et al.](https://arxiv.org/abs/2108.07732)

---

## MMLU

**Definition**: acronym for _Massive Multitask Language Understanding_; benchmark assessing
breadth of knowledge, depth of natural language understanding and problem-solving from knowledge;
largely saturated by frontier LLMs, reducing its usefullness as a differentiator

**Purpose**: dataset of more than 15,000 multiple-choice general-knowledge questions across 57
subjects, scored by average per-subject accuracy in few-shot and zero-shot settings

**Related Terms**: benchmark, bounded scoring, evaluation, few-shot, LLM leaderboard

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

**Related Terms**: benchmark, Chatbot Arena, evaluation, functional correctness, LLM-as-a-Judge

**Source**:

- [arXiv: "Judging LLM-as-a-Judge with MT-Bench and Chatbot Arena" by Zheng et al.](https://arxiv.org/abs/2306.05685)

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

## pass@k

**Definition**: code generation evaluation metric measuring the probability that at least one of
_k_ generated solutions passes a problem's unit tests

**Purpose**: captures functional correctness across multiple generated candidates, used by
benchmarks such as HumanEval

**Related Terms**: benchmark, evaluation, functional correctness, HumanEval, MBPP

**Source**:

- [arXiv: "Evaluating Large Language Models Trained on Code" by Chen et al.](https://arxiv.org/abs/2107.03374)

---

## perplexity

**Definition**: measures how good an LLM is at prediction; statistical measure of LLM quality

**Purpose**: the lower an LLM's perplexity score, the better it is at comprehending a task

**Related Terms**: accuracy, benchmark, BLEU, evaluation, exact match, F1 score, ROUGE

**Source**:

- [IBM: "What Are LLM Benchmarks?" by Rina Diane Caballar, Cole Stryker](https://www.ibm.com/think/topics/llm-benchmarks)

---

## prompt injection vulnerability

**Definition**: measures the success rate of adversarial prompts that alter
an agent's intended behavior; safety-oriented metric tracked alongside functional quality,
bias-fairness score, and/or policy adherence rate

**Purpose**: identifies susceptibility to manipulation or misuse, part of ethical and
responsible AI and security evaluation

**Related Terms**: benchmark, evaluation, functional correctness, functional call evaluation

**Source**:

- [IBM: "What is AI agent evaluation?" by Cole Stryker, Michal Schmueli-Scheuer](https://www.ibm.com/think/topics/ai-agent-evaluation)

---

## recall

**Definition**: also called sensitivity rate; evaluation metric quantifying
correct predictions, specifically the number of true positives

**Purpose**: paired with precision and combined into the F1 score

**Related Terms**: accuracy, benchmark, evaluation, precision, F1 score

**Source**:

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

## ROUGE

**Definition**: acronym for _Recall-Oriented Understudy for Gisting Evaluation_; metric for
evaluating text summarization; ranges between 0 - 1, with higher scores indicating higher
similarity between automatically produced summary and the human-produced reference

**Purpose**: `ROUGE-N` performs similar `n-gram` calculations to BLEU for summaries; `ROUGE-L`
computes the longest common subsequence between the predicted summary and the human-produced summary

**Related Terms**: accuracy, BLEU, exact match, F1 score, recall, perplexity

**Sources**:

- [IBM: "What Are LLM Benchmarks?" by Rina Diane Caballar, Cole Stryker](https://www.ibm.com/think/topics/llm-benchmarks)
- [Wikipedia: "ROUGE (metric)"](https://en.wikipedia.org/wiki/ROUGE_(metric))

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

## SimpleQA

**Definition**: fact-seeking benchmark for measuring an LLM's ability to provide verifiable answers

**Purpose**: used to track hallucination rates for attempted answers; verifiable recall metrics from
such tests provide a baseline that general reasoning benchmarks often overlook

**Related Terms**: benchmark, evaluation, TruthfulQA

**Source**:

- [OpenAI: "Introducing SimpleQA" by Jason Wei et al.](https://openai.com/index/introducing-simpleqa/)

---

## SWE-bench

**Definition**: code generation evaluation framework focused on issue resolution; LLMs are tasked with
fixing a bug or addressing a feature request in a specific code base

**Purpose**: assessment metric is the percentage of resolved task instances, testing
real-world software maintenance ability

**Related Terms**: benchmark, evaluation, functional correctness, HumanEval

**Source**:

- [arXiv: "SWE-bench: Can Language Models Resolve Real-World GitHub Issues?" by Jimenez et al.](https://arxiv.org/abs/2310.06770)

---

## task completion rate

**Definition**: evaluation metric measuring how effectively an agent or system
helps users complete a task

**Purpose**: used for task-specific and interaction/user-experience evaluation;
closely related to success rate, the proportion of tasks or goals completed correctly

**Related Terms**: benchmark, error rate, evaluation, functional correctness, function calling evaluation

**Source**:

- [IBM: "What is AI agent evaluation?" by Cole Stryker, Michal Schmueli-Scheuer](https://www.ibm.com/think/topics/ai-agent-evaluation)

---

## TruthfulQA

**Definition**: benchmark measuring an LLM's ability to generate truthful answers to questions;
addresses the tendency of LLMs to hallucinate and produce inaccurate outputs

**Purpose**: dataset contains 817 questions spanning 38 subjects including health, law, finance, and politics;
combines human evaluation with `GPT`s LLM fine-tuned on BLEU and ROUGE to predict human assessments of
informativeness and truthfulness; largest models were generally least truthful

**Related Terms**: benchmark, evaluation, hallucination, SimpleQA

**Source**:

- [arXiv: "TruthfulQA: Measuring How Models Mimic Human Falsehoods" by Lin et al.](https://arxiv.org/abs/2109.07958)

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

## Winogrande

**Definition**: benchmark evaluating an LLM's common sense reasoning capabilities;
builds on the original WSC, _Winograd Schema Challenge_ with 44,000 crowdsourced problems
using adversarial filtering

**Purpose**: scored based on accuracy, measuring coreference resolution and common sense reasoning

**Related Terms**: adversarial filtering, HellaSwag

**Source**:

- [arXiv: "WinoGrande: An Adversarial Winograd Schema Challenge at Scale" by Sakaguchi et al.](https://arxiv.org/abs/1907.10641)
