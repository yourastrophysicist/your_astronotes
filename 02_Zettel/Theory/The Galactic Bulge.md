---
layout: default
name: The Galactic Bulge
description: central stellar component of the Milky Way; old (~10 Gyr), metal-rich, alpha-enhanced, with an unresolved age debate from microlensing vs HST photometry
---

the **Galactic bulge** is the central stellar component of the Milky Way, located within the inner few kiloparsecs around the Galactic centre. it is a dense, gravitationally bound stellar system dominated by old stars. the bulge is one of the three main baryonic components of the Galaxy together with the disk and the halo, and its age + metallicity tell us about the **inner Galactic formation history**.

![L19_p02_bulge_mass-02](../../assets/images/L19_p02_bulge_mass-02.png)

## mass budget of the Milky Way

| component | mass |
|---|---|
| disk | $\sim 6 \times 10^{10}\,M_\odot$ |
| **bulge** | $\sim 10^{10}\,M_\odot$ |
| halo (stellar) | $\sim 10^{9}\,M_\odot$ |

the bulge is small compared to the disk in mass but contains a high stellar density, making it one of the most crowded fields in any extragalactic photometric study.

note: there is no sharp distinction between bulge and disk. by convention, the term refers to the inner $\sim 3$ kpc of our Galaxy.

## why the age of the bulge matters

the age of the Galactic bulge directly constrains how the Milky Way formed and evolved. it is a fundamental constraint linking stellar populations, Galactic dynamics, and cosmological formation scenarios of the Milky Way:

- **galaxy formation history**: tells us whether the inner Galaxy formed rapidly at early times (collapse, mergers) or more gradually through secular evolution of the disk (bar formation + buckling).
- **link to cosmology**: if the bulge is predominantly old ($\geq 10$ Gyr), it traces star formation at high redshift and provides a local benchmark for galaxy formation in the early Universe.
- **chemical evolution**: combined with $[\alpha/{\rm Fe}]$, age constrains the timescale of chemical enrichment and the relative roles of [Type II vs Type Ia supernovae](../../02_Zettel/Theory/Cepheids and supernovae.html).
- **structure-evolution connection**: helps disentangle classical bulge vs bar-driven (pseudo-bulge) components.
- **calibration of stellar populations**: a key laboratory for testing stellar evolution models at high metallicity and for interpreting [unresolved stellar populations](../../02_Zettel/Theory/Resolved vs unresolved stellar populations.html) in external galaxies.

## the CMD of the bulge: observational challenges

reading the CMD of the bulge is hard. two challenges dominate:

### 1. field star contamination

the bulge sits behind the Galactic disk along our line of sight. the bulge CMD is significantly contaminated by foreground disk stars, contaminating the bulge MS turn-off region. critically, this affects accurate age estimates of the bulge population (Zoccali, with bulge-TO + disk-MS + disk-RC + bulge-RC + RGB all visible).

![L19_p06_bulge_CMD_disk_contam-06](../../assets/images/L19_p06_bulge_CMD_disk_contam-06.png)

### 2. differential reddening

photometry of bulge stars typically suffers from low-scale **differential reddening**. patchy dust in front of the bulge field artificially broadens the CMD sequences and can be confused with multiple populations or metallicity spreads. see [Effects of differential reddening on CMD analysis](../../02_Zettel/Theory/Effects of differential reddening on CMD analysis.html).

### approaches to decontamination

two complementary approaches handle the field contamination problem:

**(I) statistical decontamination** (Valenti et al. 2013): subtract a control field CMD from the bulge field CMD, leaving only the bulge population. this approach gives a clean bulge CMD on average but loses individual-star information.

![L19_p07_decontamination_Valenti-07](../../assets/images/L19_p07_decontamination_Valenti-07.png)

**(II) proper motions** (Clarkson et al. 2008): bulge stars and disk stars have distinct kinematics. relative proper motions from multi-epoch HST imaging show two distinct distributions in the proper-motion diagram, which can be used to select bulge members with high purity. this is now the gold-standard method.

