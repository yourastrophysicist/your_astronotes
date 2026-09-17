---
layout: "default"
title: "Malavolta 05 - Local Background Subtraction and Aperture Photometry"
---
{% raw %}
# Malavolta 05 ? Local Background Subtraction and Aperture Photometry

*Astrophysics Laboratory 2, Prof. Luca Malavolta*  
*Index: [Astrophysics_Laboratory_2_MOC](../../../04_Atlas/Astrophysics_Laboratory_2_MOC.html)*

---

## Geometry of Synthetic Apertures

Aperture photometry measures the integrated flux of a star by summing pixel intensities within a circular aperture centered on the fitted centroid $(x_c, y_c)$, and subtracting the contribution from the underlying sky background.

Three concentric circular regions are defined on the calibrated pixel grid:
1. **Photometric Aperture** ($r \le R_{\text{ap}}$): captures the stellar Point Spread Function (PSF).
2. **Buffer Zone** ($R_{\text{ap}} < r < R_{\text{in}}$): safety annulus preventing stellar PSF wings from leaking into the sky measurement.
3. **Sky Annulus** ($R_{\text{in}} \le r \le R_{\text{out}}$): measures the local sky background level and variance.

```python
import numpy as np

# Pixel distance grid from the fitted centroid (xc, yc)
y_indices, x_indices = np.indices(image.shape)
radial_distances = np.sqrt((x_indices - xc)**2 + (y_indices - yc)**2)

# Boolean masks
aperture_mask = radial_distances <= r_ap
sky_annulus_mask = (radial_distances >= r_in) & (radial_distances <= r_out)
```

---

## Robust Sky Background Estimation

The sky annulus contains zodiacal light, airglow, faint unresolved background stars, and cosmic ray remnants. To obtain an unbiased sky background level per pixel ($I_{\text{sky}}$), robust statistical estimators are used:

### 1. Sigma-Clipped Median
Iteratively removes pixels that deviate by more than $3\sigma$ from the median until convergence:
$$I_{\text{sky}} = \text{median}(\text{sky\_pixels}_{\text{clipped}})$$
$$\sigma_{\text{sky}} = 1.4826 \times \text{MAD}(\text{sky\_pixels}_{\text{clipped}})$$
where $\text{MAD} = \text{median}(|x - \text{median}(x)|)$ is the Median Absolute Deviation.

### 2. Mode Estimator
For moderately crowded fields where faint stars skew the sky distribution positively:
$$\text{Mode} \approx 3 \times \text{median} - 2 \times \text{mean}$$

---

## Net Aperture Flux and Error Propagation

The net integrated stellar flux in ADU is:
$$F_\star = \sum_{i \in \text{aperture}} I_{\text{corr}}(x_i, y_i) - N_{\text{ap}} \, I_{\text{sky}}$$
where $N_{\text{ap}}$ is the number of pixels within the aperture.

### Variance of the Net Flux
From multivariate error propagation:
$$\sigma_{F_\star}^2 = \sum_{i \in \text{aperture}} \sigma_{I_{\text{corr}}}^2(x_i, y_i) + N_{\text{ap}} \, \sigma_{\text{sky}}^2 + \frac{N_{\text{ap}}^2}{N_{\text{sky}}} \, \sigma_{\text{sky}}^2$$
- First term: photon noise from the star and sky inside the aperture, plus detector readout noise.
- Second term: spatial variance of the sky background across the aperture.
- Third term: statistical uncertainty in the estimated mean sky level determined from $N_{\text{sky}}$ pixels.

---

## Curve of Growth and Aperture Optimization

To determine the optimal aperture radius $R_{\text{ap}}$, a **Curve of Growth** is constructed by measuring net flux $F_\star(r)$ and $\text{SNR}(r)$ as a function of increasing aperture radius $r$:
1. At small radii ($r < 1.0 \times \text{FWHM}$): flux increases steeply; high signal-to-noise, but sensitive to small centroid tracking errors.
2. At optimal radius ($r \approx 1.5 - 2.5 \times \text{FWHM}$): $\text{SNR}$ reaches a maximum where the inclusion of marginal stellar flux equals the added sky noise.
3. At large radii ($r > 3.5 \times \text{FWHM}$): flux plateaus, but added sky background and readout noise degrade the total SNR.

---

## Related Notes
- [Aperture Photometry and Optimal Aperture Selection](../../../03_Zettel/Observations/Aperture%20Photometry%20and%20Optimal%20Aperture%20Selection.html)
- [Curve of Growth in Stellar Photometry](../../../03_Zettel/Observations/Curve%20of%20Growth%20in%20Stellar%20Photometry.html)
- [Malavolta 06 - Python Class Design for Photometry Pipelines](./Malavolta%2006%20-%20Python%20Class%20Design%20for%20Photometry%20Pipelines.html)
- [Laboratory Exercise - Star Centroiding and Aperture Photometry Pipeline](../../../03_Zettel/Activities/Laboratory%20Exercise%20-%20Star%20Centroiding%20and%20Aperture%20Photometry%20Pipeline.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (5)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../../03_Zettel/Observations/Aperture%20Photometry%20and%20Optimal%20Aperture%20Selection.html" class="backlink-item">Aperture Photometry and Optimal Aperture Selection</a></li>
    <li class="backlink-item-wrap"><a href="../../../04_Atlas/Astrophysics_Laboratory_2_MOC.html" class="backlink-item">Astrophysics_Laboratory_2_MOC</a></li>
    <li class="backlink-item-wrap"><a href="../../../03_Zettel/Observations/Curve%20of%20Growth%20in%20Stellar%20Photometry.html" class="backlink-item">Curve of Growth in Stellar Photometry</a></li>
    <li class="backlink-item-wrap"><a href="./Malavolta%2004%20-%20Stellar%20Centroiding%20and%20Coordinate%20Tracking.html" class="backlink-item">Malavolta 04 - Stellar Centroiding and Coordinate Tracking</a></li>
    <li class="backlink-item-wrap"><a href="./Malavolta%2006%20-%20Python%20Class%20Design%20for%20Photometry%20Pipelines.html" class="backlink-item">Malavolta 06 - Python Class Design for Photometry Pipelines</a></li>
  </ul>
</div>
