---
layout: default
title: "Case A vs Case B recombination"
---

two limiting cases for hydrogen recombination cascades, distinguished by what happens to **Lyman series photons** in the gas. **Case B** is the standard for real HII regions.

## Case A: fully transparent

all photons (including Lyman lines and the Lyman continuum) escape freely. each recombination cascades through some path of allowed transitions, emitting one photon at each step until reaching the ground state.

recombination coefficient (sum of recombinations to all levels):
$$\alpha_A(T_e) \approx 4.2 \times 10^{-13}\,\text{cm}^3\,\text{s}^{-1}\,\text{at } T_e = 10^4\,\text{K}$$

valid in **very thin gas**: e.g. very dilute intergalactic medium, ISM through which Lyman alpha can escape over $\sim$ kpc paths.

## Case B: thick to Lyman, thin to higher series

in real HII regions, the gas is **optically thick to Lyman lines** (because $n$=2 holds a lot of population, absorbing $\sim 1216$ Å Ly$\alpha$ photons). but optically thin to Balmer and higher series (because $n=2$ is much less populated).

so any photon emitted in a Lyman transition is re-absorbed in the gas, exciting another H atom which then re-emits. the net effect: **direct recombinations to ground state** count as zero (they would just produce a Lyman continuum photon that re-ionises somewhere else, no net change in ionisation state).

recombination coefficient excludes direct-to-ground:
$$\alpha_B(T_e) \approx 2.6 \times 10^{-13}\,\text{cm}^3\,\text{s}^{-1}\,\text{at } T_e = 10^4\,\text{K}$$

so $\alpha_B \approx 0.6 \cdot \alpha_A$.

## consequence for line emissivities

in Case B:
- **Ly$\alpha$ photons** get repeatedly re-absorbed and redistributed via resonance scattering. they take a long time to escape, often via wing scattering rather than direct radial transit.
- **Balmer and higher Lyman series photons**: each cascade step reaches the $n = 2$ level eventually, then the cascade continues through the Balmer series. Balmer lines are optically thin and escape freely.

result: Case-B Balmer line ratios are well-defined and robust to recombination details, and are the **canonical predicted ratios**:

| ratio | Case B at $T_e = 10^4$ K |
|---|---|
| H$\alpha$/H$\beta$ | $2.86$ |
| H$\gamma$/H$\beta$ | $0.466$ |
| H$\delta$/H$\beta$ | $0.256$ |
| H$\varepsilon$/H$\beta$ | $0.158$ |
| H8/H$\beta$ | $0.105$ |

deviation from H$\alpha$/H$\beta = 2.86$ in observed spectra indicates **dust extinction** ([Balmer decrement](../../02_Zettel/Theory/Balmer decrement.html)).

## comparison

| feature | Case A | Case B |
|---|---|---|
| Lyman lines escape? | yes | no |
| direct-to-ground counted | yes | no |
| applicable to | thin gas | HII regions, PNs |
| H$\alpha$/H$\beta$ ($T_e = 10^4$ K) | $\sim 2.85$ | $\sim 2.86$ |
| Ly$\alpha$/H$\beta$ | $\sim 33$ | $\sim 17$ |

note Ly$\alpha$/H$\beta$ differs significantly. in Case B, half of the Ly$\alpha$ flux is re-channelled via cascades.

## "Case C" and beyond

in special situations:
- **Case C**: optically thick to all Lyman lines AND a fraction of Balmer Ly photon paths. used for very dense, extended nebulae like AGN broad-line regions.
- **resonance scattering** of Ly$\alpha$ has a large effective optical depth even in modest H column densities; full radiative transfer is needed to predict its profile.

modern photoionisation codes (Cloudy, MAPPINGS) handle Cases A, B, C, and intermediate self-consistently.

## see also

- [Optically thin recombination lines](../../02_Zettel/Theory/Optically thin recombination lines.html)
- [Recombination line emissivity](../../02_Zettel/Theory/Recombination line emissivity.html)
- [Balmer decrement](../../02_Zettel/Theory/Balmer decrement.html)
- [Hydrogen spectral series](../../02_Zettel/Theory/Hydrogen spectral series.html)
- [H-alpha SFR tracer](../../02_Zettel/Theory/H-alpha SFR tracer.html)
- [Photoionisation balance](../../02_Zettel/Theory/Photoionisation balance.html)
- Strömgren sphere
- [Photon decoupling and CMB](../../02_Zettel/Theory/Photon decoupling and CMB.html) — analogous Case-B-like problem in the cosmological recombination
