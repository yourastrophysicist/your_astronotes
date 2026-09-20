---
layout: "default"
title: "Planck Collaboration / Aghanim et al. (2020) — Planck 2018 Results VI: Cosmological Parameters"
---
## Metadata
- **Authors**: Planck Collaboration (N. Aghanim et al.)
- **Year**: 2020 (final full-mission release)
- **arXiv ID**: [arXiv:1807.06209](https://arxiv.org/abs/1807.06209)
- **ADS Bibcode**: `2020A&A...641A...6P`
- **Journal**: *A&A*, 641, A6 (erratum: *A&A* 652, C4, 2021)
- **Sub-field**: astro-ph.CO
- **Key Observatory / Code**: *Planck* satellite (temperature + polarization), `CAMB`/`CosmoMC` likelihood pipeline

---

## Executive Summary
This paper presents the final cosmological parameter constraints from the full-mission *Planck* CMB temperature and polarization power spectra, combined with CMB lensing reconstruction. The data are consistent with the spatially flat, six-parameter $\Lambda$CDM model to remarkable precision, with no statistically significant evidence for extensions (running spectral index, non-zero curvature, non-minimal neutrino sector, or dynamical dark energy) beyond the baseline model. The inferred Hubble constant, $H_0=67.4\pm0.5\,\mathrm{km\,s^{-1}\,Mpc^{-1}}$, is in $\sim4.4\sigma$ tension with contemporaneous local (distance-ladder) determinations — the tension that would later sharpen to $5\sigma$ with Riess et al. (2022).

---

## Key Equations & Theoretical Framework
**Fundamental postulate**: the observed CMB temperature and polarization angular power spectra $C_\ell^{TT}, C_\ell^{TE}, C_\ell^{EE}$ are predicted by linearized cosmological perturbation theory evolved through the coupled photon-baryon-dark-matter-neutrino Boltzmann hierarchy from an assumed primordial power spectrum, and are compared to the observed spectra via a Gaussian (or, at low multipole, more exact) likelihood in a 6-dimensional $\Lambda$CDM parameter space.

**Base $\Lambda$CDM parameter set**:
$$\{\Omega_bh^2,\ \Omega_ch^2,\ 100\theta_*,\ \tau,\ \ln(10^{10}A_s),\ n_s\}$$
where:
- $\Omega_bh^2, \Omega_ch^2$ are the physical baryon and cold-dark-matter densities
- $\theta_*$ is the angular size of the sound horizon at recombination (see [[CMB power spectrum]]), the single most precisely measured CMB observable, fixing the overall acoustic-peak spacing
- $\tau$ is the optical depth to reionization
- $A_s, n_s$ are the amplitude and spectral index of the primordial scalar power spectrum

**Derived Hubble constant**: within flat $\Lambda$CDM, $H_0$ is not an independent parameter but is derived from the base set via the constraint that the angular sound-horizon scale $\theta_* = r_s(z_*)/D_A(z_*)$ matches its precisely measured value, where $D_A(z_*)$ depends on the full expansion history back to recombination:
$$D_A(z_*) = \frac{c}{1+z_*}\int_0^{z_*}\frac{dz}{H(z)}, \qquad H(z) = H_0\sqrt{\Omega_m(1+z)^3+\Omega_\Lambda}$$
This makes the Planck $H_0$ value **model-dependent**: it is the value of $H_0$ required to reproduce the observed $\theta_*$ *given* the assumption of flat $\Lambda$CDM, in contrast to a distance-ladder $H_0$, which is measured essentially model-independently in the late universe (see [[Riess_2022_SH0ES_Hubble_Constant]]) — this distinction is central to interpreting the Hubble tension as a possible signal of physics beyond $\Lambda$CDM rather than a simple measurement error.

**Optical depth and reionization**: $\tau$ enters the polarization spectrum at low multipole, breaking the exact degeneracy between $A_s$ and $\tau$ that would otherwise persist if only temperature data were used, and jointly constraining the epoch of reionization.

**Asymptotic checks**: in the limit of a perfectly measured $\theta_*$ but no external prior on $\Omega_m$, $H_0$ and $\Omega_m$ remain partially degenerate along the CMB "geometric degeneracy" direction; Planck's measurement of the CMB lensing power spectrum (sensitive to the late-time matter distribution independently of the primary anisotropies) partially breaks this degeneracy, tightening the joint constraint beyond what the primary spectra alone would allow.

---

## Observational Data & Methodology
- **Target / Sample**: the full-sky CMB temperature and polarization anisotropy maps from the complete *Planck* mission (2009–2013 observations, final "PR3"/"2018" data release).
- **Instrument Setup**: *Planck*'s HFI and LFI instruments, spanning 30–857 GHz, angular resolution down to $\sim5'$.
- **Reduction & Detrending Pipeline**: component-separated CMB maps, pseudo-$C_\ell$ and likelihood-based power-spectrum estimation, MCMC (`CosmoMC`) sampling of the 6-parameter $\Lambda$CDM posterior given the `CAMB`-computed theoretical spectra.

---

## Critical Findings & Scientific Impact
1. Establishes flat $\Lambda$CDM as an extraordinarily successful fit to the CMB across three decades of angular scale, with all six base parameters constrained to sub-percent-to-percent precision.
2. The Planck $H_0$ value anchors one side of the now-firmly-established Hubble tension, motivating a decade of subsequent work on both systematics and new physics (early dark energy, modified recombination, non-standard neutrino physics) as possible resolutions.
3. Open problem: whether the Hubble tension reflects unaccounted-for systematics in either the CMB-based or distance-ladder-based measurement chains, or genuinely new physics operating between recombination and today, remains unresolved as of the most recent DESI and SH0ES results (see [[DESI_2024_BAO_Cosmological_Constraints]], [[Riess_2022_SH0ES_Hubble_Constant]]).

---

## Vault Cross-References
- Core Theory: [[Friedmann equations with Lambda]], [[CMB power spectrum]], [[CMB angular power spectrum estimator and cosmic variance]]
- Related: [[Photon decoupling and CMB]]
- Map of Content: [[Fundamentals_Astrophysics_Cosmology_MOC]], [[Observational_Cosmology_MOC]]
