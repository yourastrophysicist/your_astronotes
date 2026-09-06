---
layout: default
title: "Christoffel symbols"
---

Christoffel symbols $\Gamma^\rho{}_{\mu\nu}$ are the **price of using coordinates** on a curved manifold. they encode how coordinate axes tilt as you move around. in flat space + Cartesian, they're zero. in flat space + polar, they're non-zero (axes twist around origin). on a curved manifold, they're non-zero for both reasons.

## the formula

assuming a torsion-free, metric-compatible connection (the **Levi-Civita** connection), Christoffels are uniquely determined by the metric:
$$\boxed{\, \Gamma^\rho{}_{\mu\nu} = \frac{1}{2}g^{\rho\sigma}\!\left(\partial_\mu g_{\sigma\nu} + \partial_\nu g_{\sigma\mu} - \partial_\sigma g_{\mu\nu}\right) \,}$$

so given a metric, you can mechanically compute all $\Gamma$s by partial differentiation.

## key properties

- **symmetric in lower indices**: $\Gamma^\rho{}_{\mu\nu} = \Gamma^\rho{}_{\nu\mu}$ (because LC is torsion-free).
- **not a tensor**: under coordinate changes, $\Gamma$ doesn't transform as a $(1, 2)$-tensor; the inhomogeneous term is exactly what cancels the non-tensorial part of $\partial_\mu V^\nu$ in the covariant derivative.
- **vanishes in Riemann normal coordinates** at the origin: $\Gamma(p) = 0$, but $\partial\Gamma(p) \ne 0$ if the manifold is curved.

## what they're for

Christoffels appear as corrections in:
- the **covariant derivative** $\nabla_\mu V^\nu = \partial_\mu V^\nu + \Gamma^\nu{}_{\mu\rho} V^\rho$.
- the **geodesic equation** $\ddot x^\mu + \Gamma^\mu{}_{\alpha\beta}\dot x^\alpha\dot x^\beta = 0$.
- the **Riemann tensor** (built from $\Gamma$ + $\partial\Gamma$).

so once you have $\Gamma$, you have all the geometry.

## counting

at every point of a 4D manifold, $\Gamma$ has $4 \times \binom{4+1}{2} = 4 \cdot 10 = 40$ independent components (4 upper, 10 symmetric lower pairs). most of these are zero in symmetric metrics; the practical exam tables for FLRW and Schwarzschild have ~6 to 10 non-zero ones.

## practical tip for computing

three approaches:
1. **direct from the formula**: tedious but mechanical. always works.
2. **from the geodesic equation Lagrangian**: $L = g_{\mu\nu}\dot x^\mu\dot x^\nu$. Euler-Lagrange equations directly produce $\ddot x + \Gamma\dot x\dot x$, and reading off coefficients gives $\Gamma$. faster in practice for diagonal metrics.
3. **symbolic computation**: SymPy, Mathematica, GraviPy automate this for any metric.

## examples

### flat 2D polar
$ds^2 = dr^2 + r^2 d\theta^2$. non-zero: $\Gamma^r{}_{\theta\theta} = -r$, $\Gamma^\theta{}_{r\theta} = \Gamma^\theta{}_{\theta r} = 1/r$.

### 2-sphere
$ds^2 = R^2(d\theta^2 + \sin^2\theta\,d\phi^2)$. non-zero: $\Gamma^\theta{}_{\phi\phi} = -\sin\theta\cos\theta$, $\Gamma^\phi{}_{\theta\phi} = \Gamma^\phi{}_{\phi\theta} = \cot\theta$.

### Schwarzschild (selected)
$\Gamma^t{}_{tr} = M/[r(r - 2M)]$, $\Gamma^r{}_{tt} = (M/r^2)(1 - 2M/r)$, $\Gamma^r{}_{rr} = -M/[r(r - 2M)]$, etc. see Q11 - selected Schwarzschild Christoffels for the full table.

### FLRW
$\Gamma^0{}_{ij} = a\dot a\,\gamma_{ij}$, $\Gamma^i{}_{0j} = (\dot a/a)\delta^i{}_j$. see [FLRW metric](../../02_Zettel/Theory/FLRW metric.md).

## see also

- [Levi-Civita connection](../../02_Zettel/Theory/Levi-Civita connection.md)
- [Covariant derivative](../../02_Zettel/Theory/Covariant derivative.md)
- [Metric compatibility](../../02_Zettel/Theory/Metric compatibility.md)
- [Geodesic equation](../../02_Zettel/Theory/Geodesic equation.md)
- [Riemann tensor](../../02_Zettel/Theory/Riemann tensor.md)
- [Coordinate transformations and tensors](../../02_Zettel/Theory/Coordinate transformations and tensors.md)
- Q1 - Christoffels for diagonal 2D metric
- Q2 - Christoffels for radial 2D metric
- Q11 - selected Schwarzschild Christoffels
- Q16 - Christoffels for a TT plane wave
- [General_Relativity_MOC](../../00_Atlas/General_Relativity_MOC.md)
- [Ch 2 - Some Differential Geometry](../../01_Literature/Book/Baumann GR/Ch 2 - Some Differential Geometry.md)
