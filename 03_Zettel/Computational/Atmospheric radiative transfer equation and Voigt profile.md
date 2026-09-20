---
layout: "default"
title: "Atmospheric radiative transfer equation and Voigt profile"
---
the radiative transfer equation (RTE) governs the propagation, absorption, and emission of radiation through an exoplanetary or stellar atmosphere.

## the plane-parallel radiative transfer equation

in a 1D plane-parallel atmosphere stratified along vertical depth $z$, specific intensity $I_\nu(z, \mu)$ at frequency $\nu$ and cosine of zenith angle $\mu = \cos\theta$ satisfies:

$$\mu \frac{dI_\nu}{dz} = -\alpha_\nu I_\nu + j_\nu = -\kappa_\nu \rho I_\nu + j_\nu$$

defining vertical optical depth $d\tau_\nu = -\kappa_\nu \rho \, dz$ and source function $S_\nu \equiv j_\nu / (\kappa_\nu \rho)$:

$$\mu \frac{dI_\nu}{d\tau_\nu} = I_\nu - S_\nu$$

under Local Thermodynamic Equilibrium (LTE), Kirchhoff's law equates the source function to the Planck blackbody distribution: $S_\nu = B_\nu(T)$.
the formal solution (Schwarzschild equation) for upward emergent intensity is:

$$I_\nu(0, \mu) = I_\nu(\tau_{\text{max}}, \mu) e^{-\tau_{\text{max}}/\mu} + \int_0^{\tau_{\text{max}}} B_\nu(T(\tau)) e^{-\tau_\nu / \mu} \frac{d\tau_\nu}{\mu}$$

## molecular line broadening profiles

individual spectral lines undergo distinct broadening mechanisms:
1. **Natural (lifetime) & Collisional (pressure) broadening**:
   quantum uncertainty and molecular collisions perturb energy levels, producing a **Lorentz profile**:
   $$\phi_L(\nu) = \frac{1}{\pi} \frac{\gamma_L}{(\nu - \nu_0)^2 + \gamma_L^2}$$
   with wide power-law wings $\propto (\nu - \nu_0)^{-2}$.
2. **Thermal Doppler broadening**:
   Maxwellian velocity distribution of gas molecules produces a **Doppler Gaussian profile**:
   $$\phi_D(\nu) = \frac{1}{\sqrt{\pi} \Delta\nu_D} \exp\left( -\frac{(\nu - \nu_0)^2}{\Delta\nu_D^2} \right), \quad \Delta\nu_D = \frac{\nu_0}{c}\sqrt{\frac{2 k_B T}{m}}$$
   dominating the narrow line core.

## the voigt profile

the convolution of thermal Gaussian motion with collisional Lorentzian damping yields the **Voigt profile**:

$$\phi_V(\nu) = \int_{-\infty}^\infty \phi_D(\nu') \phi_L(\nu - \nu') \, d\nu' = \frac{1}{\sqrt{\pi}\Delta\nu_D} H(a, u)$$

where $u = (\nu - \nu_0)/\Delta\nu_D$ is normalized frequency, $a = \gamma_L / \Delta\nu_D$ is the damping parameter, and $H(a, u)$ is the **Voigt function**:

$$H(a, u) = \frac{a}{\pi} \int_{-\infty}^\infty \frac{e^{-y^2}}{(u - y)^2 + a^2} \, dy$$

evaluated in atmospheric codes (TauREx, petitRADTRANS) via the Faddeeva function $w(z) = e^{-z^2}\text{erfc}(-iz)$.

## see also

- [[Computational_Astrophysics_MOC]]
- [[07_Atmospheric_Radiative_Transfer_and_Line_Profiles]]
- [[Exoplanet atmospheric retrieval and TauREx framework]]
- [[Exoplanet atmospheric scale height and transmission spectroscopy]]



## Linked References

- [[Exoplanet atmospheric retrieval and TauREx framework]]
- [[Exoplanet atmospheric scale height and transmission spectroscopy]]
- [[Computational_Astrophysics_MOC]]


