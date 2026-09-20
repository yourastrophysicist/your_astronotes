---
layout: "default"
title: "Draine & Li (2007) — Infrared Emission from Interstellar Dust IV: The Silicate-Graphite-PAH Model"
---
## Metadata
- **Authors**: Bruce T. Draine, Aigen Li
- **Year**: 2007
- **arXiv ID**: [arXiv:astro-ph/0608003](https://arxiv.org/abs/astro-ph/0608003)
- **ADS Bibcode**: `2007ApJ...657..810D`
- **Journal**: *ApJ*, 657, 810
- **Sub-field**: astro-ph.GA
- **Key Observatory / Code**: *Spitzer* IRS/MIPS-calibrated dust emission model; widely distributed as the "DL07" dust model grid

---

## Executive Summary
Draine & Li present an updated physical model for the infrared emission of interstellar dust, combining amorphous silicate and graphitic grain populations with a size distribution extending down to polycyclic aromatic hydrocarbon (PAH) molecules, calibrated against *Spitzer*-era mid- and far-infrared spectra of the diffuse interstellar medium and star-forming galaxies. Because individual PAH molecules and the smallest grains are not in thermal equilibrium with the ambient radiation field — a single absorbed UV photon can transiently heat a small grain to very high temperature before it radiatively cools — the model requires a full stochastic-heating treatment rather than a simple single-equilibrium-temperature blackbody, and the resulting emission spectrum's characteristic mid-IR PAH emission features (3.3, 6.2, 7.7, 8.6, 11.3 $\mu$m) serve as a widely used tracer of both dust abundance and the intensity/hardness of the local UV radiation field.

---

## Key Equations & Theoretical Framework
**Fundamental postulate**: interstellar dust grains absorb starlight (predominantly UV/optical photons) and re-radiate the absorbed energy thermally in the infrared; because grain heat capacity scales with grain volume ($\propto a^3$ for grain radius $a$) while single-photon absorption energy does not, sufficiently small grains/PAHs undergo large, transient temperature excursions rather than settling to a single steady-state temperature — requiring a stochastic (probability-distribution) treatment of grain temperature.

**Grain equilibrium temperature** (valid only for sufficiently large grains, where stochastic heating is negligible), from balancing absorbed and emitted power:
$$4\pi a^2\int Q_{\rm abs}(a,\lambda)\,\pi B_\lambda(T_{\rm eq})\,d\lambda = \pi a^2\int Q_{\rm abs}(a,\lambda)\,u_\lambda\,c\,d\lambda$$
where $Q_{\rm abs}(a,\lambda)$ is the grain absorption efficiency, $B_\lambda(T)$ the Planck function, and $u_\lambda$ the ambient radiation-field energy density.

**Stochastic heating for small grains/PAHs**: the temperature probability distribution $dP/dT$ for a grain of a given size is obtained by solving the master equation for photon absorption (Poisson-distributed, rate set by the UV photon flux and grain cross-section) and subsequent radiative cooling (following the same $Q_{\rm abs}(a,\lambda)$-weighted emission as above), then the time-averaged infrared emission spectrum for that grain size is
$$\langle j_\lambda(a)\rangle = \int_0^\infty \frac{dP}{dT}(a,T)\;4\pi a^2\,\pi Q_{\rm abs}(a,\lambda)\,B_\lambda(T)\,dT$$
— for the smallest PAHs, $dP/dT$ is a broad distribution spanning from near-zero to very high transient temperatures, in sharp contrast to the near-delta-function distribution (equivalent to a single equilibrium $T_{\rm eq}$) appropriate for large grains.

**Total model emission spectrum**, integrating over the full size distribution $dn/da$ (silicate + graphite + PAH populations, each with its own $Q_{\rm abs}(a,\lambda)$ and size distribution calibrated to reproduce the mean Milky Way UV-through-IR extinction and emission simultaneously):
$$j_\lambda^{\rm tot} = \int \langle j_\lambda(a)\rangle\,\frac{dn}{da}\,da$$
with the PAH abundance parametrized by $q_{\rm PAH}$, the fraction of total dust mass in PAH-sized grains — a single adjustable parameter that primarily controls the strength of the mid-IR aromatic emission features relative to the far-IR big-grain thermal continuum.

**Asymptotic checks**: for large grains ($a\gtrsim0.02\,\mu$m), the stochastic-heating temperature distribution collapses to the single-equilibrium-temperature limit, recovering the simple modified-blackbody emission spectrum used for far-IR cold-dust continuum modeling; in the limit of an arbitrarily hard/intense radiation field, even larger grains begin to show stochastic-heating behavior, while in a very weak/soft radiation field (e.g. deep in a molecular cloud), stochastic heating becomes negligible for essentially the entire grain population and the emission spectrum is well-approximated by cold big grains alone — relevant to distinguishing diffuse-ISM from dense, shielded cloud emission.

---

## Observational Data & Methodology
- **Target / Sample**: the diffuse Galactic interstellar medium and a comparison sample of star-forming and quiescent galaxies observed by *Spitzer*.
- **Instrument Setup**: *Spitzer* IRAC, IRS, and MIPS mid-to-far-infrared photometry and spectroscopy.
- **Reduction & Detrending Pipeline**: joint fitting of the model's grain-size-distribution and $q_{\rm PAH}$ parameters to observed IR spectral energy distributions, cross-validated against the independently constrained UV-optical dust extinction curve for consistency between absorption and emission properties of the same grain population.

---

## Critical Findings & Scientific Impact
1. Established the widely used "DL07" dust emission model as the standard tool for interpreting galaxy infrared SEDs in terms of dust mass, PAH abundance fraction, and starlight intensity distribution.
2. The PAH emission-feature ratios (e.g. 6.2/7.7 $\mu$m, 11.3/7.7 $\mu$m) calibrated by this model remain the primary tool for using mid-IR spectroscopy (Spitzer, and now JWST — see [[Meidt_2023_PHANGS_JWST_ISM_Structure]]) to trace star-formation activity and UV field hardness in nearby and distant galaxies.
3. Open problem: the detailed size- and charge-state-dependent optical properties of PAHs remain incompletely constrained by laboratory data, an ongoing source of systematic uncertainty in translating observed PAH feature ratios into precise physical conditions — an area where JWST's far higher spatial resolution and sensitivity is now providing much tighter empirical tests of the model.

---

## Vault Cross-References
- Core Theory: [[Dust extinction in nebulae]], [[Photodissociation regions PDRs]]
- Related: [[Larson_1981_Turbulence_Star_Formation_Molecular_Clouds]]
- Map of Content: [[Astrophysics_of_the_Interstellar_Medium_MOC]]
