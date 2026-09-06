---
layout: default
title: "Two-dimensional interpolation"
---

# Two-dimensional interpolation

extension of 1D interpolation to functions $f(x, y)$ defined on a 2D grid, or scattered $(x_i, y_i, f_i)$. the algorithms differ depending on whether the data is on a regular grid or arbitrary points.

## regular-grid interpolation (the easy case)

data: $f_{i,j}$ at $(x_i, y_j)$ on a rectangular grid.

### bilinear interpolation

linear in each direction. given a query point $(x, y)$:

1. find the surrounding cell $(x_i, x_{i+1}) \times (y_j, y_{j+1})$
2. interpolate linearly in $x$ at $y_j$ and at $y_{j+1}$
3. interpolate linearly in $y$ between those two

formula:
$$f(x, y) = (1 - s)(1 - t) f_{i,j} + s(1-t) f_{i+1,j} + (1-s)t f_{i,j+1} + st f_{i+1,j+1}$$

with $s = (x - x_i)/(x_{i+1} - x_i)$, $t = (y - y_j)/(y_{j+1} - y_j)$.

$O(h^2)$ accuracy. the standard for fast 2D interpolation in image processing and texture mapping.

### bicubic / bivariate spline interpolation

apply a 1D cubic spline along each row, get $f$ as a function of $y$ at each $x_i$. then apply a 1D cubic spline in the $x$ direction at each query $y$. result: $O(h^4)$, $C^2$-smooth.

scipy:
```python
from scipy.interpolate import RegularGridInterpolator, RectBivariateSpline

# bilinear
rgi = RegularGridInterpolator((x_grid, y_grid), z_2d, method='linear')
z_query = rgi((x_pt, y_pt))

# bicubic
rbs = RectBivariateSpline(x_grid, y_grid, z_2d, kx=3, ky=3)
z_query = rbs(x_pt, y_pt)
```

## scattered-data interpolation (the hard case)

data: $(x_i, y_i, f_i)$ at arbitrary, irregular points. no grid structure.

### Delaunay triangulation + linear interpolation

triangulate the $(x_i, y_i)$ points, then interpolate $f$ linearly within each triangle. scipy:

```python
from scipy.interpolate import LinearNDInterpolator, NearestNDInterpolator

interp = LinearNDInterpolator(list(zip(x, y)), z)
z_q = interp(x_query, y_query)
```

robust, $O(h)$ accuracy at best, easy to use.

### `scipy.interpolate.griddata`

higher-level convenience function:

```python
from scipy.interpolate import griddata

xi, yi = np.meshgrid(x_target, y_target)
zi = griddata((x, y), z, (xi, yi), method='cubic')        # 'nearest', 'linear', 'cubic'
```

### radial basis function (RBF)

express $f$ as a weighted sum of radial functions $\phi(\|r - r_i\|)$ centered at each data point:

$$f(x, y) = \sum_i w_i \phi(\|(x, y) - (x_i, y_i)\|)$$

solve a linear system for the weights $w_i$ such that $f(x_j, y_j) = f_j$ for all $j$. choices of $\phi$: Gaussian, multiquadric, thin-plate spline.

scipy:
```python
from scipy.interpolate import Rbf, RBFInterpolator

rbf = Rbf(x, y, z, function='thin_plate')
z_q = rbf(x_query, y_query)
```

flexibility comes at the cost of an $O(N^3)$ linear solve — slow for many data points. for large scattered datasets, prefer triangulation-based methods.

### Kriging / Gaussian process regression

statistical interpolation that also gives uncertainty estimates. used in geostatistics, machine learning, astronomical mapping. `scikit-learn`'s `GaussianProcessRegressor` is the standard tool. expensive ($O(N^3)$ training cost) but gives full uncertainty quantification.

## practical advice

| situation | method |
|---|---|
| regular 2D grid | `RegularGridInterpolator` |
| regular grid, smooth | `RectBivariateSpline` |
| scattered, fast | `griddata(method='linear')` |
| scattered, smooth | `griddata(method='cubic')` |
| scattered, rigorous | `RBFInterpolator` or GP |
| scattered, big data | triangulation-based, not RBF |

## astrophysics use cases

- **CMB maps in pixel space**: HEALPix is the specialized framework, but for small patches `RegularGridInterpolator` works
- **opacity tables** $\kappa(\rho, T)$ for stellar interior codes: bicubic spline on the $(\log T, \log \rho)$ grid
- **photometric magnitudes from a stellar SED grid**: $(M_*, age)$ grid → magnitudes
- **gravitational potential on a Cartesian grid** in cosmological simulations: bilinear or higher-order interpolation to particle positions
- **scattered observations** of a spatial field (e.g. dust extinction map from sparse sightlines)

## the most common pitfall

extrapolation beyond the data range is **bad**. all of these methods quietly extrapolate by default; the answer is unreliable. always check the input range:

```python
in_range = ((x_query >= x_min) & (x_query <= x_max) &
            (y_query >= y_min) & (y_query <= y_max))
z_query[~in_range] = np.nan
```

or set `bounds_error=True` (default in many scipy interpolators) to raise an error.

## see also

- [Linear interpolation](../../02_Zettel/Theory/Linear interpolation.html)
- [Cubic spline interpolation](../../02_Zettel/Theory/Cubic spline interpolation.html)
- [Lagrange polynomial interpolation](../../02_Zettel/Theory/Lagrange polynomial interpolation.html)
- [Scipy interpolation tools](../../02_Zettel/Theory/Scipy interpolation tools.html)
- [Mathematical_Numerical_Methods_MOC](../../00_Atlas/Mathematical_Numerical_Methods_MOC.html)
