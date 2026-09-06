---
layout: default
title: "Python and IRAF tools for photometry"
---

a quick reference to the practical tools used to go from a calibrated FITS image to a photometric catalogue. modern astronomy is mostly Python; legacy IRAF still appears in older pipelines.

## the Python ecosystem

### astropy

the foundation. provides:
- **astropy.io.fits**: read and write FITS files.
- **astropy.wcs**: world coordinate system (sky-pixel transforms).
- **astropy.coordinates**: SkyCoord objects, frame conversions, parallax handling.
- **astropy.units / constants**: physical units, dimensional checks.
- **astropy.time**: precise time scales (UTC, TAI, TT, Julian Date, MJD).
- **astropy.stats**: sigma-clipping, robust statistics.

### photutils

aperture and PSF photometry.
- `CircularAperture`, `EllipticalAperture`, `aperture_photometry`.
- `DAOStarFinder`, `IRAFStarFinder`: source detection.
- `BasicPSFPhotometry`, `IterativelySubtractedPSFPhotometry`: PSF photometry.
- `MMMBackground`, `Background2D`: background estimation.

### sep (Source Extractor Python wrapper)

faster source detection and aperture photometry than photutils for survey-scale work. wraps Bertin's SExtractor algorithm.

### scipy.ndimage

image processing primitives: convolution, morphology, labeling. useful for masking, segmentation, region growing.

### specutils, astroplan, astroquery

- **specutils**: spectroscopic analysis (line measurements, continuum fitting).
- **astroplan**: observability calculations (rise/set, airmass).
- **astroquery**: query online catalogues (SDSS, Gaia, NED, Vizier, MAST).

### scientific pipelines

- **astropy.coordinates.SkyCoord** + **astroquery.gaia**: parallax + position cross-match.
- **drizzle / drizzlepac** (HST): combine dithered images with PSF preservation.
- **STSCI pipeline tools**: HST and JWST official reductions.

## IRAF (legacy but still in use)

IRAF (Image Reduction and Analysis Facility, NOAO/STScI) was the standard pre-2010. now archived but functional via `pyraf`. most workflows have migrated to astropy/photutils, but some pipelines and standard reduction recipes still use IRAF. key tasks:
- **imred.ccdred** (zerocombine, darkcombine, flatcombine, ccdproc): CCD calibration steps.
- **noao.digiphot.daophot**: PSF photometry suite (DAOFIND, PHOT, PSF, PEAK, ALLSTAR, ALLFRAME).
- **noao.imred.kpnoslit**: spectroscopy reduction.
- **immatch**: image registration.

## SExtractor (Bertin)

a fortran/C source detection + aperture photometry tool, widely used in survey pipelines. takes a calibrated image, returns a catalogue:
- **detection** via convolution + thresholding.
- **deblending** via multi-thresholding to separate close sources.
- **aperture photometry** in user-defined apertures.
- **Kron and Petrosian** apertures for galaxies.
- **PSFEx** (companion): PSF modelling.

still standard for survey photometry (SDSS, DECaLS, KiDS, Pan-STARRS).

## a typical Python workflow

```python
from astropy.io import fits
from astropy.stats import sigma_clipped_stats
from photutils.detection import DAOStarFinder
from photutils.aperture import CircularAperture, aperture_photometry
import numpy as np

# load
hdu = fits.open('science.fits')
image = hdu[0].data
header = hdu[0].header

# stats
mean, median, std = sigma_clipped_stats(image, sigma=3.0)

# detect
finder = DAOStarFinder(fwhm=3.0, threshold=5*std)
sources = finder(image - median)

# aperture photometry
positions = list(zip(sources['xcentroid'], sources['ycentroid']))
apertures = CircularAperture(positions, r=4.0)
phot = aperture_photometry(image - median, apertures)

# save catalogue
phot.write('catalog.fits')
```

practical full pipelines (DRAGONS, STScI's calibration pipelines) wrap many such steps with calibration tracking and quality flags.

## see also

- [CCD calibration steps](../../02_Zettel/Theory/CCD calibration steps.md)
- [Aperture photometry](../../02_Zettel/Theory/Aperture photometry.md)
- [PSF photometry](../../02_Zettel/Theory/PSF photometry.md)
- [Photometric standard stars](../../02_Zettel/Theory/Photometric standard stars.md)
- [Survey resources for Obs Astro](../../02_Zettel/Theory/Survey resources for Obs Astro.md)
- [Useful constants and conversions](../../02_Zettel/Theory/Useful constants and conversions.md)
