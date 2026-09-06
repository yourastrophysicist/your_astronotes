---
layout: default
title: "Lagrange polynomial interpolation"
---

# Lagrange polynomial interpolation

given $N + 1$ data points $(x_0, y_0), \ldots, (x_N, y_N)$ with distinct $x_i$, there is a **unique** polynomial of degree at most $N$ that passes through all of them. the Lagrange formula writes that polynomial explicitly without solving any linear system.

## the formula

$$L(x) = \sum_{i=0}^{N} y_i \, \ell_i(x), \quad \ell_i(x) = \prod_{j \neq i} \frac{x - x_j}{x_i - x_j}$$

each $\ell_i(x)$ is the **Lagrange basis polynomial** that equals 1 at $x_i$ and 0 at every other $x_j$. so $L(x_i) = y_i$ by construction.

## why "unique"

a polynomial of degree at most $N$ has $N + 1$ coefficients. matching it to $N + 1$ data points gives $N + 1$ linear equations for $N + 1$ unknowns; if the $x_i$ are distinct, the system has a unique solution. the Lagrange formula just writes that solution down explicitly.

## python

```python
def lagrange(x_data, y_data, x_query):
    N = len(x_data)
    L = 0.0
    for i in range(N):
        l_i = 1.0
        for j in range(N):
            if j != i:
                l_i *= (x_query - x_data[j]) / (x_data[i] - x_data[j])
        L += y_data[i] * l_i
    return L
```

scipy: `scipy.interpolate.lagrange(x, y)` returns the polynomial coefficients. for vectorized evaluation use `numpy.polynomial.Polynomial`.

## complexity

each query: $O(N^2)$. for $Q$ queries: $O(Q N^2)$. faster algorithms exist (Neville's algorithm, barycentric Lagrange) for repeated queries on the same data.

## strengths

- **conceptually clean**: the unique interpolating polynomial in a closed form
- **smooth**: infinitely differentiable
- **theoretical baseline**: every numerical analysis textbook starts here

## the central weakness: the Runge phenomenon

for *equispaced* data and high $N$, the Lagrange interpolant develops violent oscillations near the boundaries of the interval, *even if the underlying function is smooth*. this is the **Runge phenomenon**, classically demonstrated on $f(x) = 1/(1 + 25 x^2)$ on $[-1, 1]$:

- $N = 5$: small oscillations
- $N = 10$: oscillations of amplitude ~1
- $N = 20$: oscillations of amplitude $\gg 1$, the interpolant goes to $\infty$ at the edges

the maximum error grows exponentially with $N$ for equispaced data with non-analytic functions. **this is why we do not use high-degree polynomial interpolation in practice.**

## three escape routes from Runge

1. **use Chebyshev nodes** ($x_i = \cos(\pi i/N)$, clustered near the endpoints): the Runge phenomenon vanishes; high-degree polynomial interpolation converges geometrically. used in spectral methods
2. **use piecewise polynomials**: keep the polynomial degree low (1, 3) and stitch pieces together. this is the linear-spline / cubic-spline strategy
3. **use rational interpolation** or barycentric Lagrange with carefully chosen weights

## error estimate

for any interpolation by a polynomial of degree $N$ through $N + 1$ points:

$$f(x) - L(x) = \frac{f^{(N+1)}(\xi)}{(N+1)!} \prod_{i=0}^{N}(x - x_i)$$

for some $\xi$ in the interval. the product $\prod (x - x_i)$ is the source of Runge: at equispaced nodes, it grows wildly near the endpoints. at Chebyshev nodes, it stays bounded.

## the right way to use Lagrange in practice

for **few points** ($N \leq 5$ or so), Lagrange is fine. examples:

- interpolating between three table values for opacity lookup
- 4th-order accurate gradient computation from 5 stencil points
- recovering an analytic value from 4 numerical solutions in a Richardson extrapolation

for **many points**, switch to cubic spline, piecewise linear, or Chebyshev expansion.

## Newton's divided-differences form

an algebraically equivalent form of the same polynomial:

$$N(x) = a_0 + a_1 (x - x_0) + a_2 (x - x_0)(x - x_1) + \cdots$$

with coefficients $a_i$ computed from divided differences. advantage: adding a new data point requires only $O(N)$ extra work (just compute one new divided difference and append a term), rather than rebuilding the whole polynomial.

see [Newton divided differences](../../02_Zettel/Theory/Newton divided differences.html).

## see also

- [Linear interpolation](../../02_Zettel/Theory/Linear interpolation.html)
- [Cubic spline interpolation](../../02_Zettel/Theory/Cubic spline interpolation.html)
- [Runge phenomenon](../../02_Zettel/Theory/Runge phenomenon.html)
- [Newton divided differences](../../02_Zettel/Theory/Newton divided differences.html)
- [Mathematical_Numerical_Methods_MOC](../../00_Atlas/Mathematical_Numerical_Methods_MOC.html)
