---
layout: "default"
title: "Effective potential approach"
---
in spacetimes with enough symmetry (like Schwarzschild), the geodesic equation reduces to a **1D problem in an effective potential**. the standard tool for solving Schwarzschild orbits.

## the procedure

1. identify Killing vectors of the metric. they give conserved quantities (energy $E$, angular momentum $L$).
2. write the normalisation $g_{\mu\nu}\dot x^\mu \dot x^\nu = -1$ (timelike) or $0$ (null).
3. solve for $\dot r^2$ in terms of $E, L, r$.
4. interpret: $\dot r^2 = E^2 - V_{\rm eff}(r)$, with $V_{\rm eff}$ depending on $L$.
5. read off circular orbits, turning points, scattering, capture, etc., from the shape of $V_{\rm eff}$.

## Schwarzschild example

metric: $ds^2 = -(1 - 2GM/r)dt^2 + (1 - 2GM/r)^{-1}dr^2 + r^2 d\Omega^2$.

Killing vectors:
- $\partial_t$: conserved energy $E = (1 - 2GM/r)\dot t$.
- $\partial_\phi$: conserved angular momentum $L = r^2 \dot\phi$ (equatorial plane).

normalisation for **timelike geodesic**:
$$-1 = -(1 - 2GM/r)\dot t^2 + (1 - 2GM/r)^{-1}\dot r^2 + r^2\dot\phi^2$$

substitute $\dot t = E/(1 - 2GM/r)$ and $\dot\phi = L/r^2$:
$$\dot r^2 = E^2 - (1 - 2GM/r)\!\left(1 + L^2/r^2\right)$$

so:
$$\boxed{\, V_{\rm eff}^{\rm timelike}(r) = \left(1 - \frac{2GM}{r}\right)\!\left(1 + \frac{L^2}{r^2}\right) \,}$$

## Schwarzschild $V_{\rm eff}$ structure

three terms:
- $1$ (rest energy).
- $-2GM/r$ (Newtonian gravitational attraction).
- $L^2/r^2$ (centrifugal barrier).
- $-2GM L^2/r^3$ (the new GR term; attractive, dominant at small $r$).

extrema (circular orbits) at:
$$r_\pm = \frac{L^2 \pm \sqrt{L^4 - 12 G^2 M^2 L^2}}{2GM}$$

- $r_+$: outer extremum, **stable** circular orbit.
- $r_-$: inner extremum, **unstable** circular orbit.

merging happens at $L = \sqrt{12}\,GM$, giving the **innermost stable circular orbit (ISCO)** at $r_{\rm ISCO} = 6GM$. inside ISCO, no stable circular orbit exists; particles spiral in.

## photon sphere

for **null geodesics** in Schwarzschild, the analogous calculation gives:
$$V_{\rm eff}^{\rm null}(r) = \left(1 - \frac{2GM}{r}\right)\frac{L^2}{r^2}$$

(no rest-mass term because photons are null.) extremum at $r = 3GM$, the **photon sphere**: an unstable circular photon orbit. the bright ring in EHT images of black holes.

## see also

- [Geodesic equation](Geodesic%20equation.html)
- [Killing vectors and conserved quantities](Killing%20vectors%20and%20conserved%20quantities.html)
- [Schwarzschild metric](Schwarzschild%20metric.html)
- [Schwarzschild effective potential](Schwarzschild%20effective%20potential.html)
- [Circular orbits in Schwarzschild](Circular%20orbits%20in%20Schwarzschild.html)
- [Photon sphere](Photon%20sphere.html)
- [Photon trajectories and impact parameter](Photon%20trajectories%20and%20impact%20parameter.html)
- Q12 - circular orbits and orbital frequency
- Q14 - photon trajectory and impact parameter
- [General_Relativity_MOC](../../04_Atlas/General_Relativity_MOC.html)
- [Ch 6 - Black Holes](../../02_Literature/Book/Baumann%20GR/Ch%206%20-%20Black%20Holes.html)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (10)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="Affine%20parameter.html" class="backlink-item">Affine parameter</a></li>
    <li class="backlink-item-wrap"><a href="Circular%20orbits%20in%20Schwarzschild.html" class="backlink-item">Circular orbits in Schwarzschild</a></li>
    <li class="backlink-item-wrap"><a href="Geodesic%20equation.html" class="backlink-item">Geodesic equation</a></li>
    <li class="backlink-item-wrap"><a href="Killing%20vectors%20and%20conserved%20quantities.html" class="backlink-item">Killing vectors and conserved quantities</a></li>
    <li class="backlink-item-wrap"><a href="Light%20deflection.html" class="backlink-item">Light deflection</a></li>
    <li class="backlink-item-wrap"><a href="Perihelion%20precession.html" class="backlink-item">Perihelion precession</a></li>
    <li class="backlink-item-wrap"><a href="Photon%20sphere.html" class="backlink-item">Photon sphere</a></li>
    <li class="backlink-item-wrap"><a href="Photon%20trajectories%20and%20impact%20parameter.html" class="backlink-item">Photon trajectories and impact parameter</a></li>
    <li class="backlink-item-wrap"><a href="Schwarzschild%20effective%20potential.html" class="backlink-item">Schwarzschild effective potential</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/General_Relativity_MOC.html" class="backlink-item">General_Relativity_MOC</a></li>
  </ul>
</div>

