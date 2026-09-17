---
layout: "default"
title: "Gaussian Process Regression in Light Curve Detrending"
---
{% raw %}
# Gaussian Process Regression in Light Curve Detrending

Gaussian Process (GP) regression models stellar activity and instrument systematics non-parametrically using a multivariate Gaussian prior over functions.

## Formulation
Data vector $\boldsymbol{y} \sim \mathcal{N}(\boldsymbol{\mu}, \boldsymbol{K})$, where the covariance matrix elements are given by a kernel function:
$$K_{i, j} = k(t_i, t_j) + \sigma_i^2 \delta_{i, j}$$

## Common Kernels in Photometry
1. **Mat?rn-3/2 Kernel**: models stochastic stellar granulation and instrumental red noise:
$$k_{3/2}(r) = \sigma^2 \left( 1 + \frac{\sqrt{3} r}{\rho} \right) \exp\left( -\frac{\sqrt{3} r}{\rho} \right), \quad r = \lvert t_i - t_j\rvert$$
2. **Quasi-Periodic Kernel**: models periodic stellar rotation modulated by starspot emergence and decay:
$$k_{\text{QP}}(\Delta t) = A \exp\left( -\frac{\Delta t^2}{2 \ell^2} - \Gamma \sin^2\left( \frac{\pi \Delta t}{P_{\text{rot}}} \right) \right)$$
3. **Stochastically-driven Simple Harmonic Oscillator (SHO)**: implemented in `celerite`, scaling linearly with dataset size $\mathcal{O}(N)$ rather than $\mathcal{O}(N^3)$.

Simultaneously fitting the GP covariance kernel alongside the physical transit model avoids biasing planetary transit parameters.

## Related Notes
- [Malavolta 10 - Light Curve Filtering and Detrending Techniques](../../02_Literature/Lectures/Astrophysics_Laboratory_2/Malavolta%2010%20-%20Light%20Curve%20Filtering%20and%20Detrending%20Techniques.html)
- [Likelihood Function for Photometric Time Series](../Theory/Likelihood%20Function%20for%20Photometric%20Time%20Series.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (5)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../02_Literature/Lectures/Exoplanetary_Astrophysics/14_Stellar_Activity_and_Radial_Velocity_Jitter.html" class="backlink-item">14_Stellar_Activity_and_Radial_Velocity_Jitter</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astrophysics_Laboratory_2_MOC.html" class="backlink-item">Astrophysics_Laboratory_2_MOC</a></li>
    <li class="backlink-item-wrap"><a href="../../02_Literature/Lectures/Astrophysics_Laboratory_2/Malavolta%2010%20-%20Light%20Curve%20Filtering%20and%20Detrending%20Techniques.html" class="backlink-item">Malavolta 10 - Light Curve Filtering and Detrending Techniques</a></li>
    <li class="backlink-item-wrap"><a href="../Theory/Multivariate%20Gaussian%20conditioning%20and%20marginalization.html" class="backlink-item">Multivariate Gaussian conditioning and marginalization</a></li>
    <li class="backlink-item-wrap"><a href="../Theory/Stellar%20activity%20signals%20and%20radial%20velocity%20jitter%20mitigation.html" class="backlink-item">Stellar activity signals and radial velocity jitter mitigation</a></li>
  </ul>
</div>