![L19_p09_PM_Clarkson-09](../../assets/images/L19_p09_PM_Clarkson-09.png)

## the Clarkson et al. 2008 result: an old bulge

using HST proper-motion-cleaned CMDs of $\sim 15{,}000$ bulge stars in the SWEEPS field (with $\mu_l < -2.0$ mas/yr selection), Clarkson et al. 2008 fit isochrones of varying age + metallicity to the bulge MS turn-off. the conclusion: the bulge is largely composed of **old stellar populations** ($\geq 10$ Gyr), and stars younger than $\sim 5$ Gyr, if present, constitute $< 5\%$ of the total bulge stellar content.

![L19_p11_bulge_old-11](../../assets/images/L19_p11_bulge_old-11.png)

this is the single strongest piece of CMD evidence that the bulge formed rapidly + early.

![L19_p11_bulge_old-11](../../assets/images/L19_p11_bulge_old-11.png)
*Clarkson et al. 2008: bulge MS turn-off compared with isochrones at varying age + [Fe/H]; bulk old, $< 5\%$ younger than 5 Gyr.*

## the Lagioia et al. 2014 NGC 6528 + Baade Window study

Lagioia et al. 2014 used the globular cluster NGC 6528 (which sits in the Baade Window, near the bulge centre) as a tool to characterise the bulge CMD. they:

1. used proper motions to select cluster members and separate them from bulge + disk contamination,
2. derived a high-resolution differential-reddening map from the cluster member ridge,
3. corrected the bulge CMD for differential reddening using this map.

![L19_p12_NGC6528_Lagioia-12](../../assets/images/L19_p12_NGC6528_Lagioia-12.png)

the result: after PM selection + DR correction, isochrone fits to NGC 6528 + bulge stars in the same field both give ages $\sim 10$-$12$ Gyr at $[{\rm Fe/H}] = +0.20$, $[\alpha/{\rm Fe}] = 0$, supporting rapid star formation in the bulge.

## chemical evidence: the alpha-enhanced bulge

bulge stars are **$\alpha$-enhanced** ($[\alpha/{\rm Fe}] > 0$), consistent with rapid star formation and enrichment primarily from Type II supernovae. studies: Alves-Brito et al. 2010, Gonzalez et al. 2011, Ness et al. 2013, Johnson et al. 2013.

within the common $[{\rm Fe/H}]$ interval, bulge and thick-disk populations display similar $[\alpha/{\rm Fe}]$ sequences, pointing to **analogous chemical evolution pathways** (and possibly common origin).

### why $[\alpha/{\rm Fe}] > 0$ implies fast star formation

- **Type II SNe** (core-collapse): originate from massive stars ($\geq 8 M_\odot$); short lifetimes ($\sim$ few to $30$ Myr); yields lots of $\alpha$-elements (O, Mg, Si, Ca) plus some Fe.
- **Type Ia SNe**: from white dwarfs in binaries; long delay time ($\sim 100$ Myr to several Gyr); large iron yields, fewer $\alpha$-elements.

right after a star-formation burst, only Type II SNe have fired. the gas pool gets $\alpha$-enriched faster than Fe. stars forming from this gas have high $[\alpha/{\rm Fe}]$. only later does Type Ia Fe enrichment lower $[\alpha/{\rm Fe}]$. high $[\alpha/{\rm Fe}] > 0$ thus signals **rapid + early** star formation.

## the conflict: HST photometry vs microlensing spectroscopy

the bulge age picture has been debated for over a decade. two opposite results.

### CMD evidence (old bulge): Zoccali et al. 2003, Clarkson et al. 2008, Renzini et al. 2018

the bulge is as old as Galactic globular clusters ($\geq 10$ Gyr), with no trace of any young stellar population.

