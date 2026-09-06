---
layout: default
title: "Fringes of equal inclination"
---

# Fringes of equal inclination

a class of fringes formed when light reflects off a *thin parallel plate* (or thin film), with multiple beams interfering. the fringes are **circles**, with each circle corresponding to a particular angle of incidence on the plate. extended source needed.

also called **Haidinger fringes** in older literature.

## the geometry

![Fringes of equal inclination (Haidinger fringes) produced by light at varying angles of incidence on parallel planar surfaces.](Fringes_of_equal_inclination.svg)


a parallel-faced plate of thickness $d$ and refractive index $n_f$ is illuminated by an *extended* light source (broad enough that multiple angles of incidence are present). the eye (or a detector with a focusing lens) is placed to observe light reflected from both surfaces.

at each point on the plate, light reflects from:
- the top surface (path 1)
- the bottom surface (after refraction into the plate, internal reflection, and refraction back out — path 2)

the OPD between path 1 and path 2 depends on the angle of refraction inside the plate, $\theta_t$:

$$\Lambda = 2 n_f d \cos\theta_t$$

(plus a $\pi$ phase shift on one of the reflections, depending on which interface is the reflector).

## why circles?

the OPD depends only on $\cos\theta_t$, not on azimuth. so for a given $\Lambda$ (i.e. given fringe order $m$), the locus of constant $\theta_t$ is a *cone* of rays around the normal to the plate.

when the eye focuses at infinity (or a lens images parallel rays to the focal plane), this cone becomes a *circle* on the focal plane. each $m$ gives a different circle, and the rings appear concentric around the normal direction.

so:
- bright fringe at $\Lambda = m\lambda$: $\cos\theta_t = m\lambda/(2n_f d)$
- circles get smaller as $m$ increases (for fixed $\Lambda$)

## the conditions to see them

three:

### 1. extended source

a point source produces only one angle of incidence — only one fringe at a time. to see multiple fringes simultaneously, you need an *extended source* covering a range of angles.

a typical setup: a diffuse source (e.g. a frosted bulb), illuminating a tilted glass plate, viewed by an eye focused at infinity (or through a telescope). the rings form in the eye.

### 2. parallel-faced plate

if the two surfaces are not parallel, the OPD varies across the plate, producing different fringes — that's [Fringes of equal thickness](../../02_Zettel/Theory/interf/Fringes of equal thickness.html) instead.

### 3. moderate coherence

the source needs enough temporal coherence ($\ell_c > \Lambda$) to see fringes. for a typical glass plate ($d = 1$ mm, $n_f = 1.5$), $\Lambda \sim 3$ mm, requiring $\ell_c > 3$ mm. that's about $\Delta\lambda < 50$ nm at $\lambda = 500$ nm. moderately narrow filter.

## the relation to other fringes

these are *temporal-coherence-limited* fringes from a partial-reflection / partial-transmission system. close cousin:

- [Fringes of equal thickness](../../02_Zettel/Theory/interf/Fringes of equal thickness.html): same physics, but with a *non-parallel* plate (wedge). fringes follow contours of equal thickness rather than equal inclination.
- [Newton's rings](../../02_Zettel/Theory/interf/Newton's rings.html): a special case of equal-thickness, with circular contours from a curved surface.

both equal-inclination and equal-thickness fringes are products of *thin-film interference*, the same physics that produces the rainbow colors of soap bubbles and oil films.

## a numerical example

for a fused-silica plate of thickness $d = 10$ mm ($n_f = 1.46$), at $\lambda = 632.8$ nm (HeNe):

at normal incidence ($\theta_t = 0$):
$$\Lambda = 2 \times 1.46 \times 10 \text{ mm} = 29.2 \text{ mm}$$

corresponding to order $m = \Lambda/\lambda = 4.6 \times 10^4$.

the angular spacing between adjacent rings: $\Delta\theta_t \sim \lambda/(2 n_f d \theta_t)$, so for moderate $\theta_t$ (~5°), the rings are spaced by milliradians. easily visible by eye.

## the use in metrology

a Fizeau interferometer is essentially a fringes-of-equal-inclination setup adapted for testing optical surfaces:
- a reference flat below
- a test surface above
- the fringes show the *difference* between the two surfaces, which can detect imperfections

this is *the* standard method for testing telescope mirrors and other optical elements to fractional-wavelength precision.

## see also

- [Optical path difference OPD](../../02_Zettel/Theory/interf/Optical path difference OPD.html)
- [Fringes of equal thickness](../../02_Zettel/Theory/interf/Fringes of equal thickness.html)
- [Newton's rings](../../02_Zettel/Theory/interf/Newton's rings.html)
- [Amplitude-division interferometers](../../02_Zettel/Theory/Amplitude-division interferometers.html)
- [Astronomical_Interferometry_MOC](../../00_Atlas/Astronomical_Interferometry_MOC.html)
