---
layout: default
title: "Fraunhofer diffraction"
---

# Fraunhofer diffraction

the **far-field** limit of diffraction: when the screen is far from the aperture, the diffraction integral becomes a **2D Fourier transform** of the aperture function. this is the magic that connects optics to Fourier analysis and underwrites every interferometric calculation.

## the setup

a coherent plane wave illuminates an aperture in a plane. the wave that emerges is given by Huygens' principle: each point inside the aperture acts as a secondary source. on a screen at distance $z$ from the aperture, the wave is the superposition of these spherical wavelets.

let $A(\xi, \eta)$ be the **aperture function**: $A = 1$ where the aperture is open, $A = 0$ where blocked. the wave at point $(x, y)$ on the screen is

$$\psi(x, y) = \frac{1}{i \lambda z} \int\int A(\xi, \eta) \, e^{i k r} \, d\xi \, d\eta$$

where $r = \sqrt{z^2 + (x - \xi)^2 + (y - \eta)^2}$ is the distance from each source point in the aperture to $(x, y)$ on the screen.

## the Fraunhofer approximation

when $z \gg$ aperture size and screen offset, expand $r$:

$$r \approx z + \frac{x^2 + y^2}{2z} - \frac{x \xi + y \eta}{z} + O\!\left(\frac{(x \xi + y \eta)^2}{z^3}\right)$$

substitute into the integral:

$$\psi(x, y) \propto e^{i k z + i k (x^2 + y^2)/(2z)} \int\int A(\xi, \eta) \, e^{-i k (x \xi + y \eta)/z} \, d\xi \, d\eta$$

the prefactor is irrelevant for intensity (it has unit modulus). define the spatial frequencies

$$u = x/(\lambda z), \quad v = y/(\lambda z)$$

then:

$$\psi(u, v) \propto \int\int A(\xi, \eta) \, e^{-2\pi i (u \xi + v \eta)} \, d\xi \, d\eta = \tilde A(u, v)$$

**the diffraction pattern is the Fourier transform of the aperture function**.

## intensity

since $\psi \propto \tilde A$,
$$I(u, v) \propto |\tilde A(u, v)|^2$$

intensity is the *squared modulus* of the Fourier transform. this is the **diffraction pattern**.

## examples

### single slit of width $a$

$A(\xi) = \text{rect}(\xi/a) = 1$ for $|\xi| < a/2$, 0 else.

Fourier transform: $\tilde A(u) = a \, \text{sinc}(\pi a u)$ where $\text{sinc}(x) = \sin x/x$.

intensity: $I(u) \propto \text{sinc}^2(\pi a u)$.

first null at $u = 1/a$, i.e. angle $\theta = \lambda/a$.

### double slit (Young)

two slits at $\pm d/2$, each width $a$:
$A(\xi) = \text{rect}((\xi - d/2)/a) + \text{rect}((\xi + d/2)/a)$.

$\tilde A(u) = 2 a \, \text{sinc}(\pi a u) \, \cos(\pi d u)$.

$I(u) \propto \text{sinc}^2(\pi a u) \, \cos^2(\pi d u)$.

a sinc envelope ("single-slit diffraction") modulating cosine fringes ("two-slit interference"). fringe spacing in $u$: $1/d$, in angle: $\lambda/d$.

### circular aperture, diameter $D$

$A(\xi, \eta) = $ disk of radius $D/2$.

$\tilde A(u, v) = \pi (D/2)^2 \cdot \frac{2 J_1(\pi D \sqrt{u^2 + v^2})}{\pi D \sqrt{u^2 + v^2}}$

intensity: $I(u, v) \propto \left[\frac{2 J_1(\pi D \rho)}{\pi D \rho}\right]^2$ where $\rho = \sqrt{u^2 + v^2}$.

first null at $\rho = 1.22/D$, i.e. angle $\theta = 1.22 \lambda/D$. **the Airy disk**, the diffraction-limited PSF of a perfect circular telescope.

## the Fraunhofer condition

the approximation $r \approx z + \text{linear}$ is valid when

$$z \gg \frac{(\xi^2 + \eta^2)}{\lambda}$$

across the aperture. for a 1m aperture at 500 nm: $z \gg 2$ km. for a 1cm slit: $z \gg 200$ m.

in optics labs, we use a lens to *project* the Fraunhofer pattern: the pattern at the focal plane of a converging lens *is* the Fraunhofer diffraction pattern of whatever's at the input. this is why telescope focal planes are useful for diffraction calculations.

## why this matters for interferometry

three reasons:

### 1. PSF is the diffraction pattern

the **point spread function** (PSF) of an optical system is the Fraunhofer diffraction pattern of its aperture. Airy disk for a circular aperture. interferometric arrays have *much more complex* PSFs — the Fourier transform of their (u, v) coverage.

### 2. Van Cittert-Zernike

the visibility (Fourier transform of source brightness) is sampled at points $(u, v) = \mathbf B/\lambda$. these are *the same coordinates* as Fraunhofer's $u, v$. the Fraunhofer formalism *is* the interferometry formalism.

### 3. aperture synthesis

if I have multiple apertures, the combined aperture function is the sum of individual ones. the diffraction pattern is the Fourier transform of the sum, which has both each individual aperture's PSF and the **interference patterns** between every pair.

so the Airy disk of the *array* contains: each telescope's diffraction-limited PSF, plus fringes at the spacing $\lambda/B_{ij}$ for every baseline. this is the "dirty beam" of aperture synthesis.

## the wave-equation perspective

Fraunhofer's Fourier transform is not a coincidence; it is the *small-angle limit of free-space wave propagation*. the angular-spectrum decomposition writes any wave as a sum of plane waves, each with its own direction. the far-field is dominated by the plane wave directly toward the observation point, and the amplitudes of the contributing plane waves *are* the Fourier transform of the aperture amplitude.

free-space propagation = Fourier transform = aperture function → diffraction pattern. this is the deepest level on which the Fourier connection lives.

## scientific figure

![airy_pattern_generated](../../../assets/images/airy_pattern_generated.png)

reading cue: Fraunhofer diffraction means the far-field pattern is the Fourier transform of the aperture. for a circular aperture this gives the Airy pattern, with the first zero setting the familiar $1.22\lambda/D$ scale.

source: local plot generated from $I(x)=[2J_1(x)/x]^2$.

## see also

- [Plane waves and Huygens principle](../../../02_Zettel/Theory/interf/Plane waves and Huygens principle.html)
- [Diffraction patterns of simple apertures](../../../02_Zettel/Theory/interf/Diffraction patterns of simple apertures.html)
- [Point spread function](../../../02_Zettel/Theory/interf/Point spread function.html)
- [Optical transfer function](../../../02_Zettel/Theory/interf/Optical transfer function.html)
- [Van Cittert-Zernike theorem](../../../02_Zettel/Theory/interf/Van Cittert-Zernike theorem.html)
- [Astronomical_Interferometry_MOC](../../../00_Atlas/Astronomical_Interferometry_MOC.html)
