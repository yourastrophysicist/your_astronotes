---
layout: "default"
title: "Curvature perturbation R and zeta"
---
# Curvature perturbation R and zeta

> *the gauge-invariant scalar quantities measuring spatial curvature, strictly conserved on super-horizon scales.*

---

## core physical intuition

To make predictions that connect inflation to late-time observables like the CMB and galaxy surveys, one needs a variable that does not depend on arbitrary coordinate choices and remains constant while outside the horizon.

Two closely related variables serve this purpose:
* $\mathcal{R}$: the curvature perturbation on comoving spatial hypersurfaces.
* $\zeta$: the curvature perturbation on uniform energy density spatial hypersurfaces.

On super-horizon scales ($k \ll aH$), $\mathcal{R}$ and $\zeta$ coincide and are **strictly conserved** for adiabatic fluctuations, regardless of the unknown physics of reheating or phase transitions.

---

## key derivation & equations

In a general gauge with metric perturbation $g_{ij} = a^2 [(1-2\phi)\delta_{ij} + 2\chi_{ij}]$:
* **Comoving curvature perturbation**:
  $$\mathcal{R} \equiv \phi + \frac{H}{\dot{\phi}_0}\delta\phi$$
* **Uniform density curvature perturbation**:
  $$\zeta \equiv -\phi - \mathcal{H}\frac{\delta\rho}{\rho_0'} = -\phi + \frac{\delta\rho}{3(\rho_0 + p_0)}$$

On super-horizon scales ($k \ll \mathcal{H}$), $\mathcal{R} \approx -\zeta$.

### Conservation theorem
From the perturbed energy conservation equation $\nabla_\mu T^\mu_0 = 0$:
$$\zeta' = -\frac{\mathcal{H}}{\rho_0 + p_0} \delta p_{\rm nad} - \frac{1}{3}\nabla^2(\dots)$$
where $\delta p_{\rm nad} = \delta p - c_s^2 \delta\rho$ is the non-adiabatic (entropy) pressure perturbation.

For single-field inflation, perturbations are purely adiabatic ($\delta p_{\rm nad} = 0$). Neglecting spatial gradients on super-horizon scales:
$$\zeta' = 0 \quad (k \ll aH)$$
This constant value is locked into the metric until horizon re-entry during the radiation or matter eras.

---

## astrophysical context

* Direct source for Sachs-Wolfe temperature anisotropies: $\frac{\Delta T}{T} \approx -\frac{1}{5}\zeta$.
* Initial conditions for CMB Boltzmann codes (CAMB, CLASS).

---

## connections & zettel links

* parent moc: [[Cosmology_of_the_Early_Universe_MOC]]
* related zettels:
  - [[Sasaki-Mukhanov variable and equation]]
  - [[Scalar primordial power spectrum and spectral index]]
  - [[Cosmological perturbation theory in General Relativity]]
  - [[Part3_Quantum_Perturbations_and_Power_Spectra]]



## Linked References

- [[Delta-N formalism]]
- [[Gauge transformations and Bardeen potentials]]
- [[Sasaki-Mukhanov variable and equation]]
- [[Scalar primordial power spectrum and spectral index]]
- [[Cosmology_of_the_Early_Universe_MOC]]


