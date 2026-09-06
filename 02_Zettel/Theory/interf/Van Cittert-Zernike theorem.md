---
layout: default
title: "Van Cittert-Zernike theorem"
---

# Van Cittert-Zernike theorem

the central theorem of interferometry. **the spatial coherence function (= visibility) of a wave field is the Fourier transform of the source brightness distribution.**

every imaging interferometer — from Young's experiment to the Event Horizon Telescope — exploits this. it is the mathematical bridge that lets us *measure visibility* and *recover an image*.

## the statement

let an extended, incoherent, spatially-distributed source emit light. observed in the **far field** at two points $\mathbf r_1, \mathbf r_2$ separated by baseline $\mathbf B = \mathbf r_2 - \mathbf r_1$. the **complex degree of coherence** between the fields at those points is:

$$\gamma_{12}(\mathbf B) = \frac{\int\int I(\mathbf l) \, e^{-2\pi i \mathbf B \cdot \mathbf l/\lambda} \, d^2\mathbf l}{\int\int I(\mathbf l) \, d^2\mathbf l}$$

where:
- $I(\mathbf l)$ is the source brightness distribution as a function of direction $\mathbf l = (l, m)$ (direction cosines on the sky)
- $\mathbf B$ is the baseline vector projected on the plane perpendicular to the line of sight
- the integral is over the source

defining the **spatial frequency** $\mathbf u = \mathbf B/\lambda$ (in cycles per radian, or wavelengths per radian):

$$\gamma_{12}(\mathbf u) = \frac{\tilde I(\mathbf u)}{\int I \, d^2\mathbf l}$$

so **the coherence is the normalized 2D Fourier transform of the brightness**.

## why this is the central theorem

the visibility (the observable) equals the spatial coherence (a statistical quantity), and the spatial coherence equals the Fourier transform of the brightness (the thing we want to know). chain:

$$\text{visibility} = \text{spatial coherence} = \tilde I(\mathbf u)$$

so **measure visibility, get Fourier components of the source**. invert the Fourier transform → image.

every interferometer is doing this. the only question is which $\mathbf u$ values are sampled.

## the proof sketch

each point $\mathbf l$ on the source emits an independent (incoherent) plane wave that arrives at $\mathbf r_1$ and $\mathbf r_2$ with relative phase $2\pi \mathbf B \cdot \mathbf l/\lambda$ (the path-length difference between the two observation points for that source direction).

cross-correlate the wave amplitudes at $\mathbf r_1, \mathbf r_2$. the contributions from each source point add coherently within their own plane waves but incoherently across source points. the average:

$$\Gamma_{12} = \int I(\mathbf l) \, e^{-2\pi i \mathbf B \cdot \mathbf l/\lambda} \, d^2\mathbf l$$

normalize by the total intensity → coherence function = FT of brightness.

the assumptions:
- source is **incoherent** (different source points are uncorrelated)
- source is **far** (fields can be approximated as plane waves, paraxial)
- observation is **quasi-monochromatic** (narrow bandwidth)

these are all standard for astronomical observations.

## reading the formula

each baseline $\mathbf B$ samples *one Fourier component* of the source. the spatial frequency $\mathbf u = \mathbf B/\lambda$ has units of cycles per radian (or wavelengths per radian, equivalent).

- short baselines → low spatial frequencies → large angular scales of the source
- long baselines → high spatial frequencies → fine angular scales of the source

so to image fine details, I need long baselines. to fill in low frequencies (smooth large-scale structure), I need short baselines and a single dish ("zero-spacing flux").

## a concrete example: uniform disk

source: a uniform disk of angular diameter $\theta_d$, brightness $I_0$ inside, 0 outside.

Fourier transform of the disk:
$$\tilde I(u) = \pi (\theta_d/2)^2 I_0 \cdot \frac{2 J_1(\pi \theta_d u)}{\pi \theta_d u}$$

normalized:
$$\gamma_{12}(u) = \frac{2 J_1(\pi \theta_d u)}{\pi \theta_d u}$$

this is the classic *uniform disk visibility* curve. first null at $u_1 = 1.22/\theta_d$, i.e. baseline $B_1 = 1.22 \lambda/\theta_d$.

measure the visibility at several baselines, find where it nulls, infer the diameter.

## a concrete example: binary star

