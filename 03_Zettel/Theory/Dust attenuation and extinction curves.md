---
layout: "default"
title: "Dust attenuation and extinction curves"
---
# dust attenuation and extinction curves

up: [[Pablo_03_Star_formation_in_galaxies]]

## extinction vs attenuation

**extinction** is what a single sightline through a uniform dust screen does to a point source. expressed as $A_\lambda$ in magnitudes, with typical normalization $R_V \equiv A_V / E(B-V)$. classic Milky Way: $R_V = 3.1$.

**attenuation** is what an *extended, unresolved* galaxy does to its stars: a mix of extinction along many sightlines, scattering back into the beam, and spatial correlation between stars and dust. attenuation curves are always *shallower* than extinction curves because UV-emitting young stars are preferentially embedded in dust.

for SED fitting, what we want is attenuation, because we can't resolve individual stars.

## the canonical curves

### Cardelli, Clayton, Mathis 1989 (MW extinction)
- classic parametrization $A_\lambda / A_V$ as a function of $R_V$
- 2175 Å UV bump prominent
- fit from MW diffuse ISM

### Calzetti 2000 (starburst attenuation)
- derived from IUE spectra of local starburst galaxies
- $R_V' \simeq 4.05$, no 2175 Å bump
- the workhorse for high-$z$ SED fitting
- used in the Meurer IRX-β relation

### SMC extinction (Pei 1992, Prevot 1984)
- steep UV rise, no 2175 Å bump
- low metallicity
- appropriate for Lyman-break galaxies and some low-$Z$ dwarfs

### Charlot & Fall 2000 (two-component)
- splits attenuation between a "birth cloud" (age $< 10$ Myr) with high extinction and a diffuse ISM with low extinction
- explains why Hα (emitted in HII regions) is more attenuated than the UV continuum

## what matters in practice

- **slope**: the UV/optical slope of the curve changes the inferred $\beta$ correction for a given $A_V$
- **2175 Å bump**: its presence or absence determines whether high-$z$ SED fits need MW-like or SMC-like priors. present in MW, absent in Calzetti and SMC
- **birth-cloud vs diffuse**: the Charlot-Fall split reproduces the observed $A_{\text{Hα}} > A_{\text{UV}}$ (a factor $\sim 2$ in mag)

## a useful rule of thumb

for a typical main-sequence galaxy at $z = 2$:
- $A_V \sim 1$
- $A_{1500} \sim 3$
- IR luminosity $\sim 3$–$10 \times L_{\text{UV, observed}}$

a starburst / LIRG can have $A_V \sim 3$, $A_{\text{1500}} \sim 10$, almost all light in the IR.

## connections

- used in: [[UV SFR tracer]], [[UV slope and IRX-beta relation]], [[H-alpha SFR tracer]]
- measurement in line spectra: [[Balmer decrement]]
- reprocessed output: [[IR SFR tracer]]
- enters all SED fitting: [[Stellar population synthesis]]

## key references

- Cardelli, Clayton, Mathis 1989 ApJ 345, 245
- Calzetti et al. 2000 ApJ 533, 682
- Charlot & Fall 2000 ApJ 539, 718
- Salim & Narayanan 2020 ARAA (attenuation-curve review)



<!-- sources:wiki-arxiv -->
## Wikipedia and arXiv sources

![Cosmic dust|500](https://commons.wikimedia.org/wiki/Special:FilePath/Porous_chondriteIDP.jpg?width=600)
*Lead figure of the Wikipedia article Cosmic dust* ([Commons file page](https://commons.wikimedia.org/wiki/File:Porous_chondriteIDP.jpg), The original uploader was Amara at English Wikipedia., CC BY 1.0, as used on the Wikipedia article [Cosmic dust](https://en.wikipedia.org/wiki/Cosmic_dust))

- **Cosmic dust**. "Cosmic dust – also called extraterrestrial dust, space dust, or star dust – is dust that occurs in outer space or has fallen onto Earth. Most cosmic dust particles measure between a few molecules and 0.1 mm (100 μm), such as micrometeoroids (<30 μm) and meteoroids (>30 μm)." ([Wikipedia](https://en.wikipedia.org/wiki/Cosmic_dust))
- **The Dust Attenuation Law in Galaxies**. "Understanding the properties and physical mechanisms that shape dust attenuation curves in galaxies is one of the fundamental questions of extragalactic astrophysics, with a great practical significance for deriving the physical properties of galaxies, such as the star formation rate and stellar mass." ([arXiv:2001.03181](https://arxiv.org/abs/2001.03181))

> Definitions quoted from Wikipedia (CC BY-SA 4.0) and the arXiv abstract. Figures credited in their captions.
<!-- /sources:wiki-arxiv -->

## Linked References

- [[Balmer decrement]]
- [[Dust extinction in nebulae]]
- [[Lyman alpha SFR tracer]]
- [[OII SFR tracer]]
- [[Other SFR tracer lines]]
- [[SED fitting for SFH]]
- [[SFR tracer comparison]]
- [[UV slope and IRX-beta relation]]
- [[Observational_Cosmology_MOC]]


