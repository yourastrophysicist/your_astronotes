---
layout: default
title: "CCD calibration steps"
---

raw CCD frames are not science-ready. five calibration steps remove instrumental signatures so the resulting image is a faithful flux map.

## the steps in order

### 1. bias subtraction

removes the constant analog offset added during readout. take many zero-second exposures with the shutter closed, average them (median or sigma-clipped mean) to make a **master bias**, subtract from every science frame:
$$F_{\rm bias-corrected} = F_{\rm raw} - F_{\rm bias}$$

also use the **overscan** strip per frame to track frame-by-frame bias variations.

### 2. dark subtraction

removes thermally generated electrons. take long exposures with the shutter closed at the science temperature, scaled to the science exposure time. average to make a **master dark**:
$$F_{\rm dark-corrected} = F_{\rm bias-corrected} - F_{\rm dark}$$

usually negligible for cooled science CCDs ($D \ll 0.01$ e$^-$/s), important for room-temperature instruments. modern science observations skip this step if the dark current is below the read-noise floor.

### 3. flat-fielding

corrects pixel-to-pixel response variations and large-scale illumination patterns (vignetting, dust spots on filters). uniformly illuminate the chip and divide:
$$F_{\rm flat-corrected} = \frac{F_{\rm dark-corrected}}{F_{\rm flat}/\langle F_{\rm flat}\rangle}$$

types of flats:
- **dome flats**: lamp-illuminated white screen inside the dome. quick, controlled, but spectrum may not match sky.
- **twilight flats**: bright sky at dawn/dusk. matches sky color, harder to schedule.
- **sky flats**: median-combined science exposures, dithered to remove sources. matches all conditions but requires many science frames.
- **lamp flats** for spectrographs: continuum lamps for wavelength-independent throughput.

flats correct **multiplicative** systematics (per-pixel QE, vignetting); bias and dark correct **additive** systematics.

### 4. fringing correction (NIR/red only)

interference between sky lines (especially OH) and thin layers in the CCD produces a fringe pattern that varies with sky line strength. for I, z, and Y bands at typical CCDs:
1. construct a **fringe pattern** from many science exposures (median them).
2. scale to match individual frame's sky line strength.
3. subtract.

modern deep-depletion CCDs reduce fringing dramatically.

### 5. defects and cosmic rays

- **bad columns / hot pixels**: identified from dark frames (always-bright) or flats (always-low). flagged with a bad-pixel mask, usually replaced by interpolation from neighbours.
- **cosmic rays**: identified by their sharp pixel profile (much narrower than PSF) using algorithms like LACOSMIC (van Dokkum 2001) or astroscrappy.
- **sigma-clipping over multiple frames**: dither and stack several exposures, then per-pixel sigma-clip rejects outliers (cosmic rays appear in only one frame).

## the master pipeline

a typical photometric pipeline:
```
raw frame
  -> bias subtract (master bias)
  -> dark subtract (master dark)
  -> flat field (master flat)
  -> fringe subtract (if applicable)
  -> CR rejection
  -> astrometric calibration (WCS)
  -> photometric calibration (zeropoint from standards)
  -> source extraction
```

every modern survey runs a version of this. results are usually delivered as "calibrated" frames with WCS in the FITS header.

## quality checks

- **bias frame** should be flat at the read-noise level.
- **dark frame** should match the expected $D \cdot t$ count level.
- **flat field** should have $\sim 1\%$ pixel-to-pixel scatter and clean illumination shape.
- **science frame after flat-fielding** should have flat sky background to $\sim 0.5\%$ across the chip.

problems show up as residual gradients, donut shapes (telescope-shadow vignetting), or persistent stripes (electronic crosstalk).

## see also

- [CCD basics](../../02_Zettel/Theory/CCD basics.html)
- [CCD readout chain](../../02_Zettel/Theory/CCD readout chain.html)
- [CCD detectors and SNR](../../02_Zettel/Theory/CCD detectors and SNR.html)
- [The CCD equation](../../02_Zettel/Theory/The CCD equation.html)
- [Aperture photometry](../../02_Zettel/Theory/Aperture photometry.html)
- [Cosmic rays and bad pixels](../../02_Zettel/Theory/Cosmic rays and bad pixels.html)
- [Linearity and saturation](../../02_Zettel/Theory/Linearity and saturation.html)
