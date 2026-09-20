---
layout: "default"
title: "Porth et al. (2019) — The Event Horizon GRMHD Code Comparison Project"
---
## Metadata
- **Authors**: Oliver Porth et al. (Event Horizon Telescope Collaboration)
- **Year**: 2019
- **arXiv ID**: [arXiv:1904.04923](https://arxiv.org/abs/1904.04923)
- **ADS Bibcode**: `2019ApJS..243...26P`
- **Journal**: *ApJS*, 243, 26
- **Sub-field**: astro-ph.HE / astro-ph.IM
- **Key Observatory / Code**: nine independent GRMHD codes (Athena++, BHAC, Cosmos++, ECHO, H-AMR, iharm3D, HARM-Noble, IllinoisGRMHD, KORAL)

---

## Executive Summary
As a validation step ahead of the first Event Horizon Telescope (EHT) black-hole images, this project runs an identical, well-specified test problem — a magnetized torus accreting onto a Kerr black hole, with turbulence driven by the [[Balbus_Hawley_1991_Magnetorotational_Instability|magnetorotational instability]] — through nine independently developed general-relativistic magnetohydrodynamic (GRMHD) codes, comparing the resulting turbulent accretion-flow statistics using a specially developed set of quantitative performance metrics. The codes agree well on time- and shell-averaged quantities and, crucially, agreement improves systematically with numerical resolution, establishing that the community's GRMHD modeling of black-hole accretion flows is mature and reproducible — a prerequisite for trusting GRMHD-simulation-based interpretation of the actual EHT images released shortly afterward.

---

## Key Equations & Theoretical Framework
**Fundamental postulate**: ideal GRMHD — the coupled system of the general-relativistic continuity equation, the relativistic Euler (momentum-energy) equation with Lorentz-force coupling to the electromagnetic stress tensor, and the relativistic induction equation, all evolved on a fixed Kerr background metric (the "test problem" ignores backreaction on the spacetime itself, valid for the low accreted mass relative to the central black hole mass).

**GRMHD stress-energy tensor**, combining the ideal fluid and electromagnetic contributions that source the momentum-energy conservation equation $\nabla_\mu T^{\mu\nu}=0$:
$$T^{\mu\nu} = \left(\rho + u + p + b^2\right)u^\mu u^\nu + \left(p+\frac{b^2}{2}\right)g^{\mu\nu} - b^\mu b^\nu$$
where $\rho$ is the rest-mass density, $u$ the internal energy density, $p$ the gas pressure, $u^\mu$ the fluid four-velocity, and $b^\mu$ the magnetic field four-vector in the fluid frame.

**Standard test-problem setup**: an initially equilibrium, non-self-gravitating torus of magnetized gas (Fishbone-Moncrief equilibrium solution) threaded by a weak poloidal seed field, evolved on a fixed Kerr metric of specified spin $a$; MRI-driven turbulence (see [[Balbus_Hawley_1991_Magnetorotational_Instability]]) develops self-consistently from the seed field and drives angular-momentum transport and accretion.

**Quantitative comparison metrics**: rather than comparing raw simulation snapshots (which differ in turbulent realization due to each code's distinct numerical discretization even given identical initial conditions, since MHD turbulence is chaotic), the comparison uses **time- and shell-averaged** quantities — density, magnetic field strength, accretion rate, and the disk's magnetic flux saturation state — which converge to consistent values across codes as numerical resolution increases:
$$\left\langle X(r)\right\rangle_{t,\phi} = \frac{1}{\Delta t}\int_{t_1}^{t_2}dt\,\frac{1}{2\pi}\int_0^{2\pi}d\phi\;X(r,\theta,\phi,t)\Big|_{\theta=\pi/2}$$
for a given quantity $X$ (e.g. $\rho$, $|b|$), evaluated at the disk midplane and averaged over a statistically stationary interval of simulation time.

**Asymptotic checks**: at low numerical resolution, inter-code scatter in the averaged quantities is significant, reflecting each code's distinct numerical dissipation properties acting on marginally resolved MRI turbulence; as resolution increases, all nine codes' averaged quantities converge toward a common value, demonstrating that the underlying continuum GRMHD equations (rather than code-specific numerical artifacts) are being solved consistently — the operational definition of "numerical convergence" the paper uses to validate the community's simulation tools ahead of quantitative EHT image interpretation.

---

## Observational Data & Methodology
- **Target / Sample**: purely computational test problem; not a comparison against astronomical data, but a validation exercise directly motivated by and feeding into interpretation of EHT observations of M87* and Sgr A*.
- **Instrument Setup**: N/A — nine independent GRMHD codes run on the same test problem specification.
- **Reduction & Detrending Pipeline**: standardized post-processing scripts computing the shell/time-averaged comparison metrics uniformly across all nine codes' output.

---

## Critical Findings & Scientific Impact
1. Established quantitative confidence in GRMHD simulations as a reliable modeling tool ahead of the landmark 2019 EHT M87* image release, whose physical interpretation (black-hole mass, spin, accretion state) relies heavily on comparison against GRMHD simulation image libraries.
2. Identified and quantified the resolution requirements needed for different simulation quantities (e.g. accretion rate versus detailed turbulent structure) to converge, informing subsequent EHT-related GRMHD simulation campaigns' resolution choices.
3. Open problem: the test problem deliberately excludes radiative cooling, non-ideal MHD effects, and full general-relativistic radiative transfer post-processing (needed to produce synthetic images comparable to actual EHT data) — each is the subject of separate, follow-up code-comparison efforts.

---

## Vault Cross-References
- Core Theory: [[Magnetorotational Instability MRI Derivation]], [[Kerr Metric Horizon and Ergosphere Geometry]]
- Related: [[Balbus_Hawley_1991_Magnetorotational_Instability]], [[Blandford_Znajek_1977_Electromagnetic_Extraction_Kerr_BH]]
- Map of Content: [[Fluid_and_Plasma_Dynamics_MOC]], [[Lab_High-Energy_MOC]], [[Computational_Astrophysics_MOC]]
