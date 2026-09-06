---
layout: default
title: "Einstein equations"
---

**Einstein's field equations** are the master equation of GR: they relate the curvature of spacetime to its matter content.

## the equation

$$\boxed{\, G_{\mu\nu} + \Lambda g_{\mu\nu} = 8\pi G\, T_{\mu\nu} \,}$$

with:
- $G_{\mu\nu} = R_{\mu\nu} - \tfrac{1}{2}g_{\mu\nu}R$, the **Einstein tensor**.
- $\Lambda$, the cosmological constant (often included in modern formulations).
- $T_{\mu\nu}$, the stress-energy tensor of all matter and fields.
- $G$, Newton's gravitational constant.
- $c = 1$ in natural units. with $c$ restored, the right side is $8\pi G/c^4$.

10 equations (since $G_{\mu\nu}$ is symmetric in 4D, $4 \times 5/2 = 10$ components).

## the physical content

> *matter tells spacetime how to curve, and the curvature tells matter how to move.*

the equation says: **given a distribution of matter and energy, here is the spacetime geometry that supports it**. the geometry is then communicated to particles via the geodesic equation.

## the conservation law

the contracted Bianchi identity gives $\nabla^\mu G_{\mu\nu} = 0$ identically. so the geometry side of Einstein's equation is automatically conserved. for the equation to be consistent, the matter side must also be conserved:
$$\nabla^\mu T_{\mu\nu} = 0$$

this is **stress-energy conservation**: the GR generalisation of $\partial_\mu T^{\mu\nu} = 0$ from special relativity. encodes energy + momentum conservation.

## why it must be $G$, not $R$

Einstein's first attempt: $R_{\mu\nu} = 8\pi G T_{\mu\nu}$. this **fails** because $\nabla^\mu R_{\mu\nu} \ne 0$ in general, but $\nabla^\mu T_{\mu\nu} = 0$ must hold.

fixing this requires the **trace-reversed combination**:
$$G_{\mu\nu} = R_{\mu\nu} - \tfrac{1}{2}g_{\mu\nu}R$$
which by Bianchi is automatically conserved. this is the unique "two-derivative-of-metric" tensor combination that's symmetric, divergence-free, and gives the right Newtonian limit.

## the constant $8\pi G$

fixed by demanding the **Newtonian limit**: in the weak-field, slow-motion limit, GR must reduce to Poisson's equation $\nabla^2 \Phi = 4\pi G\rho$. matching this to $G_{00} = 8\pi G T_{00}$ (with $T_{00} \to \rho$ and $G_{00} \to -2\nabla^2 \Phi$) fixes the coefficient.

## the equivalent form: trace-reversed

Einstein's equation can be rewritten by contracting with $g^{\mu\nu}$:
$$R - 2R = 8\pi G T \quad\Rightarrow\quad R = -8\pi G T$$
(with $T = g^{\mu\nu}T_{\mu\nu}$, the trace).

substituting:
$$\boxed{\, R_{\mu\nu} = 8\pi G(T_{\mu\nu} - \tfrac{1}{2}g_{\mu\nu}T) \,}$$

this **trace-reversed form** is sometimes more convenient. it shows that:
- vacuum ($T = 0$) gives $R_{\mu\nu} = 0$. but Riemann is generally non-zero (Weyl tensor survives, GW exist).
- conformal matter ($T = 0$, e.g. radiation): $R = 0$, but $R_{\mu\nu} \ne 0$.

## the cosmological constant

adding $\Lambda g_{\mu\nu}$ to the LHS is the **only** other conserved tensor combination. it's a free parameter Einstein originally introduced to allow static cosmologies. Friedmann showed dynamic cosmologies don't need it; Einstein called it his "biggest blunder." but in 1998, observations of accelerating expansion **brought it back**: $\Lambda \ne 0$ is now standard $\Lambda$CDM cosmology.

with $\Lambda$ on the right side as a stress-energy contribution, it acts like a fluid with $\rho_\Lambda = \Lambda/(8\pi G)$, $p_\Lambda = -\rho_\Lambda$. constant density, negative pressure: drives accelerated expansion.

see [Cosmological constant](../../02_Zettel/Theory/Cosmological constant.html).

## solving Einstein's equation

the equation is **non-linear** in $g_{\mu\nu}$ (Christoffels are first derivatives, Ricci has Christoffel + $\Gamma^2$). so generically very hard. tractable cases:
- **vacuum + spherical symmetry**: $\to$ Schwarzschild metric.
- **vacuum + axial symmetry**: $\to$ Kerr metric.
- **homogeneous-isotropic**: $\to$ FLRW + Friedmann equations.
- **weak field**: linearise; gives Newtonian gravity + gravitational waves.
- **PN expansion**: post-Newtonian series in $v/c$.

most modern numerical relativity numerically solves the full Einstein equations on a grid.

## see also

- [Einstein tensor and Bianchi](../../02_Zettel/Theory/Einstein tensor and Bianchi.html)
- [Stress-energy tensor](../../02_Zettel/Theory/Stress-energy tensor.html)
- [Trace-reversed Einstein equations](../../02_Zettel/Theory/Trace-reversed Einstein equations.html)
- [Cosmological constant](../../02_Zettel/Theory/Cosmological constant.html)
- [Newtonian limit of GR](../../02_Zettel/Theory/Newtonian limit of GR.html)
- [Schwarzschild metric](../../02_Zettel/Theory/Schwarzschild metric.html)
- [FLRW metric](../../02_Zettel/Theory/FLRW metric.html)
- [Friedmann equations](../../02_Zettel/Theory/Friedmann equations.html)
- [Bianchi identities](../../02_Zettel/Theory/Bianchi identities.html)
- [Ricci tensor and scalar](../../02_Zettel/Theory/Ricci tensor and scalar.html)
- Q10 - weak-field Ricci scalar
- Q18 - derive the acceleration equation
- [General_Relativity_MOC](../../00_Atlas/General_Relativity_MOC.html)
- [Ch 5 - The Einstein Equation](../../01_Literature/Book/Baumann GR/Ch 5 - The Einstein Equation.html)
