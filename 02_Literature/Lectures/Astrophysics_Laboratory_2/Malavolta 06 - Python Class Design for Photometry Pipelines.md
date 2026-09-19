---
layout: "default"
title: "Malavolta 06 - Python Class Design for Photometry Pipelines"
---
# Malavolta 06 — Python Class Design for Photometry Pipelines

*Astrophysics Laboratory 2, Prof. Luca Malavolta*  
*Index: [Astrophysics_Laboratory_2_MOC](../../../04_Atlas/Astrophysics_Laboratory_2_MOC.html)*

---

## Motivation for Object-Oriented Pipelines

Scientific data processing pipelines that handle hundreds or thousands of sequential FITS frames quickly become unmaintainable when written as loose scripts with nested procedural functions. Object-Oriented Programming (OOP) in Python provides:
- **Encapsulation**: bundling image data arrays, variance maps, centroid coordinates, and photometric measurements into self-contained objects.
- **State Consistency**: preventing silent variable shadowing or passing incorrect aperture parameters between reduction stages.
- **Extensibility**: easily subclassing base photometric extractors to support circular apertures, elliptical apertures, or PSF profile models.

---

## Pipeline Class Architecture

The reduction architecture is built around modular classes:
1. `CalibratedFrame`: encapsulates a single calibrated scientific exposure, variance array, and FITS header metadata.
2. `StarCentroid`: encapsulates cutout generation, marginal fitting, 2D Gaussian fitting, and drift coordinates.
3. `AperturePhotometry`: calculates local background, net flux, propagated error, and diagnostic plots.

---

## Implementation of the AperturePhotometry Class

```python
import numpy as np
from astropy.stats import sigma_clipped_stats

class AperturePhotometry:
    """
    Performs background estimation, circular aperture photometry,
    and error propagation on calibrated astronomical images.
    """
    def __init__(self, data, error, xc, yc, r_ap, r_in, r_out):
        self.data = np.asarray(data)
        self.error = np.asarray(error)
        self.xc = float(xc)
        self.yc = float(yc)
        self.r_ap = float(r_ap)
        self.r_in = float(r_in)
        self.r_out = float(r_out)

        # Generate radial distance grid
        y_grid, x_grid = np.indices(self.data.shape)
        self.dist = np.sqrt((x_grid - self.xc)**2 + (y_grid - self.yc)**2)

        self.ap_mask = self.dist <= self.r_ap
        self.sky_mask = (self.dist >= self.r_in) & (self.dist <= self.r_out)

        self.sky_val = None
        self.sky_err = None
        self.flux = None
        self.flux_err = None

    def compute_sky(self, sigma=3.0, maxiters=5):
        sky_pixels = self.data[self.sky_mask]
        mean, median, std = sigma_clipped_stats(sky_pixels, sigma=sigma, maxiters=maxiters)
        self.sky_val = median
        self.sky_err = std
        return self.sky_val, self.sky_err

    def compute_photometry(self):
        if self.sky_val is None:
            self.compute_sky()

        n_ap = np.sum(self.ap_mask)
        n_sky = np.sum(self.sky_mask)

        # Net flux calculation
        raw_flux = np.sum(self.data[self.ap_mask])
        self.flux = raw_flux - (n_ap * self.sky_val)

        # Propagated variance
        var_data = np.sum(self.error[self.ap_mask]**2)
        var_sky = (n_ap * self.sky_err**2) + ((n_ap**2 / n_sky) * self.sky_err**2)
        self.flux_err = np.sqrt(var_data + var_sky)

        return self.flux, self.flux_err
```

---

## Batch Execution and Data Persistence

The class is deployed across the complete time series of observations:
```python
import pickle

results = {
    'bjd_tdb': [],
    'target_flux': [],
    'target_err': [],
    'ref_fluxes': {i: [] for i in range(len(ref_coords))},
    'ref_errors': {i: [] for i in range(len(ref_coords))}
}

for frame_path in science_files:
    data, err, bjd = load_calibrated_frame(frame_path)
    results['bjd_tdb'].append(bjd)

    # Photometry for target
    xc_t, yc_t = track_centroid(data, target_guess)
    phot_t = AperturePhotometry(data, err, xc_t, yc_t, r_ap, r_in, r_out)
    f_t, e_t = phot_t.compute_photometry()
    results['target_flux'].append(f_t)
    results['target_err'].append(e_t)

# Save structured results to disk
with open('photometry_results.pkl', 'wb') as f:
    pickle.dump(results, f)
```

---

## Related Notes
- [Python Class Architecture for Astronomical Pipelines](../../../03_Zettel/Computational/Python%20Class%20Architecture%20for%20Astronomical%20Pipelines.html)
- [Malavolta 05 - Local Background Subtraction and Aperture Photometry](./Malavolta%2005%20-%20Local%20Background%20Subtraction%20and%20Aperture%20Photometry.html)
- [Malavolta 07 - Differential Photometry and Atmospheric Detrending](./Malavolta%2007%20-%20Differential%20Photometry%20and%20Atmospheric%20Detrending.html)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (2)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../../03_Zettel/Computational/Python%20Class%20Architecture%20for%20Astronomical%20Pipelines.html" class="backlink-item">Python Class Architecture for Astronomical Pipelines</a></li>
    <li class="backlink-item-wrap"><a href="../../../04_Atlas/Astrophysics_Laboratory_2_MOC.html" class="backlink-item">Astrophysics_Laboratory_2_MOC</a></li>
  </ul>
</div>

