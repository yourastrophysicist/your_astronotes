---
layout: "default"
title: "Star Centroiding via Marginal Profiles and 2D Gaussian Fitting"
---
{% raw %}
# Star Centroiding via Marginal Profiles and 2D Gaussian Fitting

Precise determination of stellar coordinates $(x_c, y_c)$ to sub-pixel accuracy is essential for aperture photometry and tracking telescope guiding errors.

## 1. Flux-Weighted Center of Mass
$$x_c = \frac{\sum_{i, j} x_i [I_{i, j} - B]}{\sum_{i, j} [I_{i, j} - B]}, \quad y_c = \frac{\sum_{i, j} y_j [I_{i, j} - B]}{\sum_{i, j} [I_{i, j} - B]}$$
Fast and non-iterative, but susceptible to noise and nearby companion stars.

## 2. Marginal 1D Gaussian Profiling
Collapses 2D cutout arrays along Cartesian axes:
$$M_x(x) = \sum_y [I(x, y) - B], \quad M_y(y) = \sum_x [I(x, y) - B]$$
Each 1D array is fitted with a Gaussian function:
$$f(u) = A \exp\left( -\frac{(u - u_c)^2}{2\sigma^2} \right) + C$$
Yields sub-pixel centroids while averaging out isolated bad pixels.

## 3. Non-Linear 2D Gaussian Fitting
Fits the complete 2D surface brightness profile using Levenberg-Marquardt least-squares:
$$I(x, y) = B + A \exp\left( -\frac{1}{2} \left[ \left( \frac{x - x_c}{\sigma_x} \right)^2 + \left( \frac{y - y_c}{\sigma_y} \right)^2 \right] \right)$$
Yields:
- Centroid coordinates: $(x_c, y_c)$ with typical precision $0.01 - 0.05\text{ pixels}$.
- Spatial seeing width: $\text{FWHM} \approx 2.355 \, \sigma$.
- Amplitude $A$ and local background $B$.

## Related Notes
- [Malavolta 04 - Stellar Centroiding and Coordinate Tracking](../../02_Literature/Lectures/Astrophysics_Laboratory_2/Malavolta%2004%20-%20Stellar%20Centroiding%20and%20Coordinate%20Tracking.html)
- [Aperture Photometry and Optimal Aperture Selection](../Observations/Aperture%20Photometry%20and%20Optimal%20Aperture%20Selection.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (3)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astrophysics_Laboratory_2_MOC.html" class="backlink-item">Astrophysics_Laboratory_2_MOC</a></li>
    <li class="backlink-item-wrap"><a href="../Activities/Laboratory%20Exercise%20-%20Star%20Centroiding%20and%20Aperture%20Photometry%20Pipeline.html" class="backlink-item">Laboratory Exercise - Star Centroiding and Aperture Photometry Pipeline</a></li>
    <li class="backlink-item-wrap"><a href="../../02_Literature/Lectures/Astrophysics_Laboratory_2/Malavolta%2004%20-%20Stellar%20Centroiding%20and%20Coordinate%20Tracking.html" class="backlink-item">Malavolta 04 - Stellar Centroiding and Coordinate Tracking</a></li>
  </ul>
</div>
