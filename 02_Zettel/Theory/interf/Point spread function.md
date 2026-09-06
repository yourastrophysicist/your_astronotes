---
layout: default
title: "Point spread function"
---

# Point spread function

the PSF is the image a telescope (or interferometer) produces of an idealized point source. it is the **impulse response** of the optical system: every more-complex image is a *convolution* of the true brightness distribution with the PSF.

## definition

if $I_{\rm true}(\mathbf l)$ is the true sky brightness and $\text{PSF}(\mathbf l)$ is the system's response to a point source, the observed image is

$$I_{\rm obs}(\mathbf l) = I_{\rm true}(\mathbf l) * \text{PSF}(\mathbf l)$$

where $*$ denotes convolution. so to recover $I_{\rm true}$, I need to **deconvolve** the PSF — the central problem of image reconstruction.

## the diffraction-limited PSF

for an ideal aberration-free telescope of aperture $A(\mathbf r)$, the PSF is the **Fraunhofer diffraction pattern** of $A$:

$$\text{PSF}(\mathbf l) \propto |\tilde A(\mathbf l/\lambda)|^2$$

with $\tilde A$ the 2D Fourier transform of the aperture function and $\mathbf l$ the angular coordinate on the sky.

for a **circular aperture** of diameter $D$: PSF is the **Airy disk**:
$$\text{PSF}(\theta) \propto \left[\frac{2 J_1(\pi D \theta/\lambda)}{\pi D \theta/\lambda}\right]^2$$

with first null at $\theta = 1.22 \lambda/D$ (the **diffraction limit**).

## the seeing-limited PSF

at ground-based optical wavelengths, the *atmosphere* dominates over the diffraction limit. the **seeing-limited** PSF is much broader than diffraction-limited, with FWHM
$$\theta_{\rm seeing} \approx \lambda/r_0 \approx 0.5'' - 1''$$

where $r_0$ is the Fried parameter.

after long exposures, the seeing PSF averages to roughly **Moffat** or **Gaussian-like** with broader wings. this is the empirical PSF that real ground-based images have.

## the AO-corrected PSF

with adaptive optics, the *partial* correction recovers a fraction $S$ (the **Strehl ratio**) of the diffraction limit. AO PSF = Strehl-fraction Airy disk + extended halo of uncorrected light.

at K-band (2.2 μm) on an 8m telescope with good AO: Strehl $\sim 0.5$, FWHM $\sim 60$ mas → near-diffraction-limited core.

at H-band (1.6 μm): Strehl $\sim 0.3$, harder.

at visible: Strehl $\sim 0.1$ even with extreme AO. atmosphere is just too bad.

## the interferometer "PSF" — the dirty beam

an interferometer doesn't have a single PSF in the traditional sense. instead, it samples discrete (u, v) points. the **dirty beam** is the inverse Fourier transform of the (u, v) sampling function:

$$B_{\rm dirty}(\mathbf l) = \sum_k e^{2\pi i \mathbf u_k \cdot \mathbf l}$$

(summed over all measured (u, v) samples). this is the **synthesized beam** or **dirty beam**.

it has:
- a central peak (where all the cosines add up at $\mathbf l = 0$)
- complex sidelobes (where they don't)

a "dirty image" is the true sky convolved with the dirty beam. **CLEAN** removes the sidelobes by iteratively subtracting scaled dirty beams from peak positions.

after CLEAN, we replace the dirty beam with a **clean beam** — a Gaussian fit to the dirty beam's central lobe. this is the *effective* PSF of the cleaned image.

## the "ideal" PSF for science

what we want from a PSF:

- **narrow core**: high resolution
- **low sidelobes**: high contrast (no spurious features)
- **isotropic**: same in all directions
- **stable**: doesn't change with time

reality:
- circular aperture: 1.6% sidelobes
- annular aperture (telescopes with secondaries): 5-10% sidelobes
- sparse interferometer: many sidelobes, dirty beam structure
- atmospheric: changes second-by-second

this is why high-contrast imaging (exoplanets, AGN) goes to elaborate lengths to reshape the PSF: apodization, coronagraphy, nulling.

## measuring the PSF

empirically: observe a bright star (an unresolved point source), record its image, that *is* the PSF. for variable atmospheric conditions, use simultaneous PSF reference stars.

for radio: the synthesized beam is computed from the (u, v) coverage of the observation, no need to observe a reference.

## convolution and deconvolution

### convolution

$$I_{\rm obs}(\mathbf l) = \int I_{\rm true}(\mathbf l') \, \text{PSF}(\mathbf l - \mathbf l') \, d^2\mathbf l'$$

equivalent in Fourier space: $\tilde I_{\rm obs} = \tilde I_{\rm true} \cdot \widetilde{\text{PSF}}$.

### deconvolution

formally: $\tilde I_{\rm true} = \tilde I_{\rm obs} / \widetilde{\text{PSF}}$.

problem: $\widetilde{\text{PSF}}$ has zeros at certain frequencies (corresponding to where the aperture has gaps or where Airy nulls live). dividing by zero amplifies noise.

regularized deconvolution: CLEAN, MEM, modern Bayesian (RML), Richardson-Lucy. each is a different choice of how to handle the noise amplification problem.

## the Strehl ratio

a number between 0 and 1 quantifying how close a real PSF is to the diffraction-limited ideal:

$$S = \frac{I_{\rm peak,real}}{I_{\rm peak,diff-lim}}$$

with both PSFs normalized to the same total flux.

- $S = 1$: perfect optics, no atmosphere
- $S > 0.8$: typical AO-corrected, K-band
- $S \sim 0.1$: typical seeing-limited at visible

a useful approximation (Maréchal):
$$S \approx \exp(-\sigma_\phi^2)$$

where $\sigma_\phi^2$ is the variance of phase aberrations across the aperture. for $\sigma_\phi = 1$ rad: $S \approx 0.37$.

## scientific figure

![airy_pattern_generated](../../../assets/images/airy_pattern_generated.png)

reading cue: the PSF is the image of a point source. for an ideal circular aperture the PSF is the Airy pattern, so even a perfect telescope does not make a mathematical point.

source: local plot generated from the Airy-pattern Bessel formula.

## see also

- [Fraunhofer diffraction](../../../02_Zettel/Theory/interf/Fraunhofer diffraction.md)
- [Diffraction patterns of simple apertures](../../../02_Zettel/Theory/interf/Diffraction patterns of simple apertures.md)
- [Optical transfer function](../../../02_Zettel/Theory/interf/Optical transfer function.md)
- [Adaptive optics](../../../02_Zettel/Theory/interf/Adaptive optics.md)
- [CLEAN algorithm](../../../02_Zettel/Theory/interf/CLEAN algorithm.md)
- [Astronomical_Interferometry_MOC](../../../00_Atlas/Astronomical_Interferometry_MOC.md)
