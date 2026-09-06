---
layout: default
title: "Large Binocular Telescope LBT"
---

# Large Binocular Telescope (LBT)

a unique twin-mirror telescope at Mt. Graham, Arizona. **two 8.4m primary mirrors** mounted on a single common altazimuth structure, separated by 6m center-to-center. operates as both a single-aperture imager (with the two mirrors used as one) and a Fizeau-mode interferometer with the 6m baseline.

## the architecture

- two primary mirrors of 8.4m diameter each, mounted side-by-side
- single mount tracks both mirrors together
- maximum effective collecting area: $2 \times 55 = 110$ m² (equivalent to a single 11.8m telescope)
- 6m baseline between mirror centers (giving Fizeau interferometric resolution)
- AO at each mirror (FLAO with adaptive secondaries)
- multiple instruments at different focal positions

## the dual capability

LBT can operate in two modes:

### Mode 1: Twin Telescope

each mirror feeds its own instrument independently. effectively two 8m telescopes on one mount, capable of simultaneous spectroscopy or imaging in different bands.

### Mode 2: Fizeau Interferometer

light from both mirrors is combined coherently in an image-plane Fizeau combiner. resulting "image" has the *resolution* of a 22.65m baseline (but only sampled at one orientation).

at H-band ($\lambda = 1.65$ μm), Fizeau resolution: $\theta = \lambda/22.65 = 15$ mas — between single-VLT and VLTI.

## the LBTI instrument

**LBT Interferometer**: the Fizeau combiner that exploits LBT's twin-mirror geometry. used for:
- **NOMIC** (10 μm imaging): mid-IR images at high resolution
- **LMIRcam** (3-5 μm imaging): L and M band
- **PHASECam**: near-IR fringe tracker

flagship science:
- **Asteroid satellite imaging**: searching for moonlets around main-belt asteroids
- **Thermal exo-zodi imaging**: searching for warm dust around nearby stars (planet-precursor environments)
- **Late-stage star mass-loss**: spatially resolved Wolf-Rayet wind structure

## the unique features

three things distinguish LBT:

### 1. single-mount operation

unlike a separated-element interferometer (VLTI, CHARA), LBT's two mirrors share one mount. no inter-telescope synchronization needed for tracking. simpler operation.

drawbacks: only one possible baseline (the fixed 6m), no Earth-rotation aperture synthesis (the geometry stays fixed relative to the mount), so (u, v) coverage is poor — single point per snapshot.

### 2. Fizeau imaging

fringes form in the image plane directly. no separate beam combiner needed — the two telescopes feed the same focus naturally. produces *direct images* with diffraction-limited resolution along the baseline.

drawbacks: image is anisotropic (high resolution in one direction, low in the other); only useful for sources with structure aligned with the baseline.

### 3. AO at each primary

each primary has its own adaptive secondary (FLAO system, 672 actuators). near-diffraction-limited performance at K-band — Strehl > 0.5 routinely.

with both AO systems running, the Fizeau combination produces high-Strehl images at the diffraction limit of the 22.65m equivalent baseline.

## the science niche

LBT is *not* trying to compete with VLTI/CHARA for general-purpose interferometry. its niche is **moderate-resolution thermal-IR imaging at high contrast**:

- LBTI's mid-IR coverage (3-13 μm) is excellent
- the 6m baseline is well-matched to nearby-star planet-formation studies
- single-mount operation is simpler for time-critical observations (e.g. transient events)

## the alternative use: as a 22.65m collecting area

when not operating in Fizeau mode, LBT can *coherently* combine light from both mirrors (with delay matching) to produce a single PSF — the PSF of an effective 22.65m telescope (along the baseline). this gives:

- $\sim 2\times$ the collecting area of a single 8m
- diffraction-limited PSF in one direction (along the baseline)

for some imaging programs (high-contrast direct imaging of exoplanets), this is the optimal mode.

## the future

LBT continues to be upgraded:
- newer fringe trackers
- improved cryogenic detectors for LBTI/NOMIC
- planned integration with the Magellan Adaptive Optics system

LBT will remain an important instrument for thermal-IR astronomy and Fizeau imaging through the 2030s.

## see also

- [Components of a modern interferometer](../../../02_Zettel/Theory/interf/Components of a modern interferometer.md)
- [VLTI Very Large Telescope Interferometer](../../../02_Zettel/Theory/interf/VLTI Very Large Telescope Interferometer.md)
- [CHARA array](../../../02_Zettel/Theory/interf/CHARA array.md)
- [Adaptive optics](../../../02_Zettel/Theory/interf/Adaptive optics.md)
- [Astronomical_Interferometry_MOC](../../../00_Atlas/Astronomical_Interferometry_MOC.md)
