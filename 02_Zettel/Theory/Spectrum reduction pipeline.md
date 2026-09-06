---
layout: default
title: "Spectrum reduction pipeline"
---

the standard sequence of steps to turn a raw 2D spectroscopic image into a calibrated 1D spectrum. this is the practical workflow every spectroscopist must know, and a frequent oral question.

## the steps in order

### 1. bias subtraction

remove the constant readout offset. take many zero-second exposures, average to make a master bias, subtract from every science frame. see [CCD calibration steps](../../02_Zettel/Theory/CCD calibration steps.md).

### 2. dark subtraction (often skipped)

usually negligible for cooled CCDs. include if dark current is significant.

### 3. flat-fielding

for spectroscopy, flats serve two purposes:
- **pixel-to-pixel response correction**: same as imaging.
- **wavelength-dependent throughput correction**: the spectral response of the system as a function of $\lambda$.

procedure:
- take **continuum lamp flats** (a spectrally smooth lamp through the slit + grating).
- divide out the lamp's spectral shape (a smooth spline) to leave only pixel-to-pixel response.
- divide science frames by this normalised flat.

### 4. cosmic-ray rejection

LACOSMIC or similar, applied to each 2D frame. see [Cosmic rays and bad pixels](../../02_Zettel/Theory/Cosmic rays and bad pixels.md).

### 5. wavelength calibration

via comparison-lamp lines. see [Wavelength calibration](../../02_Zettel/Theory/Wavelength calibration.md). results in a wavelength solution $\lambda(x, y)$ (slightly different per row in longslit, per fiber in MOS, per spaxel in IFU).

### 6. trace and extract

find the position of the spectrum on the 2D detector (the **trace**) and sum the counts perpendicular to it within an aperture. two methods:
- **simple sum extraction**: for each $\lambda$ column, sum pixels in an aperture along the spatial direction. fast, robust.
- **optimal extraction (Horne 1986)**: weight each pixel by the spatial profile of the source. recovers $\sim 30\%$ better SNR in sky-limited regime.

### 7. sky subtraction

subtract the sky background from the source's spatial position:
- **longslit**: sky from regions of the slit not covered by the source.
- **fiber-fed**: dedicated sky fibers placed in empty regions.
- **IFU**: sky from spaxels at field edges, or a separate sky pointing.

at NIR or in dense sky-line regions, subtraction is delicate; tilted spectral lines and PSF mismatches leave residuals.

### 8. flux calibration

apply the sensitivity function from a spectrophotometric standard. see [Flux calibration](../../02_Zettel/Theory/interf/Flux calibration.md).

### 9. heliocentric / barycentric correction

correct the wavelength scale for Earth's motion around the Sun (and barycentric motion):
$$\lambda_{\rm bary} = \lambda_{\rm obs}(1 - v_{\rm bary}/c)$$
with $v_{\rm bary}$ up to $30$ km/s depending on time of year and target direction. essential for radial-velocity work.

### 10. telluric correction

for NIR or near-IR-dependent science, divide by a telluric template (Molecfit, telfit). see [Flux calibration](../../02_Zettel/Theory/interf/Flux calibration.md).

### 11. atmospheric extinction correction

apply $10^{0.4 k(\lambda) X}$ to correct back to above-atmosphere flux. see [Atmospheric extinction](../../02_Zettel/Theory/interf/Atmospheric extinction.md).

### 12. continuum normalisation (optional)

for line-shape work, divide by a smooth continuum fit. preserves line equivalent widths.

## a typical longslit pipeline (Asiago, FOSC)

```
raw frame
  -> bias subtract
  -> overscan + bias correction
  -> flat-field
  -> cosmic-ray rejection
  -> wavelength calibration via HeAr lamp
  -> trace and extract source aperture
  -> subtract sky from off-source rows
  -> flux calibration via spectrophotometric standard
  -> apply heliocentric correction
  -> output: 1D wavelength-calibrated, flux-calibrated spectrum
```

## standard tools

- **PypeIt** (Python): modern reduction pipeline supporting many spectrographs.
- **IRAF / PyRAF**: legacy but still in use for longslit (`apall`, `dispcor`, `calibrate`).
- **MIDAS** (ESO): old, mostly retired.
- **instrument-specific pipelines**: HARPS DRS, MUSE pipeline, X-shooter pipeline.

## see also

- [Spectrograph design](../../02_Zettel/Theory/Spectrograph design.md)
- [Wavelength calibration](../../02_Zettel/Theory/Wavelength calibration.md)
- [Flux calibration](../../02_Zettel/Theory/interf/Flux calibration.md)
- [CCD calibration steps](../../02_Zettel/Theory/CCD calibration steps.md)
- [Cosmic rays and bad pixels](../../02_Zettel/Theory/Cosmic rays and bad pixels.md)
- [Atmospheric extinction](../../02_Zettel/Theory/interf/Atmospheric extinction.md)
- [Sky brightness](../../02_Zettel/Theory/Sky brightness.md)
- [Aperture photometry](../../02_Zettel/Theory/Aperture photometry.md)
- [PSF photometry](../../02_Zettel/Theory/PSF photometry.md)
