---
layout: "default"
title: "Mandel-Agol analytical transit light curve model"
name: "Mandel-Agol analytical transit light curve model"
description: "analytical light curve modeling with limb darkening, elliptic integrals, and transit parameter degeneracies"
---
{% raw %}
Kaisey Mandel and Eric Agol (2002) derived exact analytical formulas for exoplanetary transit light curves including stellar limb darkening using complete elliptic integrals.

## transit geometry and parameters

the transit light curve $F(t) / F_0$ depends on:
- planet-to-star radius ratio: $k \equiv R_p / R_\star$
- normalized center-to-center projected separation: $z(t) = d(t) / R_\star$
- impact parameter: $b = \frac{a \cos i}{R_\star} \left(\frac{1 - e^2}{1 + e \sin\omega}\right)$
- limb darkening profile $I(r) / I(0)$

the transit depth in the absence of limb darkening is simply the area ratio:

$$\delta = \frac{\Delta F}{F_0} = \left( \frac{R_p}{R_\star} \right)^2 = k^2$$

## quadratic limb darkening law

the intensity profile across the stellar disk is parameterized by:

$$\frac{I(\mu)}{I(1)} = 1 - u_1 (1 - \mu) - u_2 (1 - \mu)^2$$

where $\mu = \cos\theta = \sqrt{1 - r^2}$ ($r$ is normalized distance from center of star to limb).

## analytical regimes in the mandel-agol formulation

the normalized flux $F(z, k)$ is evaluated across distinct geometric phases:
1. **out of transit** ($z \ge 1 + k$):
   $$F(z, k) = 1$$
2. **ingress / egress** ($1 - k < z < 1 + k$): planet partially covers the stellar limb; computed via incomplete elliptic integrals of the first, second, and third kind ($F(\phi, k), E(\phi, k), \Pi(n, \phi, k)$).
3. **full transit (in-transit)** ($z \le 1 - k$): planet fully inside stellar disk:
   $$F(z, k) = 1 - \frac{1}{4\Omega} \left[ (1 - u_1 - 2u_2) k^2 + (u_1 + 2u_2) \mathcal{Q}(z, k) + \dots \right]$$
   where $\Omega = 1 - u_1/3 - u_2/6$ is the disk normalization factor.

implemented in fast modern codes (`batman`, `juliet`, `pytransit`), computing thousands of models per second for MCMC posterior sampling.

## see also

- [Exoplanetary_Astrophysics_MOC](../../04_Atlas/Exoplanetary_Astrophysics_MOC.html)
- [16_Transit_Light_Curve_Modeling_and_Limb_Darkening](../../02_Literature/Lectures/Exoplanetary_Astrophysics/16_Transit_Light_Curve_Modeling_and_Limb_Darkening.html)
- [Transit Modeling with batman](../Computational/Transit%20Modeling%20with%20batman.html)
- [Mean stellar density determination from transit observables](./Mean%20stellar%20density%20determination%20from%20transit%20observables.html)
- [Stellar Limb Darkening Laws](./Stellar%20Limb%20Darkening%20Laws.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (6)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="./Exoplanet%20atmospheric%20scale%20height%20and%20transmission%20spectroscopy.html" class="backlink-item">Exoplanet atmospheric scale height and transmission spectroscopy</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Exoplanetary_Astrophysics_MOC.html" class="backlink-item">Exoplanetary_Astrophysics_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Mean%20stellar%20density%20determination%20from%20transit%20observables.html" class="backlink-item">Mean stellar density determination from transit observables</a></li>
    <li class="backlink-item-wrap"><a href="./Rossiter-McLaughlin%20effect%20and%20spin-orbit%20obliquity.html" class="backlink-item">Rossiter-McLaughlin effect and spin-orbit obliquity</a></li>
    <li class="backlink-item-wrap"><a href="./Transit%20false%20positive%20vetting%20and%20blending%20validation.html" class="backlink-item">Transit false positive vetting and blending validation</a></li>
    <li class="backlink-item-wrap"><a href="./Transit%20timing%20variations%20and%20resonant%20multi-planet%20dynamics.html" class="backlink-item">Transit timing variations and resonant multi-planet dynamics</a></li>
  </ul>
</div>
