---
layout: "default"
title: "Single slit diffraction"
---
the starting point of grating physics: a single slit of width $b$ illuminated by a plane wave of wavelength $\lambda$ produces a Fraunhofer diffraction pattern at infinity (or at the focus of a lens).

## the intensity pattern

at angle $\theta$ from the slit normal:
$$I(\theta) = A_0^2 \frac{\sin^2\beta}{\beta^2}, \quad \beta = \frac{\pi}{\lambda} b\sin\theta$$

central maximum at $\theta = 0$ (most of the energy). zeros where $\sin\beta = 0$ but $\beta \ne 0$, i.e. $\beta = \pm\pi, \pm 2\pi, \dots, m\pi$:
$$\boxed{\, b\sin\theta = m\lambda \quad m = \pm 1, \pm 2, \dots \quad\text{(zeros)}\,}$$

between consecutive zeros, secondary maxima with rapidly decreasing amplitude (about $4.7\%$ of the central peak for the first secondary).

## the angular width of the central peak

the central peak extends from the first zero on one side to the first zero on the other:
$$\Delta\theta_{\rm central} = 2\lambda/b$$
narrower for wider slits, broader for narrower slits. classical Heisenberg-style position-momentum relation in optics.

## why this matters for spectroscopy

every component of a spectrograph (slit, grating, camera) has a finite aperture, so each contributes a single-slit diffraction envelope to the final image. the slit at the focal plane sets the **slit-image** width on the detector. the dispersing element (grating) introduces the second envelope.

in particular, the **grating envelope**: each individual groove of an N-slit grating diffracts as a single slit of width $b$, modulating the otherwise sharp grating maxima. the result is the [[N-slit interference and gratings]] pattern: sharp principal maxima sitting *under* a single-slit envelope.

this envelope is what makes the **blazed grating** useful: by tilting the groove face you shift the single-slit envelope to peak at a chosen order/wavelength, dramatically increasing throughput there.

<!-- sources:wiki-arxiv -->
## Wikipedia and arXiv sources

![Diffraction|500](https://commons.wikimedia.org/wiki/Special:FilePath/Laser_Interference.JPG?width=600)
*Diffraction pattern of red laser beam made on a plate after passing through a small circular aperture in another plate. Physical optics is used to explain effects such as diffraction* ([Commons file page](https://commons.wikimedia.org/wiki/File:Laser_Interference.JPG), Wisky, CC BY-SA 3.0, as used on the Wikipedia article [Diffraction](https://en.wikipedia.org/wiki/Diffraction))

- **Diffraction**. "Diffraction is the deviation of waves from straight-line propagation due to an obstacle or through an aperture, without any change in their energy. Diffraction is the same physical effect as interference, but interference is typically used for the superposition of a few waves, while the term diffraction is used when many waves are superposed." ([Wikipedia](https://en.wikipedia.org/wiki/Diffraction))

> Definitions quoted from Wikipedia (CC BY-SA 4.0). Figures credited in their captions.
<!-- /sources:wiki-arxiv -->

## see also

- [[N-slit interference and gratings]]
- [[Grating equation]]
- [[Blazed gratings]]
- [[Spectrograph design]]
- [[Dispersion and spectral resolution]]
- [[Rayleigh criterion]]



## Linked References

- [[Blazed gratings]]
- [[Dispersion and spectral resolution]]
- [[Grating equation]]
- [[N-slit interference and gratings]]
- [[Astronomical_Spectroscopy_MOC]]


