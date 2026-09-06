---
layout: default
title: "Equilibrium temperature"
---

a photoionised nebula reaches a steady-state **equilibrium electron temperature** $T_e$ where heating equals cooling. this is the temperature at which observed forbidden-line ratios live. depends on metallicity, density, and the hardness of the ionising spectrum.

## the balance

steady state:
$$G(T_e) = L(T_e)$$

$G$ rises slowly with $T_e$ (proportional to mean photoelectron energy, weakly $T$-dependent). $L$ rises rapidly via $e^{-E/k_BT_e}$ Boltzmann factors of forbidden-line collisional excitation.

graphically: heating curve crosses the cooling curve at the equilibrium $T_e$. this is a stable equilibrium because cooling rises faster than heating with $T_e$ (positive thermostat).

## numerical values

for typical HII regions at solar metallicity:
$$T_e \approx 7000\,\text{to}\,10\,000\,\text{K}$$

with subtle variations:
- **higher metallicity**: more metal coolants, lower $T_e$ (down to $\sim 5000$ K in solar-metallicity galactic HII regions).
- **lower metallicity**: fewer coolants, higher $T_e$ (up to $\sim 20\,000$ K in $1/100 Z_\odot$ dwarf galaxies).
- **higher $U$**: harder spectrum gives higher photoelectron energies, raising $T_e$ slightly.
- **denser gas**: more recombination, more cycling, similar effect on equilibrium $T_e$.

## the metallicity diagnostic

since $T_e \propto Z^{-1}$ approximately, **measuring $T_e$ gives metallicity**. this is the **direct method** of HII region abundance determination:
1. measure $[OIII]\,\lambda 4363/(\lambda 4959+5007)$ to get $T_e$.
2. measure $[OIII]\,\lambda 5007/H\beta$ etc. to get O$^{++}$ abundance.
3. apply ICFs for unobserved stages.
4. result: $\log(O/H)$ to $\sim 0.1$ dex.

modern abundance work in galaxies routinely uses this method. limitation: requires detection of faint $\lambda 4363$, possible only in moderate-metallicity ($\log(O/H) \lesssim 8.5$) gas.

## extragalactic vs Galactic

most Galactic HII regions are at near-solar metallicity, $T_e \sim 7000$ to $9000$ K. extragalactic HII regions in dwarf galaxies (e.g. BCDs like II Zw 40) are at $1/10$ to $1/100$ solar metallicity, with $T_e \sim 12\,000$ to $20\,000$ K. these are the systems where direct $T_e$ + $\lambda 4363$ work has been most productive.

## why the equilibrium is stable

if $T_e$ deviates upward, cooling grows faster than heating $\to T_e$ falls back. if $T_e$ deviates downward, cooling drops faster than heating $\to T_e$ rises back. so the equilibrium is a stable attractor.

physical: forbidden-line cooling is the dominant feedback, and its $e^{-E/k_BT_e}$ dependence makes it very temperature-sensitive.

## non-equilibrium cases

in some environments the gas is not in thermal equilibrium:
- **shocks**: post-shock $T$ is set by the dynamics, not by photoionisation balance. cooling reduces $T$ on a timescale that competes with dynamical evolution.
- **fast ionisation fronts**: pre-shock and shocked gas have different $T$.
- **AGN narrow-line regions** with rapid clumpiness: each clump may not be in equilibrium with its environment.

modern photoionisation + radiation-hydrodynamics codes (Cloudy + Yt, MAPPINGS V) treat these effects.

## see also

- [Heating rate in HII regions](../../02_Zettel/Theory/Heating rate in HII regions.html)
- [Cooling rate in HII regions](../../02_Zettel/Theory/Cooling rate in HII regions.html)
- [Cooling curve](../../02_Zettel/Theory/Cooling curve.html)
- [OIII forbidden lines](../../02_Zettel/Theory/OIII forbidden lines.html)
- [Forbidden line diagnostics](../../02_Zettel/Theory/Forbidden line diagnostics.html)
- [Metallicity and chemical evolution](../../02_Zettel/Theory/Metallicity and chemical evolution.html)
- [Spectroscopic Te diagnostics](../../02_Zettel/Theory/Spectroscopic Te diagnostics.html)
- [Photoionisation balance](../../02_Zettel/Theory/Photoionisation balance.html)
- [Ionisation parameter U](../../02_Zettel/Theory/Ionisation parameter U.html)
- Strömgren sphere
