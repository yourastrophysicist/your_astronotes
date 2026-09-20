---
layout: "default"
title: "Foreman-Mackey et al. (2017) — Fast and Scalable Gaussian Process Modeling with celerite"
---
## Metadata
- **Authors**: Daniel Foreman-Mackey, Eric Agol, Sivaram Ambikasaran, Ruth Angus
- **Year**: 2017
- **arXiv ID**: [arXiv:1703.09710](https://arxiv.org/abs/1703.09710)
- **ADS Bibcode**: `2017AJ....154..220F`
- **Journal**: *AJ*, 154, 220
- **Sub-field**: astro-ph.IM
- **Key Observatory / Code**: `celerite` (Python/C++ GP library)

---

## Executive Summary
Standard Gaussian Process (GP) regression requires $\mathcal{O}(N^3)$ operations to factorize the $N \times N$ covariance matrix, which is computationally prohibitive for the $N \sim 10^4$–$10^5$ point light curves produced by Kepler, K2, and TESS. Foreman-Mackey et al. show that for a specific, physically motivated family of covariance kernels — sums of exponentials and quasi-periodic (damped stochastically driven harmonic oscillator, SHO) terms — the covariance matrix has a *semi-separable* structure that permits exact Cholesky factorization, log-likelihood evaluation, and prediction in $\mathcal{O}(N)$ operations. This is not an approximation: the algorithm is mathematically exact for kernels expressible in this form, which encompasses the Matérn-3/2 kernel and quasi-periodic stellar-rotation kernels used ubiquitously in exoplanet and stellar-activity time-series analysis.

---

## Key Equations & Theoretical Framework
The covariance kernel class handled exactly by `celerite` is a sum of terms of the form
$$k(\tau) = \sum_{j=1}^{J} a_j e^{-c_j \tau}\cos(d_j \tau) + b_j e^{-c_j \tau}\sin(d_j \tau), \qquad \tau = |t_i - t_j|$$
where:
- $a_j, b_j$ set the amplitude of the $j$-th mode (real and imaginary covariance components)
- $c_j$ is the exponential decay rate of the $j$-th mode (inverse correlation timescale)
- $d_j$ is the angular oscillation frequency of the $j$-th quasi-periodic mode ($d_j = 0$ recovers a pure exponential/Matérn-like term)

This kernel is the autocovariance of a process that is the solution of a linear stochastic differential equation (SDE) — physically, a stochastically driven, damped harmonic oscillator. The corresponding **SHO kernel**, widely used for stellar granulation and rotational modulation, is
$$k_{\mathrm{SHO}}(\tau) = S_0 \omega_0 Q \, e^{-\omega_0 \tau/2Q}\times \begin{cases} \cosh(\eta\omega_0\tau) + \frac{1}{2\eta Q}\sinh(\eta\omega_0\tau), & Q<\tfrac12 \\[4pt] 2(1+\omega_0\tau), & Q=\tfrac12 \\[4pt] \cos(\eta\omega_0\tau) + \frac{1}{2\eta Q}\sin(\eta\omega_0\tau), & Q>\tfrac12 \end{cases}$$
where:
- $S_0$ is the power at $\omega=0$
- $\omega_0$ is the undamped angular frequency of the oscillator
- $Q$ is the quality factor, controlling the degree of periodicity/damping
- $\eta \equiv |1-(4Q^2)^{-1}|^{1/2}$

**Semi-separable factorization**: writing the $N\times N$ covariance matrix as $K = A + \mathrm{diag}(\sigma_i^2)$, where $A_{nm} = k(t_n,t_m)$ for $n\neq m$, the exponential kernel form allows $A$ to be written as a low-rank-per-block product $U V^T$ (rank $2J$), enabling an extended Cholesky decomposition $K = L D L^T$ computable in $\mathcal{O}(N J^2)$ operations rather than $\mathcal{O}(N^3)$. The GP marginal log-likelihood
$$\ln\mathcal{L} = -\frac{1}{2}\mathbf{r}^T K^{-1}\mathbf{r} - \frac{1}{2}\ln|K| - \frac{N}{2}\ln(2\pi)$$
is then evaluated in $\mathcal{O}(N)$ using the factors $L, D$ instead of $\mathcal{O}(N^3)$ direct inversion.

**Asymptotic checks**: for $J=1$, $d_1=0$ the kernel reduces to a single exponential $a_1 e^{-c_1\tau}$, the $\mathcal{O}(N)$ limit of the Matérn-1/2 process; the algorithm's cost scales linearly in $N$ for fixed $J$, recovering the brute-force $\mathcal{O}(N^3)$ scaling only if $J$ is allowed to grow with $N$ (never required in practice since $J\lesssim$ a few terms suffices for stellar/planetary time series).

---

## Observational Data & Methodology
- **Target / Sample**: Method paper — demonstrated on synthetic time series and on Kepler long-cadence light curves exhibiting stellar granulation and rotational modulation.
- **Instrument Setup**: Applicable to any irregularly sampled photometric or radial-velocity time series; benchmarked against `george` (a general $\mathcal{O}(N^3)$/$\mathcal{O}(N^2)$ GP package).
- **Reduction & Detrending Pipeline**: `celerite` is used as a drop-in log-likelihood term combined with a transit or RV model inside `emcee`/`PyMC3`/nested-sampling posteriors, simultaneously fitting correlated stellar-activity "red noise" and the deterministic astrophysical signal.

---

## Critical Findings & Scientific Impact
1. Demonstrated $\mathcal{O}(N)$ scaling empirically against $\mathcal{O}(N^3)$ direct methods, with multiple orders-of-magnitude speedup for $N\gtrsim 10^3$, enabling GP+MCMC joint fits on full Kepler/TESS-length light curves that were previously computationally intractable.
2. Because the factorization is exact (not a low-rank approximation), posterior inference on hyperparameters is unbiased relative to brute-force GP regression.
3. Follow-up: `celerite2` (Foreman-Mackey et al. 2020) extends the algorithm with `JAX`/`theano` automatic-differentiation backends and rotational/multi-term kernel presets.

---

## Vault Cross-References
- Computational: [[Gaussian Process Regression in Light Curve Detrending]], [[MCMC Convergence Diagnostics and Autocorrelation Analysis]]
- Core Theory: [[Bayesian Inference and Bayes Theorem in Astronomy]], [[Likelihood Function for Photometric Time Series]]
- Map of Content: [[Astrophysics_Laboratory_2_MOC]], [[Astro-Statistics_and_Cosmology_MOC]]
