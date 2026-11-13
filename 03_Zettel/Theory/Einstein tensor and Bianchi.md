---
layout: "default"
title: "Einstein tensor and Bianchi"
---
the **Einstein tensor** $G_{\mu\nu}$ is the unique combination of Ricci and metric that's automatically conserved (via Bianchi identity). this conservation property is what makes Einstein's equation consistent.

## the definition

$$\boxed{\, G_{\mu\nu} \equiv R_{\mu\nu} - \frac{1}{2}g_{\mu\nu}R \,}$$

with $R_{\mu\nu}$ the Ricci tensor and $R$ the Ricci scalar.

## key properties

- **symmetric**: $G_{\mu\nu} = G_{\nu\mu}$ (since $R_{\mu\nu}$ is, and $g_{\mu\nu}$ is).
- **divergence-free**: $\nabla^\mu G_{\mu\nu} = 0$ identically.
- **trace**: $g^{\mu\nu}G_{\mu\nu} = R - 2R = -R$.
- $4 \times 5/2 = 10$ independent components in 4D.

the divergence-free property is the one. comes from the **contracted Bianchi identity**:
$$\nabla^\mu G_{\mu\nu} = 0$$

## why $G$ and not $R$

Einstein originally tried $R_{\mu\nu} = 8\pi G T_{\mu\nu}$. but $\nabla^\mu R_{\mu\nu} = \frac{1}{2}\nabla_\nu R \ne 0$ in general. so the equation is **inconsistent** with stress-energy conservation.

fixing this requires the trace-reversed combination $G$, which has $\nabla^\mu G_{\mu\nu} = 0$ guaranteed by Bianchi.

## the contracted Bianchi derivation

start with the second Bianchi identity:
$$\nabla_\rho R_{\mu\nu\sigma\tau} + \nabla_\mu R_{\nu\rho\sigma\tau} + \nabla_\nu R_{\rho\mu\sigma\tau} = 0$$

contract over the indices $\rho$ and $\sigma$ using $g^{\rho\sigma}$:
$$\nabla_\rho R^{\rho}_{\nu\mu\tau} - \nabla_\mu R_{\nu\tau} + \nabla_\nu R_{\rho\mu}^{\rho}{}_\tau = 0$$
(after using Riemann symmetries to flip indices). simplifies to:
$$\nabla^\rho R_{\rho\nu\mu\tau} = \nabla_\mu R_{\nu\tau} - \nabla_\nu R_{\mu\tau}$$

contract once more (over $\nu$ and $\tau$):
$$\nabla^\rho R_{\rho\mu} = \frac{1}{2}\nabla_\mu R$$

equivalently:
$$\nabla^\rho(R_{\rho\mu} - \tfrac{1}{2}g_{\rho\mu}R) = 0\quad\Rightarrow\quad \nabla^\rho G_{\rho\mu} = 0$$

so $G$ is divergence-free, automatically.

## interpretation

the Bianchi identity expresses the **diffeomorphism (coordinate-change) invariance** of GR. coordinate freedom is a "gauge symmetry," and Bianchi is its consistency condition.

mathematically: the diffeomorphism group acts on the metric by $g \to g + \mathcal L_\xi g$ for any vector $\xi$. this is a 4-parameter family of "gauge transformations." Bianchi gives the 4 corresponding conservation laws.

physically: $\nabla^\mu G_{\mu\nu} = 0$ has 4 components and matches the 4 components of $\nabla^\mu T_{\mu\nu} = 0$ (energy + 3-momentum conservation). so geometry's 10 equations $G_{\mu\nu} = 8\pi G T_{\mu\nu}$ minus 4 conservation conditions = **6 truly independent equations** for the metric. matches the 6 physical degrees of freedom of a dynamical metric (2 graviton polarisations + 4 gauge).

<!-- sources:wiki-arxiv -->
## Wikipedia and arXiv sources

- **Einstein tensor**. "In differential geometry, the Einstein tensor (named after Albert Einstein; also known as the trace-reversed Ricci tensor) is used to express the curvature of a pseudo-Riemannian manifold. In general relativity, it occurs in the Einstein field equations for gravitation that describe spacetime curvature in a manner that is consistent with conservation of energy and momentum." ([Wikipedia](https://en.wikipedia.org/wiki/Einstein_tensor))
- **Lecture Notes on General Relativity**. "These notes represent approximately one semester's worth of lectures on introductory general relativity for beginning graduate students in physics. Topics include manifolds, Riemannian geometry, Einstein's equations, and three applications: gravitational radiation, black holes, and cosmology." ([arXiv:gr-qc/9712019](https://arxiv.org/abs/gr-qc/9712019))

> Definitions quoted from Wikipedia (CC BY-SA 4.0) and the arXiv abstract. Figures credited in their captions.
<!-- /sources:wiki-arxiv -->

## see also

- [[Einstein equations]]
- [[Bianchi identities]]
- [[Stress-energy tensor]]
- [[Ricci tensor and scalar]]
- [[Riemann tensor]]
- [[Trace-reversed Einstein equations]]
- [[General_Relativity_MOC]]
- [[Ch 5 - The Einstein Equation]]



## Linked References

- [[Bianchi identities]]
- [[Cosmological constant]]
- [[Einstein equations]]
- [[Ricci tensor and scalar]]
- [[Stress-energy tensor]]
- [[Trace-reversed Einstein equations]]
- [[General_Relativity_MOC]]


