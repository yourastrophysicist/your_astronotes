---
layout: default
title: "Fresnel double mirror"
---

# Fresnel double mirror

Augustin Fresnel's elegant 1819 demonstration of two-source interference. **two flat mirrors** meeting at a small angle $\alpha$, illuminated by a single point source. the reflections create two virtual coherent sources that produce Young-like fringes, without the need for slits.

historically important: it was *the* experiment that put the wave theory of light beyond doubt. Fresnel won the 1819 prize of the French Academy with this and related experiments.

## the geometry

a point source $S$ is placed near two mirrors meeting at angle $\alpha$ (typically a few minutes of arc). light from $S$ reflects off each mirror.

each reflection produces a *virtual image* of $S$:
- the first mirror reflects $S$ to $S_1'$
- the second mirror reflects $S$ to $S_2'$

the two virtual images are separated by

$$d = 2 a \sin\alpha \approx 2 a \alpha$$

where $a$ is the distance from $S$ to the line of intersection of the mirrors.

since both virtual sources come from the *same* physical source, they are perfectly coherent. they act exactly like a Young's two-slit pair.

## the fringes

at a screen at distance $L \gg d$ from the virtual sources, the fringe spacing is

$$\Delta y = \frac{\lambda L}{d} = \frac{\lambda L}{2 a \alpha}$$

with the fringes oriented perpendicular to the line $S_1' S_2'$.

## the practical setup

the angle $\alpha$ is typically very small (a few arc-minutes) because:
- if $\alpha = 0$: the two mirrors are coplanar; no separation between virtual sources; no fringes
- if $\alpha$ is large: the separation $d$ is large; fringes are very fine, hard to resolve
- if $\alpha$ is too large: the two virtual sources are widely separated and the geometry breaks down

in practice $\alpha \sim 1'$ is chosen, giving $d$ on the order of mm for typical source distances.

a slit (instead of a point source) extends the source perpendicular to the line of mirrors. this gives parallel fringes oriented along the slit direction, easier to observe than pinhole-source fringes.

## the relation to Young

Fresnel's double mirror is *physically equivalent* to Young's two-slit experiment:
- both produce two coherent virtual sources from a single primary source
- the fringe pattern is identical (modulo the geometry)
- the visibility is the same (perfectly contrasted for an idealized point source)

advantages of Fresnel double mirror over Young:
- no slits → no diffraction-limited intensity loss
- entire source's intensity goes into the fringe pattern (in principle)

advantages of Young over Fresnel double mirror:
- conceptually simpler
- no critical mirror alignment needed
- works for arbitrary baselines (slit separations)

modern lecture demos use Young (more pedagogical clarity); Fresnel double mirror is mostly a historical curiosity.

## the historical context

Fresnel's experiments around 1815-1819 (with different setups: double mirror, biprism, single-slit diffraction) were the death blow to the corpuscular theory of light. they:

- showed wave-like interference is *real*, not just a curiosity
- predicted the dark *Poisson spot* in the shadow of a circular obstacle (verified by Arago)
- led to Fresnel's full diffraction theory
- led to the view that light is purely wavelike (until Einstein's 1905 photon paper)

## interference in the Fresnel double mirror

two waves arrive at a point on the screen. their OPD is

$$\Lambda = r_2 - r_1$$

where $r_1, r_2$ are paths from each virtual source to the observation point. for small angles:

$$\Lambda \approx d\sin\theta \approx d \cdot y/L$$

where $y$ is the position on the screen perpendicular to the bisector. fringes appear at $\Lambda = m\lambda$:

$$y_m = m \lambda L/d$$

**identical to Young's slit pattern**. as expected, since the two are mathematically equivalent.

## the Fresnel-double-mirror visibility

the fringes are at maximum contrast when:
- the source is sufficiently small (point-like)
- the source is monochromatic
- the alignment is precise

source size: same as in Young's experiment, with $\theta_s \cdot d/\lambda \ll 1$ (the source's angular size times the baseline gives spatial-coherence effects).

## the lesson for stellar interferometry

Fresnel's contemporaries didn't know it, but his double-mirror device was conceptually a *stellar interferometer*:
- swap the source for "an unresolved star"
- turn the device around so the mirrors collect starlight rather than emit it
- the visibility of the resulting fringes encodes the star's angular diameter

this is exactly Stéphan's adaptation in the 1870s, and Michelson's 20-foot beam interferometer in 1920. the modern VLTI and CHARA are direct descendants.

## see also

- [Wavefront-division interferometers](../../../02_Zettel/Theory/interf/Wavefront-division interferometers.html)
- [Young experiment as a stellar interferometer](../../../02_Zettel/Theory/interf/Young experiment as a stellar interferometer.html)
- [Fresnel biprism](../../../02_Zettel/Theory/interf/Fresnel biprism.html)
- [Lloyd mirror](../../../02_Zettel/Theory/interf/Lloyd mirror.html)
- [Optical path difference OPD](../../../02_Zettel/Theory/interf/Optical path difference OPD.html)
- [Astronomical_Interferometry_MOC](../../../00_Atlas/Astronomical_Interferometry_MOC.html)
