---
layout: "default"
title: "Rayleigh-Benard convection and Boussinesq approximation"
---
Rayleigh-Bénard convection models fluid motion driven by a vertical temperature gradient in a fluid layer heated from below.

## the boussinesq approximation

Joseph Boussinesq (1903) showed that when temperature variations are small, density variations $\delta \rho$ can be neglected everywhere except in the gravitational buoyancy term:

$$\rho = \rho_0 [1 - \alpha_T (T - T_0)]$$

where $\alpha_T = -\frac{1}{\rho}\frac{\partial \rho}{\partial T}$ is the thermal expansion coefficient. the governing Navier-Stokes and heat transport equations reduce to:

$$\nabla \cdot \mathbf{u} = 0$$
$$\frac{\partial \mathbf{u}}{\partial t} + (\mathbf{u} \cdot \nabla)\mathbf{u} = -\frac{1}{\rho_0}\nabla p' + \nu \nabla^2 \mathbf{u} + g \alpha_T T' \hat{\mathbf{z}}$$
$$\frac{\partial T'}{\partial t} + (\mathbf{u} \cdot \nabla)T' = \beta w + \chi \nabla^2 T'$$

where $\beta = -dT_0/dz = \Delta T / d$ is the imposed temperature gradient, $\chi = \kappa / (\rho C_p)$ is thermal diffusivity, and $w$ is the vertical velocity.

## linear stability and the rayleigh number

linearizing the coupled perturbation equations for a mode $\propto \exp(\sigma t + i k_x x) \sin(n\pi z / d)$ yields the dimensionless balance between buoyant destabilization and dissipative damping:

$$\text{Ra} = \frac{g \alpha_T \Delta T d^3}{\nu \chi}$$

- for $\text{Ra} < \text{Ra}_c$: viscous damping and thermal diffusion overpower buoyancy; heat is transferred purely by conduction.
- for $\text{Ra} > \text{Ra}_c$: buoyant work exceeds dissipation, instigating convective roll overturning.

for stress-free, isothermal boundary plates, the critical Rayleigh number is:

$$\text{Ra}_c = \frac{27 \pi^4}{4} \approx 657.5$$

(and $\text{Ra}_c \approx 1708$ for rigid no-slip boundaries).

## see also

- [Fluid_and_Plasma_Dynamics_MOC](../../04_Atlas/Fluid_and_Plasma_Dynamics_MOC.html)
- [Part3_Waves_Instabilities_and_Turbulence](../../02_Literature/Lectures/Fluid_and_Plasma_Dynamics/Part3_Waves_Instabilities_and_Turbulence.html)
- [Rayleigh-Taylor and Kelvin-Helmholtz hydrodynamic instabilities](Rayleigh-Taylor%20and%20Kelvin-Helmholtz%20hydrodynamic%20instabilities.html)
- [Kolmogorov K41 turbulence cascade and five-thirds law](Kolmogorov%20K41%20turbulence%20cascade%20and%20five-thirds%20law.html)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (2)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="Rayleigh-Taylor%20and%20Kelvin-Helmholtz%20hydrodynamic%20instabilities.html" class="backlink-item">Rayleigh-Taylor and Kelvin-Helmholtz hydrodynamic instabilities</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Fluid_and_Plasma_Dynamics_MOC.html" class="backlink-item">Fluid_and_Plasma_Dynamics_MOC</a></li>
  </ul>
</div>

