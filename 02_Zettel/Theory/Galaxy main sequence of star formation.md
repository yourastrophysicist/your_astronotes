---
layout: default
title: "Galaxy main sequence of star formation"
---

# galaxy main sequence of star formation

up: [Pablo_02_Statistical_properties_of_galaxies](../../01_Literature/Lectures/Observational_Cosmology/Pablo_02_Statistical_properties_of_galaxies.md)

## the relation

plot $\log \text{SFR}$ vs $\log M_*$ for star-forming galaxies. they fall on a tight, nearly linear relation called the **main sequence (MS)**:

$$\text{SFR} \propto M_*^\alpha, \quad \alpha \approx 0.7\text{-}1.0$$

with intrinsic scatter $\sim 0.3$ dex (a factor of 2). this is much tighter than you would naively expect, given the diversity of galaxy histories.

normalization rises with redshift: at fixed $M_*$, the typical SFR was $\sim 20$ times higher at $z = 2$ than today. the slope $\alpha$ stays roughly constant.

## who measured it

- Brinchmann et al. 2004, Salim et al. 2007: SDSS local MS
- Noeske et al. 2007: AEGIS, MS at $z \sim 0.2$–$1.1$
- Daddi et al. 2007: GOODS, MS at $z \sim 2$
- **Rodighiero et al. 2011**, A&A 528, L12: at $1.5 < z < 2.5$, distinguishes MS from **starbursts** (galaxies $\geq 4 \times$ above the MS, accounting for $\sim 2\%$ of the population but $\sim 10\%$ of the cosmic SFR). this is the slide pablo shows.
- **Santini et al. 2017**, ApJ 847, 76: MS extended to $z = 6$ using lensing-recovered low-mass galaxies (CLASH, Frontier Fields). slope flattens at low mass; lensing magnifies sources below the field-survey detection limit and recovers the faint end.

## why the tightness matters

the small scatter ($\sim 0.3$ dex) means that, at any given epoch, *most* galaxies are in a quasi-equilibrium between gas accretion and star formation. they are not a collection of bursting events; the SFR is set by the gas reservoir, which is set by accretion, which is set by halo growth. this is the **bathtub model** of galaxy evolution.

starbursts (above the MS) are the *out-of-equilibrium* objects, mostly major mergers.

quenched galaxies (below the MS) are *post-equilibrium*, having shut off star formation entirely (these are the [Red sequence and blue cloud](../../02_Zettel/Theory/Red sequence and blue cloud.md) red sequence).

## three modes in the SFR-$M_*$ plane

Rodighiero 2011 fig. 1 shows three populations:

- **MS** (black): $\sim 90\%$ of star-forming galaxies, slope $\sim 0.8$
- **starbursts** (red): SFR $\geq 4 \times$ MS, the merger-driven extreme
- **strong starbursts** (open star): SFR $\geq 10 \times$ MS, ULIRGs

the MS line on his plot is solid; the dashed and dotted lines are $4\times$ and $10\times$ above. the inset replots in specific SFR (sSFR = SFR / $M_*$), making the threshold horizontal.

## what i remember

- $\alpha \sim 0.7$–$1.0$, with weak evolution
- normalization rises by $\sim 20\times$ from $z = 0$ to $z = 2$
- $\sigma_{\text{MS}} \approx 0.3$ dex, evidence of equilibrium
- starbursts are rare ($\sim 2\%$) but contribute $\sim 10\%$ to cosmic SFR

## connections

- driver: [Cosmic star formation history](../../02_Zettel/Theory/Cosmic star formation history.md) (the integral over the MS gives $\rho_{SFR}$)
- mass side: [Stellar mass function](../../02_Zettel/Theory/Stellar mass function.md)
- equilibrium picture: bathtub model, gas accretion vs feedback (see [Halo gravity suppression of galaxy formation](../../02_Zettel/Theory/Halo gravity suppression of galaxy formation.md))
- companion scaling relations: [Fundamental plane of ellipticals](../../02_Zettel/Theory/Fundamental plane of ellipticals.md), [Tully-Fisher relation](../../02_Zettel/Theory/Tully-Fisher relation.md), [Schmidt-Kennicutt law](../../02_Zettel/Theory/Schmidt-Kennicutt law.md)

## key references

- Rodighiero et al. 2011, A&A 528, L12
- Santini et al. 2017, ApJ 847, 76
- Speagle et al. 2014 (compilation of MS measurements)
- Daddi et al. 2007 (high-$z$ MS)
