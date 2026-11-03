---
layout: "default"
title: "Datacube redshift measurement"
---
# datacube redshift measurement

up: [[Astrophysics_of_Galaxies_MOC]] · [[Datacube reduction]]

## measurement principles

Determining the systemic redshift $z_{\rm sys}$ and spatially resolved velocity field $v(x, y)$ from an IFU datacube:

$$1 + z = \frac{\lambda_{\rm obs}}{\lambda_{\rm rest}}$$

$$v(x, y) = c \left( \frac{z(x, y) - z_{\rm sys}}{1 + z_{\rm sys}} \right)$$

## two complementary approaches

1. **emission lines (gas redshift)**:
   - For star-forming and AGN spaxels.
   - Simultaneous non-linear least-squares fitting of multiple Gaussian or Gauss-Hermite profiles to prominent lines:
     $$[\text{O II}] \lambda 3727, \text{H}\beta \lambda 4861, [\text{O III}] \lambda\lambda 4959, 5007, \text{H}\alpha \lambda 6563, [\text{N II}] \lambda\lambda 6548, 6584, [\text{S II}] \lambda\lambda 6717, 6731$$
   - Physical constraints: identical velocity and velocity dispersion for doublet components; fixed theoretical doublet ratios (e.g., $[\text{O III}]\lambda 5007 / [\text{O III}]\lambda 4959 = 2.98$).

2. **stellar absorption lines (stellar redshift)**:
   - For passive galaxies and early-type bulges.
   - Penalized Pixel-Fitting (pPXF, Cappellari 2017): convolves stellar population template libraries with a Gauss-Hermite line-of-sight velocity distribution (LOSVD):
     $$\mathcal{L}(v) = \frac{1}{\sqrt{2\pi}\sigma} \exp\left(-\frac{(v-V)^2}{2\sigma^2}\right) \left[ 1 + h_3 H_3\left(\frac{v-V}{\sigma}\right) + h_4 H_4\left(\frac{v-V}{\sigma}\right) \right]$$
   - Yields mean velocity $V$, velocity dispersion $\sigma$, and asymmetric ($h_3$) / symmetric ($h_4$) departures from Gaussianity.

## connections

- applications: [[Ionized gas kinematics]], [[Stellar kinematics measurements]]
- facilities: [[MUSE datacubes]]



<!-- sources:wiki-arxiv -->
## Wikipedia and arXiv sources

![Integral field spectrograph|500](https://commons.wikimedia.org/wiki/Special:FilePath/Principle_of_Integral_Field_Spectroscopy.jpg?width=600)
*The principle of Integral Field Spectroscopy (IFS)* ([Commons file page](https://commons.wikimedia.org/wiki/File:Principle_of_Integral_Field_Spectroscopy.jpg), eso.org, CC BY 4.0, as used on the Wikipedia article [Integral field spectrograph](https://en.wikipedia.org/wiki/Integral_field_spectrograph))

- **Integral field spectrograph**. "Integral field spectrographs (IFS) combine spectrographic and imaging capabilities in the optical or infrared wavelength domains (0.32 μm – 24 μm) to get from a single exposure spatially resolved spectra in a bi-dimensional region. The name originates from the fact that the measurements result from integrating the light on multiple sub-regions of the field." ([Wikipedia](https://en.wikipedia.org/wiki/Integral_field_spectrograph))
- **Structure and Kinematics of Early-Type Galaxies from Integral-Field Spectroscopy**. "Observations of galaxy isophotes, longs-slit kinematics and high-resolution photometry suggested a possible dichotomy between two distinct classes of E galaxies. But these methods are expensive for large galaxy samples. Instead, integral-field spectroscopic can efficiently recognize the shape, dynamics and stellar population of complete samples of early-type galaxies (ETGs)." ([arXiv:1602.04267](https://arxiv.org/abs/1602.04267))

> Definitions quoted from Wikipedia (CC BY-SA 4.0) and the arXiv abstract. Figures credited in their captions.
<!-- /sources:wiki-arxiv -->

## Linked References

- [[Datacube reduction]]
- [[Astrophysics_of_Galaxies_MOC]]


