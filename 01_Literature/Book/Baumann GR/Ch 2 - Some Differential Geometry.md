---
layout: default
title: "Ch 2 - Some Differential Geometry"
---

# Baumann Ch 2, Some Differential Geometry

up: [Baumann GR](../../../01_Literature/Book/Baumann GR/Baumann GR.html) · [General_Relativity_MOC](../../../00_Atlas/General_Relativity_MOC.html)

*the math chapter. it sounds intimidating but the ideas are simple. all we are doing is figuring out how to do calculus on curved surfaces in a way that is independent of the coordinates we happen to use. once you see the pattern, the formalism becomes a friend, not a wall.*

---

## why we need this

after Chapter 1 we know spacetime has to be curved. but what does "curved spacetime" even mean mathematically? we need to define:

1. what a curved space looks like (a **manifold**)
2. how to put coordinates on it (**charts**)
3. how to measure distances (**metric**)
4. how to define vectors and tensors that **don't depend on the coordinates**
5. how to integrate over the whole thing (**volume element**)

once we have this, we can do calculus on any curved space, including spacetime. **all of the rest of GR sits on top of this foundation.**

a useful warning: this chapter is more abstract than the others, but every object i build here will appear in every later chapter. the time spent now pays off five times over later. take it slow.

---

## 2.1, manifolds, the curved-space generalization of $\mathbb{R}^n$

### what is a manifold, intuitively

a **manifold** is a space that **looks flat if you zoom in close enough**.

examples i already know:

- a **sphere** is a 2D manifold. globally it is curved, but a small patch (like a city block) looks like flat $\mathbb{R}^2$. that is why mapmakers can put cities on flat paper without horrible distortion.
- a **circle** is a 1D manifold. a small arc looks like a piece of a straight line.
- the **surface of a donut** (torus) is a 2D manifold. locally flat, globally weird.
- **flat $\mathbb{R}^n$** is trivially a manifold. it is its own local model.
- **Minkowski space**, $\mathbb{R}^{1,3}$, is a 4D Lorentzian manifold. this is what spacetime in special relativity looks like.

in GR, **spacetime is a 4D Lorentzian manifold**: locally it looks like Minkowski (special relativity works), globally it can be curved (gravity).

### charts and atlases

we cannot put a single coordinate system on a sphere without it failing somewhere (the $\theta = 0$ pole problem). so we use multiple coordinate **charts**, each covering a piece of the manifold, and we **sew them together** in the overlap regions.

a **chart** is a map $\phi: U \to \mathbb{R}^n$ that takes a patch $U$ of the manifold to a region of flat space, assigning coordinates $(x^1, \ldots, x^n)$ to each point.

an **atlas** is a collection of charts that together cover the whole manifold.

> the analogy is literal: an atlas of the world is a book of maps (charts), each covering a region. on the boundary of two pages, the maps overlap, and the cities on one page have well-defined coordinates on the other page too. the **transition function** that converts coordinates is what makes the maps "compatible."

example, the unit circle $S^1$:

- chart 1: $\phi_1: \theta \mapsto \theta \in (0, 2\pi)$ (covers everything except $\theta = 0$)
- chart 2: $\phi_2: \theta \mapsto \theta \in (-\pi, \pi)$ (covers everything except $\theta = \pi$)

both charts together cover the whole circle, and they overlap on the upper and lower semicircles where they agree.

example, the unit sphere $S^2$:

- chart 1: $(\theta, \phi)$ standard spherical, $\theta \in (0, \pi)$, $\phi \in (0, 2\pi)$. this misses one line of longitude and the two poles.
- chart 2: a different spherical coordinate system rotated to cover what chart 1 misses

an alternative is **stereographic projection** from the north pole, which gives a single chart covering everything except the north pole.

> the lesson is: coordinate singularities (like $r = 0$ in polar, or the pole $\theta = 0$ on a sphere) are **artifacts of the chart**, not of the manifold. the manifold is fine. you just need a different chart to cover those points.

this exact idea will save me when i reach the **Schwarzschild horizon** at $r = 2GM$. it looks like a singularity in Schwarzschild coordinates, but in Eddington-Finkelstein coordinates it is perfectly regular. it is just a coordinate artifact.

