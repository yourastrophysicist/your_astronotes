---
layout: default
title: "Ch 4 - Spacetime Curvature"
---

# Baumann Ch 4, Spacetime Curvature

up: [Baumann GR](../../../01_Literature/Book/Baumann GR/Baumann GR.html) · [General_Relativity_MOC](../../../00_Atlas/General_Relativity_MOC.html)

*the chapter where curvature finally becomes a precise physical concept. covariant derivative, parallel transport, Killing vectors, the Riemann tensor as the path-dependence of parallel transport, and geodesic deviation as the physical meaning of curvature, the relative acceleration of nearby free particles.*

---

## the question this chapter is trying to answer

> **what does it really mean for spacetime to be "curved"? how do i quantify it, and what physical effect does it produce?**

the answer is the Riemann tensor, defined operationally by parallel-transport-around-a-loop. the physical effect is **tidal forces**: the relative acceleration of two nearby free-falling particles. this is what curvature actually does to matter, and it is what LIGO measures when a gravitational wave passes through.

---

## 4.1, the covariant derivative, derivatives that respect curvature

### the problem with $\partial_\mu$

if $T^\mu$ is a vector and i compute $\partial_\nu T^\mu$ (the partial derivative), is the result a tensor?

**no.** under a coordinate change $x \to x'$,

$$\partial_{\nu'} T^{\mu'} = \frac{\partial x^\sigma}{\partial x^{\nu'}}\frac{\partial x^{\mu'}}{\partial x^\nu}\partial_\sigma T^\nu \;+\; \frac{\partial x^\sigma}{\partial x^{\nu'}}\frac{\partial^2 x^{\mu'}}{\partial x^\sigma \partial x^\nu}T^\nu$$

the first term is what i would expect for a tensor. the second term is **inhomogeneous**, ruining the tensor property. it comes from the partial derivative acting on the basis vectors $\partial_\mu$ themselves, which change from point to point.

so partial derivatives are not enough on a curved manifold. we need a derivative that **transforms as a tensor**.

### the covariant derivative

define a new derivative $\nabla$ such that, for a vector $T^\mu$,

$$\boxed{\,\nabla_\nu T^\mu = \partial_\nu T^\mu + \Gamma^\mu{}_{\nu\alpha} T^\alpha\,}$$

the extra term $\Gamma^\mu{}_{\nu\alpha} T^\alpha$ is exactly what is needed to **cancel** the inhomogeneous piece of $\partial_\nu T^\mu$ under a coordinate change. so $\nabla_\nu T^\mu$ is a tensor.

> conceptually: a vector at one point, $T^\mu(p)$, lives in the tangent space at $p$. a vector at a nearby point, $T^\mu(p + dx)$, lives in a different tangent space at $p + dx$. to compute "how fast $T$ is changing," i need to **compare** vectors in different tangent spaces, but they live in different places. the Christoffel symbols are the **machinery for transporting vectors between tangent spaces**, so that the comparison makes sense. they tell me how my coordinate axes are tilting from one point to the next, and the covariant derivative subtracts off this tilting to give me the "true" rate of change of $T$.

### the rule for any tensor

the pattern: **upper index gets $+\Gamma$, lower index gets $-\Gamma$**.

- vector: $\nabla_\nu T^\mu = \partial_\nu T^\mu + \Gamma^\mu{}_{\nu\alpha}T^\alpha$
- co-vector: $\nabla_\nu \omega_\mu = \partial_\nu \omega_\mu - \Gamma^\alpha{}_{\nu\mu}\omega_\alpha$
- mixed (1,1): $\nabla_\sigma T^\mu{}_\nu = \partial_\sigma T^\mu{}_\nu + \Gamma^\mu{}_{\sigma\alpha}T^\alpha{}_\nu - \Gamma^\alpha{}_{\sigma\nu}T^\mu{}_\alpha$

extends to any rank by adding one $\Gamma$ for each index.

### the gauge-theory analogy

a beautiful side-by-side: the covariant derivative in GR plays the same role as the **gauge-covariant derivative** in electromagnetism.

**electromagnetism**: a charged scalar field $\phi$ has a global $U(1)$ symmetry $\phi \to e^{i\alpha}\phi$ (constant $\alpha$). making this **local** ($\alpha = \alpha(x)$) breaks the symmetry of $\partial_\mu \phi$ unless we introduce a vector potential $A_\mu$ that transforms as $A_\mu \to A_\mu - \partial_\mu \alpha$, replacing $\partial_\mu$ with $D_\mu = \partial_\mu + i A_\mu$.

