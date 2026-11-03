---
layout: "default"
title: "Datacube reduction"
---
# datacube reduction

up: [[Astrophysics_of_Galaxies_MOC]] · [[MUSE datacubes]]

## the 3d data structure

Integral Field Units (IFUs) record a three-dimensional dataset $I(x, y, \lambda)$, where $(x, y)$ are spatial coordinates (spaxels, spatial pixels) and $\lambda$ is the spectral coordinate.

## standard reduction pipeline steps

1. **bias and dark subtraction**: removing detector thermal noise and voltage baseline.
2. **flat-fielding**: two separate calibrations:
   - *pixel-to-pixel flat*: accounts for quantum efficiency variations across the detector.
   - *fiber / slice flat*: corrects for throughput variations across individual image slicers or lenslets.
3. **wavelength calibration**: arc lamps (ThAr, Ne, He) map detector pixels to absolute vacuum wavelengths $\lambda$, establishing the dispersion solution.
4. **differential atmospheric refraction (DAR) correction**: atmospheric dispersion shifts the centroid of a source as a function of $\lambda$:
   $$\Delta r(\lambda) \propto \tan z \left[ n(\lambda) - n(\lambda_0) \right]$$
   DAR correction aligns the spatial centroids across all wavelength slices.
5. **sky background subtraction**: subtraction of telluric absorption and bright night-sky emission lines (especially OH airglow lines in the red/NIR), using dedicated offset sky exposures or PCA sky modeling (e.g., ZAP code).
6. **flux calibration**: observation of spectrophotometric standard stars converts counts into physical flux units ($\text{erg s}^{-1} \text{cm}^{-2} \text{\AA}^{-1}$).
7. **datacube reconstruction**: resampling the calibrated slices onto a regular rectangular 3D grid.
8. **spatial binning**: Voronoi binning (Cappellari & Copin 2003) to reach a uniform target SNR per bin before extracting kinematic moments.

## connections

- hardware: [[MUSE datacubes]]
- analysis: [[Datacube redshift measurement]], [[Ionized gas kinematics]]
- calibration context: [[CCD calibration steps]]



<!-- sources:wiki-arxiv -->
## Wikipedia and arXiv sources

![Integral field spectrograph|500](https://commons.wikimedia.org/wiki/Special:FilePath/Principle_of_Integral_Field_Spectroscopy.jpg?width=600)
*The principle of Integral Field Spectroscopy (IFS)* ([Commons file page](https://commons.wikimedia.org/wiki/File:Principle_of_Integral_Field_Spectroscopy.jpg), eso.org, CC BY 4.0, as used on the Wikipedia article [Integral field spectrograph](https://en.wikipedia.org/wiki/Integral_field_spectrograph))

- **Integral field spectrograph**. "Integral field spectrographs (IFS) combine spectrographic and imaging capabilities in the optical or infrared wavelength domains (0.32 μm – 24 μm) to get from a single exposure spatially resolved spectra in a bi-dimensional region. The name originates from the fact that the measurements result from integrating the light on multiple sub-regions of the field." ([Wikipedia](https://en.wikipedia.org/wiki/Integral_field_spectrograph))
- **Structure and Kinematics of Early-Type Galaxies from Integral-Field Spectroscopy**. "Observations of galaxy isophotes, longs-slit kinematics and high-resolution photometry suggested a possible dichotomy between two distinct classes of E galaxies. But these methods are expensive for large galaxy samples. Instead, integral-field spectroscopic can efficiently recognize the shape, dynamics and stellar population of complete samples of early-type galaxies (ETGs)." ([arXiv:1602.04267](https://arxiv.org/abs/1602.04267))

> Definitions quoted from Wikipedia (CC BY-SA 4.0) and the arXiv abstract. Figures credited in their captions.
<!-- /sources:wiki-arxiv -->

## Linked References

- [[Datacube redshift measurement]]
- [[MUSE datacubes]]
- [[Space and ground facilities relevant for OC]]
- [[Astrophysics_of_Galaxies_MOC]]


