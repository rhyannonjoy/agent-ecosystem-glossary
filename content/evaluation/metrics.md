---
title: "Metrics & Scoring"
weight: 4
bookToc: true
parent: "evaluation"
---

# Metrics & Scoring

Scoring measures and approaches used to quantify LLM and agent performance across the
benchmarks and customized evaluations described throughout this glossary.

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

## recall

**Definition**: also called sensitivity rate; evaluation metric quantifying
correct predictions, specifically the number of true positives

**Purpose**: paired with precision and combined into the F1 score

**Related Terms**: accuracy, benchmark, evaluation, precision, F1 score

**Source**:

- [IBM: "What Are LLM Benchmarks?" by Rina Diane Caballar, Cole Stryker](https://www.ibm.com/think/topics/llm-benchmarks)

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

## task completion rate

**Definition**: evaluation metric measuring how effectively an agent or system
helps users complete a task

**Purpose**: used for task-specific and interaction/user-experience evaluation;
closely related to success rate, the proportion of tasks or goals completed correctly

**Related Terms**: benchmark, error rate, evaluation, functional correctness, function calling evaluation

**Source**:

- [IBM: "What is AI agent evaluation?" by Cole Stryker, Michal Schmueli-Scheuer](https://www.ibm.com/think/topics/ai-agent-evaluation)

---