**general relativity**: a tensor field $T^\mu$ has a global Lorentz symmetry. making this local (i.e., allowing arbitrary coordinate changes) breaks the symmetry of $\partial_\mu T^\nu$ unless we introduce the Christoffel symbols $\Gamma^\nu{}_{\mu\alpha}$, replacing $\partial_\mu$ with $\nabla_\mu$.

so **the connection $\Gamma$ in GR is the gauge potential of "local Lorentz symmetry,"** in the same way that $A_\mu$ is the gauge potential of $U(1)$ in EM. this is one of the deepest formal analogies in physics.

### the Levi-Civita connection, why GR uses one specific $\Gamma$

so far, the connection $\Gamma$ is not unique. there are many possible $\Gamma$'s on a given manifold. GR picks a specific one, the [Levi-Civita connection](../../../02_Zettel/Theory/Levi-Civita connection.html), by demanding two extra properties:

1. **torsion-free**: $\Gamma^\alpha{}_{\mu\nu} = \Gamma^\alpha{}_{\nu\mu}$
2. **metric-compatible**: $\nabla_\lambda g_{\mu\nu} = 0$

these together uniquely determine $\Gamma$ to be the formula i have been using:

$$\boxed{\,\Gamma^\rho{}_{\mu\nu} = \tfrac12 g^{\rho\lambda}(\partial_\mu g_{\nu\lambda} + \partial_\nu g_{\mu\lambda} - \partial_\lambda g_{\mu\nu})\,}$$

the proof: write $\nabla g = 0$ for three index permutations, add and subtract, contract with $g^{\rho\lambda}$. all the partial derivatives recombine to give the formula.

> physical content: **metric compatibility means inner products are preserved by parallel transport**. if i parallel-transport two vectors along a curve, their dot product (computed with $g$) doesn't change. lengths and angles are preserved. this is what we want: the geometry of vectors should not change as i carry them around. without metric compatibility, distances would change just because i moved a vector; that would be a strange theory.

---

## 4.2, parallel transport and geodesics, a cleaner definition

### the directional covariant derivative

given a curve $x^\mu(\lambda)$ with tangent $V^\mu = dx^\mu/d\lambda$, the **directional covariant derivative** of a tensor $T$ along the curve is

$$\frac{DT^\mu}{D\lambda} \equiv V^\nu \nabla_\nu T^\mu = \frac{dT^\mu}{d\lambda} + \Gamma^\mu{}_{\nu\rho}\frac{dx^\nu}{d\lambda}T^\rho$$

a tensor is **parallel-transported** along the curve if its directional covariant derivative vanishes:

$$\frac{DT^\mu}{D\lambda} = 0$$

> in flat space with cartesian coordinates, this just means "the components of $T$ don't change along the curve." in any other situation (curved space, or curvilinear coordinates in flat space), parallel transport involves the Christoffels: the components of $T$ change in just the right way to compensate for the tilting of the basis vectors, so the "geometric" vector itself does not change.

### geodesics, the new definition

a **geodesic** is a curve whose tangent vector parallel-transports itself along the curve:

$$V^\nu \nabla_\nu V^\mu = 0$$

writing this out:

$$\frac{d^2 x^\mu}{d\lambda^2} + \Gamma^\mu{}_{\nu\rho}\frac{dx^\nu}{d\lambda}\frac{dx^\rho}{d\lambda} = 0$$

**identical to the geodesic equation from Chapter 3**, where it came from extremizing the relativistic action. so the two definitions of geodesic, "extremizes proper time" and "tangent parallel-transports itself," give the same equation. great consistency check.

> the geometric picture: a geodesic is a curve that doesn't "turn off itself." you can think of it as the path traced by a car that never turns the steering wheel. on a curved road, this curve can still bend (because the road bends), but locally it is the "straightest possible" path.

---

## 4.3, symmetries and Killing vectors

### what is a Killing vector

think of a coordinate change as **actively** moving each point of the manifold, rather than just relabeling it. an infinitesimal shift $x^\mu \to x^\mu - V^\mu$ moves the metric by

$$\delta g_{\mu\nu} = \nabla_\mu V_\nu + \nabla_\nu V_\mu$$

(the "Lie derivative" of the metric along the vector field $V$).

a transformation is a **symmetry** of the metric (an **isometry**) iff $\delta g_{\mu\nu} = 0$. so $V^\mu$ is a Killing vector iff it satisfies the **Killing equation**:

$$\boxed{\,\nabla_\mu V_\nu + \nabla_\nu V_\mu = 0\,}$$

