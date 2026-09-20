---
layout: "default"
title: "Event Horizon Telescope Collaboration (2022) — First Sagittarius A* EHT Results VI: Testing the Black Hole Metric"
---
## Metadata
- **Authors**: Event Horizon Telescope Collaboration (K. Akiyama et al.)
- **Year**: 2022
- **arXiv ID**: [arXiv:2205.04465](https://arxiv.org/abs/2205.04465)
- **ADS Bibcode**: `2022ApJ...930L..17E`
- **Journal**: *ApJL*, 930, L17
- **Sub-field**: gr-qc / astro-ph.HE
- **Key Observatory / Code**: Event Horizon Telescope (EHT) VLBI array, 2017 observing campaign

---

## Executive Summary
Following the first resolved image of Sgr A*, the EHT collaboration tests whether the observed angular size of the black-hole "shadow" is consistent with the Kerr-metric prediction, using a library of both Kerr and parametrically non-Kerr GRMHD simulation images calibrated to the independently known mass-to-distance ratio of Sgr A* (from decades of stellar-orbit monitoring). The observed shadow size is consistent with the Kerr prediction to within $\sim10\%$, and — combined with prior consistency tests using the stellar-mass black hole shadow of the LIGO/Virgo binary black hole population and the M87* shadow — provides mass-independent evidence that the Kerr metric correctly describes the exterior spacetime of astrophysical black holes across roughly six orders of magnitude in mass.

---

## Key Equations & Theoretical Framework
**Fundamental postulate**: for a Kerr black hole, the boundary between photon orbits that escape to infinity and those that are captured by the horizon — the **black-hole shadow** — has a size and shape determined purely by the black-hole mass, spin, and observer inclination, essentially independent of the detailed astrophysical emission structure around it (the shadow is a property of the spacetime geometry, not of the accretion flow), making it a comparatively "clean" strong-field GR observable.

**Photon-ring / shadow angular size**, for a Schwarzschild black hole ($a=0$) viewed from distance $D$, the critical impact parameter for photon capture is $b_{\rm crit}=3\sqrt3\,r_g$ (with $r_g=GM/c^2$), giving an angular shadow diameter
$$\theta_{\rm shadow} \approx \frac{2b_{\rm crit}}{D} = \frac{6\sqrt3\,GM}{c^2D}$$
with only a weak ($\lesssim7\%$), spin- and inclination-dependent correction for a spinning Kerr black hole across the full range of spin and viewing angle — this near-universality is what makes the shadow size a robust, comparatively model-independent test of the underlying metric.

**Parametrized non-Kerr metric comparison**: rather than testing Kerr against a single alternative, the analysis compares the observed shadow size against a library of GRMHD-simulated images generated both for Kerr and for metrics with a parametrized deviation $\delta$ from the Kerr quadrupole/multipole structure (e.g. the Johannsen-Psaltis or similar parametrized metric frameworks):
$$g_{\mu\nu} = g_{\mu\nu}^{\rm Kerr} + \delta\,g_{\mu\nu}^{\rm deviation}(a,\theta,\phi)$$
constraining $\delta$ to be consistent with zero (pure Kerr) within the observational uncertainty, given the independently measured Sgr A* mass-to-distance ratio $GM/(c^2D)$ from stellar orbital dynamics (S2 and related S-star orbits).

**Cross-mass-scale consistency test**: combining this Sgr A* result ($M\sim4\times10^6\,M_\odot$) with the M87* shadow measurement ($M\sim6.5\times10^9\,M_\odot$) and the LIGO/Virgo binary-black-hole-inferred remnant properties ($M\sim10$–$100\,M_\odot$, see [[Abbott_2016_LIGO_GW150914_Detection]]) tests whether the same Kerr-metric relationship between mass and horizon-scale observables holds across nearly six orders of magnitude in black-hole mass — a test that no single alternative-gravity or exotic-compact-object model has yet been shown to violate in a way consistent with all three mass scales simultaneously.

**Asymptotic checks**: if the true spacetime deviated significantly from Kerr ($\delta$ far from zero), the observed shadow size at the independently known $GM/(c^2D)$ would fall outside the GRMHD-simulated Kerr image library's predicted range — the fact that it does not, within current measurement precision, is the operational statement of consistency with general relativity; as future EHT array upgrades (denser baseline coverage, higher frequency) improve angular resolution and photon-ring detection significance, the achievable precision on $\delta$ is expected to tighten substantially, providing an increasingly stringent test.

---

## Observational Data & Methodology
- **Target / Sample**: Sagittarius A*, the Milky Way's central supermassive black hole, $M\approx4\times10^6\,M_\odot$ at $D\approx8$ kpc.
- **Instrument Setup**: EHT global mm-VLBI array (2017 observing campaign, 230 GHz), combined with the independently determined mass-to-distance ratio from decades of near-infrared stellar-orbit astrometry (see [[GRAVITY_Collaboration_2018_Orbital_Motion_ISCO_SgrA]]).
- **Reduction & Detrending Pipeline**: comparison of the reconstructed EHT image's ring diameter against a library of GRMHD-simulated images (both Kerr and parametrized non-Kerr) processed through synthetic general-relativistic radiative transfer to produce comparable synthetic 230 GHz images.

---

## Critical Findings & Scientific Impact
1. Confirms Kerr-metric consistency for Sgr A* at the $\sim10\%$ level, extending the strong-field GR test to a second, independent supermassive black hole beyond M87*.
2. Establishes a cross-mass-scale consistency test of the Kerr metric spanning stellar-mass (LIGO/Virgo) to supermassive (EHT) black holes, a uniquely powerful test of the universality of black-hole spacetime structure predicted by general relativity's no-hair theorems.
3. Open problem: current shadow-size precision cannot yet distinguish Kerr from all physically motivated exotic alternatives (e.g. certain boson-star or wormhole models mimicking a shadow), motivating continued EHT array expansion and the pursuit of higher-order observables such as the theoretically predicted, as-yet-undetected higher-order "photon ring" substructure.

---

## Vault Cross-References
- Core Theory: [[Kerr Metric Horizon and Ergosphere Geometry]], [[Innermost Stable Circular Orbit ISCO]]
- Related: [[GRAVITY_Collaboration_2018_Orbital_Motion_ISCO_SgrA]], [[Bardeen_Press_Teukolsky_1972_Rotating_Black_Holes]]
- Map of Content: [[General_Relativity_MOC]], [[Astronomical_Interferometry_MOC]], [[Lab_High-Energy_MOC]]
