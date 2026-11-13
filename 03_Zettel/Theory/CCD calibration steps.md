---
layout: "default"
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

flats correct **multiplicative** systematics (per-pixel QE, vignetting). bias and dark correct **additive** systematics.

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

## worked example

one pixel reads $1500$ ADU in a 600 s exposure. the bias is 300 ADU, the dark current $0.02$ ADU/s, and the normalized flat at that pixel is $0.95$:

$$I_{\rm cal} = \frac{1500 - 300 - 0.02 \times 600}{0.95} = \frac{1188}{0.95} = 1250.5\ \text{ADU}$$

the calibration frames have noise too. a master bias from 25 frames with 5 e$^-$ read noise has $5/\sqrt{25} = 1$ e$^-$. a flat good to 0.1% needs $10^6$ e$^-$ per pixel in total.

## where it goes wrong

- the flat itself must be bias-subtracted and normalized before I divide by it.
- the dark frame is scaled to the exposure time, and only after its bias has been removed.
- twilight, dome and night-sky flats have different colours, and the flat depends on the colour of the light.
- few calibration frames add their noise to every science image.

<!-- sources:wiki-arxiv -->
## Wikipedia and arXiv sources

![Flat-field correction|500](https://commons.wikimedia.org/wiki/Special:FilePath/Woy_Woy_Channel_-_Vignetted.jpg?width=600)
*Woy Woy Channel with post-shoot vignetting* ([Commons file page](https://commons.wikimedia.org/wiki/File:Woy_Woy_Channel_-_Vignetted.jpg), TheDefiniteArticle, CC BY-SA 4.0, as used on the Wikipedia article [Flat-field correction](https://en.wikipedia.org/wiki/Flat-field_correction))

- **Flat-field correction**. "Flat-field correction (FFC) is a digital imaging technique to mitigate pixel-to-pixel differences in the photodetector sensitivity and distortions in the optical path. It is a standard calibration procedure in everything from personal digital cameras to large telescopes." ([Wikipedia](https://en.wikipedia.org/wiki/Flat-field_correction))

> Definitions quoted from Wikipedia (CC BY-SA 4.0). Figures credited in their captions.
<!-- /sources:wiki-arxiv -->

## see also

- [[CCD basics]]
- [[CCD readout chain]]
- [[CCD detectors and SNR]]
- [[The CCD equation]]
- [[Aperture photometry]]
- [[Cosmic rays and bad pixels]]
- [[Linearity and saturation]]

---

## observational astrophysics course slides (Prof. Paolo Cassata)

![obs_ccd-35.png](../../assets/images/obs_ccd-35.png)
*Calibration equation: I_cal = (I_raw - Bias - Dark) / Flat_norm.*

![obs_ccd-36.png](../../assets/images/obs_ccd-36.png)
*Master bias, master dark, and dome/twilight flat-field creation.*



## Linked References

- [[Aperture photometry]]
- [[CCD detectors and SNR]]
- [[Cosmic rays and bad pixels]]
- [[Datacube reduction]]
- [[Linearity and saturation]]
- [[PSF photometry]]
- [[Photometric standard stars]]
- [[Python and IRAF tools for photometry]]
- [[Spectrum reduction pipeline]]
- [[Observational_Astrophysics_MOC]]


