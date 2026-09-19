---
layout: "default"
title: "Cosmological perturbation theory in General Relativity"
---
# Cosmological perturbation theory in General Relativity

> *linearizing Einstein equations around an FLRW background using the scalar-vector-tensor decomposition.*

---

## core physical intuition

Real cosmological structures (galaxies, clusters, voids) are inhomogeneities. Because gravity is non-linear, analyzing them requires perturbing the metric and energy-momentum tensor around the smooth FLRW background: $g_{\mu\nu} = g_{\mu\nu}^{(0)} + \delta g_{\mu\nu}$.

By invoking the spatial rotational symmetry of the background, perturbations decompose uniquely into scalar, vector, and tensor modes. In linear theory, these three sectors completely decouple and evolve independently, transforming a forbidding set of 10 coupled non-linear partial differential equations into manageable decoupled ODEs.

---

## key derivation & equations

The perturbed line element in conformal time $\tau$ is:
$$ds^2 = a^2(\tau)\left[ -(1 + 2\psi)d\tau^2 + 2 w_i d\tau dx^i + \left((1 - 2\phi)\delta_{ij} + 2 \chi_{ij}\right) dx^i dx^j \right]$$

### Scalar-Vector-Tensor (SVT) decomposition:
* Vector shift: $w_i = \partial_i w + w_i^\perp$ with $\partial^i w_i^\perp = 0$.
* Spatial shear: $\chi_{ij} = \left(\partial_i\partial_j - \frac{1}{3}\delta_{ij}\nabla^2\right)\chi + \frac{1}{2}(\partial_i v_j + \partial_j v_i) + \frac{1}{2}h_{ij}$ with $\partial^i v_i = 0$, $\delta^{ij}h_{ij} = 0$, $\partial^i h_{ij} = 0$.

Total degrees of freedom:
* **Scalars (4)**: $\psi, \phi, w, \chi$ (couple to density and pressure perturbations)
* **Vectors (4)**: $w_i^\perp, v_i$ (decay as $a^{-2}$ in standard cosmology)
* **Tensors (2)**: $h_{ij}$ (gravitational waves)

The linearized Einstein tensor is:
$$\delta G^\mu_\nu = 8\pi G\, \delta T^\mu_\nu$$

---

## astrophysical context

* Backbone of modern theoretical cosmology and CMB Boltzmann solvers (CAMB, CLASS).
* Linear growth of large-scale structure prior to non-linear gravitational collapse.

---

## connections & zettel links

* parent moc: [Cosmology_of_the_Early_Universe_MOC](../../04_Atlas/Cosmology_of_the_Early_Universe_MOC.html)
* related zettels:
  - [Gauge transformations and Bardeen potentials](Gauge%20transformations%20and%20Bardeen%20potentials.html)
  - [Gauge-invariant density perturbation and relativistic Poisson equation](Gauge-invariant%20density%20perturbation%20and%20relativistic%20Poisson%20equation.html)
  - [Part5_GR_Cosmological_Perturbation_Theory](../../02_Literature/Lectures/Cosmology_of_the_Early_Universe/Part5_GR_Cosmological_Perturbation_Theory.html)

---

### General Relativity Mathematical & Oral Defense Panel

![baumann_fig09_p151.png](../../assets/images/baumann_fig09_p151.png)
*Cambridge Lecture Diagram: Cosmological horizon entry and conformal spacetime diagram for primordial perturbations.*

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (5)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="Curvature%20perturbation%20R%20and%20zeta.html" class="backlink-item">Curvature perturbation R and zeta</a></li>
    <li class="backlink-item-wrap"><a href="Gauge%20transformations%20and%20Bardeen%20potentials.html" class="backlink-item">Gauge transformations and Bardeen potentials</a></li>
    <li class="backlink-item-wrap"><a href="Gauge-invariant%20density%20perturbation%20and%20relativistic%20Poisson%20equation.html" class="backlink-item">Gauge-invariant density perturbation and relativistic Poisson equation</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Cosmology_of_the_Early_Universe_MOC.html" class="backlink-item">Cosmology_of_the_Early_Universe_MOC</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/General_Relativity_MOC.html" class="backlink-item">General_Relativity_MOC</a></li>
  </ul>
</div>

