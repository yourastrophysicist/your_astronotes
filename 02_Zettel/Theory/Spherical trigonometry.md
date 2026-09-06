---
layout: default
title: "Spherical trigonometry"
---

spherical trigonometry is the toolkit for transforming between two angular coordinate systems on the same sphere. every equatorial-to-altazimuthal transformation, every rise/set computation, every angular-distance calculation in the rest of astronomy is just a special case of the three master equations below.

---

## position of a point in two coordinate systems

a point $P$ on a unit sphere can be parametrized by two angles:
- $\theta$: distance from the $xy$-plane (i.e. elevation), positive northward
- $\psi$: counter-clockwise angle from the positive $x$-axis along the equatorial plane

so on a unit sphere
$$x = \cos\psi\cos\theta, \quad y = \sin\psi\cos\theta, \quad z = \sin\theta$$

now consider a second system $(x', y', z')$ obtained by rotating around the $x$-axis by an angle $\chi$:

![sphereastro-11](../../assets/images/sphereastro-11.png)

---

## the cartesian rotation around the x-axis

rotating around the $x$-axis by $\chi$:
$$x' = x, \qquad y' = y\cos\chi + z\sin\chi, \qquad z' = z\cos\chi - y\sin\chi$$

substituting the angular form of $(x, y, z)$:
$$x' = \cos\psi'\cos\theta' = \cos\psi\cos\theta$$
$$y' = \sin\psi'\cos\theta' = \sin\psi\cos\theta\cos\chi + \sin\theta\sin\chi$$
$$z' = \sin\theta' = \sin\theta\cos\chi - \sin\chi\sin\psi\cos\theta$$

these are the **three master equations** of spherical trigonometry. every rotation in spherical astronomy is one of these three lines:

$$\boxed{\,\cos\psi'\cos\theta' = \cos\psi\cos\theta\,}$$
$$\boxed{\,\sin\psi'\cos\theta' = \sin\psi\cos\theta\cos\chi + \sin\theta\sin\chi\,}$$
$$\boxed{\,\sin\theta' = \sin\theta\cos\chi - \sin\chi\sin\psi\cos\theta\,}$$

useful for coordinate transformations.

![sphereastro-12](../../assets/images/sphereastro-12.png)

---

## applied to a spherical triangle

now reinterpret the same setup as a spherical triangle on the celestial sphere, with $z$ pointing at vertex $A$ and $z'$ pointing at vertex $B$:

![sphereastro-13](../../assets/images/sphereastro-13.png)

reading the triangle:
$$\psi = A - 90°, \qquad \theta = 90° - b, \qquad \chi = c$$
$$\psi' = 90° - B, \qquad \theta' = 90° - a$$

substituting into the master equations and using $\cos(90° - x) = \sin x$, $\sin(90° - x) = \cos x$:

$$\cos(90° - B)\cos(90° - a) = \cos(A - 90°)\cos(90° - b)$$
$$\sin(90° - B)\cos(90° - a) = \sin(A - 90°)\cos(90° - b)\cos c + \sin(90° - b)\sin c$$
$$\sin(90° - a) = -\sin(A - 90°)\cos(90° - b)\sin c + \sin(90° - b)\cos c$$

![sphereastro-14](../../assets/images/sphereastro-14.png)

cleaning up:

$$\sin B \sin a = \sin A \sin b$$
$$\cos B \sin a = -\cos A \sin b \cos c + \cos b \sin c$$
$$\cos a = \cos A \sin b \sin c + \cos b \cos c$$

---

## the sine rule on the sphere

permuting the indices of the first equation gives
$$\sin C \sin b = \sin B \sin c, \qquad \sin A \sin c = \sin C \sin a$$

stitching them together:
$$\boxed{\,\frac{\sin a}{\sin A} = \frac{\sin b}{\sin B} = \frac{\sin c}{\sin C}\,}$$

this is the spherical analog of the planar sine rule. useful for computing distances (i.e. arc lengths) between points on the sphere when the angles are known.

![sphereastro-15](../../assets/images/sphereastro-15.png)

---

## the cosine rule on the sphere

the third equation,
$$\cos a = \cos A \sin b \sin c + \cos b \cos c$$

is the **spherical cosine rule**. by permuting indices we can produce two more variants:
$$\cos b = \cos B \sin a \sin c + \cos a \cos c$$
$$\cos c = \cos C \sin a \sin b + \cos a \cos b$$

useful for computing angular distance between two points whose angular position is known in some shared frame.

---

## why this is the only toolkit I need

every later operation in spherical astronomy reduces to one of these:
- **alt-azimuth ↔ equatorial**: a single rotation by $\chi = 90° - \phi$, see [Alt-azimuth ↔ equatorial transformations](../../02_Zettel/Theory/Alt-azimuth ↔ equatorial transformations.html)
- **distance between two points on Earth**: spherical cosine rule, see [Earth coordinates](../../02_Zettel/Theory/Earth coordinates.html)
- **rise and set conditions**: the third master equation evaluated at $a = 0$, see Culmination and rise/set
- **culmination height**: the third master equation evaluated at $h = 0$ or $h = 12$h

so once I know the three master equations and the sine rule, everything else is just substituting the right angles.

---

## see also

- [Fundamentals_Astrophysics_Cosmology_MOC](../../00_Atlas/Fundamentals_Astrophysics_Cosmology_MOC.html)
- [Spherical_astronomy_complete](../../02_Zettel/Theory/Spherical_astronomy_complete.html) — comprehensive narrative
- [Celestial sphere and great circles](../../02_Zettel/Theory/Celestial sphere and great circles.html)
- [Earth coordinates](../../02_Zettel/Theory/Earth coordinates.html)
- [Alt-azimuth ↔ equatorial transformations](../../02_Zettel/Theory/Alt-azimuth ↔ equatorial transformations.html)