> intuitively: a Killing vector is a "direction in which the metric doesn't change." moving in its direction by an infinitesimal amount produces a metric that looks identical to the original.

### finding Killing vectors by inspection

if the metric components don't depend on a coordinate $x^{\alpha_*}$, then $\partial_{\alpha_*}$ is a Killing vector. this is the fastest way to spot them.

example, **Schwarzschild metric**:

$$ds^2 = -f(r) dt^2 + f^{-1} dr^2 + r^2(d\theta^2 + \sin^2\theta d\phi^2)$$

does not depend on $t$ or $\phi$. so $\partial_t$ and $\partial_\phi$ are Killing vectors. (the spherical symmetry actually gives 4 Killing vectors total: $\partial_t$ for time translation, and 3 rotations from the $SO(3)$ symmetry group, which are not all visible from the coordinates.)

example, **3D Euclidean** $ds^2 = dx^2 + dy^2 + dz^2$:

- 3 translations: $\partial_x, \partial_y, \partial_z$
- 3 rotations: $-y\partial_x + x\partial_y$, etc.

total: 6 Killing vectors. this is the maximum for a 3D space.

### Killing-Noether, conserved quantities along geodesics

the punchline: **for every Killing vector, there is a conserved quantity along any geodesic**.

let $K^\mu$ be a Killing vector and $P^\mu$ the four-momentum of a geodesic. then the contraction

$$Q \equiv K^\mu P_\mu$$

is constant along the geodesic. proof:

$$\frac{D(K^\nu P_\nu)}{D\lambda} = P^\mu P^\nu \nabla_{(\mu} K_{\nu)} = 0$$

by the Killing equation. so symmetries of the metric translate into conservation laws along geodesics.

familiar examples:

- $\partial_t$ Killing → energy $E = -P_t$ conserved
- $\partial_\phi$ Killing → angular momentum $L = P_\phi$ conserved
- spatial-translation Killing → linear momentum $P_i$ conserved

> this is the foundation of the **effective potential method** for Schwarzschild: $E$ and $L$ conservation, plus the timelike normalization, reduce a 4D problem to 1D radial motion. without these conservation laws, the Schwarzschild orbit problem would be hopeless.

---

## 4.4, the Riemann tensor

### the operational definition: parallel transport around a loop

now the climax of the chapter. on a curved manifold, **parallel transport is path-dependent**.

the dramatic example: take a vector at the equator pointing north. parallel-transport it three ways:

1. **path A**: along the equator a quarter way, then up a meridian to the pole
2. **path B**: directly up a meridian to the pole, then over to where path A ended

the two paths arrive at the same final point, but the vectors are **different**. the angle between them measures the curvature of the sphere over the enclosed region.

generalizing: take any tiny parallelogram with sides $A^\rho$ and $B^\sigma$. parallel-transport a vector $V^\mu$ around the loop two ways (one way then the other). the discrepancy is

$$\delta V^\mu = R^\mu{}_{\nu\rho\sigma}\, V^\nu A^\rho B^\sigma$$

**this defines the Riemann tensor.** the formula in components:

$$\boxed{\,R^\mu{}_{\nu\rho\sigma} = \partial_\rho \Gamma^\mu{}_{\nu\sigma} - \partial_\sigma \Gamma^\mu{}_{\nu\rho} + \Gamma^\mu{}_{\rho\lambda}\Gamma^\lambda{}_{\nu\sigma} - \Gamma^\mu{}_{\sigma\lambda}\Gamma^\lambda{}_{\nu\rho}\,}$$

mnemonic: "**partial-Gamma minus partial-Gamma, plus Gamma-Gamma minus Gamma-Gamma**." both pairs antisymmetrize in $(\rho, \sigma)$.

### the equivalent definition: commutator of covariant derivatives

a second way to derive Riemann: if $\nabla_\mu$ and $\nabla_\nu$ commuted on tensors, parallel transport would be path-independent. they don't, and the commutator is

$$[\nabla_\mu, \nabla_\nu] V^\rho = R^\rho{}_{\sigma\mu\nu} V^\sigma$$

(for the Levi-Civita torsion-free connection.) so Riemann measures the failure of covariant derivatives to commute.

> these two definitions are exactly the same statement. the loop is parametrized by the components $A^\rho$ and $B^\sigma$, and the discrepancy is the commutator of differentiations along $A$ and $B$.

### the symmetries of Riemann

with all indices down ($R_{\mu\nu\rho\sigma} = g_{\mu\lambda}R^\lambda{}_{\nu\rho\sigma}$):

