---
layout: default
title: "Diffraction patterns of simple apertures"
---

# Diffraction patterns of simple apertures

the standard Fraunhofer-diffraction patterns. each one shows up somewhere in interferometry, either as a calibration target, a benchmark for instrument design, or as the response of the array itself.

## single slit (rectangle)

aperture: width $a$, infinitely tall.

intensity:
$$I(\theta) \propto \text{sinc}^2\!\left(\frac{\pi a \sin\theta}{\lambda}\right)$$

with $\text{sinc}(x) = \sin x/x$.

first null at $\sin\theta = \lambda/a$, i.e. $\theta \approx \lambda/a$ for small angles. side-lobe ratio at first peak: $4.7\%$ of the main peak.

## rectangular aperture

width $a \times b$. intensity:
$$I(\theta_x, \theta_y) \propto \text{sinc}^2(\pi a \theta_x/\lambda) \cdot \text{sinc}^2(\pi b \theta_y/\lambda)$$

independent in two directions. resolution different along the two axes if $a \neq b$.

## circular aperture (the Airy pattern)

this is **the** diffraction pattern of a normal telescope.

$$I(\theta) \propto \left[\frac{2 J_1(\pi D \theta/\lambda)}{\pi D \theta/\lambda}\right]^2$$

where $J_1$ is the Bessel function of the first kind.

key features:
- first null at $\theta = 1.22 \lambda/D$ (the **diffraction limit**)
- first side lobe at 1.6% of peak intensity
- 84% of light in the central disk
- the pattern is **rotationally symmetric**

this is what the PSF of HST or any ideal circular telescope looks like.

## double slit (Young)

slit width $a$, separation $d$:
$$I(\theta) \propto \text{sinc}^2(\pi a \theta/\lambda) \cdot \cos^2(\pi d \theta/\lambda)$$

a sinc² envelope (each slit's diffraction) modulating cosine² fringes (interference between the two slits).

fringe spacing: $\Delta\theta = \lambda/d$.

## N-slit grating

$N$ slits, each width $a$, separation $d$:
$$I(\theta) \propto \text{sinc}^2(\pi a \theta/\lambda) \cdot \frac{\sin^2(N \pi d \theta/\lambda)}{\sin^2(\pi d \theta/\lambda)}$$

sharp peaks ("principal maxima") at $\theta = m \lambda/d$ for integer $m$, with width $\sim \lambda/(Nd)$. the more slits, the sharper the peaks.

this is how *spectrographs* work: a grating with thousands of slits separates wavelengths sharply because the principal-maximum positions depend on $\lambda$.

## annular aperture (telescope with central obstruction)

a circular aperture of diameter $D$ with a central obstruction of diameter $\epsilon D$ (the secondary mirror).

intensity:
$$I(\theta) \propto \left[\frac{2 J_1(\pi D \theta/\lambda)}{\pi D \theta/\lambda} - \epsilon^2 \frac{2 J_1(\pi \epsilon D \theta/\lambda)}{\pi \epsilon D \theta/\lambda}\right]^2 / (1 - \epsilon^2)^2$$

central obstruction:
- *narrows* the central peak slightly (resolution improves)
- *raises* the first side lobe (contrast worsens)

a Cassegrain telescope with $\epsilon \approx 0.3$ has $\sim 8\%$ first-side-lobe ratio (vs 1.6% unobstructed). matters for high-contrast imaging.

## Gaussian aperture

if the aperture amplitude is Gaussian rather than uniform:
$$A(r) = e^{-r^2/2 w^2}$$

the diffraction pattern is also Gaussian:
$$I(\theta) \propto e^{-\pi^2 w^2 \theta^2/\lambda^2}$$

no side lobes. the "ideal" PSF for high-contrast imaging — at the cost of 50% of the light. this is what **apodization** with a Gaussian mask achieves.

## two-aperture interferometer

two circular sub-apertures of diameter $D$ separated by baseline $B$:

$$I(\theta) \propto \left[\frac{2 J_1(\pi D \theta/\lambda)}{\pi D \theta/\lambda}\right]^2 \cdot \cos^2(\pi B \theta/\lambda)$$

each Airy disk modulated by cosine fringes. fringe spacing: $\lambda/B$. envelope: Airy disk of single subaperture, scale $\lambda/D$. so the field of view (where fringes are visible) is set by $D$, the resolution within that field of view by $B$.

this is the prototype for [Michelson stellar interferometer](../../../02_Zettel/Theory/interf/Michelson stellar interferometer.md).

## sparse aperture array

$N$ subapertures (diameter $D$ each) at arbitrary positions $\mathbf r_i$ in the pupil:

$$\tilde A(\mathbf u) = \tilde A_{\rm sub}(\mathbf u) \cdot \sum_i e^{-2\pi i \mathbf r_i \cdot \mathbf u}$$

intensity:
$$I(\mathbf u) \propto |\tilde A_{\rm sub}|^2 \cdot \left|\sum_i e^{-2\pi i \mathbf r_i \cdot \mathbf u}\right|^2$$

the second factor is a function of the **array geometry**. its peaks are at the spatial frequencies $\mathbf u$ such that all sub-apertures interfere constructively. these peaks form the **(u, v) coverage** of the array.

this is the foundation of [Aperture synthesis principle](../../../02_Zettel/Theory/interf/Aperture synthesis principle.md).

## what to remember

- **Airy disk** for circular aperture, $\theta_1 = 1.22\lambda/D$
- **sinc²** for slits, $\theta_1 = \lambda/a$
- **double-slit**: cosine fringes inside Airy/sinc envelope
- **central obstruction**: raises side lobes
- **Gaussian apodization**: zero side lobes
- **array**: $|\sum e^{-2\pi i \mathbf r_i \cdot \mathbf u}|^2$ encodes the (u, v) coverage

these are the "elementary functions" in interferometric design and analysis.

## scientific figure

![airy_pattern_generated](../../../assets/images/airy_pattern_generated.png)

reading cue: the circular-aperture case is the one to keep in memory. the central lobe is the diffraction-limited core; the rings are sidelobes from the hard edge of the aperture.

source: local plot generated from the Airy-pattern Bessel formula.

## see also

- [Fraunhofer diffraction](../../../02_Zettel/Theory/interf/Fraunhofer diffraction.md)
- [Point spread function](../../../02_Zettel/Theory/interf/Point spread function.md)
- [Optical transfer function](../../../02_Zettel/Theory/interf/Optical transfer function.md)
- [Aperture synthesis principle](../../../02_Zettel/Theory/interf/Aperture synthesis principle.md)
- [Astronomical_Interferometry_MOC](../../../00_Atlas/Astronomical_Interferometry_MOC.md)
