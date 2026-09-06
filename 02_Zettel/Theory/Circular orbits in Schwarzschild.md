---
layout: default
title: "Circular orbits in Schwarzschild"
---

circular orbits in Schwarzschild are the GR generalisation of Kepler's circular orbits, with a characteristic deviation: **no stable circular orbit exists below $r = 6GM$**.

## the orbital frequency

for a circular orbit at radius $r$ in Schwarzschild, the orbital angular frequency $\Omega = d\phi/dt$ satisfies:
$$\boxed{\, \Omega^2 = \frac{GM}{r^3} \,}$$

**exactly the Kepler formula**, despite the GR setting. this is a famous coincidence: the Newtonian relation between orbital period and radius holds in Schwarzschild without modification (when expressed in coordinate time + Schwarzschild $r$).

## the derivation

from the geodesic equation in the equatorial plane, with $r = $ const:
$$\ddot t = 0, \quad \ddot r = 0$$

the radial equation:
$$\ddot r + \Gamma^r{}_{tt}\dot t^2 + \Gamma^r{}_{\phi\phi}\dot\phi^2 = 0$$

with $\Gamma^r{}_{tt} = (GM/r^2)(1 - 2GM/r)$ and $\Gamma^r{}_{\phi\phi} = -(r - 2GM)\sin^2\theta$ (in equatorial $\theta = \pi/2$, $\sin^2\theta = 1$):
$$\frac{GM}{r^2}\!\left(1 - \frac{2GM}{r}\right)\dot t^2 = (r - 2GM)\dot\phi^2$$

dividing:
$$\frac{\dot\phi^2}{\dot t^2} = \frac{GM}{r^3}$$

so $\Omega^2 = GM/r^3$ in coordinate time.

## ISCO: innermost stable circular orbit

at $r < 6GM$, circular orbits become **unstable** (perturbations grow exponentially). the innermost **stable** circular orbit:
$$\boxed{\, r_{\rm ISCO} = 6 GM \,}$$

at ISCO:
- $L = \sqrt{12}\,GM$.
- $E = 2\sqrt{2}/3$ (in $c = 1$ units; binding energy $1 - E = 1 - 2\sqrt{2}/3 \approx 0.057$, so $\sim 5.7\%$ of rest-mass energy is released as a particle spirals from infinity to ISCO).
- $\Omega^2 = GM/(6GM)^3 = 1/(216 G^2 M^2)$.

the binding energy at ISCO is the **maximum efficiency** of accretion onto a non-rotating BH. for Kerr (rotating), the ISCO can be much closer to the horizon and the efficiency reaches up to $\sim 42\%$ for maximal spin.

## the inner unstable orbit

between $r = 3GM$ (photon sphere) and $r = 6GM$ (ISCO), circular **unstable** orbits exist. perturbations either fall in or escape to infinity. these are not realisable as long-lived orbits; useful as separatrix solutions in dynamical-systems analysis.

## astrophysical relevance

- **accretion disks**: inner edge at $r_{\rm ISCO}$ for non-rotating BH (or smaller for rotating). inside ISCO, gas plunges in inflow. this sets the inner radius of accretion + the maximum efficiency.
- **iron K$\alpha$ line shape**: emitted by hot iron in accretion disks, broadened by Doppler + gravitational redshift. fitting the line shape gives the inner edge $r_{\rm ISCO}$, hence the BH spin.
- **EHT shadow**: the BH "shadow" angular size is set by $\sim 5GM/c^2$, related to ISCO + photon sphere.

## see also

- [Schwarzschild metric](../../02_Zettel/Theory/Schwarzschild metric.md)
- [Schwarzschild Christoffels](../../02_Zettel/Theory/Schwarzschild Christoffels.md)
- [Schwarzschild effective potential](../../02_Zettel/Theory/Schwarzschild effective potential.md)
- [Photon sphere](../../02_Zettel/Theory/Photon sphere.md)
- [Effective potential approach](../../02_Zettel/Theory/Effective potential approach.md)
- Q12 - circular orbits and orbital frequency
- [General_Relativity_MOC](../../00_Atlas/General_Relativity_MOC.md)
- [Ch 6 - Black Holes](../../01_Literature/Book/Baumann GR/Ch 6 - Black Holes.md)
