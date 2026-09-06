---
layout: default
title: "Galaxy time scales"
---

# galaxy time scales

up: [Pablo_03_Star_formation_in_galaxies](../../01_Literature/Lectures/Observational_Cosmology/Pablo_03_Star_formation_in_galaxies.html)

## why time scales first

before choosing a star-formation tracer i have to know: what does this tracer *average over*? a tracer is only informative if its characteristic lifetime is shorter than the timescale over which SFR varies. Pablo's slide lists the timescales that bracket the relevant physics.

## the six time scales

### Hubble time
$$t_H = \frac{1}{H_0} \approx 14\,\text{Gyr}$$
sets the overall budget: a galaxy cannot be older than this (at $z = 0$).

### dynamical time
$$t_{\text{dyn}} = \sqrt{\frac{3\pi}{16 G \rho}}$$
the free-fall time in a region of density $\rho$. for a molecular cloud at $\rho \sim 10^{-20}\,\text{g/cm}^3$: $t_{\text{dyn}} \sim 1$ Myr. for a galaxy disk at $\rho \sim 10^{-24}\,\text{g/cm}^3$: $t_{\text{dyn}} \sim 100$ Myr. this is roughly one rotation.

a useful rule: a galaxy has $\sim 100$ orbits in a Hubble time.

### cooling time
$$t_{\text{cool}} = \frac{3 n k_B T / 2}{n_e n_H \Lambda(T, Z)}$$
sets whether hot halo gas can ever cool into a disk. comparable to or shorter than $t_H$ for $T < 10^6$ K gas in galactic halos; much longer than $t_H$ above $M_h \sim 10^{12}\,M_\odot$, which is why [Halo gravity suppression of galaxy formation](../../02_Zettel/Theory/Halo gravity suppression of galaxy formation.html) kicks in there.

### star formation time
$$t_{SF} = \frac{M_{\text{gas}}}{\psi}$$
sometimes called gas depletion time. in MW disk gas: $M_{\text{gas}} \sim 10^{10}\,M_\odot$, $\psi \sim 1\,M_\odot/\text{yr}$, so $t_{SF} \sim 10$ Gyr. consistent with the MW still forming stars today.

in starburst galaxies $t_{SF}$ drops to $\sim 100$ Myr or less. this is why starbursts are *transient*: left alone they eat all their gas in less than a dynamical time of the parent halo.

### chemical enrichment time
the time for metals from one generation of stars to be recycled into the next. dominated by the lifetime of the relevant stellar donor:

- SN II, α-elements: $\sim 10$ Myr (massive stars)
- SN Ia, Fe peak: $\sim 100$ Myr–$1$ Gyr (WD progenitors)
- AGB, C/N/s-process: $\sim 1$ Gyr (intermediate-mass stars)

so an [α/Fe] ratio above solar says "enrichment was fast, SN II dominated" (typical of massive ellipticals); [α/Fe] below solar says "slow, extended, SN Ia had time to contribute".

### merger and dynamical-friction time
$$t_{\text{DF}} \approx \frac{V_c\, r^2}{G\, M_{\text{sat}}\, \ln \Lambda}$$
the time for a satellite of mass $M_{\text{sat}}$ to sink into its host via dynamical friction. for a $10^{10}\,M_\odot$ satellite at 50 kpc in a Milky-Way-like halo: $\sim 1$ Gyr. sets merger cadence and drives (U)LIRGs.

## how this maps onto SFR tracers

| tracer | timescale traced |
|---|---|
| Hα | $\sim 10$ Myr |
| UV continuum | $\sim 100$ Myr |
| TIR | $\sim 100$ Myr (via dust heating by UV) |
| [OII] | $\sim 10$ Myr |
| radio (1.4 GHz synchrotron) | $\sim 100$ Myr |
| broadband SED fitting with parametric SFH | Gyr-averaged |

a single galaxy measured in Hα and UV can disagree by factors of a few if SFR has varied in the last $100$ Myr. that's not an error, that's a signal about recent SFH.

## connections

- tracers discussed individually under [UV SFR tracer](../../02_Zettel/Theory/UV SFR tracer.html), [H-alpha SFR tracer](../../02_Zettel/Theory/H-alpha SFR tracer.html), [IR SFR tracer](../../02_Zettel/Theory/IR SFR tracer.html)
- cooling-time threshold at halo scale: [Halo gravity suppression of galaxy formation](../../02_Zettel/Theory/Halo gravity suppression of galaxy formation.html)
- SFR tracer timescale differences: [SFR tracer comparison](../../02_Zettel/Theory/SFR tracer comparison.html)

## key references

- Binney & Tremaine 2008, chapters on dynamical friction and orbit times
- Kennicutt & Evans 2012 ARAA
