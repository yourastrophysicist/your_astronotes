---
layout: "default"
title: "Pablo_03_Star_formation_in_galaxies"
---
# Pablo lecture 1B — star formation in galaxies

up: [Observational_Cosmology_MOC](../../../04_Atlas/Observational_Cosmology_MOC.html)
date: 2026-04-13
lecturer: Pablo Pérez-González (visiting)

## the question of the lecture

the previous lecture (1A) gave a static photograph of the galaxy population: bimodality, luminosity function, stellar mass function, main sequence. this one asks the *dynamic* question. **how do galaxies actually make their stars, how fast, with what kind of stars, and how do we measure it from the light they emit?**

the whole lecture revolves around converting an observable (a flux in some band) into a star formation rate (SFR) in $M_\odot/\text{yr}$. every wavelength traces a different timescale, a different stellar mass range, and is contaminated differently by dust. so a large part of the lecture is *tracer by tracer*, with calibrations.

## the central variables

- **star formation rate** $\psi(t) = dM_*/dt$ in $M_\odot/\text{yr}$. see [Star formation rate and sSFR](../../../03_Zettel/Theory/Star%20formation%20rate%20and%20sSFR.html).
- **specific SFR** $\text{sSFR} = \psi / M_*$, with units of $\text{yr}^{-1}$. measures how fast the galaxy is doubling its stellar mass.
- **star formation history** $\psi(t)$, the whole function. see [Star formation history parametrizations](../../../03_Zettel/Theory/Star%20formation%20history%20parametrizations.html).
- **initial mass function** $\xi(M)$, the distribution of stellar masses at formation. see [Initial mass function](../../../03_Zettel/Theory/Initial%20mass%20function.html).
- **chemical evolution** $Z(t)$. see [Chemical evolution of galaxies](../../../03_Zettel/Theory/Chemical%20evolution%20of%20galaxies.html).

all of them are entangled in the observable: a single SED is produced by integrating $\xi(M)$ over $\psi(t)$ convolved with stellar evolution tracks and reddened by dust, plus emission from gas and (sometimes) AGN. separating them is what stellar population synthesis tries to do. see [Stellar population synthesis](../../../03_Zettel/Theory/Stellar%20population%20synthesis.html).

## time scales in a galaxy

before computing anything, Pablo lists the time scales that matter, because SFR tracers are only useful if the tracer lifetime is shorter than the SFR variation timescale. see [Galaxy time scales](../../../03_Zettel/Theory/Galaxy%20time%20scales.html) for:

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
- [UV SFR tracer](../../../03_Zettel/Theory/UV%20SFR%20tracer.html): Kennicutt 1998 calibration $\text{SFR} = 1.4 \times 10^{-28} L_\nu(\text{UV})$
- but the UV is heavily dust-absorbed. to correct you use the [UV slope and IRX-beta relation](../../../03_Zettel/Theory/UV%20slope%20and%20IRX-beta%20relation.html) (Meurer 1999)
- dust correction depends on the assumed [Dust attenuation and extinction curves](../../../03_Zettel/Theory/Dust%20attenuation%20and%20extinction%20curves.html) (Calzetti 2000, Cardelli 1989, Charlot & Fall 2000)

### Hα recombination line (6563 Å)
- traces ionizing photons from O stars, timescale $\sim 10$ Myr only
- [H-alpha SFR tracer](../../../03_Zettel/Theory/H-alpha%20SFR%20tracer.html): $\text{SFR} = 7.9 \times 10^{-42} L(\text{H}\alpha)$
- still needs dust correction via [Balmer decrement](../../../03_Zettel/Theory/Balmer%20decrement.html) $F(\text{H}\alpha)/F(\text{H}\beta) = 2.86$ for case B

### Lyman α (1216 Å)
- also a recombination line, but resonantly scattered by neutral H
- [Lyman alpha SFR tracer](../../../03_Zettel/Theory/Lyman%20alpha%20SFR%20tracer.html): fraction that escapes depends on HI geometry and dust

### [OII] 3727 Å
- forbidden doublet, needs metallicity-dependent calibration
- [OII SFR tracer](../../../03_Zettel/Theory/OII%20SFR%20tracer.html): secondary but useful at intermediate $z$ where Hα redshifts out of the optical

