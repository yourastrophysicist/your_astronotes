---
layout: default
title: "Wavefront sensors"
---

# Wavefront sensors

the *measurement* component of an AO system. takes the incoming wavefront from a guide star and reports a 2D map of the wavefront error (actually the gradient or the curvature, depending on type), 1000 times per second.

## the requirement

I need to measure the wavefront across a $D \sim 8$ m aperture sampled at $\sim r_0 \sim 60$ cm spacing (K-band) → $\sim 200$ measurements simultaneously. the WFS must extract these from a faint guide star and report them within the AO loop time ($\lesssim 1$ ms).

## three main types

### Shack-Hartmann WFS

the most common. an array of small lenslets divides the pupil into sub-apertures. each lenslet focuses its sub-aperture's light onto a small CCD region. the *position* of each spot on its CCD region tells you the local wavefront *gradient*.

```
        wavefront                lenslet array         CCD
   ━━━━━━━━━━━━━━━━━     ═══════════════════════     ━━━━━━━
        ↓                  /[]/[]/[]/[]/[]/         spots displaced
                            (one lenslet per         in proportion
                             subaperture)            to local tilt
```

advantages:
- simple, robust
- works on broad-band light (no spectral requirements)
- spot position is straightforward to compute

disadvantages:
- only measures gradients (must integrate to recover the wavefront)
- sub-aperture size limited by photon flux (need enough photons per spot per loop time)

most common in AO systems globally.

### Pyramid WFS

a glass pyramid sits at the focal plane. the four sides of the pyramid send light to four different regions of a downstream pupil image. comparing the brightness of the four pupil images at each pixel gives a measurement of the wavefront *gradient*.

advantages:
- much more sensitive to wavefront errors than Shack-Hartmann (~30× more flux-efficient)
- works on faint guide stars

disadvantages:
- more complex optical alignment
- requires modulating the pyramid (or the source) for linearity

emerging as the WFS of choice for extreme AO. used in MagAO-X, SCExAO, SPHERE.

### Curvature WFS

measures wavefront *curvature* (Laplacian) directly by comparing two slightly defocused images of the pupil. used by ESO's NACO (predecessor of NAOS-CONICA), the Subaru AO188.

advantages:
- can use bimorph deformable mirrors directly (curvature → curvature)
- fewer actuators needed for the same correction

disadvantages:
- noisier than Shack-Hartmann at low flux
- somewhat falling out of fashion

## how the WFS is plumbed

the WFS sees the *residual* wavefront (after the DM has done its current correction). this is closed-loop operation: WFS measures error, computer commands DM, mirror corrects, WFS measures *new* error, etc.

the WFS gets a fraction (typically 5-30%) of the science light, taken at a wavelength different from the science observation. for AO at K-band science, the WFS often runs at H-band (where photons are abundant for the WFS but the DM correction is for K).

## calibration

the WFS must be calibrated against a known wavefront source. typically:
- a flat wavefront from a fiber-fed source produces a reference set of WFS measurements
- artificial-aberration sources (e.g. a deformed mirror in test mode) give the WFS-DM matrix
- on-sky calibrators verify the loop performance

modern AO systems have automated calibration sequences run nightly.

## challenges

three key challenges:

### 1. faint guide stars

AO performance degrades with WFS noise. for $K = 12$ guide stars, photon counts are limited; for $K = 14$ they are very poor. modern systems use:
- pyramid WFS for sensitivity
- low-readout-noise detectors (EMCCDs, sCMOS)
- temporal averaging only when atmospheric conditions allow

### 2. atmospheric speed vs WFS rate

if the WFS runs at 1 kHz but the atmosphere has features evolving at 2 kHz, AO is undersampled — those fast features contribute to residual error. modern WFS run at 2-3 kHz to handle worst-case atmospheres.

### 3. spectral bandwidth

WFS sensitivity to the wavefront depends on knowing the wavelength. very broad-band WFS suffers from atmospheric refraction (red and blue light follow slightly different paths). modern systems use moderate bandwidths and compensate analytically.

## the Hartmann wavefront-reconstruction algorithm

from Shack-Hartmann sub-aperture spot positions $(x_i, y_i)$, recover the wavefront $\phi(\mathbf x)$:

1. compute slopes $s_x = x_i - x_{ref}$, $s_y = y_i - y_{ref}$ at each subaperture (relative to the reference spot positions for a flat wavefront)
2. these slopes are samples of $\nabla\phi$
3. use a least-squares or spectral inversion to integrate $\nabla\phi$ → $\phi$

the inversion is a sparse linear-system solve, doable in microseconds on modern FPGAs.

## see also

- [Adaptive optics](../../../02_Zettel/Theory/interf/Adaptive optics.md)
- [Deformable mirrors and tip-tilt](../../../02_Zettel/Theory/interf/Deformable mirrors and tip-tilt.md)
- [Guide stars and laser guide stars](../../../02_Zettel/Theory/interf/Guide stars and laser guide stars.md)
- [Astronomical_Interferometry_MOC](../../../00_Atlas/Astronomical_Interferometry_MOC.md)
