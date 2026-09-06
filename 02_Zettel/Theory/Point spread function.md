---
layout: default
title: "Point spread function"
type: zettel
created: 2026-08-04
moc:
  - Astronomical_Interferometry_MOC
tags:
  - zettel
  - theory
  - interferometry
---
> *the blurry fingerprint that an optical system leaves on a point source, setting the fundamental limit on resolving power*

---

## core physical intuition

![Point Spread Function (PSF): 2D spatial intensity pattern produced by a diffraction-limited optical system imaging an unresolved point source.](Point_spread_function.svg)


Because light behaves as a wave, it cannot be focused to an infinitely small, perfect geometric point. Whenever a plane wave passes through a finite aperture (like a telescope mirror or a camera lens), the wavefront is truncated. Diffraction causes the wave to spread out. 

The Point Spread Function (PSF) is the 2D intensity distribution that results when an optical system images a mathematically perfect point source. It is the system's impulse response. Every extended object you observe is technically the true image convolved with the system's PSF. For a standard circular telescope, this blur takes the form of a bright central disk surrounded by concentric, progressively fainter rings.

---

## key derivation & equations

For a clear, circular aperture of diameter $D$ observing at wavelength $\lambda$, the PSF is described by the Airy pattern:

$$ I(\theta) = I_0 \left[ \frac{2J_1(\pi D\theta/\lambda)}{\pi D\theta/\lambda} \right]^2 $$

where:
- $I_0$ is the peak intensity
- $J_1$ is the first-order Bessel function of the first kind
- $\theta$ is the angular distance from the optical axis

The first zero (the dark ring immediately surrounding the central Airy disk) occurs at the Rayleigh criterion angle:

$$ \theta = 1.22 \frac{\lambda}{D} $$

---

## astrophysical context

In standard astronomy, the PSF dictates the angular resolution limit of the telescope (e.g., whether you can split a tight binary star). In interferometry, the PSF concept transforms into the "dirty beam". Because an interferometer is essentially a single giant aperture with most of its mirror missing, its PSF is not a clean Airy disk but a complex, spiky pattern determined by the layout of the antennas (the (u,v) coverage). Deconvolution algorithms like CLEAN are required to remove this complicated PSF from the raw "dirty image".

---

## connections & zettel links

* parent moc: [Astronomical_Interferometry_MOC](../../00_Atlas/Astronomical_Interferometry_MOC.html)
* related zettels: [Diffraction patterns of simple apertures](../../02_Zettel/Theory/interf/Diffraction patterns of simple apertures.html), [Dirty beam and dirty image](../../02_Zettel/Theory/interf/Dirty beam and dirty image.html), [Rayleigh criterion](../../02_Zettel/Theory/Rayleigh criterion.html)
