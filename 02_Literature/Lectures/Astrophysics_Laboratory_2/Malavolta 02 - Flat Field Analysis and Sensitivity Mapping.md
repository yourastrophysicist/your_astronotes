---
layout: "default"
title: "Malavolta 02 - Flat Field Analysis and Sensitivity Mapping"
---
# Malavolta 02 — Flat Field Analysis and Sensitivity Mapping

*Astrophysics Laboratory 2, Prof. Luca Malavolta*  
*Index: [Astrophysics_Laboratory_2_MOC](../../../04_Atlas/Astrophysics_Laboratory_2_MOC.html)*

---

## Physical Origin of Flat Field Inhomogeneities

In an ideal optical system, a uniformly illuminated entrance pupil produces identical photo-charge in every pixel. In actual telescopes, raw images exhibit significant spatial modulation due to three distinct physical phenomena:
1. **Pixel-to-Pixel Quantum Efficiency Variations (PRNU)**: microscopic variations in pixel area, dopant concentration, and surface reflectance (1?3% rms).
2. **Optical Vignetting**: geometric light loss toward the edges of the focal plane caused by finite mirror and baffle apertures, typically scaling as $\cos^4 \theta$.
3. **Dust Donuts**: circular diffraction shadows cast on the detector by out-of-focus dust specks on optical filters, dewar windows, and focal reducers.

---

## Flat Field Acquisition Techniques

Astronomers obtain flat field calibrations through three primary techniques:

| Method | Illumination Source | Advantages | Limitations |
| :--- | :--- | :--- | :--- |
| **Dome Flats** | White screen inside telescope dome illuminated by halogen lamps | Controlled, repeatable, high signal-to-noise | Spectral mismatch with night sky, non-parallel illumination |
| **Twilight Sky Flats** | Clear twilight sky during dawn or dusk | Realistic solar-like spectrum, true optical path | Rapidly changing sky brightness, limited time window |
| **Night Sky Flats** | Median stack of dithered science frames | Exact night sky spectrum and pupil illumination | Requires large number of sparse science exposures |

---

## Master Flat Construction Algorithm

Raw flat field frames contain the additive bias offset, which must be subtracted prior to stacking.

### 1. Bias Subtraction of Individual Flats
For each raw flat frame $F_{i, \text{raw}}$:
$$F_i(x, y) = F_{i, \text{raw}}(x, y) - \text{MasterBias}(x, y)$$

### 2. Median Stacking
To eliminate cosmic rays and transient electronic glitches across $N$ flat frames:
$$F_{\text{stack}}(x, y) = \text{median}\left( \{ F_i(x, y) \}_{i=1}^N \right)$$

### 3. Normalization
The master flat must have a global median of unity so that dividing a science image by the flat preserves its original photometric flux scale:
$$\text{MasterFlat}_{\text{norm}}(x, y) = \frac{F_{\text{stack}}(x, y)}{\text{median}(F_{\text{stack}})}$$

Python implementation:
```python
import numpy as np

# Subtract master bias from raw flat frames
bias_subtracted_flats = np.array([f - master_bias for f in raw_flats])

# Median combination across the frame axis
master_flat = np.median(bias_subtracted_flats, axis=0)

# Normalization by the global median
master_flat_norm = master_flat / np.median(master_flat)
```

---

## Shutter Shading Effect and Non-Linearity

### The Shutter Shading Effect
Mechanical iris and leaf shutters require finite time (typically 10?50 ms) to open and close. For short exposure times ($t_{\text{exp}} < 2?3\text{ s}$), the central region of the CCD is exposed longer than the corners:
$$t_{\text{eff}}(x, y) = t_{\text{nominal}} + \Delta t_{\text{shutter}}(x, y)$$
- **Rule**: flat field exposures must have sufficiently long durations ($t_{\text{exp}} \ge 5?10\text{ s}$) so that shutter travel time accounts for less than $0.1\%$ of the exposure.

### Linearity Limits
Flat fields must be exposed within the strict linear regime of the detector:
- Too low ($< 5,000\text{ ADU}$): contaminated by bias residual errors.
- Too high ($> 40,000?50,000\text{ ADU}$): enters the non-linear full-well saturation regime where charges bleed and electrons recombine.
- Optimal target range: $\sim 20,000 - 30,000\text{ ADU}$ (roughly half full-well capacity).

---

## Spatial Diagnostics of the Normalized Flat

1. **Radial Vignetting Profile**: plotting pixel value as a function of radial distance from the optical center $r = \sqrt{(x - x_0)^2 + (y - y_0)^2}$.
2. **Dust Donut Identification**: annular features with central bright spots caused by Fresnel diffraction around dust grains. The radius of the shadow relates to the distance $z$ of the optical surface from the detector:
$$r_{\text{donut}} \approx \frac{z}{2 \cdot f/\#}$$
3. **Master Flat Uncertainty**:
$$\sigma_{\text{MasterFlat}_{\text{norm}}}(x, y) \approx \frac{1.253}{\sqrt{N}} \frac{\sigma(F_{\text{stack}}(x,y))}{\text{median}(F_{\text{stack}})}$$

---

## Related Notes
- [Flat Field Frame and Pixel Response Non-Uniformity](../../../03_Zettel/Observations/Flat%20Field%20Frame%20and%20Pixel%20Response%20Non-Uniformity.html)
- [Full Well Capacity and Charge Saturation](../../../03_Zettel/Observations/Full%20Well%20Capacity%20and%20Charge%20Saturation.html)
- [Malavolta 03 - Science Frame Correction and Error Propagation](./Malavolta%2003%20-%20Science%20Frame%20Correction%20and%20Error%20Propagation.html)
- [Laboratory Exercise - Flat Field Processing and PRNU Mapping](../../../03_Zettel/Activities/Laboratory%20Exercise%20-%20Flat%20Field%20Processing%20and%20PRNU%20Mapping.html)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (3)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../../03_Zettel/Activities/Laboratory%20Exercise%20-%20Flat%20Field%20Processing%20and%20PRNU%20Mapping.html" class="backlink-item">Laboratory Exercise - Flat Field Processing and PRNU Mapping</a></li>
    <li class="backlink-item-wrap"><a href="../../../03_Zettel/Observations/Flat%20Field%20Frame%20and%20Pixel%20Response%20Non-Uniformity.html" class="backlink-item">Flat Field Frame and Pixel Response Non-Uniformity</a></li>
    <li class="backlink-item-wrap"><a href="../../../04_Atlas/Astrophysics_Laboratory_2_MOC.html" class="backlink-item">Astrophysics_Laboratory_2_MOC</a></li>
  </ul>
</div>

