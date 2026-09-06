---
layout: default
title: "Isoplanatic patch"
---

# Isoplanatic patch

the angular region over which the atmospheric distortion is approximately the same. inside the patch, two stars see the *same* turbulent column and the AO correction (or differential image-motion subtraction) works for both. outside the patch, they see *independent* atmospheric paths, and corrections decouple.

## definition

the **isoplanatic angle** $\theta_0$ is the angular separation at which the rms wavefront difference between two directions is 1 rad. derived from the height-resolved $C_n^2$ profile:

$$\theta_0 = \left[2.91 \, k^2 \int C_n^2(z) \, z^{5/3} \, dz\right]^{-3/5}$$

note the extra factor of $z^{5/3}$ in the integrand compared to the $r_0$ formula. so $\theta_0$ is dominated by *high-altitude* turbulence (large $z$), while $r_0$ is dominated by everything along the path.

## typical values

| wavelength | $\theta_0$ (good site) |
|---|---|
| 500 nm (V) | 2-3 arcsec |
| 1.6 μm (H) | 8-15 arcsec |
| 2.2 μm (K) | 12-25 arcsec |
| 10 μm (N) | 30-60 arcsec |

scales as $\theta_0 \propto \lambda^{6/5}$, like $r_0$ and $\tau_0$.

## why it matters for AO

AO uses a **guide star** to measure the wavefront. the correction is then applied to *all* light coming through the telescope. but only stars within $\theta_0$ of the guide star benefit fully — outside, the wavefront is uncorrelated and the AO correction is wrong.

for a science target, I need a bright enough star within $\theta_0$ to use as a guide. at visible wavelengths, $\theta_0 \sim 2''$ is *very* small — only $\sim 1\%$ of the sky has a suitable bright star nearby. at K-band, $\theta_0 \sim 15''$ — sky coverage is much better.

solution: **laser guide stars**. shine a laser at the sodium layer (90 km up) to create an artificial guide star. but lasers don't help with **tip-tilt** (the wavefront's bulk motion, which laser-induced light doesn't see), so a natural guide star (faint) is still needed for tilt.

## why it matters for interferometry

for **phase referencing** in radio interferometry, I switch between target and calibrator. the calibrator must be within the isoplanatic angle (so the atmospheric path is the same) for the calibration to work.

at radio (cm wavelengths), $\theta_0$ is much larger — typically a degree or more. so phase calibrators within a degree of the target are usually available.

at sub-mm/optical, $\theta_0$ is smaller, and *off-axis fringe tracking* (using a star within $\theta_0$ as a fringe reference) becomes essential. VLTI's GRAVITY uses a "dual-feed" system with two inputs: one for the science target, one for an offaxis fringe-tracking star within ~10".

## the patch is anisotropic

the isoplanatic *angle* is a single number, but the actual region of correlated wavefronts has structure:
- elongated in the wind direction (Taylor-frozen turbulence)
- shorter perpendicular to wind

so a more accurate quantity is the **isoplanatic patch shape**, ellipse-shaped on the sky. for most purposes the angle alone is enough.

## ground-layer AO and wide-field correction

if turbulence is concentrated in the ground layer (few hundred meters above the telescope), all stars in a wide field see the *same* ground-layer turbulence. correcting only the ground layer (with multiple guide stars near the science target) improves seeing over a much *wider* field of view than classical AO — sometimes 1' or more, dramatically larger than $\theta_0$.

this is **ground-layer adaptive optics (GLAO)**, used by survey instruments like VST, Gemini's GLAO, and the future LSST/Vera Rubin proposal.

## multi-conjugate AO

for *full-field* correction at a wide field of view (say 30''), use multiple guide stars at different sky positions and multiple deformable mirrors at different heights. each DM corrects the layer it is conjugated to. result: AO over a much wider field than classical single-conjugate AO.

instruments: Gemini MCAO, ESO MAD, GeMS, future ELT MORFEO.

## physical meaning

think of it this way: each star's light traverses a *cone* of atmosphere, with the cone narrow at the ground and wide at altitude. for two stars separated by angle $\theta$:

- at the ground (low $z$): the cones overlap completely, atmospheric paths are the same
- at altitude $z$: the cones are separated by $z\theta$, and if $z\theta > r_0$, the atmospheric paths are independent

so the integral that defines $\theta_0$ has $z^{5/3}$ weighting because high-altitude turbulence decorrelates faster between two directions.

practical: most isoplanatic-angle-degrading turbulence is at *jet-stream altitude* (~10 km). a site with low jet-stream activity has large $\theta_0$.

## see also

- [Atmospheric turbulence overview](../../../02_Zettel/Theory/interf/Atmospheric turbulence overview.md)
- [Fried parameter $r_0$](../../../02_Zettel/Theory/interf/Fried parameter $r_0$.md)
- [Adaptive optics](../../../02_Zettel/Theory/interf/Adaptive optics.md)
- [Guide stars and laser guide stars](../../../02_Zettel/Theory/interf/Guide stars and laser guide stars.md)
- [Astronomical_Interferometry_MOC](../../../00_Atlas/Astronomical_Interferometry_MOC.md)
