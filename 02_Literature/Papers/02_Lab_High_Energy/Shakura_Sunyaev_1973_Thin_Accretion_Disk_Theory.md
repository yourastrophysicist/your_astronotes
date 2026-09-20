---
layout: "default"
title: "Shakura & Sunyaev (1973) — Black Holes in Binary Systems: Observational Appearance"
---
## Metadata
- **Authors**: Nikolai I. Shakura, Rashid A. Sunyaev
- **Year**: 1973
- **arXiv ID**: none (pre-arXiv era)
- **ADS Bibcode**: `1973A&A....24..337S`
- **Journal**: *A&A*, 24, 337
- **Sub-field**: astro-ph.HE
- **Key Observatory / Code**: foundational analytic theory; underlies modern disk codes (e.g. GRMHD post-processing, X-ray spectral fitting with `diskbb`/`kerrbb`)

---

## Executive Summary
Shakura & Sunyaev construct the first physically complete model of a geometrically thin, optically thick accretion disk around a compact object, parametrizing the unknown turbulent angular-momentum transport mechanism by a dimensionless viscosity parameter $\alpha \lesssim 1$ (the "$\alpha$-disk" model). They derive the radial structure (surface density, temperature, pressure) of a steady-state disk and show that the local effective temperature follows $T(r) \propto r^{-3/4}$ away from the inner edge, producing a characteristic multi-temperature blackbody spectrum — the observational signature that identifies accreting black holes and neutron stars in X-ray binaries.

---

## Key Equations & Theoretical Framework
**Fundamental postulate**: local conservation of mass, angular momentum, and energy in a geometrically thin ($H \ll r$), steady-state ($\partial/\partial t = 0$), axisymmetric disk, with turbulent viscosity $\nu = \alpha c_s H$ parametrizing angular-momentum transport ($\alpha$-prescription).

**Mass conservation** (steady accretion rate independent of radius):
$$\dot{M} = 2\pi r \Sigma(r) v_r(r) = \mathrm{const}$$
where $\Sigma(r)$ is the surface density and $v_r$ the radial inflow velocity.

**Angular momentum conservation**, integrating the viscous torque balance and imposing a zero-torque inner boundary condition at $r_{\mathrm{in}}$ (radius of the innermost stable orbit or stellar surface):
$$\dot{M}\left[\ell(r) - \ell(r_{\mathrm{in}})\right] = 2\pi r^2 \nu \Sigma \frac{d\Omega}{dr}, \qquad \ell(r) = \sqrt{GMr}$$
where $\Omega(r) = \sqrt{GM/r^3}$ is the Keplerian angular velocity.

**Energy balance** — viscous dissipation is radiated locally (thin-disk approximation, negligible radial advection), giving the local flux emitted per unit disk face area:
$$D(r) = \frac{3GM\dot{M}}{8\pi r^3}\left[1-\sqrt{\frac{r_{\mathrm{in}}}{r}}\right]$$
Equating $D(r)$ to blackbody emission $\sigma_{\mathrm{SB}}T^4(r)$ from both disk faces yields the **effective temperature profile**:
$$T(r) = \left[\frac{3GM\dot{M}}{8\pi\sigma_{\mathrm{SB}}r^3}\left(1-\sqrt{\frac{r_{\mathrm{in}}}{r}}\right)\right]^{1/4}$$
where:
- $M$ is the central compact-object mass
- $\dot{M}$ is the mass accretion rate
- $\sigma_{\mathrm{SB}}$ is the Stefan-Boltzmann constant
- $r_{\mathrm{in}}$ is the inner disk edge

The Eddington-limited maximum luminosity for spherical accretion, used throughout to normalize $\dot{M}$, is
$$L_{\mathrm{Edd}} = \frac{4\pi GMm_p c}{\sigma_T} \approx 1.26\times10^{38}\left(\frac{M}{M_\odot}\right)\,\mathrm{erg\,s^{-1}}$$
where $m_p$ is the proton mass and $\sigma_T$ the Thomson cross-section.

**Asymptotic regimes**:
- $r \gg r_{\mathrm{in}}$: $T(r) \to \left(\frac{3GM\dot M}{8\pi\sigma_{\mathrm{SB}}r^3}\right)^{1/4} \propto r^{-3/4}$, the canonical multi-color disk-blackbody scaling.
- $r \to r_{\mathrm{in}}$: $T(r)\to 0$, enforcing the zero-torque boundary condition; the temperature profile peaks at $r_{\mathrm{peak}} = (49/36)\,r_{\mathrm{in}}$.
- $\alpha \to 0$: viscous timescale $t_{\mathrm{visc}}\sim r^2/\nu \to \infty$, disk cannot accrete — no steady state exists, consistent with $\alpha$ being strictly required for angular-momentum transport.

---

## Observational Data & Methodology
- **Target / Sample**: Theoretical model paper, motivated by X-ray binary sources known at the time (e.g. Cyg X-1) and applicable generically to any accreting compact object (white dwarf, neutron star, black hole).
- **Instrument Setup**: N/A — analytic theory; later tested against X-ray continuum spectra from *Ginga*, *RXTE*, *Chandra*, *NuSTAR*.
- **Reduction & Detrending Pipeline**: The multi-temperature disk-blackbody spectrum $F_\nu \propto \int_{r_{\mathrm{in}}}^{r_{\mathrm{out}}} B_\nu[T(r)]\, 2\pi r\, dr$ is the basis of the `diskbb` and relativistic `kerrbb` spectral-fitting models used to measure black-hole spin and mass in X-ray binaries.

---

## Critical Findings & Scientific Impact
1. Established the $\alpha$-viscosity prescription still used (with the physical origin of $\alpha$ now attributed to MHD turbulence via the [[Magnetorotational Instability MRI Derivation|magnetorotational instability]], Balbus & Hawley 1991) as the standard closure for accretion-disk angular momentum transport.
2. Predicted the observationally confirmed multi-temperature blackbody continuum of black-hole and neutron-star X-ray binaries in their soft/thermal-dominant spectral states.
3. Open problem (acknowledged decades later): the thin-disk model breaks down at high $\dot M/\dot M_{\mathrm{Edd}}$ (slim/ADAF disks) and does not include radial energy advection — addressed by Abramowicz et al. (1988, slim disks) and Narayan & Yi (1994, ADAFs).

---

## Vault Cross-References
- Core Theory: [[Accretion onto compact objects]], [[Eddington Luminosity]]
- Related: [[Magnetorotational Instability MRI Derivation]]
- Map of Content: [[Lab_High-Energy_MOC]], [[Fluid_and_Plasma_Dynamics_MOC]]