---

## 2.2, vectors as derivative operators

### the problem with the "arrow" picture

in flat $\mathbb{R}^3$ i think of a vector as an arrow with a tail at one point and a head at another. that picture is great in flat space, but it **fails on a curved manifold**. on a sphere, the "arrow from London to Paris" does not lie on the sphere. it cuts through Earth.

so vectors on a curved manifold cannot be "arrows between points." they have to be **attached to a single point**, living in a **tangent space** at that point.

### the new definition: vectors as derivative operators

here is the trick that makes everything work.

a **vector at a point $p$** is a derivative operator. it acts on functions $f$ on the manifold and returns a real number, the directional derivative of $f$ along some curve through $p$.

formally, if $\gamma(\lambda)$ is a curve through $p$ at $\lambda = 0$, the tangent vector to $\gamma$ at $p$ is

$$V_p(f) \equiv \frac{d}{d\lambda} f(\gamma(\lambda))\Big|_{\lambda = 0}$$

in coordinates, $V_p(f) = (dx^\mu/d\lambda)\,\partial_\mu f|_p$, so the **components** of $V_p$ are $V^\mu = dx^\mu/d\lambda$.

> the conceptual jump: a "vector" is not the arrow, it is the operation of moving infinitesimally in some direction and seeing how things change. this captures everything about the arrow (direction and magnitude) without needing the arrow to lie anywhere in particular. and crucially, it generalizes to any manifold without modification.

### the coordinate basis

every tangent vector can be written as

$$V = V^\mu\, \partial_\mu$$

where the $\partial_\mu = \partial/\partial x^\mu$ are the **basis vectors** in the coordinate chart $x^\mu$.

example, polar coordinates in 2D flat space:

$$\partial_r = \cos\phi\, \partial_x + \sin\phi\, \partial_y$$
$$\partial_\phi = -r\sin\phi\, \partial_x + r\cos\phi\, \partial_y$$

unlike cartesian basis vectors, **the polar basis vectors depend on position**. $\partial_\phi$ is short near the origin and long far away (because $|\partial_\phi| = r$). this is exactly why Christoffel symbols (Block 1) are non-zero in polar coordinates: the basis is twisting as i move.

### transformation rules

under a coordinate change $x^\mu \to x^{\mu'}$, the vector components transform as

$$\boxed{\,V^{\mu'} = \frac{\partial x^{\mu'}}{\partial x^\mu}\, V^\mu\,}$$

and the basis vectors transform inversely. the combination $V = V^\mu \partial_\mu$ is invariant.

> in a non-geometric textbook, this transformation rule **is** the definition of a vector ("an object that transforms like a vector"). i prefer the geometric definition, "a derivative operator at a point", because it tells me what a vector *is* and not just how it transforms. but operationally the two are equivalent.

---

## 2.3, co-vectors and tensors

### co-vectors, the dual of vectors

a **co-vector** (also called a one-form, or a "vector with a downstairs index") is a linear map from vectors to real numbers. they are different from vectors but closely related.

i have seen co-vectors before, but with different names:

- in **linear algebra**: row vector vs column vector (transpose)
- in **quantum mechanics**: bra $\langle\psi|$ vs ket $|\psi\rangle$
- in **special relativity**: $V_\mu = \eta_{\mu\nu}V^\nu$ vs $V^\mu$ (raising/lowering with $\eta$)

the canonical example: **the differential of a function**. given a function $f$, define $df$ by

$$df(V) \equiv V(f)$$

i.e., $df$ takes a vector $V$ and returns the directional derivative of $f$ along $V$. in coordinates, $df = (\partial f / \partial x^\mu)\, dx^\mu$, with components $(\partial_\mu f)$ (the gradient of $f$).

components $\omega_\mu$ (lower index) transform inversely to vectors:

$$\omega_{\mu'} = \frac{\partial x^\mu}{\partial x^{\mu'}}\, \omega_\mu$$

so the inner product $\omega_\mu V^\mu$ is invariant. you contract a vector with a co-vector to get a number.

### tensors

