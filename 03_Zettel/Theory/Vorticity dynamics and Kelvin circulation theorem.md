---
layout: "default"
title: "Vorticity dynamics and Kelvin circulation theorem"
name: "Vorticity dynamics and Kelvin circulation theorem"
description: "vortex lines, stretching, tilting, and the conservation of circulation along material contours in inviscid barotropic fluids"
---
{% raw %}
vorticity $\boldsymbol{\omega} = \nabla \times \mathbf{u}$ measures the local microscopic rotation of fluid elements. its transport governs rotating astronomical disks, atmospheres, and turbulent flows.

## the vorticity transport equation

taking the curl of the Navier-Stokes momentum equation:

$$\frac{\partial \mathbf{u}}{\partial t} + (\mathbf{u} \cdot \nabla)\mathbf{u} = -\frac{\nabla p}{\rho} + \mathbf{g} + \nu \nabla^2 \mathbf{u}$$

using the vector identity $(\mathbf{u} \cdot \nabla)\mathbf{u} = \nabla(u^2/2) - \mathbf{u} \times \boldsymbol{\omega}$:

$$\frac{\partial \boldsymbol{\omega}}{\partial t} + \nabla \times (\boldsymbol{\omega} \times \mathbf{u}) = \frac{\nabla \rho \times \nabla p}{\rho^2} + \nu \nabla^2 \boldsymbol{\omega}$$

rewriting the convective terms gives Helmholtz's vorticity equation:

$$\frac{D \boldsymbol{\omega}}{Dt} = (\boldsymbol{\omega} \cdot \nabla)\mathbf{u} - \boldsymbol{\omega}(\nabla \cdot \mathbf{u}) + \frac{\nabla \rho \times \nabla p}{\rho^2} + \nu \nabla^2 \boldsymbol{\omega}$$

1. **vortex stretching and tilting** ($(\boldsymbol{\omega} \cdot \nabla)\mathbf{u}$): stretches vortex filaments, intensifying $\boldsymbol{\omega}$ through angular momentum conservation (3D only, absent in 2D).
2. **baroclinic torque** ($\frac{\nabla \rho \times \nabla p}{\rho^2}$): generates vorticity whenever isobaric and isopycnic surfaces do not coincide.

## kelvin circulation theorem

circulation $\Gamma$ around a closed material curve $C(t)$ moving with the fluid velocity $\mathbf{u}$ is:

$$\Gamma = \oint_{C(t)} \mathbf{u} \cdot d\mathbf{l} = \iint_{S(t)} \boldsymbol{\omega} \cdot d\mathbf{S}$$

calculating the material time derivative for an inviscid ($\nu = 0$), barotropic ($p = p(\rho) \implies \nabla \rho \times \nabla p = 0$) fluid under conservative body forces:

$$\frac{d\Gamma}{dt} = \oint_{C(t)} \frac{D\mathbf{u}}{Dt} \cdot d\mathbf{l} + \oint_{C(t)} \mathbf{u} \cdot d\left(\frac{d\mathbf{l}}{dt}\right) = \oint_{C(t)} -\nabla h \cdot d\mathbf{l} + \oint_{C(t)} \mathbf{u} \cdot d\mathbf{u} = 0$$

circulation is strictly conserved in time. vortex lines are frozen into the fluid elements and move along with the flow.

## see also

- [Fluid_and_Plasma_Dynamics_MOC](../../04_Atlas/Fluid_and_Plasma_Dynamics_MOC.html)
- [Part2_Incompressible_and_Viscous_Flows](../../02_Literature/Lectures/Fluid_and_Plasma_Dynamics/Part2_Incompressible_and_Viscous_Flows.html)
- [Helmholtz vortex theorems and baroclinic torque](./Helmholtz%20vortex%20theorems%20and%20baroclinic%20torque.html)
- [Kolmogorov K41 turbulence cascade and five-thirds law](./Kolmogorov%20K41%20turbulence%20cascade%20and%20five-thirds%20law.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (5)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="./Cowling%20anti-dynamo%20theorem%20and%20turbulent%20alpha-Omega%20dynamo.html" class="backlink-item">Cowling anti-dynamo theorem and turbulent alpha-Omega dynamo</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Fluid_and_Plasma_Dynamics_MOC.html" class="backlink-item">Fluid_and_Plasma_Dynamics_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Helmholtz%20vortex%20theorems%20and%20baroclinic%20torque.html" class="backlink-item">Helmholtz vortex theorems and baroclinic torque</a></li>
    <li class="backlink-item-wrap"><a href="./Prandtl%20boundary%20layer%20theory%20and%20Blasius%20scaling.html" class="backlink-item">Prandtl boundary layer theory and Blasius scaling</a></li>
    <li class="backlink-item-wrap"><a href="./Rayleigh-Taylor%20and%20Kelvin-Helmholtz%20hydrodynamic%20instabilities.html" class="backlink-item">Rayleigh-Taylor and Kelvin-Helmholtz hydrodynamic instabilities</a></li>
  </ul>
</div>