source: two unresolved point sources at positions $\mathbf l_1, \mathbf l_2$ with intensities $I_1, I_2$. brightness:
$$I(\mathbf l) = I_1 \delta(\mathbf l - \mathbf l_1) + I_2 \delta(\mathbf l - \mathbf l_2)$$

Fourier transform:
$$\tilde I(\mathbf u) = I_1 e^{-2\pi i \mathbf u \cdot \mathbf l_1} + I_2 e^{-2\pi i \mathbf u \cdot \mathbf l_2}$$

normalized:
$$\gamma_{12}(\mathbf u) = \frac{I_1 e^{-2\pi i \mathbf u \cdot \boldsymbol\rho/2} + I_2 e^{+2\pi i \mathbf u \cdot \boldsymbol\rho/2}}{I_1 + I_2}$$

(taking origin at the midpoint, with separation $\boldsymbol\rho$). magnitude:
$$|\gamma_{12}|^2 = \frac{I_1^2 + I_2^2 + 2 I_1 I_2 \cos(2\pi \mathbf u \cdot \boldsymbol\rho)}{(I_1 + I_2)^2}$$

oscillates with baseline projection along $\boldsymbol\rho$. period in baseline = $\lambda/|\boldsymbol\rho|$.

so a "fringe in the visibility" reveals the binary nature.

## the inverse: from visibility to image

if I have *complete* (u, v) coverage:
$$I(\mathbf l) = \int \mathcal V(\mathbf u) e^{+2\pi i \mathbf u \cdot \mathbf l} d^2\mathbf u$$

inverse FT.

reality: I have *sparse* sampling (only certain $\mathbf u$ measured). the inverse FT of the sampled data gives the **dirty image**: the true image convolved with the **dirty beam** (FT of the sampling function). deconvolution (CLEAN, MEM) recovers the true image.

## why this is "Van Cittert-Zernike"

named after Pieter van Cittert (1934) and Frits Zernike (1938) who derived it independently for astronomical applications. the result was actually implicit in older optics textbooks, but the explicit application to *resolving stellar sources via spatial coherence* is the Van Cittert-Zernike contribution.

## the radio version

in radio astronomy, the same formula appears in slightly different notation. the **complex visibility**:
$$V(\mathbf u, \mathbf v) = \int\int I(l, m) e^{-2\pi i (u l + v m)} dl \, dm$$

with $(u, v)$ the projected baseline in wavelengths and $(l, m)$ direction cosines. measured visibilities go in the $(u, v)$ plane; FT gives the dirty image.

at radio wavelengths, this is the *foundation* of synthesis imaging.

## the limits of validity

four assumptions, all reasonable for astronomy:

1. **far field**: source is much further than $D^2/\lambda$ ($D$ is the source size). always true for stars and galaxies
2. **quasi-monochromatic**: narrow bandwidth, $\Delta\lambda/\lambda \ll 1$. interferometers use spectral filtering or correlator channels to enforce this
3. **stationary source**: source brightness doesn't change during the observation. mostly true except for transients
4. **incoherent source**: thermal sources are incoherent (different parts emit independently). true for stars; not always for masers and lasers

## scientific figure

<img src="{{ "/assets/images/van_cittert_zernike_geometry.svg" | relative_url }}" alt="van_cittert_zernike_geometry" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />

reading cue: two separated antennas measure a correlation of the incoming field. Van Cittert-Zernike says that correlation is one Fourier component of the sky brightness.

source: local study diagram generated from the standard narrow-field VCZ relation.

## see also

- [Spatial coherence](../../../02_Zettel/Theory/interf/Spatial coherence.html)
- [Coherence function and visibility](../../../02_Zettel/Theory/interf/Coherence function and visibility.html)
- [Fringe visibility and contrast](../../../02_Zettel/Theory/interf/Fringe visibility and contrast.html)
- [Aperture synthesis principle](../../../02_Zettel/Theory/interf/Aperture synthesis principle.html)
- [The (u, v) plane](../../../02_Zettel/Theory/interf/The (u, v) plane.md)
- [Dirty beam and dirty image](../../../02_Zettel/Theory/interf/Dirty beam and dirty image.html)
- [Astronomical_Interferometry_MOC](../../../00_Atlas/Astronomical_Interferometry_MOC.html)