a tensor of type $(m, n)$ is a multilinear map that takes $m$ co-vectors and $n$ vectors and returns a real number. components $T^{\mu_1 \cdots \mu_m}{}_{\nu_1 \cdots \nu_n}$. the metric $g_{\mu\nu}$ is a (0,2) tensor, the inverse metric $g^{\mu\nu}$ is a (2,0) tensor, the Riemann tensor $R^\rho{}_{\sigma\mu\nu}$ is a (1,3) tensor.

operations: tensor product $\otimes$, contraction (sum over one upper and one lower index), trace ($T^\mu{}_\mu$), symmetrization $T_{(\mu\nu)}$, antisymmetrization $T_{[\mu\nu]}$.

> the takeaway: the index placement (upper vs lower) tells me how the object transforms. matching upper and lower indices in a contraction always gives a tensor (the inhomogeneous parts of the transformation cancel). this is why physicists obsess about index placement.

---

## 2.4, the metric tensor

### what the metric is

the **metric** $g_{\mu\nu}$ is the rulebook for measuring distances and times on the manifold.

defining properties:

1. **symmetric**: $g_{\mu\nu} = g_{\nu\mu}$ (so the inner product is symmetric)
2. **non-degenerate**: $\det g_{\mu\nu} \neq 0$ (so the inverse $g^{\mu\nu}$ exists)

the **line element** is what the metric does in components:

$$ds^2 = g_{\mu\nu}\, dx^\mu\, dx^\nu$$

worth memorizing, the standard examples:

- **2D Euclidean polar**: $ds^2 = dr^2 + r^2 d\phi^2$
- **3D Euclidean spherical**: $ds^2 = dr^2 + r^2(d\theta^2 + \sin^2\theta\,d\phi^2)$
- **unit 2-sphere**: $ds^2 = R^2(d\theta^2 + \sin^2\theta\,d\phi^2)$
- **Minkowski**: $ds^2 = -dt^2 + dx^2 + dy^2 + dz^2$
- **weak-field**: $ds^2 = -(1 + 2\Phi)dt^2 + dx^2$

### signature, why Lorentzian

count positive vs negative eigenvalues of $g_{\mu\nu}$. this is the **signature**.

- **Riemannian** signature: all eigenvalues positive. examples: Euclidean space, sphere.
- **Lorentzian** signature: one negative, three positive (or one positive, three negative, depending on convention). example: Minkowski, Schwarzschild, FLRW. this is what GR uses.

the negative eigenvalue corresponds to the **time direction**. its sign distinction encodes causality: timelike intervals have $ds^2 < 0$, spacelike have $ds^2 > 0$, null (light-like) have $ds^2 = 0$. the light cones at every point organize the causal structure.

### raising and lowering indices

the metric maps vectors to co-vectors:

$$V_\mu = g_{\mu\nu} V^\nu, \qquad V^\mu = g^{\mu\nu} V_\nu$$

physicists say "use the metric to lower the index from $V^\mu$ to $V_\mu$." mathematicians say "the metric provides a natural isomorphism between the tangent space and its dual." same thing.

### proper time and four-velocity

for a timelike curve in a Lorentzian manifold, **proper time** $\tau$ is the time elapsed on a clock carried along the curve:

$$d\tau^2 = -g_{\mu\nu} dx^\mu dx^\nu > 0$$

if the curve is parametrized by $\tau$, its tangent vector is the **four-velocity** $U^\mu = dx^\mu/d\tau$, automatically normalized as $g_{\mu\nu} U^\mu U^\nu = -1$.

this is the same proper time that appears in the relativistic action $S = -m\int d\tau$ in [Ch 3 - A First Look at Geodesics](../../../01_Literature/Book/Baumann GR/Ch 3 - A First Look at Geodesics.html).

---

## 2.5, the local inertial frame, why curvature lives in $\partial \partial g$

this is the most important conceptual result of the chapter.

### the question

at any point $p$ on a manifold, can i find coordinates such that the metric looks like Minkowski **at that point**? what about its derivatives?

### the answer

at a single point $p$, i can always find coordinates (called **local inertial coordinates**, or **Riemann normal coordinates**) such that

$$\boxed{\,g_{\mu\nu}(p) = \eta_{\mu\nu}, \qquad \partial_\sigma g_{\mu\nu}(p) = 0\,}$$

