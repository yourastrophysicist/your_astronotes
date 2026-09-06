---
layout: default
title: "Fried parameter $r_0$"
---

# Fried parameter $r_0$

the *single number* that summarizes how good seeing is at an observing site. $r_0$ is the size of the patch over which the atmospheric phase is coherent within $\sim 1$ rad. defined by David Fried (1965), it is the universal yardstick of optical observing conditions.

## definition

the phase structure function for Kolmogorov turbulence is

$$D_\phi(r) = 6.88 \, (r/r_0)^{5/3}$$

so $r_0$ is the separation at which $D_\phi = 6.88$ rad$^2$. equivalently: at $r = r_0$, the rms phase difference is $\sim 2.6$ rad.

a more physical definition: $r_0$ is the size of an aperture for which the wavefront variance is $\sim 1$ rad$^2$. apertures smaller than $r_0$ are nearly diffraction-limited; larger ones are seeing-limited.

## the formula

derived from atmospheric $C_n^2$ profile:

$$r_0 = \left[0.423 \, k^2 \int_{\rm path} C_n^2(z) \, dz\right]^{-3/5}$$

with $k = 2\pi/\lambda$. the integral is over the line of sight through the atmosphere.

at zenith for a "good" site:
$$r_0(\lambda) = 0.185 \, \lambda^{6/5} \left[\int C_n^2 \, dz\right]^{-3/5} \, \text{(SI units)}$$

## typical values

| site | $r_0$ at 500 nm | $r_0$ at K-band (2.2 μm) |
|---|---|---|
| sea-level, urban | ~3 cm | ~20 cm |
| good observatory (Mauna Kea, Paranal) | 10-15 cm | 60-90 cm |
| exceptional night | 25 cm | 1.5 m |
| Antarctica (Dome C) | 30-50 cm (maybe) | 2 m+ (rare) |
| space (Hubble) | $\infty$ | $\infty$ |

the wavelength scaling $r_0 \propto \lambda^{6/5}$ means **K-band is $\sim 6\times$ easier than V-band**. this is why optical interferometry is generally done in the IR, not visible.

## the seeing connection

the atmospheric seeing FWHM:
$$\theta_{\rm seeing} \approx \frac{\lambda}{r_0}$$

(more precisely, 0.98 $\lambda/r_0$ for Kolmogorov).

in arcseconds: $\theta_{\rm seeing}('') \approx 0.98 \cdot \lambda/r_0$ in matching units.

at 500 nm, $r_0 = 10$ cm: $\theta = 1.0''$. at $r_0 = 20$ cm: $\theta = 0.5''$. these are the typical "good night" / "exceptional night" thresholds at major observatories.

at K-band with $r_0 = 1$ m: $\theta = 0.5''$. so K-band seeing is similar to visible's "best night," every night.

## the airmass scaling

atmospheric path length scales with sec(zenith angle). $r_0$ scales with the path integral to the $-3/5$ power:

$$r_0 \propto (\sec z)^{-3/5}$$

at $z = 60°$ (sec $= 2$): $r_0 \to r_0 \cdot 2^{-3/5} \approx r_0 / 1.5$. seeing degrades by 50%.

so observations of low-altitude targets suffer worse seeing. AO and interferometry both work best near zenith.

## the implications for telescope design

for a telescope of diameter $D$:
- if $D \ll r_0$: diffraction-limited, but small light-gathering power
- if $D \sim r_0$: still essentially diffraction-limited, marginal
- if $D \gg r_0$: seeing-limited. resolution is $\lambda/r_0$, *not* $\lambda/D$. the telescope diameter doesn't help resolution

so an 8m telescope at 500 nm with $r_0 = 10$ cm has *the same resolution as a 10cm telescope*. this is why HST (2.4m, no atmosphere) had better resolution than ground-based 8m telescopes.

AO restores the diffraction limit: with AO, an 8m telescope works at $\sim \lambda/D = 13$ mas at K-band, beating HST's 200 mas at K (HST is small).

## the implications for interferometry

three:

### 1. sub-aperture size

each interferometer telescope's effective collecting area is set by **min**$(D, r_0)$. for $D > r_0$, only the central $r_0$ patch contributes coherently. so interferometers might as well have telescopes of diameter $\sim r_0$ — anything larger is wasted *unless* AO is in use.

VLTI's 8m UTs all have AO (NAOS, MACAO). without AO, they would only contribute as effective $\sim 60$ cm telescopes at K-band.

### 2. piston

the relative phase between two sub-apertures (the *piston*) varies on timescales $\tau_0$. fringe tracking must run faster than $\tau_0$. without fringe tracking, integrations longer than $\tau_0$ wash out fringes.

### 3. baselines

the maximum useful interferometer baseline (without AO) is $\sim r_0$. baselines larger than $r_0$ have wavefronts decorrelated at the two ends — fringes form but with rapidly varying phase.

with AO, this limit is removed: AO restores coherent wavefronts at each telescope, making arbitrary baselines work.

## measuring $r_0$ in real time

key tool: the **DIMM** (differential image motion monitor). two pinholes in front of a telescope produce two images of the same star. the differential motion between them gives the rms tilt difference, which can be inverted to give $r_0$.

modern observatories run DIMMs continuously. nightly $r_0$ values are logged, and proposals are scheduled around the seeing forecast.

## historical note

David Fried introduced the parameter in his 1965 paper "Statistics of a Geometric Representation of Wavefront Distortion." the original formula was for *short-exposure* images; later extensions cover long exposures, AO performance, and beyond.

the parameter is now everywhere in optical astronomy and adaptive-optics literature. when someone says "the seeing is 0.6 arcsecond" they implicitly mean $r_0 \approx 17$ cm at 500 nm.

## see also

- [Atmospheric turbulence overview](../../02_Zettel/Theory/interf/Atmospheric turbulence overview.html)
- [Kolmogorov turbulence](../../02_Zettel/Theory/interf/Kolmogorov turbulence.html)
- [Structure function and correlation function](../../02_Zettel/Theory/interf/Structure function and correlation function.html)
- [Isoplanatic patch](../../02_Zettel/Theory/interf/Isoplanatic patch.html)
- [Frozen turbulence and Taylor hypothesis](../../02_Zettel/Theory/interf/Frozen turbulence and Taylor hypothesis.html)
- [Adaptive optics](../../02_Zettel/Theory/interf/Adaptive optics.html)
- [Astronomical_Interferometry_MOC](../../00_Atlas/Astronomical_Interferometry_MOC.html)
