---
layout: default
title: "Filter systems and bandpasses"
---

photometry is always done **through a filter**: a bandpass $T(\lambda)$ that selects which photons reach the detector. different surveys use different filter sets ("photometric systems"), and switching between them is non-trivial.

## what a filter does

the integrated flux measured through filter $T(\lambda)$ from a source with flux density $F_\lambda$:
$$F_T = \frac{\int F_\lambda T(\lambda)\, d\lambda}{\int T(\lambda)\, d\lambda}$$

(or with photon-weighting in the AB system; see below). the magnitude is
$$m_T = -2.5 \log_{10}(F_T) + Z_T$$
with $Z_T$ a system-dependent zeropoint.

## key filter properties

- **central wavelength** $\lambda_c$ (or **effective wavelength** $\lambda_{\rm eff}$ averaged over the filter and source SED).
- **bandwidth** $\Delta\lambda$ (FWHM or rectangular-equivalent).
- **throughput** $T_{\rm peak}$, the maximum transmission.
- **shape**: top-hat, Gaussian, or asymmetric.
- **out-of-band leaks**: small transmissions far from the main band can contaminate, especially for hot or cool sources.

filter shape matters because two filters with the same $\lambda_c$ can integrate different amounts of flux from the same SED if their wings differ. **this is why "the same band" in two systems is not the same measurement**.

## the major systems

### Johnson-Cousins UBVRI

- defined in the 1950s with photoelectric photometers.
- U (365 nm), B (445 nm), V (551 nm), R (658 nm), I (806 nm).
- effective widths $\sim 50$ to $150$ nm.
- the historical reference system. UBV is Johnson; RI was added by Cousins.

### SDSS *ugriz*

- defined for the Sloan Digital Sky Survey, 2000.
- u (354 nm), g (475 nm), r (623 nm), i (763 nm), z (913 nm).
- modern, more uniform widths, sharper edges.
- AB magnitude system (see below).
- Pan-STARRS and DECam use modified versions.

### 2MASS JHK

- J (1.25 $\mu$m), H (1.65 $\mu$m), K$_s$ (2.16 $\mu$m).
- the survey-defined NIR standard.
- K$_s$ is shorter than the historical K (2.2 $\mu$m) to avoid thermal sky background.

### HST

- WFC3/UVIS: F275W, F336W, F438W, F555W, F814W, etc. ("F" then central wavelength).
- ACS, WFC3-IR: continues into NIR.
- ground-based filter shapes are not exactly reproduced; HST defines its own system.

### JWST

- NIRCam: F070W, F090W, F115W, F150W, F200W, F277W, F356W, F444W (broad bands W); plus medium and narrow.
- MIRI: F560W, F770W, F1000W, F1130W, F1280W, F1500W, F1800W, F2100W, F2550W.
- AB-magnitude defined.

### narrow-band filters

for emission-line imaging (H$\alpha$, $[OIII]$, narrow-band Ly$\alpha$ surveys at high $z$). $\Delta\lambda \sim 1$ to $10$ nm. paired with a continuum filter to subtract.

## photometric system zeropoints

three magnitude conventions:

### Vega magnitudes
- the historical UBV system: $m_{\rm Vega}(\text{Vega}) \equiv 0$ in every band by definition.
- physically: each band's zeropoint is the flux of Vega in that band.
- annoying because Vega is not a featureless source; its SED has Balmer absorption.

### AB magnitudes
- defined so that $m_{AB} = -2.5 \log_{10}(F_\nu / 3631\,\text{Jy})$.
- a flat-$F_\nu$ source with $F_\nu = 3631$ Jy has $m_{AB} = 0$ in every band.
- standard for SDSS, HST, JWST, and most modern surveys.
- the AB-Vega offset varies with band: e.g. $m_{AB} - m_{\rm Vega} \approx +0.91$ in K-band, $\approx 0$ in V.

### ST magnitudes
- defined as $m_{ST} = -2.5 \log_{10}(F_\lambda / 3.631 \times 10^{-9}\,\text{erg/s/cm}^2/\text{Å})$.
- flat-$F_\lambda$ source has zero magnitude.
- used in HST WFC3 UVIS native pipeline, less common otherwise.

## photometric system conversions

magnitudes in two filter systems do not differ by a constant offset. they differ by a **color term** that depends on the source SED:
$$m_1 \approx m_2 + a + b(c_1 - c_2)$$
where $(c_1 - c_2)$ is a color in either system. this is `obs6.pdf`'s key point: a 6000 K star and a 3000 K star feel a different shift between SDSS-i and Cousins-I, because they have different SED shapes through the (slightly different) i and I bandpasses. see [Photometric system conversion and color terms](../../02_Zettel/Theory/Photometric system conversion and color terms.html).

## see also

- [Magnitudes and photometric systems](../../02_Zettel/Theory/Magnitudes and photometric systems.html)
- [Pogson magnitudes and flux relation](../../02_Zettel/Theory/Pogson magnitudes and flux relation.html)
- [Color indices](../../02_Zettel/Theory/Color indices.html)
- [Photometric system conversion and color terms](../../02_Zettel/Theory/Photometric system conversion and color terms.html)
- [Atmospheric extinction](../../02_Zettel/Theory/interf/Atmospheric extinction.html)
- [Photometric standard stars](../../02_Zettel/Theory/Photometric standard stars.html)
- [Bolometric correction and effective temperature](../../02_Zettel/Theory/Bolometric correction and effective temperature.html)
