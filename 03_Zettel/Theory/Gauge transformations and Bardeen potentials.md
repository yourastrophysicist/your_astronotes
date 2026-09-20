---
layout: "default"
title: "Gauge transformations and Bardeen potentials"
---
# Gauge transformations and Bardeen potentials

> *dismantling fictitious coordinate perturbations and constructing physical gauge-invariant gravitational potentials.*

---

## core physical intuition

In General Relativity, coordinates have no physical meaning. A perturbation is defined as the difference between the physical spacetime and a chosen background. Choosing a wrinkled time-slicing can create a fictitious density perturbation in a completely homogeneous universe, or conversely, erase a real physical fluctuation.

To eliminate these gauge artifacts, James Bardeen (1980) constructed specific linear combinations of metric components that remain strictly invariant under arbitrary infinitesimal coordinate shifts. These **Bardeen potentials** $\Phi$ and $\Psi$ represent the true, physical gravitational perturbations.

---

## key derivation & equations

Under an infinitesimal coordinate shift $x^\mu \to \tilde{x}^\mu = x^\mu + \xi^\mu$ with $\xi^0 = \alpha$ and $\xi^i = \partial^i \beta + d^i$:
$$\tilde{\psi} = \psi - \mathcal{H}\alpha - \alpha'$$
$$\tilde{\phi} = \phi + \mathcal{H}\alpha + \frac{1}{3}\nabla^2\beta$$
$$\tilde{w} = w + \alpha - \beta'$$
$$\tilde{\chi} = \chi - \beta$$
where $\mathcal{H} \equiv a'/a$.

### The Bardeen gauge-invariant potentials
$$\Phi \equiv \phi + \mathcal{H}(\chi' - w) + \frac{1}{3}\nabla^2\chi$$
$$\Psi \equiv \psi + \mathcal{H}(\chi' - w) + (\chi' - w)'$$

Under coordinate transformations: $\tilde{\Phi} = \Phi$ and $\tilde{\Psi} = \Psi$.

### Conformal Newtonian (longitudinal) gauge
By choosing gauge conditions $\chi = 0$ and $w = 0$:
$$\psi = \Psi, \quad \phi = \Phi$$
The metric becomes diagonal:
$$ds^2 = a^2(\tau)\left[ -(1 + 2\Psi)d\tau^2 + (1 - 2\Phi)\delta_{ij}dx^i dx^j \right]$$
In the absence of anisotropic stress ($T^i_j = 0$ for $i \neq j$), the Einstein equations enforce:
$$\Phi = \Psi$$

---

## astrophysical context

* Relativistic gravitational lensing and the Sachs-Wolfe effect ($\Delta T/T \sim \Phi/3$).
* Newtonian limit on sub-horizon scales where $\Phi$ plays the role of the Newtonian potential.

---

## connections & zettel links

* parent moc: [[Cosmology_of_the_Early_Universe_MOC]]
* related zettels:
  - [[Cosmological perturbation theory in General Relativity]]
  - [[Gauge-invariant density perturbation and relativistic Poisson equation]]
  - [[Curvature perturbation R and zeta]]
  - [[Part5_GR_Cosmological_Perturbation_Theory]]



## Linked References

- [[Cosmological perturbation theory in General Relativity]]
- [[Gauge-invariant density perturbation and relativistic Poisson equation]]
- [[Cosmology_of_the_Early_Universe_MOC]]


