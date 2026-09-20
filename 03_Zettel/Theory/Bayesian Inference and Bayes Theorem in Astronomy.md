---
layout: "default"
title: "Bayesian Inference and Bayes Theorem in Astronomy"
---
# Bayesian Inference and Bayes Theorem in Astronomy

Bayesian inference provides a consistent mathematical framework for updating knowledge of physical parameters in light of observational data.

## Bayes Theorem
$$p(\boldsymbol{\theta} \mid \boldsymbol{D}, M) = \frac{p(\boldsymbol{D} \mid \boldsymbol{\theta}, M) \, p(\boldsymbol{\theta} \mid M)}{p(\boldsymbol{D} \mid M)}$$
where:
- $\boldsymbol{\theta}$: physical parameters of interest.
- $\boldsymbol{D}$: observed data array.
- $M$: assumed physical model.
- $p(\boldsymbol{\theta} \mid \boldsymbol{D}, M)$: **posterior probability density function** (updated state of knowledge).
- $p(\boldsymbol{D} \mid \boldsymbol{\theta}, M) = \mathcal{L}(\boldsymbol{\theta})$: **likelihood function** (probability of data given parameters).
- $p(\boldsymbol{\theta} \mid M) = \pi(\boldsymbol{\theta})$: **prior probability density** (knowledge prior to observation).
- $p(\boldsymbol{D} \mid M) = \mathcal{Z}$: **Bayesian evidence** (marginal likelihood), defined as:
$$\mathcal{Z} = \int_\Omega \mathcal{L}(\boldsymbol{\theta}) \, \pi(\boldsymbol{\theta}) \, d\boldsymbol{\theta}$$

In parameter estimation within a fixed model $M$, $\mathcal{Z}$ is an independent normalization constant:
$$p(\boldsymbol{\theta} \mid \boldsymbol{D}) \propto \mathcal{L}(\boldsymbol{\theta}) \, \pi(\boldsymbol{\theta})$$

## Advantages in Astronomical Fitting
1. Incorporates external physical priors from spectroscopy or Gaia.
2. Directly yields credible intervals on physical parameters rather than confidence intervals of hypothetical repeated trials.
3. Propagates non-linear parameter degeneracies without requiring Gaussian approximations.

## Related Notes
- [[Prior Probability Distributions in Exoplanet Fitting]]
- [[Likelihood Function for Photometric Time Series]]
- [[Malavolta 13 - Bayesian Statistics and Markov Chain Monte Carlo Sampling]]



## Linked References

- [[Likelihood Function for Photometric Time Series]]
- [[Prior Probability Distributions in Exoplanet Fitting]]
- [[Astro-Statistics_and_Cosmology_MOC]]
- [[Astrophysics_Laboratory_2_MOC]]


