---
layout: default
title: "Phase closure"
type: zettel
created: 2026-08-04
moc:
  - Astronomical_Interferometry_MOC
tags:
  - zettel
  - theory
  - interferometry
---
> *by summing the phases around a triangle of baselines, local atmospheric errors perfectly cancel out, recovering intrinsic structural information of the source*

---

## core physical intuition

![Phase closure: summing visibility phases around a closed triangle of baselines cancels out individual telescope phase errors.](Phase_closure.jpg)


Because the atmosphere adds random phase delays above each individual telescope, the absolute phase of any single baseline is corrupted. However, we can outsmart the atmosphere by forming closed loops of baselines. 

Imagine a triangle of three telescopes: A, B, and C. If a blob of atmosphere over telescope A delays the signal, it shifts the phase of the A-B baseline in one direction, but it shifts the phase of the C-A baseline in the exact opposite direction by the exact same amount. If we add the measured phases of all three baselines together in a loop (A to B, B to C, C to A), every antenna-specific error is added once and subtracted once. The atmospheric noise perfectly cancels itself out, leaving a pure, uncorrupted number that depends only on the true structure of the astronomical source.

---

## key equations

Let the measured phase on baseline $ij$ be corrupted by atmospheric errors $\phi_i$ and $\phi_j$:

$$ \phi_{ij}^{\rm meas} = \phi_{ij}^{\rm true} + \phi_i - \phi_j $$

The closure phase $\Phi_C$ for the triangle of antennas 1, 2, and 3 is the sum of the three measured baseline phases:

$$ \Phi_C = \phi_{12}^{\rm meas} + \phi_{23}^{\rm meas} + \phi_{31}^{\rm meas} $$

Substituting the expressions with errors:

$$ \Phi_C = (\phi_{12}^{\rm true} + \phi_1 - \phi_2) + (\phi_{23}^{\rm true} + \phi_2 - \phi_3) + (\phi_{31}^{\rm true} + \phi_3 - \phi_1) $$

Notice that $+\phi_1$ and $-\phi_1$ cancel, as do the errors for antennas 2 and 3. We are left with:

$$ \Phi_C = \phi_{12}^{\rm true} + \phi_{23}^{\rm true} + \phi_{31}^{\rm true} $$

For any point source or perfectly symmetric source, the true closure phase is always exactly zero. A non-zero closure phase is a direct, robust detection of source asymmetry.

---

## astrophysical context

Closure phase is the saving grace of environments where the atmosphere cannot be easily calibrated. In optical/infrared interferometry (like VLTI's GRAVITY instrument), the 4-telescope array provides 4 independent closure phases, which are critical for detecting faint asymmetric structures like exoplanets or the binary nature of stars. In the radio regime, closure phases were essential for the Event Horizon Telescope (EHT). Because the EHT operates across the entire globe at high frequencies, the atmospheric phase errors are severe. The robust non-zero closure phases were key mathematical proof that the emission around the supermassive black hole in M87 was an asymmetric ring.

---

## connections & zettel links

* parent moc: [Astronomical_Interferometry_MOC](../../00_Atlas/Astronomical_Interferometry_MOC.md)
* related zettels: [The phase problem in interferometry](../../02_Zettel/Theory/interf/The phase problem in interferometry.md), [Closure amplitude](../../02_Zettel/Theory/interf/Closure amplitude.md), [Self-calibration](../../02_Zettel/Theory/interf/Self-calibration.md), [Bispectrum and triple correlation](../../02_Zettel/Theory/interf/Bispectrum and triple correlation.md)
