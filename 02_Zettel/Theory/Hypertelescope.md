---
layout: default
title: "Hypertelescope"
---

# Hypertelescope

Antoine Labeyrie's 1996 concept: take a *sparse-aperture* interferometer and make it act like a *direct imager* by densifying the pupil. a single image plane, no Fourier inversion, no deconvolution. proposed for next-generation space-based imaging.

## the problem with sparse arrays

a sparse-aperture interferometer (like VLTI or CHARA) has a "dirty beam" with many sidelobes. the bright central peak contains only a small fraction of the total energy; the rest is in sidelobes. **crowding** limits how many sources can be cleanly imaged.

direct imaging — dropping each photon onto its proper position in the focal plane — would have no such limitation. but a sparse array's image plane has the sparse-aperture PSF, with all those sidelobes.

## Labeyrie's idea

![Labeyrie's hypertelescope concept: pupil densification concentrating light from a sparse array into direct high-contrast images.](Hypertelescope.jpg)


after the light passes through the sub-apertures, *re-image* it through a "pupil densifier" — an optical system that compresses the sub-apertures into a tightly-packed array. the new "densified pupil" has sub-apertures touching each other.

now the diffraction pattern from this dense pupil is *much* more Airy-disk-like: a tight central peak and very few sidelobes.

result: the focal-plane image is a near-direct image, like from a single dish of equivalent size.

## the math

let the original sparse array have $N$ sub-apertures of diameter $d$ at positions $\mathbf r_i$, with the longest baseline $B$. the original PSF:

$$\text{PSF}_{\rm sparse}(\mathbf l) \propto |\sum_i \tilde A_i(\mathbf l) e^{-2\pi i \mathbf r_i \cdot \mathbf l/\lambda}|^2$$

with $\tilde A_i$ each sub-aperture's amplitude pattern.

after pupil densification (sub-apertures rearranged at positions $\mathbf r_i'$ with smaller spacings):

$$\text{PSF}_{\rm hyper}(\mathbf l) \propto |\sum_i \tilde A_i(\mathbf l) e^{-2\pi i \mathbf r_i' \cdot \mathbf l/\lambda}|^2$$

the *fringe envelope* (set by $A_i$) is the same — the original sparse-aperture diffraction pattern. but the *fringe pattern* (set by $\mathbf r_i'$) is much narrower because the sub-apertures are now packed close together.

result: a sharp central peak (set by the densified pupil ≈ a single small aperture) embedded in the original sparse-aperture envelope.

## the field of view

the densified pupil sets the *field of view*: $\theta_{\rm FoV} \sim \lambda/D_{\rm dense}$ where $D_{\rm dense}$ is the size of the densified pupil. for densified $D = 10$ m: $\sim 0.1''$ FoV at K-band.

within this FoV, sources are imaged directly with the *resolution* of the original sparse array (set by $B$). outside, sources are heavily suppressed.

so the hypertelescope is *field-limited* but *high-fidelity* in its limited field.

## the comparison

| feature | sparse array | hypertelescope |
|---|---|---|
| imaging | (u, v) plane, requires CLEAN | direct image |
| field of view | wide ($\lambda/d$) | narrow ($\lambda/D_{\rm dense}$) |
| resolution | $\lambda/B$ | $\lambda/B$ |
| sidelobes | many | few |
| crowding limit | severe | none (within FoV) |
| status | mature (CHARA, VLTI) | conceptual prototypes |

## the proposed instruments

several hypertelescope concepts:

### CARLINA

a cable-suspended hypertelescope with a fixed primary array of small mirrors arranged on a parabolic surface. moves on hour cables to track sources. proposed for arc-minute-scale imaging at sub-mas resolution.

prototype tested at Caussols, France. proof-of-concept, never built at full scale.

### OVLA (Optical Very Large Array)

50+ small telescopes arranged in a sparse array, with pupil densification at the central focus. concept for direct imaging of stellar surfaces.

### Lunar hypertelescope

far-side of the Moon: free-fall conditions, no atmosphere, kilometer-scale baselines feasible. proposals for $10^{-5}$ arcsec imaging — resolved exo-Earths.

still entirely conceptual.

## the ground vs space question

ground-based hypertelescopes face:
- atmospheric phase corruption across the array (need AO at every element)
- mechanical instability at sub-μm precision over kilometer scales
- vibration from wind and seismic activity

these are very hard. space-based hypertelescopes (formation-flying small telescopes) avoid these issues but have their own challenges (formation control, deployment).

so far, no full-scale hypertelescope has been built. the technique is theoretically promising but technologically extremely demanding.

## the legacy

Labeyrie's hypertelescope idea has influenced:
- modern coronagraph designs that use pupil reshaping
- space-mission concepts for exoplanet imaging (LIFE, Darwin successors)
- thinking about how to image complex extended sources at high resolution

even if hypertelescopes are never built at scale, the concept frames the discussion of "direct imaging" alternatives to sparse-aperture interferometry.

## see also

- [Nulling interferometry](../../02_Zettel/Theory/interf/Nulling interferometry.html)
- [Apodization](../../02_Zettel/Theory/interf/Apodization.html)
- [Crowding limitation](../../02_Zettel/Theory/interf/Crowding limitation.html)
- [Future ground-based optical](../../02_Zettel/Theory/interf/Future ground-based optical.html)
- [Astronomical_Interferometry_MOC](../../00_Atlas/Astronomical_Interferometry_MOC.html)
