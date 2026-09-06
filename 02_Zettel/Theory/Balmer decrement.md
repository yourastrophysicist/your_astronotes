---
layout: default
title: "Balmer decrement"
---

# Balmer decrement

up: [Pablo_03_Star_formation_in_galaxies](../../01_Literature/Lectures/Observational_Cosmology/Pablo_03_Star_formation_in_galaxies.md) · [H-alpha SFR tracer](../../02_Zettel/Theory/H-alpha SFR tracer.md)

## the idea

hydrogen recombination in HII regions produces Balmer lines in a *predictable* ratio, because the atomic transition probabilities are fixed. so any deviation from that predicted ratio is due to wavelength-dependent attenuation by dust between the nebula and us.

for case B recombination at $T = 10^4$ K, $n_e = 10^2$–$10^4\,\text{cm}^{-3}$:

$$\left[\frac{F(\text{H}\alpha)}{F(\text{H}\beta)}\right]_{\text{intrinsic}} = 2.86$$

any observed ratio above 2.86 means dust is suppressing Hβ more than Hα (because Hβ at 4861 Å is bluer than Hα at 6563 Å and dust extinction rises toward the blue).

## the correction

define $E(B-V)_{\text{gas}}$ from the observed ratio $R_{\text{obs}} \equiv F(\text{H}\alpha)/F(\text{H}\beta)_{\text{obs}}$ using an assumed extinction curve $k(\lambda)$:

$$E(B-V)_{\text{gas}} = \frac{2.5}{k(\text{H}\beta) - k(\text{H}\alpha)} \log_{10}\!\left(\frac{R_{\text{obs}}}{2.86}\right)$$

for the Calzetti 2000 curve, $k(\text{H}\alpha) = 3.33$, $k(\text{H}\beta) = 4.60$, so:

$$E(B-V)_{\text{gas}} = \frac{2.5}{1.27} \log_{10}\!\left(\frac{R_{\text{obs}}}{2.86}\right)$$

and $A_{\text{H}\alpha} = k(\text{H}\alpha) \cdot E(B-V)_{\text{gas}} = 3.33 \, E(B-V)_{\text{gas}}$.

## a worked example

MW $E(B-V)_{\text{gas}} = 0.4$ → $R_{\text{obs}} \simeq 4.0$. correction factor on Hα luminosity: $\times 10^{0.4 \cdot 3.33 \cdot 0.4} = 10^{0.53} \simeq 3.4$. so ignoring the decrement underestimates SFR by a factor $\sim 3$.

for a LIRG with $A_V \sim 3$ in the diffuse ISM and possibly $A_V \sim 6$ in the HII regions (Charlot-Fall 2-component model), the Balmer-decrement correction on Hα can be $\times 10$–$\times 100$.

## gas vs stars

the **gas** $E(B-V)_{\text{gas}}$ measured from Balmer decrement is generally *larger* than the **stellar** $E(B-V)_{\text{star}}$ measured from continuum slope, because HII regions live deeper in birth clouds (see Charlot & Fall 2000 in [Dust attenuation and extinction curves](../../02_Zettel/Theory/Dust attenuation and extinction curves.md)). typical ratio, from Calzetti 2000:

$$E(B-V)_{\text{star}} \simeq 0.44\, E(B-V)_{\text{gas}}$$

## failure modes

- if $R_{\text{obs}} < 2.86$, you have a measurement problem (noise, stellar absorption under Hβ is often the culprit)
- electron-density or temperature deviations push the intrinsic ratio slightly off 2.86 (to 2.75 at $T = 2 \times 10^4$ K)
- Hγ/Hβ can be used as a sanity check: intrinsic value 0.466 (case B, $T = 10^4$ K)

## connections

- primary use: [H-alpha SFR tracer](../../02_Zettel/Theory/H-alpha SFR tracer.md)
- extinction curves: [Dust attenuation and extinction curves](../../02_Zettel/Theory/Dust attenuation and extinction curves.md)
- alternative correction: [UV slope and IRX-beta relation](../../02_Zettel/Theory/UV slope and IRX-beta relation.md)

## key references

- Osterbrock & Ferland 2006, AGN2 Chapter 4
- Calzetti 2001 PASP (application to starburst galaxies)
- Groves, Brinchmann, Walcher 2012 (stellar absorption correction)
