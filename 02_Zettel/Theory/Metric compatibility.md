---
layout: default
title: "Metric compatibility"
---

the **metric compatibility** of the Levi-Civita connection means $\nabla_\rho g_{\mu\nu} = 0$. one of the two conditions defining LC. encodes the physical statement that **lengths and angles are preserved under parallel transport**.

## the equation

$$\boxed{\, \nabla_\rho g_{\mu\nu} = 0 \,}$$

this is true everywhere on the manifold, in any coordinate system.

equivalent statements:
- the metric is "covariantly constant."
- the **inner product** between two parallel-transported vectors is preserved: if $V^\mu(\tau)$ and $W^\mu(\tau)$ are parallel-transported, then $g_{\mu\nu}V^\mu W^\nu$ is constant along the curve.
- raising / lowering indices commutes with covariant differentiation: $\nabla(g^{\mu\nu} V_\nu) = g^{\mu\nu}\nabla V_\nu$.

## the consequence

with metric compatibility, **lengths of vectors are preserved** under parallel transport. proper time + proper length are well-defined invariants. clocks and rulers behave consistently.

without metric compatibility, parallel-transported vectors could change length. this would break the standard interpretation of distance + time in GR. rejecting metric compatibility is one path to alternative theories of gravity (Weyl gravity, certain modified-gravity theories).

## the proof of the Christoffel formula

starting from $\nabla_\rho g_{\mu\nu} = 0$:
$$\partial_\rho g_{\mu\nu} - \Gamma^\sigma{}_{\rho\mu}g_{\sigma\nu} - \Gamma^\sigma{}_{\rho\nu}g_{\mu\sigma} = 0$$

permute indices, add and subtract appropriately. with **torsion-free** assumed ($\Gamma$ symmetric in lower), the result is the Christoffel formula:
$$\Gamma^\rho{}_{\mu\nu} = \frac{1}{2}g^{\rho\sigma}\!\left(\partial_\mu g_{\sigma\nu} + \partial_\nu g_{\sigma\mu} - \partial_\sigma g_{\mu\nu}\right)$$

so the Levi-Civita connection is **uniquely determined** by metric compatibility + torsion-free. (this is the **fundamental theorem of (pseudo-)Riemannian geometry**.)

## verifying metric compatibility on an explicit metric

a useful exam-style exercise. given a metric, compute its Christoffels, then check $\nabla_\rho g_{\mu\nu} = \partial_\rho g_{\mu\nu} - \Gamma^\sigma{}_{\rho\mu}g_{\sigma\nu} - \Gamma^\sigma{}_{\rho\nu}g_{\mu\sigma}$ component by component.

example: 2-sphere with $g_{\theta\theta} = R^2$, $g_{\phi\phi} = R^2 \sin^2\theta$. with $\Gamma^\theta{}_{\phi\phi} = -\sin\theta\cos\theta$, $\Gamma^\phi{}_{\theta\phi} = \cot\theta$:

$\nabla_\theta g_{\phi\phi} = \partial_\theta(R^2 \sin^2\theta) - 2\Gamma^\sigma{}_{\theta\phi}g_{\sigma\phi}$
$= 2R^2\sin\theta\cos\theta - 2 \cdot \cot\theta \cdot R^2\sin^2\theta$
$= 2R^2\sin\theta\cos\theta - 2R^2 \sin\theta\cos\theta$
$= 0$. ✓

see Q4 - metric compatibility on the 2-sphere for the full computation.

## what metric compatibility buys you

several powerful tools:
1. **raising / lowering indices commutes with $\nabla$**: $\nabla_\rho V^\mu = g^{\mu\nu}\nabla_\rho V_\nu$. tensor algebra plays nicely with differentiation.
2. **proper time interpretation**: $d\tau^2 = -ds^2 = -g_{\mu\nu}dx^\mu dx^\nu$ is well-defined and measures clock time correctly.
3. **first integral of geodesic equation**: along a geodesic, $g_{\mu\nu}\dot x^\mu \dot x^\nu$ is constant (proper time = affine parameter for timelike geodesics).
4. **stress-energy conservation**: $\nabla^\mu T_{\mu\nu} = 0$ has a clean covariant form.

## see also

- [Levi-Civita connection](../../02_Zettel/Theory/Levi-Civita connection.md)
- [Christoffel symbols](../../02_Zettel/Theory/Christoffel symbols.md)
- [Covariant derivative](../../02_Zettel/Theory/Covariant derivative.md)
- [Parallel transport](../../02_Zettel/Theory/Parallel transport.md)
- [Geodesic equation](../../02_Zettel/Theory/Geodesic equation.md)
- Q4 - metric compatibility on the 2-sphere
- [General_Relativity_MOC](../../00_Atlas/General_Relativity_MOC.md)
- [Ch 2 - Some Differential Geometry](../../01_Literature/Book/Baumann GR/Ch 2 - Some Differential Geometry.md)
