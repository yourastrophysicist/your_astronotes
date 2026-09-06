---
layout: default
title: "Narrabri stellar interferometer"
---

# Narrabri stellar interferometer

the first instrument built specifically for [HBT](../../02_Zettel/Theory/interf/Hanbury Brown Twiss effect.md) intensity interferometry on the sky. operated 1965-1972 in Australia. measured 32 stellar angular diameters with ~1% precision, the first systematic catalog of stellar diameters by interferometry.

## the instrument

two parabolic light-buckets (not optical-quality, just for collecting photons), each 6.5 m diameter, on a 188 m diameter circular railway track. each bucket fed light to a photomultiplier tube. the photocurrents from the two PMTs were AC-coupled, multiplied electronically, and time-averaged.

baselines: from $\sim 10$ m (close pair) to 188 m (diametrically opposite). varying the baseline by moving the buckets along the track.

## why a railway

![Narrabri Stellar Interferometer in Australia: two 6.5-meter optical reflectors on a 188-meter circular railway track.](Narrabri_stellar_interferometer.jpg)


the buckets needed to sample many baselines to trace the visibility curve. building 188 m of optical-quality structures was infeasible; HBT's insight was that for *intensity* correlation, the optics didn't need to be diffraction-limited. just collect photons. the railway-mounted buckets did exactly that.

## the operating wavelength

Narrabri operated in the visible, around 420 nm (chosen for broadband, photoelectric-friendly response). the absence of need for precise optical phase made the wavelength choice a matter of detector sensitivity, not optical figure.

## what they measured

32 stars, primarily:

- **A-type and B-type stars**: angular diameters from 0.5 to 4 mas, including:
  - Sirius: 5.89 mas (Narrabri 1969); modern value 6.05 mas
  - Vega: 3.24 mas; modern 3.21 mas
  - Spica: 0.87 mas; modern 0.87 mas
  - Rigel: 2.4 mas; modern 2.7 mas

- **early supergiants** (Betelgeuse, Antares, Rigel) and **hot dwarfs**.
  Narrabri *missed* faint cool stars (M dwarfs, late giants) due to sensitivity limits.

## the precision

typical 1-3% precision on stellar diameters. for a few decades, these were the *best* stellar diameter measurements available — better than later amplitude interferometers until CHARA-class instruments of the 2010s.

## why it worked despite the atmosphere

HBT's master stroke: at the buckets, atmospheric phase is *destroyed* before the intensity is computed. so the buckets don't need to be optically accurate, beam paths don't need to be matched, atmospheric phase doesn't matter.

what *does* matter: time synchronization between the two buckets at $\lesssim 1$ ns (the inverse of the detection bandwidth). this is much easier than amplitude-interferometry phase synchronization.

## the limitations

three:

### 1. low sensitivity

intensity interferometry SNR scales as $V^2 \cdot N_{\rm photons}/\Delta\nu$ — much worse than amplitude. limit at Narrabri: $V \sim 6$ with reasonable integration times. a hundred bright stars accessible, all the rest invisible.

### 2. only $|\gamma|^2$

the technique gives the *modulus squared* of the visibility, not the complex visibility. so:
- stellar diameter measurable
- limb darkening detectable on the brightest stars
- imaging (in the modern sense) impossible without additional information

### 3. broad bandwidth needed

Narrabri detected a wide spectral band (~50 nm) to maximize photon flux. this hurt the temporal coherence: fringe visibility depended on integration over a range of source spectra. corrections required.

## the science legacy

Narrabri established:
- the first systematic catalog of stellar angular diameters
- the relationship between diameter and effective temperature for hot stars
- limb darkening (as a third-order correction in the visibility curve)
- multiple-component sources (binaries) for a few stars

these results stood as benchmarks for decades. modern amplitude interferometers (CHARA, VLTI) have refined them, but Narrabri's were the original.

## why it didn't continue

three reasons Narrabri shut down in 1972:

1. **funding**: research grant ran out
2. **sensitivity ceiling**: the technique simply couldn't be pushed to fainter stars
3. **rise of amplitude interferometry**: by the late 1970s, amplitude interferometry (with growing computer power for closure phase) became more attractive

intensity interferometry remained dormant in optical astronomy until the 2010s revival with IACT arrays.

## modern relevance

VERITAS (gamma-ray Cherenkov telescopes, ~17 m equivalent buckets) demonstrated intensity interferometry on bright stars in 2018-2020, confirming sensitivity limits and establishing the technique for the future CTA array. CTA (50+ telescopes spread over $\sim 1$ km) will be the largest intensity interferometer ever built, capable of stellar surface imaging on hundreds of bright stars.

## see also

- [Intensity interferometry concept](../../02_Zettel/Theory/interf/Intensity interferometry concept.md)
- [Hanbury Brown Twiss effect](../../02_Zettel/Theory/interf/Hanbury Brown Twiss effect.md)
- [Why intensity interferometry escapes atmospheric phase](../../02_Zettel/Theory/interf/Why intensity interferometry escapes atmospheric phase.md)
- [Sensitivity and modern revival](../../02_Zettel/Theory/interf/Sensitivity and modern revival.md)
- [Astronomical_Interferometry_MOC](../../00_Atlas/Astronomical_Interferometry_MOC.md)
