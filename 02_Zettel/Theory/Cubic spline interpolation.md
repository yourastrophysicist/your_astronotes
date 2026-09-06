---
layout: default
title: "Cubic spline interpolation"
---

# Cubic spline interpolation

given $N + 1$ data points $(x_i, y_i)$, build a piecewise-cubic interpolant that is $C^2$-continuous (continuous value, slope, *and* curvature). the universal upgrade from linear when smoothness matters.

## the construction

between each pair of adjacent points $(x_i, y_i)$ and $(x_{i+1}, y_{i+1})$, fit a cubic polynomial $S_i(x)$ on $[x_i, x_{i+1}]$ with four free coefficients. the conditions are:

1. **value match** at each end: $S_i(x_i) = y_i$, $S_i(x_{i+1}) = y_{i+1}$ → $2N$ equations
2. **slope match** at each interior point: $S_{i-1}'(x_i) = S_i'(x_i)$ → $N - 1$ equations
3. **curvature match** at each interior point: $S_{i-1}''(x_i) = S_i''(x_i)$ → $N - 1$ equations

total: $4N - 2$ equations on $4N$ unknowns ($N$ cubics × 4 coefs). two more equations needed — these are the **boundary conditions**:

- **natural spline**: $S_0''(x_0) = S_{N-1}''(x_N) = 0$ (zero curvature at endpoints)
- **clamped spline**: $S_0'(x_0)$, $S_{N-1}'(x_N)$ specified
- **periodic spline**: match value, slope, curvature at the two endpoints (for periodic data)
- **not-a-knot**: third derivative continuous at the second and second-to-last points (default in `scipy.interpolate.CubicSpline`)

the linear system is **tridiagonal** (each unknown couples only to its neighbors), so $O(N)$ to solve.

## error

for a smooth function, cubic-spline interpolation has error $O(h^4)$ (where $h = \max_i (x_{i+1} - x_i)$). doubling the data density cuts the error by 16×, vs 4× for linear interpolation.

the first-derivative interpolant is $O(h^3)$. the second-derivative is $O(h^2)$. so cubic splines are smooth enough to differentiate twice, after which accuracy degrades.

## python production

```python
from scipy.interpolate import CubicSpline

cs = CubicSpline(x_data, y_data)              # default: not-a-knot
y_query = cs(x_query)                          # evaluate
y_prime = cs(x_query, 1)                       # first derivative
y_double_prime = cs(x_query, 2)                # second derivative
```

with boundary conditions:
```python
cs = CubicSpline(x_data, y_data, bc_type='natural')      # zero curvature at ends
cs = CubicSpline(x_data, y_data, bc_type='clamped')      # zero slope at ends
cs = CubicSpline(x_data, y_data, bc_type='periodic')     # for periodic data
cs = CubicSpline(x_data, y_data, bc_type=((1, 0), (1, 0)))  # custom: first deriv = 0 at both ends
```

## strengths over polynomial interpolation

a single high-degree polynomial through $N+1$ points exhibits the **Runge phenomenon** — wild oscillations at the edges. cubic splines avoid this entirely because each cubic is local; oscillations cannot propagate.

## strengths over linear interpolation

- **smoothness**: $C^2$ everywhere
- **higher accuracy**: $O(h^4)$ vs $O(h^2)$
- **plottable**: looks smooth in figures, vs the visible kinks of linear

## weaknesses

- **monotonicity not guaranteed**: a cubic spline through monotonic data can have local maxima/minima between points. for monotonic data where this matters, use **PCHIP** (`scipy.interpolate.PchipInterpolator`) which preserves monotonicity at the cost of being only $C^1$
- **Gibbs-like overshoot near sharp features**: data with kinks or near-discontinuities will produce ringing in the spline
- **slightly more code than linear**

## natural splines vs not-a-knot

`scipy.interpolate.CubicSpline` defaults to **not-a-knot** (the third derivative is continuous at the second and second-to-last points; equivalently, the first two cubics share all coefficients, as do the last two). this is more accurate near the boundary than the natural spline.

natural splines have $S'' = 0$ at the endpoints, which can be incorrect (e.g. for $y = \sin x$ with endpoints not at multiples of $\pi$). the natural assumption is wrong → boundary error.

prefer not-a-knot unless I have a physical reason for natural (e.g. genuinely flat at the boundary).

## astrophysics use cases

- **stellar isochrones**: smooth interpolation of $T_{\rm eff}$, $L$ as functions of mass and age
- **cosmological distance calculations**: precompute $D_L(z)$ at a few hundred redshifts, spline-interpolate during MCMC for $10^6\times$ speedup
- **opacity tables**: $\log \kappa(\log T, \log \rho)$ in stellar atmosphere codes (often bicubic splines)
- **photometric filter responses**: the band-integrated quantities depend on smooth spline interpolation of the measured filter curves
- **light-curve modeling**: reconstructing a smooth light curve from sparse observations

## see also

- [Linear interpolation](../../02_Zettel/Theory/Linear interpolation.html)
- [Lagrange polynomial interpolation](../../02_Zettel/Theory/Lagrange polynomial interpolation.html)
- [Runge phenomenon](../../02_Zettel/Theory/Runge phenomenon.html)
- [Newton divided differences](../../02_Zettel/Theory/Newton divided differences.html)
- [Mathematical_Numerical_Methods_MOC](../../00_Atlas/Mathematical_Numerical_Methods_MOC.html)
