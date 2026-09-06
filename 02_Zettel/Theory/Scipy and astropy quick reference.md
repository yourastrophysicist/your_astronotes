---
layout: default
title: "Scipy and astropy quick reference"
---

# Scipy and astropy quick reference

the two ecosystems that turn raw numpy + matplotlib into a proper astrophysics toolkit.

## scipy: the numerical-methods sister of numpy

scipy is organized as submodules. import what you need:

```python
from scipy import integrate, optimize, interpolate, fft, stats, linalg
```

### integrate (numerical integration)

```python
from scipy.integrate import quad, dblquad, simpson, solve_ivp

I, err = quad(lambda x: np.exp(-x**2), 0, np.inf)        # adaptive 1D
I, err = dblquad(f, a, b, lambda x: 0, lambda x: 1)      # 2D
I = simpson(y, x=x_grid)                                  # given samples
sol = solve_ivp(rhs, (t0, tf), y0, method='RK45',
                rtol=1e-8, dense_output=True)             # ODE
```

### optimize (root-finding and fitting)

```python
from scipy.optimize import brentq, newton, minimize, curve_fit, least_squares

root = brentq(f, a, b)                                    # bracketed root
root = newton(f, x0, fprime=fp)                           # open root, Newton
res = minimize(loss, x0, method='Nelder-Mead')            # minimization
popt, pcov = curve_fit(model, x, y, sigma=err,
                       absolute_sigma=True)               # nonlinear fit
res = least_squares(residuals, x0, jac=J)                 # robust LSQ
```

### interpolate

```python
from scipy.interpolate import CubicSpline, interp1d, RegularGridInterpolator

cs = CubicSpline(x, y)
y_q = cs(x_query)
y_dq = cs(x_query, 1)                                     # derivative

f = interp1d(x, y, kind='cubic')
rgi = RegularGridInterpolator((x_grid, y_grid), z_2d)
```

### fft (Fourier)

```python
from scipy.fft import fft, ifft, rfft, fftfreq

X = fft(x)
freqs = fftfreq(N, d=dt)
X = rfft(x_real)                                          # real-input optimization
```

### stats

```python
from scipy import stats

stats.norm.pdf(x, loc=0, scale=1)                         # Gaussian pdf
stats.chi2.cdf(chi2_obs, df=nu)
stats.ks_2samp(sample1, sample2)                          # KS test
samples = stats.expon.rvs(scale=1.0, size=N)
```

### linalg (extended linear algebra)

```python
from scipy.linalg import lu, lu_factor, lu_solve, cholesky, qr, svd

# more advanced than np.linalg
P, L, U = lu(A)
L = cholesky(A, lower=True)              # SPD A
Q, R = qr(A)
U, s, Vt = svd(A)
```

## astropy: astrophysics-specific tools

### units

the killer feature: physical quantities with units are first-class:

```python
from astropy import units as u, constants as const

distance = 10 * u.pc
distance.to(u.m)                                          # convert: 3.086e17 m
luminosity = 4 * np.pi * distance**2 * flux               # units propagate
energy = 13.6 * u.eV
energy.to(u.erg)                                          # 2.18e-11 erg
```

constants:
```python
const.G       # gravitational constant
const.c       # speed of light
const.k_B     # Boltzmann
const.h       # Planck
const.M_sun   # solar mass
const.L_sun   # solar luminosity
const.pc      # parsec
```

each comes with units and uncertainties. compute things like:
```python
GM = const.G * const.M_sun
T_kepler = 2 * np.pi * np.sqrt((1*u.AU)**3 / GM)
T_kepler.to(u.year)                                       # 1.0000178 yr
```

### io.fits (FITS files, the astronomy data format)

```python
from astropy.io import fits

hdul = fits.open("image.fits")
hdul.info()                                                # primary header + extensions
data = hdul[0].data                                        # the array
header = hdul[0].header
print(header['CRVAL1'])                                    # WCS reference value
```

### coordinates

```python
from astropy.coordinates import SkyCoord
from astropy.time import Time

c = SkyCoord(ra=10.625*u.degree, dec=41.2*u.degree, frame='icrs')
c_galactic = c.galactic
c_galactic.l.deg, c_galactic.b.deg                         # Galactic coords

t = Time('2026-06-24T10:00:00', scale='utc')
```

### cosmology

```python
from astropy.cosmology import Planck18, FlatLambdaCDM

cosmo = Planck18                                           # latest Planck cosmology
cosmo.luminosity_distance(z=0.5)                           # 2916 Mpc
cosmo.age(0)                                                # 13.8 Gyr
my_cosmo = FlatLambdaCDM(H0=70, Om0=0.3)
```

### tables

```python
from astropy.table import Table

t = Table.read("catalog.fits")
print(t.colnames)
mask = t['ra'] > 100
selected = t[mask]
t.write("subset.fits", overwrite=True)
```

## the standard import block for a numerical script

```python
import numpy as np
import matplotlib.pyplot as plt
from scipy import integrate, optimize, interpolate, fft, stats
from astropy import units as u, constants as const

rng = np.random.default_rng(42)
plt.rcParams.update({'font.size': 12, 'figure.dpi': 100})
```

## see also

- [Numpy arrays vs Python lists](../../02_Zettel/Theory/Numpy arrays vs Python lists.md)
- [Matplotlib plotting essentials](../../02_Zettel/Theory/Matplotlib plotting essentials.md)
- [Pandas for tabular astrophysics data](../../02_Zettel/Theory/Pandas for tabular astrophysics data.md)
- [Mathematical_Numerical_Methods_MOC](../../00_Atlas/Mathematical_Numerical_Methods_MOC.md)
