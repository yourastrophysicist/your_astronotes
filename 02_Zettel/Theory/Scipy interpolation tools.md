---
layout: default
title: "Scipy interpolation tools"
---

# Scipy interpolation tools

`scipy.interpolate` is the practical interpolation toolkit. one-liners for the standard cases, with knobs for fine control.

## the 1D toolbox

### `np.interp` (numpy)

linear interpolation, the simplest case:

```python
y_query = np.interp(x_query, x_data, y_data)
```

constant extrapolation outside the range. fastest, no-frills, the right answer for many cases.

### `scipy.interpolate.interp1d` (deprecated in scipy 1.13+)

```python
from scipy.interpolate import interp1d
f = interp1d(x_data, y_data, kind='cubic', bounds_error=False, fill_value='extrapolate')
y_query = f(x_query)
```

`kind`: `'linear'`, `'quadratic'`, `'cubic'`, `'previous'`, `'next'`. flexible but being replaced by more specific tools.

### `scipy.interpolate.CubicSpline` (preferred modern)

```python
from scipy.interpolate import CubicSpline
cs = CubicSpline(x_data, y_data, bc_type='not-a-knot')
y_query = cs(x_query)
y_prime = cs(x_query, 1)                 # first derivative
y_double_prime = cs(x_query, 2)         # second derivative
```

`bc_type` options:
- `'not-a-knot'` (default): smooth third derivative at endpoints, most accurate
- `'natural'`: zero second derivative at endpoints
- `'clamped'`: zero first derivative at endpoints
- `'periodic'`: matched values, slopes, curvatures at endpoints
- `((1, slope_left), (1, slope_right))`: custom

### `scipy.interpolate.PchipInterpolator`

piecewise cubic Hermite, **monotonicity-preserving**. for monotonic data where cubic spline overshoots:

```python
from scipy.interpolate import PchipInterpolator
pchip = PchipInterpolator(x_data, y_data)
y_query = pchip(x_query)
```

slightly less smooth than cubic spline ($C^1$ vs $C^2$) but does not introduce spurious extrema.

### `scipy.interpolate.UnivariateSpline`

smoothing spline (does not pass exactly through the data). for noisy data:

```python
from scipy.interpolate import UnivariateSpline
spl = UnivariateSpline(x, y_noisy, w=1/sigma**2, s=N)
```

`s` controls smoothing: $s = 0$ is exact interpolation, $s$ large is heavy smoothing.

## the 2D toolbox

### `scipy.interpolate.RegularGridInterpolator`

regular 2D (or higher-dimensional) grids:

```python
from scipy.interpolate import RegularGridInterpolator

rgi = RegularGridInterpolator(
    (x_grid, y_grid), z_grid_values,
    method='linear',                        # 'linear', 'nearest', 'cubic'
    bounds_error=False, fill_value=np.nan
)
points = np.array([[x1, y1], [x2, y2]])
values = rgi(points)
```

handles arbitrary dimension. the `cubic` method uses tensor-product cubic splines.

### `scipy.interpolate.RectBivariateSpline`

specialized 2D bicubic spline, faster than `RegularGridInterpolator` with `method='cubic'`:

```python
from scipy.interpolate import RectBivariateSpline
rbs = RectBivariateSpline(x_grid, y_grid, z_grid, kx=3, ky=3)
z_query = rbs(x_pt, y_pt)
```

### `scipy.interpolate.griddata`

scattered data on irregular points:

```python
from scipy.interpolate import griddata
zi = griddata((x_scattered, y_scattered), z_scattered,
              (x_query, y_query), method='cubic')      # 'linear', 'nearest', 'cubic'
```

uses Delaunay triangulation under the hood.

### `scipy.interpolate.LinearNDInterpolator`, `NearestNDInterpolator`, `RBFInterpolator`

class-based scattered interpolators. instantiate once, query many times:

```python
from scipy.interpolate import LinearNDInterpolator, RBFInterpolator
interp = LinearNDInterpolator(points, values)
result = interp(query_points)

# RBF for higher-quality interpolation
rbf = RBFInterpolator(points, values, kernel='thin_plate_spline')
```

`RBFInterpolator` (replacing the older `Rbf`) is more flexible and supports modern kernels.

## decision tree

```
1D, smooth data, small (< 100 points), need exact pass-through:
  → CubicSpline or interp1d(kind='cubic')

1D, monotonic data, no overshoot allowed:
  → PchipInterpolator

1D, noisy data:
  → UnivariateSpline (smoothing) or fit a parametric model

1D, just need linear:
  → np.interp

2D regular grid, linear:
  → RegularGridInterpolator (also for 3D, 4D, ...)

2D regular grid, smooth:
  → RectBivariateSpline

2D scattered:
  → griddata (one-shot) or LinearNDInterpolator (repeated queries)

2D scattered, very smooth needed:
  → RBFInterpolator
```

## astrophysics use cases

- **stellar isochrone tables**: `RegularGridInterpolator` over $(M_*, [\mathrm{Fe/H}], \text{age})$ → photometric magnitudes
- **opacity / EOS tables**: `RectBivariateSpline` over $(\log T, \log \rho)$
- **photometric filter responses**: `interp1d` resampling onto a common wavelength grid
- **CMB temperature maps**: HEALPix-specific, not standard scipy
- **N-body force on a particle from a grid**: `RegularGridInterpolator(method='linear')`

## the gotchas

- **extrapolation outside the data range** is rarely correct; always set `bounds_error=True` or check ranges
- **CubicSpline bc_type matters** for tasks near the boundary; default `'not-a-knot'` is usually best
- **scattered data outside the convex hull** of the input gives NaN with `method='cubic'`; nearest-neighbor extrapolation if `method='nearest'`
- **periodic data** — use `bc_type='periodic'` in CubicSpline, or pre-replicate the data

## see also

- [Linear interpolation](../../02_Zettel/Theory/Linear interpolation.html)
- [Cubic spline interpolation](../../02_Zettel/Theory/Cubic spline interpolation.html)
- [Lagrange polynomial interpolation](../../02_Zettel/Theory/Lagrange polynomial interpolation.html)
- [Two-dimensional interpolation](../../02_Zettel/Theory/Two-dimensional interpolation.html)
- [Mathematical_Numerical_Methods_MOC](../../00_Atlas/Mathematical_Numerical_Methods_MOC.html)
