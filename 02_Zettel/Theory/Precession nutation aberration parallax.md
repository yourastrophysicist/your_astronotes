---
layout: default
title: "Precession nutation aberration parallax"
---

on top of the equatorial coordinate frame ([Equatorial system](../../02_Zettel/Theory/Equatorial system.html)) sit four small but unavoidable corrections. any precision astrometry, target acquisition, or ephemeris computation has to account for them. each is geometric and well-understood.

## precession of the equinoxes

the Earth's rotation axis is not fixed in space. solar and lunar gravitational torques on Earth's equatorial bulge cause the rotation axis to precess around the ecliptic pole on a $\sim 26\,000$ year cycle. amplitude:
$$\dot\alpha \approx 50''/\text{yr}, \quad \dot\delta \approx \text{a few}''/\text{yr}$$

**consequence**: catalog positions are *epoch-dependent*. I quote a star's coordinates as J2000.0 (or J1950.0 historically); to point a telescope at it tonight I have to precess to the current epoch. precession matrices are tabulated (IAU 2006).

historical detection: Hipparchus, $\sim 130$ BCE, comparing his star catalog with Timocharis's two centuries earlier.

## nutation

a small wobble superimposed on the long-period precession, dominated by the $18.6$-year Saros cycle of lunar-node motion. amplitude $\sim 9''$ in longitude and $\sim 9''$ in obliquity, with shorter-period harmonics.

**consequence**: the ecliptic and equatorial poles are not perfectly fixed even after precession is removed. for arcsecond-level work, nutation must be applied on top of precession.

## stellar aberration

light arriving from a distant source seems displaced toward the direction of the observer's motion. for Earth's orbit (velocity $v \approx 30$ km/s), the aberration angle is
$$\theta_{\rm ab} \approx v/c \approx 20''$$
in the direction of Earth's instantaneous velocity, with annual variation tracing a small ellipse on the sky.

**consequence**: discovered by Bradley (1729) when looking for parallax. it provided the first direct evidence of Earth's orbital motion, predating Bessel's parallax by a century. has nothing to do with the source's distance.

aberration $\neq$ parallax. aberration is geometric (motion of the observer); parallax is geometric (displacement of the observer's location). aberration is $\sim 20''$ for any star, parallax is $\le 1''$ and falls with distance.

## annual stellar parallax

apparent shift of a nearby star against distant background as Earth orbits the Sun. for a star at distance $d$:
$$p = \frac{1\,\text{AU}}{d}$$
maximum amplitude $p \le 0.76''$ (Proxima Centauri, $1.3$ pc). decreases linearly with distance. defines the parsec: $d({\rm pc}) = 1/p({\rm arcsec})$.

**consequence**: must be removed for precision astrometry of background stars; *measured* for foreground stars, where it is the only fully geometric distance method. see [Distance ladder derivations](../../02_Zettel/Theory/Distance ladder derivations.html) and [Annual stellar parallax](../../02_Zettel/Theory/Annual stellar parallax.html).

## ordering and magnitudes

| effect | timescale | typical amplitude |
|---|---|---|
| precession | $26\,000$ yr | $50''/$yr |
| nutation | months to years | $\le 9''$ |
| aberration | annual | $20''$ |
| parallax | annual | $\le 1''$ |

the order in which they are applied to a catalog position to get an apparent position: precession $\to$ nutation $\to$ aberration $\to$ parallax. Telescope control systems do this automatically.

## see also

- [Equatorial system](../../02_Zettel/Theory/Equatorial system.html)
- [Time keeping in astronomy](../../02_Zettel/Theory/Time keeping in astronomy.html)
- [Annual stellar parallax](../../02_Zettel/Theory/Annual stellar parallax.html)
- [Distance ladder derivations](../../02_Zettel/Theory/Distance ladder derivations.html)
- [Atmospheric refraction](../../02_Zettel/Theory/interf/Atmospheric refraction.html)
- [Spherical trigonometry](../../02_Zettel/Theory/Spherical trigonometry.html)
