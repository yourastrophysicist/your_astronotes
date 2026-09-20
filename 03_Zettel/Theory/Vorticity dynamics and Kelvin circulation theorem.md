---
layout: "default"
title: "Vorticity dynamics and Kelvin circulation theorem"
---
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

- [[Fluid_and_Plasma_Dynamics_MOC]]
- [[Part2_Incompressible_and_Viscous_Flows]]
- [[Helmholtz vortex theorems and baroclinic torque]]
- [[Kolmogorov K41 turbulence cascade and five-thirds law]]



## Linked References

- [[Cowling anti-dynamo theorem and turbulent alpha-Omega dynamo]]
- [[Helmholtz vortex theorems and baroclinic torque]]
- [[Prandtl boundary layer theory and Blasius scaling]]
- [[Rayleigh-Taylor and Kelvin-Helmholtz hydrodynamic instabilities]]
- [[Fluid_and_Plasma_Dynamics_MOC]]


