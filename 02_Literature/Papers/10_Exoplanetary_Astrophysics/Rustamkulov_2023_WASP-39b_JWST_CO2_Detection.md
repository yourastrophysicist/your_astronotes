---
layout: "default"
title: "Rustamkulov et al. (2023) — Early Release Science of WASP-39b with JWST NIRSpec PRISM"
---
## Metadata
- **Authors**: Zafar Rustamkulov et al. (JWST Transiting Exoplanet Community Early Release Science team)
- **Year**: 2023
- **arXiv ID**: [arXiv:2211.10487](https://arxiv.org/abs/2211.10487)
- **ADS Bibcode**: `2023Natur.614..659R`
- **Journal**: *Nature*, 614, 659
- **Sub-field**: astro-ph.EP
- **Key Observatory / Code**: JWST NIRSpec PRISM (0.5–5.5 $\mu$m transmission spectroscopy)

---

## Executive Summary
As part of the JWST Transiting Exoplanet Community Early Release Science program, Rustamkulov et al. present a single-transit NIRSpec PRISM transmission spectrum of the hot Saturn WASP-39b spanning 0.5–5.5 $\mu$m with no wavelength gaps. The spectrum robustly detects water, carbon monoxide, carbon dioxide, sodium, and sulfur dioxide, and places a non-detection constraint on methane — the first unambiguous identification of CO$_2$ in an exoplanet atmosphere, and a demonstration of JWST's ability to constrain atmospheric metallicity, carbon-to-oxygen ratio, and photochemistry (via the SO$_2$ detection) from a single transit observation.

---

## Key Equations & Theoretical Framework
**Fundamental postulate**: transmission spectroscopy measures the wavelength-dependent effective transit depth caused by atmospheric absorption at the day-night terminator, since atomic/molecular opacity increases the effective planetary radius at wavelengths coincident with absorption features.

**Wavelength-dependent transit depth**:
$$\delta(\lambda) = \left(\frac{R_p(\lambda)}{R_*}\right)^2 \approx \left(\frac{R_{p,0}}{R_*}\right)^2 + \frac{2R_{p,0}}{R_*^2}\,H\,\ln\!\left[\frac{\sigma(\lambda)P_0}{\tau_{\rm eq}\,g}\sqrt{\frac{2\pi R_{p,0}}{H}}\right]$$
where:
- $R_{p,0}$ is the reference (continuum) planetary radius
- $H = k_BT/\mu g$ is the atmospheric scale height (see [[Exoplanet atmospheric scale height and transmission spectroscopy]])
- $\sigma(\lambda)$ is the wavelength-dependent absorption cross-section of the relevant species
- $\tau_{\rm eq}$ is the optical depth at which the atmosphere becomes effectively opaque along the slant (limb) geometry

**Atmospheric metallicity and C/O ratio retrieval**: the relative depths of the H$_2$O, CO, and CO$_2$ features constrain the atmospheric oxygen and carbon abundances (and hence the bulk metallicity relative to the host star and the carbon-to-oxygen ratio C/O) via chemical-equilibrium or free-retrieval atmospheric modeling, since CO$_2$ abundance in chemical equilibrium scales super-linearly with the atmospheric metallicity:
$$X_{\mathrm{CO}_2} \propto Z_{\rm atm}^2$$
(approximately, in the equilibrium-chemistry regime relevant to WASP-39b's temperature), making CO$_2$ a particularly sensitive metallicity tracer relative to the more weakly ($\propto Z_{\rm atm}^1$) scaling H$_2$O and CO features.

**Photochemical SO$_2$ production**: the detected SO$_2$ feature is not expected from pure thermochemical equilibrium at WASP-39b's atmospheric temperature and requires photochemical production via UV-driven dissociation of H$_2$S followed by recombination with atomic oxygen — direct observational evidence that exoplanet atmospheric composition is not fully described by equilibrium chemistry alone.

**Asymptotic checks**: in the limit of a clear (cloud/haze-free), fully equilibrium-chemistry atmosphere, the observed molecular feature depths would be fully consistent with a single metallicity and C/O ratio across all species simultaneously; the detected SO$_2$ feature specifically requires departure from this limit, confirming active photochemistry is operating in WASP-39b's atmosphere at the observed pressure levels probed by transmission spectroscopy ($\sim1$–$100$ mbar).

---

## Observational Data & Methodology
- **Target / Sample**: WASP-39b, an inflated, low-density ($\rho_p\sim0.28\,\mathrm{g\,cm^{-3}}$) hot-Saturn-mass transiting exoplanet.
- **Instrument Setup**: JWST NIRSpec PRISM, single-transit continuous 0.5–5.5 $\mu$m spectroscopy with no filter/grating gaps, avoiding the systematic offsets between separate instrument-mode stitched spectra that limited pre-JWST composite transmission spectra.
- **Reduction & Detrending Pipeline**: multiple independent reduction pipelines cross-validated the transit light curve fitting and spectral extraction; atmospheric retrieval codes (free-chemistry and equilibrium-chemistry) fit the resulting spectrum for temperature structure, cloud/haze parameters, and molecular abundances.

---

## Critical Findings & Scientific Impact
1. First unambiguous CO$_2$ detection in an exoplanet atmosphere, resolved via its distinctive 4.3 $\mu$m absorption feature — a wavelength region inaccessible to HST and only marginally accessible to Spitzer.
2. First detection of photochemically produced SO$_2$ in an exoplanet atmosphere, direct evidence for disequilibrium atmospheric chemistry driven by stellar UV irradiation.
3. Open problem: translating the retrieved atmospheric metallicity and C/O ratio into formation-location constraints (via the classical carbon-oxygen "snow line" formation scenario) requires assumptions about subsequent atmospheric mixing and accretion history that remain actively debated.

---

## Vault Cross-References
- Core Theory: [[Exoplanet atmospheric scale height and transmission spectroscopy]]
- Related: [[Pebble accretion and planetary orbital migration]], [[Protoplanetary disk evolution and core accretion paradigm]]
- Map of Content: [[Exoplanetary_Astrophysics_MOC]]