1. **antisymmetric in first pair**: $R_{\mu\nu\rho\sigma} = -R_{\nu\mu\rho\sigma}$
2. **antisymmetric in last pair**: $R_{\mu\nu\rho\sigma} = -R_{\mu\nu\sigma\rho}$
3. **pair exchange**: $R_{\mu\nu\rho\sigma} = R_{\rho\sigma\mu\nu}$
4. **first Bianchi** (cyclic in last three): $R_{\mu\nu\rho\sigma} + R_{\mu\rho\sigma\nu} + R_{\mu\sigma\nu\rho} = 0$

these symmetries reduce the components dramatically. starting from $4^4 = 256$ in 4D, we get only **20 independent components**. in 3D, **6**. in 2D, **only 1**.

> the count $20$ is the same number as the $20$ leftover physical $\partial^2 g$ components in a local inertial frame from [Ch 2 - Some Differential Geometry](../../../01_Literature/Book/Baumann GR/Ch 2 - Some Differential Geometry.html) § 2.5. that is **not** a coincidence: it is the deep statement of "curvature equals second derivatives of the metric, modulo coordinate gauge."

### Bianchi differential identity

a fifth identity, this one differential:

$$\boxed{\,\nabla_\lambda R_{\mu\nu\rho\sigma} + \nabla_\mu R_{\nu\lambda\rho\sigma} + \nabla_\nu R_{\lambda\mu\rho\sigma} = 0\,}$$

the GR analog of $\partial_\lambda F_{\mu\nu} + \partial_\mu F_{\nu\lambda} + \partial_\nu F_{\lambda\mu} = 0$ in EM. this is what forces the conservation of the Einstein tensor, $\nabla^\mu G_{\mu\nu} = 0$, which we will need in [Ch 5 - The Einstein Equation](../../../01_Literature/Book/Baumann GR/Ch 5 - The Einstein Equation.html).

### Ricci tensor and scalar

contractions:

$$R_{\mu\nu} = R^\lambda{}_{\mu\lambda\nu} \quad\text{(Ricci tensor)}$$
$$R = g^{\mu\nu}R_{\mu\nu} \quad\text{(Ricci scalar)}$$

the **Ricci tensor** is the unique non-trivial trace of Riemann (other traces either vanish by antisymmetry or are equivalent by the symmetries). it is symmetric: $R_{\mu\nu} = R_{\nu\mu}$. it has 10 components in 4D.

the **Ricci scalar** $R$ is one number per point. it is the simplest measure of curvature: a positive $R$ means "locally spherical-like," negative $R$ means "locally hyperbolic-like."

example, **2-sphere of radius $\ell$**: $ds^2 = \ell^2(d\theta^2 + \sin^2\theta d\phi^2)$.
- one independent Riemann component: $R^\theta{}_{\phi\theta\phi} = \sin^2\theta$
- with all-down indices: $R_{\theta\phi\theta\phi} = \ell^2 \sin^2\theta$
- Ricci tensor: $R_{\theta\theta} = 1$, $R_{\phi\phi} = \sin^2\theta$
- Ricci scalar: $R = 2/\ell^2$

so a sphere has constant positive curvature scaling as $1/(\text{radius})^2$, exactly as expected.

---

## 4.5, geodesic deviation, the physics of curvature

### Newton: the tidal tensor

before GR, Newton already had a notion of "tidal force." consider two test particles at $\vec x$ and $\vec x + \vec b$, each in free fall in the potential $\Phi$:

$$\ddot x^i = -\partial^i \Phi(\vec x), \qquad \ddot{(x^i + b^i)} = -\partial^i \Phi(\vec x + \vec b)$$

subtract and expand for small $\vec b$:

$$\frac{d^2 b^i}{dt^2} = -\partial_j \partial^i \Phi(\vec x)\, b^j$$

so the relative acceleration of the two particles is determined by the **tidal tensor** $\partial_i \partial_j \Phi$. its trace is $\nabla^2 \Phi = 4\pi G \rho$, the source of Poisson's equation.

> physical interpretation: the moon pulls on the side of Earth nearest to it slightly more than on the far side. the resulting net stretching effect is what raises the tides. the tidal tensor measures this stretching.

### GR: the geodesic deviation equation

generalize. consider two nearby geodesics, separated by $B^\mu$, with four-velocity $U^\mu$ along one of them. the **relative acceleration**, computed using the directional covariant derivative twice, is

$$\boxed{\,\frac{D^2 B^\mu}{D\tau^2} = -R^\mu{}_{\nu\rho\sigma}\, U^\nu\, U^\sigma\, B^\rho\,}$$

