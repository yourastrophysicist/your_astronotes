---
layout: "default"
title: "Small exoplanets and the Fulton radius valley"
name: "Small exoplanets and the Fulton radius valley"
description: "the bimodal radius distribution of small planets, the 1.75 Earth radius valley, photoevaporation, and core-powered mass loss"
---
{% raw %}
the California-Kepler Survey (CKS, Fulton et al. 2017) revealed that close-in exoplanets ($P < 100\text{ days}$) are not uniformly distributed in size, but exhibit a sharp bimodal distribution with an empty valley at:

$$R_p \approx 1.75 R_\oplus$$

## the two distinct populations

1. **super-Earths ($R_p \approx 1.0 - 1.5 R_\oplus$)**: rocky, bare terrestrial cores with bulk densities consistent with iron-silicate Earth-like compositions.
2. **sub-Neptunes ($R_p \approx 2.0 - 3.5 R_\oplus$)**: rocky cores enveloped by a primordial hydrogen/helium gas envelope comprising $\sim 1 - 3\%$ of the total planet mass, which doubles the apparent optical radius.

planets of intermediate size ($1.5 - 2.0 R_\oplus$) are virtually non-existent at short orbital periods.

## physical mechanisms driving envelope loss

two primary physical models explain the radius valley:

### 1. photoevaporation (external XUV radiation)
during the first $100\text{ Myr}$, stellar EUV and X-ray radiation photoionizes the upper envelope, launching a hydrodynamic Parker-like planetary wind:

$$\dot{M}_{\text{photo}} = \frac{\epsilon \pi R_p R_{\text{XUV}}^2 F_{\text{XUV}}}{G M_p}$$

for planets with envelope masses $\lesssim 1\%$, the envelope is stripped entirely down to the bare rocky core, shifting the planet into the super-Earth peak.

### 2. core-powered mass loss (internal geothermal heat)
Ginzburg et al. (2018) showed that residual heat from the cooling core after formation ($L_{\text{core}} \sim E_{\text{thermal}} / t_{\text{cool}}$) can blow away low-mass envelopes spontaneously on gigayear timescales without requiring high stellar XUV fluxes.

both mechanisms predict a negative slope in the period-radius plane ($R_{\text{valley}} \propto P^{-0.11}$), matching observational measurements from CKS and Gaia DR2/DR3.

## see also

- [Exoplanetary_Astrophysics_MOC](../../04_Atlas/Exoplanetary_Astrophysics_MOC.html)
- [04_Small_Planets_and_Host_Star_Correlations](../../02_Literature/Lectures/Exoplanetary_Astrophysics/04_Small_Planets_and_Host_Star_Correlations.html)
- [Exoplanet demographic distributions and survey completeness](./Exoplanet%20demographic%20distributions%20and%20survey%20completeness.html)
- [Exoplanet atmospheric scale height and transmission spectroscopy](./Exoplanet%20atmospheric%20scale%20height%20and%20transmission%20spectroscopy.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (2)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="./Exoplanet%20demographic%20distributions%20and%20survey%20completeness.html" class="backlink-item">Exoplanet demographic distributions and survey completeness</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Exoplanetary_Astrophysics_MOC.html" class="backlink-item">Exoplanetary_Astrophysics_MOC</a></li>
  </ul>
</div>
