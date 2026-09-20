---
layout: "default"
title: "Reynolds-averaged Navier-Stokes and turbulent Reynolds stress"
---
Osborne Reynolds (1895) introduced statistical averaging to separate chaotic turbulent velocity and pressure fields into mean and fluctuating components.

## reynolds decomposition

the instantaneous velocity $\mathbf{u}$ and pressure $p$ are decomposed into an ensemble mean and turbulent fluctuation:

$$u_i(\mathbf{x}, t) = \bar{u}_i(\mathbf{x}, t) + u_i'(\mathbf{x}, t), \quad \overline{u_i'} = 0$$
$$p(\mathbf{x}, t) = \bar{p}(\mathbf{x}, t) + p'(\mathbf{x}, t), \quad \overline{p'} = 0$$

## derivation of the rans equations

substituting the decomposition into the incompressible Navier-Stokes equations and applying the averaging operator:

$$\frac{\partial \bar{u}_i}{\partial x_i} = 0$$

$$\rho \left( \frac{\partial \bar{u}_i}{\partial t} + \bar{u}_j \frac{\partial \bar{u}_i}{\partial x_j} \right) = -\frac{\partial \bar{p}}{\partial x_i} + \frac{\partial}{\partial x_j} \left( \mu \frac{\partial \bar{u}_i}{\partial x_j} - \rho \overline{u_i' u_j'} \right)$$

the non-linear convective term produces an additional symmetric tensor:

$$\tau_{ij}^{\text{turb}} = -\rho \overline{u_i' u_j'}$$

known as the **Reynolds stress tensor**. it represents the macroscopic transport of mean momentum by turbulent eddy fluctuations.

## the turbulence closure problem

the appearance of the 6 independent unknown Reynolds stresses $-\rho \overline{u_i' u_j'}$ renders the mean RANS system open and unclosed (more unknowns than equations).

### the boussinesq eddy viscosity hypothesis
Boussinesq modeled Reynolds stresses analogously to molecular viscous stresses:

$$-\rho \overline{u_i' u_j'} = \mu_t \left( \frac{\partial \bar{u}_i}{\partial x_j} + \frac{\partial \bar{u}_j}{\partial x_i} \right) - \frac{2}{3} \rho k_{\text{turb}} \delta_{ij}$$

where $\mu_t$ is the turbulent eddy viscosity (a property of the flow, not the fluid) and $k_{\text{turb}} = \frac{1}{2} \overline{u_i' u_i'}$ is turbulent kinetic energy.

## see also

- [[Fluid_and_Plasma_Dynamics_MOC]]
- [[Part3_Waves_Instabilities_and_Turbulence]]
- [[Kolmogorov K41 turbulence cascade and five-thirds law]]
- [[Chapman-Enskog expansion and Navier-Stokes derivation]]



## Linked References

- [[Kolmogorov K41 turbulence cascade and five-thirds law]]
- [[Fluid_and_Plasma_Dynamics_MOC]]


