---
layout: "default"
title: "Aperture Photometry and Optimal Aperture Selection"
---
# Aperture Photometry and Optimal Aperture Selection

Aperture photometry measures stellar flux by summing calibrated pixel values within a synthetic circular aperture centered on the star and subtracting the estimated local sky background contribution.

## Mathematical Formulation
$$F_\star = \sum_{i \in \text{aperture}} I(x_i, y_i) - N_{\text{ap}} \, I_{\text{sky}}$$
where:
- $I(x_i, y_i)$ is the calibrated intensity in pixel $i$.
- $N_{\text{ap}}$ is the total number of pixels enclosed within aperture radius $R_{\text{ap}}$.
- $I_{\text{sky}}$ is the local sky background level per pixel.

## Complete Variance Equation
$$\sigma_{F_\star}^2 = \sum_{i \in \text{ap}} \sigma_I^2(x_i, y_i) + N_{\text{ap}} \, \sigma_{\text{sky}}^2 + \frac{N_{\text{ap}}^2}{N_{\text{sky}}} \, \sigma_{\text{sky}}^2$$
- Term 1: intrinsic photon noise from star and sky plus readout noise inside the aperture.
- Term 2: spatial variance of the sky background across the aperture.
- Term 3: statistical uncertainty in the mean sky level estimated from $N_{\text{sky}}$ pixels.

## Optimal Aperture Radius Selection
1. **Too Small ($R_{\text{ap}} < 1.0 \times \text{FWHM}$)**:
	- Truncates stellar flux.
	- Highly sensitive to sub-pixel centroiding jitter, introducing artificial photometric scatter.
2. **Too Large ($R_{\text{ap}} > 3.5 \times \text{FWHM}$)**:
	- Captures $100\%$ of stellar flux, but includes excessive sky background and detector readout noise, degrading SNR.
3. **Optimal ($R_{\text{ap}} \approx 1.5 - 2.5 \times \text{FWHM}$)**:
	- Maximizes the ratio $F_\star / \sigma_{F_\star}$.
	- Balances profile flux capture with noise minimization.

## Related Notes
- [[Curve of Growth in Stellar Photometry]]
- [[Malavolta 05 - Local Background Subtraction and Aperture Photometry]]
- [[Differential Photometry and Comparison Star Selection]]



## Linked References

- [[Laboratory Exercise - Star Centroiding and Aperture Photometry Pipeline]]
- [[Star Centroiding via Marginal Profiles and 2D Gaussian Fitting]]
- [[Curve of Growth in Stellar Photometry]]
- [[Astrophysics_Laboratory_2_MOC]]


