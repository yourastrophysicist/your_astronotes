---
layout: default
title: "Cosmic stellar mass density growth"
---

# cosmic stellar mass density growth

up: [Pablo_02_Statistical_properties_of_galaxies](../../01_Literature/Lectures/Observational_Cosmology/Pablo_02_Statistical_properties_of_galaxies.md)

## the definition

the cosmic stellar mass density is

$$\rho_*(z) = \int_0^\infty M_*\, \phi(M_*, z)\, dM_*$$

units of $M_\odot\, \text{Mpc}^{-3}$. it is the first moment of the stellar mass function (see [Stellar mass function](../../02_Zettel/Theory/Stellar mass function.md) and [Integrals of the Schechter function](../../02_Zettel/Theory/Integrals of the Schechter function.md)).

## perez-gonzalez 2008a result

P-G et al. 2008a measured $\rho_*(z)$ from $z = 0$ to $z \sim 4$ using SED-fit stellar masses in the GOODS, ECDF-S, and other deep fields. his fig. 14 shows:

- $\rho_*(z)/\rho_*(z=0)$ rises from $\sim 0.03$ at $z = 4$ to $1$ at $z = 0$
- half of all stellar mass today was formed by $z \sim 1$ ($\sim 8$ Gyr ago)
- 90% of stellar mass was formed by $z \sim 0.5$

this is the **stellar mass buildup** plot, and it is the integrated version of the cosmic SFR history.

## the consistency check

the SFR density and stellar mass density satisfy

$$\rho_*(t) = (1 - R) \int_0^t \rho_{SFR}(t')\, dt'$$

where $R \approx 0.4$ is the **return fraction** (mass given back to the ISM by stellar winds and SNe over a Hubble time, IMF-dependent).

this is [SFR and stellar mass density connection](../../02_Zettel/Theory/SFR and stellar mass density connection.md): the cosmic SFR is the time derivative of the stellar mass density, modulo recycling.

historically, integrating the Madau-Dickinson SFR overshot the measured stellar mass density by a factor of $\sim 1.5$. the "stellar-mass-budget" tension drove a decade of work on IMF, dust corrections, and stellar evolution. recent updates (Davidzon 2017, Madau-Dickinson 2014) bring the two within $\sim 30\%$ at all $z$.

## the IMF dependence

both $\rho_*$ (via $M_*/L$) and $\rho_{SFR}$ (via SFR/$L_{UV}$ or SFR/$L_{IR}$) are IMF-dependent. switching from Chabrier to Salpeter shifts both by $\sim 0.24$ dex in the *same* direction, so the *ratio* is more robust than either number.

## what i remember

- $\rho_*(z=0) \approx 5 \times 10^8\, M_\odot\, \text{Mpc}^{-3}$ (a factor $\sim 10\%$ of the cosmic baryon density in stars today)
- the stellar mass density buildup tracks the integrated cosmic SFR within $\sim 30\%$
- 50% of today's stellar mass was already in place by $z = 1$

## connections

- companion plot: [Cosmic star formation history](../../02_Zettel/Theory/Cosmic star formation history.md)
- bridge equation: [SFR and stellar mass density connection](../../02_Zettel/Theory/SFR and stellar mass density connection.md)
- mass function: [Stellar mass function](../../02_Zettel/Theory/Stellar mass function.md)
- mass integrals: [Integrals of the Schechter function](../../02_Zettel/Theory/Integrals of the Schechter function.md)

## key references

- Pérez-González et al. 2008a, ApJ 675, 234
- Madau & Dickinson 2014, ARAA 52, 415
- Davidzon et al. 2017 (COSMOS SMF and $\rho_*$ to $z \sim 5$)
