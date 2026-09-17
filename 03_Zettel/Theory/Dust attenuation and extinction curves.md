---
layout: "default"
title: "Dust attenuation and extinction curves"
---
{% raw %}
# dust attenuation and extinction curves

up: [Pablo_03_Star_formation_in_galaxies](../../02_Literature/Lectures/Observational_Cosmology/Pablo_03_Star_formation_in_galaxies.html)

## extinction vs attenuation

**extinction** is what a single sightline through a uniform dust screen does to a point source. expressed as $A_\lambda$ in magnitudes, with typical normalization $R_V \equiv A_V / E(B-V)$. classic Milky Way: $R_V = 3.1$.

**attenuation** is what an *extended, unresolved* galaxy does to its stars: a mix of extinction along many sightlines, scattering back into the beam, and spatial correlation between stars and dust. attenuation curves are always *shallower* than extinction curves because UV-emitting young stars are preferentially embedded in dust.

for SED fitting, what we want is attenuation, because we can't resolve individual stars.

## the canonical curves

### Cardelli, Clayton, Mathis 1989 (MW extinction)
- classic parametrization $A_\lambda / A_V$ as a function of $R_V$
- 2175 Å UV bump prominent
- fit from MW diffuse ISM

### Calzetti 2000 (starburst attenuation)
- derived from IUE spectra of local starburst galaxies
- $R_V' \simeq 4.05$, no 2175 Å bump
- the workhorse for high-$z$ SED fitting
- used in the Meurer IRX-β relation

### SMC extinction (Pei 1992, Prevot 1984)
- steep UV rise, no 2175 Å bump
- low metallicity
- appropriate for Lyman-break galaxies and some low-$Z$ dwarfs

### Charlot & Fall 2000 (two-component)
- splits attenuation between a "birth cloud" (age $< 10$ Myr) with high extinction and a diffuse ISM with low extinction
- explains why Hα (emitted in HII regions) is more attenuated than the UV continuum

## what matters in practice

- **slope**: the UV/optical slope of the curve changes the inferred $\beta$ correction for a given $A_V$
- **2175 Å bump**: its presence or absence determines whether high-$z$ SED fits need MW-like or SMC-like priors. present in MW, absent in Calzetti and SMC
- **birth-cloud vs diffuse**: the Charlot-Fall split reproduces the observed $A_{\text{Hα}} > A_{\text{UV}}$ (a factor $\sim 2$ in mag)

## a useful rule of thumb

for a typical main-sequence galaxy at $z = 2$:
- $A_V \sim 1$
- $A_{1500} \sim 3$
- IR luminosity $\sim 3$–$10 \times L_{\text{UV, observed}}$

a starburst / LIRG can have $A_V \sim 3$, $A_{\text{1500}} \sim 10$, almost all light in the IR.

## connections

- used in: [UV SFR tracer](./UV%20SFR%20tracer.html), [UV slope and IRX-beta relation](./UV%20slope%20and%20IRX-beta%20relation.html), [H-alpha SFR tracer](./H-alpha%20SFR%20tracer.html)
- measurement in line spectra: [Balmer decrement](./Balmer%20decrement.html)
- reprocessed output: [IR SFR tracer](./IR%20SFR%20tracer.html)
- enters all SED fitting: [Stellar population synthesis](./Stellar%20population%20synthesis.html)

## key references

- Cardelli, Clayton, Mathis 1989 ApJ 345, 245
- Calzetti et al. 2000 ApJ 533, 682
- Charlot & Fall 2000 ApJ 539, 718
- Salim & Narayanan 2020 ARAA (attenuation-curve review)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (10)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="./Balmer%20decrement.html" class="backlink-item">Balmer decrement</a></li>
    <li class="backlink-item-wrap"><a href="./Dust%20extinction%20in%20nebulae.html" class="backlink-item">Dust extinction in nebulae</a></li>
    <li class="backlink-item-wrap"><a href="./Lyman%20alpha%20SFR%20tracer.html" class="backlink-item">Lyman alpha SFR tracer</a></li>
    <li class="backlink-item-wrap"><a href="./OII%20SFR%20tracer.html" class="backlink-item">OII SFR tracer</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Observational_Cosmology_MOC.html" class="backlink-item">Observational_Cosmology_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Other%20SFR%20tracer%20lines.html" class="backlink-item">Other SFR tracer lines</a></li>
    <li class="backlink-item-wrap"><a href="../../02_Literature/Lectures/Observational_Cosmology/Pablo_03_Star_formation_in_galaxies.html" class="backlink-item">Pablo_03_Star_formation_in_galaxies</a></li>
    <li class="backlink-item-wrap"><a href="./SED%20fitting%20for%20SFH.html" class="backlink-item">SED fitting for SFH</a></li>
    <li class="backlink-item-wrap"><a href="./SFR%20tracer%20comparison.html" class="backlink-item">SFR tracer comparison</a></li>
    <li class="backlink-item-wrap"><a href="./UV%20slope%20and%20IRX-beta%20relation.html" class="backlink-item">UV slope and IRX-beta relation</a></li>
  </ul>
</div>
