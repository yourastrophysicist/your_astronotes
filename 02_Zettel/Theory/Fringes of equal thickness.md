---
layout: default
title: "Fringes of equal thickness"
---

# Fringes of equal thickness

a class of fringes formed when light reflects off a *thin film of varying thickness*. the fringes follow contours of constant thickness — at each point, the OPD between the front-surface and back-surface reflections depends only on the local thickness.

also called **Fizeau fringes** in older literature.

## the geometry

![Fringes of equal thickness: localized straight contour fringes produced by an optical wedge or film of non-uniform thickness.](Fringes_of_equal_thickness.jpg)


a thin film with non-parallel surfaces (a wedge, a curved gap, a soap bubble's varying thickness) of refractive index $n_f$. the *thickness* $d(x, y)$ varies across the film.

light reflects from the front surface (path 1) and the back surface (path 2). the OPD at each $(x, y)$ is

$$\Lambda(x,y) = 2 n_f d(x,y) \cos\theta_t + \pi/2 \text{ phase shifts}$$

at near-normal incidence ($\cos\theta_t \approx 1$):

$$\Lambda \approx 2 n_f d(x, y)$$

so the fringes follow $\Lambda = m\lambda$ contours, which are *contours of constant thickness*.

## why "equal thickness"?

each bright fringe corresponds to a specific thickness $d_m = m\lambda/(2 n_f)$. so the fringe pattern is essentially a *contour map of the film's thickness*.

simple cases:
- **wedge** (thickness varies linearly): fringes are *straight, parallel lines*
- **circular gap** (e.g. between a flat and a curved lens): fringes are *circles* — these are [Newton's rings](../../02_Zettel/Theory/interf/Newton's rings.html)
- **soap bubble**: thickness varies in complex curves; fringes follow contour curves
- **oil film on water**: thickness depends on local film age; the iridescent colors are equal-thickness fringes in white light

## the relation to other fringes

distinction from [Fringes of equal inclination](../../02_Zettel/Theory/interf/Fringes of equal inclination.html):
- equal-thickness: thickness varies, angle is fixed → contours follow thickness
- equal-inclination: thickness fixed, angle varies → rings follow angle

physical setup distinguishes them: parallel-faced plate gives equal-inclination; non-parallel plate gives equal-thickness.

## the iridescent colors of soap bubbles

a soap film's thickness varies from a few hundred nm at the top (drained, thin) to thousands of nm at the bottom (water collects). illuminated by white light, the fringes are wavelength-dependent:
- thin parts: visible as one or two specific colors
- thick parts: rapidly oscillating, no visible coloration (the colors average out)

so soap bubbles show *iridescent* coloration in their thinner regions, gradient toward gray in their thicker bottom.

oil-on-water: same physics, with refractive index $n \approx 1.5$ for typical oil instead of $n \approx 1.4$ for soap film.

## the practical metrology use

a Fizeau interferometer is the workhorse of optical testing:
- a precision-flat reference is placed close to the test surface
- the air gap between them is the "thin film"
- equal-thickness fringes show the *difference* between the two surfaces at each point

this is how telescope mirrors are figured to $\lambda/20$ precision, how camera lenses are tested, how silicon wafers are characterized for flatness. *the* standard optical-test technique.

a typical Fizeau test:
- HeNe laser at 632.8 nm
- 10-cm reference flat
- read fringes by eye or imaging

each fringe corresponds to half a wavelength of surface-height difference (one-way: light goes there and back). 4 fringes = 1 wavelength (~ 600 nm) of total surface departure from flat.

## the modern phase-shifting interferometry

instead of just counting fringes, you *shift the phase* of the reference (e.g. by piezo-translating the reference flat) and record images at multiple phase steps. mathematical reconstruction gives a 2D *height map* of the surface to nm precision.

this is *the* modern method for optical-element characterization. used in:
- aspheric-optic manufacturing
- semiconductor-fab metrology
- precision-machine inspection

## see also

- [Optical path difference OPD](../../02_Zettel/Theory/interf/Optical path difference OPD.html)
- [Fringes of equal inclination](../../02_Zettel/Theory/interf/Fringes of equal inclination.html)
- [Newton's rings](../../02_Zettel/Theory/interf/Newton's rings.html)
- [Amplitude-division interferometers](../../02_Zettel/Theory/Amplitude-division interferometers.html)
- [Astronomical_Interferometry_MOC](../../00_Atlas/Astronomical_Interferometry_MOC.html)
