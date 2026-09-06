---
layout: default
title: "Components of a modern interferometer"
---

# Components of a modern interferometer

a modern optical/IR interferometer is a complex chain of subsystems. each addresses one specific challenge. understanding the chain, end-to-end, is what makes the difference between a passive textbook reading and a working knowledge of how VLTI/CHARA actually operate.

## the chain (light path)

```
SOURCE →
  TELESCOPE (collect light, optionally AO-corrected) →
  BEAM LINE (transport over baseline) →
  DELAY LINE (path-length equalization) →
  BEAM COMBINER (produce interference) →
  DETECTOR (record fringes) →
  CORRELATOR (compute visibilities)
```

each step has real engineering challenges. lose the alignment at any point and the fringe vanishes.

## telescopes

![Core architecture of a modern optical interferometer: siderostats, optical delay lines, beam combiners, and metrology lasers.](Components_of_a_modern_interferometer.jpg)


primary collecting elements. for VLTI: 4 × 8m (UTs) + 4 × 1.8m (ATs). for CHARA: 6 × 1m. for ALMA: 50+ × 12m.

key requirements:
- **wavefront quality**: AO-corrected (or naturally good seeing) to maintain coherent wavefront across each aperture
- **pointing stability**: sub-arcsecond, since the source must remain in the field of view
- **fast tip-tilt correction**: eliminate gross atmospheric image motion before sending light onward
- **photon throughput**: minimize losses (each surface costs $\sim 5\%$ of light)

## beam lines

transport the light from each telescope to the central beam-combiner facility. typical:

- VLTI: vacuum-pipe beam tunnels (~50 m)
- CHARA: aluminum tubes ($\sim 100$-300 m)
- ALMA: not applicable (heterodyne, signals as electrical voltages)

requirements:
- **minimal turbulence**: vacuum or controlled atmosphere inside
- **stable temperature**: avoid thermal-induced path-length changes
- **clean optics**: dust contaminates throughput

## delay lines

the most distinctive component of optical interferometry. optical paths from each telescope must be equal at the beam combiner — within the coherence length $\ell_c \sim 10$-100 μm. since the geometric paths differ as the source moves across the sky, *active delay lines* compensate.

design: a movable mirror trolley on a precision rail. the mirror is driven to maintain the path-length match in real time, tracking the source.

requirements:
- **precision**: $\sim 1$ μm positioning accuracy
- **range**: meters of travel (to handle source motion)
- **speed**: compensate for atmospheric delay drift (mm-scale per second)

VLTI: 8 delay lines, each in a 65 m vacuum tunnel with sub-μm precision. CHARA: 6 delay lines, similar specifications.

## beam combiners

where the magic happens. light from two (or more) telescopes is *physically combined* on a partially-reflective surface or in a single-mode fiber, producing interference fringes.

types:

### Michelson beam combiner

two beams cross at a half-silvered mirror. transmitted + reflected = two output beams. one fed to detector A, the other to detector B. fringes encoded as intensity differences between A and B.

### Fizeau beam combiner

beams from each telescope are kept separate, focused through a common image-plane optic. fringes form in the image plane via diffraction (like the original Michelson stellar interferometer). useful for direct imaging.

### single-mode fiber combiner

each telescope's light is coupled into a single-mode optical fiber. fibers bring the light to a common point and combine via a fiber coupler. *all* spatial-mode mismatches between telescopes are filtered out by the fiber's modal filtering — improves visibility precision dramatically.

instruments: GRAVITY at VLTI, MIRC-X at CHARA, MATISSE at VLTI.

### integrated optics

a chip with optical waveguides etched on silica. compact, stable, multi-baseline-capable. modern small-scale beam combiners use IO.

## fringe trackers

a fast, sensitive instrument that locks onto the fringe in real time, compensating for atmospheric piston. operates faster than $\tau_0 \sim$ ms.

requirements:
- **very fast detector**: kHz frame rate
- **bright source**: enough photons per integration to see fringes
- **optical-fiber feed**: simplifies the geometry

VLTI's fringe tracker (originally PRIMA, now FINITO+GRAVITY-FT) lets the science instrument integrate longer than $\tau_0$ on the locked fringe.

## detectors

count photons or measure intensity. for IR: HgCdTe arrays (HAWAII, SAPHIRA, etc.) for K-band; AlGaAs / Si for visible.

requirements:
- **fast readout**: kHz for fringe tracking
- **low noise**: read noise < 1 electron for faint sources
- **high quantum efficiency**: > 80%

## correlator

does the math: from intensity time-series, compute the *visibility* (complex coherence) at each baseline. for $N$ telescopes, $N(N-1)/2$ baseline correlations per spectral channel.

modern correlators are FPGA- or GPU-based. ALMA's correlator handles 8 GHz of bandwidth across 64 antennas — enormous data rates.

## metrology

a feedback system that monitors the *internal* path lengths of the interferometer (not the atmospheric piston, but mechanical drifts in the delay lines, beam tubes, etc.). uses a separate laser interferometer to track each component's position.

VLTI: PRIMA-FSU metrology measures internal paths to nm precision. without metrology, mechanical creep would drift the fringe position by mm in minutes.

## all together

the chain works because each component handles one specific problem:

- atmosphere → AO at each telescope + fringe tracker
- geometric path differences → delay lines
- atmospheric piston → fringe tracker + closure phase
- mechanical drift → metrology
- visibility computation → correlator
- science observation → integrated longer than $\tau_0$ thanks to fringe locking

a modern interferometer is *systems engineering on a heroic scale*. understanding any one component without the others is an incomplete picture.

## see also

- [Delay lines and path-length equalization](../../02_Zettel/Theory/interf/Delay lines and path-length equalization.html)
- [Beam combiners](../../02_Zettel/Theory/Beam combiners.html)
- [Fringe tracking](../../02_Zettel/Theory/interf/Fringe tracking.html)
- [VLTI Very Large Telescope Interferometer](../../02_Zettel/Theory/interf/VLTI Very Large Telescope Interferometer.html)
- [CHARA array](../../02_Zettel/Theory/interf/CHARA array.html)
- [Astronomical_Interferometry_MOC](../../00_Atlas/Astronomical_Interferometry_MOC.html)
