---
layout: default
title: "Galaxy size-luminosity relation"
---

# galaxy size-luminosity relation

up: [Pablo_02_Statistical_properties_of_galaxies](../../01_Literature/Lectures/Observational_Cosmology/Pablo_02_Statistical_properties_of_galaxies.md)

## the canonical figure

plot effective (half-light) radius $R_e$ on the y-axis vs absolute B-band magnitude $M_B$ on the x-axis, log-log, for nearby galaxies. you do not get a single line; you get *branches* corresponding to galaxy classes:

- **dwarf spheroidals (dSph)** and **ultra-faint dwarfs**: $M_B \sim -8$ to $-12$, $R_e \sim 0.1$ to $1$ kpc. very low surface brightness.
- **dwarf ellipticals (dE)**: $M_B \sim -13$ to $-18$, $R_e \sim 0.5$ to a few kpc, lying on a *positive* $R_e$-$L$ slope (brighter dwarfs are larger).
- **compact ellipticals (cE)** and **ultra-compact dwarfs (UCD)**: $M_B \sim -10$ to $-13$, $R_e \sim 0.01$ to $0.1$ kpc, *off* the dE branch (small but bright). M32 is the prototype cE.
- **giant ellipticals**: $M_B \sim -19$ to $-23$, $R_e \sim 1$ to $30$ kpc, on a *steep* positive $R_e$-$L$ relation (the bigger the brighter, characteristic of a virial sequence).
- **spirals**: a wide band overlapping with giant ellipticals at the bright end, with smaller scatter; $R_e$ here is the disk scale length times $\sim 1.7$.

## why the branches

the dwarf and giant branches do *not* connect smoothly. moving from a faint dE to a UCD, $R_e$ drops by an order of magnitude. moving from a UCD to a giant elliptical, $R_e$ rises by three orders of magnitude. so size is *not* a monotonic function of luminosity across the full population. there are at least two physical sequences:

- the **dwarf sequence** (dSph + dE): pressure-supported, low-density, dark-matter-dominated, easily disturbed by feedback and tides.
- the **giant sequence** (Es + spiral bulges): also pressure-supported but at much higher densities; sit on the [Fundamental plane of ellipticals](../../02_Zettel/Theory/Fundamental plane of ellipticals.md).
- the **disk sequence** (spirals): rotation-supported, follow [Tully-Fisher relation](../../02_Zettel/Theory/Tully-Fisher relation.md) (luminosity vs $V_{\text{rot}}$, with $R$ folded in).
- the **compact intruders** (cE, UCD): probably tidally stripped nuclei of larger galaxies, not a primordial sequence.

## what i remember

the size-luminosity plot is the *first* indication that "galaxy" is not one kind of object. anyone who tries to fit a single $R_e(L)$ relation across the full sample is averaging over four physically distinct populations.

## connections

- next: [Fundamental plane of ellipticals](../../02_Zettel/Theory/Fundamental plane of ellipticals.md) adds velocity dispersion, $R_e \propto \sigma^{1.4}\langle I \rangle_e^{-0.9}$
- spirals: [Tully-Fisher relation](../../02_Zettel/Theory/Tully-Fisher relation.md)
- mass version: stellar mass density profile, related to [Stellar mass function](../../02_Zettel/Theory/Stellar mass function.md) only via mass-to-light ratio

## key references

- Kormendy 1985 (original $\mu_e$ vs $R_e$)
- Binggeli et al. 1984 (Virgo dwarfs)
- Misgeld & Hilker 2011 (size-luminosity across all classes)
