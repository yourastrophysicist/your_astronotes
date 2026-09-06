---
layout: default
title: "Schechter K-band luminosity function"
---

# schechter k-band luminosity function

up: [Pablo_02_Statistical_properties_of_galaxies](../../01_Literature/Lectures/Observational_Cosmology/Pablo_02_Statistical_properties_of_galaxies.md) · [Schechter function](../../02_Zettel/Theory/Schechter function.md)

## the canonical local k-band lf

Smith, Loveday & Cross 2009 measured the K-band LF using UKIDSS LAS combined with SDSS spectroscopic redshifts. they fit a single Schechter:

| parameter | value | unit |
|---|---|---|
| $M^*_K$ | $-23.19 \pm 0.04$ | Vega |
| $\alpha$ | $-0.81 \pm 0.04$ | (slope) |
| $\phi^*$ | $0.0166 \pm 0.0008$ | $h^3\, \text{Mpc}^{-3}$ |

these are the numbers pablo wants in the back pocket. they are the *low-$z$ anchor* against which higher-$z$ K-band LFs (Cirasuolo 2010, Mortlock 2017) get compared.

## why k-band

K is $2.2$ μm, near the peak of the stellar SED for evolved populations. it is

- relatively immune to dust attenuation (extinction $A_K \approx 0.1\, A_V$)
- dominated by old stars, so it tracks **stellar mass** with $M_*/L_K$ varying by only a factor of $\sim 2$ across galaxy types (vs a factor of $\sim 10$ in B-band)

so the K-band LF is the best optical/NIR proxy for the underlying [Stellar mass function](../../02_Zettel/Theory/Stellar mass function.md).

## what these numbers mean

with $M^*_K = -23.19$, the $L^*$ galaxy has $L^*_K \approx 4.5 \times 10^{10}\, L_\odot$, and assuming $M_*/L_K \approx 0.7$, $M^*_* \approx 3 \times 10^{10}\, M_\odot$. so the K-band $L^*$ corresponds to roughly the milky way's stellar mass.

with $\phi^* = 0.0166\, h^3\, \text{Mpc}^{-3}$, the number density of $L^*$ galaxies (within a factor of 2 of $L^*$) is $\sim 10^{-2}\, h^3\,\text{Mpc}^{-3}$. take $h = 0.7$ and you get $\sim 5 \times 10^{-3}\, \text{Mpc}^{-3}$, which is the standard "one $L^*$ galaxy per (5 Mpc)$^3$" estimate.

## the k-band lf is shallow

$\alpha = -0.81$ is *flatter* than the typical optical LF ($\alpha \sim -1.2$). that is because K-band is biased toward older, more massive populations, so the dwarf-galaxy contribution to $\alpha$ is suppressed. the *intrinsic* faint-end slope at fixed stellar mass is steeper.

## connections

- the form: [Schechter function](../../02_Zettel/Theory/Schechter function.md), [Schechter function in magnitudes](../../02_Zettel/Theory/Schechter function in magnitudes.md)
- estimator that produced these: [1Vmax estimator](../../02_Zettel/Theory/1Vmax estimator.md)
- mass version: [Stellar mass function](../../02_Zettel/Theory/Stellar mass function.md)
- band comparison: [Galaxy counts at different wavelengths](../../02_Zettel/Theory/Galaxy counts at different wavelengths.md) (K-band counts at the Durham compilation [counts.html](https://astro.dur.ac.uk/~nm/pubhtml/counts/counts.html))

## key references

- Smith, Loveday & Cross 2009, MNRAS 397, 868
- Cole et al. 2001 (earlier 2MASS K-band LF)
- Cirasuolo et al. 2010 (K-band LF to $z \sim 4$)
