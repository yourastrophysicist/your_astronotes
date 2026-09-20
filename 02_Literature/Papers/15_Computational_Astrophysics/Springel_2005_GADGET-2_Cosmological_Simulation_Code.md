---
layout: "default"
title: "Springel (2005) — The Cosmological Simulation Code GADGET-2"
---
## Metadata
- **Authors**: Volker Springel
- **Year**: 2005
- **arXiv ID**: [arXiv:astro-ph/0505010](https://arxiv.org/abs/astro-ph/0505010)
- **ADS Bibcode**: `2005MNRAS.364.1105S`
- **Journal**: *MNRAS*, 364, 1105
- **Sub-field**: astro-ph.IM
- **Key Observatory / Code**: GADGET-2 (Tree-PM + SPH cosmological simulation code)

---

## Executive Summary
Springel presents GADGET-2, a massively parallel cosmological simulation code combining a hybrid Tree-Particle-Mesh (Tree-PM) gravity solver with Smoothed Particle Hydrodynamics (SPH) for baryonic gas dynamics. The code's combination of computational efficiency, energy and entropy conservation properties, and public availability made it the most widely used cosmological simulation code of the following decade, underlying landmark simulations including the Millennium Simulation and countless galaxy-formation studies.

---

## Key Equations & Theoretical Framework
**Fundamental postulate**: cosmological structure formation is modeled as an $N$-body plus hydrodynamics problem — collisionless dark matter (and stars) evolve under mutual gravity alone, while gas is modeled as a Lagrangian fluid via SPH, with gravity computed to high accuracy across the enormous dynamic range of scales (sub-kpc galaxy interiors to hundreds-of-Mpc cosmological box sizes) using a hybrid method that plays to the strengths of two complementary techniques.

**Tree-PM gravity solver**: long-range gravitational forces are computed efficiently on a mesh via a Particle-Mesh (PM) Fourier method (solving Poisson's equation $\nabla^2\Phi=4\pi G\rho$ via FFT, $\mathcal{O}(N\log N)$ cost), while short-range forces (below a specified splitting scale) are computed via a hierarchical oct-tree (Barnes-Hut) algorithm that groups distant particles into multipole expansions:
$$\Phi(\vec{x}) = \Phi_{\rm PM}(\vec{x}) + \Phi_{\rm tree,short-range}(\vec{x})$$
combining the PM method's efficiency at long range with the tree method's ability to resolve strongly clustered, small-scale structure that would alias on a finite mesh — the "Tree-PM" hybrid, now the standard approach across essentially all modern cosmological gravity solvers.

**SPH gas dynamics**: fluid quantities are estimated at each particle's location by kernel-weighted summation over neighboring particles,
$$\rho_i = \sum_j m_j\,W(|\vec{r}_i-\vec{r}_j|,h_i)$$
where $W$ is a smoothing kernel of scale $h_i$ (adaptively set so each particle has a fixed effective number of neighbors), and the SPH equations of motion follow from a variational (Lagrangian) derivation ensuring simultaneous energy and entropy conservation:
$$\frac{d\vec{v}_i}{dt} = -\sum_j m_j\left(\frac{P_i}{\rho_i^2}+\frac{P_j}{\rho_j^2}+\Pi_{ij}\right)\nabla_iW_{ij}$$
where $\Pi_{ij}$ is an artificial-viscosity term needed to correctly capture shocks (which SPH, as a smooth interpolation scheme, cannot resolve as true discontinuities without added dissipation).

**Adaptive timestepping and domain decomposition**: individual particles are advanced on their own adaptive timesteps (set by local dynamical/Courant conditions) rather than a single global timestep, combined with a space-filling-curve domain decomposition for parallel load balancing across many compute nodes — together enabling the code to efficiently span the enormous dynamic range in density and timescale characteristic of cosmological structure formation (from smooth cosmic-web filaments to dense galactic nuclei).

**Asymptotic checks**: in the collisionless-dark-matter-only limit (switching off SPH gas physics entirely), GADGET-2 reduces to a pure Tree-PM $N$-body code, directly comparable to dedicated dark-matter-only codes; in the smooth, low-Mach-number flow limit, the SPH artificial viscosity term's contribution vanishes, recovering standard inviscid Euler-equation behavior, while in strong shocks the artificial viscosity activates to correctly dissipate kinetic energy into heat, satisfying the Rankine-Hugoniot jump conditions (see [[Rankine-Hugoniot shock jump conditions]]) in a smoothed, numerically resolved sense.

---

## Observational Data & Methodology
- **Target / Sample**: N/A — simulation code paper; enabled landmark simulations including the Millennium Simulation (dark-matter-only, $10^{10}$ particles) and numerous subsequent galaxy-formation and cluster simulations.
- **Instrument Setup**: N/A.
- **Reduction & Detrending Pipeline**: N/A (computational tool); simulation outputs are post-processed with halo-finding, merger-tree-construction, and mock-observable-generation pipelines throughout computational cosmology.

---

## Critical Findings & Scientific Impact
1. Established the Tree-PM + SPH hybrid architecture as the field-standard approach to cosmological simulation for over a decade, directly enabling the Millennium Simulation and its enormous downstream scientific impact on galaxy-formation and dark-matter-structure studies.
2. Public code release and clear documentation made GADGET-2 broadly accessible beyond its originating group, substantially democratizing access to state-of-the-art cosmological simulation capability.
3. Open problem acknowledged even at release: classical SPH suffers from suppressed mixing at contact discontinuities and fluid instabilities (a numerical artifact of the smoothing kernel), motivating the subsequent development of the moving-mesh AREPO code (see [[Springel_2010_AREPO_Moving_Mesh_Code]]) and modern SPH variants with improved mixing treatments.

---

## Vault Cross-References
- Core Theory: [[Rankine-Hugoniot shock jump conditions]]
- Related: [[Springel_2010_AREPO_Moving_Mesh_Code]], [[Pillepich_2018_IllustrisTNG_Simulations]]
- Map of Content: [[Computational_Astrophysics_MOC]], [[Mathematical_Numerical_Methods_MOC]]
