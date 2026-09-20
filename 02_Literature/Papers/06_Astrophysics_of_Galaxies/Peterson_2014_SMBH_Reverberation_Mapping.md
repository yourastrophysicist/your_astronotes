---
layout: "default"
title: "Peterson (2014) — Measuring the Masses of Supermassive Black Holes"
---
## Metadata
- **Authors**: Bradley M. Peterson
- **Year**: 2014
- **arXiv ID**: none found (published as a Space Science Reviews book chapter; no arXiv preprint located)
- **ADS Bibcode**: `2014SSRv..183..253P`
- **Journal**: *Space Science Reviews*, 183, 253 (DOI: 10.1007/s11214-013-9987-4)
- **Sub-field**: astro-ph.GA / astro-ph.HE

**Provenance note**: the original enrichment brief cited arXiv:1301.0441 for this paper; that identifier resolves to a different, unrelated paper. No arXiv preprint for Peterson (2014) could be located by search — citation here uses the ADS bibcode/DOI only, as with [[Guyon_2018_Extreme_Adaptive_Optics]].

---

## Executive Summary
Peterson reviews the reverberation-mapping technique for measuring supermassive black-hole masses in active galactic nuclei via the light-travel-time response of broad-line-region (BLR) emission to continuum variability. By cross-correlating continuum and emission-line light curves, one measures the BLR's characteristic size, which combined with the line-of-sight velocity width yields a virial mass estimate — the primary technique for measuring $M_\bullet$ in AGN too distant for the BLR to be spatially resolved by direct imaging or interferometry.

---

## Key Equations & Theoretical Framework
**Fundamental postulate**: BLR gas clouds respond to continuum-ionizing photon variations with a time delay set by the light-travel time across the BLR, and orbit the black hole with velocities set by the local Keplerian (virial) potential.

**Cross-correlation lag measurement**: the interpolated cross-correlation function (ICCF) between the continuum light curve $C(t)$ and emission-line light curve $L(t)$,
$$\mathrm{CCF}(\tau) = \frac{\int C(t)\,L(t+\tau)\,dt}{\left[\int C^2(t)\,dt \int L^2(t)\,dt\right]^{1/2}}$$
peaks at the lag $\tau_{\mathrm{cent}}$ (typically the centroid of the CCF peak above some threshold, e.g. $0.8\,\mathrm{CCF}_{\max}$), giving the **emissivity-weighted BLR radius**:
$$R_{\mathrm{BLR}} = c\,\tau_{\mathrm{cent}}$$

**Virial black-hole mass**:
$$M_\bullet = f\,\frac{c\,\tau_{\mathrm{cent}}\,\sigma_{\mathrm{line}}^2}{G}$$
where:
- $\tau_{\mathrm{cent}}$ is the measured continuum-to-line reverberation lag
- $\sigma_{\mathrm{line}}$ is the velocity dispersion of the variable (rms) broad-line profile, measured from the line width in the rms spectrum (removing the constant, non-varying narrow-line and host-galaxy contributions)
- $f$ is a dimensionless virial factor of order unity, encoding the unknown BLR geometry, inclination, and kinematics (in-fall, outflow, or Keplerian orbit), calibrated empirically by requiring AGN reverberation masses to lie on the same $M_\bullet$–$\sigma_*$ relation as quiescent, dynamically measured galaxies (see [[Kormendy_Ho_2013_SMBH_Host_Galaxy_Coevolution]])

**Radius-luminosity relation**: because $R_{\mathrm{BLR}}$ scales with the ionizing continuum's photoionization equilibrium radius, reverberation-mapped AGN reveal an empirical relation
$$R_{\mathrm{BLR}} \propto L^{0.5}$$
(approximately, for the H$\beta$-emitting BLR against optical/UV continuum luminosity $L$), which — once calibrated on a reverberation-mapped subsample — enables the **single-epoch virial mass estimator** used for the vast majority of AGN (including all high-redshift black-hole mass estimates, since direct reverberation monitoring is impractical at cosmological distances):
$$M_\bullet \approx f\,\frac{R_{\mathrm{BLR}}(L)\,\mathrm{FWHM}^2}{G}, \qquad R_{\mathrm{BLR}}(L)\ \text{from the calibrated }R\text{–}L\text{ relation}$$

**Asymptotic checks**: as the BLR geometry approaches a thin, face-on Keplerian disk viewed close to pole-on, $\sigma_{\mathrm{line}}$ underestimates the true orbital velocity and $f$ must be correspondingly larger to recover the correct $M_\bullet$; conversely, for an edge-on, isotropically randomized cloud distribution, $f\to$ its canonical order-unity calibrated value — the persistent object-to-object scatter in $f$ (rather than a single universal value) is the dominant systematic uncertainty in reverberation-based black-hole masses.

---

## Observational Data & Methodology
- **Target / Sample**: dozens of nearby, moderate-luminosity Seyfert 1 and quasar AGN with long-term (months-to-years) photometric and spectroscopic monitoring campaigns (e.g. AGN STORM, the Lick AGN Monitoring Project).
- **Instrument Setup**: ground-based spectrophotometric monitoring of the continuum and H$\beta$ (or other broad permitted line) flux, at cadence shorter than the expected light-travel-time lag (days to weeks for typical Seyfert BLR sizes).
- **Reduction & Detrending Pipeline**: cross-correlation function analysis (ICCF, and complementary methods such as JAVELIN) applied to the continuum and line light curves, with Monte Carlo (flux randomization / random subset selection) uncertainty estimation on $\tau_{\mathrm{cent}}$.

---

## Critical Findings & Scientific Impact
1. Establishes reverberation mapping as the primary calibration route for the single-epoch virial mass estimator used throughout AGN and quasar black-hole demographics studies, including at high redshift (see [[Maiolino_2024_JADES_Broad_Line_AGN_High_Redshift]]).
2. Cross-calibration of reverberation masses against the quiescent-galaxy $M_\bullet$–$\sigma$ relation (see [[Kormendy_Ho_2013_SMBH_Host_Galaxy_Coevolution]]) fixes the average virial factor $f$, linking AGN and quiescent black-hole mass scales onto a common footing.
3. Open problem: the object-to-object scatter in the true (unknown) BLR geometry means individual reverberation-based (and, more severely, single-epoch) black-hole masses carry systematic uncertainties of a factor of $\sim2$–$3$, substantially larger than the formal statistical uncertainty on $\tau_{\mathrm{cent}}$ and $\sigma_{\mathrm{line}}$ alone.

---

## Vault Cross-References
- Core Theory: [[SMBH Reverberation Mapping]], [[Kormendy_Ho_2013_SMBH_Host_Galaxy_Coevolution]]
- Related: [[Relativistic Iron Line Profiles]], [[AGN and supermassive black holes]]
- Map of Content: [[Astrophysics_of_Galaxies_MOC]], [[Lab_High-Energy_MOC]]
