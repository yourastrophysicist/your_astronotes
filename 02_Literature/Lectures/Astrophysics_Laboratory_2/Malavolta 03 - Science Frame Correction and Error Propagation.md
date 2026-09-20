---
layout: "default"
title: "Malavolta 03 - Science Frame Correction and Error Propagation"
---
# Malavolta 03 — Science Frame Correction and Error Propagation

*Astrophysics Laboratory 2, Prof. Luca Malavolta*  
*Index: [[Astrophysics_Laboratory_2_MOC]]*

---

## The Fundamental Calibration Equation

Every raw science image $I_{\text{raw}}(x, y)$ contains additive bias levels and multiplicative flat field non-uniformity. The calibrated scientific frame $I_{\text{corr}}(x, y)$ is calculated via:

$$I_{\text{corr}}(x, y) = \frac{I_{\text{raw}}(x, y) - \text{MasterBias}(x, y)}{\text{MasterFlat}_{\text{norm}}(x, y)}$$

Each calibrated pixel represents the true relative photon flux entering the telescope aperture.

---

## Rigorous Pixel-by-Pixel Variance Propagation

In high-precision exoplanet transit photometry (where signals are $\,\sim 0.1?1\%$), accurate uncertainty tracking is essential. The total variance $\sigma_{I_{\text{corr}}}^2(x, y)$ is derived using first-order multivariate Taylor expansion:

$$\sigma^2(f(x_1, \dots, x_n)) = \sum_{k=1}^n \left( \frac{\partial f}{\partial x_k} \right)^2 \sigma_{x_k}^2$$

Applying this to the calibration equation:
$$\frac{\partial I_{\text{corr}}}{\partial I_{\text{raw}}} = \frac{1}{\text{MasterFlat}_{\text{norm}}}$$
$$\frac{\partial I_{\text{corr}}}{\partial \text{MasterBias}} = -\frac{1}{\text{MasterFlat}_{\text{norm}}}$$
$$\frac{\partial I_{\text{corr}}}{\partial \text{MasterFlat}_{\text{norm}}} = -\frac{I_{\text{raw}} - \text{MasterBias}}{\text{MasterFlat}_{\text{norm}}^2}$$

Assuming statistical independence between science, bias, and flat frames:

$$\sigma_{I_{\text{corr}}}^2 = \frac{\sigma_{I_{\text{raw}}}^2 + \sigma_{\text{MasterBias}}^2}{\text{MasterFlat}_{\text{norm}}^2} + \frac{(I_{\text{raw}} - \text{MasterBias})^2 \cdot \sigma_{\text{MasterFlat}_{\text{norm}}}^2}{\text{MasterFlat}_{\text{norm}}^4}$$

### Raw Science Frame Variance
The raw image variance in ADU combines Poisson shot noise from object and sky photons with electronic readout noise:
$$\sigma_{I_{\text{raw}}}^2(x, y) = \frac{\max(0, I_{\text{raw}}(x, y) - \text{MasterBias}(x, y))}{g} + \sigma_{\text{RON, ADU}}^2$$
where $g$ is the ADC gain ($e^-/\text{ADU}$).

Python implementation:
```python
import numpy as np

def calibrate_science_frame(raw_sci, master_bias, master_flat_norm,
                            sigma_bias, sigma_flat, ron_adu, gain):
    # 1. Raw science variance in ADU^2
    net_adu = np.maximum(0.0, raw_sci - master_bias)
    var_raw = (net_adu / gain) + (ron_adu ** 2)

    # 2. Calibrated intensity
    sci_corr = net_adu / master_flat_norm

    # 3. Propagated variance
    var_corr = (var_raw + sigma_bias**2) / (master_flat_norm**2) +                (net_adu**2 * sigma_flat**2) / (master_flat_norm**4)

    return sci_corr, np.sqrt(var_corr)
```

---

## Cosmic Ray and Bad Pixel Identification

High-energy cosmic rays and radioactive decays in dewar glass create sharp, high-gradient intensity spikes that do not follow the telescope Point Spread Function (PSF).

### The L.A. Cosmic Algorithm (van Dokkum 2001)
The Astro-SCRAPPY implementation uses Laplacian edge detection:
$$\mathcal{L}(x, y) = \nabla^2 I(x, y) = 4 I(x, y) - [I(x+1, y) + I(x-1, y) + I(x, y+1) + I(x, y-1)]$$
- Point sources (stars) are smoothed by seeing and the telescope optics; their Laplacian is bounded by the PSF width.
- Cosmic rays have zero optical broadening; their Laplacian exhibits sharp discontinuous edges.
- Pixels where $\mathcal{L} / \sigma > \text{threshold}$ are flagged and replaced by median interpolation over surrounding unflagged neighbors.

---

## Precise Time System Transformations: UTC to BJD_TDB

Exoplanet transits require time stamps accurate to within seconds. Raw FITS headers record Universal Time Coordinated (UTC).
- UTC is an atomic timescale periodically adjusted with leap seconds.
- Earth's orbit introduces a geometric light travel delay between the Earth and the Solar System Barycenter of up to $\pm 8.3$ minutes:
$$t_{\text{barycenter}} - t_{\text{geocenter}} \approx \frac{\vec{r}_{\text{Earth}} \cdot \hat{n}_{\star}}{c}$$

### Barycentric Julian Date in Barycentric Dynamical Time ($BJD_{\text{TDB}}$)
To ensure physical consistency across years and observatory locations:
$$BJD_{\text{TDB}} = JD_{\text{UTC}} + \Delta t_{\text{leap}} + \Delta t_{\text{Einstein}} + \frac{\vec{r}_{\text{topo}} \cdot \hat{n}_\star}{c}$$
Calculated using the `jplephem` package and JPL DE430 ephemerides (Eastman et al. 2010):
```python
from astropy.time import Time
from astropy.coordinates import SkyCoord, EarthLocation
import astropy.units as u

time_utc = Time(header['DATE-OBS'], format='isot', scale='utc', location=telescope_location)
target = SkyCoord(ra=target_ra, dec=target_dec, unit=(u.hourangle, u.deg))
ltt_bary = time_utc.light_travel_time(target, ephemeris='jpl')
bjd_tdb = (time_utc.tdb + ltt_bary).jd
```

---

## Related Notes
- [[Science Frame Calibration and Variance Propagation]]
- [[Cosmic Ray Rejection via Laplacian Edge Detection]]
- [[Barycentric Julian Date and Time System Conversions]]
- [[Laboratory Exercise - Science Frame Reduction and Error Tracking]]



## Linked References

- [[Barycentric Julian Date and Time System Conversions]]
- [[Cosmic Ray Rejection via Laplacian Edge Detection]]
- [[Science Frame Calibration and Variance Propagation]]
- [[Astrophysics_Laboratory_2_MOC]]


