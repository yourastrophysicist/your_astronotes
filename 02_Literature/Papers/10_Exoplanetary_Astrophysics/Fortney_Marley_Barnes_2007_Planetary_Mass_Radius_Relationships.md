---
layout: "default"
title: "Fortney, Marley & Barnes (2007) — Planetary Radii Across Five Orders of Magnitude in Mass and Stellar Insolation"
---
## Metadata
- **Authors**: Jonathan J. Fortney, Mark S. Marley, Jason W. Barnes
- **Year**: 2007 (erratum 2008, *ApJ* 668, 1267)
- **arXiv ID**: [arXiv:astro-ph/0612671](https://arxiv.org/abs/astro-ph/0612671)
- **ADS Bibcode**: `2007ApJ...659.1661F`
- **Journal**: *ApJ*, 659, 1661
- **Sub-field**: astro-ph.EP
- **Key Observatory / Code**: interior structure models (hydrogen-helium, water, rock, iron equations of state)

---

## Executive Summary
Fortney, Marley & Barnes compute self-consistent planetary interior and radius models spanning five orders of magnitude in mass (0.01 to $\sim3000\,M_\oplus$, i.e. sub-Earth to super-Jupiter) and a wide range of stellar insolation (orbital distances 0.02–10 AU), for pure hydrogen-helium, water, rock, and iron compositions and physically motivated mixtures. The resulting mass-radius relationships and analytic fitting functions became the standard reference grid for interpreting the bulk composition of transiting exoplanets from their measured mass and radius alone — the primary observational handle available for the large majority of known exoplanets, which lack any spectroscopic atmospheric characterization.

---

## Key Equations & Theoretical Framework
**Fundamental postulate**: planetary interior structure is governed by the same hydrostatic-equilibrium and mass-continuity equations as stellar interiors (see [[Stellar structure equations]]), but with the pressure-density relation set by a cold or warm equation of state appropriate to degenerate/semi-degenerate matter (hydrogen-helium, ice, rock, iron) rather than an ideal or radiation-dominated gas, and with an additional surface boundary condition set by the absorbed stellar flux for irradiated giant planets.

**Interior structure equations** (identical hydrostatic form to the stellar case):
$$\frac{dP}{dr} = -\frac{Gm(r)\rho(r)}{r^2}, \qquad \frac{dm}{dr} = 4\pi r^2\rho(r)$$
closed by a composition-specific equation of state $P=P(\rho,T)$ — for cold hydrogen-helium at high pressure, electron degeneracy pressure dominates at the highest masses (analogous to, though quantitatively distinct from, the white-dwarf case in [[Chandrasekhar mass limit]]), while at lower masses/pressures a combination of Coulomb-lattice and partial-degeneracy physics governs the equation of state.

**Non-monotonic mass-radius relation for hydrogen-helium planets**: unlike rocky planets (where $R$ increases monotonically, then eventually decreases, with $M$ as gravity progressively compresses matter — see [[Exoplanet Interior Equations of State and Mass-Radius]]), gas-giant radii are nearly **mass-independent** over a wide range because increasing electron degeneracy pressure compensates almost exactly for increasing self-gravity:
$$R_p \approx \mathrm{const} \quad (\text{for } M_p \sim 0.3\text{--}3\,M_{\rm Jup}, \text{ cold hydrogen-helium})$$
with $R_p$ actually *decreasing* with mass above $\sim3\,M_{\rm Jup}$ as degeneracy pressure begins to dominate self-gravity's compressive effect — the giant-planet analogue of the white-dwarf $R\propto M^{-1/3}$ scaling.

**Insolation-driven radius inflation**: for close-in, highly irradiated hot Jupiters, absorbed stellar flux heats the outer radiative atmosphere, slowing interior cooling/contraction and inflating the observed radius above the value predicted for an equivalent-mass, unirradiated (cold) planet:
$$R_p(\mathrm{irradiated}) > R_p(\mathrm{isolated}) \quad \text{at fixed } M_p$$
this radius inflation is a strong function of incident flux $F_*\propto L_*/a^2$, requiring the joint mass-radius-insolation grids computed in this paper (rather than a mass-radius relation alone) to correctly interpret hot-Jupiter bulk compositions.

**Asymptotic checks**: as $M_p\to0$ (terrestrial/rocky regime), $R_p\propto M_p^{1/3}$-ish scaling from incompressible-matter geometry dominates, with degeneracy pressure irrelevant; as $M_p\to$ very large (deep brown-dwarf/low-mass-star regime), electron degeneracy pressure fully dominates and $R_p$ decreases with increasing $M_p$, smoothly connecting the giant-planet mass-radius relation to the white-dwarf-like degenerate mass-radius relation at much higher mass.

---

## Observational Data & Methodology
- **Target / Sample**: theoretical grid of models; validated against the (at the time, small) sample of transiting hot Jupiters with precisely measured mass and radius from ground-based transit photometry and radial velocity.
- **Instrument Setup**: N/A — 1D interior structure modeling.
- **Reduction & Detrending Pipeline**: N/A (theoretical); the resulting mass-radius-insolation grids are used as a lookup reference when interpreting newly discovered transiting planets' bulk composition.

---

## Critical Findings & Scientific Impact
1. Provided the first comprehensive, publicly usable mass-radius-insolation model grid spanning the full observed exoplanet mass range, immediately adopted as the standard interpretive framework for transiting-planet bulk composition.
2. Quantitatively demonstrated the near-degeneracy of gas-giant radius with mass, explaining why radius alone weakly constrains gas-giant mass without an independent (radial-velocity or transit-timing) mass measurement.
3. Open problem identified and still unresolved in detail: the physical mechanism responsible for hot-Jupiter radius inflation (enhanced atmospheric opacity, ohmic heating from atmospheric winds interacting with the planetary magnetic field, or mechanical/tidal heating) remains debated, since the simple insolation-driven cooling-delay model in this paper does not fully explain the most extremely inflated hot Jupiters.

---

## Vault Cross-References
- Core Theory: [[Exoplanet Interior Equations of State and Mass-Radius]], [[Stellar structure equations]], [[Chandrasekhar mass limit]]
- Related: [[Rustamkulov_2023_WASP-39b_JWST_CO2_Detection]]
- Map of Content: [[Exoplanetary_Astrophysics_MOC]]
