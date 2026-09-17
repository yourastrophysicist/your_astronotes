---
layout: "default"
title: "Chapman-Enskog expansion and Navier-Stokes derivation"
name: "Chapman-Enskog expansion and Navier-Stokes derivation"
description: "asymptotic perturbation expansion in Knudsen number bridging kinetic theory to the Navier-Stokes viscous equations"
---
{% raw %}
the Chapman-Enskog method systematically derives the hydrodynamic equations of fluid motion from the Boltzmann equation by perturbing around local thermodynamic equilibrium in powers of the small Knudsen number $\text{Kn} = \lambda_{\text{mfp}} / L \ll 1$.

## asymptotic expansion

expanding the distribution function $f$ in powers of the small parameter $\epsilon \sim \text{Kn}$:

$$f = f^{(0)} + \epsilon f^{(1)} + \epsilon^2 f^{(2)} + \dots$$

where $f^{(0)}$ is the local Maxwellian parameterized by the local density $n(\mathbf{x}, t)$, fluid velocity $\mathbf{u}(\mathbf{x}, t)$, and temperature $T(\mathbf{x}, t)$:

$$f^{(0)} = n \left(\frac{m}{2\pi k_B T}\right)^{3/2} \exp\left(-\frac{m c^2}{2 k_B T}\right), \quad \mathbf{c} = \mathbf{v} - \mathbf{u}$$

## order-by-order equations

1. **zeroth order ($\mathcal{O}(1)$)**:
   $$C(f^{(0)}) = 0$$
   taking moments of $f^{(0)}$ yields the ideal Euler equations:
   $$\frac{\partial \rho}{\partial t} + \nabla \cdot (\rho \mathbf{u}) = 0$$
   $$\rho \left( \frac{\partial \mathbf{u}}{\partial t} + \mathbf{u} \cdot \nabla \mathbf{u} \right) = -\nabla p + \rho \mathbf{g}$$

2. **first order ($\mathcal{O}(\epsilon)$)**:
   $$\left( \frac{\partial}{\partial t_0} + \mathbf{v} \cdot \nabla \right) f^{(0)} = C(f^{(0)}, f^{(1)}) + C(f^{(1)}, f^{(0)}) \equiv \mathcal{L}(f^{(1)})$$
   inverting the linearized collision operator $\mathcal{L}$ yields the first-order correction $f^{(1)}$, which generates the non-equilibrium viscous stress tensor $\tau_{ij}$ and conductive heat flux $\mathbf{q}$:
   $$\tau_{ij} = \int m \left( c_i c_j - \frac{1}{3}c^2 \delta_{ij} \right) f^{(1)} \, d^3v = \mu \left( \frac{\partial u_i}{\partial x_j} + \frac{\partial u_j}{\partial x_i} - \frac{2}{3} \nabla \cdot \mathbf{u} \, \delta_{ij} \right)$$
   $$\mathbf{q} = \int \frac{1}{2} m c^2 \mathbf{c} \, f^{(1)} \, d^3v = -\kappa \nabla T$$

## the navier-stokes equation

incorporating these fluxes into the momentum moment gives the compressible Navier-Stokes equation:

$$\rho \left( \frac{\partial \mathbf{u}}{\partial t} + \mathbf{u} \cdot \nabla \mathbf{u} \right) = -\nabla p + \nabla \cdot \boldsymbol{\tau} + \rho \mathbf{g}$$

where kinematic viscosity $\nu = \mu / \rho \sim v_{\text{th}} \lambda_{\text{mfp}}$.

## see also

- [Fluid_and_Plasma_Dynamics_MOC](../../04_Atlas/Fluid_and_Plasma_Dynamics_MOC.html)
- [Part1_Kinetic_Foundations_and_Fluid_Equations](../../02_Literature/Lectures/Fluid_and_Plasma_Dynamics/Part1_Kinetic_Foundations_and_Fluid_Equations.html)
- [Boltzmann H-theorem and Maxwellian distribution](./Boltzmann%20H-theorem%20and%20Maxwellian%20distribution.html)
- [Hagen-Poiseuille pipe flow and viscous dissipation](./Hagen-Poiseuille%20pipe%20flow%20and%20viscous%20dissipation.html)
- [Prandtl boundary layer theory and Blasius scaling](./Prandtl%20boundary%20layer%20theory%20and%20Blasius%20scaling.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (4)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="./Boltzmann%20H-theorem%20and%20Maxwellian%20distribution.html" class="backlink-item">Boltzmann H-theorem and Maxwellian distribution</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Fluid_and_Plasma_Dynamics_MOC.html" class="backlink-item">Fluid_and_Plasma_Dynamics_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Hagen-Poiseuille%20pipe%20flow%20and%20viscous%20dissipation.html" class="backlink-item">Hagen-Poiseuille pipe flow and viscous dissipation</a></li>
    <li class="backlink-item-wrap"><a href="./Reynolds-averaged%20Navier-Stokes%20and%20turbulent%20Reynolds%20stress.html" class="backlink-item">Reynolds-averaged Navier-Stokes and turbulent Reynolds stress</a></li>
  </ul>
</div>
