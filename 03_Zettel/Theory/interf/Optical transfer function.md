---
layout: "default"
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

the **MTF** is $\lvert \text{OTF}\rvert$, the magnitude of the OTF. it tells you "how much of the contrast survives" at each spatial frequency. since OTF can be complex, MTF is the real-valued part that matters for visual contrast.

## OTF for a circular aperture

aperture diameter $D$, no central obstruction. the OTF is the **autocorrelation of the aperture function**:

$$\text{OTF}(\mathbf u) = \mathcal F[\text{PSF}] = \mathcal F\!\left[\lvert \mathcal F[A]\rvert^2\right] = A \star A$$

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

frequencies $\lvert \mathbf u\rvert > \rho_c$ are not in the OTF support — those features are not in my data. for an interferometer, this means features at angular scales finer than $\lambda/B_{\max}$ (longest baseline) are unresolvable.

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

![07_Images/Interferometry/abbe_fourier_optics_orders.svg](../../../assets/images/abbe_fourier_optics_orders.svg)

reading cue: the OTF tells me which spatial frequencies survive the optical system. Abbe's picture makes this visual: the aperture passes or blocks diffraction orders, so resolution is a bandwidth limit.

source: local study diagram generated from the Abbe/Fourier-optics interpretation of image formation.

## see also

- [Point spread function](Point%20spread%20function.html)
- [Fraunhofer diffraction](Fraunhofer%20diffraction.html)
- [The (u, v) plane](The%20%28u%2C%20v%29%20plane.html)
- [Aperture synthesis principle](Aperture%20synthesis%20principle.html)
- [CLEAN algorithm](CLEAN%20algorithm.html)
- [Astronomical_Interferometry_MOC](../../../04_Atlas/Astronomical_Interferometry_MOC.html)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (12)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../Abbe%20experiment%20and%20Fourier%20optics.html" class="backlink-item">Abbe experiment and Fourier optics</a></li>
    <li class="backlink-item-wrap"><a href="../Beam%20power%20pattern%20of%20a%20radio%20telescope.html" class="backlink-item">Beam power pattern of a radio telescope</a></li>
    <li class="backlink-item-wrap"><a href="../Diffraction%20patterns%20of%20simple%20apertures.html" class="backlink-item">Diffraction patterns of simple apertures</a></li>
    <li class="backlink-item-wrap"><a href="../Figure%20bank%20-%20interferometry.html" class="backlink-item">Figure bank - interferometry</a></li>
    <li class="backlink-item-wrap"><a href="../Fraunhofer%20diffraction.html" class="backlink-item">Fraunhofer diffraction</a></li>
    <li class="backlink-item-wrap"><a href="Abbe%20experiment%20and%20Fourier%20optics.html" class="backlink-item">Abbe experiment and Fourier optics</a></li>
    <li class="backlink-item-wrap"><a href="Beam%20power%20pattern%20of%20a%20radio%20telescope.html" class="backlink-item">Beam power pattern of a radio telescope</a></li>
    <li class="backlink-item-wrap"><a href="Diffraction%20patterns%20of%20simple%20apertures.html" class="backlink-item">Diffraction patterns of simple apertures</a></li>
    <li class="backlink-item-wrap"><a href="Figure%20bank%20-%20interferometry.html" class="backlink-item">Figure bank - interferometry</a></li>
    <li class="backlink-item-wrap"><a href="Fraunhofer%20diffraction.html" class="backlink-item">Fraunhofer diffraction</a></li>
    <li class="backlink-item-wrap"><a href="Point%20spread%20function.html" class="backlink-item">Point spread function</a></li>
    <li class="backlink-item-wrap"><a href="../../../04_Atlas/Astronomical_Interferometry_MOC.html" class="backlink-item">Astronomical_Interferometry_MOC</a></li>
  </ul>
</div>

