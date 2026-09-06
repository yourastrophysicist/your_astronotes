---
layout: default
title: "Datacube reduction"
---

# datacube reduction

up: [Astrophysics_of_Galaxies_MOC](../../00_Atlas/Astrophysics_of_Galaxies_MOC.html) · [MUSE datacubes](../../02_Zettel/Theory/MUSE datacubes.html)

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

- hardware: [MUSE datacubes](../../02_Zettel/Theory/MUSE datacubes.html)
- analysis: [Datacube redshift measurement](../../02_Zettel/Theory/Datacube redshift measurement.html), [Ionized gas kinematics](../../02_Zettel/Theory/Ionized gas kinematics.html)
- calibration context: [CCD calibration steps](../../02_Zettel/Theory/CCD calibration steps.html)
