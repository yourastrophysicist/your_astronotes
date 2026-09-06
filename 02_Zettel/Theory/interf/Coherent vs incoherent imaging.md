---
layout: default
title: "Coherent vs incoherent imaging"
---

# Coherent vs incoherent imaging

a fundamental distinction. **coherent** imaging adds wave amplitudes; **incoherent** imaging adds intensities. interferometers operate in coherent mode (between sub-apertures, of light from the same astronomical source). regular telescopes mostly operate incoherently (between independent sources within the field).

## the math

two waves $\psi_1, \psi_2$ at a detector. the detected intensity is $I = |\psi_1 + \psi_2|^2$.

if $\psi_1$ and $\psi_2$ are **coherent** (same source, fixed phase relationship):
$$I = |\psi_1|^2 + |\psi_2|^2 + 2 \text{Re}\{\psi_1^* \psi_2\}$$

the cross term $2\text{Re}\{\psi_1^* \psi_2\}$ is the interference. depending on the phase, it can be positive (constructive) or negative (destructive).

if $\psi_1, \psi_2$ are **incoherent** (independent sources, or same source but with phases that vary much faster than the detector integration time), the cross term **averages to zero**:
$$\langle I \rangle = \langle |\psi_1|^2 \rangle + \langle |\psi_2|^2 \rangle = I_1 + I_2$$

intensities just sum.

## what makes light coherent

mutual coherence requires both:

1. **temporal coherence**: the wave's phase is predictable over the relevant time interval. characterized by a coherence time $\tau_c \sim 1/\Delta\nu$, the inverse bandwidth. a laser has $\tau_c \sim$ ms. starlight at 500 nm has $\Delta\nu \sim 10^{14}$ Hz so $\tau_c \sim 10^{-14}$ s — *extremely short*

2. **spatial coherence**: the wave's phase relationship between two points is stable. characterized by a coherence area $A_c \sim (\lambda/\theta_s)^2$, the inverse squared angular size of the source. a point source has infinite coherence area; a uniform disk of angular size $\theta_d$ has $A_c \sim (\lambda/\theta_d)^2$

for stellar interferometry: the source is *partially coherent* spatially (because it has finite angular size), and the partial coherence *is* the visibility we measure.

## why interferometers measure coherent quantities

an interferometer combines light from two telescopes with a *common phase reference* (the same astronomical source). the relative phase between the two telescopes is determined by the geometry (path difference) plus the source brightness distribution. it does not vary on detector-integration timescales (modulo atmosphere).

so the interferometer measures the cross-term $\langle \psi_1^* \psi_2 \rangle$ — the **complex coherence function**. this is the *visibility*, and it is what carries the source information.

## why imaging telescopes measure incoherent quantities

an imaging telescope sums light from many independent sources within its field of view. those sources do not share a phase relationship: their wave-trains are independent. so each source contributes its own intensity, the total intensity is the sum, and we cannot distinguish wave amplitudes from each individually.

mathematically: each source produces its own PSF in the focal plane, and the image is the sum of the PSFs at their locations. this is **incoherent imaging**.

## the special case of a single source

a single point source illuminates the entire telescope with one coherent wave. the diffraction pattern (PSF) is what the telescope's aperture does to that single wave.

so for a *single* source, telescope imaging *is* coherent: the wave from the star reaches the focal plane through a long, predictable optical path, and the resulting Airy disk is the result of coherent interference within the aperture.

it is only *between* sources that the addition becomes incoherent.

## linear in amplitude vs linear in intensity

| coherent | incoherent |
|---|---|
| amplitudes add: $\psi = \psi_1 + \psi_2$ | intensities add: $I = I_1 + I_2$ |
| linear in $\psi$ | linear in $I$ |
| convolution with $\psi_{\rm PSF}$ | convolution with $|\psi_{\rm PSF}|^2 = $ intensity PSF |
| Fourier transforms involve $\tilde A$ (aperture) | Fourier transforms involve OTF $= |\tilde A|^2$ |
| relevant for laser, single point source, interferometry | relevant for imaging multi-source scenes |

both formalisms are correct *in their domain*. mixing them up is a common bug.

## where this matters in this course

- **Young's experiment**: coherent (single source through two slits)
- **double-slit Airy + cosine modulation**: coherent
- **interferometer baseline measurement**: coherent between baseline endpoints, *incoherent* sum over the source's surface (each surface point gives its own coherent fringe pattern that averages)
- **standard imaging of star clusters**: incoherent between stars
- **HBT intensity interferometry**: a *quantum* phenomenon where what is correlated is intensity, not amplitude

## the role of bandwidth

a wide-bandwidth source has very short temporal coherence. fringes only form for path differences smaller than $c \tau_c \sim c/\Delta\nu$. for white-light Young: only a few fringes are visible, near zero path difference. for a narrow-bandwidth filter: many fringes visible.

interferometers care about this because *delay lines* must equalize the path lengths of the two arms to within the **coherence length** $L_c = c/\Delta\nu$. for VLTI in the H-band ($\Delta\lambda/\lambda \sim 0.1$): $L_c \sim 16$ μm. the delay lines must hold the path difference to within microns.

## see also

- [Plane waves and Huygens principle](../../../02_Zettel/Theory/interf/Plane waves and Huygens principle.md)
- [Spatial coherence](../../../02_Zettel/Theory/interf/Spatial coherence.md)
- [Temporal coherence](../../../02_Zettel/Theory/interf/Temporal coherence.md)
- [Fringe visibility and contrast](../../../02_Zettel/Theory/interf/Fringe visibility and contrast.md)
- [Coherence function and visibility](../../../02_Zettel/Theory/interf/Coherence function and visibility.md)
- [Astronomical_Interferometry_MOC](../../../00_Atlas/Astronomical_Interferometry_MOC.md)
