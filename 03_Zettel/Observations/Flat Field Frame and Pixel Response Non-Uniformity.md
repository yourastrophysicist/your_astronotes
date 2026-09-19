---
layout: "default"
title: "Flat Field Frame and Pixel Response Non-Uniformity"
---
# Flat Field Frame and Pixel Response Non-Uniformity

A flat field frame is a calibration image of an optically uniform light source used to measure and correct spatial variations in detector sensitivity and optical throughput.

## Sources of Spatial Non-Uniformity
1. **Pixel Response Non-Uniformity (PRNU)**:
	- Lithographic geometric variations: microscopic differences in individual pixel active area ($A_{\text{pix}} \pm \delta A$).
	- Doping and thickness gradients across the silicon substrate.
	- Produces high-spatial-frequency noise (typically 1?2% rms).
2. **Optical Vignetting**:
	- Geometric aperture blockage by telescope baffles, filter holders, and focal reducers.
	- Produces low-frequency radial intensity fall-off scaling approximately as $\cos^4 \theta$.
3. **Dust Donuts (Shadows)**:
	- Dust particles resting on optical surfaces near the focal plane (filters, dewar window).
	- Unfocused shadows produce circular rings with bright Poisson-diffraction centers.

## Normalization and Application
1. Individual flat frames are bias-subtracted and stacked via median:
$$F_{\text{stack}}(x, y) = \text{median}\left( \{ F_{i, \text{raw}}(x, y) - \text{MasterBias}(x, y) \}_{i=1}^N \right)$$
2. Normalization by the global median:
$$\text{MasterFlat}_{\text{norm}}(x, y) = \frac{F_{\text{stack}}(x, y)}{\text{median}(F_{\text{stack}})}$$
3. Application to science frames:
$$I_{\text{flat-corrected}}(x, y) = \frac{I_{\text{raw}}(x, y) - \text{MasterBias}(x, y)}{\text{MasterFlat}_{\text{norm}}(x, y)}$$

## Related Notes
- [Full Well Capacity and Charge Saturation](Full%20Well%20Capacity%20and%20Charge%20Saturation.html)
- [Malavolta 02 - Flat Field Analysis and Sensitivity Mapping](../../02_Literature/Lectures/Astrophysics_Laboratory_2/Malavolta%2002%20-%20Flat%20Field%20Analysis%20and%20Sensitivity%20Mapping.html)
- [Laboratory Exercise - Flat Field Processing and PRNU Mapping](../Activities/Laboratory%20Exercise%20-%20Flat%20Field%20Processing%20and%20PRNU%20Mapping.html)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (4)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../Activities/Laboratory%20Exercise%20-%20Flat%20Field%20Processing%20and%20PRNU%20Mapping.html" class="backlink-item">Laboratory Exercise - Flat Field Processing and PRNU Mapping</a></li>
    <li class="backlink-item-wrap"><a href="../Computational/Science%20Frame%20Calibration%20and%20Variance%20Propagation.html" class="backlink-item">Science Frame Calibration and Variance Propagation</a></li>
    <li class="backlink-item-wrap"><a href="Full%20Well%20Capacity%20and%20Charge%20Saturation.html" class="backlink-item">Full Well Capacity and Charge Saturation</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astrophysics_Laboratory_2_MOC.html" class="backlink-item">Astrophysics_Laboratory_2_MOC</a></li>
  </ul>
</div>

