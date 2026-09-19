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

* parent moc: [Cosmology_of_the_Early_Universe_MOC](../../04_Atlas/Cosmology_of_the_Early_Universe_MOC.html)
* related zettels:
  - [Sasaki-Mukhanov variable and equation](Sasaki-Mukhanov%20variable%20and%20equation.html)
  - [Scalar primordial power spectrum and spectral index](Scalar%20primordial%20power%20spectrum%20and%20spectral%20index.html)
  - [Cosmological perturbation theory in General Relativity](Cosmological%20perturbation%20theory%20in%20General%20Relativity.html)
  - [Part3_Quantum_Perturbations_and_Power_Spectra](../../02_Literature/Lectures/Cosmology_of_the_Early_Universe/Part3_Quantum_Perturbations_and_Power_Spectra.html)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (5)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="Delta-N%20formalism.html" class="backlink-item">Delta-N formalism</a></li>
    <li class="backlink-item-wrap"><a href="Gauge%20transformations%20and%20Bardeen%20potentials.html" class="backlink-item">Gauge transformations and Bardeen potentials</a></li>
    <li class="backlink-item-wrap"><a href="Sasaki-Mukhanov%20variable%20and%20equation.html" class="backlink-item">Sasaki-Mukhanov variable and equation</a></li>
    <li class="backlink-item-wrap"><a href="Scalar%20primordial%20power%20spectrum%20and%20spectral%20index.html" class="backlink-item">Scalar primordial power spectrum and spectral index</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Cosmology_of_the_Early_Universe_MOC.html" class="backlink-item">Cosmology_of_the_Early_Universe_MOC</a></li>
  </ul>
</div>

