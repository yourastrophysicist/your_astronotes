---
layout: "default"
title: "Malavolta 01 - Bias Analysis and Detector Calibration"
---
# Malavolta 01 — Bias Analysis and Detector Calibration

*Astrophysics Laboratory 2, Prof. Luca Malavolta*  
*Index: [Astrophysics_Laboratory_2_MOC](../../../04_Atlas/Astrophysics_Laboratory_2_MOC.html)*

---

## The Four Fundamental Noise Regimes

An astronomical CCD image is corrupted by four distinct physical noise sources:
1. **Readout Noise (RON)**: electronic noise from the on-chip output FET transistor and off-chip analog amplifiers. It is independent of exposure time and photon flux.
2. **Dark Current**: thermal charge generation in the silicon depletion layer. Dependent on exposure time and operating temperature.
3. **Photon Noise (Shot Noise)**: quantum arrival noise of photons, governed by Poisson statistics (variance equals the mean signal).
4. **Pixel Response Non-Uniformity (PRNU)**: spatial sensitivity variation across pixels, corrected via flat fielding.

---

## FITS File Architecture and Header Metadata

Astronomical data are stored in Flexible Image Transport System (FITS) files:
- **Primary HDU (Header Data Unit)**:
	- Header: plain ASCII metadata formatted in 80-character cards: `KEYWORD = VALUE / COMMENT`.
	- Data: binary array of image pixels (usually 16-bit integer or 32-bit floating point).
- Key header keywords in calibration:
	- `EXPTIME`: exposure duration in seconds ($0.0\text{ s}$ for bias frames).
	- `IMAGETYP`: frame classification (`BIAS`, `FLAT`, `LIGHT` / `SCIENCE`).
	- `DATE-OBS`: observation timestamp in UTC.
	- `GAIN`: ADC conversion factor ($e^- / \text{ADU}$).
	- `RDNOISE`: nominal readout noise in electrons.
	- `AIRMASS`: optical airmass along the line of sight.

Python inspection via Astropy:
```python
from astropy.io import fits

with fits.open('bias_01.fits') as hdul:
    hdul.info()
    header = hdul[0].header
    data = hdul[0].data
    print("Exposure time:", header.get('EXPTIME'))
    print("Image dimensions:", data.shape)
```

---

## Bias Frame Physics

A bias frame is an image acquired with zero exposure time ($t_{\text{exp}} = 0\text{ s}$) and the telescope shutter closed.
- **Physical Purpose**: to measure the baseline electronic offset voltage applied by the ADC to prevent negative digital values from electronic noise fluctuations.
- A raw bias pixel value represents:
$$I_{\text{bias}}(x, y) = \text{Offset}_{\text{ADC}} + \text{FixedPattern}(x, y) + \epsilon_{\text{RON}}(x, y)$$

---

## Master Bias Construction

To eliminate random readout noise while preserving the true fixed-pattern electronic offset, multiple bias frames ($N \ge 20?30$) are combined.

### Median Stacking vs Mean Stacking
- The **sample mean** minimizes variance ($\,\sigma_{\text{mean}} = \sigma / \sqrt{N}$), but is catastrophic in the presence of cosmic ray hits or electronic spikes: a single outlier skews the mean permanently.
- The **sample median** is robust against outliers, with an asymptotic variance:
$$\sigma_{\text{median}} = \sqrt{\frac{\pi}{2}} \frac{\sigma}{\sqrt{N}} \approx 1.253 \frac{\sigma}{\sqrt{N}}$$
Although the median has a $\sim 25\%$ higher statistical error than the mean for pure Gaussian noise, its outlier rejection makes it the mandatory standard in astronomical pipelines.

```python
import numpy as np

# bias_cube has shape (N_frames, Y_dim, X_dim)
master_bias = np.median(bias_cube, axis=0)
```

---

## Empirical Measurement of Readout Noise and Gain

