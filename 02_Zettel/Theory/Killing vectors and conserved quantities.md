---
layout: default
title: "Killing vectors and conserved quantities"
---

a **Killing vector** is a vector field $\xi^\mu$ that generates a **symmetry of the metric**: the metric is unchanged when you "flow along" $\xi$. for each Killing vector, there is a **conserved quantity** along every geodesic. this is the GR version of Noether's theorem.

## the Killing equation

a vector field $\xi^\mu$ is a Killing vector iff:
$$\boxed{\, \nabla_\mu \xi_\nu + \nabla_\nu \xi_\mu = 0 \,}$$
(the "Killing equation"). equivalently, the Lie derivative of the metric along $\xi$ vanishes: $\mathcal L_\xi g_{\mu\nu} = 0$.

physically: the metric "doesn't change" as you flow along $\xi$. so $\xi$ generates a continuous symmetry of the spacetime.

## the conservation law

if $\xi^\mu$ is Killing and $\dot x^\mu$ is the tangent to a geodesic, then $\xi_\mu\dot x^\mu$ is **conserved** along the geodesic:
$$\frac{d}{d\lambda}(\xi_\mu \dot x^\mu) = \dot x^\nu \nabla_\nu(\xi_\mu \dot x^\mu) = (\nabla_\nu \xi_\mu)\dot x^\mu \dot x^\nu + \xi_\mu \nabla_\nu \dot x^\mu \dot x^\nu = 0$$

(first term: vanishes by the Killing equation, since $\dot x \dot x$ is symmetric. second term: vanishes by the geodesic equation.)

so each Killing vector gives one conserved quantity. usual Noether-Killing connection.

## examples

### Minkowski

Minkowski spacetime has 10 Killing vectors:
- 4 translations: $\partial_t, \partial_x, \partial_y, \partial_z \to$ energy + 3-momentum.
- 3 rotations: $\to$ angular momentum.
- 3 boosts: $\to$ Lorentz boosts (relativistic generalisations of momentum).

so a free particle in Minkowski has 10 conserved quantities, just as in special relativity.

### Schwarzschild

Schwarzschild has 4 Killing vectors:
- $\partial_t$ (time-translation symmetry): conserved **energy** $E = -\xi_t \cdot \dot x = (1 - 2GM/r)\dot t$.
- 3 rotations of the angular coordinates: conserved **angular momentum** components. for orbits in the equatorial plane, $L = r^2\dot\phi$ (or the $z$-component).

these reduce the 4-component geodesic problem to a 1D effective potential problem in $r$. see [Effective potential approach](../../02_Zettel/Theory/Effective potential approach.html).

### FLRW

FLRW has 6 Killing vectors of the spatial slice (3 translations + 3 rotations for $k = 0$). but **no time-translation symmetry**: the metric depends on $t$ via $a(t)$. so **no conserved energy** for cosmological observers; this is why redshift exists.

a comoving observer in FLRW does conserve **comoving momentum**: a photon's coordinate momentum stays constant, but the proper energy redshifts with the expansion.

### Kerr (rotating BH)

Kerr has 2 Killing vectors: $\partial_t$ + $\partial_\phi$. fewer than Schwarzschild because Kerr breaks spherical symmetry. the **Carter constant** is a third constant of motion (not from Killing) that makes Kerr geodesics integrable.

## the Killing tensor

generalisation: a **Killing tensor** $K_{\mu_1...\mu_n}$ satisfies $\nabla_{(\mu}K_{\mu_1...\mu_n)} = 0$. gives a conserved quantity $K_{\mu_1...\mu_n}\dot x^{\mu_1}\cdots \dot x^{\mu_n}$. in Kerr this is the Carter tensor; the conserved quantity is Carter's constant.

## the practical procedure

given a metric:
1. find all Killing vectors. usually evident from coordinate symmetries (if metric doesn't depend on $x^a$, then $\partial_a$ is Killing).
2. read off conserved quantities $\xi_\mu \dot x^\mu$ for each.
3. plug into the geodesic equation, reducing it from 4 equations to fewer.
4. solve the remaining equations.

this is how Schwarzschild geodesics are made tractable: the spherical + time symmetries reduce 4D to 1D.

## see also

- [Geodesic equation](../../02_Zettel/Theory/Geodesic equation.html)
- [Affine parameter](../../02_Zettel/Theory/Affine parameter.html)
- [Effective potential approach](../../02_Zettel/Theory/Effective potential approach.html)
- [Schwarzschild metric](../../02_Zettel/Theory/Schwarzschild metric.html)
- [Schwarzschild effective potential](../../02_Zettel/Theory/Schwarzschild effective potential.html)
- [FLRW metric](../../02_Zettel/Theory/FLRW metric.html)
- [Cosmological redshift](../../02_Zettel/Theory/Cosmological redshift.html)
- [General_Relativity_MOC](../../00_Atlas/General_Relativity_MOC.html)
- [Ch 3 - A First Look at Geodesics](../../01_Literature/Book/Baumann GR/Ch 3 - A First Look at Geodesics.html)
