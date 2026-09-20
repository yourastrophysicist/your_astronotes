---
layout: "default"
title: "Laboratory Exercise - Science Frame Reduction and Error Tracking"
---
# Laboratory Exercise — Science Frame Reduction and Error Tracking

Protocol for executing full calibration and error propagation on scientific target observations.

## Protocol

### 1. Calibration and Variance Propagation
```python
import numpy as np

def reduce_science_frame(raw_data, master_bias, master_flat_norm,
                         sigma_bias, sigma_flat, ron_adu, gain):
    # Net ADU above bias
    net_adu = np.maximum(0.0, raw_data - master_bias)

    # Raw Poisson and electronic variance
    var_raw = (net_adu / gain) + (ron_adu ** 2)

    # Calibrated frame
    calibrated = net_adu / master_flat_norm

    # Full error propagation
    var_calibrated = (var_raw + sigma_bias**2) / (master_flat_norm**2) +                      (net_adu**2 * sigma_flat**2) / (master_flat_norm**4)

    return calibrated, np.sqrt(var_calibrated)
```

### 2. Cosmic Ray Cleaning with Astro-SCRAPPY
```python
import astroscrappy

mask, cleaned_calibrated = astroscrappy.detect_cosmics(
    calibrated,
    invar=1.0 / (error**2),
    sigclip=4.5,
    sigfrac=0.3,
    objlim=5.0,
    gain=gain,
    readnoise=ron_electrons,
    satlevel=55000.0,
    sepmed=True,
    cleantype='medmask'
)
```

### 3. Barycentric Timestamp Extraction
```python
from astropy.time import Time
from astropy.coordinates import SkyCoord, EarthLocation
import astropy.units as u

# Telescope location (e.g., Asiago Copernico: 11.526? E, 45.867? N, 1366m)
asiago = EarthLocation(lat=45.867*u.deg, lon=11.526*u.deg, height=1366*u.m)

# UTC time from header (mid-exposure)
t_utc = Time(header['DATE-OBS'], format='isot', scale='utc', location=asiago)
t_utc += (header['EXPTIME'] / 2.0) * u.s

target = SkyCoord(ra=target_ra, dec=target_dec, unit=(u.hourangle, u.deg))
ltt = t_utc.light_travel_time(target, ephemeris='jpl')
bjd_tdb = (t_utc.tdb + ltt).jd
```

## Related Notes
- [[Science Frame Calibration and Variance Propagation]]
- [[Cosmic Ray Rejection via Laplacian Edge Detection]]
- [[Barycentric Julian Date and Time System Conversions]]



## Linked References

- [[Astrophysics_Laboratory_2_MOC]]


