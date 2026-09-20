---
layout: "default"
title: "DESI Collaboration / Adame et al. (2024) — DESI 2024 VI: Cosmological Constraints from Baryon Acoustic Oscillations"
---
## Metadata
- **Authors**: DESI Collaboration (A. G. Adame et al.)
- **Year**: 2024
- **arXiv ID**: [arXiv:2404.03002](https://arxiv.org/abs/2404.03002)
- **ADS Bibcode**: `2024arXiv240403002D`
- **Sub-field**: astro-ph.CO
- **Key Observatory / Code**: Dark Energy Spectroscopic Instrument (DESI), Data Release 1 (Year 1)

**Provenance note**: the original enrichment brief titled this "DESI 2024 III: Baryon Acoustic Oscillations from Galaxies and Quasars" while citing arXiv:2404.03002 — that arXiv ID is actually the companion cosmological-constraints paper, **DESI 2024 VI**; the raw BAO-measurement paper the plan's title describes is a separate paper, arXiv:2404.03000 ("DESI 2024 III"). This note covers DESI 2024 VI, since its content (dynamical dark-energy constraints, $w_0,w_a$) matches what the plan's key-equations section actually described.

---

## Executive Summary
Using over 6 million galaxies and quasars from DESI's first year of observations, spanning seven redshift bins from $0.1<z<4.2$ (galaxies, quasars, and the Lyman-$\alpha$ forest), the DESI collaboration measures BAO distances to sub-percent precision across the widest redshift range yet achieved by a single survey. Combined with CMB and supernova data, the DESI BAO measurements show a mild ($\sim2$–$3\sigma$, depending on the external dataset combination) preference for a **time-evolving dark-energy equation of state** over the cosmological-constant ($w=-1$) baseline — the first BAO-driven hint that dark energy might not be a simple constant, though not yet a definitive detection.

---

## Key Equations & Theoretical Framework
**Fundamental postulate**: the BAO standard-ruler technique (see [[Eisenstein_2005_BAO_Detection_SDSS_LRGs]]) applied simultaneously across multiple redshift bins constrains the *shape* of the expansion history $H(z)$, not merely its value at a single epoch — enabling a direct test of whether the dark-energy density is constant or evolves with redshift.

**Chevallier-Polarski-Linder (CPL) dark-energy equation of state**, the standard two-parameter phenomenological extension beyond a cosmological constant:
$$\boxed{\, w(a) = w_0 + w_a(1-a) \,}$$
where:
- $w_0$ is the present-day ($a=1$) dark-energy equation-of-state parameter
- $w_a$ is the rate of evolution of $w$ with the scale factor $a$
- $w=-1$, $w_a=0$ recovers the standard cosmological constant ($\Lambda$CDM)

**Dark-energy density evolution** under the CPL parametrization, obtained by integrating the dark-energy continuity equation $\dot\rho_{\rm DE}+3H(1+w)\rho_{\rm DE}=0$:
$$\rho_{\rm DE}(a) = \rho_{\rm DE,0}\,a^{-3(1+w_0+w_a)}\,\exp\left[-3w_a(1-a)\right]$$
which feeds into the Friedmann equation
$$H^2(z) = H_0^2\left[\Omega_m(1+z)^3 + \Omega_{\rm DE}\,\frac{\rho_{\rm DE}(z)}{\rho_{\rm DE,0}}\right]$$
governing both the distances $D_M(z)$, $D_H(z)=c/H(z)$ that DESI's multi-redshift BAO measurements jointly constrain.

**DESI's best-fit preference**: combining DESI BAO with CMB and supernova data, the joint fit favors $w_0>-1$ and $w_a<0$ (a dark-energy density that was more negative-pressure-dominated in the past and is evolving toward, or through, the phantom-divide boundary today) at a statistical significance that depends on the specific supernova compilation used, ranging from $\sim2\sigma$ to $\sim3.9\sigma$ across different external dataset combinations.

**Asymptotic checks**: for $w_a\to0$, the CPL form collapses to constant-$w$ dark energy, and for $w_0\to-1$ additionally, it recovers exactly $\Lambda$CDM — the DESI result is a statistical *preference* away from this limit, not an exclusion of it; standard $\Lambda$CDM remains within the DESI-plus-external-data confidence contours, so the result is best described as an intriguing hint rather than a confirmed departure from the concordance model.

---

## Observational Data & Methodology
- **Target / Sample**: DESI DR1 bright galaxies, luminous red galaxies, emission-line galaxies, quasars, and the Lyman-$\alpha$ forest, spanning $0.1<z<4.2$.
- **Instrument Setup**: DESI's robotic fiber-positioner spectrograph on the Mayall 4 m telescope, obtaining $\sim5000$ simultaneous spectra per exposure.
- **Reduction & Detrending Pipeline**: BAO distance extraction via the two-point correlation function / power spectrum in each redshift bin (following the [[Eisenstein_2005_BAO_Detection_SDSS_LRGs]] methodology at far higher precision and redshift range), combined in a joint likelihood with Planck CMB and multiple independent supernova compilations (Pantheon+, Union3, DES-SN5YR) to constrain the CPL parameters.

---

## Critical Findings & Scientific Impact
1. Delivers the most precise multi-redshift BAO distance ladder to date, extending BAO cosmography out to $z\sim4.2$ via the Lyman-$\alpha$ forest.
2. Provides the first BAO-driven statistical hint of dynamical dark energy, prompting rapid follow-up theoretical work on quintessence, early dark energy, and modified-gravity explanations.
3. Open problem: the preference for evolving $w(a)$ is sensitive to which external supernova compilation is combined with DESI BAO, indicating that unresolved systematics in one or more supernova samples could be partly responsible — resolving this requires either improved supernova calibration or DESI's own later data releases (DR2 onward) to test whether the preference strengthens or fades with more data.

---

## Vault Cross-References
- Core Theory: [[Matter power spectrum and BAO]], [[Friedmann equations with Lambda]]
- Related: [[Eisenstein_2005_BAO_Detection_SDSS_LRGs]], [[Riess_2022_SH0ES_Hubble_Constant]]
- Map of Content: [[Observational_Cosmology_MOC]], [[Fundamentals_Astrophysics_Cosmology_MOC]]
