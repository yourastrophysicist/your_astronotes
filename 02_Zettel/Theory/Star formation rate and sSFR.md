---
layout: default
title: "Star formation rate and sSFR"
---

# star formation rate and sSFR

up: [Pablo_03_Star_formation_in_galaxies](../../01_Literature/Lectures/Observational_Cosmology/Pablo_03_Star_formation_in_galaxies.html)

## the definitions

the **star formation rate** is the rate at which a galaxy turns gas into new stars:

$$\psi(t) = \frac{dM_*}{dt}\;\; [M_\odot/\text{yr}]$$

this is not the rate at which mass ends up locked in stars forever, because some fraction (the "return fraction" $R$) is shed by winds and SNe and returned to the ISM. the convention in most tracer calibrations is that $\psi$ is the *instantaneous* SFR, not the mass that ends up permanently in stars.

the **specific SFR** normalizes by current stellar mass:

$$\text{sSFR}(t) = \frac{\psi(t)}{M_*(t)}\;\; [\text{yr}^{-1}]$$

its inverse $\tau_{SF} \equiv 1/\text{sSFR}$ is the "stellar-mass doubling time". for the Milky Way: $M_* \sim 5 \times 10^{10}\,M_\odot$, $\psi \sim 1\,M_\odot/\text{yr}$, so $\text{sSFR}_{MW} \sim 2 \times 10^{-11}\,\text{yr}^{-1}$, doubling time $\sim 50$ Gyr. so the Milky Way is *not* actively growing its stellar mass.

## example galaxies (Pablo's slide)

- **M82** (starburst): $\psi \sim 10\,M_\odot/\text{yr}$, $M_* \sim 10^{10}\,M_\odot$, sSFR $\sim 10^{-9}\,\text{yr}^{-1}$
- **M31** (Andromeda, normal spiral): $\psi \sim 1\,M_\odot/\text{yr}$, sSFR $\sim 10^{-11}\,\text{yr}^{-1}$
- **M87** (giant elliptical): $\psi \lesssim 0.1\,M_\odot/\text{yr}$, sSFR $< 10^{-12}\,\text{yr}^{-1}$, essentially passive

these three examples span almost 4 orders of magnitude in sSFR, and correspond cleanly to blue cloud, green valley, red sequence.

## why sSFR matters more than SFR

absolute SFR scales with galaxy size. sSFR removes that trivial dependence and asks *how star-forming for its mass* a galaxy is. this is why the [Galaxy main sequence of star formation](../../02_Zettel/Theory/Galaxy main sequence of star formation.html) is typically plotted as $\psi$ vs $M_*$ in log-log: on that plane the main sequence is a line with slope $\sim 0.7$–$1$, and its vertical offset directly measures sSFR.

## the characteristic sSFR evolves with redshift

at $z = 0$: star-forming galaxies sit near sSFR $\sim 10^{-10}\,\text{yr}^{-1}$.
at $z = 2$: the typical main-sequence galaxy at $M_* = 10^{10}\,M_\odot$ has sSFR $\sim 10^{-9}\,\text{yr}^{-1}$, a factor $\sim 20$ higher.

this is the same phenomenon as the [Cosmic star formation history](../../02_Zettel/Theory/Cosmic star formation history.html) peak at $z \sim 2$: the universe was churning out stars more efficiently, *per unit existing stellar mass*, in its youth.

## connections

- main sequence: [Galaxy main sequence of star formation](../../02_Zettel/Theory/Galaxy main sequence of star formation.html)
- integrated over volume: [Cosmic star formation history](../../02_Zettel/Theory/Cosmic star formation history.html)
- over time to build mass: [SFR and stellar mass density connection](../../02_Zettel/Theory/SFR and stellar mass density connection.html)
- tracers: [UV SFR tracer](../../02_Zettel/Theory/UV SFR tracer.html), [H-alpha SFR tracer](../../02_Zettel/Theory/H-alpha SFR tracer.html), [IR SFR tracer](../../02_Zettel/Theory/IR SFR tracer.html)
- parametrizations of $\psi(t)$: [Star formation history parametrizations](../../02_Zettel/Theory/Star formation history parametrizations.html)

## key references

- Kennicutt 1998 ARAA
- Kennicutt & Evans 2012 ARAA
- Madau & Dickinson 2014 ARAA
