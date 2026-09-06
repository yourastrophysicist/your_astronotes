---
layout: default
title: "Aperture masking"
---

# Aperture masking

place a mask over the primary mirror of a single telescope, leaving only a few small holes. each hole pair acts as an interferometer baseline. the resulting image is the diffraction pattern of an *interferometer* — a sparse-aperture interferometer made from a single dish.

## the trick

a normal telescope of diameter $D$ uses the *full* aperture, integrating over many turbulent cells. but the wavefront is corrupted across the full aperture, so the long-exposure image is seeing-limited.

cover the aperture with a mask leaving only a few holes (typically 7-21), each of diameter $\lesssim r_0$. now each hole sees a *single coherent atmospheric patch*. the wavefront *across each hole* is approximately flat. the resulting image is the *interference pattern* of multiple coherent point sources at the holes — a multi-element interferometer.

## what we measure

each pair of holes $(i, j)$ samples a baseline $\mathbf B_{ij}/\lambda$ in the (u, v) plane. the corresponding *closure phase* and *visibility amplitude* are computed from the image.

the **closure phase** survives atmospheric phase corruption between holes (because it is the sum of three baselines around a triangle, with single-hole errors canceling). so aperture masking recovers genuine phase information about the source — unlike basic speckle interferometry.

## the typical setup

- mask: a non-redundant array of $N$ small (~$r_0$) holes — non-redundant means every pair has a unique baseline (so visibilities don't average over multiple pairs)
- exposure: short (10-100 ms) to freeze atmosphere
- number of frames: hundreds to thousands
- closure-phase measurement: $\binom{N}{3}$ closure triangles per frame

for $N = 7$ holes: 7 baselines, 35 closure triangles. for $N = 21$: 21 baselines, 1330 closure triangles.

## advantages over full-aperture imaging

three:

### 1. preserves closure phase

unlike speckle interferometry, aperture masking *preserves the full visibility phase information* via closure phases. so asymmetric sources can be imaged directly — no parity ambiguity.

### 2. sparse (u, v) coverage

with $N$ holes I get $N(N-1)/2$ unique baselines. design the mask non-redundantly to span the full aperture. the resulting (u, v) coverage is "interferometric" — better matched to image reconstruction algorithms than the full-aperture continuous coverage.

### 3. AO compatibility

aperture masking benefits from AO — the holes don't need to be at $r_0$ if AO has flattened the wavefront. with extreme AO, larger holes (and more of them) become possible.

## the typical instrument

- **NACO / SAM** at the VLT: 7-hole non-redundant masks, used for binary detection and YSO disks
- **NIRC2** at Keck: 21-hole masks, the workhorse for nearby YSO and binary studies
- **MIRC** at CHARA: 6-element interferometric beam combiner (effectively a 6-element mask spread over a 330m baseline)
- **SPHERE/IRDIS** at the VLT: aperture masking mode, complementary to coronagraphy

## the science

what aperture masking has revealed:
- close binary companions to nearby M dwarfs (separations $\sim 30$-100 mas)
- inner regions of YSO disks (Herbig Ae/Be stars)
- mass-loss morphologies of late-stage stars (Mira variables)
- exoplanet candidates (GJ 504 b, marginal)
- dust shells of Wolf-Rayet stars

resolution: $\sim \lambda/D = 30$-50 mas at K-band on a 10m telescope. comparable to small-scale interferometry, but on a single dish.

## the limit

aperture masking blocks most of the light — typical mask transmission is 5-15%. so it's a sensitivity-limited technique, working only on bright targets.

modern alternative: kernel-phase imaging. uses the *full* aperture but extracts closure-phase-like quantities from the AO-corrected images, getting all the photons. emerging as a competitor.

## comparison with full interferometry

| feature | aperture masking | true interferometer |
|---|---|---|
| baseline range | up to $D$ | up to $B_{\max} \gg D$ |
| sensitivity | high (single dish) | lower (sum of small dishes) |
| (u, v) coverage | static (no Earth rotation) | rich with Earth rotation |
| atmospheric immunity | closure phase | closure phase |
| typical resolution | $\lambda/D \sim 30$ mas at K | $\lambda/B \sim 1$-3 mas |

so aperture masking is "interferometry within a single telescope" — same algorithms, more flux per element, less resolution.

## see also

- [Speckle interferometry](../../../02_Zettel/Theory/interf/Speckle interferometry.html)
- [Speckle imaging algorithms](../../../02_Zettel/Theory/interf/Speckle imaging algorithms.html)
- [Bispectrum and triple correlation](../../../02_Zettel/Theory/interf/Bispectrum and triple correlation.html)
- [Phase closure](../../../02_Zettel/Theory/interf/Phase closure.html)
- [Aperture synthesis principle](../../../02_Zettel/Theory/interf/Aperture synthesis principle.html)
- [Astronomical_Interferometry_MOC](../../../00_Atlas/Astronomical_Interferometry_MOC.html)
