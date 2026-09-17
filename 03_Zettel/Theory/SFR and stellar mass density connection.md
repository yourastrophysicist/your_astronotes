---
layout: "default"
title: "SFR and stellar mass density connection"
---
{% raw %}
# SFR and stellar mass density connection

up: [Pablo_02_Statistical_properties_of_galaxies](../../02_Literature/Lectures/Observational_Cosmology/Pablo_02_Statistical_properties_of_galaxies.html)

## the bookkeeping identity

the equation pablo writes in the big arrow on the slide:

$$\boxed{\,\rho_{SFR}(t) = \frac{d\rho_*(t)}{dt}\,}$$

at face value. with stellar mass loss, the more careful version is

$$\rho_*(t) = (1 - R) \int_0^t \rho_{SFR}(t')\, dt'$$

with $R \approx 0.4$ for a Chabrier IMF. so $\rho_{SFR}$ and the time derivative of $\rho_*$ are equal up to the factor $(1 - R)$.

## why this matters

it lets you cross-check two completely different observational pipelines:

1. **direct SFR**: measure UV continuum, IR luminosity, or H$\alpha$ → SFR per galaxy → integrate over LF → $\rho_{SFR}(z)$. this is what Pérez-González 2005 ([Cosmic star formation history](./Cosmic%20star%20formation%20history.html)) does.
2. **integrated stellar mass**: measure SED-fit stellar masses → integrate SMF → $\rho_*(z)$. this is what Pérez-González 2008a ([Cosmic stellar mass density growth](./Cosmic%20stellar%20mass%20density%20growth.html)) does.

if the two give consistent answers (modulo $R$), the global picture of galaxy evolution holds together. if they disagree by more than a factor of $\sim 2$, something is wrong (IMF, dust correction, IR/UV miscalibration, hidden populations).

## the historical tension

through the 2000s, integrating the Madau-Dickinson cosmic SFR overshot the measured stellar mass density by a factor $\sim 2$. possible culprits:

- dust corrections at high $z$ overestimated SFR
- bottom-heavy IMF in massive ellipticals (van Dokkum & Conroy 2010) underestimates $M_*$
- low-luminosity galaxies missed by SMF surveys

modern analyses bring the two within $\lesssim 30\%$ across $z = 0$ to $z = 4$.

## what this enables

once consistent, the cosmic SFR history *predicts* the stellar mass density evolution and therefore the cosmic chemical enrichment history (each star formation episode produces a known yield of metals). this connects to the IGM metal enrichment story in block 9 and to the chemical evolution of galaxies.

## what i remember

it is the simplest possible identity in cosmic galaxy evolution. it matters because it ties together the two main statistical objects (SFR-LF and SMF) and acts as a sanity check on the global census.

## connections

- one side: [Cosmic star formation history](./Cosmic%20star%20formation%20history.html)
- other side: [Cosmic stellar mass density growth](./Cosmic%20stellar%20mass%20density%20growth.html)
- how the SFR is calibrated per galaxy: [Galaxy main sequence of star formation](./Galaxy%20main%20sequence%20of%20star%20formation.html)

## key references

- Madau & Dickinson 2014, ARAA 52, 415 (consistency analysis)
- Pérez-González et al. 2005 and 2008a
- Wilkins et al. 2008 (the original tension)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (5)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="./Cosmic%20star%20formation%20history.html" class="backlink-item">Cosmic star formation history</a></li>
    <li class="backlink-item-wrap"><a href="./Cosmic%20stellar%20mass%20density%20growth.html" class="backlink-item">Cosmic stellar mass density growth</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Observational_Cosmology_MOC.html" class="backlink-item">Observational_Cosmology_MOC</a></li>
    <li class="backlink-item-wrap"><a href="../../02_Literature/Lectures/Observational_Cosmology/Pablo_02_Statistical_properties_of_galaxies.html" class="backlink-item">Pablo_02_Statistical_properties_of_galaxies</a></li>
    <li class="backlink-item-wrap"><a href="./Star%20formation%20rate%20and%20sSFR.html" class="backlink-item">Star formation rate and sSFR</a></li>
  </ul>
</div>
