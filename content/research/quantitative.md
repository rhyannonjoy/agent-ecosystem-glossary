---
title: "Quantitative"
weight: 5
bookToc: true
parent: "research"
---

# Quantitative Methods

Statistical tools used to model data, test hypotheses, and quantify uncertainty when
evaluating agentic systems.

---

## Cohen's kappa coefficient

**Definition**: statistical measure of inter-rater agreement for categorical items; quantifies the
level of agreement between two raters while accounting for chance agreement

**Purpose**: verifies that a codebook is applied consistently across raters, supporting the
reliability of qualitative coding

**Related Terms**: [codebook]({{< relref "/research/qualitative" >}}#codebook), [qualitative research]({{< relref "/research/qualitative" >}}#qualitative-research)

---

## confidence interval

**Definition**: range of values likely to contain the true effect size, given the statistical
model's assumptions; commonly reported as a _95% confidence interval_ - if computed repeatedly
under valid conditions, 95% of such intervals will contain the true value

**Purpose**: width indicates the precision of an estimate, with narrower intervals signaling more
precise estimates; not to be confused with a _"95% probability the true value is in this range"_ for
any single interval

**Related Terms**: [null hypothesis]({{< relref "/research/quantitative" >}}#null-hypothesis), [P value]({{< relref "/research/quantitative" >}}#p-value), [statistical inference]({{< relref "/research/quantitative" >}}#statistical-inference)

---

## model checking

**Definition**: process of evaluating whether statistical model assumptions are satisfied by the
data; includes diagnostic tests for fit, examining residuals, and testing additional model terms

**Purpose**: identifies violations that could invalidate statistical inferences; itself relies on
further assumptions that become part of the full model

**Related Terms**: [statistical inference]({{< relref "/research/quantitative" >}}#statistical-inference), [statistical model]({{< relref "/research/quantitative" >}}#statistical-model)

---

## non-parametric methods

**Definition**: statistical techniques that make fewer assumptions about data distribution than
parametric methods; don't assume data follows a specific distribution, such as a normal
distribution

**Purpose**: somewhat misleadingly named, since these methods are not assumption-free; still
require assumptions such as random sampling or randomization

**Related Terms**: [statistical inference]({{< relref "/research/quantitative" >}}#statistical-inference), [statistical model]({{< relref "/research/quantitative" >}}#statistical-model)

---

## null hypothesis

**Definition**: premise proposing zero effect or no relationship between variables; serves as a
baseline for testing

**Purpose**: tested to determine if observed data are unusual enough to reject the hypothesis;
failure to reject doesn't prove the null is true, only that the data are compatible with it

**Example**: a treatment makes no difference in average outcome compared to control

**Related Terms**: [confidence interval]({{< relref "/research/quantitative" >}}#confidence-interval), [one-sided hypothesis]({{< relref "/research/quantitative" >}}#one-sided-hypothesis), [P value]({{< relref "/research/quantitative" >}}#p-value), [power]({{< relref "/research/quantitative" >}}#power)

---

## OLS regression

**Definition**: acronym for _Ordinary Least Squares_ regression; statistical method that estimates
relationships between variables by minimizing squared differences to find the best-fitting line
through data points

**Purpose**: used in AI testing to build simple prediction models based on historical data

**Related Terms**: [prediction model]({{< relref "/research/quantitative" >}}#prediction-model), [statistical model]({{< relref "/research/quantitative" >}}#statistical-model)

---

## one-sided hypothesis

**Definition**: also known as a _dividing hypothesis_; test premise about whether an effect is
greater than or less than a specific value

**Purpose**: differs from two-sided tests that check whether an effect differs in either direction

**Example**: testing whether a new treatment is at least as good as the standard treatment

**Related Terms**: [null hypothesis]({{< relref "/research/quantitative" >}}#null-hypothesis), [P value]({{< relref "/research/quantitative" >}}#p-value)

---

## power

**Definition**: probability that a statistical test will reject the test hypothesis when a specific
alternative is correct; calculated before a study to determine adequate sample size

**Purpose**: studies are typically designed for 80% power, meaning the test will detect a true
effect 80% of the time; doesn't measure compatibility of the alternative hypothesis with observed
data and shouldn't be used to interpret results after data collection

**Related Terms**: [null hypothesis]({{< relref "/research/quantitative" >}}#null-hypothesis), [P value]({{< relref "/research/quantitative" >}}#p-value)

---

## prediction model

**Definition**: algorithm or statistical model that forecasts outcomes based on input data; learns
patterns from training data to make predictions about new cases

**Purpose**: ranges from basic regression models to complex neural networks; accuracy depends on
data quality, feature selection, and algorithm sophistication

**Related Terms**: [OLS regression]({{< relref "/research/quantitative" >}}#ols-regression), [statistical model]({{< relref "/research/quantitative" >}}#statistical-model)

---

## probability

**Definition**: in frequentist statistics, refers to hypothetical frequencies of data patterns
under an assumed model, measured over many repetitions of the same procedure under identical
conditions; in Bayesian statistics, represents the degree of belief in a hypothesis given
observed data

**Purpose**: often confused with the probability of a hypothesis being true or false, leading to
common statistical misinterpretations; Bayesian interpretation distinguishes between prior and
posterior probability, enabling more intuitive statements about hypothesis likelihood -

| **Concept** | **Description** |
| --- | --- |
| **Prior Probability** | Initial belief about a hypothesis before observing any data |
| **Posterior Probability** | Updated belief after incorporating observed data using [Bayes' theorem](https://en.wikipedia.org/wiki/Bayes%27_theorem) |

**Related Terms**: [Bayesian experiment]({{< relref "/research" >}}#bayesian-experiment), [P value]({{< relref "/research/quantitative" >}}#p-value), [statistical inference]({{< relref "/research/quantitative" >}}#statistical-inference)

---

## P value

**Definition**: probability that observed data, or more extreme, would occur if all model
assumptions - including the test hypothesis - were correct; ranges from 0, complete
incompatibility, to 1, perfect compatibility

**Purpose**: measures fit between the data and the entire statistical model, not just the
hypothesis being tested; commonly misinterpreted as the probability that the hypothesis is true or
false, and often degraded into a "significant" `(P ≤ 0.05)` vs "insignificant" dichotomy

**Related Terms**: [confidence interval]({{< relref "/research/quantitative" >}}#confidence-interval), [null hypothesis]({{< relref "/research/quantitative" >}}#null-hypothesis), [probability]({{< relref "/research/quantitative" >}}#probability), [statistical model]({{< relref "/research/quantitative" >}}#statistical-model)

---

## scalar

**Definition**: mathematical concept, specifically from linear algebra; element of a field which
is used to define a vector space through the operation of scalar multiplication

**Purpose**: a _"scalar value"_ refers to a single numerical quantity that has _magnitude but no
direction_, distinguishing it from vector-valued quantities

**Related Terms**: [statistical model]({{< relref "/research/quantitative" >}}#statistical-model)

---

## statistical inference

**Definition**: process of drawing conclusions about populations or processes from sample data;
includes hypothesis testing, confidence interval estimation, and parameter estimation

**Purpose**: foundational methodology for evaluating whether observed results are meaningful or due
to chance; accounts for uncertainty and random variation when making generalizations

**Related Terms**: [confidence interval]({{< relref "/research/quantitative" >}}#confidence-interval), [null hypothesis]({{< relref "/research/quantitative" >}}#null-hypothesis), [statistical model]({{< relref "/research/quantitative" >}}#statistical-model), [uncertainty quantification]({{< relref "/research/quantitative" >}}#uncertainty-quantification)

---

## statistical model

**Definition**: mathematical representation of data variability and all assumptions used to
compute statistics; embodies a full web of assumptions beyond just equations with parameters,
including data collection, randomization, treatment allocation, and analysis choices

**Purpose**: violation of any assumption, not just the test hypothesis, can produce misleading P
values; often presented in compressed form, with many assumptions left unstated or unrecognized

**Related Terms**: [model checking]({{< relref "/research/quantitative" >}}#model-checking), [non-parametric methods]({{< relref "/research/quantitative" >}}#non-parametric-methods), [P value]({{< relref "/research/quantitative" >}}#p-value), [statistical inference]({{< relref "/research/quantitative" >}}#statistical-inference)

---

## stochastic

**Definition**: random probability distribution or pattern that may be analyzed statistically, but
may not be predicted precisely

**Purpose**: commonly used in mathematics, science, and information theory to describe processes
governed by randomness

**Related Terms**: [probability]({{< relref "/research/quantitative" >}}#probability), [uncertainty quantification]({{< relref "/research/quantitative" >}}#uncertainty-quantification)

---

## uncertainty quantification

**Definition**: process of measuring and characterizing uncertainty in predictions, decisions, or
model outputs; distinguishes between aleatoric uncertainty - inherent randomness - and epistemic
uncertainty - lack of knowledge

**Purpose**: enables AI systems to express confidence levels and identify when additional data or
validation is needed; critical for safe deployment in high-stakes domains like healthcare,
autonomous systems, and decision support

**Example**: common methods include Bayesian inference, ensemble approaches, and Monte Carlo
techniques

**Related Terms**: [prediction model]({{< relref "/research/quantitative" >}}#prediction-model), [statistical inference]({{< relref "/research/quantitative" >}}#statistical-inference), [stochastic]({{< relref "/research/quantitative" >}}#stochastic)

---
