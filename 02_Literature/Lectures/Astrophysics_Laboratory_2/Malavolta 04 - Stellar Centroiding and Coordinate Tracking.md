---
layout: "default"
title: "Malavolta 04 - Stellar Centroiding and Coordinate Tracking"
---
{% raw %}
# Malavolta 04 ? Stellar Centroiding and Coordinate Tracking

*Astrophysics Laboratory 2, Prof. Luca Malavolta*  
*Index: [Astrophysics_Laboratory_2_MOC](../../../04_Atlas/Astrophysics_Laboratory_2_MOC.html)*

---

## Target and Reference Star Identification

Before measuring stellar flux, the target star and candidate reference stars must be identified on calibrated scientific frames:
1. Query astronomical databases (SIMBAD, VizieR, Aladin) using catalog coordinates (RA, Dec).
2. Establish the field of view orientation (North-Up, East-Left) and plate scale (arcsec/pixel).
3. Select comparison stars that:
	- Lie in the unvignetted central field of the detector.
	- Have brightness comparable to the target star ($0.5 < F_{\text{ref}} / F_{\text{target}} < 2.0$) to avoid non-linearity while maintaining high SNR.
	- Are isolated from close companions (no crowding within the photometric aperture).
	- Are non-variable (checked via photometric catalogs).

---

## Centroid Algorithms

Because stars move across the detector during an observing sequence due to imperfect telescope tracking, flexure, and atmospheric refraction, stellar positions $(x_c, y_c)$ must be measured dynamically on every frame to sub-pixel accuracy.

### 1. Center of Mass (First Moment)
Calculated within a square bounding box of size $2R + 1$ centered on an initial pixel guess:
$$x_c = \frac{\sum_{i, j} x_i \, [I(x_i, y_j) - B]}{\sum_{i, j} [I(x_i, y_j) - B]}, \quad y_c = \frac{\sum_{i, j} y_j \, [I(x_i, y_j) - B]}{\sum_{i, j} [I(x_i, y_j) - B]}$$
- Simple and non-iterative.
- Highly sensitive to background noise and nearby faint companion stars.

### 2. Marginal 1D Gaussian Fitting
Sums pixel values along rows and columns to collapse the 2D cutout into two independent 1D marginal distributions:
$$M_x(x) = \sum_y [I(x, y) - B], \quad M_y(y) = \sum_x [I(x, y) - B]$$
Each marginal profile is fitted with a 1D Gaussian model:
$$M(u) = A \exp\left( -\frac{(u - u_c)^2}{2\sigma_u^2} \right) + C$$
- Fast, robust against isolated bad pixels.
- Assumes the Point Spread Function is separable along Cartesian axes.

### 3. Non-Linear 2D Gaussian Profile Fitting
Fits an analytical circular or elliptical 2D Gaussian profile via Levenberg-Marquardt least-squares optimization:
$$I(x, y) = B + A \exp\left( - \left[ \frac{(x - x_c)^2}{2\sigma_x^2} + \frac{(y - y_c)^2}{2\sigma_y^2} \right] \right)$$
Parameters determined:
- Centroid coordinates: $(x_c, y_c)$ to an accuracy of $\,\sim 0.01?0.05$ pixels.
- Full Width at Half Maximum: $\text{FWHM} = 2\sqrt{2 \ln 2} \, \sigma \approx 2.355 \, \sigma$.
- Amplitude $A$ and local background $B$.

Python implementation:
```python
import numpy as np
from scipy.optimize import curve_fit

def gaussian_2d(xy, A, xc, yc, sigma_x, sigma_y, B):
    x, y = xy
    return (B + A * np.exp(-0.5 * (((x - xc)/sigma_x)**2 + ((y - yc)/sigma_y)**2))).ravel()

def fit_centroid(cutout, x_grid, y_grid, initial_guess):
    # initial_guess = [Amplitude, xc, yc, sigma_x, sigma_y, Background]
    popt, _ = curve_fit(gaussian_2d, (x_grid, y_grid), cutout.ravel(), p0=initial_guess)
    return popt[1], popt[2], popt[3], popt[4] # xc, yc, sigma_x, sigma_y
```

---

## Coordinate Tracking Across Observing Sequences

Tracking stellar centroids across hundreds of sequential frames reveals telescope guiding performance:
- Systematic tracking drift: steady linear motion from polar misalignment.
- Periodic tracking errors: periodic oscillations caused by worm gear imperfections in telescope drives.
- Sudden jumps: wind gusts or telescope guiding adjustments.

Tracking trajectories $(x_c(t), y_c(t))$ are preserved to evaluate whether photometric variations correlate with sub-pixel position (pixel flat-field residuals).

---

## Related Notes
- [Star Centroiding via Marginal Profiles and 2D Gaussian Fitting](../../../03_Zettel/Computational/Star%20Centroiding%20via%20Marginal%20Profiles%20and%202D%20Gaussian%20Fitting.html)
- [Malavolta 05 - Local Background Subtraction and Aperture Photometry](./Malavolta%2005%20-%20Local%20Background%20Subtraction%20and%20Aperture%20Photometry.html)
- [Laboratory Exercise - Star Centroiding and Aperture Photometry Pipeline](../../../03_Zettel/Activities/Laboratory%20Exercise%20-%20Star%20Centroiding%20and%20Aperture%20Photometry%20Pipeline.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (2)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../../04_Atlas/Astrophysics_Laboratory_2_MOC.html" class="backlink-item">Astrophysics_Laboratory_2_MOC</a></li>
    <li class="backlink-item-wrap"><a href="../../../03_Zettel/Computational/Star%20Centroiding%20via%20Marginal%20Profiles%20and%202D%20Gaussian%20Fitting.html" class="backlink-item">Star Centroiding via Marginal Profiles and 2D Gaussian Fitting</a></li>
  </ul>
</div>
