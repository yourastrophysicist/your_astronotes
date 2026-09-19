---
layout: "default"
title: "Mean stellar density determination from transit observables"
---
Sara Seager and Gabriela Mallén-Ornelas (2003) demonstrated that a high-precision photometric transit light curve directly determines the mean density of the host star $\bar{\rho}_\star$ independently of stellar models.

## mathematical derivation

for a circular orbit ($e = 0$) with $M_p \ll M_\star$, Kepler's third law relates semi-major axis $a$, period $P$, and stellar mass $M_\star$:

$$a^3 = \frac{G M_\star P^2}{4\pi^2}$$

dividing both sides by $R_\star^3$:

$$\left( \frac{a}{R_\star} \right)^3 = \frac{G P^2}{4\pi^2} \left( \frac{M_\star}{R_\star^3} \right)$$

the mean stellar density is defined as:

$$\bar{\rho}_\star \equiv \frac{M_\star}{\frac{4}{3}\pi R_\star^3}$$

rearranging:

$$\bar{\rho}_\star = \frac{3\pi}{G P^2} \left( \frac{a}{R_\star} \right)^3$$

## extracting a/Rstar from light curve observables

the total transit duration $T_{\text{tot}}$ (first to fourth contact) and flat-bottom duration $T_{\text{flat}}$ (second to third contact) are:

$$T_{\text{tot}} = \frac{P}{\pi} \arcsin\left( \frac{R_\star}{a} \frac{\sqrt{(1 + k)^2 - b^2}}{\sin i} \right)$$
$$T_{\text{flat}} = \frac{P}{\pi} \arcsin\left( \frac{R_\star}{a} \frac{\sqrt{(1 - k)^2 - b^2}}{\sin i} \right)$$

in the small angle approximation ($\arcsin x \approx x$):

$$\frac{a}{R_\star} = \frac{2 P}{\pi} \frac{k^{1/4}}{\sqrt{T_{\text{tot}}^2 - T_{\text{flat}}^2}}$$

substituting $a/R_\star$ into Kepler's relation directly yields $\bar{\rho}_\star$ from purely photometric observables ($P, k, T_{\text{tot}}, T_{\text{flat}}$).

### diagnostic power
comparing $\bar{\rho}_{\star, \text{transit}}$ to the spectroscopic density $\bar{\rho}_{\star, \text{spec}}$ derived from stellar models provides a sensitive test for orbital eccentricity ($e > 0$, the "photo-eccentric effect") or blended background stars.

## see also

- [Exoplanetary_Astrophysics_MOC](../../04_Atlas/Exoplanetary_Astrophysics_MOC.html)
- [16_Transit_Light_Curve_Modeling_and_Limb_Darkening](../../02_Literature/Lectures/Exoplanetary_Astrophysics/16_Transit_Light_Curve_Modeling_and_Limb_Darkening.html)
- [Mandel-Agol analytical transit light curve model](Mandel-Agol%20analytical%20transit%20light%20curve%20model.html)
- [Transit false positive vetting and blending validation](Transit%20false%20positive%20vetting%20and%20blending%20validation.html)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (2)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="Mandel-Agol%20analytical%20transit%20light%20curve%20model.html" class="backlink-item">Mandel-Agol analytical transit light curve model</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Exoplanetary_Astrophysics_MOC.html" class="backlink-item">Exoplanetary_Astrophysics_MOC</a></li>
  </ul>
</div>

