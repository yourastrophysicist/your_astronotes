---
layout: "default"
title: "Springel (2010) — E Pur Si Muove: Galilean-Invariant Cosmological Hydrodynamical Simulations on a Moving Mesh"
---
## Metadata
- **Authors**: Volker Springel
- **Year**: 2010
- **arXiv ID**: [arXiv:0901.4107](https://arxiv.org/abs/0901.4107)
- **ADS Bibcode**: `2010MNRAS.401..791S`
- **Journal**: *MNRAS*, 401, 791
- **Sub-field**: astro-ph.IM
- **Key Observatory / Code**: AREPO (moving-mesh finite-volume hydrodynamics code)

---

## Executive Summary
Springel introduces AREPO, a cosmological hydrodynamics code built on an unstructured, freely moving Voronoi tessellation that continuously reconnects as the mesh-generating points (which move with the local fluid velocity) drift — combining the Lagrangian adaptivity and Galilean invariance of particle-based (SPH) methods with the sharp shock-capturing and contact-discontinuity resolution of Eulerian finite-volume (grid-based/AMR) methods. This "moving-mesh" approach avoids both classical SPH's numerically suppressed fluid mixing and fixed-grid AMR's lack of Galilean invariance (a fixed grid, tied to a preferred reference frame, resolves flows differently depending on the bulk velocity relative to the grid — an unphysical artifact for problems with large bulk flows, such as galaxies moving through a cosmological box).

---

## Key Equations & Theoretical Framework
**Fundamental postulate**: the fluid domain is discretized by construction of a **Voronoi tessellation** around a set of mesh-generating points; each Voronoi cell is treated as a finite-volume control volume over which the Euler equations are integrated via a standard (Godunov-type, Riemann-solver-based) finite-volume scheme, but — unlike fixed-grid AMR — the mesh-generating points are advected with the local fluid velocity, so the mesh itself moves and deforms with the flow.

**Voronoi cell construction**: for a set of mesh-generating points $\{\vec{r}_i\}$, the Voronoi cell $\mathcal{V}_i$ associated with point $i$ is the region of space closer to $\vec{r}_i$ than to any other point:
$$\mathcal{V}_i = \left\{\vec{x} : |\vec{x}-\vec{r}_i| < |\vec{x}-\vec{r}_j|\ \forall j\ne i\right\}$$
recomputed at every timestep as the points move, using efficient incremental Delaunay-triangulation algorithms.

**Finite-volume update**, integrating the Euler equations in conservation-law form over each moving cell, with fluxes computed at each cell face via an exact or approximate (e.g. HLLC) Riemann solver evaluated in the frame comoving with that face's local velocity (set by the average velocity of the two mesh-generating points sharing it):
$$\frac{d}{dt}\int_{\mathcal{V}_i(t)}\vec{U}\,dV = -\oint_{\partial\mathcal{V}_i(t)}\vec{F}(\vec{U})\cdot\hat{n}\,dA$$
where $\vec{U}=(\rho,\rho\vec v,E)^T$ is the conserved-variable vector and $\vec{F}$ the corresponding flux — because the mesh faces themselves move with the flow, this formulation, unlike fixed-grid finite-volume methods, automatically satisfies Galilean invariance: the solution in a boosted reference frame is related to the unboosted solution by the same Galilean transformation applied to the mesh-generating points, exactly as required by the underlying physics.

**Hybrid Lagrangian-Eulerian character**: setting the mesh-generating point velocities exactly equal to the local fluid velocity (pure Lagrangian limit) recovers SPH-like adaptivity (resolution automatically follows density); setting them to zero recovers a standard fixed-grid Eulerian finite-volume scheme; AREPO's default configuration uses the former, but the framework allows a continuous interpolation between the two limits.

**Asymptotic checks**: for a uniform, unperturbed bulk flow (e.g. a cold, uniform stream with no internal structure) advected as a rigid whole, the moving mesh translates rigidly with the flow and the solution is trivially Galilean-invariant by construction — a case where fixed-grid AMR codes historically showed spurious numerical mixing/diffusion purely from the flow crossing grid-cell boundaries, a pure numerical artifact AREPO's moving mesh eliminates; in the opposite limit of a strongly converging flow (e.g. a collapsing cloud), the mesh automatically refines (Voronoi cells shrink) in the high-density region exactly as an adaptive SPH smoothing length would, retaining SPH's automatic resolution adaptivity while still capturing shocks and contact discontinuities with Eulerian finite-volume sharpness.

---

## Observational Data & Methodology
- **Target / Sample**: N/A — simulation code paper; validated on standard hydrodynamic test problems (Sod shock tube, Kelvin-Helmholtz instability, Sedov-Taylor blast wave) before application to cosmological structure formation.
- **Instrument Setup**: N/A.
- **Reduction & Detrending Pipeline**: N/A (computational tool); AREPO subsequently became the simulation engine for the IllustrisTNG project (see [[Pillepich_2018_IllustrisTNG_Simulations]]).

---

## Critical Findings & Scientific Impact
1. Resolved the long-standing tension between Lagrangian adaptivity and Eulerian shock-capturing accuracy in cosmological hydrodynamics, directly demonstrating superior treatment of fluid instabilities (e.g. Kelvin-Helmholtz mixing) relative to classical SPH on matched test problems.
2. Became the simulation engine underlying the IllustrisTNG suite, one of the most scientifically productive cosmological galaxy-formation simulation projects of the following decade.
3. Open problem acknowledged at introduction: the continuous mesh reconstruction at every timestep carries non-trivial computational overhead relative to either pure SPH or pure fixed-grid AMR, and mesh-regularization choices (to prevent highly distorted, needle-like Voronoi cells in strongly sheared flows) introduce their own set of numerical parameters requiring careful calibration.

---

## Vault Cross-References
- Core Theory: [[Adaptive Mesh Refinement AMR]], [[Smoothed Particle Hydrodynamics SPH Formulations]]
- Related: [[Springel_2005_GADGET-2_Cosmological_Simulation_Code]], [[Pillepich_2018_IllustrisTNG_Simulations]]
- Map of Content: [[Computational_Astrophysics_MOC]]
