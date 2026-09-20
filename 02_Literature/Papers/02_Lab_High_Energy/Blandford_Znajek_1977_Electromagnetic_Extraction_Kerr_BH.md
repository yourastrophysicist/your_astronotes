---
layout: "default"
title: "Blandford & Znajek (1977) — Electromagnetic Extraction of Energy from Kerr Black Holes"
---
## Metadata
- **Authors**: Roger D. Blandford, Roman L. Znajek
- **Year**: 1977
- **arXiv ID**: none (pre-arXiv era)
- **ADS Bibcode**: `1977MNRAS.179..433B`
- **Journal**: *MNRAS*, 179, 433
- **Sub-field**: astro-ph.HE
- **Key Observatory / Code**: foundational GRMHD jet theory; tested in modern EHT GRMHD simulation libraries (e.g. `BHAC`, `HARM`, `KORAL`)

---

## Executive Summary
Blandford & Znajek show that a spinning (Kerr) black hole threaded by a large-scale, dynamically weak magnetic field supported by a surrounding conducting plasma (accretion disk) can electromagnetically extract a fraction of its rotational energy and transmit it to infinity as a Poynting-flux-dominated jet — without any matter crossing the horizon carrying that energy outward. The mechanism is the general-relativistic, force-free analogue of a unipolar inductor: the horizon acts as a rotating conductor threading magnetic field lines, driving a current circuit that dissipates power at "infinity" (the jet) and at the load resistance associated with the surrounding plasma.

---

## Key Equations & Theoretical Framework
**Fundamental postulate**: the force-free electrodynamics approximation ($\rho_e E^\mu + (J\times B)^\mu/c = 0$, plasma inertia negligible) applied to the exterior of a Kerr black hole in Boyer-Lindquist coordinates, with the "membrane paradigm" treating the event horizon as a conducting 2-surface with surface resistivity $R_H = 4\pi/c = 377\,\Omega$ (impedance of free space).

**Horizon angular velocity** (the analogue of the conductor's rotation rate) for a Kerr black hole of mass $M$ and spin parameter $a=J/Mc$:
$$\Omega_H = \frac{ac}{2Mr_+/G}= \frac{a}{r_+^2+a^2}$$
(in geometrized units $G=c=1$), where $r_+ = M+\sqrt{M^2-a^2}$ is the outer horizon radius.

**Blandford-Znajek power** extracted electromagnetically, for an ordered poloidal field threading the horizon with flux $\Phi_H$:
$$P_{\mathrm{BZ}} \approx \frac{\kappa}{4\pi c}\,\Phi_H^2\,\Omega_H^2 \;\propto\; B^2 M^2 a^2 \quad \text{(low-spin expansion, } a\ll M\text{)}$$
where:
- $\Phi_H$ is the magnetic flux threading the horizon
- $\Omega_H$ is the horizon angular velocity defined above
- $\kappa$ is an $O(1)$ numerical constant depending on the assumed field geometry (split-monopole, paraboloidal, etc.)
- the more commonly quoted normalized form is $P_{\mathrm{BZ}} = \frac{\kappa}{4\pi}\Phi_H^2\Omega_H^2$, with modern GRMHD calibrations giving $\kappa \approx 0.05$–$0.1$ for realistic disk-fed magnetic flux

**Membrane-paradigm circuit analogy**: the horizon behaves as an EMF source $\mathcal{E} = \Omega_H \Phi_H/2\pi c$ driving current $I$ through a circuit of horizon resistance $R_H$ and external (jet) load resistance $R_L$; maximum power transfer to the jet occurs when $R_L \sim R_H$ (impedance matching), analogous to a rotating unipolar inductor (e.g. Goldreich-Julian pulsar magnetosphere).

**Asymptotic regimes**:
- $a\to 0$ (Schwarzschild limit): $\Omega_H \to 0$, $P_{\mathrm{BZ}} \to 0$ — a non-spinning black hole cannot power a BZ jet; energy extraction vanishes identically.
- $a\to M$ (extremal Kerr): $\Omega_H \to 1/2M$, $P_{\mathrm{BZ}}$ reaches its maximum value for fixed $\Phi_H$ — jet power is maximized for maximally spinning black holes, consistent with the observed correlation between radio-loudness and inferred spin in some AGN/XRB samples.
- Weak-field limit ($B\to 0$): $P_{\mathrm{BZ}}\to 0$ quadratically in $B$, confirming the mechanism requires an externally supplied (disk-anchored), not self-generated, magnetic field.

---

## Observational Data & Methodology
- **Target / Sample**: Theoretical mechanism paper; subsequently invoked for AGN radio jets (M87, blazars), microquasar jets (GRS 1915+105), and the jetted tidal disruption events and short GRBs.
- **Instrument Setup**: N/A — general-relativistic magnetohydrodynamic theory; observationally probed via VLBI jet kinematics and, directly, via EHT resolved horizon-scale imaging of M87* and Sgr A*.
- **Reduction & Detrending Pipeline**: Modern tests compare GRMHD simulation output (magnetically arrested disk, MAD, states) against the analytic BZ scaling $P_{\mathrm{BZ}}\propto a^2$ at low spin and its full-Kerr generalization at high spin.

---

## Critical Findings & Scientific Impact
1. Provided the first physically motivated, energetically self-consistent mechanism for extracting black-hole rotational energy without violating causality or the second law of black hole thermodynamics (horizon area cannot decrease).
2. Forms the theoretical basis of the spin-powered jet paradigm now supported by EHT polarimetric imaging of M87*, which favors MAD-state, BZ-powered jet launching.
3. Open problem: the original force-free, low-spin perturbative solution does not capture the full non-linear MHD dynamics of jet collimation and mass-loading — addressed by modern GRMHD simulations (e.g. [[Porth et al. (2019) — GRMHD Code Comparison]]) and by the complementary [[Blandford-Payne Jet Launching|Blandford & Payne (1982) disk-wind mechanism]] for matter-loaded outflows.

---

## Vault Cross-References
- Core Theory: [[Blandford-Znajek Mechanism]], [[Kerr Metric Horizon and Ergosphere Geometry]], [[Innermost Stable Circular Orbit ISCO]]
- Related: [[Blandford-Payne Jet Launching]], [[Synchrotron and Inverse Compton Radiation]]
- Map of Content: [[Lab_High-Energy_MOC]], [[General_Relativity_MOC]], [[Fluid_and_Plasma_Dynamics_MOC]]
