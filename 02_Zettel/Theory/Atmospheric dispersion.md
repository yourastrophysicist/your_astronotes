---
layout: default
title: "Atmospheric dispersion"
---

the atmospheric refractive index $n(\lambda)$ depends on wavelength: blue light is bent slightly more than red light. the consequence at $z > 0$ is that a white-light star image is **stretched into a small spectrum** along the radial direction. for high-resolution imaging or slit spectroscopy at high airmass, this has to be corrected.

## the geometry

refraction angle (see [Atmospheric refraction](../../02_Zettel/Theory/interf/Atmospheric refraction.html)):
$$R(\lambda) \approx (n_0(\lambda) - 1)\tan z$$

since $n_0(\lambda) - 1$ varies with wavelength, $R(\lambda)$ does too. the differential between two wavelengths $\lambda_1$ and $\lambda_2$:
$$\Delta R = R(\lambda_1) - R(\lambda_2) = [n_0(\lambda_1) - n_0(\lambda_2)]\tan z$$

typical magnitude:
- $z = 30°$: $\Delta R(B \to R) \sim 1''$
- $z = 45°$: $\sim 1.5''$
- $z = 60°$: $\sim 3''$
- $z = 75°$: $\sim 5''$ (very bad)

## the practical impact

### imaging

a single-band image is unaffected (only one $\lambda$ to bend). but a wide-band image, especially in white light or with broad filters at high airmass, has chromatic PSF elongation.

at high airmass and broadband UBV photometry, the PSF becomes asymmetric, with the blue end of the PSF higher in altitude than the red. distorts photometric centroids and contaminates color measurements.

### slit spectroscopy

at fixed slit orientation, light at different wavelengths enters the slit through different paths through the atmosphere. if the slit is **not** aligned with the parallactic angle (the great circle from zenith to source), the blue and red ends of the spectrum vignette differently as they leak past the slit edges.

practical fix: **rotate the slit to the parallactic angle**. this makes dispersion direction parallel to the slit, so all wavelengths enter the slit cleanly. or use a wide slit and accept reduced spectral resolution.

### IFU spectroscopy

integral-field spectrographs (IFUs) are not vulnerable in the same way (no slit), but the chromatic PSF still complicates spaxel-level extraction.

## atmospheric dispersion correctors (ADCs)

for high-resolution imaging at $z > 30°$, an **ADC** is mandatory. it consists of a counter-rotating prism pair, each prism producing equal and opposite chromatic deviation. by adjusting their relative orientation, the net dispersion of the system equals $-\Delta R(\lambda)$ for the current zenith distance, cancelling the atmospheric dispersion at the focal plane.

modern AO instruments (NACO, SPHERE, KECK NIRC2) all include an ADC.

## sources of $n(\lambda)$

the refractive index of dry air at standard $T, P$:
$$n_0(\lambda) - 1 \approx 287.6 \times 10^{-6} \left[1 + 1.6 \times 10^{-2}/(\lambda^2/\mu m^2)\right]$$
weakly chromatic in the optical, more strongly so in the UV. water vapour adds a small correction.

## see also

- [Atmospheric refraction](../../02_Zettel/Theory/interf/Atmospheric refraction.html)
- [Earth atmosphere for observations](../../02_Zettel/Theory/Earth atmosphere for observations.html)
- [Adaptive optics overview](../../02_Zettel/Theory/interf/Adaptive optics overview.html)
- [Point Spread Function (PSF)](../../02_Zettel/Theory/Point Spread Function (PSF).md)
- [Filter systems and bandpasses](../../02_Zettel/Theory/Filter systems and bandpasses.html)
