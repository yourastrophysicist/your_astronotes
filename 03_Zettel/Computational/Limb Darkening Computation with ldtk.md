---
layout: "default"
title: "Limb Darkening Computation with ldtk"
---
{% raw %}
# Limb Darkening Computation with ldtk

The Python Limb Darkening Toolkit (`ldtk`; Parviainen & Aigrain 2015) calculates theoretical stellar limb darkening profiles and coefficients tailored to specific telescope passbands.

## Methodological Pipeline
1. **Model Grid**: downloads high-resolution synthetic stellar spectra from the PHOENIX library (Husser et al. 2013) spanning effective temperature $T_{\text{eff}}$, surface gravity $\log g$, and metallicity $[\text{Fe}/\text{H}]$.
2. **Filter Integration**: integrates synthetic spectra against empirical filter transmission curves queried from the Spanish Virtual Observatory (SVO) Filter Profile Service (e.g., Sloan $r'$, TESS passband).
3. **Monte Carlo Propagation**: propagates host star spectroscopic uncertainties ($\,\sigma_{T_{\text{eff}}}, \sigma_{\log g}, \sigma_{[\text{Fe}/\text{H}]}$) into joint probability distributions for limb darkening coefficients:
$$u_1 \pm \sigma_{u_1}, \quad u_2 \pm \sigma_{u_2}$$

These values serve as informative Gaussian priors in Bayesian transit fitting.

## Related Notes
- [Stellar Limb Darkening Laws](../Theory/Stellar%20Limb%20Darkening%20Laws.html)
- [Malavolta 11 - Transit Geometry and Analytical Light Curve Modeling](../../02_Literature/Lectures/Astrophysics_Laboratory_2/Malavolta%2011%20-%20Transit%20Geometry%20and%20Analytical%20Light%20Curve%20Modeling.html)
- [Prior Probability Distributions in Exoplanet Fitting](../Theory/Prior%20Probability%20Distributions%20in%20Exoplanet%20Fitting.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (6)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../02_Literature/Lectures/Computational_Astrophysics/03_Modular_Python_Software_Architecture_and_Packaging.html" class="backlink-item">03_Modular_Python_Software_Architecture_and_Packaging</a></li>
    <li class="backlink-item-wrap"><a href="../../02_Literature/Lectures/Computational_Astrophysics/04_Exoplanet_Demographics_Orbital_Mechanics_and_Transits.html" class="backlink-item">04_Exoplanet_Demographics_Orbital_Mechanics_and_Transits</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astrophysics_Laboratory_2_MOC.html" class="backlink-item">Astrophysics_Laboratory_2_MOC</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Computational_Astrophysics_MOC.html" class="backlink-item">Computational_Astrophysics_MOC</a></li>
    <li class="backlink-item-wrap"><a href="../../02_Literature/Lectures/Astrophysics_Laboratory_2/Malavolta%2011%20-%20Transit%20Geometry%20and%20Analytical%20Light%20Curve%20Modeling.html" class="backlink-item">Malavolta 11 - Transit Geometry and Analytical Light Curve Modeling</a></li>
    <li class="backlink-item-wrap"><a href="../Theory/Stellar%20Limb%20Darkening%20Laws.html" class="backlink-item">Stellar Limb Darkening Laws</a></li>
  </ul>
</div>
