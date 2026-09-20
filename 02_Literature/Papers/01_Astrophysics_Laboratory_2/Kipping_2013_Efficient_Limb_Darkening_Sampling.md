---
layout: "default"
title: "Kipping (2013) — Efficient, Uninformative Sampling of Limb Darkening Coefficients for Two-Parameter Laws"
---
## Metadata
- **Authors**: David M. Kipping
- **Year**: 2013
- **arXiv ID**: [arXiv:1308.0009](https://arxiv.org/abs/1308.0009)
- **ADS Bibcode**: `2013MNRAS.435.2152K`
- **Journal**: *MNRAS*, 435, 2152
- **Sub-field**: astro-ph.EP
- **Key Observatory / Code**: reparametrization implemented in `batman`, `PyTransit`, `juliet`, `exoplanet`

**Provenance note**: the original enrichment brief cited "Espinoza et al. (2018), MNRAS 482, 2065, arXiv:1804.07769" for this topic. That arXiv ID does not resolve to a limb-darkening paper; the correct canonical reference for the $(q_1,q_2)$ efficient-sampling reparametrization is Kipping (2013), verified here and substituted accordingly.

---

## Executive Summary
Fitting quadratic limb-darkening coefficients $(u_1, u_2)$ directly with uninformative (e.g. uniform) priors is statistically inefficient and can introduce bias, because the physically allowed region of $(u_1,u_2)$-space consistent with a monotonically decreasing, non-negative specific intensity profile is a *triangular* subset of the square prior volume — uniform sampling in $(u_1,u_2)$ therefore over- or under-samples parts of the physical region non-uniformly once the triangular constraint is imposed, and correlates the two parameters strongly in posterior space. Kipping derives a transformation to new parameters $(q_1,q_2)$ for which a uniform prior over the unit square $[0,1]^2$ maps *exactly* onto uniform, uncorrelated sampling of the physically permitted triangular region in $(u_1,u_2)$-space.

---

## Key Equations & Theoretical Framework
The quadratic limb-darkening law is
$$\frac{I(\mu)}{I(1)} = 1 - u_1(1-\mu) - u_2(1-\mu)^2, \qquad \mu = \cos\theta$$
where $u_1, u_2$ are the linear and quadratic limb-darkening coefficients and $\theta$ is the angle between the line of sight and the local stellar surface normal. Physical admissibility (non-negative, monotonically decreasing intensity from disk center to limb) requires
$$u_1 + u_2 < 1, \qquad u_1 > 0, \qquad u_1 + 2u_2 > 0$$
which bounds $(u_1,u_2)$ to a triangular region of the $(u_1,u_2)$-plane with vertices at $(0,0)$, $(1,0)$, $(0,1)$ (approximately — the exact triangle from the three inequalities above).

Kipping's reparametrization introduces
$$q_1 = (u_1+u_2)^2, \qquad q_2 = \frac{u_1}{2(u_1+u_2)}$$
with inverse transformation
$$u_1 = 2\sqrt{q_1}\,q_2, \qquad u_2 = \sqrt{q_1}\,(1-2q_2)$$
where:
- $q_1 \in [0,1]$ maps to the "total limb-darkening strength" $(u_1+u_2)^2$
- $q_2 \in [0,1]$ maps to the fractional partition between linear and quadratic contributions

**Jacobian verification**: the transformation is constructed so that the Jacobian $\left|\partial(u_1,u_2)/\partial(q_1,q_2)\right|$ exactly compensates for the triangular geometry, so that a uniform prior $\mathcal{U}(0,1)\times\mathcal{U}(0,1)$ on $(q_1,q_2)$ is equivalent to a uniform prior over the physically allowed triangular region in $(u_1,u_2)$-space — this is the "uninformative but efficient" sampling scheme.

**Asymptotic checks**: at $q_1=0$, $u_1=u_2=0$ (no limb darkening, uniform disk — recovers the Mandel & Agol uniform-disk limit, see [[Mandel_Agol_2002_Analytic_Transit_Light_Curves]]); at $q_2=1/2$, $u_2=0$ (pure linear law); the mapping is bijective and one-to-one over the full physical triangle, avoiding both boundary pile-up and unphysical excursions during MCMC/nested sampling.

---

## Observational Data & Methodology
- **Target / Sample**: Methodological paper; validated via simulated transit light curve fits and reanalysis of published Kepler transiting-planet limb-darkening posteriors.
- **Instrument Setup**: N/A (statistical method, agnostic to photometric instrument).
- **Reduction & Detrending Pipeline**: $(q_1,q_2)$ are the sampled MCMC parameters; the transform back to $(u_1,u_2)$ is applied once per likelihood evaluation inside the transit model (e.g. in the Mandel & Agol flux equation).

---

## Critical Findings & Scientific Impact
1. Demonstrates that naive uniform priors directly on $(u_1,u_2)$ waste sampler efficiency and bias inferred transit depths and durations, because the sampler explores unphysical or highly-correlated corners of parameter space.
2. The $(q_1,q_2)$ transform is now the default limb-darkening parametrization in most public transit-fitting codes.
3. Companion paper (Kipping 2016, arXiv:1509.03483) extends the technique to a three-parameter limb-darkening law.

---

## Vault Cross-References
- Core Theory: [[Stellar Limb Darkening Laws]], [[Prior Probability Distributions in Exoplanet Fitting]]
- Computational: [[Limb Darkening Computation with ldtk]], [[Affine-Invariant Ensemble MCMC with emcee]]
- Map of Content: [[Astrophysics_Laboratory_2_MOC]], [[Astro-Statistics_and_Cosmology_MOC]]
