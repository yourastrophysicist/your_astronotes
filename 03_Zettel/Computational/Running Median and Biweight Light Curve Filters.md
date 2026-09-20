---
layout: "default"
title: "Running Median and Biweight Light Curve Filters"
---
# Running Median and Biweight Light Curve Filters

Detrending algorithms flatten out-of-transit stellar variability and residual instrumental trends.

## 1. Time-Window Running Median
For a sliding window of physical time duration $\Delta T$:
$$y_{\text{smooth}}(t_i) = \text{median}\left( \{ y_k \mid \lvert t_k - t_i\rvert \le \frac{\Delta T}{2} \} \right)$$
- Breakdown point: $50\%$ (can tolerate up to half corrupted data points without failing).
- Essential: all in-transit points must be masked before computing medians to avoid attenuating transit depth.

## 2. Tukey Biweight Location Estimator
Provides a smoother, more efficient robust estimate than the median by weighting data points according to their distance from the center:
$$u_i = \frac{y_i - M}{c \cdot \text{MAD}}$$
Weights:
$$w(u_i) = (1 - u_i^2)^2 \quad \text{if } \lvert u_i\rvert \le 1, \quad w(u_i) = 0 \quad \text{if } \lvert u_i\rvert > 1$$
Biweight location:
$$Y_{\text{biweight}} = M + \frac{\sum (y_i - M) (1 - u_i^2)^2}{\sum (1 - u_i^2)^2}$$
Typically with tuning constant $c = 6.0$ or $c = 9.0$.

## Related Notes
- [[Malavolta 10 - Light Curve Filtering and Detrending Techniques]]
- [[Savitzky-Golay Filtering for Stellar Time Series]]



## Linked References

- [[Laboratory Exercise - TESS Target Pixel Extraction and Filtering]]
- [[Savitzky-Golay Filtering for Stellar Time Series]]
- [[Astrophysics_Laboratory_2_MOC]]


