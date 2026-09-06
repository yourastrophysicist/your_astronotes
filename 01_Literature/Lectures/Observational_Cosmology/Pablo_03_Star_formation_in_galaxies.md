---
layout: default
title: "Pablo_03_Star_formation_in_galaxies"
---

# Pablo lecture 1B — star formation in galaxies

up: [Observational_Cosmology_MOC](../../../00_Atlas/Observational_Cosmology_MOC.html)
date: 2026-04-13
lecturer: Pablo Pérez-González (visiting)

## the question of the lecture

the previous lecture (1A) gave a static photograph of the galaxy population: bimodality, luminosity function, stellar mass function, main sequence. this one asks the *dynamic* question. **how do galaxies actually make their stars, how fast, with what kind of stars, and how do we measure it from the light they emit?**

the whole lecture revolves around converting an observable (a flux in some band) into a star formation rate (SFR) in $M_\odot/\text{yr}$. every wavelength traces a different timescale, a different stellar mass range, and is contaminated differently by dust. so a large part of the lecture is *tracer by tracer*, with calibrations.

## the central variables

- **star formation rate** $\psi(t) = dM_*/dt$ in $M_\odot/\text{yr}$. see [Star formation rate and sSFR](../../../02_Zettel/Theory/Star formation rate and sSFR.html).
- **specific SFR** $\text{sSFR} = \psi / M_*$, with units of $\text{yr}^{-1}$. measures how fast the galaxy is doubling its stellar mass.
- **star formation history** $\psi(t)$, the whole function. see [Star formation history parametrizations](../../../02_Zettel/Theory/Star formation history parametrizations.html).
- **initial mass function** $\xi(M)$, the distribution of stellar masses at formation. see [Initial mass function](../../../02_Zettel/Theory/Initial mass function.html).
- **chemical evolution** $Z(t)$. see [Chemical evolution of galaxies](../../../02_Zettel/Theory/Chemical evolution of galaxies.html).

all of them are entangled in the observable: a single SED is produced by integrating $\xi(M)$ over $\psi(t)$ convolved with stellar evolution tracks and reddened by dust, plus emission from gas and (sometimes) AGN. separating them is what stellar population synthesis tries to do. see [Stellar population synthesis](../../../02_Zettel/Theory/Stellar population synthesis.html).

## time scales in a galaxy

before computing anything, Pablo lists the time scales that matter, because SFR tracers are only useful if the tracer lifetime is shorter than the SFR variation timescale. see [Galaxy time scales](../../../02_Zettel/Theory/Galaxy time scales.html) for:

- Hubble time $t_H = 1/H_0 \sim 14$ Gyr
- dynamical time $t_{\text{dyn}} = \sqrt{3\pi/16 G \rho}$
- cooling time
- star formation time
- chemical enrichment time
- merger / dynamical-friction time

## SFR tracers block by block

every tracer is a window into the population of massive, short-lived stars, because those dominate ionization and heating budget.

### UV continuum (1500–2800 Å)
- traces O and B stars, timescale $\sim 10$–$100$ Myr
- [UV SFR tracer](../../../02_Zettel/Theory/UV SFR tracer.html): Kennicutt 1998 calibration $\text{SFR} = 1.4 \times 10^{-28} L_\nu(\text{UV})$
- but the UV is heavily dust-absorbed. to correct you use the [UV slope and IRX-beta relation](../../../02_Zettel/Theory/UV slope and IRX-beta relation.html) (Meurer 1999)
- dust correction depends on the assumed [Dust attenuation and extinction curves](../../../02_Zettel/Theory/Dust attenuation and extinction curves.html) (Calzetti 2000, Cardelli 1989, Charlot & Fall 2000)

### Hα recombination line (6563 Å)
- traces ionizing photons from O stars, timescale $\sim 10$ Myr only
- [H-alpha SFR tracer](../../../02_Zettel/Theory/H-alpha SFR tracer.html): $\text{SFR} = 7.9 \times 10^{-42} L(\text{H}\alpha)$
- still needs dust correction via [Balmer decrement](../../../02_Zettel/Theory/Balmer decrement.html) $F(\text{H}\alpha)/F(\text{H}\beta) = 2.86$ for case B

### Lyman α (1216 Å)
- also a recombination line, but resonantly scattered by neutral H
- [Lyman alpha SFR tracer](../../../02_Zettel/Theory/Lyman alpha SFR tracer.html): fraction that escapes depends on HI geometry and dust

### [OII] 3727 Å
- forbidden doublet, needs metallicity-dependent calibration
- [OII SFR tracer](../../../02_Zettel/Theory/OII SFR tracer.html): secondary but useful at intermediate $z$ where Hα redshifts out of the optical

### Paschen α, [CII] 158 μm, PAHs
- NIR and MIR features, less extinction-sensitive than the optical/UV
- [Other SFR tracer lines](../../../02_Zettel/Theory/Other SFR tracer lines.html)

### X-rays (0.5–10 keV)
- diffuse + HMXB emission, $\text{SFR} \propto L_X$, timescale $\sim 10$ Myr
- [X-ray SFR tracer](../../../02_Zettel/Theory/X-ray SFR tracer.html): Ranalli 2003, Mineo 2014

