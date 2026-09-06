---
layout: default
title: "Riemann tensor"
---

the **Riemann tensor** $R^\rho{}_{\sigma\mu\nu}$ is the **true curvature of a manifold**. it answers: if I parallel-transport a vector around a tiny closed loop, does it come back unchanged? in flat space yes; in curved space no. Riemann measures the difference.

## the formula

built from Christoffel symbols and their derivatives:
$$\boxed{\, R^\rho{}_{\sigma\mu\nu} = \partial_\mu \Gamma^\rho{}_{\nu\sigma} - \partial_\nu \Gamma^\rho{}_{\mu\sigma} + \Gamma^\rho{}_{\mu\lambda}\Gamma^\lambda{}_{\nu\sigma} - \Gamma^\rho{}_{\nu\lambda}\Gamma^\lambda{}_{\mu\sigma} \,}$$

four terms: two with $\partial\Gamma$, two with $\Gamma\Gamma$.

## the operational definition

equivalent definition via covariant derivatives: the failure of $\nabla_\mu$ and $\nabla_\nu$ to commute when acting on a vector is the Riemann tensor:
$$[\nabla_\mu, \nabla_\nu] V^\rho = R^\rho{}_{\sigma\mu\nu} V^\sigma$$

so Riemann measures **how curved the connection is**, measured by the non-commutativity of covariant derivatives.

## the geometric meaning

parallel-transport a vector $V^\sigma$ around an infinitesimal loop with sides $\delta x^\mu$ and $\delta x^\nu$. the vector returns rotated by:
$$\delta V^\rho \approx -R^\rho{}_{\sigma\mu\nu}\,V^\sigma\,\delta x^\mu \,\delta x^\nu$$

so Riemann is the **holonomy per unit area** of the loop. if Riemann vanishes everywhere, the manifold is flat.

## flat space vs curved space

- **flat space**: $R^\rho{}_{\sigma\mu\nu} = 0$ identically. parallel transport is path-independent. Christoffels can be made to vanish by switching to Cartesian coordinates.
- **curved space**: $R^\rho{}_{\sigma\mu\nu} \ne 0$ at least somewhere. parallel transport is path-dependent. **no coordinate transformation can make Riemann vanish**.

so Riemann is the **invariant** test of curvature. a metric like $ds^2 = dr^2 + r^2 d\theta^2$ is flat (Riemann = 0 everywhere even though Christoffels are non-zero). a metric like the 2-sphere has $R \ne 0$.

## with all indices down

$R_{\rho\sigma\mu\nu} = g_{\rho\alpha}R^\alpha{}_{\sigma\mu\nu}$. has more symmetries (see [Riemann tensor symmetries](../../02_Zettel/Theory/Riemann tensor symmetries.html)).

## the operational interpretation: tidal forces

Riemann gives the **relative acceleration** of two nearby free-falling test particles. two geodesics initially parallel (equal velocities) but at slightly different positions don't stay parallel; they accelerate relative to each other due to **geodesic deviation**:
$$\frac{D^2 \xi^\mu}{D\tau^2} = -R^\mu{}_{\nu\rho\sigma}u^\nu u^\rho \xi^\sigma$$

with $\xi^\mu$ the separation vector and $u^\mu$ the four-velocity. this is the GR version of **tidal force**: the moon's tide on Earth is geodesic deviation due to spatial curvature.

## examples

### flat 2D Cartesian
$\Gamma = 0$, so $R = 0$ trivially.

### flat 2D polar
$\Gamma$ is nonzero, but the structure conspires to give $R = 0$. all the path-dependence cancels: flat space looks flat in any coordinates.

### 2-sphere, radius $R$
non-zero Riemann components: $R^\theta{}_{\phi\theta\phi} = \sin^2\theta$. one independent component (in 2D, only one). intrinsic curvature $K = 1/R^2$.

### Schwarzschild
$R^\rho{}_{\sigma\mu\nu}$ has many non-zero components. one important invariant: $R_{\mu\nu\rho\sigma}R^{\mu\nu\rho\sigma} = 48 G^2 M^2/r^6$. diverges at $r = 0$, finite at the horizon $r = 2GM$ (the horizon is a coordinate singularity, not a curvature one).

### FLRW
non-zero Riemann from both $\dot a$ and $\ddot a$. encodes both the expansion and the acceleration.

## see also

- [Riemann tensor symmetries](../../02_Zettel/Theory/Riemann tensor symmetries.html)
- [Counting Riemann components](../../02_Zettel/Theory/Counting Riemann components.html)
- [Ricci tensor and scalar](../../02_Zettel/Theory/Ricci tensor and scalar.html)
- [Bianchi identities](../../02_Zettel/Theory/Bianchi identities.html)
- [Geodesic deviation](../../02_Zettel/Theory/Geodesic deviation.html)
- [Christoffel symbols](../../02_Zettel/Theory/Christoffel symbols.html)
- [Covariant derivative](../../02_Zettel/Theory/Covariant derivative.html)
- Q5 - Riemann for 1+1 expanding metric
- Q6 - Riemann for conformally flat 1+1
- Q17 - Riemann R_0x0x for a TT plane wave
- [General_Relativity_MOC](../../00_Atlas/General_Relativity_MOC.html)
- [Ch 4 - Spacetime Curvature](../../01_Literature/Book/Baumann GR/Ch 4 - Spacetime Curvature.html)
