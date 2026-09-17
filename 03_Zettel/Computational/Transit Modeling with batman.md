---
layout: "default"
title: "Transit Modeling with batman"
---
{% raw %}
# Transit Modeling with batman

The `batman` package (Bad-Ass Transit Model cAlculatioN; Kreidberg 2015) provides a C-optimized Python implementation of the analytical transit light curve equations derived by Mandel & Agol (2002).

## Core Capabilities
- Supports multiple limb darkening models: uniform, linear, quadratic, square-root, logarithmic, exponential, and 4-parameter non-linear.
- Optimized in C with parallel multi-threading capabilities, evaluating thousands of light curves per second for MCMC sampling.
- Numerical exposure time integration (supersampling) to correct for finite exposure smearing.

## Typical Setup
```python
import batman

params = batman.TransitParams()
params.t0 = 2459500.53574          # Time of inferior conjunction (BJD_TDB)
params.per = 3.33665               # Orbital period (days)
params.rp = 0.0764                 # Rp / Rstar
params.a = 13.94                   # a / Rstar
params.inc = 88.9                  # Inclination (degrees)
params.ecc = 0.0                   # Eccentricity
params.w = 90.0                    # Argument of periastron (degrees)
params.u = [0.35, 0.23]            # Limb darkening coefficients [u1, u2]
params.limb_dark = "quadratic"

# Fast light curve computation
m = batman.TransitModel(params, time_array)
light_curve = m.light_curve(params)
```

## Related Notes
- [Malavolta 11 - Transit Geometry and Analytical Light Curve Modeling](../../02_Literature/Lectures/Astrophysics_Laboratory_2/Malavolta%2011%20-%20Transit%20Geometry%20and%20Analytical%20Light%20Curve%20Modeling.html)
- [Stellar Limb Darkening Laws](../Theory/Stellar%20Limb%20Darkening%20Laws.html)
- [Exposure Time Smearing in Transit Photometry](../Theory/Exposure%20Time%20Smearing%20in%20Transit%20Photometry.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (9)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../02_Literature/Lectures/Computational_Astrophysics/03_Modular_Python_Software_Architecture_and_Packaging.html" class="backlink-item">03_Modular_Python_Software_Architecture_and_Packaging</a></li>
    <li class="backlink-item-wrap"><a href="../../02_Literature/Lectures/Computational_Astrophysics/04_Exoplanet_Demographics_Orbital_Mechanics_and_Transits.html" class="backlink-item">04_Exoplanet_Demographics_Orbital_Mechanics_and_Transits</a></li>
    <li class="backlink-item-wrap"><a href="../../02_Literature/Lectures/Exoplanetary_Astrophysics/16_Transit_Light_Curve_Modeling_and_Limb_Darkening.html" class="backlink-item">16_Transit_Light_Curve_Modeling_and_Limb_Darkening</a></li>
    <li class="backlink-item-wrap"><a href="../../02_Literature/Lectures/Exoplanetary_Astrophysics/22_Case_Study_K2_19_System_and_Atmospheric_Dynamics.html" class="backlink-item">22_Case_Study_K2_19_System_and_Atmospheric_Dynamics</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astrophysics_Laboratory_2_MOC.html" class="backlink-item">Astrophysics_Laboratory_2_MOC</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Computational_Astrophysics_MOC.html" class="backlink-item">Computational_Astrophysics_MOC</a></li>
    <li class="backlink-item-wrap"><a href="../Theory/Exposure%20Time%20Smearing%20in%20Transit%20Photometry.html" class="backlink-item">Exposure Time Smearing in Transit Photometry</a></li>
    <li class="backlink-item-wrap"><a href="../../02_Literature/Lectures/Astrophysics_Laboratory_2/Malavolta%2011%20-%20Transit%20Geometry%20and%20Analytical%20Light%20Curve%20Modeling.html" class="backlink-item">Malavolta 11 - Transit Geometry and Analytical Light Curve Modeling</a></li>
    <li class="backlink-item-wrap"><a href="../Theory/Mandel-Agol%20analytical%20transit%20light%20curve%20model.html" class="backlink-item">Mandel-Agol analytical transit light curve model</a></li>
  </ul>
</div>
