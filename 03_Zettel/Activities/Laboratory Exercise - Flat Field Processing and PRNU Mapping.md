---
layout: "default"
title: "Laboratory Exercise - Flat Field Processing and PRNU Mapping"
---
# Laboratory Exercise — Flat Field Processing and PRNU Mapping

Practical laboratory protocol for building master flat field frames, mapping pixel sensitivity variations, and evaluating optical vignetting.

## Protocol

### 1. Bias Subtraction of Raw Flat Frames
```python
import numpy as np

# Subtract master bias from each raw flat exposure
bias_subtracted_flats = np.array([f - master_bias for f in raw_flat_cube])
```

### 2. Master Flat Combination and Normalization
```python
# Median combination to eliminate cosmic rays
master_flat = np.median(bias_subtracted_flats, axis=0)

# Normalize by global median
global_median = np.median(master_flat)
master_flat_norm = master_flat / global_median

# Compute master flat error array
master_flat_err = (1.253 / np.sqrt(len(raw_flat_cube))) * (np.std(bias_subtracted_flats, axis=0) / global_median)
```

### 3. Radial Vignetting and Dust Donut Analysis
```python
# Optical center coordinates (x0, y0)
y_grid, x_grid = np.indices(master_flat_norm.shape)
x0, y0 = master_flat_norm.shape[1] // 2, master_flat_norm.shape[0] // 2
r_grid = np.sqrt((x_grid - x0)**2 + (y_grid - y0)**2)

# Radial profile
r_bins = np.linspace(0, np.max(r_grid), 100)
radial_profile = [np.median(master_flat_norm[(r_grid >= r_bins[i]) & (r_grid < r_bins[i+1])])
                  for i in range(len(r_bins)-1)]
```

### 4. Pixel Response Non-Uniformity (PRNU)
```python
# PRNU rms scatter in the central unvignetted region
central_box = master_flat_norm[y0-200:y0+200, x0-200:x0+200]
prnu_percent = np.std(central_box) * 100.0
print(f"Central PRNU: {prnu_percent:.2f}%")
```

## Related Notes
- [Flat Field Frame and Pixel Response Non-Uniformity](../Observations/Flat%20Field%20Frame%20and%20Pixel%20Response%20Non-Uniformity.html)
- [Malavolta 02 - Flat Field Analysis and Sensitivity Mapping](../../02_Literature/Lectures/Astrophysics_Laboratory_2/Malavolta%2002%20-%20Flat%20Field%20Analysis%20and%20Sensitivity%20Mapping.html)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (2)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../Observations/Flat%20Field%20Frame%20and%20Pixel%20Response%20Non-Uniformity.html" class="backlink-item">Flat Field Frame and Pixel Response Non-Uniformity</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astrophysics_Laboratory_2_MOC.html" class="backlink-item">Astrophysics_Laboratory_2_MOC</a></li>
  </ul>
</div>

