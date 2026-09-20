---
layout: "default"
title: "Transit Modeling with batman"
---
# Transit Modeling with batman

The `batman` package (Bad-Ass Transit Model cAlculatioN; Kreidberg 2015) provides a C-optimized Python implementation of the analytical transit light curve equations derived by Mandel & Agol (2002).

## Core Capabilities
- Supports multiple limb darkening models: uniform, linear, quadratic, square-root, logarithmic, exponential, and 4-parameter non-linear.
- Optimized in C with parallel multi-threading capabilities, evaluating thousands of light curves per second for MCMC sampling.
- Numerical exposure time integration (supersampling) to correct for finite exposure smearing.

## Typical Setup
```python
import batman

params = batman.TransitParams()
params.t0 = 2459500.53574          # Time of inferior conjunction (BJD_TDB)
params.per = 3.33665               # Orbital period (days)
params.rp = 0.0764                 # Rp / Rstar
params.a = 13.94                   # a / Rstar
params.inc = 88.9                  # Inclination (degrees)
params.ecc = 0.0                   # Eccentricity
params.w = 90.0                    # Argument of periastron (degrees)
params.u = [0.35, 0.23]            # Limb darkening coefficients [u1, u2]
params.limb_dark = "quadratic"

# Fast light curve computation
m = batman.TransitModel(params, time_array)
light_curve = m.light_curve(params)
```

## Related Notes
- [[Malavolta 11 - Transit Geometry and Analytical Light Curve Modeling]]
- [[Stellar Limb Darkening Laws]]
- [[Exposure Time Smearing in Transit Photometry]]



## Linked References

- [[Exposure Time Smearing in Transit Photometry]]
- [[Mandel-Agol analytical transit light curve model]]
- [[Astrophysics_Laboratory_2_MOC]]
- [[Computational_Astrophysics_MOC]]


