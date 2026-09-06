---
layout: default
title: "Fabry-Perot interferometer"
---

# Fabry-Perot interferometer

a multi-beam interferometer: light bounces *many times* between two parallel partially-reflective mirrors. an *infinite series* of beams with progressively smaller amplitudes interfere at the output. the result is a transmission function with extremely *sharp* peaks at wavelengths satisfying constructive interference on every pass.

invented by Charles Fabry and Alfred Pérot in 1899. now ubiquitous in laser cavities, spectroscopy, and astronomy.

## the geometry

two parallel mirrors at distance $d$, each with reflectivity $R$ (typically $0.99$ or higher). a wave enters one mirror, partially reflects, and bounces back and forth. at each round trip it picks up a phase $\delta = 2\pi \cdot 2nd \cos\theta/\lambda$, where $\theta$ is the angle of incidence and $n$ is the refractive index between the mirrors (often $n=1$, vacuum or air).

each transmitted beam (out the second mirror) interferes with all the others. the geometric series sum gives the transmission function.

## the Airy distribution

the transmitted intensity vs phase:

$$T(\delta) = \frac{1}{1 + F \sin^2(\delta/2)}$$

where $F = 4R/(1-R)^2$ is the **finesse coefficient**. for $R = 0.99$: $F \approx 4 \times 10^4$. for $R = 0.5$: $F \approx 4$.

when $F$ is large:
- transmission peaks at $\delta = 2\pi m$ (constructive on every pass)
- between peaks, $\sin^2(\delta/2)$ is large, so transmission drops to $1/(1 + F)$ — nearly zero

so the transmission spectrum is a *comb* of very sharp peaks separated by the **free spectral range**:

$$\Delta\nu\sub{FSR} = \frac{c}{2nd}$$

with peak width:

$$\Delta\nu\sub{FWHM} = \frac{\Delta\nu\sub{FSR}}{\mathcal F}$$

where the **finesse** $\mathcal F = \pi \sqrt{R}/(1-R)$ measures the resolving power. for $R = 0.99$: $\mathcal F \approx 313$.

## the resolving power

$$R\sub{spectral} = \nu/\Delta\nu = m \cdot \mathcal F$$

where $m = 2nd/\lambda$ is the order. for $d = 1$ cm at $\lambda = 500$ nm: $m \sim 4 \times 10^4$. with $\mathcal F = 300$: $R\sub{spectral} \sim 10^7$.

this is much higher than typical grating spectrometers ($R \sim 10^4$ to $10^5$). Fabry-Perot is the technique for *very* high spectral resolution.

## the laser cavity

a laser is essentially a Fabry-Perot cavity with a gain medium inside:
- mirrors at the ends provide feedback
- the gain medium amplifies light at specific wavelengths
- the mirrors select wavelengths that fit the cavity (i.e. for which $2nd = m\lambda$)

result: a laser oscillates at *only* those modes for which the round-trip phase is an integer multiple of $2\pi$ AND the gain exceeds the losses.

most lasers oscillate on a *single* longitudinal mode (one $m$) by design. multi-mode lasers oscillate on several adjacent $m$.

## the spectroscopic use

use Fabry-Perot as a tunable filter: scan the mirror separation $d$, and only one specific wavelength passes at a time. by sweeping $d$ over a range, you record the spectrum of the input light at high resolution.

modern variants:
- **scanning Fabry-Perot**: piezo-actuated mirror separation, used in stellar spectroscopy
- **etalon**: a fixed Fabry-Perot, used as a wavelength reference in laser-stabilization
- **wavemeters**: combine multiple Fabry-Perot etalons for absolute wavelength measurement

## the astronomical use

- **Hα imaging**: a Fabry-Perot etalon tuned to Hα (6563 Å) selects only that emission line, suppressing continuum. used in solar physics for studying chromospheric features
- **integral-field spectroscopy**: scanning Fabry-Perot to make a 3D data cube (2D image + 1 spectral dimension) for galaxy kinematic studies
- **wavelength calibration**: stable etalons calibrate spectrographs at $10^{-9}$ relative precision (used in radial-velocity searches for exoplanets)

## the mode-locking connection

a laser cavity that supports *many* simultaneous modes can be **mode-locked**: forcing all modes to have the same phase. the result is a train of ultra-short pulses (~10s of femtoseconds), used in ultrafast spectroscopy and metrology.

modern frequency combs are mode-locked lasers with stabilized cavity length, providing a *grid* of optical frequencies separated by $\Delta\nu\sub{FSR}$. they enable:
- absolute optical-frequency measurement
- attosecond-pulse generation
- precision atomic clocks
- exoplanet radial-velocity calibration to $\sim$ cm/s

Fabry-Perot is the foundation.

## the gravitational-wave connection

LIGO uses *Fabry-Perot cavities* in each arm of its Michelson interferometer. each arm is a 4-km Fabry-Perot with $R \approx 0.999$, so light bounces $\sim 300$ times. the *effective* arm length is enhanced from 4 km to $\sim 1000$ km, dramatically increasing sensitivity to path-length changes.

this is the architectural reason LIGO works at all: without the Fabry-Perot enhancement, the gravitational-wave strain signal would be too small to detect.

## the comparison with two-beam interferometers

| feature | two-beam (Michelson, MZ) | Fabry-Perot |
|---|---|---|
| number of interfering beams | 2 | infinite series |
| transmission curve | sinusoidal | sharp peaks (Lorentzian-like) |
| peak width | ~$\lambda$/2 | $\sim \lambda/\mathcal F$ |
| resolving power | low to medium | very high |
| typical use | OPD measurement | spectral filtering |

both are amplitude-division; the difference is whether the cavity is "open" (two beams, finite) or "closed" (multiple beams, infinite series).

## see also

- [Amplitude-division interferometers](../../../02_Zettel/Theory/Amplitude-division interferometers.html)
- [Michelson laboratory interferometer](../../../02_Zettel/Theory/interf/Michelson laboratory interferometer.html)
- [Beam splitter physics](../../../02_Zettel/Theory/interf/Beam splitter physics.html)
- [Astronomical_Interferometry_MOC](../../../00_Atlas/Astronomical_Interferometry_MOC.html)
