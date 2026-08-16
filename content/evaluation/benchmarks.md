---
title: "Benchmarks"
weight: 3
bookToc: true
parent: "evaluation"
---

# Benchmarks

Named, standardized datasets and tasks used to measure and compare model and agent
performance across capabilities such as reasoning, code, dialogue and knowledge.

---

## ARC

**Definition**: acronym for _AI2 Reasoning Challenge_; benchmark measuring question answering and
reasoning through more than 7,000 grade-school natural science questions

**Purpose**: evaluates an LLM's ability to reason over grade-school science knowledge, including
both an easy set and a challenge set of harder questions requiring multi-step reasoning

**Related Terms**: benchmark, evaluation, few-shot, MMLU, zero-shot

**Source**:

- [arXiv: "Think you have Solved Question Answering? Try ARC, the AI2 Reasoning Challenge" by Clark et al.](https://arxiv.org/abs/1803.05457)

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

## Winogrande

**Definition**: benchmark evaluating an LLM's common sense reasoning capabilities;
builds on the original WSC, _Winograd Schema Challenge_ with 44,000 crowdsourced problems
using adversarial filtering

**Purpose**: scored based on accuracy, measuring coreference resolution and common sense reasoning

**Related Terms**: adversarial filtering, HellaSwag

**Source**:

- [arXiv: "WinoGrande: An Adversarial Winograd Schema Challenge at Scale" by Sakaguchi et al.](https://arxiv.org/abs/1907.10641)
