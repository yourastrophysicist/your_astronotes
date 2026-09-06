---
layout: default
title: "Plane waves and Huygens principle"
---

# Plane waves and Huygens principle

the two foundational tools of wave optics. plane waves are the simplest solutions to the wave equation; Huygens' principle is the geometric construction that lets us track waves through obstacles, slits, and apertures. together they explain everything from Young's experiment to diffraction-limited resolution.

## plane waves

a plane wave is a propagating disturbance with planar wavefronts (surfaces of constant phase):

$$\psi(\mathbf r, t) = A \, e^{i(\mathbf k \cdot \mathbf r - \omega t)}$$

with:
- $A$ amplitude
- $\mathbf k$ wave vector, $|\mathbf k| = 2\pi/\lambda$, direction = direction of propagation
- $\omega = 2\pi \nu = c |\mathbf k|$ angular frequency
- $\mathbf k \cdot \mathbf r - \omega t$ phase, constant on planes perpendicular to $\mathbf k$

light from a distant source (a star) arrives at Earth as essentially a plane wave: the wavefronts are sections of a sphere whose radius (the distance) is so large that locally they look flat.

## why plane waves matter for interferometry

a *coherent* plane wave is what an interferometer needs. when the wavefront across a baseline of length $B$ is *the same wave* (i.e. the source is a single point at infinity), the two telescopes receive the same wave with a relative phase $\phi = 2\pi B \sin\theta/\lambda$ depending only on the source direction $\theta$.

if the source is *extended* (a stellar disk, not a point), each part of the source contributes its own plane wave from its own direction. the superposition of all those plane waves is what the interferometer measures. the geometry of how they add up is encoded in the **fringe visibility**, and the relationship between source brightness and visibility is the **Van Cittert-Zernike theorem**.

## Huygens principle

every point on a wavefront acts as the source of a secondary spherical wavelet. the new wavefront a moment later is the envelope of all these wavelets.

mathematically: the wave at a point $P$ is the integral over the wavefront $S$ of contributions from each "secondary source":

$$\psi(P) = \int_S K(\theta) \, \frac{\psi(\mathbf r')}{r} \, e^{ikr} \, dS$$

with $r = |P - \mathbf r'|$ the distance from each source point to $P$, and $K(\theta)$ an "obliquity factor" that depends on the angle (formally derived in Kirchhoff's diffraction theory).

Huygens' principle is what gives us **diffraction**: when a wave passes through a slit, only the points within the slit contribute as secondary sources, and the new wave spreads beyond the geometric shadow.

## three uses

### 1. propagation of plane waves

a plane wave propagating across empty space remains a plane wave: the spherical wavelets from an infinite plane add up to a planar envelope. consistency check.

### 2. propagation of spherical waves

a spherical wave from a point source propagates outward as concentric spheres: each point on a sphere generates wavelets that combine into a larger sphere centered on the original source.

### 3. diffraction

when a wave hits an aperture, only the wavefront *within* the aperture continues. each point of that wavefront becomes a Huygens source. the resulting wave behind the aperture is the *integral over the aperture* of spherical wavelets, evaluated at the screen. this is the diffraction integral.

in the **Fraunhofer (far-field)** limit, this integral becomes a Fourier transform: the diffraction pattern is the Fourier transform of the aperture function.

## the connection to the diffraction limit

a circular aperture of diameter $D$ produces (via Huygens / Fraunhofer) an Airy diffraction pattern with first null at angle

$$\theta = 1.22 \, \frac{\lambda}{D}$$

this is the diffraction limit. it is *purely a wave-optics result*: there is no way to do better with a single aperture.

interferometry's trick is to replace "single aperture of diameter $D$" with "many small apertures spread over $B$": Huygens' integral now runs over the *separated* apertures, the resulting pattern has fine structure on angular scales $\sim \lambda/B$, and we can resolve features that small.

## historical importance

Christiaan Huygens (1690): his *Traité de la Lumière* introduced this construction. originally meant for water waves and sound, but works for any linear wave equation. it remained controversial until Young's experiment (1801) and Fresnel's diffraction theory (1820s) confirmed wave optics over Newton's corpuscular theory.

today Huygens' principle is *the* practical tool for tracing light through complex optical systems. it underwrites every diffraction calculation in interferometry.

## see also

- [Superposition and interference](../../../02_Zettel/Theory/interf/Superposition and interference.html)
- [Fraunhofer diffraction](../../../02_Zettel/Theory/interf/Fraunhofer diffraction.html)
- [Diffraction patterns of simple apertures](../../../02_Zettel/Theory/interf/Diffraction patterns of simple apertures.html)
- [Young experiment as a stellar interferometer](../../../02_Zettel/Theory/interf/Young experiment as a stellar interferometer.html)
- [Astronomical_Interferometry_MOC](../../../00_Atlas/Astronomical_Interferometry_MOC.html)
