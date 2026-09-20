---
layout: "default"
title: "Bardeen, Press & Teukolsky (1972) — Rotating Black Holes: Locally Nonrotating Frames and Energy Extraction"
---
## Metadata
- **Authors**: James M. Bardeen, William H. Press, Saul A. Teukolsky
- **Year**: 1972
- **arXiv ID**: none (pre-arXiv era)
- **ADS Bibcode**: `1972ApJ...178..347B`
- **Journal**: *ApJ*, 178, 347
- **Sub-field**: gr-qc / astro-ph.HE
- **Key Observatory / Code**: analytic Kerr-metric geodesic and frame-dragging analysis

---

## Executive Summary
This foundational paper develops the observational and dynamical framework for understanding astrophysical processes around rotating (Kerr) black holes, introducing the concept of the **locally nonrotating frame** (LNRF, or "zero-angular-momentum observer," ZAMO) — the physically natural local reference frame for observers who, despite being dragged around by the black hole's rotation, carry zero angular momentum and see the local spacetime geometry in its simplest form. The paper derives the innermost stable circular orbit (ISCO) as a function of black-hole spin, computes the maximum efficiency of energy extraction from matter accreting onto a maximally spinning Kerr black hole, and lays out the geodesic structure underlying the ergosphere and the Penrose process.

---

## Key Equations & Theoretical Framework
**Fundamental postulate**: the Kerr metric describes the unique, stationary, axisymmetric vacuum solution of the Einstein field equations for a rotating black hole of mass $M$ and spin parameter $a=J/Mc$; frame-dragging (the Lense-Thirring effect, here in its fully non-linear, strong-field form) forces any local observer, however constructed, to acquire non-zero angular velocity relative to infinity.

**Locally nonrotating frame angular velocity**: the angular velocity (relative to a distant static observer) that a ZAMO must have purely due to frame-dragging, obtained by setting the observer's angular momentum $L=0$ in the Kerr geodesic equations:
$$\Omega_{\rm ZAMO}(r,\theta) = -\frac{g_{t\phi}}{g_{\phi\phi}} = \frac{2Mar}{(r^2+a^2)^2 - a^2\Delta\sin^2\theta}$$
(in geometrized units $G=c=1$), where $\Delta = r^2-2Mr+a^2$ — at the horizon, $\Omega_{\rm ZAMO}\to\Omega_H = \frac{a}{r_+^2+a^2}$ (see [[Blandford_Znajek_1977_Electromagnetic_Extraction_Kerr_BH]]), showing every local frame at the horizon is forced to corotate with the black hole exactly at its own angular velocity — the geometric origin of the Blandford-Znajek jet-powering mechanism.

**Innermost stable circular orbit (ISCO)**, obtained from the effective potential for equatorial timelike geodesics, requiring simultaneously $V_{\rm eff}=E$, $V_{\rm eff}'=0$, and $V_{\rm eff}''=0$ (marginal stability):
$$\boxed{\, r_{\rm ISCO} = M\left\{3+Z_2 \mp \left[(3-Z_1)(3+Z_1+2Z_2)\right]^{1/2}\right\} \,}$$
$$Z_1 = 1+(1-a_*^2)^{1/3}\left[(1+a_*)^{1/3}+(1-a_*)^{1/3}\right], \qquad Z_2 = \left(3a_*^2+Z_1^2\right)^{1/2}$$
where $a_*=a/M$ is the dimensionless spin parameter, and the $\mp$ sign corresponds to prograde/retrograde orbits respectively.

**Accretion efficiency**, defined as the fraction of accreted rest-mass energy radiated away before the matter crosses the horizon, equal to $1$ minus the specific binding energy at the ISCO:
$$\eta = 1 - E_{\rm ISCO}/mc^2$$
which evaluates to $\eta\approx0.057$ for a non-spinning (Schwarzschild, $a_*=0$) black hole and rises to $\eta\approx0.42$ for a maximally spinning, prograde-accreting ($a_*=1$) Kerr black hole — an enormous efficiency compared to nuclear fusion ($\eta\sim0.007$ for hydrogen burning), explaining why accretion onto compact objects is the most efficient known astrophysical energy-release mechanism.

**Asymptotic checks**: as $a_*\to0$ (Schwarzschild limit), $r_{\rm ISCO}\to6M$ and $\eta\to1-\sqrt{8/9}\approx0.057$, recovering the well-known Schwarzschild result; as $a_*\to1$ (extremal, prograde), $r_{\rm ISCO}\to M$ (coincident with the horizon in these coordinates) and $\eta\to1-1/\sqrt3\approx0.42$ — the theoretical maximum efficiency for standard disk accretion, setting an upper bound tested against observationally inferred radiative efficiencies of AGN and X-ray binaries.

---

## Observational Data & Methodology
- **Target / Sample**: theoretical/analytic framework; the derived ISCO-spin relation is now used observationally to infer black-hole spin from the innermost detectable disk radius, via relativistic iron-line fitting (see [[Fabian_2009_Broad_Iron_Line_Reverberation_1H0707-495]]) and continuum-fitting spectral methods in X-ray binaries.
- **Instrument Setup**: N/A (analytic GR).
- **Reduction & Detrending Pipeline**: N/A; the ISCO formula is a direct input to modern spectral-fitting codes (`kerrbb`, `relxill`) used to measure black-hole spin from X-ray data.

---

## Critical Findings & Scientific Impact
1. Established the locally nonrotating frame as the standard, physically motivated coordinate/observer choice for analyzing physical processes (accretion, jet formation, particle orbits) in the immediate vicinity of a spinning black hole.
2. The ISCO-spin relation derived here remains the essential ingredient connecting Kerr black hole spin to the observationally accessible inner-disk radius and accretion efficiency.
3. Open problem at the time (subsequently resolved theoretically but still an active observational frontier): translating the theoretical maximum accretion efficiency into robust individual-source spin measurements requires disentangling spin from other parameters (inclination, mass, distance) in real, imperfectly-known accreting systems — the central challenge of modern black-hole spin measurement programs.

---

## Vault Cross-References
- Core Theory: [[Innermost Stable Circular Orbit ISCO]], [[Kerr Metric Horizon and Ergosphere Geometry]]
- Related: [[Blandford_Znajek_1977_Electromagnetic_Extraction_Kerr_BH]], [[Fabian_2009_Broad_Iron_Line_Reverberation_1H0707-495]]
- Map of Content: [[General_Relativity_MOC]], [[Lab_High-Energy_MOC]]
