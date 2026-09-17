---
layout: "default"
title: "Reynolds-averaged Navier-Stokes and turbulent Reynolds stress"
name: "Reynolds-averaged Navier-Stokes and turbulent Reynolds stress"
description: "Reynolds decomposition, unclosed turbulent momentum transport, and eddy viscosity modeling closures"
---
{% raw %}
Osborne Reynolds (1895) introduced statistical averaging to separate chaotic turbulent velocity and pressure fields into mean and fluctuating components.

## reynolds decomposition

the instantaneous velocity $\mathbf{u}$ and pressure $p$ are decomposed into an ensemble mean and turbulent fluctuation:

$$u_i(\mathbf{x}, t) = \bar{u}_i(\mathbf{x}, t) + u_i'(\mathbf{x}, t), \quad \overline{u_i'} = 0$$
$$p(\mathbf{x}, t) = \bar{p}(\mathbf{x}, t) + p'(\mathbf{x}, t), \quad \overline{p'} = 0$$

## derivation of the rans equations

substituting the decomposition into the incompressible Navier-Stokes equations and applying the averaging operator:

$$\frac{\partial \bar{u}_i}{\partial x_i} = 0$$

$$\rho \left( \frac{\partial \bar{u}_i}{\partial t} + \bar{u}_j \frac{\partial \bar{u}_i}{\partial x_j} \right) = -\frac{\partial \bar{p}}{\partial x_i} + \frac{\partial}{\partial x_j} \left( \mu \frac{\partial \bar{u}_i}{\partial x_j} - \rho \overline{u_i' u_j'} \right)$$

the non-linear convective term produces an additional symmetric tensor:

$$\tau_{ij}^{\text{turb}} = -\rho \overline{u_i' u_j'}$$

known as the **Reynolds stress tensor**. it represents the macroscopic transport of mean momentum by turbulent eddy fluctuations.

## the turbulence closure problem

the appearance of the 6 independent unknown Reynolds stresses $-\rho \overline{u_i' u_j'}$ renders the mean RANS system open and unclosed (more unknowns than equations).

### the boussinesq eddy viscosity hypothesis
Boussinesq modeled Reynolds stresses analogously to molecular viscous stresses:

$$-\rho \overline{u_i' u_j'} = \mu_t \left( \frac{\partial \bar{u}_i}{\partial x_j} + \frac{\partial \bar{u}_j}{\partial x_i} \right) - \frac{2}{3} \rho k_{\text{turb}} \delta_{ij}$$

where $\mu_t$ is the turbulent eddy viscosity (a property of the flow, not the fluid) and $k_{\text{turb}} = \frac{1}{2} \overline{u_i' u_i'}$ is turbulent kinetic energy.

## see also

- [Fluid_and_Plasma_Dynamics_MOC](../../04_Atlas/Fluid_and_Plasma_Dynamics_MOC.html)
- [Part3_Waves_Instabilities_and_Turbulence](../../02_Literature/Lectures/Fluid_and_Plasma_Dynamics/Part3_Waves_Instabilities_and_Turbulence.html)
- [Kolmogorov K41 turbulence cascade and five-thirds law](./Kolmogorov%20K41%20turbulence%20cascade%20and%20five-thirds%20law.html)
- [Chapman-Enskog expansion and Navier-Stokes derivation](./Chapman-Enskog%20expansion%20and%20Navier-Stokes%20derivation.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (2)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Fluid_and_Plasma_Dynamics_MOC.html" class="backlink-item">Fluid_and_Plasma_Dynamics_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Kolmogorov%20K41%20turbulence%20cascade%20and%20five-thirds%20law.html" class="backlink-item">Kolmogorov K41 turbulence cascade and five-thirds law</a></li>
  </ul>
</div>
