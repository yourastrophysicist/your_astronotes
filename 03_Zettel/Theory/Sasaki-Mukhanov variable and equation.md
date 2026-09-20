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

* parent moc: [[Cosmology_of_the_Early_Universe_MOC]]
* related zettels:
  - [[Quantum fluctuations of the inflaton field]]
  - [[Bunch-Davies vacuum and mode functions]]
  - [[Curvature perturbation R and zeta]]
  - [[Scalar primordial power spectrum and spectral index]]
  - [[Part3_Quantum_Perturbations_and_Power_Spectra]]



## Linked References

- [[Bunch-Davies vacuum and mode functions]]
- [[Curvature perturbation R and zeta]]
- [[Quantum fluctuations of the inflaton field]]
- [[Cosmology_of_the_Early_Universe_MOC]]


