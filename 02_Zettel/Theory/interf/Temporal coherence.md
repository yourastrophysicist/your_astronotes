---
layout: default
title: "Temporal coherence"
---

# Temporal coherence

the *correlation between the wave at the same point but at different times*. temporal coherence is set by the *spectral bandwidth* of the source: narrower bandwidth → longer coherence time → more fringes visible at a given path difference.

## definition

at a single point in space, the **autocorrelation** of the wave:
$$\Gamma_{11}(\tau) = \langle E^*(t) E(t + \tau) \rangle$$

normalized:
$$\gamma_{11}(\tau) = \Gamma_{11}(\tau)/\Gamma_{11}(0)$$

with $|\gamma_{11}| \in [0, 1]$. this is the **complex degree of temporal coherence**.

## bandwidth determines coherence time

by the Wiener-Khinchin theorem, the autocorrelation is the Fourier transform of the **power spectral density** $S(\nu)$:
$$\Gamma_{11}(\tau) = \int S(\nu) e^{-2\pi i \nu \tau} d\nu$$

so the coherence time scales as:
$$\tau_c \sim \frac{1}{\Delta\nu}$$

where $\Delta\nu$ is the bandwidth. equivalently, **coherence length**:
$$\ell_c = c \tau_c \sim \frac{c}{\Delta\nu} = \frac{\lambda^2}{\Delta\lambda}$$

a few examples:
- **laser** ($\Delta\nu \sim 1$ kHz): $\tau_c \sim 1$ ms, $\ell_c \sim 300$ km
- **filtered starlight** at 500 nm with $\Delta\lambda = 10$ nm: $\ell_c \sim 25$ μm
- **broadband white starlight** at 500 nm with $\Delta\lambda = 200$ nm: $\ell_c \sim 1$ μm
- **radio at 100 GHz** with $\Delta\nu = 1$ GHz: $\ell_c \sim 30$ cm

short coherence length → short delay tolerance.

## practical consequences

an interferometer with two arms (the path lengths $L_1, L_2$ from each telescope to the beam combiner) requires
$$|L_1 - L_2| < \ell_c$$

for fringes to be visible. **delay lines** are mechanical/optical paths that match $L_1$ and $L_2$ to better than $\ell_c$.

at VLTI in the H-band ($\lambda = 1.65$ μm, $\Delta\lambda = 0.3$ μm, $\ell_c \sim 9$ μm): delay lines must be precise to a few microns.

at ALMA in the 230 GHz band ($\Delta\nu \sim 1$ GHz, $\ell_c \sim 30$ cm): delay accuracy needed $\sim$ cm.

at EHT (mm-wave VLBI): $\ell_c \sim$ cm, but the delays are *baked-in* by atomic-clock referencing across continents.

## when does temporal coherence kill fringes

if I integrate over a wide bandwidth, fringes from each wavelength have different spacings. the resulting pattern is a sum:

$$I_{\rm total}(\theta) = \int I_{\rm fringe}(\theta, \lambda) S(\lambda) d\lambda$$

constructive at zero path difference, washes out at $\theta \neq 0$. the **fringe envelope** is the autocorrelation of $S(\lambda)$.

this is exactly what white-light Young's fringes look like: a bright central fringe, a few visible side fringes, washing out within $\sim 5$ orders of the white light.

## the link to spectroscopy

the autocorrelation of light **is** its spectrum (Wiener-Khinchin). so a Fourier-transform spectrometer:

1. measures the autocorrelation at varying time delays (using a moving mirror)
2. Fourier-transforms to get the spectrum

this is exactly how the FTIR spectrometer works. from an interferometric viewpoint, FTIR is a temporal-coherence measurement.

## quasi-monochromatic approximation

for narrow-bandwidth observations ($\Delta\lambda/\lambda \ll 1$), we treat the light as **quasi-monochromatic**:
$$E(t) = A(t) e^{-i\omega_0 t}$$

with $A(t)$ a slowly-varying envelope. all the spatial-coherence theory and Van Cittert-Zernike applies in this approximation, with $\omega_0$ as the central frequency.

real interferometric observations are quasi-monochromatic to a good approximation: spectral filters define a band of width $\Delta\lambda$, and the calculation uses the central wavelength.

## comparison with spatial coherence

| temporal | spatial |
|---|---|
| same point, different times | different points, same time |
| set by bandwidth | set by source angular size |
| coherence time $\tau_c \sim 1/\Delta\nu$ | coherence area $A_c \sim (\lambda/\theta_s)^2$ |
| measured by Michelson FT spectrometer | measured by Young's slits / interferometer |
| sets delay-line precision needs | sets baseline ranges that produce fringes |

both must be respected for fringes to form.

## examples

### sodium D-line through a filter

$\lambda = 589$ nm, $\Delta\lambda$ depends on the filter:
- broadband ($\Delta\lambda = 100$ nm): $\ell_c \sim 3$ μm. only a few fringes visible
- narrowband Na D filter ($\Delta\lambda = 1$ nm): $\ell_c \sim 350$ μm. hundreds of fringes
- ultra-narrow Fabry-Perot ($\Delta\lambda = 10^{-3}$ nm): $\ell_c \sim 35$ cm. thousands of fringes

### FTIR

a Michelson interferometer with a moving mirror sweeping through delays $\tau$. the recorded $I(\tau)$ is the autocorrelation $\Gamma_{11}(\tau)$. Fourier transform → spectrum $S(\nu)$.

## see also

- [Coherent vs incoherent imaging](../../../02_Zettel/Theory/interf/Coherent vs incoherent imaging.html)
- [Spatial coherence](../../../02_Zettel/Theory/interf/Spatial coherence.html)
- [Coherence function and visibility](../../../02_Zettel/Theory/interf/Coherence function and visibility.html)
- [Delay lines and path-length equalization](../../../02_Zettel/Theory/interf/Delay lines and path-length equalization.html)
- [Astronomical_Interferometry_MOC](../../../00_Atlas/Astronomical_Interferometry_MOC.html)
