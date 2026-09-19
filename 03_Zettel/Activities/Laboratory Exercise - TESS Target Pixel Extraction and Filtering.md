---
layout: "default"
title: "Laboratory Exercise - TESS Target Pixel Extraction and Filtering"
---
# Laboratory Exercise — TESS Target Pixel Extraction and Filtering

Protocol for querying TESS Target Pixel Files from MAST, processing light curves, and flattening stellar variability.

## Protocol

### 1. MAST Query and Ingestion
```python
from astroquery.mast import Observations
from astropy.io import fits
import numpy as np

obs = Observations.query_criteria(target_name='HAT-P-44', obs_collection='TESS')
# Download TPF and LCF files
tpf_path = 'HATP44_sector023_tp.fits'
lcf_path = 'HATP44_sector023_lc.fits'
```

### 2. Quality Flag Cleaning
```python
with fits.open(lcf_path) as hdu:
    t = hdu[1].data['TIME']
    pdc_f = hdu[1].data['PDCSAP_FLUX']
    pdc_e = hdu[1].data['PDCSAP_FLUX_ERR']
    qual = hdu[1].data['QUALITY']

# Mask corrupted cadences (momentum dumps, attitude tweaks, stray light)
critical_flags = (1 << 0) | (1 << 2) | (1 << 3) | (1 << 4) | (1 << 5) | (1 << 7)
clean = (qual & critical_flags) == 0
clean &= ~np.isnan(pdc_f) & ~np.isnan(pdc_e)

time_clean = t[clean]
flux_clean = pdc_f[clean]
err_clean = pdc_e[clean]
```

### 3. Out-of-Transit Filtering with Transit Masking
```python
from astropy.stats import biweight_location

# Mask transits based on known ephemeris (T0, Period, Duration)
t0 = 2459688.443452 - 2457000.0 # convert to BTJD
period = 4.3012
dur = 0.15 # days

phase = ((time_clean - t0 + 0.5 * period) % period) - 0.5 * period
in_transit = np.abs(phase) < (dur / 2.0 + 0.03)

# Running biweight filter across 1.5-day window on out-of-transit cadences
window = 1.5 # days
trend = np.zeros_like(time_clean)

for i, ti in enumerate(time_clean):
    pts = (np.abs(time_clean - ti) < window / 2.0) & (~in_transit)
    if np.sum(pts) > 10:
        trend[i] = biweight_location(flux_clean[pts])
    else:
        trend[i] = np.median(flux_clean[~in_transit])

flat_flux = flux_clean / trend
flat_err = err_clean / trend
```

## Related Notes
- [TESS Target Pixel Files and Custom Aperture Masks](../Observations/TESS%20Target%20Pixel%20Files%20and%20Custom%20Aperture%20Masks.html)
- [TESS SAP vs PDCSAP Flux and Cotrending Basis Vectors](../Observations/TESS%20SAP%20vs%20PDCSAP%20Flux%20and%20Cotrending%20Basis%20Vectors.html)
- [Running Median and Biweight Light Curve Filters](../Computational/Running%20Median%20and%20Biweight%20Light%20Curve%20Filters.html)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (1)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astrophysics_Laboratory_2_MOC.html" class="backlink-item">Astrophysics_Laboratory_2_MOC</a></li>
  </ul>
</div>

