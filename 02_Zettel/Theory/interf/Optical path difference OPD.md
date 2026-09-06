---
layout: default
title: "Optical path difference OPD"
---

# Optical path difference (OPD)

the **single most important quantity** in interferometry. when two waves from a common source travel along different geometric paths and recombine, the OPD between them determines whether they interfere constructively or destructively. every interferometer is a device for *measuring* an OPD or *exploiting* a known OPD to encode information.

## the definition

for two paths through media of refractive indices $n_i$ and geometric lengths $\ell_i$, the **optical path length (OPL)** for path $i$ is

$$\Lambda_i = \int n_i\, d\ell_i$$

the OPD is the difference:

$$\Lambda = \Lambda_1 - \Lambda_2$$

when both paths are in the same medium (e.g. air, $n = 1$):

$$\Lambda = \ell_1 - \ell_2$$

## the link to phase difference

the relation between OPD $\Lambda$ and phase difference $\delta$ is

$$\boxed{\, \delta = \frac{2\pi}{\lambda_0} \Lambda = k_0 \Lambda \,}$$

where $\lambda_0$ is the *vacuum* wavelength and $k_0 = 2\pi/\lambda_0$ is the *vacuum* wavenumber. note: it's the vacuum wavelength, because the refractive index $n$ is already absorbed in the definition of OPL.

## constructive and destructive interference

intensities of the two waves combine as
$$I = I_1 + I_2 + 2\sqrt{I_1 I_2} \cos\delta$$

so:
- $\delta = 0, \pm 2\pi, \pm 4\pi, \ldots$ → cosine = +1, **maximum** (constructive)
- $\delta = \pm\pi, \pm 3\pi, \ldots$ → cosine = $-1$, **minimum** (destructive)

translating to OPD:
- $\Lambda = m\lambda_0$ with integer $m$: maximum (bright fringe)
- $\Lambda = (m + 1/2)\lambda_0$: minimum (dark fringe)

so each step of $\lambda_0$ in OPD shifts the fringe pattern by one full period.

## the case of equal intensities

when $I_1 = I_2 = I_0$:
$$I = 2I_0 (1 + \cos\delta) = 4 I_0 \cos^2(\delta/2)$$

range: 0 to $4I_0$. the visibility (fringe contrast) is **1**. this is the canonical Young's experiment result.

## the geometry of fringes

for two coherent point sources $S_1, S_2$ emitting waves with wavelength $\lambda$, the locus of equal OPD ($\Lambda = m\lambda$) is a **family of hyperboloids of revolution** with foci at $S_1$ and $S_2$. the intersection of these hyperboloids with an observation plane gives the fringe pattern.

- on a plane *parallel* to the line $S_1 S_2$ at large distance: fringes are nearly parallel straight lines (the Young geometry)
- on a plane *perpendicular* to $S_1 S_2$: fringes are concentric circles (used in optical setups like Michelson)

## sources of OPD in real interferometers

OPDs arise from three independent contributions:

### 1. geometric

the most obvious: paths of different physical length. e.g. in Young's experiment, $\ell_1 \neq \ell_2$ from each slit to the observation point.

### 2. refractive

if path 1 passes through a glass plate of thickness $d$ and refractive index $n$ while path 2 is in air ($n_{air} \approx 1$), the OPD due to the plate is $(n - 1) d$. used for *path-length compensation* in interferometers.

### 3. atmospheric / instrumental

mechanical drifts, temperature changes, atmospheric refractive-index fluctuations all introduce OPD shifts. for ground-based optical interferometry these are the dominant noise source.

## the dispersion correction

if the source is broadband, $\lambda_0$ varies. so the same geometric OPD corresponds to different phases at different wavelengths. for a perfectly equalised path ($\Lambda = 0$), all wavelengths add constructively → strong central fringe. away from $\Lambda = 0$, fringes from different wavelengths shift differently → contrast decreases.

this is the **white-light fringe** phenomenon. it provides:
- a built-in *zero* of OPD (where all wavelengths align)
- a measurement tool: scan OPD until you find the white-light fringe → you know the absolute path length

## why OPD matters in stellar interferometry

a **stellar interferometer** measures the OPD between two telescopes for a star at angular position $\theta$. for baseline $B$:

$$\Lambda = B \sin\theta \approx B\theta$$

so the phase difference is $\delta = 2\pi B\theta/\lambda$. as $\theta$ changes (different stars, or one star moving as Earth rotates), the OPD changes, and the fringe pattern shifts. **the delay line in a real interferometer continuously adjusts to bring the OPD to zero**, allowing fringe tracking on a moving target.

## the maximum OPD for fringes

at non-zero OPD, fringe visibility decreases due to:
- **bandwidth** (temporal coherence): visibility falls to zero when $\Lambda > \ell_c = c/\Delta\nu$, the coherence length
- **source extent** (spatial coherence): partially-resolved sources have reduced visibility independent of OPD

both effects set hard limits on the OPD an interferometer can usefully employ.

## the metrology connection

a Michelson laboratory interferometer with one moving mirror sweeps OPD by twice the mirror motion (light goes there and back). counting fringes as the mirror moves gives a wavelength-precision distance measurement. this is the basis of laser metrology and was, until 2018, the legal definition of the metre.

## see also

- [Light waves and the EM spectrum](../../../02_Zettel/Theory/interf/Light waves and the EM spectrum.html)
- [Superposition and interference](../../../02_Zettel/Theory/interf/Superposition and interference.html)
- [Fresnel-Arago laws](../../../02_Zettel/Theory/interf/Fresnel-Arago laws.html)
- [Wavefront-division interferometers](../../../02_Zettel/Theory/interf/Wavefront-division interferometers.html)
- [Amplitude-division interferometers](../../../02_Zettel/Theory/Amplitude-division interferometers.html)
- [Astronomical_Interferometry_MOC](../../../00_Atlas/Astronomical_Interferometry_MOC.html)