### Paschen α, [CII] 158 μm, PAHs
- NIR and MIR features, less extinction-sensitive than the optical/UV
- [Other SFR tracer lines](../../../03_Zettel/Theory/Other%20SFR%20tracer%20lines.html)

### X-rays (0.5–10 keV)
- diffuse + HMXB emission, $\text{SFR} \propto L_X$, timescale $\sim 10$ Myr
- [X-ray SFR tracer](../../../03_Zettel/Theory/X-ray%20SFR%20tracer.html): Ranalli 2003, Mineo 2014

### total IR (8–1000 μm)
- reprocessed UV/optical by dust grains, the only SFR tracer that is *insensitive* to extinction (the absorbed photons *are* the tracer)
- [IR SFR tracer](../../../03_Zettel/Theory/IR%20SFR%20tracer.html): $\text{SFR} = 4.5 \times 10^{-44} L_{\text{TIR}}$ (Kennicutt 1998)
- Pablo emphasises his own Pérez-González 2006 work on the M81 SED

### radio (1.4 / 8.5 GHz)
- synchrotron from cosmic-ray electrons + thermal free-free from HII regions
- [Radio SFR tracer](../../../03_Zettel/Theory/Radio%20SFR%20tracer.html): advantage is immunity to extinction; disadvantage is contamination from AGN

### comparison across tracers
- [SFR tracer comparison](../../../03_Zettel/Theory/SFR%20tracer%20comparison.html): Cardiel 2003, Pérez-González 2006, Buat 2002, Sullivan 2000. IR-based SFR and Hα-based SFR agree on average but scatter grows at high luminosity, where dust obscuration is extreme.

## SFH tracers: how do we get $\psi(t)$ itself?

two approaches:

1. **resolved colour-magnitude diagrams** (Local Group, M31, SMC): [SFH from resolved CMDs](../../../03_Zettel/Theory/SFH%20from%20resolved%20CMDs.html). Ferguson 2002, Tolstoy 2009, Harris & Zaritsky 2004.
2. **broadband SED fitting** with stellar population synthesis models: assume a parametric SFH and fit. [SED fitting for SFH](../../../03_Zettel/Theory/SED%20fitting%20for%20SFH.html). Papovich 2001, Pérez-González 2008. the workhorse for everything beyond the Local Group.

## example galaxy classes

- [Starburst galaxies](../../../03_Zettel/Theory/Starburst%20galaxies.html): M82, NGC 1741, Wolf-Rayet galaxies, HII galaxies / BCDs
- [Post-starburst galaxies](../../../03_Zettel/Theory/Post-starburst%20galaxies.html): strong Balmer absorption, no emission, Kriek 2010
- [LIRGs ULIRGs HyLIRGs](../../../03_Zettel/Theory/LIRGs%20ULIRGs%20HyLIRGs.html): $L_{\text{IR}} > 10^{11}, 10^{12}, 10^{13} L_\odot$, Sanders & Mirabel 1996, Arp 220. most are mergers.
- [Galaxy mergers and SF](../../../03_Zettel/Theory/Galaxy%20mergers%20and%20SF.html): merger fraction rises with $z$, and major mergers drive the (U)LIRG population.

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
- see [Chemical evolution of galaxies](../../../03_Zettel/Theory/Chemical%20evolution%20of%20galaxies.html)

## what the student should take away

- SFR is always a tracer-calibration-extinction problem, never a direct measurement
- sSFR is what sorts galaxies onto the main sequence and the red sequence
- dust is the villain in the UV/optical and the hero in the IR: the *same* absorbed photons re-emerge as IR emission
- a single galaxy SED is a convolution of SFH, IMF, metallicity, dust, geometry. fitting it is genuinely underdetermined without multi-band data spanning UV to FIR
- mergers and starbursts are the extreme tail of the SFR distribution and dominate the cosmic SFR budget above $z \sim 1$ despite being rare

## connections

- previous lecture: [Pablo_02_Statistical_properties_of_galaxies](./Pablo_02_Statistical_properties_of_galaxies.html)
- integral of SFR over the whole universe: [Cosmic star formation history](../../../03_Zettel/Theory/Cosmic%20star%20formation%20history.html)
- locus on which star-forming galaxies live: [Galaxy main sequence of star formation](../../../03_Zettel/Theory/Galaxy%20main%20sequence%20of%20star%20formation.html)
- SFR $\leftrightarrow$ gas: [Schmidt-Kennicutt law](../../../03_Zettel/Theory/Schmidt-Kennicutt%20law.html)
- MOC: [Observational_Cosmology_MOC](../../../04_Atlas/Observational_Cosmology_MOC.html)

