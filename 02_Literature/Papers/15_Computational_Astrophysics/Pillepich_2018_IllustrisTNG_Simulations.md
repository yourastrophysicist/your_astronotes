---
layout: "default"
title: "Pillepich et al. (2018) — First Results from the IllustrisTNG Simulations: Stellar Mass Content of Groups and Clusters"
---
## Metadata
- **Authors**: Annalisa Pillepich, Dylan Nelson, Lars Hernquist, Volker Springel, Rüdiger Pakmor, Paul Torrey, Rainer Weinberger, Shy Genel, Jill P. Naiman, Federico Marinacci, Mark Vogelsberger
- **Year**: 2018 (arXiv preprint 2017)
- **arXiv ID**: [arXiv:1707.03395](https://arxiv.org/abs/1707.03395)
- **ADS Bibcode**: `2018MNRAS.475..648P`
- **Journal**: *MNRAS*, 475, 648
- **Sub-field**: astro-ph.GA / astro-ph.CO
- **Key Observatory / Code**: IllustrisTNG (AREPO-based magnetohydrodynamical cosmological simulation suite)

---

## Executive Summary
This paper presents the first galaxy-formation results from IllustrisTNG, a suite of large-volume, high-resolution cosmological magnetohydrodynamical simulations run with the moving-mesh AREPO code (see [[Springel_2010_AREPO_Moving_Mesh_Code]]) and an updated galaxy-formation physics model incorporating star formation, stellar and AGN feedback, and — new relative to the original Illustris project — magnetic fields evolved self-consistently via ideal MHD. Focusing on the stellar-to-halo mass relation for galaxy groups and clusters, the simulations successfully reproduce the observed relationship between a cluster's total stellar mass and its dark-matter halo mass across two decades in halo mass, a key test of whether the feedback physics correctly regulates star formation efficiency as a function of halo mass.

---

## Key Equations & Theoretical Framework
**Fundamental postulate**: galaxy formation is modeled as coupled gravity + ideal MHD + a set of physically motivated but numerically necessary "sub-grid" prescriptions for processes occurring below the simulation's resolution limit (star formation, stellar feedback, black-hole growth and AGN feedback, magnetic field seeding), calibrated to reproduce a small set of key observed galaxy-population statistics without being separately re-tuned for every subsequent prediction.

**Star formation and feedback energy budget**: gas above a density threshold $\rho_{\rm SF}$ forms stars at a rate set by a Kennicutt-Schmidt-like prescription,
$$\dot\rho_* = \epsilon_*\frac{\rho_{\rm gas}}{t_{\rm dyn}}$$
with a fraction of the resulting stellar feedback energy/momentum (supernova-driven galactic winds) returned to the surrounding gas, self-regulating the star-formation efficiency in a way calibrated to reproduce the observed stellar-mass function of galaxies.

**AGN feedback in two modes**, following the black-hole accretion rate $\dot M_\bullet$ relative to the Eddington rate $\dot M_{\rm Edd}$ (see [[Eddington Luminosity]]):
$$\text{thermal (`quasar') mode: } \dot M_\bullet/\dot M_{\rm Edd} > \chi \quad\Longrightarrow\quad \text{isotropic thermal energy injection}$$
$$\text{kinetic (`radio') mode: } \dot M_\bullet/\dot M_{\rm Edd} < \chi \quad\Longrightarrow\quad \text{directed kinetic-energy-dominated outflow}$$
where the kinetic-mode feedback (dominant at low accretion rates, i.e. in massive, quenched galaxies at late cosmic times) was a key new ingredient relative to the original Illustris simulation, found necessary to correctly quench star formation in the most massive halos and reproduce the observed red-sequence galaxy population.

**Stellar-to-halo-mass relation**, the primary observable tested in this paper:
$$M_{\rm star}(M_{\rm halo}) \quad\text{compared against abundance-matching and weak-lensing-calibrated observational constraints}$$
with the simulation's success or failure to match the observed relation's shape and normalization across the group/cluster mass range serving as a direct test of whether the combined stellar and AGN feedback prescriptions correctly suppress star formation in increasingly massive halos (where, absent feedback, gas cooling would otherwise convert a much larger fraction of the available baryons into stars than observed).

**Asymptotic checks**: in the low-halo-mass limit (dwarf galaxies), stellar feedback dominates the regulation of star-formation efficiency, and the simulations' match to observed dwarf stellar masses tests the stellar-feedback prescription in isolation; in the high-halo-mass limit (groups and clusters), AGN feedback becomes the dominant regulator, and the successful reproduction of the observed downturn in stellar-to-halo mass ratio at the highest masses is the paper's central positive result, directly attributable to the new kinetic-mode AGN feedback implementation.

---

## Observational Data & Methodology
- **Target / Sample**: the IllustrisTNG100 and TNG300 simulation volumes (100 and 300 comoving Mpc per side respectively), producing statistically representative samples of galaxy groups and clusters.
- **Instrument Setup**: N/A — cosmological MHD simulation; results compared against observational stellar-mass-halo-mass constraints from weak lensing and satellite/abundance-matching studies.
- **Reduction & Detrending Pipeline**: halo-finding (friends-of-friends plus SUBFIND substructure identification) and stellar-mass measurement within a fixed physical aperture, matched to the methodology of the observational comparison samples.

---

## Critical Findings & Scientific Impact
1. Demonstrates that the updated kinetic-mode AGN feedback successfully reproduces the observed suppression of star formation in massive halos, resolving a key shortcoming of the original Illustris simulation.
2. Establishes IllustrisTNG as one of the most widely used public cosmological simulation datasets for testing galaxy-formation theory against a broad range of observables (colors, morphologies, clustering, magnetic fields).
3. Open problem: the sub-grid feedback prescriptions, while calibrated to reproduce specific target observables, are not derived ab initio from resolved small-scale physics, so their predictive power for observables not used in calibration (and their extrapolation to different simulation resolutions) remains an area of active scrutiny and resolution-convergence testing.

---

## Vault Cross-References
- Core Theory: [[Eddington Luminosity]], [[Accretion onto compact objects]]
- Related: [[Springel_2010_AREPO_Moving_Mesh_Code]], [[Schechter_1976_Galaxy_Luminosity_Function]]
- Map of Content: [[Computational_Astrophysics_MOC]], [[Astrophysics_of_Galaxies_MOC]]
