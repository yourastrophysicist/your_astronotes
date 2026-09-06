---
layout: default
title: "Components of a modern interferometer continued"
---

# Astrometry with interferometers

a brief survey of how interferometric instruments achieve sub-mas position precision, the science enabled by it, and major astrometric programs.

## the precision

modern interferometric astrometry achieves:
- **VLBI** (cm radio): $\sim 0.1$ mas absolute, $0.01$ mas relative
- **VLTI/GRAVITY**: $\sim 50$ μas relative
- **EHT**: ~$\sim 1$ μas relative (still being calibrated)
- **future SKA + ngVLA**: ~$\sim 0.05$ mas

these are *orders of magnitude* better than optical astrometry (Gaia: ~10 μas for the brightest stars, much worse for faint).

## the science enabled

### 1. dynamical masses

precise binary-star astrometry → orbital parameters → dynamical masses. precision $\sim 1\%$ for many systems (see [Binary star orbits](../../02_Zettel/Theory/interf/Binary star orbits.html)).

### 2. cosmological distance ladder

geometric distances:
- pulsar parallaxes (VLBI) for the *primary* distance scale
- maser disks (NGC 4258) for *galactic* geometric distances
- combined → independent calibration of $H_0$

### 3. precise positions of compact objects

VLBI of pulsars, AGN, and other compact radio sources sets the **International Celestial Reference Frame** — the most precise angular coordinate system in astronomy. anchored to ~30 pulsars and ~3000 AGN.

### 4. gravitational-wave electromagnetic followup

precise localization of neutron-star mergers (LIGO triangulation: ~10s of square degrees; VLBI follow-up: ~mas) enables identification of host galaxies and afterglow physics.

### 5. exoplanet astrometry

**Gaia** mission has detected hundreds of exoplanet candidates via precise stellar astrometry (proper motion + parallax). complemented by ground-based VLTI for nearby targets.

## the next-generation programs

### ICRF3 (current)

the latest International Celestial Reference Frame, 2018, based on VLBI of 4536 sources. ~30 μas precision per source position.

### ICRF4 (planned ~2030)

next-generation ICRF, incorporating SKA + ngVLA observations, more sources, higher precision.

### Gaia (current)

ESA's optical astrometry mission. all-sky positions and parallaxes for ~$10^9$ stars at ~10 μas precision. pioneered modern stellar astrometry. data releases continue through 2030+.

future: **GaiaNIR** and other proposed missions for IR astrometry, complementary to Gaia.

### SIM-Lite / NEAT

proposed (or canceled) space-based microarcsecond astrometric missions. SIM was canceled in 2010; concepts continue with NEAT (proposed 2030+).

## see also

- [Binary star orbits](../../02_Zettel/Theory/interf/Binary star orbits.html)
- [Pulsar interferometry](../../02_Zettel/Theory/interf/Pulsar interferometry.html)
- [Cosmological masers](../../02_Zettel/Theory/interf/Cosmological masers.html)
- [Galactic Center Sgr A and S-stars](../../02_Zettel/Theory/interf/Galactic Center Sgr A and S-stars.html)
- [Astronomical_Interferometry_MOC](../../00_Atlas/Astronomical_Interferometry_MOC.html)
