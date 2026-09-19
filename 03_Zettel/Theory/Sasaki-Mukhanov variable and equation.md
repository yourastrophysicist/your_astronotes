---
layout: "default"
title: "Sasaki-Mukhanov variable and equation"
---
# Sasaki-Mukhanov variable and equation

> *the canonically normalized gauge-invariant variable governing the coupled scalar field and metric perturbations.*

---

## core physical intuition

Because gravity is dynamic, fluctuations of the inflaton field $\delta\phi$ cannot be decoupled from fluctuations of the spacetime metric $\delta g_{\mu\nu}$. Solving the coupled system requires combining the scalar field fluctuation with the spatial metric perturbation into a single gauge-invariant master variable: the **Sasaki-Mukhanov variable** $v$.

When the second-order perturbed action of gravity plus scalar field is expressed in terms of $v$, it takes the canonical form of a free scalar field with a time-dependent mass term governed by the background evolution.

---

## key derivation & equations

The Sasaki-Mukhanov variable is defined as:
$$v(\tau, \vec{x}) \equiv a(\tau) \left[ \delta\phi(\tau, \vec{x}) + \frac{\dot{\phi}_0}{H} \psi(\tau, \vec{x}) \right] = z(\tau) \mathcal{R}(\tau, \vec{x})$$
where:
* $\mathcal{R}$ is the gauge-invariant comoving curvature perturbation.
* $z(\tau) \equiv a(\tau) \frac{\dot{\phi}_0}{H} = a(\tau) \sqrt{2\epsilon}\, M_{\rm Pl}$.

The quadratic perturbed action is:
$$S_{(2)} = \frac{1}{2} \int d\tau\, d^3 x \left[ (v')^2 - (\nabla v)^2 + \frac{z''}{z} v^2 \right]$$

Varying with respect to $v$ yields the **Mukhanov-Sasaki equation**:
$$v_k''(\tau) + \left(k^2 - \frac{z''}{z}\right) v_k(\tau) = 0$$

In quasi-de Sitter spacetime:
$$\frac{z''}{z} = \frac{\nu^2 - 1/4}{\tau^2}, \quad \nu \approx \frac{3}{2} + 3\epsilon - \eta$$

---

## astrophysical context

* Used in numerical perturbation codes to compute the primordial power spectrum.
* Quantizes the combined metric-matter degree of freedom from first principles.

---

## connections & zettel links

* parent moc: [Cosmology_of_the_Early_Universe_MOC](../../04_Atlas/Cosmology_of_the_Early_Universe_MOC.html)
* related zettels:
  - [Quantum fluctuations of the inflaton field](Quantum%20fluctuations%20of%20the%20inflaton%20field.html)
  - [Bunch-Davies vacuum and mode functions](Bunch-Davies%20vacuum%20and%20mode%20functions.html)
  - [Curvature perturbation R and zeta](Curvature%20perturbation%20R%20and%20zeta.html)
  - [Scalar primordial power spectrum and spectral index](Scalar%20primordial%20power%20spectrum%20and%20spectral%20index.html)
  - [Part3_Quantum_Perturbations_and_Power_Spectra](../../02_Literature/Lectures/Cosmology_of_the_Early_Universe/Part3_Quantum_Perturbations_and_Power_Spectra.html)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (4)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="Bunch-Davies%20vacuum%20and%20mode%20functions.html" class="backlink-item">Bunch-Davies vacuum and mode functions</a></li>
    <li class="backlink-item-wrap"><a href="Curvature%20perturbation%20R%20and%20zeta.html" class="backlink-item">Curvature perturbation R and zeta</a></li>
    <li class="backlink-item-wrap"><a href="Quantum%20fluctuations%20of%20the%20inflaton%20field.html" class="backlink-item">Quantum fluctuations of the inflaton field</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Cosmology_of_the_Early_Universe_MOC.html" class="backlink-item">Cosmology_of_the_Early_Universe_MOC</a></li>
  </ul>
</div>

