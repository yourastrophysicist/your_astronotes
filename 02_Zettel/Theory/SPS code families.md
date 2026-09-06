---
layout: default
title: "SPS code families"
---

several major **stellar population synthesis (SPS) code families** are in active use, each with different ingredient choices (stellar libraries, isochrones, AGB treatment, IMF). knowing which code your data is fit to matters because they disagree by $\sim 0.05$ to $0.3$ dex in inferred mass and SFR.

## the major families

### Bruzual & Charlot 2003 (BC03)

the workhorse for the past two decades. uses **Padova** isochrones and STELIB / BaSeL stellar libraries. solid pre-AGB treatment, includes Padova TP-AGB tracks.

distributed as `bc2003` files. used in CIGALE, FAST, MAGPHYS, MILES, etc.

strengths: well-understood, decades of literature comparison, MILES + STELIB libraries.
weaknesses: TP-AGB phase relatively weak; not great for $\sim 1$ Gyr populations.

### Maraston 2005 (M05)

heavy emphasis on the **TP-AGB** phase. uses semi-empirical AGB tracks calibrated against intermediate-age MC clusters. predicts more NIR luminosity at $\sim 1$ Gyr than BC03 by up to a factor of $\sim 2$.

historical importance: in 2006 Maraston's higher NIR fluxes for high-$z$ galaxies suggested **lower stellar masses** than BC03. the TP-AGB controversy is now mostly resolved (Kriek 2010, Conroy 2011) toward something closer to BC03, but M05 remains a useful systematic test.

### Conroy FSPS (Flexible Stellar Population Synthesis)

modern, flexible Python-accessible. modular: choose your stellar library (MILES, BaSeL, BPASS), isochrone set (Padova, MIST, BaSTI), IMF, dust treatment, and SFH parametrisation independently.

distributed via `python-fsps`. used by Prospector, BAGPIPES, beagle.

strengths: state-of-the-art ingredients, fully flexible, well-documented assumptions, includes WMBasic atmospheric models for hot stars, MIST isochrones default.
weaknesses: more inputs to specify; results less stable across versions if assumptions change.

### Starburst99 (Leitherer)

specialised for **massive young populations** (less than $\sim 100$ Myr). focus on ionising photon production, WR features, supernova rates. the standard for HII region modelling and very young burst SFR calibration.

less appropriate for older intermediate or evolved populations.

### BPASS (Eldridge & Stanway)

includes **binary stellar evolution** consistently. binary effects (mass transfer, mergers) significantly affect ionising photon production and WR populations at all ages. especially important for high-$z$ galaxies and metal-poor systems.

emerging as the standard for HII region modelling at high redshift (since binaries are particularly important at low metallicity).

## key differences summary

| feature | BC03 | M05 | FSPS | SB99 | BPASS |
|---|---|---|---|---|---|
| isochrones | Padova | Padova | Padova/MIST | Geneva | own |
| stellar libraries | BaSeL/STELIB | BaSeL | MILES/BaSeL | flexible | flexible |
| TP-AGB | Padova | semi-empirical | flexible | n/a | flexible |
| binaries | no | no | optional | no | yes |
| age range | full | full | full | $< 100$ Myr | full |
| python access | indirect | indirect | yes | indirect | yes |

## practical advice

- **for galaxy SED fitting**: BC03 (FAST), MILES + Padova FSPS (Prospector), or M05 (CIGALE option). cross-check.
- **for HII region / nebular**: SB99 + Cloudy, or BPASS + Cloudy for high-$z$ low-$Z$.
- **for cosmic SFH and high-$z$**: BPASS often preferred for ionising photon budget.

## see also

- [Stellar population synthesis](../../02_Zettel/Theory/Stellar population synthesis.md)
- [Single stellar population SSP](../../02_Zettel/Theory/Single stellar population SSP.md)
- [Initial mass function](../../02_Zettel/Theory/Initial mass function.md)
- [SED fitting basics](../../02_Zettel/Theory/SED fitting basics.md)
- [Star formation history of a population](../../02_Zettel/Theory/Star formation history of a population.md)
- [Stellar mass estimation in unresolved populations](../../02_Zettel/Theory/Stellar mass estimation in unresolved populations.md)
- [UV SFR tracer](../../02_Zettel/Theory/UV SFR tracer.md)
- [H-alpha SFR tracer](../../02_Zettel/Theory/H-alpha SFR tracer.md)
