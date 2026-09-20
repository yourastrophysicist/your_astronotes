---
layout: "default"
title: "Rayleigh-Taylor and Kelvin-Helmholtz hydrodynamic instabilities"
---
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

- [[Fluid_and_Plasma_Dynamics_MOC]]
- [[Part3_Waves_Instabilities_and_Turbulence]]
- [[Rayleigh-Benard convection and Boussinesq approximation]]
- [[Vorticity dynamics and Kelvin circulation theorem]]
- [[Sedov-Taylor blast wave expansion]]



## Linked References

- [[Rayleigh-Benard convection and Boussinesq approximation]]
- [[Resistive ballooning mode and ion temperature gradient instability]]
- [[Fluid_and_Plasma_Dynamics_MOC]]


