---
layout: default
title: "TRGB tip of the red giant branch"
---

at the **tip of the red giant branch** (TRGB), low-mass stars ignite helium in a thermal flash. the luminosity at this point is nearly independent of mass and metallicity, making it a sharp standard-candle feature in the I-band luminosity function.

## the physics

stars with $M \lesssim 2.3\,M_\odot$ ascend the RGB while burning hydrogen in a shell around an inert helium core. as they evolve up the RGB, the He core grows by shell burning until it reaches a critical mass $\sim 0.46\,M_\odot$, at which point degenerate helium ignites in a runaway thermonuclear flash (the **helium flash**).

since the core mass at flash is universal (set by neutrino cooling and degeneracy pressure), the luminosity at the tip is also universal:
$$M_I^{\rm TRGB} \approx -4.0$$

with a weak metallicity dependence:
$$M_I^{\rm TRGB} = -4.05 + 0.22[Fe/H]$$
(approximate; calibrations vary).

## the observational signature

a CMD of an old population (resolved galaxy halo) shows:
- the RGB rising in $V$ as stars get redder.
- a sharp **edge** at the top: stars stop accumulating at the tip because they evolve quickly through the helium flash.

statistically, the I-band luminosity function shows a sharp discontinuity (the "tip"), and edge-detection algorithms (Sobel filter, Bayesian) locate it to $\sim 0.05$ mag precision.

## advantages over Cepheids

- works in **old populations**: globular clusters, halos, ellipticals, spheroidal dwarfs. anywhere there are old red giants.
- **less metallicity-sensitive**: $\sim 0.05$ mag/dex vs $\sim 0.2$ for Cepheids.
- **insensitive to crowding** at moderate distances (large stars, sparse field).
- **does not require multi-epoch photometry**: a single-epoch deep image gives the answer.
- competes with Cepheids in the same galaxies, providing a critical cross-check.

## disadvantages

- requires **resolving** individual giants. limit: $\sim 30$ Mpc with HST, $\sim 100$ Mpc with JWST in deep fields.
- needs a **clean halo field** away from disk dust.
- the tip detection itself has subtle systematics (smoothing kernel, slope of the LF beneath the tip, metal-rich populations adding scatter).

## the modern $H_0$ player

the Carnegie-Chicago Hubble Program (Freedman et al.) advocates TRGB as the primary local distance scale, calibrated against parallax-known Galactic globular clusters. their $H_0$ measurement:
$$H_0 \approx 69.8 \pm 1.7\,\text{km/s/Mpc}$$
intermediate between the Cepheid-anchored ($73.0$) and Planck-anchored ($67.4$) values. the disagreement among the three is at the heart of the modern $H_0$ tension.

JWST is now resolving TRGB stars in galaxies hosting SN Ia, providing the cleanest Cepheid-independent local ladder.

## see also

- [Cepheid period-luminosity relation](../../02_Zettel/Theory/Cepheid period-luminosity relation.html)
- [Variable stars as standard candles](../../02_Zettel/Theory/Variable stars as standard candles.html)
- [Type Ia supernovae as standard candles](../../02_Zettel/Theory/Type Ia supernovae as standard candles.html)
- [Distance ladder derivations](../../02_Zettel/Theory/Distance ladder derivations.html)
- [Color-magnitude diagrams of clusters](../../02_Zettel/Theory/Color-magnitude diagrams of clusters.html)
- [HR diagram](../../02_Zettel/Theory/HR diagram.html)
- [Hubble flow distances](../../02_Zettel/Theory/Hubble flow distances.html)
