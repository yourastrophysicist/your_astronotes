---
layout: "default"
title: "Cowling anti-dynamo theorem and turbulent alpha-Omega dynamo"
---
dynamo theory explains how astronomical bodies (Earth, Sun, galaxies) generate and sustain macroscopic magnetic fields against ohmic decay through the motion of conducting fluids.

## cowling's anti-dynamo theorem (1933)

T.G. Cowling proved that a steady, axisymmetric magnetic field cannot be maintained by fluid motion:

$$\frac{\partial \mathbf{B}}{\partial t} = 0, \quad \frac{\partial}{\partial \phi} = 0$$

### proof by contradiction
in an axisymmetric configuration, the poloidal field $\mathbf{B}_p$ must possess at least one closed O-type neutral line where $\mathbf{B}_p = 0$. along this neutral ring, Ampère's law requires non-zero toroidal current:

$$j_\phi = \frac{1}{\mu_0} (\nabla \times \mathbf{B})_\phi \ne 0$$

from Ohm's law, $j_\phi = \sigma (E_\phi + (\mathbf{u} \times \mathbf{B})_\phi)$. at the neutral line where $\mathbf{B}_p = 0$, $(\mathbf{u} \times \mathbf{B})_\phi = u_r B_z - u_z B_r = 0$.
furthermore, by Stokes' theorem for an axisymmetric steady field, $\oint E_\phi dl = -\partial \Phi / \partial t = 0 \implies E_\phi = 0$.
this yields the contradiction:

$$j_\phi = \sigma (0 + 0) = 0 \ne j_\phi$$

steady magnetic fields cannot be purely axisymmetric; dynamos require 3D, non-axisymmetric turbulent motions.

## mean-field electrodynamics and the alpha-omega dynamo

decomposing velocity and magnetic fields into large-scale mean and turbulent fluctuations: $\mathbf{B} = \langle \mathbf{B} \rangle + \mathbf{b}'$, $\mathbf{u} = \langle \mathbf{u} \rangle + \mathbf{u}'$. averaging the induction equation introduces the **turbulent electromotive force**:

$$\boldsymbol{\mathcal{E}} = \langle \mathbf{u}' \times \mathbf{b}' \rangle = \alpha \langle \mathbf{B} \rangle - \beta \nabla \times \langle \mathbf{B} \rangle$$

1. **$\alpha$-effect**: cyclonic helical convection ($\alpha \approx -\frac{1}{3}\tau_{\text{corr}} \langle \mathbf{u}' \cdot (\nabla \times \mathbf{u}') \rangle$) twists toroidal field lines into poloidal loops, regenerating poloidal flux.
2. **$\Omega$-effect**: differential rotation ($d\Omega/dr \ne 0$) shears poloidal field lines into intense toroidal field belts.
3. **$\beta$-effect**: turbulent eddies enhance effective magnetic diffusivity: $\eta_t = \beta \approx \frac{1}{3} u_{\text{rms}} l_{\text{corr}} \gg \eta_{\text{molecular}}$.

the cyclic feedback between the $\alpha$-effect and $\Omega$-effect drives the 22-year solar magnetic activity cycle.

## see also

- [[Fluid_and_Plasma_Dynamics_MOC]]
- [[Part8_Reconnection_Relaxation_and_Dynamo_Theory]]
- [[Interstellar magnetic field tracers]]
- [[Vorticity dynamics and Kelvin circulation theorem]]



## Linked References

- [[Fluid_and_Plasma_Dynamics_MOC]]


