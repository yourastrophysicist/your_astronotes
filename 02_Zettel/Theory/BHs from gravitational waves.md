---
layout: default
name: BHs from gravitational waves
description: LIGO-Virgo BH-BH mergers reveal a population of stellar-mass and intermediate-mass BHs, with some events showing features (high mass, high spin, eccentricity) consistent with dynamical formation in dense star clusters
---

since GW150914 in 2015, the **LIGO-Virgo gravitational wave network** has detected $\sim 100$ binary black hole (BBH) mergers, opening a new observational window on the BH population. some events show features (high mass, high spin, eccentric orbits) consistent with **dynamical formation in dense star clusters**, providing a multi-messenger link to globular cluster physics.

## the GW BH catalogue (GWTC-3)

the most recent LIGO-Virgo-KAGRA catalogue (GWTC-3, Abbott et al. 2023) includes $\sim 90$ confident BBH mergers. key statistics:

- BH masses range from $\sim 5\,M_\odot$ (low end) to $\sim 100\,M_\odot$ (high end);
- mass distribution: peaks at $\sim 8\,M_\odot$ and $\sim 35\,M_\odot$;
- gap claimed at $\sim 50$-$70\,M_\odot$ (the **pair-instability mass gap**, predicted by stellar evolution: stars in this range explode as PISNe, leave no remnant).

## the pair-instability mass gap

stellar evolution predicts that massive stars with helium core masses $50$-$130\,M_\odot$ undergo pair instability + pulsational pair instability + complete pair-instability disruption. the result: NO BHs are formed in the mass range $\sim 50$-$130\,M_\odot$ from single massive star evolution.

LIGO-Virgo events that violate this gap require **alternative formation channels**:
- **dynamical formation in dense clusters**: hierarchical mergers of smaller BHs into upper-gap remnants;
- **primordial BHs** (more exotic);
- **nuclear cluster + AGN disc** environments;
- **chemically peculiar progenitors**.

## the smoking gun: GW190521

**GW190521** ($142\,M_\odot$ remnant, $66 + 85\,M_\odot$ progenitors, 2020 detection) violates the pair-instability gap and is the leading candidate for **dynamical formation** in a dense cluster. one or both progenitors may themselves be products of earlier mergers (hierarchical formation), starting from $\sim 30\,M_\odot$ stellar-mass BHs.

other anomalous events:
- **GW190814** ($23 + 2.6\,M_\odot$): the lower-mass component is in the lower mass gap;
- **GW170817** (BNS): not BBH but multi-messenger;
- **GW230529**: lower mass gap component;
- several events with non-zero eccentricity at merger ($e > 0.1$): inconsistent with isolated binary evolution, consistent with dynamical capture in clusters.

## isolated vs dynamical formation channels

two main BBH formation channels:

### isolated binary evolution

two massive stars in a primordial binary evolve through:
- common envelope phase + tidal interactions;
- or chemically homogeneous evolution + mass-loss tuning;
- both stars collapse to BHs that eventually inspiral via GW emission.

predictions: $e \approx 0$ at merger, spins aligned with orbital angular momentum, mass ratio $\sim 1$, mass distribution respects pair-instability gap.

### dynamical formation in dense clusters

BHs form from massive star evolution + mass segregation centres them in the cluster core. there:
- BH-BH binaries form via 3-body interactions;
- hardened by repeated 3-body encounters;
- ejected from cluster or merged.

predictions: $e > 0$ at merger ($\sim 5$-$10\%$ of events), spins randomly oriented, mass ratio can be very unequal, mass distribution can violate pair-instability gap (hierarchical mergers).

## evidence for dynamical formation

quantitative analyses of GWTC-3 suggest $\sim 10$-$30\%$ of BBH mergers have **dynamical signatures**:
- a small fraction with $e > 0.1$ at merger;
- some with high effective spin $\chi_{\rm eff}$ inconsistent with isolated evolution;
- some with masses in or above the pair-instability gap.

so the GW data are consistent with a **mixed channel population**, with both isolated + dynamical contributions.

## the GC connection

dense cluster formation channels include:

- **massive globular clusters** (the original proposed source by Rodriguez et al. 2016, ApJ 824, L8);
- **young massive clusters** in starbursts;
- **galactic nuclear star clusters**;
- **AGN accretion discs** (Stone et al. 2017, McKernan et al. 2018).

GCs alone may produce $\sim 10$-$100$ Gpc$^{-3}$ yr$^{-1}$ BBH mergers, comparable to the LIGO-Virgo rate (Rodriguez et al. 2018, PRL 120, 151101). this is **direct evidence** that GCs contribute substantially to the observed BBH population.

## connection to GC dynamics

if GCs are the formation site of GW BBHs, then:
- GCs must **retain** stellar BHs against gravitational kicks (some BHs eject at formation due to natal kicks; many remain);
- the BH population segregates to the cluster core via dynamical friction (timescale $\sim 10^7$-$10^8$ yr);
- BH-BH binaries dominate the cluster core dynamics;
- repeated 3-body encounters harden + eject BBHs that then merge in $\sim 10^9$-$10^{10}$ yr.

modeling: Monte Carlo cluster N-body codes (CMC, Rapid, MOCCA) reproduce the GW BBH rate from GC populations.

## why this matters for the course

LIGO-Virgo-KAGRA + JWST are creating multi-messenger observations of dense cluster physics:
- direct dynamical signatures (eccentric, hierarchical mergers) reveal cluster origin;
- BH retention rates constrain cluster formation conditions;
- the BH mass spectrum from GW + the BHs found via radial velocities (Giesers+2018, NGC 3201) + IMBH candidates ($\omega$ Cen) provide a comprehensive census.

it represents the new frontier of stellar populations + cluster dynamics merging with gravitational-wave astronomy.

## reference papers

- **Abbott et al. 2023** — GWTC-3 catalogue.
- **Rodriguez et al. 2016, ApJ 824, L8** — first GC-origin GW BBH rate predictions.
- **Rodriguez et al. 2018, PRL 120, 151101** — refined predictions matching observations.
- **GW190521 paper** (Abbott et al. 2020, PRL 125, 101102) — the pair-instability gap violation.
- **Stone, Metzger, Haiman 2017, MNRAS 464, 946** — AGN disc channel.
- **Greene, Strader, Ho 2020, ARA&A 58, 257** — IMBH review including LIGO-Virgo.

## see also

- [Black holes in globular clusters](../../02_Zettel/Theory/Black holes in globular clusters.html)
- [Hunting BHs via radial velocities](../../02_Zettel/Theory/Hunting BHs via radial velocities.html)
- [Intermediate-mass BHs in GCs](../../02_Zettel/Theory/Intermediate-mass BHs in GCs.html)
- [Millisecond pulsars in GCs](../../02_Zettel/Theory/Millisecond pulsars in GCs.html)
- [X-ray sources in globular clusters](../../02_Zettel/Theory/X-ray sources in globular clusters.html)
- [Cepheids and supernovae](../../02_Zettel/Theory/Cepheids and supernovae.html)
- [Stellar_Astrophysics_MOC](../../00_Atlas/Stellar_Astrophysics_MOC.html)
