---
layout: "default"
title: "Cosmic stellar mass density growth"
---
# cosmic stellar mass density growth

up: [Pablo_02_Statistical_properties_of_galaxies](../../02_Literature/Lectures/Observational_Cosmology/Pablo_02_Statistical_properties_of_galaxies.html)

## the definition

the cosmic stellar mass density is

$$\rho_*(z) = \int_0^\infty M_*\, \phi(M_*, z)\, dM_*$$

units of $M_\odot\, \text{Mpc}^{-3}$. it is the first moment of the stellar mass function (see [Stellar mass function](Stellar%20mass%20function.html) and [Integrals of the Schechter function](Integrals%20of%20the%20Schechter%20function.html)).

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

this is [SFR and stellar mass density connection](SFR%20and%20stellar%20mass%20density%20connection.html): the cosmic SFR is the time derivative of the stellar mass density, modulo recycling.

historically, integrating the Madau-Dickinson SFR overshot the measured stellar mass density by a factor of $\sim 1.5$. the "stellar-mass-budget" tension drove a decade of work on IMF, dust corrections, and stellar evolution. recent updates (Davidzon 2017, Madau-Dickinson 2014) bring the two within $\sim 30\%$ at all $z$.

## the IMF dependence

both $\rho_*$ (via $M_*/L$) and $\rho_{SFR}$ (via SFR/$L_{UV}$ or SFR/$L_{IR}$) are IMF-dependent. switching from Chabrier to Salpeter shifts both by $\sim 0.24$ dex in the *same* direction, so the *ratio* is more robust than either number.

## what i remember

- $\rho_*(z=0) \approx 5 \times 10^8\, M_\odot\, \text{Mpc}^{-3}$ (a factor $\sim 10\%$ of the cosmic baryon density in stars today)
- the stellar mass density buildup tracks the integrated cosmic SFR within $\sim 30\%$
- 50% of today's stellar mass was already in place by $z = 1$

## connections

- companion plot: [Cosmic star formation history](Cosmic%20star%20formation%20history.html)
- bridge equation: [SFR and stellar mass density connection](SFR%20and%20stellar%20mass%20density%20connection.html)
- mass function: [Stellar mass function](Stellar%20mass%20function.html)
- mass integrals: [Integrals of the Schechter function](Integrals%20of%20the%20Schechter%20function.html)

## key references

- Pérez-González et al. 2008a, ApJ 675, 234
- Madau & Dickinson 2014, ARAA 52, 415
- Davidzon et al. 2017 (COSMOS SMF and $\rho_*$ to $z \sim 5$)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (5)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="Cosmic%20star%20formation%20history.html" class="backlink-item">Cosmic star formation history</a></li>
    <li class="backlink-item-wrap"><a href="Madau%20plot.html" class="backlink-item">Madau plot</a></li>
    <li class="backlink-item-wrap"><a href="SFR%20and%20stellar%20mass%20density%20connection.html" class="backlink-item">SFR and stellar mass density connection</a></li>
    <li class="backlink-item-wrap"><a href="Stellar%20mass%20function.html" class="backlink-item">Stellar mass function</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Observational_Cosmology_MOC.html" class="backlink-item">Observational_Cosmology_MOC</a></li>
  </ul>
</div>

