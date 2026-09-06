---
layout: default
title: "Stellar surface imaging"
---

# Stellar surface imaging

beyond just measuring diameters: making *images* of stellar surfaces with multi-mas resolution. detection of starspots, hotspots, granulation patterns, oblateness from rotation, gravity darkening. CHARA's MIRC-X is the workhorse; VLTI's GRAVITY adds capability for cooler stars.

## what makes a stellar image

a typical resolved star produces a 2D visibility curve (vs. baseline + orientation) that contains *spatial information* about the surface. with enough (u, v) coverage:

1. image reconstruction algorithms (CLEAN, BSMEM, MIRA) recover a 2D brightness map
2. typical resolution: $\sim \lambda/B$ on the surface
3. complex sources (spotted stars, oblate, multi-component) are accessible

## the typical results

### Altair (rapid rotator)

CHARA observations (Monnier et al. 2007): Altair rotates so fast that it is significantly oblate (15% flattened). its pole is hotter than the equator by ~$1500$ K (gravity darkening). these are *directly imaged* in the interferometric maps.

### Vega

CHARA and VLTI observations: also a rapid rotator (~30% of breakup), pole-on view. limb structure consistent with mild gravity darkening. circumstellar dust ring detected at $\sim 70$ mas radius.

### Betelgeuse

a red supergiant with surface variability:
- giant convective cells producing irregular brightness patches
- 2019-2020 "great dimming": detected as a large dark spot covering the southern hemisphere
- continuous monitoring shows hot/cool spots changing on monthly timescales

interferometric imaging tracks these features in detail. CHARA + VLTI data combine to give the most complete picture.

### CD-58° 4607 (eclipsing binary)

ALMA Band 7 imaging directly resolves the eclipsing pair. binary geometry confirmed. dynamical masses precise to <2%.

## the science

stellar surface imaging probes:

### 1. rotation and oblateness

direct measurement of pole-to-equator flattening. for $V \sin i$ measurements:
- $\sin i$ from the geometry (image)
- $V$ from the spectroscopic line broadening
- $V$ from the equatorial radius (image)

### 2. spots and activity

starspot positions and lifetimes give:
- magnetic-field activity cycles
- differential rotation
- chromospheric structure

### 3. surface convection

for cool giants, large convective cells can be resolved. comparison with hydrodynamic simulations tests the basic physics of stellar convection.

### 4. mass loss

near-surface dust formation in cool giants/supergiants is directly imaged. Betelgeuse's dust shells, CW Leo's dust torus, Mira's surrounding envelope.

## the key requirements

for high-fidelity surface imaging:

- **many baselines**: need (u, v) coverage to recover 2D structure. CHARA's 6 telescopes give 15 baselines per snapshot, enabling decent imaging
- **closure phases**: needed to recover asymmetric structure (spot positions, gravity darkening)
- **multiple orientations**: Earth rotation fills the (u, v) plane over a night
- **high SNR**: imaging requires more visibility-amplitude precision than diameter measurement

## the algorithms

modern imaging uses regularized maximum likelihood (RML) methods:
- **MIRA**: Bayesian approach with smoothness prior
- **BSMEM**: maximum-entropy method
- **SQUEEZE**: sparsity-prior method
- **eht-imaging**: modern Bayesian framework

different methods give consistent results when the data are good. systematic differences flag noisy or ill-constrained features.

## the resolution limits

CHARA's longest baseline (330 m) at H-band: $\theta \sim 0.4$ mas — comparable to the angular diameter of bright giant stars at 100 pc. so individual surface features (spots, $\sim 5\%$ of stellar radius) can be resolved.

for main-sequence stars at 10 pc with $\theta \sim 1$ mas: resolution is $0.4/1 = 40\%$ of the disk. images are fuzzy but informative.

## the future

planned improvements:
- CHARA upgrades: longer baselines (proposed), better detectors
- VLTI/MATISSE: imaging at thermal-IR wavelengths (better for cool/dusty stars)
- ELT/MICADO + ELT/HARMONI: ELT imaging at H/K band could complement interferometry for nearby giants
- LBTI imaging: Fizeau-mode imaging of stars

## the legacy

stellar surface imaging is *the most important new science* enabled by modern optical interferometry. it has revealed:
- stars are not perfect disks
- surfaces are dynamic (variable spots and convection)
- atmosphere physics is accessible empirically

before interferometric imaging, stellar surfaces were inferred indirectly (from rotation curves, line profiles, photometric variations). now we can *see* them.

## see also

- [Stellar diameters and limb darkening](../../../02_Zettel/Theory/interf/Stellar diameters and limb darkening.html)
- [CHARA array](../../../02_Zettel/Theory/interf/CHARA array.html)
- [VLTI Very Large Telescope Interferometer](../../../02_Zettel/Theory/interf/VLTI Very Large Telescope Interferometer.html)
- [Phase closure](../../../02_Zettel/Theory/interf/Phase closure.html)
- [Astronomical_Interferometry_MOC](../../../00_Atlas/Astronomical_Interferometry_MOC.html)
