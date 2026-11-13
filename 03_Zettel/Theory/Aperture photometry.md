---
layout: "default"
title: "Aperture photometry"
---
**aperture photometry** is the simplest way to extract a magnitude from a calibrated image: sum the pixel counts inside a circular aperture around the source, subtract a sky estimate from a surrounding annulus.

## the algorithm

1. **center the aperture** on the source using a centroid (intensity-weighted or PSF-fit position).
2. **sum** all pixel counts inside the aperture of radius $r_{\rm ap}$:
$$F_{\rm raw} = \sum_{\rm pixels\ in\ aperture} \mathrm{counts}$$
3. **estimate the sky** from a surrounding annulus (inner radius $r_{\rm in}$, outer $r_{\rm out}$):
$$\bar S = \mathrm{median}_{r_{\rm in} < r < r_{\rm out}}\,(\mathrm{counts/pixel})$$
the median is more robust than the mean against contamination by faint background sources.
4. **subtract sky** times the aperture area $A_{\rm ap}$:
$$F_{\rm src} = F_{\rm raw} - \bar S \cdot A_{\rm ap}$$
5. **convert to magnitude** via the system zeropoint $Z$:
$$m = -2.5 \log_{10}(F_{\rm src}) + Z$$

## choosing the aperture radius

trade-off:
- **small aperture**: misses flux in the PSF wings.
- **large aperture**: captures all source flux but more sky pixels = more noise.

for a Gaussian PSF on a flat sky background, the SNR-optimising radius is
$$r_{\rm opt} \approx 1.4 \cdot \mathrm{FWHM}$$
about $93\%$ enclosed flux. for sharper-cored PSFs (Moffat with low $\beta$), the optimum is slightly smaller, and for broader PSFs, slightly larger.

a common default: $r_{\rm ap} =$ FWHM (about $76\%$ enclosed flux for Gaussian) for SNR-balanced photometry, and **aperture corrections** to recover the rest.n 

## aperture corrections

if you use $r_{\rm ap}$ smaller than infinity, you systematically lose a fraction of the source flux. **aperture correction** measures the fractional loss using bright isolated stars (whose photometry should be the same at any radius), then applies the correction to faint sources.

procedure:
1. measure several bright stars at small aperture $r_1$ and large aperture $r_2 \gg \mathrm{FWHM}$.
2. compute $\Delta m = m(r_1) - m(r_2)$, assumed source-independent.
3. apply $\Delta m$ to faint targets measured at $r_1$.

assumption: the PSF is uniform across the image. fails for spatially varying PSFs, which need pixel-by-pixel correction.

## strengths and weaknesses

### strengths
- **simple**: implementation in $\sim 20$ lines (photutils, sep).
- **robust**: works with any well-isolated source, no PSF model needed.
- **direct**: no model assumptions about the source profile.

### weaknesses
- **bad in crowded fields**: nearby sources contaminate the aperture and the sky annulus.
- **suboptimal SNR**: pixel weighting is uniform inside the aperture. PSF photometry weights pixels by the PSF and gets better SNR.
- **sensitive to aperture choice and centring**: a few-pixel offset can change the magnitude.

for crowded fields (globular clusters, nuclear regions), use [[PSF photometry]] instead.

## standard tools

- **astropy.photutils** in python
- **sep** (Source Extractor Python wrapper)
- **DAOPHOT** (IRAF era)
- **SExtractor** (Bertin & Arnouts 1996)

most provide circular, elliptical, and Kron-style apertures, plus background estimation algorithms.

## elliptical / Kron apertures

for galaxies and extended sources, circular apertures truncate flux. Kron radii (defined as the first moment of the brightness profile) and elliptical apertures aligned with the source's intrinsic shape recover more flux. Petrosian apertures define the radius from a profile-shape criterion ($\eta(r) = 0.2$ in SDSS).

## worked example

an aperture of radius 5 pixels (78.5 pixels) contains $12\,500$ e$^-$ in a 60 s exposure. the median sky is 20 e$^-$ per pixel:

$$N_* = 12\,500 - 78.5 \times 20 = 10\,930\ \text{e}^-$$

the rate is $182$ e$^-$/s, so $m_{\rm inst} = -2.5\log_{10}182 = -5.65$, and with a zero point of $25.00$ the magnitude is $19.35$ before the aperture correction.

## where it goes wrong

- a small aperture loses a fraction of the light that changes with the seeing. the aperture correction, measured on bright isolated stars, fixes it.
- a large aperture collects more sky noise than signal.
- the sky annulus often contains faint stars. the median or the mode is safer than the mean.
- in crowded fields the apertures overlap and the method fails.

<!-- sources:wiki-arxiv -->
## Wikipedia and arXiv sources

![Photometry (astronomy)|500](https://commons.wikimedia.org/wiki/Special:FilePath/Kepler_Mission_Space_Photometer_smaller.jpg?width=600)
*Illustration of Kepler Spacecraft with labels* ([Commons file page](https://commons.wikimedia.org/wiki/File:Kepler_Mission_Space_Photometer_smaller.jpg), NASA, Public domain, as used on the Wikipedia article [Photometry (astronomy)](https://en.wikipedia.org/wiki/Photometry_%28astronomy%29))

- **Photometry (astronomy)**. "In astronomy, photometry, from Greek photo- ("light") and -metry ("measure"), is a technique used in astronomy that is concerned with measuring the flux or intensity of light radiated by astronomical objects." ([Wikipedia](https://en.wikipedia.org/wiki/Photometry_%28astronomy%29))

> Definitions quoted from Wikipedia (CC BY-SA 4.0). Figures credited in their captions.
<!-- /sources:wiki-arxiv -->

## see also

- [[The CCD equation]]
- [[PSF photometry]]
- [[CCD calibration steps]]
- [[Sky brightness]]
- [[Magnitudes and photometric systems]]
- [[Galaxy size-luminosity relation]]

---

## observational astrophysics course slides (Prof. Paolo Cassata)

![obs_ccd-31.png](../../assets/images/obs_ccd-31.png)
*Synthetic aperture photometry: summing counts inside radius r_ap.*

![obs_ccd-32.png](../../assets/images/obs_ccd-32.png)
*Background subtraction using sky annulus: N_* = C_ap - n_pix * <C_sky>.*



## Linked References

- [[CCD calibration steps]]
- [[CCD detectors and SNR]]
- [[Cosmic rays and bad pixels]]
- [[Linearity and saturation]]
- [[PSF photometry]]
- [[Photometric standard stars]]
- [[Python and IRAF tools for photometry]]
- [[Sersic profile]]
- [[Spectrum reduction pipeline]]
- [[The CCD equation]]
- [[Observational_Astrophysics_MOC]]


