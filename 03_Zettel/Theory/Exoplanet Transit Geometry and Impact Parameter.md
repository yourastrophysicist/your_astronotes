---
layout: "default"
title: "Exoplanet Transit Geometry and Impact Parameter"
---
# Exoplanet Transit Geometry and Impact Parameter

The geometry of an exoplanet transit is defined by the projection of the planetary orbit onto the plane of the sky perpendicular to the line of sight.

## Coordinate Geometry
Let the host star be located at the origin of a Cartesian coordinate system $(X, Y, Z)$, where:
- The $+Z$-axis points toward the observer along the line of sight.
- The $(X, Y)$ plane is the plane of the sky.
- The orbital inclination $i$ is the angle between the normal to the orbital plane and the line of sight ($i = 90^\circ$ corresponds to edge-on transit geometry).

The projected separation $d(t)$ between the center of the planet and the center of the star on the sky plane is:
$$d(t) = \sqrt{X(t)^2 + Y(t)^2} = r(t) \sqrt{\sin^2(\omega + \nu(t)) + \cos^2 i \cos^2(\omega + \nu(t))}$$
where:
- $r(t) = \frac{a(1 - e^2)}{1 + e \cos \nu(t)}$ is the orbital radius vector.
- $\nu(t)$ is the true anomaly.
- $\omega$ is the argument of periastron.

## Impact Parameter $b$
The impact parameter $b$ is the projected distance at mid-transit ($\,\omega + \nu = 90^\circ$), normalized to the stellar radius $R_\star$:
$$b = \frac{d(t_{\text{mid}})}{R_\star} = \frac{a}{R_\star} \cos i \left( \frac{1 - e^2}{1 + e \sin \omega} \right)$$

For circular orbits ($e=0$):
$$b = \frac{a}{R_\star} \cos i$$

### Transit Regimes:
- $b = 0$: central transit crossing the stellar diameter ($i = 90^\circ$).
- $0 < b < 1 - R_p/R_\star$: full transit, complete planetary disk is projected inside the stellar limb.
- $1 - R_p/R_\star \le b \le 1 + R_p/R_\star$: grazing transit, planet never fully enters the stellar disk; ingress and egress merge into a V-shaped light curve.
- $b > 1 + R_p/R_\star$: no transit occurs.

## Related Notes
- [[Transit Depth and Ingress-Egress Timescales]]
- [[Stellar Limb Darkening Laws]]
- [[Malavolta 11 - Transit Geometry and Analytical Light Curve Modeling]]



## Linked References

- [[Transit Depth and Ingress-Egress Timescales]]
- [[Astrophysics_Laboratory_2_MOC]]