### Readout Noise from Difference Frames
The readout noise can be empirically measured by subtracting two consecutive, uncalibrated bias frames ($B_1, B_2$):
$$\Delta B(x, y) = B_1(x, y) - B_2(x, y)$$
Subtraction perfectly cancels the static fixed-pattern offset:
$$\text{Var}(\Delta B) = \text{Var}(B_1) + \text{Var}(B_2) = 2 \, \sigma_{\text{RON, ADU}}^2$$
$$\sigma_{\text{RON, ADU}} = \frac{\sigma(\Delta B)}{\sqrt{2}}$$
Converting to physical units of electrons ($e^-$):
$$\sigma_{\text{RON}} [e^-] = g \cdot \sigma_{\text{RON, ADU}}$$

### Janesick Photon Transfer Method for Gain
The gain $g$ ($e^-/\text{ADU}$) is determined using the Poisson nature of photons. For two flat field frames ($F_1, F_2$) at identical illumination level:
$$\bar{F} = \frac{\text{median}(F_1) + \text{median}(F_2)}{2} - \text{median}(\text{MasterBias})$$
$$\sigma_{\Delta F}^2 = \text{Var}(F_1 - F_2)$$
From variance propagation:
$$\sigma_{\Delta F}^2 = 2 \left( \frac{\bar{F} [e^-]}{g^2} + \sigma_{\text{RON, ADU}}^2 \right) = \frac{2 \bar{F} [\text{ADU}]}{g} + 2 \sigma_{\text{RON, ADU}}^2$$
$$g = \frac{2 \bar{F} [\text{ADU}]}{\sigma_{\Delta F}^2 - 2 \sigma_{\text{RON, ADU}}^2} \quad [e^- / \text{ADU}]$$

---

## Spatial Structure and Temporal Stability

1. **Spatial Gradients**: checking column and row profile projections:
```python
col_profile = np.median(master_bias, axis=0) # along X
row_profile = np.median(master_bias, axis=1) # along Y
```
Detects ADC baseline drift, reset ramps, and horizontal/vertical fixed pattern noise.
2. **Temporal Stability**: tracking the mean bias level across the observing run to detect ambient temperature fluctuations in the electronics.

---

## Related Notes
- [Bias Frame and Electronic Offset](../../../03_Zettel/Observations/Bias%20Frame%20and%20Electronic%20Offset.html)
- [CCD Readout Noise and Output Amplifier](../../../03_Zettel/Observations/CCD%20Readout%20Noise%20and%20Output%20Amplifier.html)
- [Janesick Photon Transfer Method for Gain and Readout Noise](../../../03_Zettel/Observations/Janesick%20Photon%20Transfer%20Method%20for%20Gain%20and%20Readout%20Noise.html)
- [Laboratory Exercise - Bias Frame Calibration and RON Measurement](../../../03_Zettel/Activities/Laboratory%20Exercise%20-%20Bias%20Frame%20Calibration%20and%20RON%20Measurement.html)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (4)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../../03_Zettel/Activities/Laboratory%20Exercise%20-%20Bias%20Frame%20Calibration%20and%20RON%20Measurement.html" class="backlink-item">Laboratory Exercise - Bias Frame Calibration and RON Measurement</a></li>
    <li class="backlink-item-wrap"><a href="../../../03_Zettel/Observations/Bias%20Frame%20and%20Electronic%20Offset.html" class="backlink-item">Bias Frame and Electronic Offset</a></li>
    <li class="backlink-item-wrap"><a href="../../../03_Zettel/Observations/Janesick%20Photon%20Transfer%20Method%20for%20Gain%20and%20Readout%20Noise.html" class="backlink-item">Janesick Photon Transfer Method for Gain and Readout Noise</a></li>
    <li class="backlink-item-wrap"><a href="../../../04_Atlas/Astrophysics_Laboratory_2_MOC.html" class="backlink-item">Astrophysics_Laboratory_2_MOC</a></li>
  </ul>
</div>

