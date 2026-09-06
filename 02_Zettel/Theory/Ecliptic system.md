---
layout: default
title: "Ecliptic system"
---

the **ecliptic** is the plane of Earth's orbit around the Sun, projected onto the celestial sphere. coordinates measured against this plane are the natural frame for solar-system targets and for the zodiacal light.

## the geometry

the ecliptic is tilted with respect to the celestial equator by the **obliquity of the ecliptic**:
$$\varepsilon \approx 23.4°$$
(slowly varying with precession). the two great circles intersect at the **vernal equinox** $\gamma$ and the autumnal equinox.

## the coordinates

- **ecliptic longitude** $\lambda$, measured eastward from $\gamma$ along the ecliptic, $0° \le \lambda < 360°$.
- **ecliptic latitude** $\beta$, measured perpendicular to the ecliptic, $-90° \le \beta \le +90°$.

the Sun's apparent annual path along the ecliptic has $\beta_\odot \approx 0$ throughout the year (by definition), and $\lambda_\odot$ increases at $\sim 1°$/day.

## conversion to equatorial

going from ecliptic $(\lambda, \beta)$ to equatorial $(\alpha, \delta)$:
$$\sin\delta = \sin\beta \cos\varepsilon + \cos\beta \sin\varepsilon \sin\lambda$$
$$\cos\delta \cos\alpha = \cos\beta \cos\lambda$$
$$\cos\delta \sin\alpha = -\sin\beta \sin\varepsilon + \cos\beta \cos\varepsilon \sin\lambda$$

derivable from a single rotation around the $\gamma$ axis by $\varepsilon$.

## when ecliptic coordinates are used

- **solar-system bodies**: planet, asteroid, and comet orbits are nearly coplanar with Earth's, so their ecliptic latitudes stay close to zero. orbital elements are naturally expressed here.
- **zodiacal light**: scattered sunlight from interplanetary dust, brightest at low ecliptic latitude, important for sky brightness modelling.
- **Earth orientation parameters**: precession and nutation are described in ecliptic terms.

## see also

- [Equatorial system](../../02_Zettel/Theory/Equatorial system.html)
- [Galactic coordinate system](../../02_Zettel/Theory/Galactic coordinate system.html)
- [Spherical trigonometry](../../02_Zettel/Theory/Spherical trigonometry.html)
- [Precession nutation aberration parallax](../../02_Zettel/Theory/Precession nutation aberration parallax.html)
- [Sky brightness](../../02_Zettel/Theory/Sky brightness.html)
