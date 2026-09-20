---
layout: "default"
title: "Grad-Shafranov equation and axisymmetric tokamak equilibria"
---
the Grad-Shafranov equation is the fundamental 2D non-linear elliptic partial differential equation describing ideal magnetohydrostatic equilibrium ($\nabla p = \mathbf{j} \times \mathbf{B}$) in axisymmetric toroidal geometry.

## magnetic field representation

in cylindrical coordinates $(R, \phi, Z)$ with toroidal symmetry ($\partial / \partial \phi = 0$), the divergence-free condition $\nabla \cdot \mathbf{B} = 0$ allows the magnetic field to be expressed in terms of the **poloidal flux function** $\psi(R, Z)$ and **toroidal field function** $F(\psi) = R B_\phi$:

$$\mathbf{B} = \frac{1}{R} \nabla\psi \times \hat{\boldsymbol{\phi}} + \frac{F(\psi)}{R} \hat{\boldsymbol{\phi}}$$

where constant-$\psi$ contours trace nested poloidal magnetic flux surfaces.

## force balance and flux surface quantities

taking the scalar product of $\nabla p = \mathbf{j} \times \mathbf{B}$ with $\mathbf{B}$ and $\mathbf{j}$:

$$\mathbf{B} \cdot \nabla p = 0, \quad \mathbf{j} \cdot \nabla p = 0$$

pressure is constant along magnetic field lines and current lines. therefore, $p = p(\psi)$ is a function solely of the flux label $\psi$. similarly, Ampère's law demonstrates that $F = F(\psi)$.

## the master equation

calculating current density $\mathbf{j} = \frac{1}{\mu_0} \nabla \times \mathbf{B}$ and matching the radial force balance component $\nabla p = \mathbf{j} \times \mathbf{B}$ yields:

$$\Delta^* \psi = -\mu_0 R^2 \frac{dp}{d\psi} - F(\psi) \frac{dF}{d\psi}$$

where the elliptic Shafranov operator $\Delta^*$ is:

$$\Delta^* \psi \equiv R \frac{\partial}{\partial R}\left(\frac{1}{R}\frac{\partial \psi}{\partial R}\right) + \frac{\partial^2 \psi}{\partial Z^2} = R^2 \nabla \cdot \left( \frac{\nabla\psi}{R^2} \right)$$

specifying the two thermodynamic profile functions $p(\psi)$ and $F(\psi)$ alongside boundary conductor shapes uniquely determines the 2D magnetic topology, Shafranov shift, and plasma pressure limits (beta limits $\beta = 2\mu_0 \langle p \rangle / B^2$).

## see also

- [[Fluid_and_Plasma_Dynamics_MOC]]
- [[Part7_Magnetohydrodynamics_Equilibrium_and_Waves]]
- [[Tokamak magnetic topology and neoclassical banana orbits]]
- [[Cylindrical Z-pinch equilibrium and Bennett relation]]



## Linked References

- [[Cylindrical Z-pinch equilibrium and Bennett relation]]
- [[Tokamak magnetic topology and neoclassical banana orbits]]
- [[Fluid_and_Plasma_Dynamics_MOC]]


