---
layout: "default"
title: "Kolmogorov K41 turbulence cascade and five-thirds law"
---
Andrei Kolmogorov (1941) formulated the statistical theory of fully developed, homogeneous, isotropic hydrodynamic turbulence.

## the richardson-kolmogorov energy cascade

kinetic energy is injected into the fluid at large integral scales $L$ by external forcing. non-linear vortex stretching transfers this energy across progressively smaller eddies without significant viscous dissipation, until reaching the microscopic Kolmogorov scale $\eta$, where molecular viscosity dissipates energy into heat at mean rate $\epsilon$:

$$\epsilon = \frac{dE}{dt} \sim \frac{u_{\text{rms}}^3}{L} = \text{const}$$

## the three kolmogorov hypotheses

1. **local isotropy**: at sufficiently high Reynolds numbers, small-scale turbulent motions ($r \ll L$) are statistically isotropic and homogeneous.
2. **first similarity hypothesis**: at small scales ($r \ll L$), statistics depend uniquely on energy dissipation rate $\epsilon$ and kinematic viscosity $\nu$. this defines the dissipation microscale:
   $$\eta = \left( \frac{\nu^3}{\epsilon} \right)^{1/4}$$
3. **second similarity hypothesis**: within the **inertial subrange** ($\eta \ll r \ll L$), viscous effects are negligible. eddy statistics depend solely on the energy transfer rate $\epsilon$.

## derivation of the -5/3 energy spectrum

the turbulent kinetic energy per unit mass is related to the omnidirectional energy spectrum $E(k)$ by:

$$\frac{1}{2} \langle   \vert\mathbf{u}'\vert ^2 \rangle = \int_0^\infty E(k) \, dk$$

by dimensional analysis in the inertial subrange, $E(k)$ can depend only on wavenumber $k$ ($[k] = \text{L}^{-1}$) and dissipation rate $\epsilon$ ($[\epsilon] = \text{L}^2 \text{T}^{-3}$):

$$[E(k)] = \text{L}^3 \text{T}^{-2} = (\epsilon)^a (k)^b = (\text{L}^2 \text{T}^{-3})^a (\text{L}^{-1})^b$$

equating dimensions:
- time: $-3a = -2 \implies a = 2/3$
- length: $2a - b = 3 \implies b = 2(2/3) - 3 = -5/3$

yielding Kolmogorov's famous $-5/3$ law:

$$E(k) = C_K \epsilon^{2/3} k^{-5/3}$$

where $C_K \approx 1.5$ is the empirical Kolmogorov constant.

## see also

- [[Fluid_and_Plasma_Dynamics_MOC]]
- [[Part3_Waves_Instabilities_and_Turbulence]]
- [[Reynolds-averaged Navier-Stokes and turbulent Reynolds stress]]
- [[Interstellar turbulence and Kolmogorov cascade]]



## Linked References

- [[Rayleigh-Benard convection and Boussinesq approximation]]
- [[Reynolds-averaged Navier-Stokes and turbulent Reynolds stress]]
- [[Vorticity dynamics and Kelvin circulation theorem]]
- [[Fluid_and_Plasma_Dynamics_MOC]]


