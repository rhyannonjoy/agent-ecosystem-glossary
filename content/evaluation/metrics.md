---
title: "Metrics & Scoring"
weight: 4
bookToc: true
parent: "evaluation"
---

# Metrics & Scoring

Approaches used to quantify LLM and/or agent performance across the
benchmarks and customized evaluations.

---

## accuracy

**Definition**: also known as precision; percentage of correct predictions made by an LLM; foundational
to evaluation, the most widely reported scoring metric in benchmarks and/or leaderboards; paired with
recall and combined into the F1 score

**Purpose**: serves as the primary quantitative metric across classification; provides a single number
for comparing how often an LLM produces a correct answer

**Example**: a benchmark with 100 questions where an LLM answers 93 correctly yields 93% accuracy

**Related Terms**: [benchmark]({{< relref "/evaluation" >}}#benchmark), [evaluation]({{< relref "/evaluation" >}}#evaluation-1), [exact match]({{< relref "/evaluation/metrics" >}}#exact-match), [F1 score]({{< relref "/evaluation/metrics" >}}#f1-score), [recall]({{< relref "/evaluation/metrics" >}}#recall)

**Source**: [IBM: "What Are LLM Benchmarks?" by Rina Diane Caballar, Cole Stryker](https://www.ibm.com/think/topics/llm-benchmarks)

---

## bias and fairness score

**Definition**: evaluation metric detecting disparities in AI decision-making across different user groups;
part of ethical and responsible AI evaluation

**Purpose**: used to identify and mitigate systematic favoritism or discrimination in agent outputs,
ensuring decisions do not disadvantage particular groups

**Related Terms**: [accuracy]({{< relref "/evaluation/metrics" >}}#accuracy), [benchmark]({{< relref "/evaluation" >}}#benchmark), [evaluation]({{< relref "/evaluation" >}}#evaluation-1), [policy adherence rate]({{< relref "/evaluation/metrics" >}}#policy-adherence-rate), [prompt injection vulnerability]({{< relref "/evaluation/metrics" >}}#prompt-injection-vulnerability)

**Source**: [IBM: "What is AI agent evaluation?" by Cole Stryker, Michal Schmueli-Scheuer](https://www.ibm.com/think/topics/ai-agent-evaluation)

---

## BERTScore

**Definition**: automatic evaluation metric for text generation quality; computes token-level
similarity using contextual embeddings from BERT, the sum of cosine similarities; evaluates
semantic similarity rather than exact _n_-gram matching between candidate and reference sentences

**Purpose**: provides better correlation with human judgments than traditional metrics like
BLEU and ROUGE by capturing semantic meaning; robust to adversarial examples and paraphrasing -
performant against intentionally deceptive text

**Example**: with reference text _"people like Western cuisine,"_ _n_-gram metrics would score
_"people like global flavors"_ higher than _"consumers prefer imported spices"_ despite the
latter being semantically closer

**Related Terms**: [BERT]({{< relref "/evaluation/metrics" >}}#bert), [BLEU]({{< relref "/evaluation/metrics" >}}#bleu), [ROUGE]({{< relref "/evaluation/metrics" >}}#rouge), [semantic evaluation]({{< relref "/evaluation" >}}#semantic-evaluation)

**Sources**:

- [arXiv: "BERTScore: Evaluating Text Generation with BERT" by Zhang et al.](https://arxiv.org/abs/1904.09675)
- ["BERTScore Explained in 5 minutes" by Abonia Sojasingarayar](https://medium.com/@abonia/bertscore-explained-in-5-minutes-0b98553bfb71)

---

## BLEU

**Definition**: acronym for _Bilingual Evaluation Understudy_; one of the canonical
automated metrics used to score LLM output on translation-style semantic meaning;
evaluates machine translation by computing matching _n_-grams - sequences of _n_ adjacent
text symbols - between an LLM's predicted translation and a human-produced translation;
common Python implementation includes [the NLTK, _Natural Language Toolkit_](https://www.nltk.org/)

**Purpose**: provides a lower-cost alternative to ground-truth-based evaluation; complements
human evaluation of coherence, relevance and semantic meaning

**Example**: for reference _"The cat is on the mat"_ and output _"The cat on the mat"_,
BLEU computes modified _n_-gram precision, clipped to prevent overcounting, and applies
a brevity penalty for shorter outputs; with 1-gram precision 1.0, 2-gram precision 0.75,
and brevity penalty 0.8187, the resulting BLEU score is approximately 0.709

**Related Terms**: [benchmark]({{< relref "/evaluation" >}}#benchmark), [evaluation]({{< relref "/evaluation" >}}#evaluation-1), [exact match]({{< relref "/evaluation/metrics" >}}#exact-match), [ground truth]({{< relref "/evaluation" >}}#ground-truth), [_n_-gram]({{< relref "/evaluation/metrics" >}}#n-gram), [ROUGE]({{< relref "/evaluation/metrics" >}}#rouge)

**Sources**:

- [IBM: "What Are LLM Benchmarks?" by Rina Diane Caballar, Cole Stryker](https://www.ibm.com/think/topics/llm-benchmarks)
- [Machine Learning Mastery: "Statistical Methods for Evaluating LLM Performance" by Cornellius Yuda Wijaya](https://machinelearningmastery.com/statistical-methods-for-evaluating-llm-performance/)

---

## conversational flow

**Definition**: interaction metric evaluating an AI's ability to maintain coherent and meaningful
conversations; part of interaction and user experience evaluation for chatbots and virtual assistants

**Purpose**: assesses whether an agent sustains natural, on-topic dialogue across turns, informing
how well it serves conversational-interface use cases

**Related Terms**: [benchmark]({{< relref "/evaluation" >}}#benchmark), [engagement rate]({{< relref "/evaluation/metrics" >}}#engagement-rate), [evaluation]({{< relref "/evaluation" >}}#evaluation-1), [task completion rate]({{< relref "/evaluation/metrics" >}}#task-completion-rate)

**Source**: [IBM: "What is AI agent evaluation?" by Cole Stryker, Michal Schmueli-Scheuer](https://www.ibm.com/think/topics/ai-agent-evaluation)

---

## cost-efficiency

**Definition**: evaluation metric measuring the computational resources required relative to task
performance; factors include token usage, API calls, processing time and energy consumption

**Purpose**: increasingly important as agents scale to production, helping teams balance performance
against cost; highlights the trade-off that higher accuracy often requires higher costs

**Example**: _cost per completed task_ divides attempt cost by completion rate; on OSWorld 2.0
long-horizon work, `Claude Opus 4.8` averages ~$29.60 per completed task versus `GPT-5.5`'s ~$8.70

**Related Terms**: [benchmark]({{< relref "/evaluation" >}}#benchmark), [evaluation]({{< relref "/evaluation" >}}#evaluation-1),
[latency]({{< relref "/evaluation/metrics" >}}#latency), [task completion rate]({{< relref "/evaluation/metrics" >}}#task-completion-rate),
[OSWorld]({{< relref "/evaluation/benchmarks" >}}#osworld)

**Source**: [o-mega: "AI Computer Use Benchmarks 2026: Top Agents Ranked"](https://o-mega.ai/articles/the-2025-2026-guide-to-ai-computer-use-benchmarks-and-top-ai-agents)

---

## CSAT

**Definition**: acronym for _Customer Satisfaction score_; interaction metric measuring how
satisfied users are with a product and/or agent responses

**Purpose**: typically gathered through post-interaction surveys, giving direct feedback on whether
responses meet user expectations

**Related Terms**: [conversational flow]({{< relref "/evaluation/metrics" >}}#conversational-flow), [engagement rate]({{< relref "/evaluation/metrics" >}}#engagement-rate), [evaluation]({{< relref "/evaluation" >}}#evaluation-1), [task completion rate]({{< relref "/evaluation/metrics" >}}#task-completion-rate)

**Source**: [IBM: "What is CSAT and how to calculate it?"](https://www.ibm.com/think/topics/csat-customer-satisfaction-score)

---

## Discriminability Score

**Definition**: metric used to filter benchmark datasets by identifying tasks that separate
a good response from a bad one; supports building lean, custom benchmarks that provide
a stronger signal than large, generic ones

**Purpose**: intends to reduce test size while maintaining evaluation accuracy; creates
a tighter, faster regression suite by removing redundant questions

**Example**: a team prunes hundreds of redundant questions down to the edge cases and
reasoning tasks that actually differentiate its application

**Related Terms**: [benchmark]({{< relref "/evaluation" >}}#benchmark), [evaluation]({{< relref "/evaluation" >}}#evaluation-1), [golden dataset]({{< relref "/evaluation" >}}#golden-dataset), [regression testing]({{< relref "/evaluation" >}}#regression-testing)

**Source**: [HumanSignal, Label Studio: "LLM Evaluation vs. LLM Benchmarking"](https://labelstud.io/learningcenter/llm-evaluation-vs-llm-benchmarking/)

---

## engagement rate

**Definition**: interaction metric tracking how often users interact with a system;
part of interaction and user experience evaluation

**Purpose**: signals how frequently and consistently users engage with a product and/or system,
helping assess whether it retains interest and delivers value over time

**Related Terms**: [conversational flow]({{< relref "/evaluation/metrics" >}}#conversational-flow), [CSAT]({{< relref "/evaluation/metrics" >}}#csat), [evaluation]({{< relref "/evaluation" >}}#evaluation-1), [task completion rate]({{< relref "/evaluation/metrics" >}}#task-completion-rate)

**Source**: [Leanware: "Agent Evaluation Frameworks: Methods, Metrics & Best Practices"](https://leanware.co/insights/agent-evaluation-frameworks-methods-metrics-best-practices)

---

## error rate

**Definition**: measures the percentage of incorrect outputs or failed operations,
tracked alongside success and task completion rates

**Purpose**: provides an inverse view of success, helping teams quantify failures and failed operations

**Related Terms**: [benchmark]({{< relref "/evaluation" >}}#benchmark), [evaluation]({{< relref "/evaluation" >}}#evaluation-1), [function calling evaluation]({{< relref "/evaluation" >}}#function-calling-evaluation), [task completion rate]({{< relref "/evaluation/metrics" >}}#task-completion-rate)

**Source**: [IBM: "What is AI agent evaluation?" by Cole Stryker and Michal Schmueli-Scheuer](https://www.ibm.com/think/topics/ai-agent-evaluation)

---

## exact match

**Definition**: common ground truth metric for generative tasks;
proportion of an LLM's predictions that match the expected answer exactly

**Purpose**: valuable criterion for translation and question-answering benchmarks;
stricter than semantic similarity metrics

**Related Terms**: [accuracy]({{< relref "/evaluation/metrics" >}}#accuracy), [benchmark]({{< relref "/evaluation" >}}#benchmark), [BLEU]({{< relref "/evaluation/metrics" >}}#bleu), [evaluation]({{< relref "/evaluation" >}}#evaluation-1), [ground truth]({{< relref "/evaluation" >}}#ground-truth), [ROUGE]({{< relref "/evaluation/metrics" >}}#rouge)

**Source**: [IBM: "What Are LLM Benchmarks?" by Rina Diane Caballar, Cole Stryker](https://www.ibm.com/think/topics/llm-benchmarks)

---

## F1 score

**Definition**: common combined metric in classsification and retrieval evaluation;
blends accuracy and recall into a single measure; treats the two as equally weighted
to balance false positives and false negatives

**Purpose**: provides a single 0-1 score where 1 signifies excellent recall and precision,
useful when both false positives and false negatives matter

**Related Terms**: [accuracy]({{< relref "/evaluation/metrics" >}}#accuracy), [benchmark]({{< relref "/evaluation" >}}#benchmark), [evaluation]({{< relref "/evaluation" >}}#evaluation-1), [recall]({{< relref "/evaluation/metrics" >}}#recall)

**Source**: [IBM: "What Are LLM Benchmarks?" by Rina Diane Caballar, Cole Stryker](https://www.ibm.com/think/topics/llm-benchmarks)

---

## Flesch–Kincaid readability tests

**Definition**: metric designed to indicate how difficult a passage in English is to understand;
score reflects the U.S. grade level needed to comprehend the text

**Purpose**: quantifies output readability for user-facing text, complementing metrics that measure
factual or semantic quality

**Related Terms**: [Gunning fog index]({{< relref "/evaluation/metrics" >}}#gunning-fog-index)

---

## Gunning fog index

**Definition**: readability test that estimates the years of formal education needed to understand
text on first reading

**Purpose**: a score of 12 indicates high school senior level, giving teams a plain-language
benchmark for output complexity

**Related Terms**: [Flesch–Kincaid readability tests]({{< relref "/evaluation/metrics" >}}#fleschkincaid-readability-tests)

---

## harmonic mean

**Definition**: mathematical average of two numbers calculated by dividing the number of items
by the sum of their reciprocals; used in metrics like F1 score to combine precision and recall

**Purpose**: provides a balanced average that penalizes extreme values more than arithmetic mean;
ideal for combining metrics where both components matter, such as precision and recall in
classification evaluation

**Example**: F1 score is the harmonic mean of precision and recall; if precision is `0.8` and recall
is `0.6` then -

```bash
F1 = 2 × (0.8 × 0.6) / (0.8 + 0.6) ≈ 0.686
```

**Related Terms**: [F1 score]({{< relref "/evaluation/metrics" >}}#f1-score), [accuracy]({{< relref "/evaluation/metrics" >}}#accuracy), [recall]({{< relref "/evaluation/metrics" >}}#recall)

**Sources**:

- [Machine Learning Mastery: "Statistical Methods for Evaluating LLM Performance" by Cornellius Yuda Wijaya](https://machinelearningmastery.com/statistical-methods-for-evaluating-llm-performance/)
- [Wikipedia: "Harmonic mean"](https://en.wikipedia.org/wiki/Harmonic_mean)

---

## latency

**Definition**: evaluation metric measuring the time taken for an AI agent or system to process and
return results; an important resource-efficiency concern alongside cost

**Purpose**: critical when AI must deliver real-time, contextually accurate responses, since slow
response times undermine interactive and production use cases

**Related Terms**: [cost-efficiency]({{< relref "/evaluation/metrics" >}}#cost-efficiency), [evaluation]({{< relref "/evaluation" >}}#evaluation-1), [task completion rate]({{< relref "/evaluation/metrics" >}}#task-completion-rate)

**Source**: [Leanware: "Agent Evaluation Frameworks: Methods, Metrics & Best Practices"](https://leanware.co/insights/agent-evaluation-frameworks-methods-metrics-best-practices)

---

## METEOR

**Definition**: acronym for _Metric for Evaluation of Translation with Explicit ORdering_;
automatic metric for evaluating machine translation output; computes score based on the
harmonic mean of unigram precision and recall with recall weighted higher than precision;
includes stemming, synonymy, and paraphrase matching beyond exact word matching

**Purpose**: addresses BLEU's limitations by incorporating linguistic factors like stemming and
synonymy; designed to achieve better correlation with human judgment at the sentence level

**Example**: for reference _"the cat sat on the mat"_ and hypothesis _"the cat was sat on the mat"_,
METEOR computes precision and recall, applies a fragmentation penalty for non-adjacent word
matches, yielding a final score reflecting both word-level and sequence-level similarity

**Related Terms**: [BLEU]({{< relref "/evaluation/metrics" >}}#bleu), [ROUGE]({{< relref "/evaluation/metrics" >}}#rouge), [harmonic mean]({{< relref "/evaluation/metrics" >}}#harmonic-mean), [_n_-gram]({{< relref "/evaluation/metrics" >}}#n-gram)

**Sources**:

- [Machine Learning Mastery: "Statistical Methods for Evaluating LLM Performance" by Cornellius Yuda Wijaya](https://machinelearningmastery.com/statistical-methods-for-evaluating-llm-performance/)
- [Wikipedia: "METEOR"](https://en.wikipedia.org/wiki/METEOR)

---

## _n_-gram

**Definition**: sequence used in computational linguistics and natural language processing to
analyze text patterns; contiguous sequence of `n` items from a given sample of text;
unigrams (n=1), bigrams (n=2), trigrams (n=3) are common

**Purpose**: capture local word order and co-occurence patterns; fundamental building block for
metrics like BLEU and ROUGE that evaluate translation and summarization quality by comparing
_n_-gram overlap between machine-generated and human-produced text

**Example**: in the phrase _"the cat sat on the mat"_, the bigrams, all possible contiguous two-word
sequences, are _"the cat"_, _"cat sat"_, _"sat on"_, _"on the"_, _"the mat"_; each bigram consists of
two adjacent words, moving one word at a time through the phrase

**Related Terms**: [BLEU]({{< relref "/evaluation/metrics" >}}#bleu), [ROUGE]({{< relref "/evaluation/metrics" >}}#rouge), [exact match]({{< relref "/evaluation/metrics" >}}#exact-match)

**Sources**:

- [Machine Learning Mastery: "Statistical Methods for Evaluating LLM Performance" by Cornellius Yuda Wijaya](https://machinelearningmastery.com/statistical-methods-for-evaluating-llm-performance/)
- [Wikipedia: "_n_-gram"](https://en.wikipedia.org/wiki/N-gram)

---

## parameter value grounding

**Definition**: semantic function-calling metric based on LLM-as-a-judge that verifies every parameter
value is directly derived from the user's text, the context history, or API specification defaults

**Purpose**: detects fabricated or unsupported argument values, checking that the agent's parameter
choices are grounded in available context rather than invented

**Related Terms**: [function calling evaluation]({{< relref "/evaluation" >}}#function-calling-evaluation), [LLM-as-judge]({{< relref "/evaluation" >}}#llm-as-judge), [semantic evaluation]({{< relref "/evaluation" >}}#semantic-evaluation), [unit transformation]({{< relref "/evaluation/metrics" >}}#unit-transformation)

---

## pass@k

**Definition**: code generation evaluation metric measuring the probability that at least one of
_k_ generated solutions passes a problem's unit tests

**Purpose**: captures functional correctness across multiple generated candidates, used by
benchmarks such as HumanEval

**Related Terms**: [benchmark]({{< relref "/evaluation" >}}#benchmark), [evaluation]({{< relref "/evaluation" >}}#evaluation-1), [functional correctness]({{< relref "/evaluation" >}}#functional-correctness), [HumanEval]({{< relref "/evaluation/benchmarks" >}}#humaneval), [MBPP]({{< relref "/evaluation/benchmarks" >}}#mbpp)

**Source**: [arXiv: "Evaluating Large Language Models Trained on Code" by Chen et al.](https://arxiv.org/abs/2107.03374)

---

## perplexity

**Definition**: measures how good an LLM is at prediction; statistical measure of LLM quality

**Purpose**: the lower an LLM's perplexity score, the better it is at comprehending a task

**Related Terms**: [accuracy]({{< relref "/evaluation/metrics" >}}#accuracy), [benchmark]({{< relref "/evaluation" >}}#benchmark), [BLEU]({{< relref "/evaluation/metrics" >}}#bleu), [evaluation]({{< relref "/evaluation" >}}#evaluation-1), [exact match]({{< relref "/evaluation/metrics" >}}#exact-match), [F1 score]({{< relref "/evaluation/metrics" >}}#f1-score), [ROUGE]({{< relref "/evaluation/metrics" >}}#rouge)

**Source**: [IBM: "What Are LLM Benchmarks?" by Rina Diane Caballar, Cole Stryker](https://www.ibm.com/think/topics/llm-benchmarks)

---

## policy adherence rate

**Definition**: evaluation metric measuring the percentage of responses that comply with predefined
organizational or ethical policies; part of ethical and responsible AI evaluation

**Purpose**: verifies agents respect enterprise guardrails and compliance requirements, flagging
behaviors that deviate from documented policy

**Related Terms**: [benchmark]({{< relref "/evaluation" >}}#benchmark), [bias and fairness score]({{< relref "/evaluation/metrics" >}}#bias-and-fairness-score), [evaluation]({{< relref "/evaluation" >}}#evaluation-1), [prompt injection vulnerability]({{< relref "/evaluation/metrics" >}}#prompt-injection-vulnerability)

**Source**: [IBM: "What is AI agent evaluation?" by Cole Stryker, Michal Schmueli-Scheuer](https://www.ibm.com/think/topics/ai-agent-evaluation)

---

## prompt injection vulnerability

**Definition**: ethical and security evaluation metric measuring the success rate of adversarial
prompts that alter an agent's intended behavior; safety-oriented metric tracked alongside functional
quality, bias and fairness score, and/or policy adherence rate

**Purpose**: identifies susceptibility to manipulation or misuse, forming part of ethical, responsible
AI, and security evaluation

**Example**: agentic browsers raise the stakes of this vulnerability - instructions hidden in a web
page, PDF, email, or filename that the agent perceives while browsing can redirect it to act with
the user's own authenticated identity and session rather than the user's actual intent

**Related Terms**: [bias and fairness score]({{< relref "/evaluation/metrics" >}}#bias-and-fairness-score), [canary phrase]({{< relref "/evaluation" >}}#canary-phrase), [evaluation]({{< relref "/evaluation" >}}#evaluation-1), [functional correctness]({{< relref "/evaluation" >}}#functional-correctness), [permission and safety systems]({{< relref "/anatomy" >}}#permission-and-safety-systems), [policy adherence rate]({{< relref "/evaluation/metrics" >}}#policy-adherence-rate)

**Sources**:

- [IBM: "What is AI agent evaluation?" by Cole Stryker, Michal Schmueli-Scheuer](https://www.ibm.com/think/topics/ai-agent-evaluation)
- [o-mega: "AI Computer Use Benchmarks 2026: Top Agents Ranked"](https://o-mega.ai/articles/the-2025-2026-guide-to-ai-computer-use-benchmarks-and-top-ai-agents)

---

## recall

**Definition**: also called sensitivity rate; evaluation metric quantifying
correct predictions, specifically the number of true positives

**Purpose**: paired with precision and combined into the F1 score

**Related Terms**: [accuracy]({{< relref "/evaluation/metrics" >}}#accuracy), [benchmark]({{< relref "/evaluation" >}}#benchmark), [evaluation]({{< relref "/evaluation" >}}#evaluation-1), [F1 score]({{< relref "/evaluation/metrics" >}}#f1-score)

**Source**: [IBM: "What Are LLM Benchmarks?" by Rina Diane Caballar, Cole Stryker](https://www.ibm.com/think/topics/llm-benchmarks)

---

## ROUGE

**Definition**: acronym for _Recall-Oriented Understudy for Gisting Evaluation_; metric for
evaluating text summarization; ranges between 0 - 1, with higher scores indicating higher
similarity between automatically produced summary and the human-produced reference

**Purpose**: evaluates recall-oriented overlap between generated text and reference; particularly
effective for summarization where capturing all critical information matters; variants address
different aspects of text similarity -

| **Variant** | **Description** | **Use Case** |
| --- | --- | --- |
| **ROUGE-N** | Computes _n_-gram overlap, ROUGE-1 for unigrams, ROUGE-2 for bigrams | Measures content coverage, word overlap |
| **ROUGE-L** | Uses LCS, _longest common subsequence_, measures sentence similarity | Evaluates fluency, grammatical coherence |
| **ROUGE-W** | Weighted LCS giving higher scores to consecutive matches | Rewards longer consecutive word sequences |
| **ROUGE-S** | Skip-bigram matching allowing non-adjacent word pairs | Captures semantic similarity with flexible word order |

**Example**: for reference _"The cat is on the mat"_ and candidate _"The cat on the mat"_,
ROUGE-1 recall is 0.833, 5/6 unigrams matched, ROUGE-2 recall is 0.6, 3/5 bigrams matched,
and ROUGE-L F1 is 0.909 based on the longest common subsequence

**Related Terms**: [accuracy]({{< relref "/evaluation/metrics" >}}#accuracy), [BLEU]({{< relref "/evaluation/metrics" >}}#bleu), [exact match]({{< relref "/evaluation/metrics" >}}#exact-match), [F1 score]({{< relref "/evaluation/metrics" >}}#f1-score), [_n_-gram]({{< relref "/evaluation/metrics" >}}#_n_-gram), [recall]({{< relref "/evaluation/metrics" >}}#recall), [perplexity]({{< relref "/evaluation/metrics" >}}#perplexity)

**Sources**:

- [IBM: "What Are LLM Benchmarks?" by Rina Diane Caballar, Cole Stryker](https://www.ibm.com/think/topics/llm-benchmarks)
- [Machine Learning Mastery: "Statistical Methods for Evaluating LLM Performance" by Cornellius Yuda Wijaya](https://machinelearningmastery.com/statistical-methods-for-evaluating-llm-performance/)
- [Wikipedia: "ROUGE (metric)"](https://en.wikipedia.org/wiki/ROUGE_(metric))

---

## task completion rate

**Definition**: evaluation metric measuring how effectively an agent or system
helps users complete a task; _cost per completed task_ divides attempt cost by
completion rate

**Purpose**: used for task-specific and interaction/user-experience evaluation;
closely related to success rate, the proportion of tasks or goals completed correctly;
computer-use benchmarks report it by task horizon - short, minutes-scale, vs long -
hour-scale, cross-application - since frontier models solve 85%+ of short-horizon
work but only ~20% of long-horizon work

**Example**: `OSWorld 2.0`'s 108 long-horizon professional workflows, with a median
1.6-hour human completion time, remain largely unsolved even as short-horizon tasks saturate

**Related Terms**: [benchmark]({{< relref "/evaluation" >}}#benchmark), [cost-efficiency]({{< relref "/evaluation/metrics" >}}#cost-efficiency),
[error rate]({{< relref "/evaluation/metrics" >}}#error-rate), [evaluation]({{< relref "/evaluation" >}}#evaluation-1),
[functional correctness]({{< relref "/evaluation" >}}#functional-correctness),
[function calling evaluation]({{< relref "/evaluation" >}}#function-calling-evaluation),
[OSWorld]({{< relref "/evaluation/benchmarks" >}}#osworld)

**Sources**:

- [IBM: "What is AI agent evaluation?" by Cole Stryker, Michal Schmueli-Scheuer](https://www.ibm.com/think/topics/ai-agent-evaluation)
- [o-mega: "AI Computer Use Benchmarks 2026: Top Agents Ranked"](https://o-mega.ai/articles/the-2025-2026-guide-to-ai-computer-use-benchmarks-and-top-ai-agents)

---

## unit transformation

**Definition**: semantic function-calling metric based on LLM-as-a-judge that verifies unit or format
conversions between values in the context and parameter values in the tool call

**Purpose**: detects incorrect conversions such as wrong currency, temperature scale, or measurement
unit, ensuring the agent transforms values correctly when invoking tools

**Related Terms**: [function calling evaluation]({{< relref "/evaluation" >}}#function-calling-evaluation), [LLM-as-judge]({{< relref "/evaluation" >}}#llm-as-judge), [parameter value grounding]({{< relref "/evaluation/metrics" >}}#parameter-value-grounding), [semantic evaluation]({{< relref "/evaluation" >}}#semantic-evaluation)

**Source**: [IBM: "What is AI agent evaluation?" by Cole Stryker, Michal Schmueli-Scheuer](https://www.ibm.com/think/topics/ai-agent-evaluation)

---

## VOC

**Definition**: acronym for _voice of the client_; data where people share problems they're
encountering, provide feedback, and seek further help

**Purpose**: invaluable for service and product improvement, surfacing real user pain points
alongside structured metrics like CSAT

**Related Terms**: [CSAT]({{< relref "/evaluation/metrics" >}}#csat), [engagement rate]({{< relref "/evaluation/metrics" >}}#engagement-rate)
