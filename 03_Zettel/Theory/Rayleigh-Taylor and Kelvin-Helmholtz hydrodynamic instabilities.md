---
layout: "default"
title: "Rayleigh-Taylor and Kelvin-Helmholtz hydrodynamic instabilities"
name: "Rayleigh-Taylor and Kelvin-Helmholtz hydrodynamic instabilities"
description: "interfacial fluid instabilities driven by density stratification under acceleration and sheared tangential velocities"
---
{% raw %}
interfacial instabilities govern the mixing of distinct fluid layers across astrophysics, from supernova ejecta expansion to planetary atmospheres.

## 1. rayleigh-taylor instability (rti)

occurs when a heavy fluid of density $\rho_2$ is supported against gravity (or effective acceleration $g$ pointing downward toward the lighter fluid) by a lighter fluid of density $\rho_1$ ($\rho_2 > \rho_1$).

linearizing potential flow perturbations $\propto \exp(i k x - i \omega t + k z)$ across the interface gives the dispersion relation:

$$\omega^2 = -g k \left( \frac{\rho_2 - \rho_1}{\rho_2 + \rho_1} \right) = -g k \mathcal{A}$$

where $\mathcal{A} = (\rho_2 - \rho_1)/(\rho_2 + \rho_1)$ is the Atwood number ($0 < \mathcal{A} \le 1$).
because $\omega^2 < 0$, the growth rate $\gamma = \text{Im}(\omega)$ is:

$$\gamma_{\text{RT}} = \sqrt{g k \mathcal{A}}$$

interfacial ripples grow exponentially, forming characteristic rising bubbles of light fluid and falling spikes of dense fluid.

## 2. kelvin-helmholtz instability (khi)

occurs across an interface separating two fluid layers in relative tangential motion with relative shear velocity $\Delta U = U_1 - U_2$.

including both density difference and velocity shear, the general dispersion relation is:

$$\omega = k \frac{\rho_1 U_1 + \rho_2 U_2}{\rho_1 + \rho_2} \pm i k \frac{\sqrt{\rho_1 \rho_2}}{\rho_1 + \rho_2} \lvert U_1 - U_2\rvert$$

the imaginary component is unconditionally non-zero for any finite velocity shear $\Delta U > 0$, giving growth rate:

$$\gamma_{\text{KH}} = k \frac{\sqrt{\rho_1 \rho_2}}{\rho_1 + \rho_2} \lvert U_1 - U_2\rvert$$

shear rolls the interface into non-linear cat's-eye vortex spirals, breaking laminar flow into fully developed turbulence.

## see also

- [Fluid_and_Plasma_Dynamics_MOC](../../04_Atlas/Fluid_and_Plasma_Dynamics_MOC.html)
- [Part3_Waves_Instabilities_and_Turbulence](../../02_Literature/Lectures/Fluid_and_Plasma_Dynamics/Part3_Waves_Instabilities_and_Turbulence.html)
- [Rayleigh-Benard convection and Boussinesq approximation](./Rayleigh-Benard%20convection%20and%20Boussinesq%20approximation.html)
- [Vorticity dynamics and Kelvin circulation theorem](./Vorticity%20dynamics%20and%20Kelvin%20circulation%20theorem.html)
- [Sedov-Taylor blast wave expansion](./Sedov-Taylor%20blast%20wave%20expansion.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (3)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Fluid_and_Plasma_Dynamics_MOC.html" class="backlink-item">Fluid_and_Plasma_Dynamics_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Rayleigh-Benard%20convection%20and%20Boussinesq%20approximation.html" class="backlink-item">Rayleigh-Benard convection and Boussinesq approximation</a></li>
    <li class="backlink-item-wrap"><a href="./Resistive%20ballooning%20mode%20and%20ion%20temperature%20gradient%20instability.html" class="backlink-item">Resistive ballooning mode and ion temperature gradient instability</a></li>
  </ul>
</div>
