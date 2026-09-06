---
layout: default
title: "Bracewell nuller"
---

# Bracewell nuller

the original nulling-interferometry concept, proposed by Ronald Bracewell (1978). a simple two-element interferometer with a $\pi$ phase shift in one arm. on-axis sources interfere destructively; off-axis sources survive.

## the design

two telescopes separated by baseline $B$. light from telescope 2 has a $\pi$ phase shift introduced (e.g. by an optical delay or phase plate). beams combine at the beam combiner.

for a source on-axis (perfect path-length match):
- arm 1: amplitude $A$, phase 0
- arm 2: amplitude $A$, phase $\pi$
- combined: $A + Ae^{i\pi} = 0$ → **complete destructive interference, bright source disappears**

for a source off-axis at angle $\theta$:
- additional path difference $B\theta$
- phase difference between arms now $\pi + 2\pi B\theta/\lambda$
- combined amplitude not zero — survives

so the nuller acts as a *band-pass filter* on the sky: rejects on-axis sources, transmits off-axis sources at certain angles.

## the transmission pattern

for the simplest two-element Bracewell:
$$T(\theta) = \sin^2(\pi B \theta/\lambda)$$

null at $\theta = 0$. peaks at $\theta = \lambda/(2B), 3\lambda/(2B), ...$ — at multiples of half the natural fringe spacing.

so for $B = 100$ m and $\lambda = 10$ μm: null on-axis, peak at $\theta = 50$ mas. a planet at this separation would be transmitted at full intensity while the star is nulled.

## why "Bracewell"

Bracewell's 1978 paper was about *finding planets around other stars*. he proposed a space-based two-aperture nuller with $\sim 50$ m baseline, observing in the mid-IR (where stars are dimmest and planets are warmest). the destructive interference would suppress the star by $\sim 10^7$, allowing detection of Earth-mass planets.

the concept *foreshadowed* every modern nulling-interferometry mission. it was decades ahead of its time technologically.

## the achromatic problem

a simple $\pi$ phase shift via path delay only works at *one wavelength*. at other wavelengths, the path difference is $\pi \lambda_0/\lambda$ — not exactly $\pi$. so the null is *imperfect across a band*:

$$T(0, \lambda) = \sin^2(\pi(\lambda_0 - \lambda)/(2\lambda))$$

which is small near $\lambda_0$ but grows with bandwidth. real nullers are limited to narrow bands ($\Delta\lambda/\lambda \sim 0.1$) for high contrast.

solutions:
- **chromatic phase modulators**: glass elements with frequency-dependent thickness that produce achromatic $\pi$
- **four-element Bracewell** (Lay & Mennesson 2005): two interferometric pairs, one with $\pi/2$ and one with $-\pi/2$ phase. Stokes-parameter combination yields broadband null
- **pupil-densification nulling**: hypertelescope-type designs

## the contrast limits

three things limit Bracewell-nuller contrast:

### 1. residual phase mismatch

the $\pi$ phase must be exact to $\sim \lambda/10000$ for $10^9$ contrast. for $\lambda = 10$ μm, that's 1 nm. a hard engineering target.

### 2. amplitude mismatch

if arms have $5\%$ amplitude difference, the null is only $|1 - 1.05| = 0.05$ → $0.05^2 = 0.0025 = $ 1/400 contrast. for $10^9$, amplitudes must match to $\sim 10^{-5}$. extreme requirement.

### 3. broadband

even with achromatic phase, path-length errors over the band reduce the null depth. typical bandwidth limit: $\Delta\lambda/\lambda \sim 0.05$ for $10^7$ contrast.

modern nullers achieve $\sim 10^4$-$10^5$ contrast with the best engineering. orders of magnitude short of Bracewell's original $10^7$ goal.

## the modern variants

### Mark III, KIN

$\sim 10^4$-$10^5$ contrast at L-band (3.5 μm). used for exoplanet candidate searches and dust-shell imaging.

### LBTI

current. $10^4$ at N-band (8-13 μm). HOSTS exo-zodi survey of nearby stars.

### LIFE concept

planned mid-2030s mission. four-aperture formation-flying nuller in space. $10^7$ contrast. designed to image Earth-like planets around 30+ nearby stars.

## why Bracewell's idea was visionary

Bracewell 1978 was published while interferometry was barely working at all in the optical. proposing a *space-based interferometric nuller* for exoplanet imaging was extraordinarily ambitious.

his calculation framework — destructive interference on-axis, transmission off-axis — became the foundation for every modern nulling instrument. while no Bracewell-style space mission has yet flown, the concept shapes contemporary planning.

## see also

- [Nulling interferometry](../../../02_Zettel/Theory/interf/Nulling interferometry.html)
- [Coronagraphy](../../../02_Zettel/Theory/interf/Coronagraphy.html)
- [Apodization](../../../02_Zettel/Theory/interf/Apodization.html)
- [Astronomical_Interferometry_MOC](../../../00_Atlas/Astronomical_Interferometry_MOC.html)
