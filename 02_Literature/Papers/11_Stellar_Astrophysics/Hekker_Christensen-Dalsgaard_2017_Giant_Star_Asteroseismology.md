---
layout: "default"
title: "Hekker & Christensen-Dalsgaard (2017) — Giant Star Seismology"
---
## Metadata
- **Authors**: Saskia Hekker, Jørgen Christensen-Dalsgaard
- **Year**: 2017
- **arXiv ID**: [arXiv:1609.07487](https://arxiv.org/abs/1609.07487)
- **ADS Bibcode**: `2017A&ARv..25....1H`
- **Journal**: *A&ARv*, 25, 1
- **Sub-field**: astro-ph.SR
- **Key Observatory / Code**: CoRoT and Kepler space-based photometric asteroseismology

---

## Executive Summary
This review synthesizes a decade of red-giant asteroseismology enabled by the CoRoT and Kepler space missions' unprecedented long-baseline, high-precision photometry. Solar-like oscillations — stochastically excited by near-surface convection, analogous to the well-studied five-minute solar oscillations — are detectable in tens of thousands of red giants, and their frequency-domain characteristics (the large frequency separation $\Delta\nu$, frequency of maximum power $\nu_{\rm max}$, and, crucially, mixed dipole-mode period spacings) provide direct, model-independent constraints on giant-star mass, radius, evolutionary state (hydrogen-shell-burning red giant branch versus core-helium-burning clump), and — via mixed-mode period spacing — the otherwise inaccessible core rotation rate.

---

## Key Equations & Theoretical Framework
**Fundamental postulate**: stochastically excited, standing acoustic (pressure, "p-mode") waves resonate within the stellar envelope, with the resonant frequency spectrum encoding the star's internal sound-speed profile via the same physics governing solar five-minute oscillations, extended to giant stars where gravity ("g-mode") waves in the radiative core can additionally couple to p-modes in "mixed modes" that carry direct information about the deep stellar interior.

**Asymptotic p-mode frequency relation** (large frequency separation), analogous to organ-pipe overtone spacing, relating the spacing between consecutive same-degree overtones to the stellar mean density:
$$\Delta\nu \approx \left(2\int_0^R \frac{dr}{c_s(r)}\right)^{-1} \propto \sqrt{\frac{M}{R^3}} \propto \sqrt{\bar\rho}$$
where $c_s(r)$ is the local adiabatic sound speed — $\Delta\nu$ directly measures the star's mean density given the sound-crossing time of the stellar interior.

**Frequency of maximum oscillation power**, empirically found to scale with the acoustic cutoff frequency (above which waves are no longer trapped and instead escape the stellar atmosphere):
$$\nu_{\rm max} \propto \frac{g}{\sqrt{T_{\rm eff}}} \propto \frac{M}{R^2\sqrt{T_{\rm eff}}}$$

**Combined seismic scaling relations for mass and radius**, obtained by combining $\Delta\nu$ and $\nu_{\rm max}$ with the (independently, e.g. spectroscopically, determined) effective temperature $T_{\rm eff}$:
$$\frac{M}{M_\odot} \approx \left(\frac{\nu_{\rm max}}{\nu_{\rm max,\odot}}\right)^3\left(\frac{\Delta\nu}{\Delta\nu_\odot}\right)^{-4}\left(\frac{T_{\rm eff}}{T_{\rm eff,\odot}}\right)^{3/2}, \qquad \frac{R}{R_\odot} \approx \left(\frac{\nu_{\rm max}}{\nu_{\rm max,\odot}}\right)\left(\frac{\Delta\nu}{\Delta\nu_\odot}\right)^{-2}\left(\frac{T_{\rm eff}}{T_{\rm eff,\odot}}\right)^{1/2}$$
giving model-independent (to within the scaling relations' own calibration accuracy) mass and radius estimates for any star with detected solar-like oscillations and a known $T_{\rm eff}$ — enabling asteroseismic distance-independent stellar parameters for tens of thousands of field red giants observed by Kepler.

**Mixed-mode period spacing and core rotation**: for dipole ($\ell=1$) mixed modes, which have g-mode character (evanescent p-mode coupling) in the radiative core and p-mode character in the convective envelope, the asymptotic period spacing $\Delta P$ of the pure g-mode component distinguishes red-giant-branch stars (larger $\Delta P$, less evolved, hydrogen-shell-burning around an electron-degenerate helium core) from core-helium-burning red clump stars (smaller $\Delta P$, non-degenerate helium-burning core) — resolving a classical CMD degeneracy (RGB and clump stars overlap in color-magnitude space) via seismology alone. Rotational splitting of the mixed-mode multiplets further isolates the otherwise unobservable core rotation rate, decoupled from the (separately measurable, via surface $v\sin i$) envelope rotation rate.

**Asymptotic checks**: in the limit of a chemically homogeneous, non-evolved main-sequence star (no deep radiative core with trapped g-modes near the p-mode frequency range), no mixed-mode coupling occurs and the oscillation spectrum reduces to pure, regularly spaced p-modes — the well-studied solar case; as a star evolves up the giant branch, the core contracts and heats, g-mode frequencies increase, and progressively more g-dominated mixed modes appear within the observable p-mode frequency range, explaining why mixed-mode asteroseismology is a giant-star-specific (rather than main-sequence) diagnostic tool.

---

## Observational Data & Methodology
- **Target / Sample**: tens of thousands of red giants observed photometrically by CoRoT and Kepler, spanning the red giant branch, red clump, and secondary clump.
- **Instrument Setup**: continuous, long-baseline (months to years) space-based photometry at sub-mmag precision, required to resolve the long-period, low-amplitude oscillations characteristic of evolved giants.
- **Reduction & Detrending Pipeline**: power-spectrum estimation from the detrended photometric time series, automated pipeline extraction of $\Delta\nu$, $\nu_{\rm max}$, and individual mode frequencies/period spacings, cross-validated against independent extraction pipelines and, where available, spectroscopic $T_{\rm eff}$ and $\mathrm{[Fe/H]}$.

---

## Critical Findings & Scientific Impact
1. Established asteroseismic scaling relations as a distance-independent, model-independent (at the percent level) technique for determining red-giant mass, radius, and age — now a standard tool for Galactic archaeology studies requiring precise stellar ages across large field-star samples.
2. The mixed-mode period-spacing technique definitively resolved the red-giant-branch/red-clump classification ambiguity for individual field stars, a problem previously solvable only statistically or for cluster members with known distance.
3. Open problem: the absolute calibration of the seismic scaling relations (particularly the radius scaling) shows small but statistically significant systematic offsets relative to independent (e.g. eclipsing-binary or interferometric) radius measurements for evolved giants, motivating continued refinement of the underlying asymptotic theory beyond the simple scaling-relation approximation.

---

## Vault Cross-References
- Core Theory: [[Stellar structure equations]]
- Related: [[Paxton_2011_2019_MESA_Stellar_Evolution_Code]], [[Gaia_Collaboration_2023_DR3_Summary]]
- Map of Content: [[Stellar_Astrophysics_MOC]]