### total IR (8–1000 μm)
- reprocessed UV/optical by dust grains, the only SFR tracer that is *insensitive* to extinction (the absorbed photons *are* the tracer)
- [IR SFR tracer](../../../02_Zettel/Theory/IR SFR tracer.html): $\text{SFR} = 4.5 \times 10^{-44} L_{\text{TIR}}$ (Kennicutt 1998)
- Pablo emphasises his own Pérez-González 2006 work on the M81 SED

### radio (1.4 / 8.5 GHz)
- synchrotron from cosmic-ray electrons + thermal free-free from HII regions
- [Radio SFR tracer](../../../02_Zettel/Theory/Radio SFR tracer.html): advantage is immunity to extinction; disadvantage is contamination from AGN

### comparison across tracers
- [SFR tracer comparison](../../../02_Zettel/Theory/SFR tracer comparison.html): Cardiel 2003, Pérez-González 2006, Buat 2002, Sullivan 2000. IR-based SFR and Hα-based SFR agree on average but scatter grows at high luminosity, where dust obscuration is extreme.

## SFH tracers: how do we get $\psi(t)$ itself?

two approaches:

1. **resolved colour-magnitude diagrams** (Local Group, M31, SMC): [SFH from resolved CMDs](../../../02_Zettel/Theory/SFH from resolved CMDs.html). Ferguson 2002, Tolstoy 2009, Harris & Zaritsky 2004.
2. **broadband SED fitting** with stellar population synthesis models: assume a parametric SFH and fit. [SED fitting for SFH](../../../02_Zettel/Theory/SED fitting for SFH.html). Papovich 2001, Pérez-González 2008. the workhorse for everything beyond the Local Group.

## example galaxy classes

- [Starburst galaxies](../../../02_Zettel/Theory/Starburst galaxies.html): M82, NGC 1741, Wolf-Rayet galaxies, HII galaxies / BCDs
- [Post-starburst galaxies](../../../02_Zettel/Theory/Post-starburst galaxies.html): strong Balmer absorption, no emission, Kriek 2010
- [LIRGs ULIRGs HyLIRGs](../../../02_Zettel/Theory/LIRGs ULIRGs HyLIRGs.html): $L_{\text{IR}} > 10^{11}, 10^{12}, 10^{13} L_\odot$, Sanders & Mirabel 1996, Arp 220. most are mergers.
- [Galaxy mergers and SF](../../../02_Zettel/Theory/Galaxy mergers and SF.html): merger fraction rises with $z$, and major mergers drive the (U)LIRG population.

## stellar population synthesis

once you have an SFR and an IMF, you also need isochrones and stellar atmosphere libraries. the key codes are:

- Bruzual & Charlot 1993, 2003 (BC03)
- Starburst99 (Leitherer 1999)
- FSPS, Maraston 2005, MILES

Pablo stresses that the **ingredients** of any SPS model are: metallicity $Z$, IMF, SFH, age, attenuation, mass normalization. and that the big systematic uncertainty at $z \gtrsim 1$ is the TP-AGB contribution (the Maraston vs BC03 wars).

## chemical evolution, briefly

- closed-box vs inflow/outflow
- yields from SN II (α-elements), SN Ia (Fe peak), AGB (C, N, s-process)
- Tinsley 1979 framework: $\dot M_Z = -\psi Z + \int y_Z\, \xi\, \psi\, dm$
- see [Chemical evolution of galaxies](../../../02_Zettel/Theory/Chemical evolution of galaxies.html)

## what the student should take away

- SFR is always a tracer-calibration-extinction problem, never a direct measurement
- sSFR is what sorts galaxies onto the main sequence and the red sequence
- dust is the villain in the UV/optical and the hero in the IR: the *same* absorbed photons re-emerge as IR emission
- a single galaxy SED is a convolution of SFH, IMF, metallicity, dust, geometry. fitting it is genuinely underdetermined without multi-band data spanning UV to FIR
- mergers and starbursts are the extreme tail of the SFR distribution and dominate the cosmic SFR budget above $z \sim 1$ despite being rare

## connections

- previous lecture: [Pablo_02_Statistical_properties_of_galaxies](../../../01_Literature/Lectures/Observational_Cosmology/Pablo_02_Statistical_properties_of_galaxies.html)
- integral of SFR over the whole universe: [Cosmic star formation history](../../../02_Zettel/Theory/Cosmic star formation history.html)
- locus on which star-forming galaxies live: [Galaxy main sequence of star formation](../../../02_Zettel/Theory/Galaxy main sequence of star formation.html)
- SFR $\leftrightarrow$ gas: [Schmidt-Kennicutt law](../../../02_Zettel/Theory/Schmidt-Kennicutt law.html)
- MOC: [Observational_Cosmology_MOC](../../../00_Atlas/Observational_Cosmology_MOC.html)

## key references

- Kennicutt 1998 ARAA (the tracer-calibration bible)
- Kennicutt & Evans 2012 ARAA (updated review)
- Madau & Dickinson 2014 ARAA (cosmic SFH)
- Conroy 2013 ARAA (stellar population synthesis)
- Calzetti 2013 (SFR measurement review)
