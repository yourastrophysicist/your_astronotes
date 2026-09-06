---
layout: default
title: "COAST Cambridge Optical Aperture Synthesis Telescope"
---

# COAST Cambridge Optical Aperture Synthesis Telescope

a small but historically pivotal interferometer at Cambridge's Mullard Radio Astronomy Observatory. **first instrument to demonstrate true optical aperture synthesis with closure phases** (1996), proving that the techniques perfected at radio wavelengths could work in the optical.

## the architecture

- **5 small telescopes** (40 cm primary mirrors), arranged on a triangular array
- **maximum baseline**: ~50 m
- **wavelength**: visible (0.6-1.6 μm)
- **delay lines**: in vacuum tunnels
- **beam combiner**: pairwise Michelson combinations
- operated 1991-2010 (decommissioned)

## the historical importance

before COAST, optical interferometers had measured visibility curves (showing source diameters) but had not produced *images*. radio interferometers had been making images for decades using closure phases.

COAST closed the gap by demonstrating in 1996:
- closure phases at three baselines from three telescopes
- image reconstruction using bispectrum and CLEAN-like algorithms
- first true optical aperture synthesis image: the binary star Capella, with separation ~50 mas

this proved the method was practical at optical wavelengths. it opened the door to all subsequent imaging interferometers (CHARA, IOTA, NPOI, GRAVITY).

## the technical innovations

three first-time-in-optical demonstrations:

### 1. closure phase tracking

real-time computation of the closure phase at three baselines, with calibration on reference stars. atmospheric phase corruption was canceled out, leaving only source phase.

### 2. fringe tracking with array of telescopes

automated fringe tracking across multiple baselines simultaneously. essential for closure-phase observations.

### 3. image reconstruction

Bayesian/regularized image reconstruction from sparse (u, v) data + closure phases. the algorithms developed at COAST became templates for modern instruments.

## the science

modest by modern standards (small dishes, short baselines, visible wavelengths) but pioneering:

- imaging Capella (binary, $\theta_{\rm sep} = 50$ mas) — first true optical image
- diameter measurements of bright supergiants
- detection of close binaries
- detection of stellar oblateness

## why it was decommissioned

three reasons:
1. UK funding pressures
2. larger, better-equipped instruments (CHARA, VLTI) had eclipsed COAST's capabilities
3. the science niche had shifted to faint targets (which need bigger collecting areas)

the COAST team's expertise migrated to MIRC at CHARA, where many of the same researchers continued the science. so COAST's legacy lives on in CHARA's instruments.

## the lesson

COAST shows that *demonstrating a technique* often precedes its scientific dominance. the 1996 image of Capella was scientifically modest but technically revolutionary. modern interferometric science is built on COAST's proof-of-concept.

## see also

- [Components of a modern interferometer](../../../02_Zettel/Theory/interf/Components of a modern interferometer.html)
- [CHARA array](../../../02_Zettel/Theory/interf/CHARA array.html)
- [Phase closure](../../../02_Zettel/Theory/interf/Phase closure.html)
- [Bispectrum and triple correlation](../../../02_Zettel/Theory/interf/Bispectrum and triple correlation.html)
- [Astronomical_Interferometry_MOC](../../../00_Atlas/Astronomical_Interferometry_MOC.html)
