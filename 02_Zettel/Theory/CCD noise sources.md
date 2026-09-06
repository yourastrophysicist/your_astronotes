---
layout: default
title: "CCD noise sources"
---

an exposure produces a count $N$ on a pixel. **four independent sources** contribute to its variance, each Poisson or Gaussian. they are independent, so variances add. understanding which dominates determines exposure planning.

## the four sources

### 1. source photon noise (Poisson)

incoming source photons are statistically independent, so their detected count follows Poisson statistics:
$$\sigma_*^2 = N_*$$

irreducible: it is the fundamental quantum-counting noise floor. cannot be lowered without collecting more photons. at SNR $\propto \sqrt{N_*}$, doubling SNR requires $4\times$ photons.

### 2. sky photon noise (Poisson)

the sky background ([Sky brightness](../../02_Zettel/Theory/Sky brightness.md)) contributes photons to every pixel:
$$\sigma_{\rm sky}^2 = N_{\rm sky}\quad\text{per pixel}$$

with $N_{\rm sky} = R_{\rm sky}\, t$ where $R_{\rm sky}$ is the sky count rate (e$^-$/s/pixel) for the given filter and site. Poisson, like source noise.

### 3. dark current (Poisson)

thermal generation of electrons in silicon, even with the shutter closed:
$$\sigma_d^2 = N_d = D\, t\quad\text{per pixel}$$

with $D$ the dark current rate (e$^-$/s/pixel). suppressed exponentially by cooling: at $-100°$C, $D \ll 0.001$ e$^-$/s, negligible. at room temperature, $D \sim 10^4$ e$^-$/s, fatal. all science CCDs are LN2- or thermoelectrically-cooled.

### 4. read noise (Gaussian)

per-pixel per-readout electronics noise:
$$\sigma_{\rm RN}^2\quad\text{per pixel per readout}$$

Gaussian (not Poisson). does not scale with $t$ or with signal. one readout = one $\sigma_{\rm RN}$.

## independence and adding variances

since the four sources are statistically independent, variances add (not standard deviations):
$$\sigma_{\rm total}^2 = N_* + n_{\rm pix}(N_{\rm sky} + N_d + \sigma_{\rm RN}^2)$$

where $n_{\rm pix}$ is the number of pixels in the source aperture (the source noise is already integrated over those pixels). the total noise:
$$\sigma_{\rm total} = \sqrt{N_* + n_{\rm pix}(N_{\rm sky} + N_d + \sigma_{\rm RN}^2)}$$

dividing the source signal by this gives the SNR formula (see [The CCD equation](../../02_Zettel/Theory/The CCD equation.md)).

## smaller secondary contributions

real CCDs have additional small noise contributions, usually subdominant but worth knowing:
- **flat-field error**: imperfect knowledge of pixel-to-pixel response. typical $\sim 0.5\%$ to $1\%$.
- **digitisation noise**: $\sigma_{\rm dig}^2 \approx (g/\sqrt{12})^2$ from the ADC. usually $\ll \sigma_{\rm RN}$.
- **shot noise on calibration frames**: bias and dark frames themselves have noise, propagated via subtraction. mitigated by averaging many calibration frames.
- **CTE losses** (see [CCD readout chain](../../02_Zettel/Theory/CCD readout chain.md)).
- **fringing** (red wavelengths): NIR thin films on the CCD interfere with sky lines. removed by sky pattern subtraction.
- **fixed-pattern noise**: subtle row/column structure, should be calibrated by flats.

## the regimes (preview)

depending on which source dominates, SNR scales differently with $t$:
- **source-limited** ($N_* \gg$ all else): SNR $\propto \sqrt{N_*} \propto \sqrt{t}$.
- **sky-limited** ($N_{\rm sky}$ dominates): SNR $\propto N_*/\sqrt{N_{\rm sky}} \propto \sqrt{t}$.
- **read-noise-limited** ($\sigma_{\rm RN}^2$ dominates): SNR $\propto N_*/\sigma_{\rm RN} \propto t$.

the regime determines whether to take long single exposures or short stacked ones. see [The CCD equation](../../02_Zettel/Theory/The CCD equation.md) for the full discussion.

## see also

- [CCD detectors and SNR](../../02_Zettel/Theory/CCD detectors and SNR.md)
- [The CCD equation](../../02_Zettel/Theory/The CCD equation.md)
- [CCD basics](../../02_Zettel/Theory/CCD basics.md)
- [CCD readout chain](../../02_Zettel/Theory/CCD readout chain.md)
- [Sky brightness](../../02_Zettel/Theory/Sky brightness.md)
- [Signal-Noise Ratio](../../02_Zettel/Theory/Signal-Noise Ratio.md)
