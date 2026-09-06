---
layout: default
title: "Linear interpolation"
---

# Linear interpolation

the simplest interpolation scheme. given two points $(x_0, y_0)$ and $(x_1, y_1)$, estimate $y$ at any $x \in [x_0, x_1]$ as the straight line through them:

$$y(x) = y_0 + (y_1 - y_0) \frac{x - x_0}{x_1 - x_0}$$

equivalently:

$$y(x) = y_0 \cdot \frac{x_1 - x}{x_1 - x_0} + y_1 \cdot \frac{x - x_0}{x_1 - x_0}$$

a convex combination with weights summing to 1.

## error

if the underlying function is twice-differentiable, the error of linear interpolation between two adjacent points $h$ apart is

$$|f(x) - L(x)| \leq \frac{h^2}{8} \max |f''|$$

so $O(h^2)$ — same order as the trapezoidal rule, which is just integrated linear interpolation.

## python (numpy)

```python
y = np.interp(x_query, x_data, y_data)
```

`np.interp` does linear interpolation between consecutive data points, with constant extrapolation outside the domain. fast, vectorized, the right tool for routine work.

## strengths

- **simple**: 3 lines of code
- **monotonicity-preserving**: if data is monotonic, the interpolant is too. cubic splines do *not* have this property
- **no oscillations**: linear cannot overshoot
- **fast**: $O(\log N)$ per query with binary search; $O(N + Q)$ for $Q$ vectorized queries on sorted data

## weaknesses

- **kinks at data points**: the derivative is discontinuous. so derivative-based downstream computations are bad
- **slow convergence**: $O(h^2)$ vs $O(h^4)$ for cubic spline. for a smooth function, doubling the data points reduces interpolation error by 4×, not 16×

## piecewise structure

linear interpolation assumes I have many data points and apply the formula in each interval. if the data is monotonic and the function is smooth, this is "good enough" for most engineering and physics applications:

```python
def interp_linear(x, xs, ys):
    """Linear interp at x given sorted (xs, ys). Returns NaN if x out of range."""
    if x < xs[0] or x > xs[-1]:
        return np.nan
    i = np.searchsorted(xs, x) - 1
    i = max(0, min(i, len(xs) - 2))
    return ys[i] + (ys[i+1] - ys[i]) * (x - xs[i]) / (xs[i+1] - xs[i])
```

## extrapolation

extrapolation beyond the data range is *generally bad practice* in any interpolation scheme. linear extrapolation has the advantage of not blowing up wildly (unlike polynomial), but the answer is still unreliable. **always flag or refuse extrapolation** in production code.

## bilinear interpolation (2D)

extension to a regular 2D grid: linearly interpolate first along $x$, then along $y$ (or vice versa, the answer is the same).

$$f(x, y) \approx (1-s)(1-t) f_{ij} + s(1-t) f_{i+1,j} + (1-s)t f_{i,j+1} + st f_{i+1,j+1}$$

where $s = (x - x_i)/(x_{i+1} - x_i)$, $t = (y - y_j)/(y_{j+1} - y_j)$.

scipy: `scipy.interpolate.RegularGridInterpolator`.

## astrophysics use cases

- **looking up tabulated opacities** $\kappa(T, \rho)$ in stellar interior code
- **interpolating evolutionary tracks** from theoretical isochrone tables
- **resampling spectra** onto a common wavelength grid
- **CMB map operations** (combined with other techniques)
- **N-body force interpolation** from a grid (PM scheme)
- **photometric redshift estimates** from training-set lookups

## when to upgrade to cubic spline

- if I will *differentiate* the interpolant: linear gives a step function for $f'$, which is typically useless. use cubic spline (smooth $f'$) or quintic (smooth $f''$)
- if data is smoothly varying and I want $O(h^4)$ accuracy
- if I am plotting the interpolant for presentation: cubic splines look better

## see also

- [Lagrange polynomial interpolation](../../02_Zettel/Theory/Lagrange polynomial interpolation.md)
- [Cubic spline interpolation](../../02_Zettel/Theory/Cubic spline interpolation.md)
- [Runge phenomenon](../../02_Zettel/Theory/Runge phenomenon.md)
- [Trapezoidal rule](../../02_Zettel/Theory/Trapezoidal rule.md)
- [Mathematical_Numerical_Methods_MOC](../../00_Atlas/Mathematical_Numerical_Methods_MOC.md)
