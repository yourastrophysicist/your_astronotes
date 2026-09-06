---
layout: default
title: "H-alpha SFR tracer"
---

# H-alpha SFR tracer

up: [Pablo_03_Star_formation_in_galaxies](../../01_Literature/Lectures/Observational_Cosmology/Pablo_03_Star_formation_in_galaxies.html)

## physics

the Hα line at $\lambda = 6563$ Å is produced when a hydrogen atom recombines to the $n = 2$ level from $n = 3$. in a galaxy, these recombinations happen in HII regions around O stars, where the gas is ionized by Lyman-continuum photons ($h\nu > 13.6$ eV) and then cascades back down through the Balmer series.

because O stars have lifetimes of $\sim 5$–$20$ Myr, Hα luminosity is proportional to the *instantaneous* ionizing photon production rate, which is proportional to the *instantaneous* SFR (averaged over $\sim 10$ Myr). much shorter window than the [UV SFR tracer](../../02_Zettel/Theory/UV SFR tracer.html).

## Kennicutt 1998 calibration

for Salpeter IMF $0.1$–$100\,M_\odot$, solar metallicity, case B recombination:

$$\text{SFR}\;[M_\odot/\text{yr}] = 7.9 \times 10^{-42}\, L(\text{H}\alpha)\;[\text{erg}/\text{s}]$$

case B means recombination in an optically-thick nebula where Lyα photons do not escape directly (they are reabsorbed and re-emitted many times). case B gives Hα/Hβ = $2.86$ at $T = 10^4$ K, which is the basis of the [Balmer decrement](../../02_Zettel/Theory/Balmer decrement.html).

## advantages

- short timescale: gives you *current* SFR, not time-averaged
- narrow-band imaging possible at $z \lesssim 0.4$ in optical, then needs NIR
- easily detected from the ground at moderate redshift
- the line flux is unambiguously SF-related (minus some minor contamination from AGN narrow-line regions)

## problems

- **extinction**: Hα sits at 6563 Å, where $A_\lambda \sim 2.5$ mag for a galaxy with $A_V \sim 1$. always needs correction, typically via [Balmer decrement](../../02_Zettel/Theory/Balmer decrement.html)
- **contamination by [NII] 6548/6583**: hard to separate with narrow-band imaging; typical [NII]/Hα $\sim 0.3$ for MW, higher at high metallicity
- **stellar absorption**: the stellar continuum has an Hα absorption line that eats into the emission; must be modeled with SPS
- **AGN contamination**: Seyfert narrow lines add Hα unrelated to SF
- **Lyman-continuum escape**: if $f_{\text{esc}} > 0$, some ionizing photons leak out without making Hα, biasing SFR low

## when Hα is unavailable

at $z > 2.5$, Hα shifts into the NIR (K band at $z = 2.3$, beyond at higher $z$). then tracers switch to: [OII] (optical at $z \sim 1$), [UV SFR tracer](../../02_Zettel/Theory/UV SFR tracer.html) with dust correction, or [IR SFR tracer](../../02_Zettel/Theory/IR SFR tracer.html).

JWST NIRSpec now measures Hα routinely out to $z \sim 7$ (where it sits at $\sim 5\,\mu$m). this is one of the most important calibration inputs for high-$z$ SFR measurements.

## connections

- extinction correction: [Balmer decrement](../../02_Zettel/Theory/Balmer decrement.html)
- alternative high-$z$ tracer: [OII SFR tracer](../../02_Zettel/Theory/OII SFR tracer.html)
- ionizing physics: [Initial mass function](../../02_Zettel/Theory/Initial mass function.html)
- timescale: [Galaxy time scales](../../02_Zettel/Theory/Galaxy time scales.html)
- comparison: [SFR tracer comparison](../../02_Zettel/Theory/SFR tracer comparison.html)

## key references

- Kennicutt 1998 ARAA
- Kennicutt & Evans 2012 ARAA
- Osterbrock & Ferland 2006 (nebular physics)
