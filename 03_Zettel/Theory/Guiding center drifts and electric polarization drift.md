---
layout: "default"
title: "Guiding center drifts and electric polarization drift"
name: "Guiding center drifts and electric polarization drift"
description: "guiding-center expansion, ExB drift, magnetic gradient and curvature drifts, and the time-dependent polarization drift"
---
{% raw %}
in magnetized plasmas, a charged particle executes rapid cyclotron gyration around magnetic field lines while its guiding center drifts across field lines under external forces.

## cyclotron motion and guiding-center coordinates

the Lorentz equation of motion for a particle of mass $m$ and charge $q$ is:

$$m \frac{d\mathbf{v}}{dt} = q (\mathbf{E} + \mathbf{v} \times \mathbf{B})$$

for uniform $\mathbf{B} = B \hat{\mathbf{z}}$, the perpendicular velocity gyrates at the cyclotron frequency:

$$\Omega_c = \frac{q B}{m}, \quad \rho_L = \frac{v_\perp}{|\Omega_c|}$$

decomposing particle position into guiding center $\mathbf{R}$ and gyroradius vector $\boldsymbol{\rho}_L$: $\mathbf{r} = \mathbf{R} + \boldsymbol{\rho}_L$.

## general force drift and the exb drift

averaging over a gyroperiod for a general perpendicular force $\mathbf{F}_\perp$:

$$\mathbf{v}_D = \frac{\mathbf{F}_\perp \times \mathbf{B}}{q B^2}$$

1. **$E \times B$ drift**: setting $\mathbf{F} = q \mathbf{E}$:
   $$\mathbf{v}_E = \frac{\mathbf{E} \times \mathbf{B}}{B^2}$$
   *universal: independent of particle mass, charge, energy, and sign of charge; ions and electrons drift together, carrying zero net current.*

2. **grad-$B$ drift**: expanding field variations over the gyroradius $\nabla B$:
   $$\mathbf{v}_{\nabla B} = \frac{m v_\perp^2}{2 q B^3} (\mathbf{B} \times \nabla B)$$

3. **curvature drift**: from centrifugal force along curved magnetic lines with radius of curvature $\mathbf{R}_c$:
   $$\mathbf{v}_c = \frac{m v_\parallel^2}{q B^2} \frac{\mathbf{R}_c \times \mathbf{B}}{R_c^2}$$
   *grad-$B$ and curvature drifts depend on charge sign $q$, driving diamagnetic and equilibrium currents in curved magnetic configurations.*

## polarization drift

if the electric field varies in time ($d\mathbf{E}/dt \ne 0$), the inertial reaction force $\mathbf{F}_p = -m d\mathbf{v}_E / dt$ induces a drift:

$$\mathbf{v}_p = \frac{m}{q B^2} \frac{d\mathbf{E}_\perp}{dt}$$

because $\mathbf{v}_p \propto m/q$, the heavy ions dominate the polarization drift over electrons ($m_i \gg m_e$), generating the polarization current $\mathbf{j}_p = n e \mathbf{v}_{p, i} = \frac{\rho}{B^2} \frac{d\mathbf{E}_\perp}{dt}$ critical for low-frequency MHD wave propagation.

## see also

- [Fluid_and_Plasma_Dynamics_MOC](../../04_Atlas/Fluid_and_Plasma_Dynamics_MOC.html)
- [Part4_Single_Particle_Motion_and_Magnetic_Confinement](../../02_Literature/Lectures/Fluid_and_Plasma_Dynamics/Part4_Single_Particle_Motion_and_Magnetic_Confinement.html)
- [Magnetic mirror effect and adiabatic invariants](./Magnetic%20mirror%20effect%20and%20adiabatic%20invariants.html)
- [Tokamak magnetic topology and neoclassical banana orbits](./Tokamak%20magnetic%20topology%20and%20neoclassical%20banana%20orbits.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (3)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="./Ambipolar%20diffusion%20in%20unmagnetized%20and%20magnetized%20plasmas.html" class="backlink-item">Ambipolar diffusion in unmagnetized and magnetized plasmas</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Fluid_and_Plasma_Dynamics_MOC.html" class="backlink-item">Fluid_and_Plasma_Dynamics_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Magnetic%20mirror%20effect%20and%20adiabatic%20invariants.html" class="backlink-item">Magnetic mirror effect and adiabatic invariants</a></li>
  </ul>
</div>