## key references

- Kennicutt 1998 ARAA (the tracer-calibration bible)
- Kennicutt & Evans 2012 ARAA (updated review)
- Madau & Dickinson 2014 ARAA (cosmic SFH)
- Conroy 2013 ARAA (stellar population synthesis)
- Calzetti 2013 (SFR measurement review)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (20)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../../03_Zettel/Theory/Balmer%20decrement.html" class="backlink-item">Balmer decrement</a></li>
    <li class="backlink-item-wrap"><a href="../../../03_Zettel/Theory/Chemical%20evolution%20of%20galaxies.html" class="backlink-item">Chemical evolution of galaxies</a></li>
    <li class="backlink-item-wrap"><a href="../../../03_Zettel/Theory/Dust%20attenuation%20and%20extinction%20curves.html" class="backlink-item">Dust attenuation and extinction curves</a></li>
    <li class="backlink-item-wrap"><a href="../../../03_Zettel/Theory/Galaxy%20mergers%20and%20SF.html" class="backlink-item">Galaxy mergers and SF</a></li>
    <li class="backlink-item-wrap"><a href="../../../03_Zettel/Theory/Galaxy%20time%20scales.html" class="backlink-item">Galaxy time scales</a></li>
    <li class="backlink-item-wrap"><a href="../../../03_Zettel/Theory/LIRGs%20ULIRGs%20HyLIRGs.html" class="backlink-item">LIRGs ULIRGs HyLIRGs</a></li>
    <li class="backlink-item-wrap"><a href="../../../03_Zettel/Theory/Lyman%20alpha%20SFR%20tracer.html" class="backlink-item">Lyman alpha SFR tracer</a></li>
    <li class="backlink-item-wrap"><a href="../../../03_Zettel/Theory/OII%20SFR%20tracer.html" class="backlink-item">OII SFR tracer</a></li>
    <li class="backlink-item-wrap"><a href="../../../03_Zettel/Theory/Other%20SFR%20tracer%20lines.html" class="backlink-item">Other SFR tracer lines</a></li>
    <li class="backlink-item-wrap"><a href="../../../03_Zettel/Theory/Post-starburst%20galaxies.html" class="backlink-item">Post-starburst galaxies</a></li>
    <li class="backlink-item-wrap"><a href="../../../03_Zettel/Theory/Radio%20SFR%20tracer.html" class="backlink-item">Radio SFR tracer</a></li>
    <li class="backlink-item-wrap"><a href="../../../03_Zettel/Theory/SED%20fitting%20for%20SFH.html" class="backlink-item">SED fitting for SFH</a></li>
    <li class="backlink-item-wrap"><a href="../../../03_Zettel/Theory/SFH%20from%20resolved%20CMDs.html" class="backlink-item">SFH from resolved CMDs</a></li>
    <li class="backlink-item-wrap"><a href="../../../03_Zettel/Theory/SFR%20tracer%20comparison.html" class="backlink-item">SFR tracer comparison</a></li>
    <li class="backlink-item-wrap"><a href="../../../03_Zettel/Theory/Star%20formation%20history%20parametrizations.html" class="backlink-item">Star formation history parametrizations</a></li>
    <li class="backlink-item-wrap"><a href="../../../03_Zettel/Theory/Star%20formation%20rate%20and%20sSFR.html" class="backlink-item">Star formation rate and sSFR</a></li>
    <li class="backlink-item-wrap"><a href="../../../03_Zettel/Theory/Starburst%20galaxies.html" class="backlink-item">Starburst galaxies</a></li>
    <li class="backlink-item-wrap"><a href="../../../03_Zettel/Theory/UV%20slope%20and%20IRX-beta%20relation.html" class="backlink-item">UV slope and IRX-beta relation</a></li>
    <li class="backlink-item-wrap"><a href="../../../03_Zettel/Theory/X-ray%20SFR%20tracer.html" class="backlink-item">X-ray SFR tracer</a></li>
    <li class="backlink-item-wrap"><a href="../../../04_Atlas/Observational_Cosmology_MOC.html" class="backlink-item">Observational_Cosmology_MOC</a></li>
  </ul>
</div>

