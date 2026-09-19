---
layout: "default"
title: "Bayesian hierarchical modeling for Type Ia supernovae"
---
# Bayesian hierarchical modeling for Type Ia supernovae

Type Ia Supernovae (SNIa) serve as standardizable candles across cosmological distances. While classical approaches fit empirical light-curve relations via ad-hoc $\chi^2$ minimization, rigorous cosmology requires Bayesian Hierarchical Modeling (BHM) to self-consistently account for heteroscedastic covariances, intrinsic dispersion, and Malmquist selection truncation.

## The Tripp Standardization Relation

Observed peak B-band apparent magnitude $m_B$ is standardized using light-curve stretch $x_1$ and color $c$ (Tripp 1998):
$$\mu_{\rm obs} = m_B - M_0 + \alpha x_1 - \beta c$$
where $M_0$ is the absolute magnitude, $\alpha$ is the stretch-luminosity slope, $\beta$ is the color-luminosity slope, and $\mu = 5\log_{10}(d_L / 10\text{pc})$ is the cosmological distance modulus.

### Failures of Classical Chi-Squared Fitting
1. **Measurement errors in independent variables**: Both $x_1$ and $c$ possess significant observational noise, violating standard regression assumptions.
2. **Correlated errors**: For each supernova, the photometric fitter (SALT2 / SALT3) outputs a $3 \times 3$ error covariance matrix $C_i$ between $(m_B, x_1, c)$.
3. **Malmquist bias**: Magnitude-limited surveys preferentially detect unusually bright supernovae near the flux limit, skewing the Hubble diagram toward acceleration.

## The Three-Level Hierarchical Model

A Bayesian Hierarchical Model decomposes the physical system into three coupled latent levels structured as a Directed Acyclic Graph (DAG):

```
Level 1 (Cosmology & Global):   { Omega_m, w, M_0, alpha, beta, sigma_int }
                                           |
Level 2 (Latent True Properties): { x_{1, i}^true, c_i^true, M_i^true }
                                           |
Level 3 (Observations & Covariance): { m_{B, i}^obs, x_{1, i}^obs, c_i^obs, C_i }
```

### Level 3: Observational Likelihood
Conditioned on the latent true properties $\hat{v}_i = (M_i^t, x_{1, i}^t, c_i^t)$, the observed data $v_i = (m_{B, i}, x_{1, i}, c_i)$ follows a multivariate Gaussian:
$$p(v_i \mid \hat{v}_i, C_i) = \frac{1}{(2\pi)^{3/2} \lvert C_i\rvert^{1/2}} \exp\left[ -\frac{1}{2} (v_i - \hat{v}_i)^T C_i^{-1} (v_i - \hat{v}_i) \right]$$

### Level 2: Latent Population Prior
The true properties are drawn from an underlying parent population:
$$x_{1, i}^t \sim \mathcal{N}(\bar{x}_1, \sigma_{x_1}^2), \quad c_i^t \sim \mathcal{N}(\bar{c}, \sigma_c^2)$$
$$M_i^t \sim \mathcal{N}\left( M_0 - \alpha x_{1, i}^t + \beta c_i^t, \sigma_{\rm int}^2 \right)$$
where $\sigma_{\rm int}$ is the fundamental intrinsic scatter of Type Ia supernovae.

### Level 1: Selection Effects (Malmquist Correction)
The probability that a supernova enters the survey catalog depends on a selection probability function $S(m_B)$. The normalized likelihood is:
$$p(v_i \mid \hat{v}_i, \text{detected}) = \frac{p(v_i \mid \hat{v}_i) S(m_{B, i})}{\int p(v' \mid \hat{v}_i) S(m_B') \, dv'}$$

## Analytical Marginalization over Latent Variables

Because all conditional distributions are Gaussian, the high-dimensional latent variables $\hat{v}_i$ can be integrated out analytically using Schur complement Gaussian identities.

The marginalized distance modulus $\mu_i = m_{B, i} - M_0 + \alpha x_{1, i} - \beta c_i$ follows an effective 1D Gaussian likelihood:
$$-2\ln \mathcal{L} = \sum_{i=1}^{N_{\rm SN}} \left[ \frac{\left( \mu_i - \mu_{\rm cosmo}(z_i; \Omega_m, w) \right)^2}{\sigma_{i, \rm tot}^2} + \ln \sigma_{i, \rm tot}^2 \right]$$
where the total propagated variance is:
$$\sigma_{i, \rm tot}^2 = \sigma_{\rm int}^2 + \sigma_{\mu, \rm cosmo}^2 + w^T C_i w$$
with projection vector $w = (1, \alpha, -\beta)^T$.

This model delivers completely debiased, robust cosmological constraints from modern datasets (Pantheon+, DES-SN5YR).

## See Also
- [Astro-Statistics_and_Cosmology_MOC](../../04_Atlas/Astro-Statistics_and_Cosmology_MOC.html)
- [09_Bayesian_Hierarchical_Models_for_Type_Ia_Supernovae](../../02_Literature/Lectures/Astrostatistics/09_Bayesian_Hierarchical_Models_for_Type_Ia_Supernovae.html)
- [Multivariate Gaussian conditioning and marginalization](Multivariate%20Gaussian%20conditioning%20and%20marginalization.html)
- [Generalized least squares and correlated measurement errors](Generalized%20least%20squares%20and%20correlated%20measurement%20errors.html)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (1)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astro-Statistics_and_Cosmology_MOC.html" class="backlink-item">Astro-Statistics_and_Cosmology_MOC</a></li>
  </ul>
</div>

