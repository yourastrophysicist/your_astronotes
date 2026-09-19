---
layout: "default"
title: "Acoustic sound wave propagation in compressible gas"
---
acoustic waves represent longitudinal, adiabatic compressional disturbances propagating through an elastic gas via molecular collisions.

## linearization of the fluid equations

considering small perturbations around a static, uniform background: $\rho = \rho_0 + \rho_1$, $p = p_0 + p_1$, $\mathbf{u} = \mathbf{u}_1$, where subscripts 1 denote first-order quantities:

1. **linearized continuity**:
   $$\frac{\partial \rho_1}{\partial t} + \rho_0 \nabla \cdot \mathbf{u}_1 = 0$$

2. **linearized momentum (Euler)**:
   $$\rho_0 \frac{\partial \mathbf{u}_1}{\partial t} = -\nabla p_1$$

3. **equation of state**:
   assuming adiabatic compression (entropy $s = \text{const}$), pressure perturbations are directly proportional to density perturbations:
   $$p_1 = \left( \frac{\partial p}{\partial \rho} \right)_s \rho_1 \equiv c_s^2 \rho_1$$
   for an ideal gas with adiabatic index $\gamma = C_p / C_v$:
   $$c_s = \sqrt{\frac{\gamma p_0}{\rho_0}} = \sqrt{\frac{\gamma k_B T_0}{\mu m_p}}$$

## the acoustic wave equation

taking $\partial/\partial t$ of the continuity equation and substituting $\nabla \cdot (\partial \mathbf{u}_1 / \partial t)$ from momentum:

$$\frac{\partial^2 \rho_1}{\partial t^2} - c_s^2 \nabla^2 \rho_1 = 0$$

for a plane wave mode $\rho_1 \propto \exp[i(\mathbf{k} \cdot \mathbf{x} - \omega t)]$, the dispersion relation is linear and non-dispersive:

$$\omega^2 = c_s^2 k^2 \implies v_{\text{ph}} = \frac{\omega}{k} = c_s, \quad v_g = \frac{d\omega}{dk} = c_s$$

all frequencies travel at the exact same phase and group velocity, preserving sound wave packet profiles.

## see also

- [Fluid_and_Plasma_Dynamics_MOC](../../04_Atlas/Fluid_and_Plasma_Dynamics_MOC.html)
- [Part3_Waves_Instabilities_and_Turbulence](../../02_Literature/Lectures/Fluid_and_Plasma_Dynamics/Part3_Waves_Instabilities_and_Turbulence.html)
- [Jeans gravitational instability and Jeans mass](Jeans%20gravitational%20instability%20and%20Jeans%20mass.html)
- [Shear Alfven and magnetosonic wave modes in MHD](Shear%20Alfven%20and%20magnetosonic%20wave%20modes%20in%20MHD.html)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (2)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="Jeans%20gravitational%20instability%20and%20Jeans%20mass.html" class="backlink-item">Jeans gravitational instability and Jeans mass</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Fluid_and_Plasma_Dynamics_MOC.html" class="backlink-item">Fluid_and_Plasma_Dynamics_MOC</a></li>
  </ul>
</div>

