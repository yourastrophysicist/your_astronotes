---
layout: default
title: "Manifold metric and signature"
---

a **manifold** is the mathematical home of GR: a space that **looks locally like $\mathbb{R}^n$** but can be globally curved or topologically nontrivial. spacetime is a 4D manifold. on top of it lives a **metric** that tells me how to measure distances and times.

## the manifold

intuitively: a manifold is a curved space that, when you zoom in enough, looks flat. the surface of the Earth is a 2D manifold. zoomed in to a city block, it looks like a flat plane. at global scale, it's a sphere.

formally: a topological space + an atlas of charts (coordinate patches) that smoothly glue together.

GR's spacetime: **4D Lorentzian manifold**. 4D because three space + one time. Lorentzian because of the metric signature.

## the metric

a **metric tensor** $g_{\mu\nu}$ at each point of the manifold defines an inner product on the tangent space. it lets me compute lengths of vectors, angles between vectors, and the line element:
$$ds^2 = g_{\mu\nu}\,dx^\mu dx^\nu$$

this $ds^2$ is the **invariant proper interval** between nearby events. in flat spacetime (Minkowski), $g_{\mu\nu} = \eta_{\mu\nu} = {\rm diag}(-1, +1, +1, +1)$. in curved spacetime it's something else.

## the signature

the metric eigenvalues have signs: $(-, +, +, +)$ in our convention. the **signature** is the count of $+$ and $-$ eigenvalues; here, $(-, +, +, +)$, sometimes written as signature $(1, 3)$ or $-2$ (the trace).

this is **Lorentzian signature**. it distinguishes spacetime from Riemannian geometry (all $+$, like the surface of a sphere). the negative eigenvalue corresponds to the **time direction** and gives spacetime its causal structure (light cones).

alternative convention $(+, -, -, -)$ is also common; Baumann uses $(-, +, +, +)$ in the GR book, the "spacetime physics" convention.

## why Lorentzian and not Riemannian

the negative-eigenvalue direction is what allows:
- **light cones** (null vectors with $g(v, v) = 0$).
- **causal structure** (timelike, null, spacelike separations).
- **proper time** vs **proper length** (different signs in $ds^2$).

a Riemannian manifold has only Euclidean-like distances; no concept of past / future. spacetime needs the Lorentzian structure.

## examples to remember

- **Minkowski**: $ds^2 = -dt^2 + dx^2 + dy^2 + dz^2$. signature $(-,+,+,+)$.
- **2-sphere** (Riemannian, not spacetime): $ds^2 = R^2(d\theta^2 + \sin^2\theta\,d\phi^2)$. signature $(+, +)$.
- **Schwarzschild**: $ds^2 = -(1 - 2GM/r)dt^2 + (1 - 2GM/r)^{-1}dr^2 + r^2 d\Omega^2$. signature $(-,+,+,+)$ in the exterior.
- **FLRW**: $ds^2 = -dt^2 + a^2(t)\gamma_{ij}\,dx^i\,dx^j$. signature $(-,+,+,+)$.

## see also

- [Coordinate transformations and tensors](../../02_Zettel/Theory/Coordinate transformations and tensors.html)
- [Locally inertial frame](../../02_Zettel/Theory/Locally inertial frame.html)
- [Christoffel symbols](../../02_Zettel/Theory/Christoffel symbols.html)
- 03_Zettel/Theory/Robertson-Walker metric
- [FLRW metric](../../02_Zettel/Theory/FLRW metric.html)
- [Schwarzschild metric](../../02_Zettel/Theory/Schwarzschild metric.html)
- [General_Relativity_MOC](../../00_Atlas/General_Relativity_MOC.html)
- [Ch 1 - Gravity is Geometry](../../01_Literature/Book/Baumann GR/Ch 1 - Gravity is Geometry.html)
- [Ch 2 - Some Differential Geometry](../../01_Literature/Book/Baumann GR/Ch 2 - Some Differential Geometry.html)
