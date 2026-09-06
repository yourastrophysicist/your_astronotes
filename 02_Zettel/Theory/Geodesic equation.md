---
layout: default
title: "Geodesic equation"
---

 bthe **geodesic equation** describes how free particles move in a curved spacetime. it is the GR equivalent of Newton's first law: in the absence of non-gravitational forces, particles follow geodesics.

## the equation

$$\boxed{\, \ddot x^\mu + \Gamma^\mu{}_{\alpha\beta}\dot x^\alpha\dot x^\beta = 0 \,}$$

with dot meaning $d/d\tau$ for timelike particles ($\tau$ = proper time) or $d/d\lambda$ for null particles ($\lambda$ = affine parameter; see [Affine parameter](../../02_Zettel/Theory/Affine parameter.html)).

this is a system of 4 second-order ODEs, with initial conditions $x^\mu(0)$ and $\dot x^\mu(0)$.

## three equivalent definitions of geodesic

1. **extremal proper time** (timelike) or **extremal affine parameter** (null): $\delta\int d\tau = 0$.
2. **auto-parallel**: tangent vector parallel-transports along itself, $\dot x^\mu \nabla_\mu \dot x^\nu = 0$.
3. **the geodesic equation** explicitly: $\ddot x^\mu + \Gamma^\mu{}_{\alpha\beta}\dot x^\alpha\dot x^\beta = 0$.

equivalence:
- (1) follows from varying the action $S = -m\int d\tau$ for a free particle. Lagrangian $L = -m\sqrt{-g_{\mu\nu}\dot x^\mu\dot x^\nu}$.
- (2) is the geometric statement: a "straight line" in the curved sense.
- (3) is the explicit ODE you actually solve.

these are all equivalent for the Levi-Civita connection.

## interpretation

in flat spacetime + Cartesian coordinates: $\Gamma = 0$, the equation reduces to $\ddot x^\mu = 0$. **uniform motion in straight lines**. no surprise.

in curved spacetime: $\Gamma \ne 0$. the apparent "force" $-\Gamma\dot x\dot x$ is what an observer in the global coordinate frame interprets as **gravity**. but in a locally inertial frame at any point, $\Gamma = 0$ and the particle moves freely. **gravity is geometry**.

## three flavors of geodesic

at any point, the velocity $\dot x^\mu$ is either:
- **timelike**: $g_{\mu\nu}\dot x^\mu\dot x^\nu = -1$ for unit normalisation. $\tau$ = proper time. follows a path inside light cones. world lines of massive particles.
- **null**: $g_{\mu\nu}\dot x^\mu\dot x^\nu = 0$. $\lambda$ = affine parameter (no proper time). follows light cones. world lines of photons.
- **spacelike**: $g_{\mu\nu}\dot x^\mu\dot x^\nu = +1$. $\sigma$ = proper length. spatial paths, not realisable as physical trajectories.

see [Timelike vs null vs spacelike](../../02_Zettel/Theory/Timelike vs null vs spacelike.html).

## conserved quantities

if the metric has a symmetry (a **Killing vector** $\xi$), then $\xi_\mu \dot x^\mu$ is **conserved** along the geodesic. this is the GR version of Noether's theorem and it's the practical tool for solving geodesics in symmetric spacetimes.

example: in Schwarzschild, the Killing vectors $\partial_t$ and $\partial_\phi$ give conserved energy $E$ and angular momentum $L$. these reduce the 4-component geodesic to a 1D effective potential problem. see [Killing vectors and conserved quantities](../../02_Zettel/Theory/Killing vectors and conserved quantities.html) and [Effective potential approach](../../02_Zettel/Theory/Effective potential approach.html).

## examples

### Minkowski + Cartesian
$\Gamma = 0$, so geodesics are straight lines: $x^\mu(\tau) = x^\mu_0 + u^\mu \tau$.

### 2-sphere
geodesics are great circles. solved via the equations $\ddot \theta - \sin\theta\cos\theta\,\dot\phi^2 = 0$, $\ddot\phi + 2\cot\theta\,\dot\theta\dot\phi = 0$.

### Schwarzschild
4D geodesic problem. uses energy $E$ and angular momentum $L$ as conserved quantities. reduces to a 1D radial equation with an effective potential. predicts perihelion precession, light deflection, ISCO, photon sphere. see Block 5 of [General_Relativity_MOC](../../00_Atlas/General_Relativity_MOC.html).

### FLRW
photon (null) geodesics in expanding universe give cosmological redshift. timelike comoving observers stay at fixed comoving coordinates. see [FLRW metric](../../02_Zettel/Theory/FLRW metric.html).

## the variational principle in practice

for a metric $g_{\mu\nu}$, the Lagrangian $L = g_{\mu\nu}\dot x^\mu \dot x^\nu$ (with $\dot{} = d/d\tau$, no square root for convenience). Euler-Lagrange equations:
$$\frac{d}{d\tau}\!\left(\frac{\partial L}{\partial \dot x^\mu}\right) - \frac{\partial L}{\partial x^\mu} = 0$$

reproduces the geodesic equation. this is often the fastest way to compute Christoffels in practice: write $L$, do EL, read off $\Gamma$ from coefficient of $\dot x \dot x$.

## see also

- [Christoffel symbols](../../02_Zettel/Theory/Christoffel symbols.html)
- [Levi-Civita connection](../../02_Zettel/Theory/Levi-Civita connection.html)
- [Parallel transport](../../02_Zettel/Theory/Parallel transport.html)
- [Affine parameter](../../02_Zettel/Theory/Affine parameter.html)
- [Killing vectors and conserved quantities](../../02_Zettel/Theory/Killing vectors and conserved quantities.html)
- [Effective potential approach](../../02_Zettel/Theory/Effective potential approach.html)
- [Timelike vs null vs spacelike](../../02_Zettel/Theory/Timelike vs null vs spacelike.html)
- [Geodesic deviation](../../02_Zettel/Theory/Geodesic deviation.html)
- Q7 - geodesics on the 2-sphere
- Q8 - null geodesic in static metric
- [General_Relativity_MOC](../../00_Atlas/General_Relativity_MOC.html)
- [Ch 3 - A First Look at Geodesics](../../01_Literature/Book/Baumann GR/Ch 3 - A First Look at Geodesics.html)
