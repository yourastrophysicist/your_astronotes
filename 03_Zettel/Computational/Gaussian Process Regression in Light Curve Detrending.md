---
layout: "default"
title: "Gaussian Process Regression in Light Curve Detrending"
---
# Gaussian Process Regression in Light Curve Detrending

Gaussian Process (GP) regression models stellar activity and instrument systematics non-parametrically using a multivariate Gaussian prior over functions.

## Formulation
Data vector $\boldsymbol{y} \sim \mathcal{N}(\boldsymbol{\mu}, \boldsymbol{K})$, where the covariance matrix elements are given by a kernel function:
$$K_{i, j} = k(t_i, t_j) + \sigma_i^2 \delta_{i, j}$$

## Common Kernels in Photometry
1. **Matérn-3/2 Kernel**: models stochastic stellar granulation and instrumental red noise:
$$k_{3/2}(r) = \sigma^2 \left( 1 + \frac{\sqrt{3} r}{\rho} \right) \exp\left( -\frac{\sqrt{3} r}{\rho} \right), \quad r = \lvert t_i - t_j\rvert$$
2. **Quasi-Periodic Kernel**: models periodic stellar rotation modulated by starspot emergence and decay:
$$k_{\text{QP}}(\Delta t) = A \exp\left( -\frac{\Delta t^2}{2 \ell^2} - \Gamma \sin^2\left( \frac{\pi \Delta t}{P_{\text{rot}}} \right) \right)$$
3. **Stochastically-driven Simple Harmonic Oscillator (SHO)**: implemented in `celerite`, scaling linearly with dataset size $\mathcal{O}(N)$ rather than $\mathcal{O}(N^3)$.

Simultaneously fitting the GP covariance kernel alongside the physical transit model avoids biasing planetary transit parameters.

## Related Notes
- [[Malavolta 10 - Light Curve Filtering and Detrending Techniques]]
- [[Likelihood Function for Photometric Time Series]]



## Linked References

- [[Multivariate Gaussian conditioning and marginalization]]
- [[Stellar activity signals and radial velocity jitter mitigation]]
- [[Astrophysics_Laboratory_2_MOC]]


