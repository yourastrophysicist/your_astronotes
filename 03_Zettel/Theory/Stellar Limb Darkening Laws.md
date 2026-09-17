---
layout: "default"
title: "Stellar Limb Darkening Laws"
---
{% raw %}
# Stellar Limb Darkening Laws

Limb darkening describes the decrease in observed stellar specific intensity from the disk center toward the limb, caused by the temperature gradient in the stellar atmosphere.

## Physical Mechanism
Optical depth along a ray inclined at angle $\theta$ to the surface normal is:
$$\tau_\lambda = \int \kappa_\lambda \rho \, \frac{dz}{\cos \theta} = \frac{\tau_{\text{vertical}}}{\mu}, \quad \mu = \cos \theta$$
An observer looking at the center ($\mu = 1$) sees into deeper, hotter atmospheric layers ($T_1$). Looking toward the limb ($\mu \to 0$), the line of sight samples higher, cooler layers ($T_0 < T_1$), producing lower specific intensity $I_\lambda(\mu) < I_\lambda(1)$.

## Analytical Parameterizations

### 1. Linear Law (Schwarzschild 1906)
$$\frac{I(\mu)}{I(1)} = 1 - u (1 - \mu)$$

### 2. Quadratic Law (Kopal 1950)
The standard choice for optical transit modeling:
$$\frac{I(\mu)}{I(1)} = 1 - u_1 (1 - \mu) - u_2 (1 - \mu)^2$$
Physical requirements for monotonically decreasing, positive intensity:
$$u_1 + u_2 < 1, \quad u_1 > 0, \quad u_1 + 2 u_2 > 0$$

### 3. Square-Root Law (Diaz-Cordoves & Gimenez 1992)
Optimal for cool stars in the infrared:
$$\frac{I(\mu)}{I(1)} = 1 - v_1 (1 - \mu) - v_2 (1 - \sqrt{\mu})$$

### 4. Non-Linear 4-Parameter Law (Claret 2000)
$$\frac{I(\mu)}{I(1)} = 1 - \sum_{k=1}^4 c_k (1 - \mu^{k/2})$$

## Related Notes
- [Limb Darkening Computation with ldtk](../Computational/Limb%20Darkening%20Computation%20with%20ldtk.html)
- [Malavolta 11 - Transit Geometry and Analytical Light Curve Modeling](../../02_Literature/Lectures/Astrophysics_Laboratory_2/Malavolta%2011%20-%20Transit%20Geometry%20and%20Analytical%20Light%20Curve%20Modeling.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (8)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astrophysics_Laboratory_2_MOC.html" class="backlink-item">Astrophysics_Laboratory_2_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Exoplanet%20Transit%20Geometry%20and%20Impact%20Parameter.html" class="backlink-item">Exoplanet Transit Geometry and Impact Parameter</a></li>
    <li class="backlink-item-wrap"><a href="../Computational/Limb%20Darkening%20Computation%20with%20ldtk.html" class="backlink-item">Limb Darkening Computation with ldtk</a></li>
    <li class="backlink-item-wrap"><a href="../../02_Literature/Lectures/Astrophysics_Laboratory_2/Malavolta%2011%20-%20Transit%20Geometry%20and%20Analytical%20Light%20Curve%20Modeling.html" class="backlink-item">Malavolta 11 - Transit Geometry and Analytical Light Curve Modeling</a></li>
    <li class="backlink-item-wrap"><a href="./Mandel-Agol%20analytical%20transit%20light%20curve%20model.html" class="backlink-item">Mandel-Agol analytical transit light curve model</a></li>
    <li class="backlink-item-wrap"><a href="../../02_Literature/Lectures/Astrophysics_Laboratory_2/Piotto%2002%20-%20Atmospheric%20Characterization%20and%20Transit%20Spectroscopy.html" class="backlink-item">Piotto 02 - Atmospheric Characterization and Transit Spectroscopy</a></li>
    <li class="backlink-item-wrap"><a href="./Transit%20Depth%20and%20Ingress-Egress%20Timescales.html" class="backlink-item">Transit Depth and Ingress-Egress Timescales</a></li>
    <li class="backlink-item-wrap"><a href="../Computational/Transit%20Modeling%20with%20batman.html" class="backlink-item">Transit Modeling with batman</a></li>
  </ul>
</div>
