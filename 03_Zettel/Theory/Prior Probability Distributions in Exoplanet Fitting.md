---
layout: "default"
title: "Prior Probability Distributions in Exoplanet Fitting"
---
# Prior Probability Distributions in Exoplanet Fitting

Prior distributions $\pi(\boldsymbol{\theta})$ encapsulate external observational knowledge, physical boundaries, and state of ignorance before fitting light curve data.

## 1. Uniform (Flat) Priors
Represents complete indifference across a finite physical domain $[a, b]$:
$$\pi(\theta) = \begin{cases} \frac{1}{b - a} & \text{if } a \le \theta \le b \\ 0 & \text{otherwise} \end{cases}$$
Applied to parameters where scale is well-bounded:
- Scaled planetary radius: $r_p \in [0.0, 0.5]$
- Mid-transit epoch: $T_0 \in [T_{\text{expected}} - 0.2\text{d}, T_{\text{expected}} + 0.2\text{d}]$
- Orbital inclination: $\cos i \in [0.0, 1.0]$ (uniform in $\cos i$ represents isotropic orbital orientation in 3D space)

## 2. Log-Uniform (Jeffreys) Priors
Scale-invariant prior applied to positive parameters spanning several orders of magnitude:
$$\pi(\theta) \propto \frac{1}{\theta} \iff \pi(\ln \theta) = \text{constant}$$
Applied to photometric jitter $\sigma_{\text{jitter}}$ or GP length scales.

## 3. Gaussian Informative Priors
Encapsulates independent empirical measurements with Gaussian uncertainty $\mu \pm \sigma$:
$$\ln \pi(\theta) = -\frac{1}{2} \left( \frac{\theta - \mu}{\sigma} \right)^2$$
Applied to:
- Limb darkening coefficients $u_1, u_2$ from `ldtk` synthetic atmosphere models.
- Orbital period $P$ determined from long-baseline multi-year radial velocity monitoring.
- Stellar density $\rho_\star$ determined from high-resolution spectroscopy, constraining $a/R_\star$ via Kepler's third law.

## Related Notes
- [Bayesian Inference and Bayes Theorem in Astronomy](Bayesian%20Inference%20and%20Bayes%20Theorem%20in%20Astronomy.html)
- [Likelihood Function for Photometric Time Series](Likelihood%20Function%20for%20Photometric%20Time%20Series.html)
- [Malavolta 13 - Bayesian Statistics and Markov Chain Monte Carlo Sampling](../../02_Literature/Lectures/Astrophysics_Laboratory_2/Malavolta%2013%20-%20Bayesian%20Statistics%20and%20Markov%20Chain%20Monte%20Carlo%20Sampling.html)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (4)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../Computational/Limb%20Darkening%20Computation%20with%20ldtk.html" class="backlink-item">Limb Darkening Computation with ldtk</a></li>
    <li class="backlink-item-wrap"><a href="Bayesian%20Inference%20and%20Bayes%20Theorem%20in%20Astronomy.html" class="backlink-item">Bayesian Inference and Bayes Theorem in Astronomy</a></li>
    <li class="backlink-item-wrap"><a href="Likelihood%20Function%20for%20Photometric%20Time%20Series.html" class="backlink-item">Likelihood Function for Photometric Time Series</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astrophysics_Laboratory_2_MOC.html" class="backlink-item">Astrophysics_Laboratory_2_MOC</a></li>
  </ul>
</div>

