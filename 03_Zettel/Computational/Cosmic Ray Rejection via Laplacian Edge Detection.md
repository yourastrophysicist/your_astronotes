---
layout: "default"
title: "Cosmic Ray Rejection via Laplacian Edge Detection"
---
# Cosmic Ray Rejection via Laplacian Edge Detection

Cosmic rays are energetic muons and protons passing through astronomical CCDs, creating ionization clusters that ruin photometric measurements.

## Distinction between Stars and Cosmic Rays
- **Stars (Point Sources)**: light is convolved with the telescope Point Spread Function (PSF) and atmospheric seeing, producing smooth intensity gradients bounded by the PSF width $\sigma_{\text{PSF}}$.
- **Cosmic Rays**: direct particle ionization in the silicon lattice; completely unconvolved with the optical system, exhibiting extremely sharp, discontinuous edges.

## The Laplacian Operator
The discrete Laplacian operator approximates the second spatial derivative:
$$\nabla^2 I(x, y) = 4 I(x, y) - [I(x+1, y) + I(x-1, y) + I(x, y+1) + I(x, y-1)]$$

In the L.A. Cosmic algorithm (van Dokkum 2001; implemented in Astro-SCRAPPY):
1. Subsample image by a factor of 2.
2. Convolve with Laplacian edge kernel.
3. Compute the Laplacian-to-noise ratio:
$$\mathcal{S}(x, y) = \frac{\nabla^2 I(x, y)}{\sigma_{\text{noise}}(x, y)}$$
4. Form the fine-structure ratio $F(x, y) = \mathcal{S} / I_{\text{smooth}}$ to distinguish genuine cosmic rays from the sharp centers of saturated stars.
5. Flagged pixels are replaced by the median of surrounding clean neighbors.

## Related Notes
- [[Malavolta 03 - Science Frame Correction and Error Propagation]]
- [[Science Frame Calibration and Variance Propagation]]



## Linked References

- [[Laboratory Exercise - Science Frame Reduction and Error Tracking]]
- [[Astrophysics_Laboratory_2_MOC]]


