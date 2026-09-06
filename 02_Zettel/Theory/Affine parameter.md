---
layout: default
title: "Affine parameter"
---

a geodesic is a curve $x^\mu(\lambda)$ that **parallel-transports its own tangent**. but the parameterisation $\lambda$ matters: only certain choices, called **affine parameters**, give the simple geodesic equation $\ddot x^\mu + \Gamma\dot x\dot x = 0$ without extra terms.

## the definition

a parameter $\lambda$ is **affine** if it gives the standard geodesic equation:
$$\frac{D\dot x^\mu}{d\lambda} = 0\quad\Leftrightarrow\quad \dot x^\mu \nabla_\mu \dot x^\nu = 0$$

other parameterisations $\sigma = f(\lambda)$ give a modified equation:
$$\frac{D\dot x^\mu}{d\sigma} = -\frac{f''}{f'^2}\dot x^\mu$$

unless $f$ is linear ($f(\lambda) = a\lambda + b$), the right side is non-zero.

so affine parameters are unique up to **affine transformations** $\lambda \to a\lambda + b$ (whence the name).

## for timelike geodesics

**proper time** $\tau$ is affine. the natural choice. the four-velocity $u^\mu = dx^\mu/d\tau$ is normalised: $g_{\mu\nu}u^\mu u^\nu = -1$.

mass $m$ has four-momentum $p^\mu = m u^\mu$, with $g_{\mu\nu}p^\mu p^\nu = -m^2$ (the mass shell condition).

## for null geodesics

photons travel along null geodesics, where $g_{\mu\nu}\dot x^\mu \dot x^\nu = 0$. there's **no proper time** because $d\tau = 0$ along the path.

instead, choose any affine parameter $\lambda$ such that the geodesic equation holds. for photons, the natural choice is $\lambda$ proportional to the photon's energy as measured by a comoving observer. for example, in the asymptotically flat region of Schwarzschild, you can choose $\lambda$ such that $dx^\mu/d\lambda = (E, \vec p)$ with $E^2 = |\vec p|^2$.

## for spacelike geodesics

**proper length** $s$ is affine. the natural choice. tangent vector $u^\mu = dx^\mu/ds$ is normalised: $g_{\mu\nu}u^\mu u^\nu = +1$.

## why affine parameter matters

several conveniences:
1. the **inner product** $g_{\mu\nu}\dot x^\mu \dot x^\nu$ is constant along the geodesic: $\frac{d}{d\lambda}(g\dot x \dot x) = 2g_{\mu\nu}\dot x^\mu (\dot x^\nu \nabla \dot x^\nu) = 0$ if $\nabla\dot x = 0$. so timelike $\to$ stays timelike; null $\to$ stays null.
2. the geodesic equation is the simplest form $\ddot x + \Gamma\dot x\dot x = 0$.
3. **conservation laws** from Killing vectors give $\xi_\mu\dot x^\mu = $ const. this constant has clean physical meaning (energy, angular momentum) only with affine $\lambda$.
4. the **affine parameter is unique** up to $\lambda \to a\lambda + b$, so up to physical scaling.

## non-affine parameterisations

sometimes useful to use a different parameter. for example, in computing photon paths, you might use the radial coordinate $r$ as the parameter, getting $r(\phi)$ rather than $r(\lambda)$. this gives a non-affine parametrization, and the geodesic equation has extra terms.

practical: convert to an affine parameter when doing physics; convert back when comparing to coordinate-based observation.

## see also

- [Geodesic equation](../../02_Zettel/Theory/Geodesic equation.md)
- [Timelike vs null vs spacelike](../../02_Zettel/Theory/Timelike vs null vs spacelike.md)
- [Killing vectors and conserved quantities](../../02_Zettel/Theory/Killing vectors and conserved quantities.md)
- [Effective potential approach](../../02_Zettel/Theory/Effective potential approach.md)
- Q8 - null geodesic in static metric
- [General_Relativity_MOC](../../00_Atlas/General_Relativity_MOC.md)
- [Ch 3 - A First Look at Geodesics](../../01_Literature/Book/Baumann GR/Ch 3 - A First Look at Geodesics.md)
