---
layout: "default"
title: "Speagle (2020) — dynesty: A Dynamic Nested Sampling Package for Bayesian Posteriors and Evidences"
---
## Metadata
- **Authors**: Joshua S. Speagle
- **Year**: 2020
- **arXiv ID**: [arXiv:1904.02180](https://arxiv.org/abs/1904.02180)
- **ADS Bibcode**: `2020MNRAS.493.3132S`
- **Journal**: *MNRAS*, 493, 3132
- **Sub-field**: astro-ph.IM
- **Key Observatory / Code**: `dynesty` (Python dynamic nested sampling package)

---

## Executive Summary
Speagle presents `dynesty`, an open-source Python implementation of **dynamic nested sampling**, an extension of Skilling's original nested sampling algorithm that adaptively allocates computational effort between exploring the posterior's bulk (for parameter estimation) and its full prior-to-posterior transition (needed for accurate evidence estimation), rather than using nested sampling's traditional fixed, uniform sample allocation. Because standard MCMC methods (e.g. [[Affine-Invariant Ensemble MCMC with emcee]]) estimate the posterior but do not directly provide the Bayesian evidence needed for model comparison (see [[Trotta_2008_Bayes_in_the_Sky]]), while nested sampling provides both simultaneously, `dynesty` has become a standard tool wherever astrophysical analyses require rigorous, evidence-based model comparison rather than parameter estimation alone.

---

## Key Equations & Theoretical Framework
**Fundamental postulate**: nested sampling re-expresses the evidence integral $\mathcal{Z}=\int P(D|\theta)P(\theta)\,d\theta$ as a one-dimensional integral over the **prior volume enclosed within a given likelihood contour**, $X(\lambda)\equiv\int_{P(D|\theta)>\lambda}P(\theta)\,d\theta$, converting a generically high-dimensional integration problem into a much simpler 1D integral over $X\in[0,1]$:
$$\mathcal{Z} = \int_0^1 \mathcal{L}(X)\,dX$$
where $\mathcal{L}(X)$ is the likelihood value at prior-volume level $X$ — since $\mathcal{L}(X)$ is a monotonically decreasing function of $X$ by construction, this integral can be estimated numerically (e.g. by the trapezoidal rule) given a sequence of "live points" sampled from progressively shrinking, successively higher-likelihood shells of the prior.

**Nested sampling algorithm**: maintaining a fixed number $n_{\rm live}$ of live points sampled uniformly from the prior, at each iteration the lowest-likelihood live point is removed (its likelihood and estimated current prior volume $X_i\approx e^{-i/n_{\rm live}}$ recorded as a contribution to the evidence sum) and replaced by a new point drawn uniformly from the prior subject to having likelihood exceeding the current bound — the accumulated evidence estimate is
$$\mathcal{Z} \approx \sum_i \mathcal{L}_i\,\Delta X_i$$
and, as a byproduct, the full set of recorded (likelihood, prior-volume-weight) samples directly gives properly weighted posterior samples for parameter estimation, without requiring any separate MCMC run.

**Dynamic nested sampling — the paper's key methodological contribution**: standard nested sampling uses a fixed $n_{\rm live}$ throughout, allocating computational effort uniformly across the full evidence integral regardless of whether the science goal is evidence estimation (which benefits from broad, even prior-volume sampling) or posterior/parameter estimation (which benefits from denser sampling concentrated near the posterior's bulk). `dynesty` dynamically reallocates additional live points to whichever regime — evidence-dominated tails or posterior-dominated bulk — is under-sampled relative to a user-specified weighting between the two goals, substantially improving sampling efficiency when the analysis goal is known in advance to favor one over the other.

**Uncertainty estimation on the evidence**: because the nested-sampling algorithm is itself stochastic (random live-point replacement), the evidence estimate carries an associated statistical uncertainty,
$$\sigma(\ln\mathcal{Z}) \approx \sqrt{\frac{H}{n_{\rm live}}}$$
where $H$ is the information (Kullback-Leibler divergence between posterior and prior) — a larger $n_{\rm live}$ (more live points) directly reduces the evidence uncertainty at the cost of proportionally more likelihood evaluations.

**Asymptotic checks**: in the limit of a posterior that occupies essentially the entire prior volume (weakly informative data, posterior $\approx$ prior), the evidence integral requires little "compression" from prior to posterior, and both standard and dynamic nested sampling perform comparably; in the opposite limit of a strongly peaked posterior deep within a much larger prior volume (highly informative data), a very large number of nested-sampling iterations are required to traverse the full prior-to-posterior compression using fixed-$n_{\rm live}$ sampling — precisely the regime where dynamic nested sampling's adaptive live-point allocation provides the largest efficiency gain over the traditional fixed-allocation approach.

---

## Observational Data & Methodology
- **Target / Sample**: N/A — general-purpose Bayesian sampling algorithm/software package.
- **Instrument Setup**: N/A.
- **Reduction & Detrending Pipeline**: `dynesty` is used throughout modern astrophysical model-comparison applications, including exoplanet detection significance testing, gravitational-wave parameter estimation, and cosmological model comparison, wherever the Bayesian evidence (not merely the posterior) is the scientifically required output.

---

## Critical Findings & Scientific Impact
1. Provided a freely available, actively maintained, pure-Python implementation of dynamic nested sampling, substantially lowering the barrier to rigorous evidence-based Bayesian model comparison in astrophysics relative to earlier, less accessible implementations (e.g. `MultiNest`).
2. The dynamic (adaptive live-point allocation) methodology demonstrably improves sampling efficiency for the common cases where either evidence estimation or posterior/parameter estimation alone is the primary science goal, rather than requiring both to be estimated with equal, and equally wasteful, precision.
3. Open problem: nested sampling's efficiency degrades in high-dimensional parameter spaces (a general challenge shared with most sampling methods) and in the presence of strongly multimodal or highly correlated posteriors, motivating continued development of specialized bounding-distribution and proposal methods within the nested-sampling framework.

---

## Vault Cross-References
- Core Theory: [[Nested sampling algorithm and Bayesian evidence computation]], [[Bayesian Model Selection and Evidence]]
- Related: [[Trotta_2008_Bayes_in_the_Sky]], [[Affine-Invariant Ensemble MCMC with emcee]]
- Map of Content: [[Astro-Statistics_and_Cosmology_MOC]]
