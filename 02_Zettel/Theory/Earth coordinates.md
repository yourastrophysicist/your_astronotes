---
layout: default
title: "Earth coordinates"
---

to specify a point on the Earth's surface (or, equivalently, on the celestial sphere if I treat Earth as a unit sphere), I need **two angles**.

the Earth's rotation axis defines two **poles**: north (P) and south (P'). perpendicular to the axis, through the center, is the **equatorial plane**; its intersection with the surface is the **equator**.

- a **parallel** of latitude is a small circle parallel to the equator
- a **meridian** is a half-great-circle joining the two poles

<img src="{{ "/assets/images/sphereastro-16.png" | relative_url }}" alt="sphereastro-16" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />

---

## the two coordinates

**geographical latitude** $\phi$: the angle between the local vertical and the equatorial plane.
- positive in the northern hemisphere, negative in the southern
- $\phi \in [-90°, +90°]$
- *also equals the altitude of the celestial pole on the local horizon* (this is what every navigation table exploits)

**geographical longitude** $\theta$ (sometimes written $\lambda$): the angle between the meridian through the point and the **Greenwich meridian** ($\theta = 0$).
- positive eastward, negative westward
- $\theta \in [-180°, +180°]$ or equivalently $[0°, 360°]$

<img src="{{ "/assets/images/sphereastro-17.png" | relative_url }}" alt="sphereastro-17" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />

---

## distance between two points on Earth

the great-circle distance between points $1$ and $2$ on the Earth's surface follows directly from the **spherical cosine rule** (see [Spherical trigonometry](../../02_Zettel/Theory/Spherical trigonometry.html)):
$$\cos a = \cos A \sin b \sin c + \cos b \cos c$$

set up the spherical triangle with the north pole as one vertex, then:
- $b = 90° - \phi_1$ (co-latitude of point 1)
- $c = 90° - \phi_2$ (co-latitude of point 2)
- $A = \lambda_1 - \lambda_2$ (difference in longitude)

so:
$$\cos a = \cos(\lambda_1 - \lambda_2)\sin(90° - \phi_1)\sin(90° - \phi_2) + \cos(90° - \phi_1)\cos(90° - \phi_2)$$
$$\quad = \cos(\lambda_1 - \lambda_2)\cos\phi_1\cos\phi_2 + \sin\phi_1\sin\phi_2$$

then $a$ is in radians, and the surface distance is $d = a R_\oplus$ with $R_\oplus = 6400$ km.

### worked example: Helsinki to La Palma

with $\phi_1 = 60°, \lambda_1 = 25°$ (Helsinki) and $\phi_2 = 28.7°, \lambda_2 = -17.5°$ (La Palma):

$A = \lambda_1 - \lambda_2 = 42.5°$

substituting (numbers from the slides): $\cos a = 0.732 \cdot 0.5 \cdot 0.877 + 0.866 \cdot 0.48 = 0.32 + 0.416 = 0.72$

so $a = 42.5° = 0.74$ rad, and
$$d = a \cdot R_\oplus = 0.74 \cdot 6400 = 4748~\text{km}$$

<img src="{{ "/assets/images/sphereastro-18.png" | relative_url }}" alt="sphereastro-18" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />

---

## why the latitude $\phi$ also gives the altitude of the celestial pole

a quick geometric argument: the Earth's rotation axis is the line on which both the geographic poles and the celestial poles sit. at a point of latitude $\phi$, the local vertical makes an angle $\phi$ with the equatorial plane, so it makes an angle $90° - \phi$ with the rotation axis. this means the celestial pole appears in the local sky at altitude $\phi$ above the horizon.

so by measuring how high Polaris sits above the northern horizon, I directly read off my latitude. before GPS, this was navigation.

---

## see also

- [Fundamentals_Astrophysics_Cosmology_MOC](../../00_Atlas/Fundamentals_Astrophysics_Cosmology_MOC.html)
- [Spherical_astronomy_complete](../../02_Zettel/Theory/Spherical_astronomy_complete.html)
- [Celestial sphere and great circles](../../02_Zettel/Theory/Celestial sphere and great circles.html)
- [Spherical trigonometry](../../02_Zettel/Theory/Spherical trigonometry.html)
- [Equatorial system](../../02_Zettel/Theory/Equatorial system.html)
