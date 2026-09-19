---
layout: "default"
title: "Magnetic mirror effect and adiabatic invariants"
---
magnetic mirroring confines charged particles in inhomogeneous magnetic fields where field lines converge, underpinning planetary radiation belts (Van Allen belts) and magnetic mirror fusion devices.

## the first adiabatic invariant

for slow spatial and temporal magnetic field variations ($\omega \ll \Omega_c$, $\rho_L \ll L_B$), the action integral $\oint p_\perp dq_\perp$ is an adiabatic invariant. this corresponds to the magnetic moment:

$$\mu = \frac{\frac{1}{2} m v_\perp^2}{B} = \text{const}$$

## the parallel mirror force

as a charged particle gyrates into a converging magnetic field ($\nabla_\parallel B > 0$), conservation of $\nabla \cdot \mathbf{B} = 0$ requires a non-zero radial magnetic field component $B_r = -\frac{r}{2} \frac{\partial B_z}{\partial z}$.
the Lorentz force component parallel to $\mathbf{B}$ is:

$$F_\parallel = q (\mathbf{v}_\perp \times \mathbf{B})_\parallel = -q v_\theta B_r = -\mu \frac{\partial B}{\partial s} = -\nabla_\parallel (\mu B)$$

converging magnetic field lines exert a repulsive parallel force pushing particles toward regions of weaker magnetic field.

## reflection condition and the loss cone

in a static magnetic field, total kinetic energy is conserved:

$$E = \frac{1}{2} m v_\parallel^2 + \frac{1}{2} m v_\perp^2 = \frac{1}{2} m v_\parallel^2 + \mu B = \text{const}$$

as $B$ increases, $v_\perp^2$ must increase to preserve $\mu$. by energy conservation, $v_\parallel$ decreases until reaching a reflection turning point where $v_\parallel = 0$ at $B = B_{\text{ref}} = E / \mu$.

for a mirror machine with minimum central field $B_0$ and maximum choke field $B_{\text{max}}$ (mirror ratio $R_m = B_{\text{max}} / B_0$):
particles with pitch angle $\alpha_0 = \arcsin(v_{\perp 0} / v_0)$ are trapped if:

$$\sin^2 \alpha_0 \ge \frac{1}{R_m}$$

particles with smaller pitch angles lie inside the **loss cone** and escape through the choke ends:

$$\alpha_{\text{loss}} = \arcsin\left( \frac{1}{\sqrt{R_m}} \right)$$

## see also

- [Fluid_and_Plasma_Dynamics_MOC](../../04_Atlas/Fluid_and_Plasma_Dynamics_MOC.html)
- [Part4_Single_Particle_Motion_and_Magnetic_Confinement](../../02_Literature/Lectures/Fluid_and_Plasma_Dynamics/Part4_Single_Particle_Motion_and_Magnetic_Confinement.html)
- [Guiding center drifts and electric polarization drift](Guiding%20center%20drifts%20and%20electric%20polarization%20drift.html)
- [Tokamak magnetic topology and neoclassical banana orbits](Tokamak%20magnetic%20topology%20and%20neoclassical%20banana%20orbits.html)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (3)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="Guiding%20center%20drifts%20and%20electric%20polarization%20drift.html" class="backlink-item">Guiding center drifts and electric polarization drift</a></li>
    <li class="backlink-item-wrap"><a href="Tokamak%20magnetic%20topology%20and%20neoclassical%20banana%20orbits.html" class="backlink-item">Tokamak magnetic topology and neoclassical banana orbits</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Fluid_and_Plasma_Dynamics_MOC.html" class="backlink-item">Fluid_and_Plasma_Dynamics_MOC</a></li>
  </ul>
</div>

