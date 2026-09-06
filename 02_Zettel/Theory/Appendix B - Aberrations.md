---
layout: default
title: "Appendix B - Aberrations"
---

## Seidel aberrations

In the **paraxial approximation**, all optical systems are perfect
	but real optical systems deviate from this ideal
		these deviations are called **aberrations**

**Seidel theory** classifies the five primary (third-order) aberrations:
	**spherical aberration**
	**coma**
	**astigmatism**
	**field curvature**
	**distortion**

In telescope design, the most important are spherical aberration and coma

---

## Spherical aberration

For a spherical mirror, parallel rays at different heights $\rho$ from the optical axis
	do not all focus at the same point

The transverse displacement of a ray from the paraxial focus is:
$$\Delta r = B \rho^3$$

where
	$B$ is the spherical aberration coefficient
	$\rho$ is the height of the ray at the mirror

This produces a **blur disk** at the focal plane
	its size grows as $\rho^3$
		so rays from the edge of the mirror are the most affected

A **paraboloid** eliminates spherical aberration completely for on-axis sources
	($B = 0$ for a paraboloid with on-axis parallel input)

![](https://upload.wikimedia.org/wikipedia/commons/9/92/Spherical_aberration_2.svg)
<font color="#bfbfbf">Spherical aberration: an ideal lens (left) focuses all parallel rays to a single point; a real lens with spherical surfaces (right) focuses rays at different heights to different points along the axis, producing a blur disk at the focal plane.</font>

---

## Coma

Coma affects **off-axis** point sources
	parallel rays from a slightly off-axis direction do not converge to a single point

The image of an off-axis point source is a **comet-shaped figure**
	with a bright core and a tail extending away from the optical axis
		the opening angle of the coma figure is **60°**

Coma is proportional to:
	the **field angle** (distance of the source from the optical axis)
	the square of the aperture

A **Ritchey-Chrétien** telescope is designed to eliminate both spherical aberration and coma simultaneously
	making it superior for wide-field imaging compared to a standard Cassegrain

![](https://upload.wikimedia.org/wikipedia/commons/8/87/Lens_coma.svg)
<font color="#bfbfbf">Coma aberration. Off-axis rays passing through different zones of the lens focus at different heights in the focal plane, producing a characteristic comet-shaped (coma) image of a point source. The opening angle of the coma figure is 60°.</font>

---

## Diffraction limit

Even a perfect optical system has a fundamental resolution limit from **diffraction**
	for a circular aperture of diameter $D$, the Airy disk has angular radius:
$$\theta_{diff} \approx 1.22 \frac{\lambda}{D}$$

This is the best possible angular resolution
	aberrations only make it worse
