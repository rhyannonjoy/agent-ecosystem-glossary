---
title: "Research"
weight: 4
bookToc: true
---

# Research

Foundational concepts and methodology for designing, conducting, and interpreting research on AI
and agent systems. Understand how experiments are classified along the controlled-to-natural
spectrum to choose an appropriate design, then apply qualitative or quantitative analysis to draw
conclusions from the resulting data.

Visit [Qualitative Research & Analysis]({{< relref "qualitative" >}}) for methods that make sense
of non-numerical data and [Statistics & Quantitative Methods]({{< relref "quantitative" >}}) for
the statistical toolkit used to test and quantify claims.

---

## A/B test

**Definition**: also known as split testing and/or randomized controlled trial; experimental method
that randomly assigns participants to treatment or control groups to compare two versions of
something and determine which performs better

**Purpose**: commonly used by tech companies to test features, interfaces, or algorithms; isolates
the effect of a single change by holding all other conditions constant across groups

**Related Terms**: [controlled vs natural]({{< relref "/research" >}}#controlled-vs-natural), [experimental design]({{< relref "/research" >}}#experimental-design), [natural AI experiment]({{< relref "/research" >}}#natural-ai-experiment)

---

## conceptual AI experiment

**Definition**: test type in which AI exists as a label or framing device, but no AI is actually
implemented; typically uses vignettes or scenarios to model the operational principles or
consequences of AI

**Purpose**: offers high feasibility and is easy to scale and replicate, letting researchers study
impractical or impossible scenarios; trades off lower naturalness since subjects don't interact
with actual AI

**Related Terms**: [natural AI experiment]({{< relref "/research" >}}#natural-ai-experiment), [quasinatural AI experiment]({{< relref "/research" >}}#quasinatural-ai-experiment), [stylized AI experiment]({{< relref "/research" >}}#stylized-ai-experiment), [vignette study]({{< relref "/research" >}}#vignette-study)

---

## controlled vs natural

**Definition**: experimental design distinction based on environment; controlled experiments are
conducted in artificial settings - labs, online platforms - where researchers manipulate variables,
while natural experiments are conducted in real-world settings - workplaces, platforms, markets -
where AI is actually used

**Purpose**: frames the trade-off between control/replicability and external validity/
generalizability when choosing where to run a study

**Related Terms**: [A/B test]({{< relref "/research" >}}#ab-test), [experimental design]({{< relref "/research" >}}#experimental-design), [natural AI experiment]({{< relref "/research" >}}#natural-ai-experiment)

---

## edge case

**Definition**: scenario or condition that occurs at extreme operating parameters or unusual
circumstances; falls outside normal operating conditions but within specified boundaries

**Purpose**: critical for testing AI reliability and robustness; surfaces failure modes that
typical inputs don't exercise

**Example**: unusual inputs, rare combinations of factors, boundary conditions

**Related Terms**: [empirical testing]({{< relref "/research" >}}#empirical-testing), [proxy test]({{< relref "/research" >}}#proxy-test)

---

## empirical testing

**Definition**: validation approach based on observation and experimentation rather than theory
alone; applies algorithms with actual users, tasks, or environments to measure performance

**Purpose**: uses real data and measurable outcomes to evaluate hypotheses, grounding claims about
AI performance in observed behavior rather than theoretical argument

**Related Terms**: [edge case]({{< relref "/research" >}}#edge-case), [evaluation]({{< relref "/evaluation" >}}#evaluation-1), [experimental design]({{< relref "/research" >}}#experimental-design)

---

## experimental design

**Definition**: systematic planning of how to conduct an experiment to answer a research question;
defines variables, treatments, control conditions, randomization, and measurement approach

**Purpose**: isolates causal effects while minimizing confounding factors; guides decisions about
sample size, data collection methods, and analysis approach before a study begins

**Related Terms**: [A/B test]({{< relref "/research" >}}#ab-test), [controlled vs natural]({{< relref "/research" >}}#controlled-vs-natural), [statistical inference]({{< relref "/research/quantitative" >}}#statistical-inference)

---

## natural AI experiment

**Definition**: test type that features AI in environments where it is actually used - platforms,
workplaces, real services; often takes the form of A/B tests run by organizations to improve
products or operations

**Purpose**: yields the highest naturalness and directly applicable findings; trades off low
feasibility, difficulty replicating results, narrow scope, and limited control compared to
controlled study designs

**Related Terms**: [A/B test]({{< relref "/research" >}}#ab-test), [conceptual AI experiment]({{< relref "/research" >}}#conceptual-ai-experiment), [controlled vs natural]({{< relref "/research" >}}#controlled-vs-natural), [quasinatural AI experiment]({{< relref "/research" >}}#quasinatural-ai-experiment), [stylized AI experiment]({{< relref "/research" >}}#stylized-ai-experiment)

---

## proxy test

**Definition**: indirect measure used to evaluate something difficult to assess directly;
substitutes an observable indicator for an unmeasurable or impractical characteristic

**Purpose**: easier to apply than a direct measure, at the cost of occasionally misclassifying
cases where the indicator and the underlying characteristic diverge

**Example**: using "developed exclusively for research" as a proxy for AI sophistication

**Related Terms**: [edge case]({{< relref "/research" >}}#edge-case), [empirical testing]({{< relref "/research" >}}#empirical-testing)

---

## quasinatural AI experiment

**Definition**: test type that combines the naturalness of real AI systems with the feasibility of
lab experiments

**Purpose**: enables naturalistic AI and broad research scope with easier data collection than
natural experiments; in exchange, researchers give up some control over algorithm construction

**Example**: testing commercial chatbots in controlled studies, pilot experiments before product
launch

**Related Terms**: [conceptual AI experiment]({{< relref "/research" >}}#conceptual-ai-experiment), [natural AI experiment]({{< relref "/research" >}}#natural-ai-experiment), [stylized AI experiment]({{< relref "/research" >}}#stylized-ai-experiment)

---

## stylized AI experiment

**Definition**: test type conducted in a controlled environment, since the AI typically doesn't
exist outside the study; AI is tailored to a research question using rule-based algorithms,
historical data replication, or reinforcement learning

**Purpose**: gives tight control over algorithm features and is feasible, replicable, and broad in
scope; trades off lower naturalness compared to real-world AI systems

**Related Terms**: [conceptual AI experiment]({{< relref "/research" >}}#conceptual-ai-experiment), [natural AI experiment]({{< relref "/research" >}}#natural-ai-experiment), [quasinatural AI experiment]({{< relref "/research" >}}#quasinatural-ai-experiment)

---

## vignette study

**Definition**: research method presenting hypothetical scenarios to elicit preferences or
judgments; participants read descriptions of situations and state what they would do

**Purpose**: can model any situation without implementation constraints and is easy to scale;
common in conceptual AI experiments studying ethical dilemmas or preference patterns, though
responses may not reflect actual behavior and carry lower external validity

**Related Terms**: [conceptual AI experiment]({{< relref "/research" >}}#conceptual-ai-experiment)

---
