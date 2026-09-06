---
layout: default
title: "Mosaicking"
---

# Mosaicking

combining multiple pointings into a single image larger than the primary beam of any single antenna. the technique that lets us map extended fields (galaxies, supernova remnants, ISM) with high-resolution interferometers whose primary beams are narrow.

## the issue

a single radio interferometer pointing has a **primary beam** = the antenna's beam pattern, $\theta \sim \lambda/D_{\rm ant}$. for VLA at 21 cm: 30'. for ALMA at 230 GHz: 25". these are *wide* compared to typical sources, but for *very wide* targets (large galaxies, nebulae, spectral surveys), one pointing isn't enough.

solution: cover the source with multiple pointings, then *combine* them into a single mosaic image.

## the procedure

![Mosaicking: combining multiple overlapping pointing centers to image astronomical structures larger than a single primary beam.](Mosaicking.jpg)


1. **plan**: divide the target into a grid of pointings, with overlap (typically half a primary beam between centers)
2. **observe**: cycle through the pointings, integrating each for an appropriate time
3. **calibrate**: each pointing is calibrated independently
4. **deconvolve**: each pointing is CLEANed
5. **mosaic**: combine the cleaned pointings, weighting by primary-beam response

the combined image has:
- the *resolution* of the individual pointings (~$\lambda/B_{\max}$)
- the *field of view* of the mosaic grid (~ several primary beams)
- sensitivity that varies with position (worst at the corners between pointings)

## the linear combination

at each pixel $\mathbf l$ in the mosaic image, the output is a weighted sum of contributions from all overlapping pointings:

$$I_{\rm mosaic}(\mathbf l) = \frac{\sum_p P_p(\mathbf l) I_p(\mathbf l)/\sigma_p^2}{\sum_p P_p^2(\mathbf l)/\sigma_p^2}$$

where $P_p(\mathbf l)$ is the primary-beam response at pointing $p$ for pixel $\mathbf l$, $I_p$ is the cleaned pointing image, and $\sigma_p$ is its noise.

the weighting accounts for:
- which pointings can "see" each pixel (within their primary beam)
- relative noise of each pointing
- primary-beam attenuation

## ALMA/VLA implementations

CASA mosaic reconstruction uses:
- `tclean(... mosaicpb='constant')`: simple weighting
- `tclean(... gridder='mosaic')`: full handling of multiple pointings, primary beam corrections, and homogeneous final image

## hexagonal vs rectangular tiling

two grid layouts:

### hexagonal

pointings arranged on a hexagonal lattice. each interior pointing has 6 neighbors. the most efficient tiling: minimum number of pointings to cover a given area.

### rectangular

pointings on a square lattice. simpler scheduling but ~15% more pointings needed for the same coverage.

most modern surveys use hexagonal patterns.

## the survey rate

a typical mosaic survey:
- field of view: 1° × 1° (~3600 arcmin²)
- ALMA Band 6 primary beam: 25" (~10 arcmin²/pointing)
- pointings needed: ~3600/10 ~ 360 pointings
- each pointing: 5-min integration
- total time: ~30 hours of integration + overhead

so deep mosaics are time-intensive. modern surveys (ALMA-DEEP, MeerKAT-MIGHTEE) accumulate hundreds to thousands of hours of total time.

## the JVLA and SKA pipelines

the VLA Sky Survey (VLASS, ongoing) is a 5-year survey of 80% of the sky:
- 2 pointings × 3 epochs at S-band (3 GHz)
- ~200000 individual pointings total
- automated pipelines handle calibration, imaging, mosaicking

SKA-Mid will routinely produce all-sky mosaics over a few months. the data volumes are enormous.

## the artifacts at boundaries

at the boundaries between pointings:
- sensitivity varies (worst at corners between hex pointings)
- residual primary-beam errors leak across boundaries
- low-frequency emission may be lost (zero-spacing problems aggregate)

modern pipelines handle this with sophisticated weighting and primary-beam correction.

## the alternative: single-feed scanning

instead of point-and-stare mosaicking, some instruments scan the sky continuously while observing:
- **single-dish drift scanning**: the dish stays fixed, sky rotates past
- **on-the-fly mapping**: dish moves at a constant rate, integrating across positions

these are usually total-power (single-dish) techniques. for interferometers, point-and-stare mosaicking is standard.

## the science applications

mosaicking enables:
- **galaxy-scale surveys**: complete coverage of nearby galaxies (M31, M33) at high resolution
- **molecular cloud surveys**: complete maps of star-forming complexes
- **supernova remnants**: imaging of large extended emission
- **ISM studies**: HI and CO mapping of large fields
- **cluster surveys**: complete mapping of galaxy clusters and intracluster medium

modern interferometric astronomy without mosaicking would be limited to compact, single-pointing sources.

## see also

- [CLEAN algorithm](../../02_Zettel/Theory/interf/CLEAN algorithm.html)
- [Calibration overview](../../02_Zettel/Theory/interf/Calibration overview.html)
- [Major radio interferometers](../../02_Zettel/Theory/interf/Major radio interferometers.html)
- [Astronomical_Interferometry_MOC](../../00_Atlas/Astronomical_Interferometry_MOC.html)
