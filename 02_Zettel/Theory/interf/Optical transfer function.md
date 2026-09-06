---
layout: default
title: "Optical transfer function"
---

# Optical transfer function

the OTF is the **Fourier transform of the PSF**, equivalent to the spatial-frequency response of the optical system. it tells me which spatial frequencies survive imaging and which get suppressed. for an interferometer, the OTF *is* the (u, v) sampling function — they are literally the same object.

## definition

$$\text{OTF}(\mathbf u) = \mathcal F[\text{PSF}](\mathbf u)$$

since intensity in the focal plane is convolution of source with PSF, in Fourier space:
$$\tilde I_{\rm obs}(\mathbf u) = \tilde I_{\rm true}(\mathbf u) \cdot \text{OTF}(\mathbf u)$$

each spatial frequency of the source is *multiplied* by the OTF at that frequency. high frequencies (fine detail) get attenuated; low frequencies (large structures) pass through.

## the modulation transfer function

the **MTF** is $|\text{OTF}|$, the magnitude of the OTF. it tells you "how much of the contrast survives" at each spatial frequency. since OTF can be complex, MTF is the real-valued part that matters for visual contrast.

## OTF for a circular aperture

aperture diameter $D$, no central obstruction. the OTF is the **autocorrelation of the aperture function**:

$$\text{OTF}(\mathbf u) = \mathcal F[\text{PSF}] = \mathcal F\!\left[|\mathcal F[A]|^2\right] = A \star A$$

(by the autocorrelation theorem). geometrically, the OTF is the *area of overlap* between the aperture and a shifted copy of itself.

for a circular aperture:
$$\text{MTF}(\rho) = \frac{2}{\pi}\left[\arccos(\rho/\rho_c) - (\rho/\rho_c)\sqrt{1 - (\rho/\rho_c)^2}\right]$$

where $\rho_c = D/\lambda$ is the **cutoff frequency** (highest spatial frequency the system can pass).

key features:
- MTF = 1 at $\rho = 0$ (DC)
- MTF = 0 at $\rho = \rho_c$ (no transmission of frequencies higher than $D/\lambda$)
- monotonically decreasing
- linear-ish in the middle

## the cutoff frequency

$$\rho_c = D/\lambda$$

equivalent angular cutoff:
$$\theta_c = 1/\rho_c = \lambda/D$$

essentially the diffraction limit: spatial frequencies finer than $\lambda/D$ are not transmitted by the optical system. they are *lost*, regardless of how good the deconvolution is.

## OTF for an array of apertures

an interferometer has multiple sub-apertures. its OTF is the autocorrelation of the *combined* aperture function:

$$\text{OTF}(\mathbf u) = \sum_{i, j} A_i \star A_j(\mathbf u)$$

each pair of sub-apertures contributes an autocorrelation peak at $\mathbf u = \mathbf B_{ij}/\lambda$. the **OTF support** is the union of these autocorrelation peaks — exactly the **(u, v) coverage** of the interferometer.

for a 2-element interferometer:
- diagonal terms: each subaperture's autocorrelation, centered at origin
- off-diagonal: peaks at $\pm \mathbf B/\lambda$

so the (u, v) plot of an interferometer **is** the OTF support of that array. they are the same physical object viewed from different perspectives.

## what the OTF tells me

three practical questions answered by the OTF:

### 1. what features can I see?

frequencies $|\mathbf u| > \rho_c$ are not in the OTF support — those features are not in my data. for an interferometer, this means features at angular scales finer than $\lambda/B_{\max}$ (longest baseline) are unresolvable.

### 2. how much contrast do I lose?

even within the OTF support, the response is non-uniform. a feature at frequency $\mathbf u$ has its contrast multiplied by $\text{MTF}(\mathbf u)$. if the MTF at that frequency is 0.1, my measured contrast is 10× weaker than the true contrast.

### 3. what does the synthesized beam look like?

the dirty beam is the inverse Fourier transform of the OTF. so the beam shape is determined by the OTF. higher MTF at high frequencies → narrower beam (more resolution). more uniform MTF → cleaner beam (lower sidelobes).

## OTF of the atmosphere

the atmosphere has its own OTF — the long-exposure MTF that the seeing imposes:

$$\text{MTF}_{\rm atm}(\rho) \approx \exp[-3.44 (\rho \lambda/r_0)^{5/3}]$$

(from Kolmogorov turbulence theory). this is a roughly exponential decay with characteristic frequency $r_0/\lambda$.

so the *combined* OTF of telescope+atmosphere is the product:
$$\text{MTF}_{\rm total}(\rho) = \text{MTF}_{\rm telescope}(\rho) \cdot \text{MTF}_{\rm atm}(\rho)$$

and the seeing-limited resolution is set by where this combined MTF falls below noise.

## OTF in radio interferometry

for radio, the OTF is *almost identical* to the (u, v) coverage. each baseline contributes an OTF spike at $\mathbf B/\lambda$. earth-rotation synthesis fills in the OTF over time. the dirty beam (inverse FT of OTF) has the structure of the (u, v) gaps.

CLEAN-deconvolved imaging effectively *invents* a more uniform OTF (the clean beam) by filling in with the assumption of point-source structure. this is well-defined for compact sources, less so for extended emission.

## scientific figure

<img src="{{ "/assets/images/abbe_fourier_optics_orders.svg" | relative_url }}" alt="abbe_fourier_optics_orders" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />

reading cue: the OTF tells me which spatial frequencies survive the optical system. Abbe's picture makes this visual: the aperture passes or blocks diffraction orders, so resolution is a bandwidth limit.

source: local study diagram generated from the Abbe/Fourier-optics interpretation of image formation.

## see also

- [Point spread function](../../../02_Zettel/Theory/interf/Point spread function.html)
- [Fraunhofer diffraction](../../../02_Zettel/Theory/interf/Fraunhofer diffraction.html)
- [The (u, v) plane](../../../02_Zettel/Theory/interf/The (u, v) plane.md)
- [Aperture synthesis principle](../../../02_Zettel/Theory/interf/Aperture synthesis principle.html)
- [CLEAN algorithm](../../../02_Zettel/Theory/interf/CLEAN algorithm.html)
- [Astronomical_Interferometry_MOC](../../../00_Atlas/Astronomical_Interferometry_MOC.html)
