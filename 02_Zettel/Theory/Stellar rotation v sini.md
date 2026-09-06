---
layout: default
name: Stellar rotation v sini
description: how stellar rotation broadens spectral lines and how the projected rotational velocity is measured
---

# stellar rotation v sin i

if a star rotates with equatorial velocity $v$, different parts of the visible hemisphere have different line-of-sight velocity components, with the approaching limb contributing blueshifted absorption and the receding limb contributing redshifted absorption. the integrated profile is the convolution of the local profile with a **rotation kernel** spanning $\pm v\sin i$, where $i$ is the inclination of the rotation axis to the line of sight. spectroscopy gives only the projected combination $v\sin i$; the actual equatorial $v$ requires an independent inclination measurement.

## the rotation broadening kernel

for a uniformly rotating, limb-darkened sphere, the rotational broadening profile is approximately
$$G(\Delta\lambda) = \frac{2(1-\epsilon)\sqrt{1 - (\Delta\lambda/\Delta\lambda_L)^2} + \frac{\pi\epsilon}{2}(1 - (\Delta\lambda/\Delta\lambda_L)^2)}{\pi\Delta\lambda_L (1 - \epsilon/3)},$$
defined over $|\Delta\lambda| \leq \Delta\lambda_L$ with
$$\Delta\lambda_L = \frac{\lambda_0\,v\sin i}{c}.$$
$\epsilon$ is the linear limb-darkening coefficient. the kernel is non-Gaussian: it has finite half-width $\Delta\lambda_L$ and steep edges, distinguishing rotational broadening from thermal/microturbulent broadening (which are Gaussian).

## qualitative effects

- **broader lines.** the line full-width-at-half-maximum scales linearly with $v\sin i$ once $v\sin i$ exceeds the thermal width. for $v\sin i \gtrsim 30$ km/s, rotation dominates over thermal+microturbulent broadening.
- **shallower lines.** the equivalent width is conserved, so a broader line is also a shallower one. rapid rotators have washed-out, near-continuum-level lines that are very hard to measure abundances in.
- **degraded RV precision.** the line centroid is harder to localise when the line is wide. RV uncertainty scales roughly as $\sqrt{v\sin i}$ at high rotation.

## measuring $v\sin i$

**direct profile fitting.** fit observed line profiles with a model = (intrinsic profile) $\otimes$ (rotation kernel) $\otimes$ (instrumental profile). the rotation kernel's edge sets $v\sin i$ tightly. needs unblended, intermediate-strength lines. precision: 0.5-1 km/s for slow rotators, $\sim 5\%$ for fast rotators.

**Fourier method (Carroll, Gray).** the Fourier transform of the rotation kernel has zeros at frequencies $\sigma_n = q_n / \Delta\lambda_L$, where $q_1 \approx 0.66$. measuring the position of the first zero in the line FT directly yields $v\sin i$ without needing to deconvolve other broadening components. this is the cleanest method for fast rotators.

**cross-correlation widths.** the width of the cross-correlation function between the spectrum and a sharp template scales with $v\sin i$. calibrated against synthetic spectra. workhorse method for large surveys.

## typical values

- F-G-K main-sequence stars: $v\sin i \sim 1\text{-}10$ km/s (slow, magnetic braking has spun them down).
- A stars: $v\sin i \sim 100\text{-}200$ km/s.
- O-B stars: $v\sin i \sim 100\text{-}400$ km/s, sometimes near breakup.
- young stars (T Tauri, pre-MS): $v\sin i \sim 30\text{-}80$ km/s.
- the sun: $v\sin i = 1.6$ km/s.

the dramatic drop near spectral type F (the "Kraft break") is due to the onset of magnetised stellar winds in stars with convective envelopes, which carry angular momentum away.

## degeneracy with macroturbulence

at moderate $v\sin i$ (5-20 km/s) the rotation kernel can be confused with **macroturbulence**, large-scale velocity fields with comparable broadening but a different functional form (radial-tangential profile). a Fourier or careful profile fit is needed to disentangle them. microturbulence (see [Microturbulence](../../02_Zettel/Theory/Microturbulence.html)) is different: it operates within the line-formation region rather than across the disk.

## why it matters

- $v\sin i$ traces stellar evolution: angular momentum loss on the main sequence, conservation on the giant branch.
- it sets a floor on RV precision and abundance precision.
- combined with rotational period from photometry (spots), $v\sin i$ gives stellar inclination.
- in clusters, rotation distributions trace age and binary history; in stellar populations, fast rotators may produce extended turn-offs in the [Color-magnitude diagrams of clusters](../../02_Zettel/Theory/Color-magnitude diagrams of clusters.html).

## see also
- [Atmospheric parameters Teff log g feh vmicro](../../02_Zettel/Theory/interf/Atmospheric parameters Teff log g feh vmicro.html)
- [Microturbulence](../../02_Zettel/Theory/Microturbulence.html)
- [Radial velocity from stellar spectra](../../02_Zettel/Theory/Radial velocity from stellar spectra.html)
- [Equivalent width](../../02_Zettel/Theory/Equivalent width.html)
- [Stellar atmosphere structure](../../02_Zettel/Theory/Stellar atmosphere structure.html)
- [Stellar_Astrophysics_MOC](../../00_Atlas/Stellar_Astrophysics_MOC.html)
