---
layout: "default"
title: "Ideal MHD equations and Alfven flux freezing theorem"
---
ideal Magnetohydrodynamics (MHD) treats a conducting plasma as a single magnetized continuous fluid on spatial and temporal scales exceeding the ion gyroradius and cyclotron period.

## the ideal mhd governing system

1. **mass conservation**:
   $$\frac{\partial \rho}{\partial t} + \nabla \cdot (\rho \mathbf{u}) = 0$$

2. **momentum conservation**:
   $$\rho \left( \frac{\partial \mathbf{u}}{\partial t} + (\mathbf{u} \cdot \nabla)\mathbf{u} \right) = -\nabla p + \mathbf{j} \times \mathbf{B} = -\nabla \left( p + \frac{B^2}{2\mu_0} \right) + \frac{(\mathbf{B} \cdot \nabla)\mathbf{B}}{\mu_0}$$
   where $B^2/2\mu_0$ is isotropic magnetic pressure, and $(\mathbf{B} \cdot \nabla)\mathbf{B}/\mu_0$ is magnetic tension acting like tension in an elastic string.

3. **ideal induction equation**:
   setting $\mathbf{E} + \mathbf{u} \times \mathbf{B} = 0$ in Faraday's law:
   $$\frac{\partial \mathbf{B}}{\partial t} = \nabla \times (\mathbf{u} \times \mathbf{B})$$

## alfven's flux freezing theorem

Hannes Alfvén (1942) proved that in a perfectly conducting fluid ($R_m = \mu_0 \sigma u L \gg 1$), the magnetic flux $\Phi = \iint_S \mathbf{B} \cdot d\mathbf{S}$ through any closed material contour moving with the fluid is strictly constant in time.

### mathematical proof
taking the material time derivative of flux through surface $S(t)$ bounded by curve $C(t)$:

$$\frac{d\Phi}{dt} = \iint_{S(t)} \frac{\partial \mathbf{B}}{\partial t} \cdot d\mathbf{S} + \oint_{C(t)} \mathbf{B} \cdot (\mathbf{u} \times d\mathbf{l})$$

using the vector identity $\mathbf{B} \cdot (\mathbf{u} \times d\mathbf{l}) = -(\mathbf{u} \times \mathbf{B}) \cdot d\mathbf{l}$ and Stokes' theorem:

$$\frac{d\Phi}{dt} = \iint_{S(t)} \left[ \frac{\partial \mathbf{B}}{\partial t} - \nabla \times (\mathbf{u} \times \mathbf{B}) \right] \cdot d\mathbf{S}$$

by the ideal induction equation, the bracketed term vanishes identically:

$$\frac{d\Phi}{dt} = 0$$

magnetic field lines are topologically frozen into fluid elements. fluid can flow freely along field lines, but any perpendicular motion carries field lines with it.

## see also

- [[Fluid_and_Plasma_Dynamics_MOC]]
- [[Part7_Magnetohydrodynamics_Equilibrium_and_Waves]]
- [[Sweet-Parker magnetic reconnection and Lundquist number]]
- [[Shear Alfven and magnetosonic wave modes in MHD]]



## Linked References

- [[Cylindrical Z-pinch equilibrium and Bennett relation]]
- [[Shear Alfven and magnetosonic wave modes in MHD]]
- [[Sweet-Parker magnetic reconnection and Lundquist number]]
- [[Fluid_and_Plasma_Dynamics_MOC]]