i.e., the metric looks like Minkowski **and its first derivative vanishes** at $p$. but i **cannot** make the second derivative $\partial \partial g$ vanish in general. the residual second derivatives are physical.

### why this matters

the proof is a counting argument that i should know.

at $p$, the metric has 10 components (it is symmetric 4×4). the freedom in the coordinate choice $x^\mu \to x^{\hat\mu}$ at this point is 16 components in the matrix $\partial x^\mu / \partial x^{\hat\mu}$. enough to set the 10 metric components equal to $\eta$, with $16 - 10 = 6$ leftover degrees of freedom = the **Lorentz group** (boosts and rotations) which preserves $\eta$.

at the next order, $\partial g$ has 40 components ($4 \times 10$). the freedom in $\partial^2 x^\mu / \partial x^{\hat\mu} \partial x^{\hat\nu}$ is also 40 components. so i can set $\partial g(p) = 0$ exactly.

at the next order, $\partial \partial g$ has 100 components ($10 \times 10$). the freedom is 80 components. so 100 - 80 = **20 leftover physical components**.

these 20 components are exactly the components of the **Riemann tensor in 4D**. so:

- $g$ at a point: not physical, gauge by Lorentz group
- $\partial g$ at a point: not physical, can be set to zero  
- $\partial \partial g$ at a point: 20 physical components, the Riemann tensor

> this is the deep statement of "curvature equals second derivatives of the metric." it is what makes the equivalence principle precise: at any point, you can choose a freely-falling frame where the gravitational acceleration vanishes, but the **tidal forces** (which are encoded in $\partial \partial g$) cannot be removed by any coordinate choice. they are the physical content of gravity.

### the volume element $\sqrt{-g}\,d^4x$

a final result: the **invariant volume element** for integration on a Lorentzian manifold is

$$dV = \sqrt{-\det g_{\mu\nu}}\, d^4 x = \sqrt{-g}\, d^4 x$$

the $\sqrt{-g}$ factor cancels the Jacobian from coordinate transformations, making integrals coordinate-independent. this is what shows up in the **Einstein-Hilbert action** $S = \int d^4x \sqrt{-g}\, R$ in [Ch 5 - The Einstein Equation](../../../01_Literature/Book/Baumann GR/Ch 5 - The Einstein Equation.html).

---

## what to remember from this chapter

if i had to compress chapter 2 into a paragraph for the oral:

> a manifold is a curved space that looks locally like flat space, described by overlapping coordinate charts. spacetime in GR is a 4D Lorentzian manifold (signature $-,+,+,+$). vectors are derivative operators at a point, living in a tangent space. co-vectors and tensors are built up from these by linearity and tensor products. the metric $g_{\mu\nu}$ measures distances via the line element $ds^2 = g_{\mu\nu}dx^\mu dx^\nu$, and it raises and lowers indices. at every point of a Lorentzian manifold there exists a local inertial frame where the metric looks Minkowskian and its first derivative vanishes, but in general the second derivatives are non-zero: these encode the 20 components of the Riemann tensor. integration uses the invariant volume element $\sqrt{-g}\,d^4x$.

---

## connections

- [General_Relativity_MOC](../../../00_Atlas/General_Relativity_MOC.html)
- [Baumann GR](../../../01_Literature/Book/Baumann GR/Baumann GR.html)
- [Manifold metric and signature](../../../02_Zettel/Theory/Manifold metric and signature.html) · [Coordinate transformations and tensors](../../../02_Zettel/Theory/Coordinate transformations and tensors.html) · [Locally inertial frame](../../../02_Zettel/Theory/Locally inertial frame.html)
- Q1 - Christoffels for diagonal 2D metric and Q2 - Christoffels for radial 2D metric (the Christoffel formula uses everything from this chapter)
- previous: [Ch 1 - Gravity is Geometry](../../../01_Literature/Book/Baumann GR/Ch 1 - Gravity is Geometry.html)
- next: [Ch 3 - A First Look at Geodesics](../../../01_Literature/Book/Baumann GR/Ch 3 - A First Look at Geodesics.html)
