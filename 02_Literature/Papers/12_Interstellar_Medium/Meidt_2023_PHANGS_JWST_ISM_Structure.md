---
layout: "default"
title: "Meidt et al. (2023) — PHANGS-JWST First Results: ISM Structure on the Turbulent Jeans Scale"
---
## Metadata
- **Authors**: Sharon E. Meidt et al. (PHANGS-JWST collaboration)
- **Year**: 2023
- **arXiv ID**: [arXiv:2212.06434](https://arxiv.org/abs/2212.06434)
- **ADS Bibcode**: `2023ApJ...944L..18M`
- **Journal**: *ApJL*, 944, L18
- **Sub-field**: astro-ph.GA
- **Key Observatory / Code**: JWST MIRI + ALMA (PHANGS-JWST Treasury Survey)

**Provenance note**: the original enrichment brief cited "Pineda et al. (2023), ApJL, arXiv:2301.03636" for JWST-resolved ISM fine structure and star-forming feedback across nearby galaxies. That arXiv ID resolves to an unrelated computer-science preprint, and no matching "Pineda et al. 2023" PHANGS-JWST paper could be located. This note instead covers Meidt et al. (2023), the verified PHANGS-JWST "First Results" paper matching the described topic (multi-scale ISM structure, feedback-driven bubbles/filaments, resolved with JWST and ALMA).

---

## Executive Summary
Using JWST MIRI mid-infrared imaging combined with ALMA CO(2-1) mapping of four nearby disk galaxies (IC 5332, NGC 628, NGC 1365, NGC 7496) from the PHANGS-JWST Treasury Survey, Meidt et al. resolve a rich, quasi-regular network of interconnected filaments, shells, and voids in the cold/cool interstellar medium at physical scales approaching the turbulent Jeans length — for the first time directly imaging the characteristic fragmentation scale predicted by turbulence-regulated star-formation theory (see [[Larson_1981_Turbulence_Star_Formation_Molecular_Clouds]]) across entire galactic disks rather than in individual local molecular clouds.

---

## Key Equations & Theoretical Framework
**Fundamental postulate**: in a turbulent, self-gravitating, magnetized galactic disk, the characteristic scale at which local gravitational instability can overcome turbulent support and fragment the gas into bound clouds/clumps is set by the turbulent (rather than purely thermal) Jeans length, evaluated using the locally measured turbulent velocity dispersion in place of the thermal sound speed (see [[Larson_1981_Turbulence_Star_Formation_Molecular_Clouds]] for the general turbulent-Jeans-mass formalism):
$$\lambda_J^{\rm turb} = \frac{\pi\sigma_{\rm turb}^2}{G\Sigma_{\rm gas}}$$
where $\sigma_{\rm turb}$ is the local turbulent velocity dispersion (from CO linewidth) and $\Sigma_{\rm gas}$ the local gas surface density (from CO integrated intensity via a standard CO-to-H$_2$ conversion factor).

**Toomre-type disk stability parameter**, the 2D-disk generalization used to assess where in the galaxy gravitational fragmentation is expected to be efficient:
$$Q = \frac{\sigma_{\rm turb}\,\kappa_{\rm epi}}{\pi G\Sigma_{\rm gas}}$$
where $\kappa_{\rm epi}$ is the local epicyclic frequency set by the galactic rotation curve — regions with $Q\lesssim1$ are gravitationally unstable and expected to fragment on the turbulent Jeans scale, while $Q\gtrsim1$ regions are turbulence-stabilized against large-scale gravitational collapse.

**Filament/shell network characterization**: the observed ISM morphology (filaments, shells, and voids visible in the MIRI 7.7/11.3 $\mu$m PAH-tracing bands, see [[Draine_Li_2007_Infrared_Emission_Dust_PAH]]) is quantitatively compared against the turbulent Jeans scale $\lambda_J^{\rm turb}$ computed locally from the ALMA-measured $\sigma_{\rm turb}$ and $\Sigma_{\rm gas}$, testing whether the characteristic separation between resolved structures matches the theoretical fragmentation scale as a function of galactocentric radius and local disk dynamical state.

**Asymptotic checks**: in regions of high $Q$ (turbulence-dominated, e.g. inter-arm regions or galaxy outskirts), the predicted turbulent Jeans scale is large and the ISM should appear comparatively smooth/diffuse on small scales; in low-$Q$ regions (e.g. spiral arms, circumnuclear rings), the turbulent Jeans scale shrinks and a finer network of filaments/shells is predicted and observed — providing a quantitative, resolved test of turbulence-regulated fragmentation theory across a full range of galactic dynamical environments within a single set of galaxies.

---

## Observational Data & Methodology
- **Target / Sample**: four nearby ($D\lesssim20$ Mpc) star-forming disk galaxies: IC 5332, NGC 628, NGC 1365, NGC 7496.
- **Instrument Setup**: JWST MIRI imaging (7.7, 11.3, 21 $\mu$m bands, tracing PAH emission and warm dust) at $\sim0.1''$–$0.7''$ resolution, combined with ALMA CO(2-1) mapping at matched physical resolution ($\sim1$–$10$ pc).
- **Reduction & Detrending Pipeline**: multi-scale structural decomposition of the MIRI imaging (filament/shell/void identification), cross-matched with the ALMA-derived turbulent Jeans scale map computed pixel-by-pixel from the CO data.

---

## Critical Findings & Scientific Impact
1. First direct, spatially resolved confirmation across entire galactic disks that observed ISM fragmentation structure scales consistently with the turbulent Jeans length predicted from independently measured local gas surface density and turbulent velocity dispersion.
2. Demonstrates JWST's transformative resolution advantage (over Spitzer-era mid-IR imaging) for resolving individual ISM structures at the relevant physical (few-to-tens-of-parsec) scales in external galaxies, rather than only in the Milky Way.
3. Open problem: disentangling the relative roles of self-gravity, stellar feedback (which itself carves shells and bubbles that can mimic or interact with gravitationally-driven fragmentation structure), and large-scale galactic dynamics (spiral shocks, bar-driven flows) in setting the observed network morphology requires further multi-wavelength and kinematic follow-up beyond this first-results paper.

---

## Vault Cross-References
- Core Theory: [[Molecular clouds]], [[Larson_1981_Turbulence_Star_Formation_Molecular_Clouds]], [[Photodissociation regions PDRs]]
- Related: [[Draine_Li_2007_Infrared_Emission_Dust_PAH]]
- Map of Content: [[Astrophysics_of_the_Interstellar_Medium_MOC]]
