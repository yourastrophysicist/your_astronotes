---
layout: "default"
title: "Nissen & Gustafsson (2018) — High-Precision Stellar Abundances of the Elements: Methods and Applications"
---
## Metadata
- **Authors**: Poul E. Nissen, Bengt Gustafsson
- **Year**: 2018
- **arXiv ID**: [arXiv:1810.06535](https://arxiv.org/abs/1810.06535)
- **ADS Bibcode**: `2018A&ARv..26....6N`
- **Journal**: *A&ARv*, 26, 6
- **Sub-field**: astro-ph.SR

**Provenance note**: the original enrichment brief cited arXiv:1805.02435 for this paper; the correct arXiv identifier, verified here, is arXiv:1810.06535.

---

## Executive Summary
Nissen & Gustafsson review the methodology enabling differential stellar abundance precision of $0.01$–$0.03$ dex — an order of magnitude better than absolute abundance determinations — achieved by strictly differential line-by-line analysis of stars closely matched in stellar parameters ($T_{\mathrm{eff}}$, $\log g$, $[\mathrm{Fe/H}]$) relative to the Sun or to a comparison star. They demonstrate how this precision reveals previously unresolved structure in abundance-age and abundance-condensation-temperature relations, with direct application to Galactic chemical evolution, solar-twin studies, and the chemical tagging of stellar populations (including globular cluster multiple populations).

---

## Key Equations & Theoretical Framework
**Fundamental postulate**: for two stars with nearly identical atmospheric parameters, systematic errors in atomic line data (oscillator strengths $f$, damping constants) and in model-atmosphere physics (convection treatment, NLTE departures) largely cancel in a **differential** abundance determination, because both stars are analyzed with the same imperfect atomic/model input:
$$[\mathrm{X/H}]_{\star} - [\mathrm{X/H}]_{\odot} = \Delta\log\epsilon_X(\star) - \Delta\log\epsilon_X(\odot) + \delta_{\mathrm{syst}}$$
where the systematic term $\delta_{\mathrm{syst}}$ is strongly suppressed (rather than eliminated) when the comparison star closely matches the Sun (or reference star) in $T_{\mathrm{eff}}$, $\log g$, $[\mathrm{Fe/H}]$, and $\xi_{\mathrm{micro}}$ (microturbulence).

**Equivalent-width abundance determination** for a given transition, via the standard curve-of-growth relation (see [[Curve of growth abundance analysis]]):
$$\log\epsilon_X = \log\epsilon_{X,\odot} + \log\left(\frac{W_\lambda/\lambda}{(W_\lambda/\lambda)_\odot}\right) + \text{(differential curve-of-growth correction)}$$
with random errors on $\log\epsilon_X$ set by photon-noise-limited equivalent-width measurement precision, $\sigma(W_\lambda)\propto (\mathrm{S/N})^{-1}$, averaged down further by combining $N_{\mathrm{lines}}$ independent transitions of the same species:
$$\sigma(\log\epsilon_X) \approx \frac{\sigma_{\mathrm{line}}}{\sqrt{N_{\mathrm{lines}}}}$$

**Abundance-age and abundance-$T_{\mathrm{cond}}$ relations**: differential abundances $[\mathrm{X/Fe}]$ are examined as functions of stellar age $\tau$ and of the element's dust condensation temperature $T_{\mathrm{cond}}$ (the temperature at which element $X$ would condense into solids in a cooling protoplanetary nebula), revealing trends attributed to planet formation removing condensable (high-$T_{\mathrm{cond}}$) material from the surface convection zone of planet-hosting stars, or to Galactic chemical evolution.

**Asymptotic checks**: as the comparison star's parameters diverge from the reference (large $\Delta T_{\mathrm{eff}}$, $\Delta\log g$), the systematic cancellation degrades and differential precision approaches the absolute-abundance precision floor ($\gtrsim0.05$–$0.1$ dex); in the strict solar-twin limit ($\Delta T_{\mathrm{eff}}, \Delta\log g, \Delta[\mathrm{Fe/H}] \to 0$), differential precision is limited only by photon statistics and can reach $\sim0.01$ dex.

---

## Observational Data & Methodology
- **Target / Sample**: solar-twin and solar-analog samples, and metal-poor halo/thick-disk dwarfs used for Galactic chemical evolution and Galactic archaeology.
- **Instrument Setup**: high-resolution ($R\gtrsim60{,}000$), very high signal-to-noise ($\mathrm{S/N}\gtrsim300$–$1000$) echelle spectroscopy (e.g. HARPS, UVES).
- **Reduction & Detrending Pipeline**: line-by-line differential equivalent-width or spectrum-synthesis analysis against a reference star, with strict control of continuum placement and line-list consistency between target and reference.

---

## Critical Findings & Scientific Impact
1. Establishes differential spectroscopy as the precision frontier of stellar abundance work, directly enabling detection of subtle (0.02–0.05 dex) abundance signatures such as planet-engulfment or planet-formation depletion patterns.
2. Methodology directly underlies high-precision chemical-tagging studies of globular cluster multiple populations (see [[Multiple Populations and Chromosome Maps]]), where 1G/2G abundance differences in He, C, N, O, Na, Al must be resolved at the $\lesssim0.1$ dex level.
3. Open problem: extending differential precision to stars with significantly different stellar parameters (e.g. cool dwarfs vs. warm subgiants in the same cluster) remains challenging, motivating continued development of NLTE and 3D-hydrodynamic differential correction grids.

---

## Vault Cross-References
- Core Theory: [[Curve of growth abundance analysis]], [[Voigt profile]]
- Related: [[Multiple Populations and Chromosome Maps]], [[Age-metallicity degeneracy]]
- Map of Content: [[Astronomical_Spectroscopy_MOC]], [[Stellar_Astrophysics_MOC]]
