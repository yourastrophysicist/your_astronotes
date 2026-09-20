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
- [[Full Well Capacity and Charge Saturation]]
- [[Malavolta 02 - Flat Field Analysis and Sensitivity Mapping]]
- [[Laboratory Exercise - Flat Field Processing and PRNU Mapping]]



## Linked References

- [[Laboratory Exercise - Flat Field Processing and PRNU Mapping]]
- [[Science Frame Calibration and Variance Propagation]]
- [[Full Well Capacity and Charge Saturation]]
- [[Astrophysics_Laboratory_2_MOC]]


