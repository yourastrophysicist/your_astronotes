---
layout: default
title: "Runge phenomenon"
---

# Runge phenomenon

a counterintuitive failure of polynomial interpolation. as I increase the polynomial degree to better fit a smooth function on a fixed interval with equispaced nodes, the interpolant develops *violent oscillations* near the endpoints. more data makes the answer *worse*. discovered by Runge in 1901.

## the canonical example

interpolate
$$f(x) = \frac{1}{1 + 25 x^2}$$

on $[-1, 1]$ with $N+1$ equispaced points. the function is analytic, smooth, infinitely differentiable. yet:

- $N = 5$: interpolant is reasonable
- $N = 10$: small oscillations near $\pm 1$
- $N = 15$: oscillations of amplitude ~1
- $N = 20$: amplitude many times the function's max
- $N = 50$: amplitude $\sim 10^7$

the maximum interpolation error grows *exponentially* with $N$.

## the math behind it

the interpolation error is

$$f(x) - L(x) = \frac{f^{(N+1)}(\xi)}{(N+1)!} \prod_{i=0}^N (x - x_i)$$

the issue is the **node polynomial** $\omega(x) = \prod (x - x_i)$. for equispaced $x_i$, $|\omega|$ is small in the middle of the interval but grows rapidly toward the endpoints. for $f$ analytic but with poles in the complex plane near $\pm 1$ (Runge's example has poles at $x = \pm i/5$), $f^{(N+1)}/(N+1)!$ does not decay fast enough to compensate.

## the cure: Chebyshev nodes

place the interpolation points at the **Chebyshev nodes**:

$$x_k = \cos\left(\frac{(2k+1)\pi}{2(N+1)}\right), \quad k = 0, 1, \ldots, N$$

these nodes cluster near the endpoints, giving them more "support." the Chebyshev nodes minimize the maximum of $|\omega(x)|$ over $[-1, 1]$, killing Runge.

with Chebyshev nodes:
- the interpolation error decays exponentially with $N$ for analytic $f$
- polynomial interpolation becomes a robust high-accuracy method
- this is the foundation of **spectral methods** in PDE solving

## the alternative cure: piecewise polynomials

instead of one high-degree polynomial through all points, use *low-degree* polynomials on each interval, stitched together. examples:

- **piecewise linear**: linear interpolation through each pair
- **cubic spline**: piecewise cubic, $C^2$-continuous globally
- **Hermite spline**: each piece matches both value and derivative

these *cannot* exhibit Runge because the polynomial degree is bounded (1, 3, etc.) regardless of how many data points there are. the global interpolant becomes more accurate by getting more pieces, not by raising the degree.

**this is why we use cubic splines in practice and not high-degree polynomials.**

## diagnostic: when am I in danger?

three warning signs that I am at risk:

1. **using > 5 points in a single polynomial fit**, especially with equispaced data
2. **the interpolant oscillates near the boundaries** more than the data suggests
3. **the residuals at intermediate points** (between data) are larger than at the data themselves

if any of these, switch to splines.

## the practical takeaways

| degree | nodes | risk |
|---|---|---|
| $N = 1$ | linear | none |
| $N = 2-3$ | quadratic/cubic, equispaced | none |
| $N = 4-7$ | equispaced | mild |
| $N \geq 8$ | equispaced | **severe** |
| any $N$ | Chebyshev | **none** |
| any $N$ | piecewise (cubic spline) | **none** |

## astrophysics implications

- **table interpolation**: the standard approach (`scipy.interpolate.interp1d` with `kind='cubic'` or `CubicSpline`) is *not* high-degree polynomial — it is piecewise cubic. so it is Runge-safe by construction
- **polynomial fitting** of order > 5 to data is bad practice, period. fit splines instead
- **spectral methods** in PDE solving rely on Chebyshev or Fourier expansions precisely because they avoid Runge

## a beautiful counterintuition

the Runge phenomenon is a striking example of "more is less" in numerical analysis. it teaches a lesson: *the choice of method must respect the geometry of the problem*. uniform sampling looks fair and democratic but it is the wrong choice for global polynomial interpolation. clustering at the boundaries — the Chebyshev distribution — looks suspicious but is mathematically optimal.

## see also

- [Lagrange polynomial interpolation](../../02_Zettel/Theory/Lagrange polynomial interpolation.md)
- [Newton divided differences](../../02_Zettel/Theory/Newton divided differences.md)
- [Cubic spline interpolation](../../02_Zettel/Theory/Cubic spline interpolation.md)
- [Linear interpolation](../../02_Zettel/Theory/Linear interpolation.md)
- [Mathematical_Numerical_Methods_MOC](../../00_Atlas/Mathematical_Numerical_Methods_MOC.md)