this is the **geodesic deviation equation**. it says: **Riemann is the tidal tensor of GR**. nearby free-falling particles accelerate relative to each other, with the rate of acceleration determined by the Riemann tensor.

in a freely-falling frame ($U^\mu = (1, 0, 0, 0)$):

$$\frac{d^2 B^i}{d\tau^2} = -R^i{}_{0j0}\, B^j$$

matching to the Newtonian limit, $R^i{}_{0j0} = \partial_i \partial^j \Phi$. so **Riemann generalizes the tidal tensor**.

### why this is so important

**this is what curvature actually does.** if you are confused about what "spacetime curvature" means physically, the answer is: **it is the relative acceleration of nearby free particles**, otherwise known as tidal force.

a single test particle in a uniform gravitational field cannot detect the field by any local experiment. (it just falls. equivalence principle.) but **two test particles** can detect a non-uniform field, because they accelerate relative to each other. that relative acceleration is the gauge-invariant, physical content of gravity, and it is precisely what Riemann measures.

> this is exactly what LIGO measures in Q17 - Riemann R_0x0x for a TT plane wave. a passing gravitational wave produces a tiny relative acceleration between the input and end mirrors of LIGO's arms, and this shows up in the laser interferometry as a phase shift. **LIGO measures Riemann directly.**

---

## what to remember from this chapter

if i had to compress chapter 4 into a paragraph for the oral:

> the covariant derivative $\nabla_\mu$ is the derivative that respects curvature. it is built from the partial derivative plus a Christoffel correction term that fixes the tensorial transformation. the Christoffel symbols are the "gauge potential" of local Lorentz symmetry, in the same way $A_\mu$ is the gauge potential of $U(1)$ in EM. GR uses the unique torsion-free metric-compatible connection (Levi-Civita). a geodesic is a curve whose tangent vector parallel-transports itself, equivalently the curve that extremizes proper time. symmetries of the metric (Killing vectors) give conserved quantities along geodesics. curvature is captured by the Riemann tensor, defined by the path-dependence of parallel transport, equivalently by the failure of covariant derivatives to commute. Riemann has 20 independent components in 4D, with symmetries (antisym pair, antisym pair, pair exchange, first Bianchi) plus the differential Bianchi identity that forces $\nabla^\mu G_{\mu\nu} = 0$. the physical content of curvature is the geodesic deviation equation $D^2 B^\mu/D\tau^2 = -R^\mu{}_{\nu\rho\sigma}U^\nu U^\sigma B^\rho$: Riemann is the tidal tensor of GR, the relative acceleration of nearby free particles.

---

## connections

- [General_Relativity_MOC](../../../00_Atlas/General_Relativity_MOC.html)
- [Baumann GR](../../../01_Literature/Book/Baumann GR/Baumann GR.html)
- [Christoffel symbols](../../../02_Zettel/Theory/Christoffel symbols.html) · [Levi-Civita connection](../../../02_Zettel/Theory/Levi-Civita connection.html) · [Covariant derivative](../../../02_Zettel/Theory/Covariant derivative.html) · [Metric compatibility](../../../02_Zettel/Theory/Metric compatibility.html) · [Parallel transport](../../../02_Zettel/Theory/Parallel transport.html)
- [Riemann tensor](../../../02_Zettel/Theory/Riemann tensor.html) · [Riemann tensor symmetries](../../../02_Zettel/Theory/Riemann tensor symmetries.html) · [Counting Riemann components](../../../02_Zettel/Theory/Counting Riemann components.html) · [Ricci tensor and scalar](../../../02_Zettel/Theory/Ricci tensor and scalar.html) · [Bianchi identities](../../../02_Zettel/Theory/Bianchi identities.html) · [Geodesic deviation](../../../02_Zettel/Theory/Geodesic deviation.html)
- [Killing vectors and conserved quantities](../../../02_Zettel/Theory/Killing vectors and conserved quantities.html)
- Q3 - covariant derivatives in polar · Q4 - metric compatibility on the 2-sphere · Q5 - Riemann for 1+1 expanding metric · Q6 - Riemann for conformally flat 1+1 · Q7 - geodesics on the 2-sphere · Q8 - null geodesic in static metric · Q17 - Riemann R_0x0x for a TT plane wave
- previous: [Ch 3 - A First Look at Geodesics](../../../01_Literature/Book/Baumann GR/Ch 3 - A First Look at Geodesics.html)
- next: [Ch 5 - The Einstein Equation](../../../01_Literature/Book/Baumann GR/Ch 5 - The Einstein Equation.html)
