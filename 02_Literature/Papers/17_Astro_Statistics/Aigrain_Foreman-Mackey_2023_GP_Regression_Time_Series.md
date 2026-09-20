---
layout: "default"
title: "Aigrain & Foreman-Mackey (2023) — Gaussian Process Regression for Astronomical Time Series"
---
## Metadata
- **Authors**: Suzanne Aigrain, Daniel Foreman-Mackey
- **Year**: 2023
- **arXiv ID**: [arXiv:2209.08115](https://arxiv.org/abs/2209.08115)
- **ADS Bibcode**: `2023ARA&A..61..329A`
- **Journal**: *ARA&A*, 61, 329
- **Sub-field**: astro-ph.IM
- **Key Observatory / Code**: comprehensive review; synthesizes GP applications from exoplanets to AGN variability

---

## Executive Summary
This review synthesizes over a decade of Gaussian Process (GP) regression applications across time-domain astronomy, from stellar-activity and instrumental-systematics modeling in exoplanet transit/RV surveys to quasar and AGN variability characterization. It develops the underlying mathematical theory (kernel choice, hyperparameter marginalization, and computational scaling), and synthesizes the practical modeling choices that determine whether a GP correctly separates a stochastic "nuisance" signal (e.g. stellar activity) from the deterministic signal of interest (e.g. a planetary transit) — a distinction with direct consequences for the correctness (or subtle biasing) of the resulting astrophysical parameter inference.

---

## Key Equations & Theoretical Framework
**Fundamental postulate**: a Gaussian Process is a probability distribution over functions, fully specified by a mean function $m(t)$ (often set to zero after subtracting a deterministic model) and a covariance (kernel) function $k(t_i,t_j)$ encoding the assumed correlation structure of the stochastic signal — any finite set of function values $\{y(t_i)\}$ is then, by definition, jointly Gaussian-distributed with covariance matrix $K_{ij}=k(t_i,t_j)+\sigma_i^2\delta_{ij}$ (including measurement noise $\sigma_i$).

**GP marginal likelihood**, the key quantity that allows GP hyperparameters (kernel amplitude, correlation timescale, etc.) to be fit jointly with any deterministic model parameters via standard Bayesian inference:
$$\ln\mathcal{L} = -\frac{1}{2}\vec{r}^TK^{-1}\vec{r} - \frac{1}{2}\ln|K| - \frac{N}{2}\ln(2\pi)$$
where $\vec r = \vec y - \vec m$ is the residual between the data and the deterministic (mean) model — this is exactly the log-likelihood already introduced in [[Foreman-Mackey_2017_Celerite_Scalable_GP]] and [[Gaussian Process Regression in Light Curve Detrending]], reviewed here in its general, kernel-agnostic form.

**Kernel choice and physical interpretation**: the review emphasizes that the covariance kernel $k(\tau)$ encodes explicit physical assumptions about the correlated signal, e.g.:
- **Matérn-3/2** kernel, $k(\tau)=\sigma^2(1+\sqrt3\tau/\rho)e^{-\sqrt3\tau/\rho}$: models smoothly correlated but non-periodic red noise, e.g. granulation-driven brightness variations.
- **Quasi-periodic (rotation) kernel**, combining a periodic term with an exponential decay envelope: models stellar rotational modulation with a finite spot-evolution coherence timescale.
- **Stochastically-driven damped harmonic oscillator (SHO) kernel** (see [[Foreman-Mackey_2017_Celerite_Scalable_GP]]): models both granulation and $p$-mode-oscillation-like signals within a single, physically motivated framework.

**The critical caution — GP flexibility versus signal absorption**: the review's central methodological emphasis is that a sufficiently flexible GP kernel can, in principle, absorb part of the deterministic signal of interest (e.g. partially fitting away a transit or a planetary RV signal as if it were correlated noise) unless the kernel's correlation timescale is either physically well-motivated and externally constrained, or the deterministic and stochastic signals are fit jointly (rather than sequentially, "detrend-then-fit") so that the joint posterior correctly propagates the resulting parameter correlations and any residual signal-absorption bias.

**Asymptotic checks**: in the limit of a GP correlation timescale $\rho$ much longer than the deterministic signal's duration (e.g. $\rho\gg$ transit duration), the GP behaves nearly like a slowly-varying additive offset and does not significantly distort the transit shape; in the opposite limit ($\rho$ comparable to or shorter than the signal duration), the GP has enough flexibility to partially mimic the deterministic signal itself, and naive sequential detrending can substantially bias the recovered signal parameters — motivating the review's recommendation of joint (simultaneous GP-plus-transit) fitting as the more robust default methodology wherever computationally feasible.

---

## Observational Data & Methodology
- **Target / Sample**: review synthesizing applications across exoplanet transit/RV surveys (Kepler, TESS, ground-based RV), stellar asteroseismology, and AGN/quasar optical variability monitoring.
- **Instrument Setup**: N/A (methodological review, applicable across photometric and spectroscopic time-domain instrumentation).
- **Reduction & Detrending Pipeline**: synthesizes best-practice joint GP-plus-astrophysical-model fitting workflows, building directly on the $\mathcal{O}(N)$ scalable GP algorithms of [[Foreman-Mackey_2017_Celerite_Scalable_GP]] that make such joint fits computationally tractable for large time-series datasets.

---

## Critical Findings & Scientific Impact
1. Consolidates a decade of scattered, application-specific GP methodology into a single authoritative reference, clarifying which kernel choices are physically appropriate for which classes of astrophysical stochastic signal.
2. Provides an influential, widely cited caution against naive sequential ("detrend-then-fit") GP workflows, shifting community best practice toward joint deterministic-plus-stochastic model fitting wherever feasible.
3. Open problem: principled, automated kernel selection (choosing among physically plausible kernel families, or between a single kernel and a mixture, given a specific dataset) remains an active methodological frontier, particularly for datasets exhibiting multiple simultaneously active stochastic processes at overlapping timescales.

---

## Vault Cross-References
- Core Theory: [[Gaussian Process Regression in Light Curve Detrending]], [[Gaussian Process Covariance Kernels]]
- Related: [[Foreman-Mackey_2017_Celerite_Scalable_GP]], [[Kipping_2013_Efficient_Limb_Darkening_Sampling]]
- Map of Content: [[Astro-Statistics_and_Cosmology_MOC]], [[Astrophysics_Laboratory_2_MOC]]
