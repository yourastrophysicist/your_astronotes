---
layout: "default"
title: "Eisenstein et al. (2005) — Detection of the Baryon Acoustic Peak in SDSS Luminous Red Galaxies"
---
## Metadata
- **Authors**: Daniel J. Eisenstein et al. (SDSS collaboration)
- **Year**: 2005
- **arXiv ID**: [arXiv:astro-ph/0501171](https://arxiv.org/abs/astro-ph/0501171)
- **ADS Bibcode**: `2005ApJ...633..560E`
- **Journal**: *ApJ*, 633, 560
- **Sub-field**: astro-ph.CO
- **Key Observatory / Code**: Sloan Digital Sky Survey (SDSS) luminous red galaxy spectroscopic sample

---

## Executive Summary
Eisenstein et al. report the first clear detection of the baryon acoustic oscillation (BAO) feature in the large-scale two-point correlation function of galaxies, using $\sim47{,}000$ SDSS luminous red galaxies spanning $0.72\,h^{-3}\,\mathrm{Gpc}^3$. The detected peak at a comoving separation of $\sim100\,h^{-1}\,\mathrm{Mpc}$ matches, in both amplitude and location, the predicted imprint of pre-recombination baryon-photon acoustic oscillations frozen into the late-time matter distribution — providing the first low-redshift confirmation of a comoving physical scale (the sound horizon) set entirely by early-universe physics, and establishing BAO as a standard ruler for measuring the cosmic expansion history independently of the supernova distance ladder.

---

## Key Equations & Theoretical Framework
**Fundamental postulate**: prior to recombination, the tightly coupled baryon-photon fluid supports acoustic pressure waves sourced by primordial density perturbations; these waves propagate outward from each initial overdensity until the sound speed drops sharply at recombination (baryons decouple from radiation), freezing a characteristic comoving length scale — the sound horizon — into the late-time baryon (and, via gravitational coupling, dark matter) distribution.

**Sound horizon at the drag epoch** (baryon decoupling), the comoving distance a pressure wave can travel by the time baryons kinematically decouple from photons ($z_d$, close to but not identical to the photon decoupling redshift $z_*$):
$$r_s(z_d) = \int_{z_d}^{\infty}\frac{c_s(z)}{H(z)}\,dz, \qquad c_s(z) = \frac{c}{\sqrt{3\left[1+R_b(z)\right]}}, \quad R_b(z) = \frac{3\rho_b}{4\rho_\gamma}$$
where $c_s(z)$ is the baryon-photon fluid sound speed and $R_b(z)$ the baryon-to-photon momentum density ratio — for standard $\Omega_bh^2$, $r_s(z_d)\approx147$ Mpc (comoving), setting the predicted BAO peak location.

**Correlation-function BAO signature**: the acoustic peak appears as a localized bump in the two-point correlation function $\xi(r)$ at comoving separation $r\approx r_s(z_d)$, superposed on the smooth, featureless power-law correlation function otherwise expected from pure gravitational clustering of an initially scale-invariant, featureless power spectrum.

**Dilation scale / effective distance**, the observable BAO measures at a given survey redshift $z$, combining the transverse (angular-diameter-distance) and radial (Hubble-rate) stretching of the standard ruler:
$$D_V(z) \equiv \left[c\,z\,D_M^2(z)\,H^{-1}(z)\right]^{1/3}$$
where $D_M(z)$ is the comoving angular-diameter distance — the ratio $D_V(z)/r_s(z_d)$ is the dimensionless BAO observable, directly constraining the combination of $H_0$, $\Omega_m$, and (in later, higher-precision BAO measurements) the dark-energy equation of state.

**Asymptotic checks**: for $\Omega_bh^2\to0$ (baryon-free universe), $R_b\to0$, $c_s\to c/\sqrt3$ throughout, and there is no baryon-photon coupling to produce a preferred acoustic scale at all — the very existence of a detectable BAO peak is direct evidence for a non-zero baryon density coupled to the pre-recombination photon fluid, independent of and consistent with the baryon density inferred from BBN and the CMB acoustic peaks.

---

## Observational Data & Methodology
- **Target / Sample**: 46,748 SDSS luminous red galaxies, $0.16<z<0.47$, selected as strongly clustered, highly biased tracers optimal for large-scale structure measurement.
- **Instrument Setup**: SDSS 2.5 m telescope, spectroscopic redshift survey.
- **Reduction & Detrending Pipeline**: two-point correlation function estimation with random-catalog subtraction to control survey geometry/selection effects, compared against $\Lambda$CDM linear-theory correlation function templates with and without the acoustic peak.

---

## Critical Findings & Scientific Impact
1. First unambiguous detection of the BAO feature in galaxy clustering, at a statistical significance and scale fully consistent with $\Lambda$CDM predictions given the WMAP-era CMB baryon and matter densities.
2. Established BAO as a second, geometrically independent standard ruler alongside Type Ia supernovae, subsequently exploited by 2dFGRS, BOSS, eBOSS, and DESI (see [[DESI_2024_BAO_Cosmological_Constraints]]) to map the expansion history across cosmic time with steadily improving precision.
3. Open problem at the time: the single, low-redshift BAO detection could not yet distinguish between competing dark-energy models; only the subsequent multi-redshift BAO surveys (culminating in DESI) provide enough leverage to test for redshift-dependent (dynamical) dark energy.

---

## Vault Cross-References
- Core Theory: [[Matter power spectrum and BAO]], [[Friedmann equations with Lambda]]
- Related: [[Distance ladder derivations]]
- Map of Content: [[Observational_Cosmology_MOC]], [[Fundamentals_Astrophysics_Cosmology_MOC]]
