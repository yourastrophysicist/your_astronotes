---
layout: default
title: "Horizontal alt-azimuth system"
---

the most natural coordinate system for someone standing on the Earth: take the local horizontal plane as the reference plane.

---

## the geometry

- **zenith** $Z$: the point on the celestial sphere directly overhead
- **nadir**: the point on the celestial sphere directly underfoot, antipode of the zenith
- **horizon**: where the local horizontal plane meets the celestial sphere — a great circle
- **vertical circle**: any great circle through the zenith and nadir
- **meridian**: the vertical circle that also passes through the celestial pole; it crosses the horizon at the cardinal points N and S

reference plane: the plane tangent to the Earth that passes through the observer (the local horizontal plane).

![sphereastro-19](../../assets/images/sphereastro-19.png)

---

## the two coordinates

**azimuth** $A$: the angle along the horizon, measured **clockwise from the south cardinal point** to the foot of the body's vertical circle. (some textbooks measure from N instead — convention matters!)
- $A \in [0°, 360°]$

**altitude** (height) $a$: the angle between the horizon and the body, measured along the body's vertical circle.
- $a \in [-90°, +90°]$
- $a > 0$: above horizon (visible)
- $a < 0$: below horizon (not visible)

**zenith distance** $z = 90° - a$: complementary to altitude. often used in atmospheric extinction calculations.

---

## the catch: alt-azimuth is *not* universal

this system is tied to the local horizon and the local vertical, both of which depend on:
- **observer location** (different latitude → different zenith → different horizon)
- **time** (Earth rotates → stars move across the sky during the night)

so I cannot tabulate stars in alt-azimuth coordinates. it is only useful for *immediate* observations.

three stars A, B, C rising in the east, culminating in the meridian, and setting in the west have completely different $(A, a)$ values depending on the observer's latitude:

![sphereastro-20](../../assets/images/sphereastro-20.png)

at $\phi = 45°$ N (Padova) the picture is one thing; at $\phi = 10°$ N it's another. and within a single night, the same star moves continuously through different $(A, a)$ values.

---

## what alt-azimuth is good for

- **pointing a telescope** with an alt-azimuth mount (the cheapest, simplest mount geometry)
- **rise/set conditions**: $a = 0$ defines the horizon, see Culmination and rise/set
- **atmospheric refraction and extinction**: the air path length depends on zenith distance $z$
- **catching a transient or a satellite** that is moving in the sky

for **catalog work** I switch to the equatorial system (see [Equatorial system](../../02_Zettel/Theory/Equatorial system.md)), which is observer-independent.

---

## see also

- [Fundamentals_Astrophysics_Cosmology_MOC](../../00_Atlas/Fundamentals_Astrophysics_Cosmology_MOC.md)
- [Spherical_astronomy_complete](../../02_Zettel/Theory/Spherical_astronomy_complete.md)
- [Equatorial system](../../02_Zettel/Theory/Equatorial system.md)
- [Alt-azimuth ↔ equatorial transformations](../../02_Zettel/Theory/Alt-azimuth ↔ equatorial transformations.md)
- Culmination and rise/set
