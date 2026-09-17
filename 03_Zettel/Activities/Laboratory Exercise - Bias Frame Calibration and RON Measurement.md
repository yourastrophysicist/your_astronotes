---
layout: "default"
title: "Laboratory Exercise - Bias Frame Calibration and RON Measurement"
---
{% raw %}
# Laboratory Exercise ? Bias Frame Calibration and RON Measurement

Practical laboratory protocol for calibrating CCD bias frames, measuring electronic readout noise, and determining detector gain.

## Dataset
A series of $N=30$ unbinned zero-second calibration exposures (`AF435438.fits` through `AF435467.fits`) acquired with the telescope shutter closed.

## Protocol

### 1. Ingestion and Header Inspection
```python
from astropy.io import fits
import numpy as np
import glob

bias_files = sorted(glob.glob('AF4354*.fits'))
bias_cube = np.array([fits.getdata(f) for f in bias_files], dtype=float)
header = fits.getheader(bias_files[0])

print(f"Loaded {len(bias_files)} frames of shape {bias_cube[0].shape}")
print(f"Nominal Gain: {header.get('GAIN')} e-/ADU, RDNOISE: {header.get('RDNOISE')} e-")
```

### 2. Master Bias Stacking
```python
# Compute median across frames to reject cosmic rays and glitches
master_bias = np.median(bias_cube, axis=0)

# Evaluate spatial gradients along columns and rows
x_profile = np.median(master_bias, axis=0)
y_profile = np.median(master_bias, axis=1)
```

### 3. Readout Noise from Difference Frames
```python
# Subtract two consecutive bias frames to eliminate static fixed-pattern noise
diff_bias = bias_cube[1] - bias_cube[0]

# Standard deviation of difference frame
sigma_diff = np.std(diff_bias)
ron_adu = sigma_diff / np.sqrt(2.0)
print(f"Empirical Readout Noise: {ron_adu:.3f} ADU")
```

### 4. Gain Calculation via Janesick PTC
Using two flat field frames ($F_1, F_2$) at equal exposure levels:
```python
diff_flat = flat_1 - flat_2
mean_flat_level = 0.5 * (np.median(flat_1) + np.median(flat_2)) - np.median(master_bias)
var_diff_flat = np.var(diff_flat)

gain_empirical = (2.0 * mean_flat_level) / (var_diff_flat - 2.0 * (ron_adu**2))
ron_electrons = gain_empirical * ron_adu

print(f"Calculated Gain: {gain_empirical:.3f} e-/ADU")
print(f"Readout Noise in Physical Units: {ron_electrons:.3f} e- rms")
```

## Related Notes
- [Bias Frame and Electronic Offset](../Observations/Bias%20Frame%20and%20Electronic%20Offset.html)
- [Janesick Photon Transfer Method for Gain and Readout Noise](../Observations/Janesick%20Photon%20Transfer%20Method%20for%20Gain%20and%20Readout%20Noise.html)
- [Malavolta 01 - Bias Analysis and Detector Calibration](../../02_Literature/Lectures/Astrophysics_Laboratory_2/Malavolta%2001%20-%20Bias%20Analysis%20and%20Detector%20Calibration.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (3)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astrophysics_Laboratory_2_MOC.html" class="backlink-item">Astrophysics_Laboratory_2_MOC</a></li>
    <li class="backlink-item-wrap"><a href="../Observations/Bias%20Frame%20and%20Electronic%20Offset.html" class="backlink-item">Bias Frame and Electronic Offset</a></li>
    <li class="backlink-item-wrap"><a href="../../02_Literature/Lectures/Astrophysics_Laboratory_2/Malavolta%2001%20-%20Bias%20Analysis%20and%20Detector%20Calibration.html" class="backlink-item">Malavolta 01 - Bias Analysis and Detector Calibration</a></li>
  </ul>
</div>
