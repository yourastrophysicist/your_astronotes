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
- [Prior Probability Distributions in Exoplanet Fitting](Prior%20Probability%20Distributions%20in%20Exoplanet%20Fitting.html)
- [Likelihood Function for Photometric Time Series](Likelihood%20Function%20for%20Photometric%20Time%20Series.html)
- [Malavolta 13 - Bayesian Statistics and Markov Chain Monte Carlo Sampling](../../02_Literature/Lectures/Astrophysics_Laboratory_2/Malavolta%2013%20-%20Bayesian%20Statistics%20and%20Markov%20Chain%20Monte%20Carlo%20Sampling.html)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (4)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="Likelihood%20Function%20for%20Photometric%20Time%20Series.html" class="backlink-item">Likelihood Function for Photometric Time Series</a></li>
    <li class="backlink-item-wrap"><a href="Prior%20Probability%20Distributions%20in%20Exoplanet%20Fitting.html" class="backlink-item">Prior Probability Distributions in Exoplanet Fitting</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astro-Statistics_and_Cosmology_MOC.html" class="backlink-item">Astro-Statistics_and_Cosmology_MOC</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astrophysics_Laboratory_2_MOC.html" class="backlink-item">Astrophysics_Laboratory_2_MOC</a></li>
  </ul>
</div>

