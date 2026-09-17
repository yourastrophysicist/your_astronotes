---
layout: "default"
title: "Laboratory Exercise - Ground-Based Differential Photometry with TASTE"
---
{% raw %}
# Laboratory Exercise ? Ground-Based Differential Photometry with TASTE

Protocol for constructing differential light curves from TASTE observations on the 1.82m Copernico telescope.

## Protocol

### 1. Ensemble Reference Star Construction
```python
import numpy as np

# comp_fluxes has shape (N_comp, N_frames)
# comp_errors has shape (N_comp, N_frames)

# Compute inverse variance weights for each comparison star
weights = 1.0 / np.nanmedian(comp_errors**2, axis=1)
weights /= np.sum(weights)

# Build artificial ensemble star
ensemble_flux = np.sum([weights[i] * comp_fluxes[i] for i in range(len(weights))], axis=0)
ensemble_err = np.sqrt(np.sum([weights[i]**2 * comp_errors[i]**2 for i in range(len(weights))], axis=0))
```

### 2. Differential Flux Ratio
```python
diff_flux = target_flux / ensemble_flux
diff_err = diff_flux * np.sqrt((target_err / target_flux)**2 + (ensemble_err / ensemble_flux)**2)
```

### 3. Airmass Detrending and Normalization
```python
# Fit out-of-transit data with second-order polynomial of time
out_mask = (bjd_time < t_ingress) | (bjd_time > t_egress)
poly_coeffs = np.polyfit(bjd_time[out_mask], diff_flux[out_mask], deg=2)
baseline_trend = np.polyval(poly_coeffs, bjd_time)

# Normalized light curve
norm_flux = diff_flux / baseline_trend
norm_err = diff_err / baseline_trend
```

### 4. Residual Scatter Verification
```python
residuals = norm_flux[out_mask] - 1.0
rms = np.std(residuals)
mad = np.median(np.abs(residuals - np.median(residuals)))
print(f"Out-of-transit RMS: {rms * 1e3:.2f} ppt, MAD: {mad * 1e3:.2f} ppt")
```

## Related Notes
- [Differential Photometry and Comparison Star Selection](../Observations/Differential%20Photometry%20and%20Comparison%20Star%20Selection.html)
- [Airmass and Atmospheric Extinction Correction](../Observations/Airmass%20and%20Atmospheric%20Extinction%20Correction.html)
- [Malavolta 07 - Differential Photometry and Atmospheric Detrending](../../02_Literature/Lectures/Astrophysics_Laboratory_2/Malavolta%2007%20-%20Differential%20Photometry%20and%20Atmospheric%20Detrending.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (3)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astrophysics_Laboratory_2_MOC.html" class="backlink-item">Astrophysics_Laboratory_2_MOC</a></li>
    <li class="backlink-item-wrap"><a href="../Observations/Differential%20Photometry%20and%20Comparison%20Star%20Selection.html" class="backlink-item">Differential Photometry and Comparison Star Selection</a></li>
    <li class="backlink-item-wrap"><a href="../../02_Literature/Lectures/Astrophysics_Laboratory_2/Malavolta%2007%20-%20Differential%20Photometry%20and%20Atmospheric%20Detrending.html" class="backlink-item">Malavolta 07 - Differential Photometry and Atmospheric Detrending</a></li>
  </ul>
</div>
