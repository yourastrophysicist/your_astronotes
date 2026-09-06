---
layout: default
title: "Apodization"
---

# Apodization

literally: "removing the foot." a technique for reshaping the *aperture function* of a telescope or interferometer to suppress the diffraction wings (sidelobes) of the resulting PSF. used in coronagraphy, high-contrast imaging, and interferometric nulling.

## the principle

a *uniform* aperture produces an Airy-disk PSF with first sidelobe at 1.6% of peak intensity. for direct exoplanet imaging at $10^{10}$ contrast, even 1.6% sidelobes drown the planet signal.

solution: *don't use a uniform aperture*. **apodize** it — taper the transmission smoothly from full to zero. the result: a PSF with much *lower* sidelobes at the cost of reduced central peak intensity.

## the FT picture

![Pupil apodization: tapering aperture amplitude transmission to suppress high-order diffraction rings around bright stars.](Apodization.png)


aperture function $A(\mathbf x)$ → PSF = $|\hat A|^2$. so PSF sidelobes come from sharp edges of $A$ (which produce oscillations in $\hat A$).

apodization smooths the aperture edges. the resulting $\hat A$ has fewer oscillations → lower sidelobes.

## standard apodization functions

### Gaussian

$A(r) = e^{-r^2/2 w^2}$. PSF is also Gaussian, with $0$ sidelobes — perfect for high-contrast imaging.

cost: 50% of the light (Gaussian falls off, so the integrated transmission is half of uniform).

### Hamming, Hanning, Blackman

windowed apodizations from signal processing. Hamming: 99% peak height, 1% pedestal. Hanning: 100% peak, 0 pedestal. Blackman: even more aggressive sidelobe suppression at the cost of central transmission.

### prolate spheroidal wavefunctions

mathematically optimal apodization. concentrates the PSF energy as much as possible while requiring minimum aperture sacrifice. used in advanced coronagraphs (PIAA — Phase Induced Amplitude Apodization).

### apodizing phase plates

instead of amplitude apodization (which throws away light), use *phase masks* that redistribute energy without absorbing photons. APPs (apodizing phase plates) and SP (shaped pupil) coronagraphs use this approach.

## the typical use cases

### 1. coronagraphy

apodized Lyot coronagraphs: combine focal-plane mask + apodized pupil for $10^7$-$10^9$ contrast.

advanced: apodized vortex coronagraphs achieve $10^8$+ contrast over wide bandwidths.

### 2. interferometric nulling

apodization in the *aperture* of each subaperture suppresses the diffraction wings of the *individual* telescope PSFs. this combines with the interferometric nulling for multiplicative contrast improvements.

### 3. high-resolution imaging

reduce the visibility of bright nearby sources to enable detection of faint companions.

## the cost-benefit

apodization is a *tradeoff*:
- **gain**: reduced sidelobes (better contrast)
- **cost**: reduced peak central intensity (lost photons)

for high-contrast imaging where photon budget is OK, the tradeoff is favorable. for photon-starved imaging, less so.

modern optimization (PIAA, complex apodization) tries to *minimize* the cost while *maximizing* the gain. sophisticated phase-only apodization has emerged as the standard for high-contrast.

## the historical note

apodization was first used in optical microscopy (Sparrow 1916, Toraldo di Francia 1952) for super-resolution. astronomical use began in the 1960s for solar coronagraphy and gained prominence with exoplanet-imaging instruments in the 2000s.

it's a technique that sounds esoteric but is foundational: without apodization, modern direct exoplanet imaging would be impossible.

## see also

- [Coronagraphy](../../02_Zettel/Theory/interf/Coronagraphy.html)
- [Nulling interferometry](../../02_Zettel/Theory/interf/Nulling interferometry.html)
- [Bracewell nuller](../../02_Zettel/Theory/interf/Bracewell nuller.html)
- [Astronomical_Interferometry_MOC](../../00_Atlas/Astronomical_Interferometry_MOC.html)
