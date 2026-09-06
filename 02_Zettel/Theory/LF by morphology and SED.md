---
layout: default
title: "LF by morphology and SED"
---

# LF by morphology and SED

up: [Pablo_02_Statistical_properties_of_galaxies](../../01_Literature/Lectures/Observational_Cosmology/Pablo_02_Statistical_properties_of_galaxies.md) · [Schechter function](../../02_Zettel/Theory/Schechter function.md)

## the total LF hides a sum

the global galaxy LF is a *sum* of LFs for distinct populations. when you split the sample by morphological type, color, or SED template, each subsample has its own Schechter parameters. the sum of subsamples adds up to the total but the individual shapes are very different.

## driver et al. 2006 (Millennium Galaxy Catalog)

Driver et al. 2006 used MGC visual morphologies to split the local LF:

| type | $M^*_B$ | $\alpha$ | dominant where |
|---|---|---|---|
| ellipticals | $-20.6$ | $-0.5$ | $L > L^*$ (bright end) |
| early spirals (Sa-Sb) | $-20.3$ | $-1.0$ | knee |
| late spirals (Sc-Sd) | $-20.1$ | $-1.4$ | knee + faint |
| irregulars | $-18.5$ | $-1.7$ | faint end (steep) |

so the **bright end** of the total LF is dominated by ellipticals (red, passive), and the **faint end** is dominated by irregulars and late spirals (blue, star-forming, with a steep slope).

this matters: if you measure the "global $\alpha$" you get a number that is a weighted average. quenching mechanisms work on different parts of the LF differently, and the only way to see them is to split.

## wolf et al. 2003 (COMBO-17)

Wolf 2003 used the COMBO-17 17-filter survey to assign each galaxy an SED template (E, Sbc, Scd, Im, starburst), then measured the LF *per template* to $z \sim 1.2$. they found:

- the **red sequence LF** at $z \sim 1$ has a brighter $L^*$ than today (massive ellipticals were brighter in the past per their stellar populations were younger)
- the **blue cloud LF** has a roughly constant shape but the $\phi^*$ rises with $z$ (more star-forming galaxies in the past)

this is the LF realization of the [Color bimodality of galaxies](../../02_Zettel/Theory/Color bimodality of galaxies.md) story: each subpopulation evolves independently.

## sersic-index split

instead of visual morphology, you can split on Sersic index $n$ from the surface brightness profile $I(r) \propto \exp[-(r/r_e)^{1/n}]$:

- $n = 1$: exponential disk (spirals)
- $n = 4$: de Vaucouleurs (ellipticals)
- $n > 2.5$ vs $n < 2.5$ is a common automated split

this gives basically the same LF decomposition as visual morphology, with the advantage of being machine-classifiable and applicable at high $z$ where visual morphology is unreliable.

## why it matters statistically

the Schechter parameters $(\phi^*, L^*, \alpha)$ are not "the LF parameters of the universe". they are the LF parameters *of the sample you happen to have selected*. always quote them with the sample definition (band, $z$ range, color cut, morphology).

## connections

- baseline: [Schechter function](../../02_Zettel/Theory/Schechter function.md)
- driver of the morphological split: [Galaxy color, density and morphology](../../02_Zettel/Theory/Galaxy color, density and morphology.md)
- counts version of the same: [Driver 1998 counts by morphology](../../02_Zettel/Theory/Driver 1998 counts by morphology.md)
- bright-end excess at high $z$: [Double power-law modified Schechter](../../02_Zettel/Theory/Double power-law modified Schechter.md)

## key references

- Driver et al. 2006, MNRAS 368, 414 (MGC LF by type)
- Wolf et al. 2003, A&A 401, 73 (COMBO-17 LF per SED)
- Bell et al. 2003 (red and blue SMF separation)
