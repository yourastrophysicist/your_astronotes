---
layout: "default"
title: "Hagen-Poiseuille pipe flow and viscous dissipation"
---
Hagen-Poiseuille flow provides one of the classical exact analytical solutions to the incompressible Navier-Stokes equations, describing steady laminar flow through a straight circular pipe driven by an axial pressure gradient.

## momentum balance in cylindrical coordinates

for steady, axisymmetric, fully developed flow with $\mathbf{u} = u_z(r) \hat{\mathbf{z}}$, the radial and azimuthal momentum equations yield $\partial p / \partial r = \partial p / \partial \theta = 0$, so $p = p(z)$. the axial momentum equation reduces to:

$$\frac{1}{r} \frac{d}{dr} \left( r \frac{du_z}{dr} \right) = \frac{1}{\mu} \frac{dp}{dz} = -\frac{\Delta P}{\mu L}$$

integrating twice with respect to $r$:

$$u_z(r) = -\frac{\Delta P}{4 \mu L} r^2 + C_1 \ln r + C_2$$

## boundary conditions and velocity profile

1. **regularity at the centerline**: as $r \to 0$, $u_z$ must remain finite, requiring $C_1 = 0$.
2. **no-slip boundary condition at the pipe wall**: at $r = R$, $u_z(R) = 0$, which sets $C_2 = \frac{\Delta P}{4 \mu L} R^2$.

the resulting velocity profile is a parabolic Poiseuille profile:

$$u_z(r) = \frac{\Delta P}{4 \mu L} \left( R^2 - r^2 \right) = u_{\text{max}} \left( 1 - \frac{r^2}{R^2} \right)$$

where the maximum velocity on the centerline is $u_{\text{max}} = \frac{\Delta P R^2}{4 \mu L}$.

## the volumetric flow rate (hagen-poiseuille law)

integrating velocity over the circular cross-section:

$$Q = \int_0^R u_z(r) 2\pi r \, dr = 2\pi u_{\text{max}} \int_0^R \left( r - \frac{r^3}{R^2} \right) dr = \frac{\pi R^4 \Delta P}{8 \mu L}$$

the volumetric throughput scales with the fourth power of the pipe radius $R^4$.

## see also

- [[Fluid_and_Plasma_Dynamics_MOC]]
- [[Part2_Incompressible_and_Viscous_Flows]]
- [[Chapman-Enskog expansion and Navier-Stokes derivation]]
- [[Prandtl boundary layer theory and Blasius scaling]]



## Linked References

- [[Chapman-Enskog expansion and Navier-Stokes derivation]]
- [[Parker solar wind and transonic critical point]]
- [[Prandtl boundary layer theory and Blasius scaling]]
- [[Fluid_and_Plasma_Dynamics_MOC]]


