---
layout: "default"
title: "Larson (1981) — Turbulence and Star Formation in Molecular Clouds"
---
## Metadata
- **Authors**: Richard B. Larson
- **Year**: 1981
- **arXiv ID**: none (pre-arXiv era)
- **ADS Bibcode**: `1981MNRAS.194..809L`
- **Journal**: *MNRAS*, 194, 809
- **Sub-field**: astro-ph.GA
- **Key Observatory / Code**: statistical analysis of molecular-line survey data of Galactic molecular clouds

---

## Executive Summary
Larson identifies a set of simple, approximately power-law empirical scaling relations connecting the physical properties of Galactic molecular clouds — internal velocity dispersion, size, and density — across several orders of magnitude in cloud size, from small cloud cores to giant molecular clouds. These relations, now known as **Larson's relations**, are interpreted as evidence that molecular-cloud internal motions are dominated by scale-dependent supersonic turbulence (rather than simple thermal pressure or ordered rotation), with the observed velocity-size scaling closely resembling the Kolmogorov-like scaling expected for a turbulent cascade, and provided the first quantitative empirical link between interstellar turbulence and the star-formation process.

---

## Key Equations & Theoretical Framework
**Fundamental postulate**: molecular clouds are not quiescent, thermally supported structures but are pervaded by supersonic, scale-dependent turbulent motions, so that a cloud's characteristic non-thermal linewidth reflects the turbulent velocity power spectrum sampled over the cloud's own size scale.

**Larson's first relation — velocity dispersion vs. size**:
$$\boxed{\, \sigma_v = \sigma_0\left(\frac{R}{1\,{\rm pc}}\right)^{\gamma} \,}$$
where:
- $\sigma_v$ is the internal (non-thermal, turbulent) one-dimensional velocity dispersion, measured from molecular-line width
- $R$ is the cloud's characteristic size
- $\gamma\approx0.35$–$0.4$ (Larson's original value $\approx0.38$), close to the Kolmogorov turbulence exponent $1/3$ for incompressible turbulence (or somewhat steeper, as expected for compressible, supersonic turbulence)

**Larson's second relation — approximate virial equilibrium**: independently, Larson finds that cloud internal kinetic and gravitational potential energy are roughly comparable across the full size range surveyed,
$$\frac{\sigma_v^2 R}{GM} \sim \mathrm{const} \sim O(1)$$
suggesting molecular clouds are close to (marginal) virial equilibrium between turbulent kinetic support and self-gravity, rather than being in free monotonic collapse or dispersing on a dynamical timescale — though the physical origin of this apparent equilibrium (real dynamical balance vs. a statistical selection effect on which clouds are observable) remains debated.

**Larson's third relation — approximately constant column density / surface density**: combining the size-linewidth relation with the approximate virial relation, and using $M\sim\bar\rho R^3$, yields
$$\bar\rho \propto R^{-1} \quad\Longrightarrow\quad \Sigma \equiv \frac{M}{\pi R^2} \sim \mathrm{const}$$
i.e. molecular clouds across a wide range of sizes have similar characteristic mean surface densities, a scale-invariance later connected to the observed narrow range of cloud/clump surface densities invoked in the Kennicutt-Schmidt and related star-formation-efficiency relations.

**Jeans mass in a turbulence-supported cloud**, combining the standard thermal Jeans instability criterion (see [[Jeans gravitational instability and Jeans mass]]) with an effective turbulent pressure/sound-speed replacing the purely thermal one,
$$M_J = \frac{\pi}{6}\rho\lambda_J^3 = \frac{\pi}{6}\rho\left(\frac{\pi c_{\rm eff}^2}{G\rho}\right)^{3/2}, \qquad c_{\rm eff}^2 = c_s^2+\frac{1}{3}\sigma_v^2$$
shows that turbulent support raises the effective Jeans mass well above the purely thermal value, helping explain why molecular clouds as a whole are far more massive than their thermal Jeans mass would predict, while still permitting localized collapse in the densest, most turbulence-decayed sub-regions.

**Asymptotic checks**: as $R\to0$ (the smallest, densest cloud cores/clumps), $\sigma_v\to\sigma_0(R/1\,{\rm pc})^\gamma$ approaches the purely thermal sound speed, and turbulent support becomes subdominant — precisely the regime where gravitational collapse and star formation actually proceed; at the largest scales ($R\gtrsim$ tens of pc, giant molecular cloud complexes), $\sigma_v$ becomes highly supersonic, consistent with the observed low star-formation efficiency per free-fall time on cloud-complex scales (most of the gas mass is turbulently supported against prompt global collapse).

---

## Observational Data & Methodology
- **Target / Sample**: a compiled sample of Galactic molecular clouds spanning cloud cores to giant molecular clouds, using CO and other molecular-line survey linewidth and size measurements available at the time.
- **Instrument Setup**: single-dish radio/millimeter molecular-line spectroscopy (CO rotational transitions).
- **Reduction & Detrending Pipeline**: cross-cloud statistical regression of linewidth against cloud size and mass across the compiled heterogeneous sample.

---

## Critical Findings & Scientific Impact
1. Established the empirical case for supersonic turbulence as the dominant non-thermal support mechanism in molecular clouds, reframing star formation as fundamentally a turbulence-regulated (rather than purely quasi-static thermal) process.
2. Larson's relations remain the standard benchmark against which modern, far higher-resolution molecular-cloud surveys (and MHD turbulence simulations) are compared, refining but not overturning the qualitative scaling.
3. Open problem: the physical origin and universality of the apparent virial-equilibrium-like balance (Larson's second relation) — whether it reflects genuine long-lived dynamical equilibrium, a rapidly evolving transient state caught in a common phase by observational selection, or a trivial consequence of how "clouds" are defined by molecular-line observations — remains actively debated in the star-formation community.

---

## Vault Cross-References
- Core Theory: [[Jeans gravitational instability and Jeans mass]], [[Molecular clouds]]
- Related: [[Draine_Li_2007_Infrared_Emission_Dust_PAH]]
- Map of Content: [[Astrophysics_of_the_Interstellar_Medium_MOC]]