Renzini et al. 2018 used five-band HST photometry in five bulge fields (SWEEPS, Baade, Stanek, OGLE-29) plus reddening-free pseudo-colour diagrams ([m] vs [t]) to compare bulge stars to GC fiducials (NGC 6791, 6528, 0104, 5927, 6752, 6341 at varying $[{\rm Fe/H}]$). conclusion: the bulk of bulge stars are $\sim 10$ Gyr old; only $\sim 3\%$ are younger than $\sim 5$ Gyr.

### microlensing evidence (extended SF history): Bensby et al. 2013, 2017

during a microlensing event, a faint bulge MS star can brighten by several magnitudes for hours to days. Bensby et al. exploited this to obtain high-resolution spectra of $\sim 90$ bulge dwarfs at the MS turn-off. from each spectrum: $\log g$, $T_{\rm eff}$, and $[{\rm Fe/H}]$. ages from isochrone fitting in the $\log g$-$\log T_{\rm eff}$ plane.

result: the age-metallicity plane shows that **stars with $[{\rm Fe/H}] < -0.4$ are old ($10$-$12$ Gyr)**, while **stars with $[{\rm Fe/H}] > -0.4$ span a wide range of ages**, with $\sim 30\%$ of microlensed dwarfs younger than $\sim 7$ Gyr. some stars as young as $\sim 1.5$ Gyr.

this suggests a **two-component bulge**: an old metal-poor component plus an intermediate-age + young metal-rich component, possibly built by secular evolution of the disk.

### why the discrepancy

- spectroscopy of individual MS turn-off stars probes the age of each star directly; CMD fits are integrated over the population.
- the photometry is more sensitive to the dominant old population; spectroscopy uniquely identifies the small young metal-rich tail.
- a real two-component bulge (classical old + bar-driven young) would naturally produce both signals.

so the unresolved question: is the bulge a single old population with a tiny young contaminant, or is it genuinely composite?

## the Galactic bulge in context

connections to the rest of the course:
- the bulge GCs (NGC 6528, NGC 6553, Liller 1, Terzan 5) are the metal-rich tail of the [Age-metallicity relation of Galactic GCs](../../02_Zettel/Theory/Age-metallicity relation of Galactic GCs.html).
- Terzan 5 is famous for hosting **two metal populations** (Ferraro et al. 2009, Massari et al. 2014: $[{\rm Fe/H}] \sim -0.2$ + $\sim +0.3$, with an outlier $\sim -0.8$). it may be a **fossil bulge fragment**, not a true GC. see [Multiple populations in GCs discovery](../../02_Zettel/Theory/Multiple populations in GCs discovery.html).
- the bulge bar links to dynamical bulge formation (boxy/peanut shape from bar buckling); see [Astrophysics_of_Galaxies_MOC](../../00_Atlas/Astrophysics_of_Galaxies_MOC.html).
- chemical evolution models (Matteucci & Romano 1999) predict the bulge formed at the same time or even faster than the Galactic halo, consistent with its $\alpha$-enhancement.

## see also

- [Bulge microlensing surveys](../../02_Zettel/Theory/Bulge microlensing surveys.html)
- [Bulge CMD complications](../../02_Zettel/Theory/Bulge CMD complications.html)
- [Age-metallicity relation of Galactic GCs](../../02_Zettel/Theory/Age-metallicity relation of Galactic GCs.html)
- [Galactic GC two-population age structure](../../02_Zettel/Theory/Galactic GC two-population age structure.html)
- [Halo accretion from dwarf galaxies](../../02_Zettel/Theory/Halo accretion from dwarf galaxies.html)
- [Effects of differential reddening on CMD analysis](../../02_Zettel/Theory/Effects of differential reddening on CMD analysis.html)
- [Multiple populations in GCs discovery](../../02_Zettel/Theory/Multiple populations in GCs discovery.html)
- [Stellar_Astrophysics_MOC](../../00_Atlas/Stellar_Astrophysics_MOC.html)
- [Astrophysics_of_Galaxies_MOC](../../00_Atlas/Astrophysics_of_Galaxies_MOC.html)
