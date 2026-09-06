---
layout: default
title: "Cosmic star formation history"
---

# cosmic star formation history

up: [Pablo_02_Statistical_properties_of_galaxies](../../01_Literature/Lectures/Observational_Cosmology/Pablo_02_Statistical_properties_of_galaxies.md)

## the madau-dickinson plot

the cosmic SFR density $\rho_{SFR}(z)$ is the volume-integrated star formation rate at each redshift, in units of $M_\odot\, \text{yr}^{-1}\, \text{Mpc}^{-3}$.

it is obtained by integrating the LF over $L$ inside redshift slices and converting luminosity to SFR with a band-dependent calibration ($L_{UV} \to \text{SFR}_{UV}$ Kennicutt-Evans 2012, $L_{TIR} \to \text{SFR}_{IR}$, $L_{H\alpha} \to \text{SFR}$):

$$\rho_{SFR}(z) = \int (\text{SFR}/L)\, L\, \phi(L, z)\, dL$$

the result, plotted from $z = 0$ to $z \sim 8$ (the **Madau-Dickinson 2014** review), is a curve that:

- rises from $z = 0$ by a factor $\sim 10$
- **peaks at $z \sim 2$** ($\sim 0.1\, M_\odot\, \text{yr}^{-1}\, \text{Mpc}^{-3}$), the cosmic noon
- declines toward higher $z$ as $(1+z)^{-3}$ approximately

this curve is *the* punchline of extragalactic surveys.

## perez-gonzalez 2005

the version pablo shows on this slide is his own paper: P-G et al. 2005 used Spitzer 24 μm photometry in deep fields to build the IR LF as a function of $z$, then integrated to get $\rho_{SFR}(z)$. result (his fig. 9): $\rho_{SFR}$ peaks at $z \sim 1$–$2$ and matches simultaneously the UV (S1-Xu 2003) and the IR (Lagache 2004) constraints.

## bouwens 2010 high-z anchor

at $z > 4$ the picture is anchored by Lyman-break galaxy (LBG) selection. Bouwens et al. 2010 measured the UV LF at $z = 4, 5, 6, 7, 8$, integrated above $\sim 0.08 L^*_{z=3}$, and showed $\rho_{SFR}$ falling by $\sim 2$ orders of magnitude from $z \sim 2$ to $z \sim 8$. this is the early universe side of the Madau-Dickinson curve.

at $z > 10$, JWST has now extended this further, and the result is *more* SFR than expected (the "JWST surprise"), still being assimilated.

## the SFR-stellar-mass identity

the stellar mass density is the time integral of the SFR (modulo recycling and IMF):

$$\rho_{SFR}(z) = (1 - R)^{-1} \frac{d\rho_*(t)}{dt}$$

where $R \approx 0.4$ is the mass returned to the ISM by stellar evolution. this is the consistency check: integrate the cosmic SFR and you should get the cosmic stellar mass density. see [Cosmic stellar mass density growth](../../02_Zettel/Theory/Cosmic stellar mass density growth.md) and [SFR and stellar mass density connection](../../02_Zettel/Theory/SFR and stellar mass density connection.md).

## three regimes

- $z > 3$: rapid rise. galaxies are young, sub-$L^*$, high specific SFR.
- $z \sim 1$–$3$: cosmic noon. half of all stars in the universe today were formed in this window. dust-obscured ULIRGs dominate the IR side.
- $z < 1$: secular decline. cosmic SFR drops by an order of magnitude. quenching at high mass plus gas depletion overall.

## what i remember

the cosmic SFR history is the integral of the galaxy LF over $L$ in slices of $z$, so it is the most compressed possible summary of galaxy evolution. Madau-Dickinson 2014 is the canonical reference and is updated every couple of years.

## connections

- LF integral that produces it: [Schechter function](../../02_Zettel/Theory/Schechter function.md), [Integrals of the Schechter function](../../02_Zettel/Theory/Integrals of the Schechter function.md)
- mass-side companion: [Cosmic stellar mass density growth](../../02_Zettel/Theory/Cosmic stellar mass density growth.md)
- formal identity: [SFR and stellar mass density connection](../../02_Zettel/Theory/SFR and stellar mass density connection.md)
- the peak's physical meaning: cosmic noon, dust-obscured SF, the main sequence ([Galaxy main sequence of star formation](../../02_Zettel/Theory/Galaxy main sequence of star formation.md))

## key references

- Madau & Dickinson 2014, ARAA 52, 415 (the canonical review)
- Pérez-González et al. 2005, ApJ 630, 82
- Bouwens et al. 2010 (UV LF at $z = 4$–$8$)
- Lilly et al. 1996 (the original Lilly-Madau plot)
