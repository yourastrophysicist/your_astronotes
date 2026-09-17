---
layout: "default"
title: "Laboratory Exercise - Star Centroiding and Aperture Photometry Pipeline"
---
{% raw %}
# Laboratory Exercise ? Star Centroiding and Aperture Photometry Pipeline

Protocol for locating stars, measuring centroids, and extracting aperture photometry across an observing time series.

## Protocol

### 1. Centroid Fitting on Sub-Pixel Cutouts
```python
import numpy as np
from scipy.optimize import curve_fit

def gaussian_2d(xy, A, xc, yc, sx, sy, B):
    x, y = xy
    return (B + A * np.exp(-0.5 * (((x - xc)/sx)**2 + ((y - yc)/sy)**2))).ravel()

def get_centroid(cutout, x_grid, y_grid, guess):
    popt, _ = curve_fit(gaussian_2d, (x_grid, y_grid), cutout.ravel(), p0=guess)
    return popt[1], popt[2], popt[3], popt[4] # xc, yc, sx, sy
```

### 2. Curve of Growth for Optimal Aperture Radius
```python
fwhm = 2.355 * np.mean([sx, sy])
radii_to_test = np.linspace(0.8 * fwhm, 4.0 * fwhm, 20)
snr_list = []

for r in radii_to_test:
    ap = AperturePhotometry(data, error, xc, yc, r_ap=r, r_in=3*fwhm, r_out=5*fwhm)
    f, e = ap.compute_photometry()
    snr_list.append(f / e)

best_r_ap = radii_to_test[np.argmax(snr_list)]
print(f"FWHM: {fwhm:.2f} pix, Optimal Aperture: {best_r_ap:.2f} pix")
```

### 3. Pipeline Extraction over Full Observing Series
```python
for f_path in calibrated_science_files:
    data, err, bjd = load_frame(f_path)

    # Track target
    xc_t, yc_t, sx, sy = get_centroid(cutout_target, x_grid, y_grid, guess_t)
    ap_t = AperturePhotometry(data, err, xc_t, yc_t, best_r_ap, r_in, r_out)
    flux_t, err_t = ap_t.compute_photometry()

    # Track comparison stars
    for k, guess_k in enumerate(comp_guesses):
        xc_k, yc_k, _, _ = get_centroid(cutout_k, x_grid, y_grid, guess_k)
        ap_k = AperturePhotometry(data, err, xc_k, yc_k, best_r_ap, r_in, r_out)
        flux_k, err_k = ap_k.compute_photometry()
```

## Related Notes
- [Star Centroiding via Marginal Profiles and 2D Gaussian Fitting](../Computational/Star%20Centroiding%20via%20Marginal%20Profiles%20and%202D%20Gaussian%20Fitting.html)
- [Aperture Photometry and Optimal Aperture Selection](../Observations/Aperture%20Photometry%20and%20Optimal%20Aperture%20Selection.html)
- [Curve of Growth in Stellar Photometry](../Observations/Curve%20of%20Growth%20in%20Stellar%20Photometry.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (3)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astrophysics_Laboratory_2_MOC.html" class="backlink-item">Astrophysics_Laboratory_2_MOC</a></li>
    <li class="backlink-item-wrap"><a href="../../02_Literature/Lectures/Astrophysics_Laboratory_2/Malavolta%2004%20-%20Stellar%20Centroiding%20and%20Coordinate%20Tracking.html" class="backlink-item">Malavolta 04 - Stellar Centroiding and Coordinate Tracking</a></li>
    <li class="backlink-item-wrap"><a href="../../02_Literature/Lectures/Astrophysics_Laboratory_2/Malavolta%2005%20-%20Local%20Background%20Subtraction%20and%20Aperture%20Photometry.html" class="backlink-item">Malavolta 05 - Local Background Subtraction and Aperture Photometry</a></li>
  </ul>
</div>
