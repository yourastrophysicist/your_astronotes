---
layout: default
title: "Local thermodynamic equilibrium LTE"
---

**local thermodynamic equilibrium (LTE)** assumes that, even in a non-uniform medium, the populations of energy levels at any local point follow the Boltzmann + Saha equations at the **local temperature** $T(r)$. radiation and collisions both maintain detailed balance.

## what LTE buys you

with LTE:
- level populations from [Boltzmann equation in spectroscopy](../../02_Zettel/Theory/Boltzmann equation in spectroscopy.md) at local $T$.
- ionisation populations from [Saha ionisation equation](../../02_Zettel/Theory/Saha ionisation equation.md) at local $T$.
- source function $S_\nu = B_\nu(T)$ at local $T$ ([Source function](../../02_Zettel/Theory/Source function.md)).
- emission and absorption coefficients self-consistent.

so the only "input" for the radiative-transfer problem is the temperature profile $T(\tau)$, which itself is constrained by global energy conservation. enormous simplification.

## the key assumption: collisions $>$ radiation

LTE holds when **collisions are fast compared to radiative processes**. then collisional excitation/de-excitation enforces a Boltzmann distribution at the local kinetic $T$, regardless of the radiation field passing through.

quantitatively: collisional excitation rate $C_{lu} \propto n_e \langle\sigma v\rangle_{lu}$. for this to dominate over the radiative pumping, you need
$$n_e \gtrsim 10^{15} \text{ to } 10^{17}\,\text{cm}^{-3}$$
(scaling with line and species). at lower densities, departures grow.

## where LTE works well

- **deep stellar photospheres**: $\tau > 0.1$, dense layers, frequent collisions. accurate to $\lesssim 5\%$ for most lines and species in solar-type stars.
- **stellar interiors**: ridiculously LTE.
- **dense cool flows, brown-dwarf atmospheres**: LTE OK.

## where LTE breaks

- **chromospheres / coronae**: $T$ rises but density falls; radiation rates dominate collisions. NLTE essential.
- **stellar winds and accretion disks**: violent motions and out-of-equilibrium radiation field.
- **HII regions and planetary nebulae**: low density, photoionisation-driven; **never LTE** for any meaningful line. statistical equilibrium needed.
- **AGN narrow-line regions, galactic outflows**: same.
- **protostellar accretion shocks, supernova ejecta**: NLTE.

so for stellar photospheres LTE is mostly fine; for everything else, NLTE.

## NLTE corrections

even where LTE is "OK," small corrections matter for precision work. typical NLTE departures:
- in the Sun (solar abundance work), $\sim 0.05$ to $0.2$ dex shifts in elemental abundances.
- in metal-poor stars (Galactic Archaeology), corrections can reach $\sim 0.5$ dex for some species (Fe II, Na I, etc.).

modern abundance pipelines (LIME, MULTI, MULTI3D, NESSY) solve NLTE for the most-used species.

## detailed balance

at LTE, every microscopic process is balanced by its inverse:
- collisional excitation $\leftrightarrow$ collisional de-excitation.
- radiative absorption $\leftrightarrow$ stimulated + spontaneous emission.

so the rates of both directions are equal. this is what enforces $S_\nu = B_\nu$. break detailed balance (e.g. by a dilute radiation field) and LTE breaks.

## see also

- [Boltzmann equation in spectroscopy](../../02_Zettel/Theory/Boltzmann equation in spectroscopy.md)
- [Saha ionisation equation](../../02_Zettel/Theory/Saha ionisation equation.md)
- [Source function](../../02_Zettel/Theory/Source function.md)
- [Equation of radiative transfer](../../02_Zettel/Theory/Equation of radiative transfer.md)
- [Statistical equilibrium equations](../../02_Zettel/Theory/Statistical equilibrium equations.md)
- [Two-level atom](../../02_Zettel/Theory/Two-level atom.md)
- [Optical depth](../../02_Zettel/Theory/Optical depth.md)
- [Stellar atmosphere structure](../../02_Zettel/Theory/Stellar atmosphere structure.md)
- [Thermal equilibrium in the early universe](../../02_Zettel/Theory/Thermal equilibrium in the early universe.md) — cosmological-scale LTE
