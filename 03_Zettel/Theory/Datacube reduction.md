---
layout: "default"
title: "Datacube reduction"
---
{% raw %}
# datacube reduction

up: [Astrophysics_of_Galaxies_MOC](../../04_Atlas/Astrophysics_of_Galaxies_MOC.html) · [MUSE datacubes](./MUSE%20datacubes.html)

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

- hardware: [MUSE datacubes](./MUSE%20datacubes.html)
- analysis: [Datacube redshift measurement](./Datacube%20redshift%20measurement.html), [Ionized gas kinematics](./Ionized%20gas%20kinematics.html)
- calibration context: [CCD calibration steps](./CCD%20calibration%20steps.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (4)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astrophysics_of_Galaxies_MOC.html" class="backlink-item">Astrophysics_of_Galaxies_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Datacube%20redshift%20measurement.html" class="backlink-item">Datacube redshift measurement</a></li>
    <li class="backlink-item-wrap"><a href="./MUSE%20datacubes.html" class="backlink-item">MUSE datacubes</a></li>
    <li class="backlink-item-wrap"><a href="./Space%20and%20ground%20facilities%20relevant%20for%20OC.html" class="backlink-item">Space and ground facilities relevant for OC</a></li>
  </ul>
</div>
