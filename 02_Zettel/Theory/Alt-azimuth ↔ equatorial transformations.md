---
layout: default
title: "Alt-azimuth ↔ equatorial transformations"
---

the spherical triangle linking the zenith $Z$, the celestial pole $P$, and the body has sides $90° - \phi$ (Z to pole, equal to the latitude's complement), $90° - a$ (Z to body), and $90° - \delta$ (pole to body), with internal angles related to $A, h$.

so the alt-azimuth ↔ equatorial transformation is just the master spherical-trig equations applied with specific substitutions.

<img src="{{ "/assets/images/sphereastro-26.png" | relative_url }}" alt="sphereastro-26" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />

---

## alt-azimuth → equatorial

substitute into the master equations (see [Spherical trigonometry](../../02_Zettel/Theory/Spherical trigonometry.html)):
$$\psi = 90° - A, \qquad \theta = a, \qquad \chi = 90° - \phi$$
$$\psi' = 90° - h, \qquad \theta' = \delta$$

resulting transformation:

$$\boxed{\,\sin h\cos\delta = \sin A\cos a\,}$$
$$\boxed{\,\cos h\cos\delta = \cos A\cos a\sin\phi + \sin a\cos\phi\,}$$
$$\boxed{\,\sin\delta = -\cos A\cos a\cos\phi + \sin a\sin\phi\,}$$

given $(A, a, \phi)$ I get $(h, \delta)$. then the local sidereal time gives me $\alpha = \Theta - h$.

---

## equatorial → alt-azimuth

now I want to invert. the same triangle, but reading the other way:
$$\psi = 90° - h, \qquad \theta = \delta, \qquad \chi = -(90° - \phi)$$
$$\psi' = 90° - A, \qquad \theta' = a$$

(the sign of $\chi$ flips because we're rotating the *other* way.)

resulting transformation:

$$\boxed{\,\sin A\cos a = \sin h\cos\delta\,}$$
$$\boxed{\,\cos A\cos a = \cos h\cos\delta\sin\phi - \sin\delta\cos\phi\,}$$
$$\boxed{\,\sin a = \cos h\cos\delta\cos\phi + \sin\delta\sin\phi\,}$$

given $(h, \delta, \phi)$ I get $(A, a)$.

<img src="{{ "/assets/images/sphereastro-27.png" | relative_url }}" alt="sphereastro-27" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />

---

## what each equation is good for

- **first equation** $\sin h\cos\delta = \sin A\cos a$: the basic angular relation. useful when I know $h$ and $\delta$ and want $A$, given $a$.
- **third equation** $\sin a = \cos h\cos\delta\cos\phi + \sin\delta\sin\phi$: this is the workhorse. set $h = 0$ to get the upper-culmination height. set $a = 0$ to get the rise/set hour angle. at the meridian transit it directly tells me how high the star will get.
- **second equation**: needed to disambiguate the quadrant of $A$ once you've found $\sin A$ and $\cos A$.

---

## see also

- [Fundamentals_Astrophysics_Cosmology_MOC](../../00_Atlas/Fundamentals_Astrophysics_Cosmology_MOC.html)
- [Spherical_astronomy_complete](../../02_Zettel/Theory/Spherical_astronomy_complete.html)
- [Spherical trigonometry](../../02_Zettel/Theory/Spherical trigonometry.html)
- [Equatorial system](../../02_Zettel/Theory/Equatorial system.html)
- [Horizontal alt-azimuth system](../../02_Zettel/Theory/Horizontal alt-azimuth system.html)
- Culmination and rise/set
