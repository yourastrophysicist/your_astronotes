---
layout: default
title: "Phase referencing"
type: zettel
created: 2026-08-04
moc:
  - Astronomical_Interferometry_MOC
tags:
  - zettel
  - theory
  - interferometry
---
> Phase referencing removes atmospheric distortions by rapidly nodding the telescope between the science target and a nearby bright calibrator.

---

## core physical intuition

![Phase referencing: rapidly nodding telescopes between science target and a nearby point-like calibrator to correct atmospheric phase drift.](Phase_referencing.svg)


As radio waves travel through the Earth's atmosphere, pockets of varying humidity or ionospheric density delay the wavefronts by unpredictable amounts. This destroys the phase coherence needed to synthesize an image. Because science targets are often too faint to measure these phase shifts directly, astronomers use phase referencing.

The telescope array periodically slews to a bright, point-like source located close to the target on the sky. Because the calibrator's position and structure are exactly known, any observed phase variations must be caused by the atmosphere and the instrument. The software calculates these phase errors, interpolates them over the time gap, and subtracts them from the science target's data. This anchors the target's position on the sky and restores the coherence of the signal.

---

## key derivation & equations

Successful phase referencing depends on three strict requirements. First, the calibrator must be physically close to the target on the sky so that the radio waves pass through roughly the same patch of atmosphere. In the optical regime this is the isoplanatic patch, while in radio it is usually within a few degrees. 

Second, the cycle time of switching between the target and calibrator must be faster than the atmospheric coherence time. The atmosphere must not change significantly while the telescope is looking away. 

Third, the calibrator must be structurally simple, ideally an unresolved point source, so that its intrinsic phase is uniformly zero.

---

## astrophysical context

Phase referencing is the standard, unavoidable technique for all connected-element radio interferometry including the VLA and ALMA. Without it, long integrations on faint sources would wash out into noise. In Very Long Baseline Interferometry, where baselines stretch across continents, the atmospheric variations are completely uncorrelated between antennas. There, the technique requires slightly longer switching cycles and is known as phase-reference VLBI, enabling microarcsecond astrometry.

---

## connections & zettel links

* parent moc: [Astronomical_Interferometry_MOC](../../00_Atlas/Astronomical_Interferometry_MOC.md)
* related zettels: [The phase problem in interferometry](../../02_Zettel/Theory/interf/The phase problem in interferometry.md), [Self-calibration](../../02_Zettel/Theory/interf/Self-calibration.md), [Isoplanatic patch](../../02_Zettel/Theory/interf/Isoplanatic patch.md), [Steps in radio interferometric observations](../../02_Zettel/Theory/interf/Steps in radio interferometric observations.md)
