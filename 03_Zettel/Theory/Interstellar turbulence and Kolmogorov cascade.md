---
layout: "default"
title: "Interstellar turbulence and Kolmogorov cascade"
---
the interstellar medium is universally turbulent due to enormous astronomical length scales ($L \sim \text{pc}$) and low kinematic viscosity:

$$Re = \frac{L v}{\nu} \sim 10^5 - 10^8 \gg Re_{\text{crit}} \approx 2000$$

## flow regimes

- $Re \sim 0.16$: creeping laminar Stokes flow
- $Re \sim 100 - 140$: periodic vortex shedding (Kármán vortex street)
- $Re > 2000$: fully developed, multi-scale, fractal turbulence

## the kolmogorov cascade (1941)

energy injected at outer scale $L_0$ cascades losslessly through the inertial range:

$$\varepsilon \sim \frac{v(\ell)^3}{\ell} = \text{constant} \implies v(\ell) \propto \ell^{1/3}$$

kinetic energy power spectrum:

$$E(k) = C_K \varepsilon^{2/3} k^{-5/3}$$

dissipated into heat at the Kolmogorov microscale $\eta \sim (\nu^3/\varepsilon)^{1/4}$.

## supersonic turbulence and larson's laws

in cold molecular clouds, turbulence is supersonic ($\mathcal{M} \sim 5 - 20$), generating a log-normal density PDF and obeying **Larson's relations**:
- velocity dispersion: $\sigma_v \propto L^{0.5}$
- mean density: $\langle \rho \rangle \propto L^{-1}$

## see also

- [[Astrophysics_of_the_Interstellar_Medium_MOC]]
- [[Rankine-Hugoniot shock jump conditions]]
- [[Carraro_08_Shocks_Turbulence_and_MHD_Waves]]



## Linked References

- [[Kolmogorov K41 turbulence cascade and five-thirds law]]
- [[Astrophysics_of_the_Interstellar_Medium_MOC]]


