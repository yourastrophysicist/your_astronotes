---
layout: default
title: "Coordinate transformations and tensors"
---

on a manifold, **coordinates are arbitrary labels**. physics has to be the same regardless of which coordinates we pick. **tensors** are the objects that transform predictably under coordinate changes. they are the right language for GR.

## the transformation rule

under a coordinate change $x^\mu \to x'^\mu(x)$, partial derivatives transform by chain rule:
$$\frac{\partial}{\partial x'^\mu} = \frac{\partial x^\nu}{\partial x'^\mu}\,\frac{\partial}{\partial x^\nu}$$

a **vector** $V^\mu$ (contravariant, upper index) transforms as:
$$V'^\mu = \frac{\partial x'^\mu}{\partial x^\nu}\,V^\nu$$

a **covector** (one-form, lower index) $\omega_\mu$ transforms as:
$$\omega'_\mu = \frac{\partial x^\nu}{\partial x'^\mu}\,\omega_\nu$$

note the **inverse** Jacobian for covectors. it's not a typo; it's why upper and lower indices are different.

## tensors of higher rank

a $(p, q)$-tensor with $p$ upper + $q$ lower indices transforms with $p$ Jacobian factors + $q$ inverse Jacobians. example, the metric $g_{\mu\nu}$ (a $(0, 2)$-tensor):
$$g'_{\mu\nu} = \frac{\partial x^\alpha}{\partial x'^\mu}\,\frac{\partial x^\beta}{\partial x'^\nu}\,g_{\alpha\beta}$$

a tensor equation valid in one frame is valid in **every** frame, since both sides transform identically. this is the technical content of "physics is coordinate-independent."

## index gymnastics

with the metric, you raise and lower indices:
$$V_\mu = g_{\mu\nu} V^\nu, \qquad V^\mu = g^{\mu\nu} V_\nu$$
where $g^{\mu\nu}$ is the inverse metric, $g^{\mu\alpha} g_{\alpha\nu} = \delta^\mu_\nu$.

contracting matched upper-lower indices gives a tensor of rank reduced by 2. example: trace $V^\mu V_\mu = g_{\mu\nu} V^\mu V^\nu$.

## why partial derivatives are not tensors 

$\partial_\mu V^\nu$ is **not** a tensor, in general. why? because under a coordinate change:
$$\partial'_\mu V'^\nu = \partial'_\mu\!\left(\frac{\partial x'^\nu}{\partial x^\rho}V^\rho\right) = \frac{\partial x'^\nu}{\partial x^\rho}\,\frac{\partial x^\sigma}{\partial x'^\mu}\,\partial_\sigma V^\rho + \underbrace{\frac{\partial^2 x'^\nu}{\partial x^\rho\partial x^\sigma}\,\frac{\partial x^\sigma}{\partial x'^\mu}V^\rho}_{\text{not tensorial}}$$

the second term spoils the transformation law. so the partial derivative of a tensor is **not** a tensor.

the cure: replace $\partial$ with the **covariant derivative** $\nabla$, which adds a Christoffel-symbol correction to cancel this extra term. see [Covariant derivative](../../02_Zettel/Theory/Covariant derivative.html).

## examples to know

- **scalar (rank-0)**: $\phi$. invariant under coordinate change.
- **vector (1, 0)**: $V^\mu$. like 4-velocity $u^\mu$, 4-momentum $p^\mu$.
- **covector (0, 1)**: $\omega_\mu$. like the gradient $\partial_\mu \phi$.
- **metric (0, 2)**: $g_{\mu\nu}$.
- **stress-energy (2, 0)** or (0, 2): $T^{\mu\nu}$ or $T_{\mu\nu}$.
- **Riemann (1, 3)**: $R^\rho{}_{\sigma\mu\nu}$.
- **Christoffel symbols (1, 2)** *not a tensor*: $\Gamma^\rho{}_{\mu\nu}$, even though they look indexed like one. they encode coordinate choice.

## see also

- [Manifold metric and signature](../../02_Zettel/Theory/Manifold metric and signature.html)
- [Christoffel symbols](../../02_Zettel/Theory/Christoffel symbols.html)
- [Covariant derivative](../../02_Zettel/Theory/Covariant derivative.html)
- [Riemann tensor](../../02_Zettel/Theory/Riemann tensor.html)
- [Stress-energy tensor](../../02_Zettel/Theory/Stress-energy tensor.html)
- [General_Relativity_MOC](../../00_Atlas/General_Relativity_MOC.html)
- [Ch 2 - Some Differential Geometry](../../01_Literature/Book/Baumann GR/Ch 2 - Some Differential Geometry.html)
