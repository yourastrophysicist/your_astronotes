---
layout: "default"
title: "Trotta (2008) — Bayes in the Sky: Bayesian Inference and Model Selection in Cosmology"
---
## Metadata
- **Authors**: Roberto Trotta
- **Year**: 2008
- **arXiv ID**: [arXiv:0803.4089](https://arxiv.org/abs/0803.4089)
- **ADS Bibcode**: `2008ConPh..49...71T`
- **Journal**: *Contemporary Physics*, 49, 71
- **Sub-field**: astro-ph.IM / astro-ph.CO
- **Key Observatory / Code**: pedagogical review of Bayesian methodology as applied throughout cosmological data analysis

---

## Executive Summary
Trotta presents a pedagogical review of Bayesian probability theory as applied to cosmological parameter estimation and model comparison, motivating why the Bayesian framework — treating probability as a degree of belief updated by data via Bayes' theorem, rather than a frequency of outcomes in repeated trials — is particularly well suited to cosmology, where the "experiment" (the observable universe) cannot be repeated. The review develops both parameter estimation (given a fixed model, what are the credible parameter ranges) and the distinct problem of model selection (comparing entire models, e.g. flat vs. curved universes, via the Bayesian evidence), emphasizing that these are formally different questions requiring different tools.

---

## Key Equations & Theoretical Framework
**Fundamental postulate**: Bayes' theorem, derived from the basic axioms of probability applied to conditional probabilities, relates the posterior probability of model parameters $\theta$ given data $D$ to the likelihood and prior:
$$P(\theta|D,\mathcal{M}) = \frac{P(D|\theta,\mathcal{M})\,P(\theta|\mathcal{M})}{P(D|\mathcal{M})}$$
where:
- $P(\theta|D,\mathcal{M})$ is the posterior probability distribution over parameters $\theta$, given model $\mathcal{M}$
- $P(D|\theta,\mathcal{M})$ is the likelihood, the probability of the observed data given specific parameter values
- $P(\theta|\mathcal{M})$ is the prior, encoding pre-data knowledge or assumptions about $\theta$
- $P(D|\mathcal{M})$, the **Bayesian evidence**, is the normalization constant obtained by marginalizing the likelihood over the entire prior parameter volume

**Bayesian evidence and model comparison**: while irrelevant to parameter estimation (a normalization constant, dropped when only the shape of the posterior matters), the evidence
$$\mathcal{Z} \equiv P(D|\mathcal{M}) = \int P(D|\theta,\mathcal{M})\,P(\theta|\mathcal{M})\,d\theta$$
becomes the central quantity when *comparing* two competing models $\mathcal{M}_0,\mathcal{M}_1$, via the **Bayes factor**:
$$\boxed{\, B_{01} \equiv \frac{P(D|\mathcal{M}_0)}{P(D|\mathcal{M}_1)} = \frac{\mathcal{Z}_0}{\mathcal{Z}_1} \,}$$
which, combined with the prior model odds $P(\mathcal{M}_0)/P(\mathcal{M}_1)$, gives the posterior odds ratio between the two models — a principled way to compare models with different numbers of parameters that automatically penalizes unnecessary model complexity (the **Bayesian Occam's razor**): a model with more free parameters can always fit the data at least as well in raw likelihood terms, but its evidence is only boosted if those extra parameters are actually required by the data, since the evidence integral averages the likelihood over the *entire* prior volume, including regions of parameter space that fit poorly.

**Jeffreys' scale**: a widely used (though explicitly heuristic, not derived from first principles) qualitative scale for interpreting the strength of evidence given a Bayes factor, e.g. $|\ln B_{01}|<1$ "not worth more than a bare mention," $1<|\ln B_{01}|<2.5$ "significant," $|\ln B_{01}|>5$ "decisive" — used throughout cosmological model-comparison literature (e.g. testing flat vs. curved $\Lambda$CDM, or $\Lambda$CDM vs. dynamical dark energy, cf. [[DESI_2024_BAO_Cosmological_Constraints]]) to communicate the practical significance of a given evidence ratio.

**Asymptotic checks**: in the limit of very informative data (likelihood sharply peaked relative to the prior width), the posterior becomes essentially independent of the prior choice (parameter-estimation results converge regardless of reasonable prior choices) — the regime in which frequentist and Bayesian parameter estimates typically agree closely; the evidence/model-comparison framework, by contrast, remains explicitly prior-volume-dependent even in this limit (a model with an unnecessarily broad prior on an unconstrained parameter is evidence-penalized relative to a more predictive model), which is precisely the desired Occam's-razor behavior but also means model-comparison results (unlike most parameter estimates) can be sensitive to prior range choices in ways that require careful, explicit justification.

---

## Observational Data & Methodology
- **Target / Sample**: pedagogical review; worked examples drawn from contemporaneous cosmological parameter-estimation and model-selection applications (e.g. curvature, dark-energy equation-of-state model comparison).
- **Instrument Setup**: N/A.
- **Reduction & Detrending Pipeline**: N/A (methodological review); the Bayesian evidence computation described here is precisely what nested-sampling algorithms (see [[Speagle_2020_dynesty_Nested_Sampling]]) are designed to efficiently estimate.

---

## Critical Findings & Scientific Impact
1. Provided an accessible, widely cited pedagogical bridge between formal Bayesian statistical theory and its practical application in cosmological data analysis, at a time when Bayesian methods were becoming the field standard over classical frequentist approaches.
2. Clearly articulated the formal distinction between parameter estimation and model selection — a distinction still frequently conflated in applied astrophysical statistics — and the specific role of the evidence integral in the latter.
3. Open problem: computing the evidence integral is generically far more computationally demanding than sampling the posterior for parameter estimation alone (it requires integrating over the full prior volume, not just exploring the posterior's high-density region), motivating the continued development of specialized evidence-estimation algorithms such as nested sampling.

---

## Vault Cross-References
- Core Theory: [[Bayesian Model Selection and Evidence]], [[Bayesian Inference and Bayes Theorem in Astronomy]]
- Related: [[Speagle_2020_dynesty_Nested_Sampling]]
- Map of Content: [[Astro-Statistics_and_Cosmology_MOC]]
