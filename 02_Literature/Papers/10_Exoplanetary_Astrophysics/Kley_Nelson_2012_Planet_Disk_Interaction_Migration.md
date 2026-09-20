---
layout: "default"
title: "Kley & Nelson (2012) — Planet-Disk Interaction and Orbital Evolution"
---
## Metadata
- **Authors**: Wilhelm Kley, Richard P. Nelson
- **Year**: 2012
- **arXiv ID**: [arXiv:1203.1184](https://arxiv.org/abs/1203.1184)
- **ADS Bibcode**: `2012ARA&A..50..211K`
- **Journal**: *ARA&A*, 50, 211
- **Sub-field**: astro-ph.EP
- **Key Observatory / Code**: hydrodynamic (grid-based and SPH) protoplanetary-disk simulation codes

---

## Executive Summary
Kley & Nelson review the gravitational interaction between an embedded planet and its natal gaseous protoplanetary disk, which excites spiral density waves that exchange angular momentum with the planet and drive orbital migration. They distinguish two migration regimes — **Type I** (low-mass planets that do not significantly perturb the local disk surface density) and **Type II** (high-mass planets massive enough to open an annular gap in the disk, subsequently migrating at the disk's own viscous drift rate) — and detail how corotation torques, disk thermodynamics, and gap-opening criteria jointly determine migration speed and direction.

---

## Key Equations & Theoretical Framework
**Fundamental postulate**: a planet embedded in a differentially rotating, viscous gaseous disk excites trailing spiral density waves at Lindblad resonances (where the planet's forcing frequency matches the disk's local epicyclic frequency) and, for non-zero disk vortensity gradients, exerts an additional corotation torque from gas librating in the planet's co-orbital region.

**Type I migration torque** (linear, low-mass-planet regime), the sum of differential Lindblad and corotation torques:
$$\boxed{\, \Gamma_{\mathrm{Type\,I}} \propto \left(\frac{M_p}{M_*}\right)^2\left(\frac{h}{r}\right)^{-2}\Sigma r^4\Omega^2 \,}$$
where:
- $M_p/M_*$ is the planet-to-star mass ratio
- $h/r$ is the disk aspect ratio (scale height over radius)
- $\Sigma$ is the local disk surface density
- $\Omega$ is the local orbital angular frequency

The **migration timescale** follows as $\tau_{\rm I} \sim L_p/\Gamma_{\rm I}$, where $L_p=M_p\sqrt{GM_*a}$ is the planet's orbital angular momentum — for Earth-to-Neptune-mass planets in typical disks, $\tau_{\rm I}$ can be as short as $10^4$–$10^5$ yr, posing the classical "Type I migration problem" (migration faster than the disk lifetime, threatening to remove low-mass planets before they can grow to gas-giant cores) that motivated much of the subsequent theoretical refinement (corotation torque saturation, entropy-related torques, and disk thermodynamics corrections that can reverse the torque sign — "outward" migration in specific disk regions).

**Gap-opening (Type II) criterion**: a planet opens a gap once its Hill radius exceeds the local disk scale height and the planet's tidal torque exceeds the disk's viscous replenishment torque, approximately:
$$\frac{M_p}{M_*} \gtrsim 40\,\nu\, \left(\frac{h}{r}\right)^3 \Big/ \Omega r^2 \quad\text{(order-of-magnitude gap-opening condition, viscosity } \nu = \alpha c_s H\text{)}$$

**Type II migration rate**, once a gap is opened, is set by the disk's own viscous inflow/outflow rate at the gap location:
$$\dot a \approx -\frac{3\nu}{2a} = -\frac{3\alpha c_s H}{2a}$$
i.e. the planet migrates locked to the disk's viscous evolution timescale, generically slower than Type I but still potentially fast enough to matter over a disk lifetime of a few Myr.

**Asymptotic checks**: as $M_p\to0$, $\Gamma_{\rm I}\to0$ quadratically — vanishingly low-mass test particles do not migrate; as $M_p$ crosses the gap-opening threshold, the torque formalism transitions discontinuously in this simplified picture (in reality, smoothly, as captured by more detailed simulations) from the Type I to Type II scaling, and the qualitative migration rate typically *decreases* despite the larger planet mass, since Type II migration is now disk-viscosity-limited rather than torque-limited.

---

## Observational Data & Methodology
- **Target / Sample**: theoretical/computational review; observational tests come from the statistical distribution of exoplanet orbital periods (e.g. the paucity of hot Neptunes relative to hot Jupiters) and directly imaged gaps in protoplanetary disks (see [[ALMA_Partnership_2015_HL_Tau_Long_Baseline_Campaign]]).
- **Instrument Setup**: N/A — 2D/3D hydrodynamic disk simulations (grid-based finite-volume and smoothed-particle-hydrodynamics codes).
- **Reduction & Detrending Pipeline**: N/A (theoretical); migration predictions are compared against exoplanet population synthesis models and resolved protoplanetary disk gap observations.

---

## Critical Findings & Scientific Impact
1. Establishes the Type I/Type II migration dichotomy as the standard framework for planet-disk interaction, still the basis of essentially all planet-formation population-synthesis models.
2. Identifies the "fast Type I migration problem" as a major unresolved tension between simple linear theory and the observed longevity of low-mass planets, motivating subsequent work on torque saturation and thermodynamic (entropy-gradient-driven) torque reversal.
3. Open problem: the detailed conditions under which Type I torques reverse sign (permitting outward migration or migration traps) depend sensitively on disk thermodynamics (radiative cooling efficiency, opacity transitions) that remain difficult to capture self-consistently in global disk-evolution population-synthesis models.

---

## Vault Cross-References
- Core Theory: [[Pebble accretion and planetary orbital migration]], [[Protoplanetary disk evolution and core accretion paradigm]]
- Related: [[Shakura_Sunyaev_1973_Thin_Accretion_Disk_Theory]]
- Map of Content: [[Exoplanetary_Astrophysics_MOC]]
