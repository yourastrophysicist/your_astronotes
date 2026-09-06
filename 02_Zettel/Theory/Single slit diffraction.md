---
layout: default
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

every component of a spectrograph (slit, grating, camera) has a finite aperture, so each contributes a single-slit diffraction envelope to the final image. the slit at the focal plane sets the **slit-image** width on the detector; the dispersing element (grating) introduces the second envelope.

in particular, the **grating envelope**: each individual groove of an N-slit grating diffracts as a single slit of width $b$, modulating the otherwise sharp grating maxima. the result is the [N-slit interference and gratings](../../02_Zettel/Theory/N-slit interference and gratings.html) pattern: sharp principal maxima sitting *under* a single-slit envelope.

this envelope is what makes the **blazed grating** useful: by tilting the groove face you shift the single-slit envelope to peak at a chosen order/wavelength, dramatically increasing throughput there.

## see also

- [N-slit interference and gratings](../../02_Zettel/Theory/N-slit interference and gratings.html)
- [Grating equation](../../02_Zettel/Theory/Grating equation.html)
- [Blazed gratings](../../02_Zettel/Theory/Blazed gratings.html)
- [Spectrograph design](../../02_Zettel/Theory/Spectrograph design.html)
- [Dispersion and spectral resolution](../../02_Zettel/Theory/Dispersion and spectral resolution.html)
- [Rayleigh criterion](../../02_Zettel/Theory/Rayleigh criterion.html)
