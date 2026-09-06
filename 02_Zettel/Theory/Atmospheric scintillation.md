---
layout: default
title: "Atmospheric scintillation"
---

scintillation is the **temporal flickering** of point-source intensity caused by interference of light paths through density fluctuations in the atmosphere. it is the same physics that makes stars "twinkle" but planets do not. for high-precision time-series photometry it is a real noise floor.

## the physical picture

turbulent cells in the atmosphere have small refractive-index variations $\delta n / n \sim 10^{-6}$. on the way down, the wavefront from a star is split into many parallel paths through these cells. they recombine at the telescope with relative phase shifts that vary on the turbulent crossing time, $\sim 1$ to $100$ ms.

constructive and destructive interference at the telescope aperture produces intensity fluctuations of typical fractional amplitude
$$\frac{\sigma_I}{I} \sim 10^{-2} \text{ to } 10^{-3}$$
with most of the power at $\sim 10$ to $100$ Hz.

## the scaling law

for a small-aperture telescope, observed at zenith distance $z$ with airmass $X$, exposure $t$, and aperture diameter $D$:
$$\boxed{\, \frac{\sigma_I}{I} \propto X^{1.75}\, D^{-2/3}\, t^{-1/2} \,}$$

interpretation:
- **bigger telescopes scintillate less**: the aperture averages over many independent atmospheric cells. for $D \gg r_0$, this $D^{-2/3}$ wins.
- **longer exposures scintillate less**: just as $\sqrt{t}$, the photon-counting noise floor.
- **higher airmass scintillates more**: $X^{1.75}$ is steep. zenith observation always wins for time-series.

## why planets don't twinkle

the scintillation amplitude scales with the angular size of the source. for an extended source of angular diameter $\theta_{\rm src}$ much larger than the typical scintillation cell projected at the telescope ($\sim$ a few arcseconds), the fluctuations average over the source surface and largely cancel.
- stars: $\theta_\star \sim 10^{-3}$ arcsec, much smaller than scintillation scale, **point-source scintillation is full**.
- planets: $\theta_{\rm planet} \sim 1$ to $50$ arcsec, comparable to or larger than scintillation, **smoothed**.

this is why "stars twinkle, planets don't."

## consequence for science

scintillation matters mainly when:
- **transit photometry**: exoplanet transits are $\Delta F/F \sim 10^{-3}$, comparable to scintillation. precision photometry from ground requires sites with low scintillation, large telescopes, and special techniques (e.g. defocusing the telescope to spread the PSF over many pixels, simultaneous multi-band).
- **high-speed photometry**: occultations, asteroseismology, fast variability.
- **interferometric phase**: scintillation-like wavefront fluctuations limit ground-based interferometers; AO partly mitigates.

for typical broadband imaging integrating over $\gtrsim 30$ s, **photon noise dominates** and scintillation is irrelevant.

## scintillation vs seeing vs scintillation index

these are related but different:
- **seeing** $r_0$, $\theta_{\rm seeing}$: spatial blurring of an image (PSF FWHM).
- **scintillation** $\sigma_I/I$: temporal flickering of intensity.

both come from the same atmospheric turbulence, but they live in different observables. seeing is the dominant problem for *imaging resolution*; scintillation is the dominant problem for *time-series photometry from small telescopes*.

## see also

- [Earth atmosphere for observations](../../02_Zettel/Theory/Earth atmosphere for observations.md)
- [Atmospheric seeing](../../02_Zettel/Theory/interf/Atmospheric seeing.md)
- [Adaptive optics overview](../../02_Zettel/Theory/interf/Adaptive optics overview.md)
- [CCD detectors and SNR](../../02_Zettel/Theory/CCD detectors and SNR.md)
- [Sky brightness](../../02_Zettel/Theory/Sky brightness.md)
