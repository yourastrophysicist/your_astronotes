---
layout: default
title: "Binary star orbits"
---

# Binary star orbits

interferometric measurement of binary-star orbits at sub-mas precision. resolves the orbital motion year by year, providing dynamical masses (via Kepler's third law) at $\lesssim 1\%$ precision. *the* gold standard for stellar mass measurements.

## the basic idea

two stars in a Keplerian orbit have angular separation $\rho$ (in mas) and position angle $\phi$ (in degrees) varying with time. measure both at multiple epochs, fit a Keplerian orbital model, recover:
- orbital period $P$
- semi-major axis $a$ (in mas)
- eccentricity $e$
- inclination $i$
- argument of periastron, longitude of node
- *binary mass sum* $M_1 + M_2$

with **trigonometric parallax** giving the distance, $a$ in mas converts to AU. Kepler's third law gives the *total mass*. add radial velocity to break the mass ratio degeneracy → individual masses.

## the precision

interferometric astrometry of binaries:
- per-epoch precision: $\sim 0.1$ mas (CHARA) to $\sim 0.05$ mas (GRAVITY)
- typical orbital characterization: 5-30 epochs over years
- final mass precision: $\sim 1\%$ for short-period systems, $\sim 5\%$ for long-period

competitive with eclipsing-binary mass determinations at much wider parameter coverage (eclipsing only works for edge-on orbits).

## the science: dynamical masses

mass is the most fundamental stellar parameter, but historically hard to measure precisely:
- **eclipsing binaries**: only work for edge-on orbits (a few hundred known)
- **astrometric binaries**: 0.5-2'' separations, low-precision masses
- **interferometric binaries**: 5-100 mas separations, $\sim 1\%$ masses

so interferometry has produced the largest sample of high-precision dynamical masses for late-type stars (M, K dwarfs).

## the canonical sources

### Capella (Aur)

a binary with two G-type giants. CHARA imaging recovered the full 3D orbit, giving masses to 1%. one of the first true *images* of a binary by COAST in 1996; now imaged monthly with sub-mas precision by CHARA.

### Sirius

bright binary with a white-dwarf companion. interferometric observation has constrained orbital evolution and the mass of the WD progenitor.

### Procyon

CHARA observations of the F dwarf + WD pair give masses good to <1%.

### Spectroscopic binaries

many "spectroscopic binaries" (where the orbit is not directly observed but inferred from RV variations) have now been *directly imaged* by CHARA, enabling combined astrometric + RV analysis.

## the orbital fit

modern fitting:
1. measure separation/position-angle at $N$ epochs
2. fit a 7-parameter Keplerian model (P, T_periapse, e, $i$, $\Omega$, $\omega$, $a$)
3. use $\chi^2$ minimization with proper covariance
4. report orbital parameters with uncertainties

modern Bayesian fitting (e.g. emcee, dynesty) gives full posterior distributions. for well-sampled orbits, posteriors are tight.

## the role in the mass-luminosity relation

the **mass-luminosity relation** $L \propto M^\alpha$ (with $\alpha \approx 3$-4 for main-sequence stars) is fundamental. interferometric mass determinations provide the empirical anchor for this relation across spectral types.

binaries have given us:
- $L \propto M^4$ for hot massive stars
- $L \propto M^{3.5}$ for solar-type
- $L \propto M^{2.3}$ for low-mass M dwarfs
- transition at the convective-radiative boundary at ~0.4 $M_\odot$

## triple and multiple systems

interferometry can resolve hierarchical triples and quadruples, providing dynamical-stability tests:

### Algol (1+2 triple)

the famous eclipsing binary Algol is part of a hierarchical triple. CHARA imaging directly resolves the inner pair (1 mas separation) and the outer star's slow orbit around them.

### tau Boo binary system

tau Boo has a known exoplanet *and* a stellar companion. CHARA observations constrain the dynamics of both the planet and the star.

## the future: SKA-mas and ngVLA

planned upgrades:
- SKA-mas for precise long-period radio binary astrometry
- ngVLA for hundreds of dynamical-mass measurements at radio
- VLTI/GRAVITY+ for stronger near-IR astrometric programs

these will yield ~10000 dynamical masses by ~2035, providing definitive empirical mass-luminosity-relation constraints.

## see also

- [Stellar diameters and limb darkening](../../02_Zettel/Theory/interf/Stellar diameters and limb darkening.md)
- [CHARA array](../../02_Zettel/Theory/interf/CHARA array.md)
- [VLTI Very Large Telescope Interferometer](../../02_Zettel/Theory/interf/VLTI Very Large Telescope Interferometer.md)
- [Astronomical_Interferometry_MOC](../../00_Atlas/Astronomical_Interferometry_MOC.md)
