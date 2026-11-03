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

* parent moc: [[Cosmology_of_the_Early_Universe_MOC]]
* related zettels:
  - Gauge transformations and Bardeen potentials
  - Gauge-invariant density perturbation and relativistic Poisson equation
  - [[Part5_GR_Cosmological_Perturbation_Theory]]

---

### General Relativity Mathematical & Oral Defense Panel

![baumann_fig09_p151.png](../../assets/images/baumann_fig09_p151.png)
*Cambridge Lecture Diagram: Cosmological horizon entry and conformal spacetime diagram for primordial perturbations.*



<!-- sources:wiki-arxiv -->
## Wikipedia and arXiv sources

- **Cosmological perturbation theory**. "In physical cosmology, cosmological perturbation theory is the theory by which the evolution of structure is understood in the Big Bang model. Cosmological perturbation theory may be broken into two categories: Newtonian or general relativistic." ([Wikipedia](https://en.wikipedia.org/wiki/Cosmological_perturbation_theory))
- **Cosmological perturbations**. "We review the study of inhomogeneous perturbations about a homogeneous and isotropic background cosmology. We adopt a coordinate based approach, but give geometrical interpretations of metric perturbations in terms of the expansion, shear and curvature of constant-time hypersurfaces and the orthogonal timelike vector field." ([arXiv:0809.4944](https://arxiv.org/abs/0809.4944))

> Definitions quoted from Wikipedia (CC BY-SA 4.0) and the arXiv abstract. Figures credited in their captions.
<!-- /sources:wiki-arxiv -->

## Linked References

- Curvature perturbation R and zeta
- Gauge transformations and Bardeen potentials
- Gauge-invariant density perturbation and relativistic Poisson equation
- [[Cosmology_of_the_Early_Universe_MOC]]
- [[General_Relativity_MOC]]


