---
layout: default
title: "Deformable mirrors and tip-tilt"
---

# Deformable mirrors and tip-tilt

the *correction* component of an AO system. once the wavefront sensor reports the residual wavefront error, an actuator-driven mirror physically reshapes itself to compensate. modern DMs have hundreds to thousands of independent actuators, each adjustable on microsecond timescales.

## why two mirrors

the wavefront error has two distinct components:

- **tip-tilt**: the bulk slope of the wavefront, equivalent to angular displacement of the image. accounts for ~50% of total wavefront variance in typical seeing
- **higher-order aberrations**: focus, coma, astigmatism, and spatial Fourier modes up to the WFS resolution

these are corrected by separate mirrors:

### tip-tilt mirror

a small (~100 mm), fast (~1 kHz) mirror with two-axis tilt. corrects the bulk image motion. simple and crucial. without tip-tilt correction, the long-exposure image wanders by $\sim \lambda/r_0 \sim 1''$ — wiping out any higher-order correction.

every AO system has a tip-tilt mirror. for cheap AO upgrades, a tip-tilt mirror alone reduces the seeing FWHM by ~50% and is much easier than a full DM.

### deformable mirror

a thin, deformable surface with many actuators behind it. each actuator pushes/pulls a small region of the mirror, sculpting it to the desired shape. typical:

- **MEMS DMs**: microelectromechanical, hundreds to thousands of actuators on a single chip, used in extreme AO (SPHERE)
- **piezo-stack DMs**: piezoelectric stacks behind a continuous facesheet, ~few hundred actuators, used in classical AO (NAOS)
- **bimorph DMs**: two layers of piezoelectric ceramic, gives smooth curvature actuators, used in curvature AO
- **adaptive secondary mirrors**: the secondary of a telescope itself is the DM. avoids extra optical surfaces. used at LBT, MMT

actuator counts:
- classical AO (8m telescopes, K-band): 60-200 actuators
- extreme AO: 1000-3000 actuators
- ELT first-light: 6000-9000 actuators

actuator spacing is set to match $r_0$ at the science wavelength: $d \sim r_0$. so K-band AO with $r_0 \sim 60$ cm needs actuators every ~10 cm in the pupil image — moderate density. visible AO with $r_0 \sim 10$ cm needs much denser actuator grids.

## the speed requirement

DM actuators must respond within $\tau_0 \sim$ ms. typical DM bandwidths:

- piezo: 10-50 kHz mechanical, easily handles 1 kHz AO loop
- MEMS: 10-30 kHz, easily handles 1 kHz
- magnetic-fluid (some adaptive secondaries): few kHz, marginal for visible AO

mechanical bandwidth is rarely the limit; the WFS readout and the loop computer are usually the bottlenecks.

## the actuator geometry

the actuator pattern (square grid, hex grid, ring) sets the spatial modes the DM can produce. typical:

- **square grid**: $N \times N$ actuators. simple to address, slightly less efficient
- **hex grid**: more uniform spatial sampling, what most modern DMs use

for $N$ actuators, the DM can correct spatial frequencies up to $\sim N$ cycles per pupil. higher-frequency modes ("fitting error") are uncorrected.

## the influence function

each actuator's effect on the mirror surface is described by an *influence function* $f_i(\mathbf x)$. typical:
- **continuous facesheet**: each actuator pushes a small Gaussian-shaped bump
- **segmented**: each segment moves rigidly, with discontinuities at boundaries

the total mirror shape:
$$\phi_{\rm DM}(\mathbf x) = \sum_i a_i f_i(\mathbf x)$$

where $a_i$ are the actuator commands. AO computer's job: solve for the $a_i$ that best cancels the measured wavefront error.

## the WFS-DM matrix

the AO control problem reduces to:
$$\mathbf s = M \mathbf a$$

with $\mathbf s$ the WFS measurement (slopes), $\mathbf a$ the actuator commands, $M$ a known matrix from calibration. invert: $\mathbf a = M^+ \mathbf s$ ($M^+$ pseudoinverse).

calibrating $M$: poke each actuator one at a time, measure the WFS response, fill in a column of $M$. modern systems do this automatically nightly.

## the modal decomposition

instead of working in the actuator basis, project everything onto **Zernike polynomials** (or similar): tip, tilt, focus, astigmatism, coma, ... .

advantages:
- physical interpretation (each mode is a named aberration)
- some modes are easier to correct than others; tune the loop gain per mode
- low-order modes have most of the variance, so partial correction often gets you 80% of the way

## challenges with very thin facesheets

modern MEMS and adaptive-secondary mirrors push to very thin (~100 μm) facesheets to enable fast response. challenges:
- **stiction**: actuators getting stuck at high stroke
- **hysteresis**: response depends on history
- **aging**: long-term drift in actuator response

solutions: closed-loop calibration, redundant actuators, replaceable mirror sections.

## see also

- [Adaptive optics](../../../02_Zettel/Theory/interf/Adaptive optics.html)
- [Wavefront sensors](../../../02_Zettel/Theory/interf/Wavefront sensors.html)
- [Guide stars and laser guide stars](../../../02_Zettel/Theory/interf/Guide stars and laser guide stars.html)
- [Astronomical_Interferometry_MOC](../../../00_Atlas/Astronomical_Interferometry_MOC.html)
