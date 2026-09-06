---
layout: default
title: "Appendix A - Optical telescopes"
---

## Basic parameters

A telescope is characterized by its **aperture** $D$ and **focal length** $f$

The **aperture ratio** (or f-number) is defined as:
$$\frac{f}{D}$$

A small f-number means a fast (wide-angle) telescope
	a large f-number means a slow (narrow-angle, high-magnification) telescope

The **plate scale** (or telescope scale) gives the angular size per unit length at the focal plane:
$$S = \frac{206265}{f} \quad \left[\frac{\text{arcsec}}{\text{mm}}\right]$$

where $f$ is in mm and $206265$ is the number of arcseconds per radian

---

## Mirror geometry

A mirror surface can be described as a **conic section** of revolution
	the general equation for a conic surface is:
$$(1 + b)z^2 - 2Rz + r^2 = 0$$

where
	$r$ is the distance from the optical axis
	$z$ is the coordinate along the optical axis
	$R$ is the **radius of curvature** at the vertex
	$b$ is the **conic constant** (Schwarzschild constant)

The conic constant defines the shape:
	$b = 0$: **sphere**
	$b = -1$: **paraboloid**
	$b < -1$: **hyperboloid**
	$-1 < b < 0$: **ellipsoid**

---

## Focal length of a conic mirror

Solving the conic equation for small $r$ (paraxial approximation):
$$z \approx \frac{r^2}{2R}$$

The reflected ray from a point at height $r$ crosses the axis at distance $f$ from the vertex
	for a **paraboloid** ($b = -1$), all parallel rays focus at the same point:
$$f = \frac{R}{2}$$

This is why paraboloids are used as primary mirrors:
	they are free of **spherical aberration** for on-axis sources

---

## Reflecting vs refracting telescopes

In X-ray astronomy, **lenses are impractical**
	the refractive index of materials at X-ray energies is $n = 1 - \delta$
		with $\delta \sim 10^{-5}$–$10^{-6}$
			so refraction effects are negligible
				and focal lengths would need to be enormous

This is why all X-ray telescopes use **grazing incidence mirrors** (reflectors)
	not refracting optics
