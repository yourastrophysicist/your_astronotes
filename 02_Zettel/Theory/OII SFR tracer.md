---
layout: default
title: "OII SFR tracer"
---

# [OII] SFR tracer

up: [Pablo_03_Star_formation_in_galaxies](../../01_Literature/Lectures/Observational_Cosmology/Pablo_03_Star_formation_in_galaxies.html)

## the line

[OII] $\lambda\lambda$ 3726, 3729 is a forbidden doublet of singly ionized oxygen. "forbidden" means it comes from a magnetic-dipole transition with very long radiative lifetime, only observable in the low-density ISM of HII regions ($n_e < 10^4\,\text{cm}^{-3}$).

it is not a recombination line like Hα, so its luminosity does not come directly from ionizing-photon count. instead, O⁺ is collisionally excited by electrons from HII regions, and [OII] luminosity depends on density, temperature, **and oxygen abundance**. this makes it a secondary SFR tracer with a metallicity-dependent calibration.

## why we use it anyway

Hα shifts out of the optical at $z > 0.4$ in the B band and out of the H band at $z > 2.5$. [OII], at 3727 Å, stays accessible from the optical all the way to $z \sim 1.6$. before JWST, [OII] was the standard SFR probe in the "redshift desert" ($z \sim 1$–$2$), especially for SDSS-era optical spectra.

## Kennicutt 1998 calibration

$$\text{SFR}\;[M_\odot/\text{yr}] = 1.4 \times 10^{-41}\, L([\text{OII}])\;[\text{erg}/\text{s}]$$

valid for solar metallicity, Salpeter IMF. the scatter is $\sim 0.3$ dex around the Hα-calibrated SFR. at lower metallicities, $L([\text{OII}])/\text{SFR}$ drops substantially (less oxygen to emit).

## known biases

- **metallicity dependence**: the $[\text{OII}]/\text{H}\alpha$ ratio varies by factor $\sim 2$ across the galaxy population. Mouhcine 2005, Kewley, Geller, Jansen 2004 give metallicity-aware recipes
- **extinction**: $A_{3727} \sim 1.6\, A_V$, so extinction at [OII] is $\sim 30\%$ larger than at Hα
- **ionization parameter**: at very high ionization, O becomes O++, suppressing [OII]. this matters for AGN and very young starbursts

## modern replacements

- $\text{H}\beta$ is now often used as the primary Balmer tracer at $z \sim 1$–$2$ with NIR spectrographs
- JWST NIRSpec + Hα has largely displaced [OII] for $z > 2$ work
- still used in SDSS / DEEP2 / zCOSMOS archival analyses

## connections

- recombination-line tracer: [H-alpha SFR tracer](../../02_Zettel/Theory/H-alpha SFR tracer.html)
- other high-$z$ lines: [Lyman alpha SFR tracer](../../02_Zettel/Theory/Lyman alpha SFR tracer.html), [Other SFR tracer lines](../../02_Zettel/Theory/Other SFR tracer lines.html)
- extinction: [Balmer decrement](../../02_Zettel/Theory/Balmer decrement.html), [Dust attenuation and extinction curves](../../02_Zettel/Theory/Dust attenuation and extinction curves.html)

## key references

- Kennicutt 1998 ARAA
- Kewley, Geller, Jansen 2004
- Mouhcine, Lewis, Ferguson 2005
