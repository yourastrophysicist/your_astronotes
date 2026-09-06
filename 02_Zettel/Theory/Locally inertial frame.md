---
layout: default
title: "Locally inertial frame"
---

at any point $p$ on a Lorentzian manifold, you can find coordinates in which the metric is **Minkowski to leading order** + corrections at second order:
$$g_{\mu\nu}(x) = \eta_{\mu\nu} + O((x - x_p)^2)$$

these are **locally inertial coordinates** (LIC) at $p$. they are the geometric statement of the **equivalence principle**: a freely-falling observer locally cannot detect gravity.

## what locally inertial means

at the point $p$:
- $g_{\mu\nu}(p) = \eta_{\mu\nu}$ (Minkowski).
- $\partial_\rho g_{\mu\nu}(p) = 0$ (so all Christoffels vanish at $p$).
- but $\partial_\rho \partial_\sigma g_{\mu\nu}(p) \ne 0$ in general (Riemann tensor encodes this).

so locally, **special relativity holds**. only at second order do tidal effects show up, encoded in $R^\rho{}_{\sigma\mu\nu}$.

## why this matters: the equivalence principle

Einstein's central insight: **a freely-falling observer in a gravitational field is locally indistinguishable from an inertial observer in flat spacetime**. an astronaut in a windowless free-falling capsule cannot tell, from local experiments, whether they're in deep space or falling toward a planet.

mathematically, this is exactly the statement that LIC exist at every point. gravity is **not** a force in the local frame; it's a property of the global geometry that shows up only when you compare nearby free-falling observers (geodesic deviation).

## the construction

at $p$, choose a basis for the tangent space. orthonormalise with respect to $g_{\mu\nu}(p)$. extend along geodesics from $p$. this gives **Riemann normal coordinates**, the canonical LIC.

at $p$ exactly: $g = \eta$, $\Gamma = 0$.
infinitesimally near $p$: $g_{\mu\nu} = \eta_{\mu\nu} - \frac{1}{3}R_{\mu\rho\nu\sigma}(p)\,x^\rho x^\sigma + O(x^3)$.

## what LIC do for me

several powerful consequences:
1. **derive equations**: any tensor equation valid in flat spacetime + $\partial \to \nabla$ is automatically valid in curved spacetime, because in LIC at any point both equations coincide. this is the *minimal coupling* prescription.
2. **proper time**: an observer's proper time is just $d\tau^2 = -ds^2$ along their world line, computable in any LIC.
3. **physical interpretation**: the LIC observer's instruments behave just like in special relativity. Maxwell's equations, the Dirac equation, etc., look unchanged at the local point.

## what LIC do NOT do for me

LIC don't kill **curvature**. tidal forces (geodesic deviation) survive even at $p$: two free-falling observers at slightly different positions feel relative acceleration. in LIC at one point, **at that point** there's no force, but their separation evolves due to second-derivatives of $g$ (Riemann).

so the equivalence principle is **strictly local**. globally, gravity is real and unmistakable.

## the strong vs weak equivalence principle

- **weak** EP: free-falling test particles follow the same trajectories regardless of composition. equivalent to "all matter responds to gravity the same way."
- **strong** EP: all non-gravitational physics in a sufficiently small free-falling lab matches special relativity, regardless of where in spacetime. (this is what LIC encode.)

GR builds on the strong EP. tested to spectacular precision by Eotvos-type experiments and by lunar laser ranging.

## see also

- [Manifold metric and signature](../../02_Zettel/Theory/Manifold metric and signature.md)
- [Christoffel symbols](../../02_Zettel/Theory/Christoffel symbols.md)
- [Geodesic deviation](../../02_Zettel/Theory/Geodesic deviation.md)
- [Geodesic equation](../../02_Zettel/Theory/Geodesic equation.md)
- [Newtonian limit of GR](../../02_Zettel/Theory/Newtonian limit of GR.md)
- [General_Relativity_MOC](../../00_Atlas/General_Relativity_MOC.md)
- [Ch 1 - Gravity is Geometry](../../01_Literature/Book/Baumann GR/Ch 1 - Gravity is Geometry.md)
- [Ch 2 - Some Differential Geometry](../../01_Literature/Book/Baumann GR/Ch 2 - Some Differential Geometry.md)
