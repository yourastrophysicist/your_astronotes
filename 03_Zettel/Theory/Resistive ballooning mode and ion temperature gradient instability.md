---
layout: "default"
title: "Resistive ballooning mode and ion temperature gradient instability"
---
turbulent heat and particle transport across magnetic flux surfaces in tokamaks is driven by microinstabilities concentrated in regions of unfavourable magnetic curvature.

## the resistive ballooning mode (rbm)

in a toroidal magnetic field, the outboard side possesses "bad curvature" where the magnetic curvature vector $\boldsymbol{\kappa} = (\hat{\mathbf{b}} \cdot \nabla)\hat{\mathbf{b}}$ points in the same direction as the pressure gradient $\nabla p$ ($\boldsymbol{\kappa} \cdot \nabla p > 0$).
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

- [[Fluid_and_Plasma_Dynamics_MOC]]
- [[Part6_Two_Fluid_Theory_Transport_and_Microinstabilities]]
- [[Drift-reduced Braginskii equations and vorticity derivation]]
- [[Rayleigh-Taylor and Kelvin-Helmholtz hydrodynamic instabilities]]



## Linked References

- [[Drift-reduced Braginskii equations and vorticity derivation]]
- [[Gyrokinetic ordering and 5D phase space reduction]]
- [[Fluid_and_Plasma_Dynamics_MOC]]


