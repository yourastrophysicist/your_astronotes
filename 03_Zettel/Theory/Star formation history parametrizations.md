---
layout: "default"
title: "Star formation history parametrizations"
---
{% raw %}
# star formation history parametrizations

up: [Pablo_03_Star_formation_in_galaxies](../../02_Literature/Lectures/Observational_Cosmology/Pablo_03_Star_formation_in_galaxies.html)

## what is an SFH?

the star formation history $\psi(t)$ is the function that tells you how much gas a galaxy turned into stars as a function of cosmic time. integrating gives the stellar mass (modulo return fraction):

$$M_*(t) = \int_0^t (1 - R)\, \psi(t')\, dt'$$

an SED fit to photometry is trying to recover $\psi(t)$ (along with $Z$, dust, IMF). the fit is fundamentally ill-posed without strong priors, so you almost always assume a parametric form.

## canonical parametric SFHs

Pablo lists the forms that appear in Tantalo 2002, Lower 2020, Jain 2023:

- **instantaneous burst (SSP)**: $\psi(t) = M_0\, \delta(t - t_0)$. one population, one age. building block of everything else.
- **constant SFR (CON)**: $\psi(t) = \psi_0$ for $t_0 < t < t_0 + \Delta t$, zero elsewhere. "continuous burst". appropriate for starbursts.
- **exponentially declining (τ-model)**: $\psi(t) \propto e^{-(t - t_0)/\tau}$. the workhorse of SED fitting codes since Bruzual-Charlot. small $\tau$ (fast decline) for ellipticals, large $\tau$ for late-type spirals.
- **exponentially rising**: $\psi(t) \propto e^{+(t - t_0)/\tau}$. motivated by high-$z$ galaxies whose SFR was still climbing at observation.
- **delayed τ-model**: $\psi(t) \propto (t - t_0)\, e^{-(t - t_0)/\tau}$. rises linearly, peaks, then declines. physically motivated because it resembles gas-regulator solutions.
- **double-component**: old exponential + recent burst. cleanly separates bulk population from the young stars producing Hα, UV.
- **non-parametric**: step-function SFH in $N$ age bins, with priors penalizing wild swings. Leja 2019, Iyer 2019. more flexible but harder to constrain.

## the fundamental problem

photometry in the optical/NIR is integrated over stellar lifetimes, so there is an **age–metallicity degeneracy**: an old, metal-poor population can look like a young, metal-rich one. the SFH fit is sensitive to this.

additional degeneracies:
- dust vs age (both redden the SED)
- burst fraction vs mean age (a small recent burst lights up UV, mimicking a younger mean age)

breaking them requires wide wavelength coverage: UV (traces recent SF), optical (traces middle ages), NIR (traces old population), MIR/FIR (traces dust emission → total obscured SF).

## what SED fitting codes return

typical outputs of a code like BAGPIPES, Prospector, CIGALE, MAGPHYS, Rainbow (Pérez-González):

- current SFR $\psi(t_0)$
- mass-weighted age $\langle t \rangle_M$
- light-weighted age $\langle t \rangle_L$ (younger, dominated by recent SF)
- $\tau$ or its equivalent
- $Z$, $A_V$, redshift, stellar mass

typical uncertainties on $M_*$ are $\sim 0.1$–$0.2$ dex, on SFR $\sim 0.3$ dex, on SFH shape much worse.

## connections

- needs an [Initial mass function](./Initial%20mass%20function.html) to convert to observable light
- executed using [Stellar population synthesis](./Stellar%20population%20synthesis.html) codes
- observable SED fitting discussed in [SED fitting for SFH](./SED%20fitting%20for%20SFH.html)
- resolved-star alternative: [SFH from resolved CMDs](./SFH%20from%20resolved%20CMDs.html)
- instant SFR observables: [H-alpha SFR tracer](./H-alpha%20SFR%20tracer.html), [UV SFR tracer](./UV%20SFR%20tracer.html), [IR SFR tracer](./IR%20SFR%20tracer.html)

## key references

- Tantalo et al. 2002
- Lower et al. 2020 (SFH parametrization biases)
- Jain et al. 2023
- Leja et al. 2019 (non-parametric)
- Conroy 2013 ARAA
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (5)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Observational_Cosmology_MOC.html" class="backlink-item">Observational_Cosmology_MOC</a></li>
    <li class="backlink-item-wrap"><a href="../../02_Literature/Lectures/Observational_Cosmology/Pablo_03_Star_formation_in_galaxies.html" class="backlink-item">Pablo_03_Star_formation_in_galaxies</a></li>
    <li class="backlink-item-wrap"><a href="./SED%20fitting%20for%20SFH.html" class="backlink-item">SED fitting for SFH</a></li>
    <li class="backlink-item-wrap"><a href="./SFH%20from%20resolved%20CMDs.html" class="backlink-item">SFH from resolved CMDs</a></li>
    <li class="backlink-item-wrap"><a href="./Star%20formation%20rate%20and%20sSFR.html" class="backlink-item">Star formation rate and sSFR</a></li>
  </ul>
</div>
