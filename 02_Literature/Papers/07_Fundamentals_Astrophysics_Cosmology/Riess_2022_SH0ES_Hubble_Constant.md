---
layout: "default"
title: "Riess et al. (2022) — A Comprehensive Measurement of the Local Value of the Hubble Constant with the SH0ES Team"
---
## Metadata
- **Authors**: Adam G. Riess, Wenlong Yuan, Lucas M. Macri, et al. (SH0ES collaboration)
- **Year**: 2022
- **arXiv ID**: [arXiv:2112.04510](https://arxiv.org/abs/2112.04510)
- **ADS Bibcode**: `2022ApJL..934L...7R`
- **Journal**: *ApJL*, 934, L7
- **Sub-field**: astro-ph.CO
- **Key Observatory / Code**: Hubble Space Telescope (Cepheid + Type Ia supernova distance ladder)

---

## Executive Summary
The SH0ES team presents a local (distance-ladder) measurement of the Hubble constant with $1\,\mathrm{km\,s^{-1}\,Mpc^{-1}}$ total uncertainty, $H_0 = 73.04\pm1.04\,\mathrm{km\,s^{-1}\,Mpc^{-1}}$, obtained from HST photometry of Cepheid variables in the hosts of Type Ia supernovae, calibrated geometrically via parallax, detached eclipsing binaries in the LMC, and masers in NGC 4258. This value stands in $5\sigma$ tension with the CMB-inferred (Planck) value of $H_0=67.4\pm0.5\,\mathrm{km\,s^{-1}\,Mpc^{-1}}$, a discrepancy large enough, and now measured with small enough combined uncertainty on both sides, to have moved from "an interesting anomaly" to what the cosmology community treats as a robust tension demanding either new physics or an as-yet-unidentified systematic.

---

## Key Equations & Theoretical Framework
**Fundamental postulate**: the extragalactic distance ladder anchors absolute distances at each rung using overlapping calibrator samples, propagating a geometric distance scale (established model-independently in the local universe) out to the Hubble flow, where the recession velocity-distance relation directly gives $H_0$.

**Three-rung distance ladder**:
1. **Geometric anchors** — *Gaia* parallaxes of Milky Way Cepheids, detached eclipsing binary distances to the LMC, and the geometric maser distance to NGC 4258 — fix the absolute Cepheid period-luminosity zero point without relying on any standard candle further up the ladder.
2. **Cepheid period-luminosity relation**, calibrated by the anchors and applied to Cepheids in the host galaxies of Type Ia supernovae:
$$M_V = -2.43\left[\log_{10}P - 1\right] - 4.05 \quad\text{(illustrative Leavitt-law form; slope/zero-point refit per band and metallicity)}$$
3. **Type Ia supernova standardization**, using the Cepheid-calibrated host distances to fix the SN Ia absolute peak magnitude $M_B$, then applying that calibration to the much larger sample of SNe Ia in the smooth Hubble flow ($z\sim0.01$–$0.15$), where peculiar velocities are negligible:
$$\mu = m_B - M_B = 5\log_{10}\left(\frac{cz}{H_0}\right) + 25 \quad\text{(low-}z\text{ Hubble-law limit)}$$

**Combined distance-ladder $H_0$**: simultaneously fitting all three rungs in a single global maximum-likelihood framework (rather than sequentially fixing each rung's parameters before propagating to the next) minimizes correlated systematic propagation between rungs.

**Hubble tension significance**: with both the CMB-based and distance-ladder-based $H_0$ values now each known to $\lesssim1\%$ precision,
$$\frac{|H_0^{\mathrm{SH0ES}} - H_0^{\mathrm{Planck}}|}{\sqrt{\sigma_{\mathrm{SH0ES}}^2+\sigma_{\mathrm{Planck}}^2}} \approx 5\sigma$$
**Asymptotic checks**: if the two methods measured the same physical quantity under correct systematics and a correct cosmological model, this ratio should be $\lesssim1$–$2\sigma$ from pure statistical fluctuation; a persistent $5\sigma$ offset that does not shrink as both sides' uncertainties independently improve is the operational definition of a genuine "tension" rather than a statistical fluke — motivating either a late-universe systematic (unlikely, given the ladder's now-multiple, largely independent calibrator geometries) or new physics altering the sound horizon or expansion history between recombination and today (e.g. early dark energy).

---

## Observational Data & Methodology
- **Target / Sample**: Milky Way, LMC, and NGC 4258 geometric anchors; Cepheids in 42 SN Ia host galaxies; $\sim300$ SNe Ia in the smooth Hubble flow (Pantheon+ compilation).
- **Instrument Setup**: HST WFC3 near-IR photometry (minimizing dust-extinction systematics relative to earlier optical-only Cepheid photometry).
- **Reduction & Detrending Pipeline**: joint global fit of all distance-ladder rungs, with explicit propagation of Cepheid metallicity dependence, crowding/blending corrections, and SN Ia standardization (light-curve shape and color corrections) into the final $H_0$ uncertainty budget.

---

## Critical Findings & Scientific Impact
1. Reduces the total SH0ES $H_0$ uncertainty to $\sim1.4\%$, sharpening the Hubble tension with Planck to $5\sigma$ — a level that, under standard statistical convention, is treated as a discovery-level discrepancy rather than a fluctuation.
2. Cross-checks using an independent geometric anchor (the megamaser distance to NGC 4258) and independent photometric systems consistently return $H_0$ values clustered near $73\,\mathrm{km\,s^{-1}\,Mpc^{-1}}$, disfavoring a single simple systematic as the full explanation.
3. Open problem: no proposed resolution (early dark energy, modified gravity, non-standard neutrino sectors, or unidentified systematics on either side) yet fully reconciles both the CMB and local $H_0$ values while remaining consistent with all other cosmological data (BAO, weak lensing) — an active frontier, sharpened further by DESI BAO results (see [[DESI_2024_BAO_Cosmological_Constraints]]).

---

## Vault Cross-References
- Core Theory: [[Distance ladder derivations]], [[Friedmann equations with Lambda]]
- Related: [[Planck_Collaboration_2020_Cosmological_Parameters]]
- Map of Content: [[Fundamentals_Astrophysics_Cosmology_MOC]], [[Observational_Cosmology_MOC]]
