---
layout: "default"
title: "Resistive ballooning mode and ion temperature gradient instability"
name: "Resistive ballooning mode and ion temperature gradient instability"
description: "bad curvature driven instabilities, line tying limits, and the one-third resistivity scaling in tokamak edge turbulence"
---
{% raw %}
turbulent heat and particle transport across magnetic flux surfaces in tokamaks is driven by microinstabilities concentrated in regions of unfavourable magnetic curvature.

## the resistive ballooning mode (rbm)

in a toroidal magnetic field, the outboard side possesses "bad curvature" where the magnetic curvature vector $\boldsymbol{\kappa} = (\hat{\mathbf{b}} \cdot \nabla)\hat{\mathbf{b}}$ points in the same direction as the pressure gradient $\nabla p$ ($oldsymbol{\kappa} \cdot \nabla p > 0$).
this creates a Rayleigh-Taylor-like gravitational instability with effective acceleration $g_{\text{eff}} = 2 c_s^2 / R$.

in ideal MHD, magnetic tension resists field line bending. however, finite Spitzer resistivity $\eta_\parallel$ breaks ideal line tying by decoupling the electrostatic potential from the magnetic field through Ohm's law:

$$\eta_\parallel j_\parallel = -\nabla_\parallel \phi + \frac{T_e}{e n_e} \nabla_\parallel n_e$$

combining Ohm's law with the drift-reduced vorticity equation yields the characteristic RBM linear growth rate:

$$\gamma_{\text{RBM}} = \left( \frac{2 c_s^2 \eta_\parallel k_\perp^2}{R L_p} \right)^{1/3} \propto \eta_\parallel^{1/3}$$

because edge temperatures are cold ($T_e \sim 20 - 50\text{ eV}$), Spitzer resistivity $\eta_\parallel \propto T_e^{-3/2}$ is large, making RBM the dominant mechanism driving anomalous edge particle transport.

## ion temperature gradient (itg) instability

in the hotter core, electrostatic drift waves are driven unstable by steep ion temperature gradients:

$$\eta_i \equiv \frac{d\ln T_i / dr}{d\ln n / dr} = \frac{L_n}{L_{T_i}} > \eta_{i, c} \approx 1 - 2$$

when the temperature gradient length $L_{T_i}$ is shorter than the critical threshold, sound waves resonance with ion diamagnetic drifts, triggering radial heat transport that clamps core temperatures.

## see also

- [Fluid_and_Plasma_Dynamics_MOC](../../04_Atlas/Fluid_and_Plasma_Dynamics_MOC.html)
- [Part6_Two_Fluid_Theory_Transport_and_Microinstabilities](../../02_Literature/Lectures/Fluid_and_Plasma_Dynamics/Part6_Two_Fluid_Theory_Transport_and_Microinstabilities.html)
- [Drift-reduced Braginskii equations and vorticity derivation](./Drift-reduced%20Braginskii%20equations%20and%20vorticity%20derivation.html)
- [Rayleigh-Taylor and Kelvin-Helmholtz hydrodynamic instabilities](./Rayleigh-Taylor%20and%20Kelvin-Helmholtz%20hydrodynamic%20instabilities.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (3)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="./Drift-reduced%20Braginskii%20equations%20and%20vorticity%20derivation.html" class="backlink-item">Drift-reduced Braginskii equations and vorticity derivation</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Fluid_and_Plasma_Dynamics_MOC.html" class="backlink-item">Fluid_and_Plasma_Dynamics_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Gyrokinetic%20ordering%20and%205D%20phase%20space%20reduction.html" class="backlink-item">Gyrokinetic ordering and 5D phase space reduction</a></li>
  </ul>
</div>
