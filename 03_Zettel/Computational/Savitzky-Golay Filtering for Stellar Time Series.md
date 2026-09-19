---
layout: "default"
title: "Savitzky-Golay Filtering for Stellar Time Series"
---
# Savitzky-Golay Filtering for Stellar Time Series

The Savitzky-Golay filter smooths time-series data by fitting a local low-degree polynomial via linear least squares across a moving window.

## Mathematical Formulation
For window size $2m + 1$ centered on index $i$, a polynomial of degree $d$ is fitted:
$$p_i(t) = \sum_{k=0}^d a_k (t - t_i)^k$$
The smoothed value is simply the polynomial evaluated at the center:
$$y_{\text{SG}}(t_i) = p_i(t_i) = a_0$$

Because the least-squares normal equations are linear, the fitted value $a_0$ is expressed as a discrete linear convolution with fixed filter coefficients $C_j$:
$$y_{\text{SG}}(t_i) = \sum_{j=-m}^m C_j \, y_{i+j}$$

## Performance Characteristics
- **Advantages**: preserves sharp peak heights, widths, and asymmetric slopes significantly better than moving average filters.
- **Vulnerabilities**: sensitive to non-Gaussian outliers (cosmic rays, flares); exhibits edge oscillations (Runge phenomenon) near data gaps; must be computed with transits masked.

```python
from scipy.signal import savgol_filter

# Window length must be odd; polynomial order typically 2 or 3
smooth_flux = savgol_filter(out_of_transit_flux, window_length=101, polyorder=2)
```

## Related Notes
- [Malavolta 10 - Light Curve Filtering and Detrending Techniques](../../02_Literature/Lectures/Astrophysics_Laboratory_2/Malavolta%2010%20-%20Light%20Curve%20Filtering%20and%20Detrending%20Techniques.html)
- [Running Median and Biweight Light Curve Filters](Running%20Median%20and%20Biweight%20Light%20Curve%20Filters.html)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (2)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="Running%20Median%20and%20Biweight%20Light%20Curve%20Filters.html" class="backlink-item">Running Median and Biweight Light Curve Filters</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astrophysics_Laboratory_2_MOC.html" class="backlink-item">Astrophysics_Laboratory_2_MOC</a></li>
  </ul>
</div>

