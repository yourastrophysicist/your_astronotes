---
layout: "default"
title: "Schwarzschild effective potential"
---
the **Schwarzschild effective potential** $V_{\rm eff}(r)$ reduces the 4D geodesic problem to a 1D radial problem. the master tool for understanding orbits, light deflection, and the photon sphere.

## the timelike case

for a massive particle in the equatorial plane, with conserved $E = (1 - 2GM/r)\dot t$ and $L = r^2\dot\phi$:
$$\dot r^2 = E^2 - V_{\rm eff}(r), \quad V_{\rm eff}(r) = \left(1 - \frac{2GM}{r}\right)\!\left(1 + \frac{L^2}{r^2}\right)$$

expanding:
$$V_{\rm eff} = 1 - \frac{2GM}{r} + \frac{L^2}{r^2} - \frac{2GM L^2}{r^3}$$

four terms:
1. **rest energy** ($\sim 1$).
2. **Newtonian gravity** ($\sim -GM/r$).
3. **centrifugal barrier** ($\sim L^2/r^2$).
4. **GR correction** ($\sim -GM L^2/r^3$). the new piece.

the GR term is **attractive**, dominant at small $r$, and is what makes orbits inside ISCO unstable.

## extrema (circular orbits)

setting $V'_{\rm eff} = 0$:
$$r_\pm = \frac{L^2 \pm \sqrt{L^4 - 12 G^2 M^2 L^2}}{2GM}$$

- **outer** $r_+$: stable circular orbit (minimum of $V_{\rm eff}$).
- **inner** $r_-$: unstable circular orbit (maximum).

extrema merge when $L^2 = 12 G^2 M^2$, i.e. $L = \sqrt{12}\,GM$. at this $L$, only one circular orbit exists, at:
$$r_{\rm ISCO} = 6 GM$$

the **innermost stable circular orbit**. inside ISCO, no stable circular orbit. accretion disks have inner edge at ISCO.

## the null case (photons)

for photons (null geodesics), no rest-mass term:
$$\dot r^2 = E^2 - V_{\rm eff}^{\rm null}(r), \quad V_{\rm eff}^{\rm null}(r) = \left(1 - \frac{2GM}{r}\right)\frac{L^2}{r^2}$$

extremum at $r = 3GM$: the **photon sphere**. unstable circular photon orbit. see [Photon sphere](Photon%20sphere.html).

## visualisation

at fixed $L$:
- $V_{\rm eff}$ rises from $-\infty$ (at $r = 0^+$) to a peak at $r_-$, drops to a minimum at $r_+$, then rises asymptotically to $1$ at $r \to \infty$.
- a particle with $E^2 < V_{\rm min}$: orbit confined between two turning points (bound elliptic-like orbit).
- $V_{\rm min} < E^2 < V_{\rm peak}$: orbit can be either bound or unbound depending on initial $r$.
- $E^2 > V_{\rm peak}$: particle can fall to the centre.

## comparison to Newtonian

in Newtonian: $V_{\rm Newt}(r) = -GM/r + L^2/(2r^2)$. only **two** extrema (one stable minimum at the Keplerian circular orbit, no unstable maximum at small $r$). Newtonian orbits are stable at any $r > 0$.

GR adds the $-GMl^2/r^3$ term. at small $r$, this dominates $L^2/r^2$, eating away the centrifugal barrier. result: **inside $r_{\rm ISCO} = 6GM$, no stable orbit exists**. infall is generic.

## see also

- [Schwarzschild metric](Schwarzschild%20metric.html)
- [Effective potential approach](Effective%20potential%20approach.html)
- [Circular orbits in Schwarzschild](Circular%20orbits%20in%20Schwarzschild.html)
- [Photon sphere](Photon%20sphere.html)
- [Photon trajectories and impact parameter](Photon%20trajectories%20and%20impact%20parameter.html)
- [Killing vectors and conserved quantities](Killing%20vectors%20and%20conserved%20quantities.html)
- Q12 - circular orbits and orbital frequency
- [General_Relativity_MOC](../../04_Atlas/General_Relativity_MOC.html)
- [Ch 6 - Black Holes](../../02_Literature/Book/Baumann%20GR/Ch%206%20-%20Black%20Holes.html)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (13)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="Circular%20orbits%20in%20Schwarzschild.html" class="backlink-item">Circular orbits in Schwarzschild</a></li>
    <li class="backlink-item-wrap"><a href="Effective%20potential%20approach.html" class="backlink-item">Effective potential approach</a></li>
    <li class="backlink-item-wrap"><a href="Geodesic%20deviation.html" class="backlink-item">Geodesic deviation</a></li>
    <li class="backlink-item-wrap"><a href="Killing%20vectors%20and%20conserved%20quantities.html" class="backlink-item">Killing vectors and conserved quantities</a></li>
    <li class="backlink-item-wrap"><a href="Light%20deflection.html" class="backlink-item">Light deflection</a></li>
    <li class="backlink-item-wrap"><a href="Perihelion%20precession.html" class="backlink-item">Perihelion precession</a></li>
    <li class="backlink-item-wrap"><a href="Photon%20sphere.html" class="backlink-item">Photon sphere</a></li>
    <li class="backlink-item-wrap"><a href="Photon%20trajectories%20and%20impact%20parameter.html" class="backlink-item">Photon trajectories and impact parameter</a></li>
    <li class="backlink-item-wrap"><a href="Radial%20infall.html" class="backlink-item">Radial infall</a></li>
    <li class="backlink-item-wrap"><a href="Schwarzschild%20Christoffels.html" class="backlink-item">Schwarzschild Christoffels</a></li>
    <li class="backlink-item-wrap"><a href="Schwarzschild%20horizon.html" class="backlink-item">Schwarzschild horizon</a></li>
    <li class="backlink-item-wrap"><a href="Schwarzschild%20metric.html" class="backlink-item">Schwarzschild metric</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/General_Relativity_MOC.html" class="backlink-item">General_Relativity_MOC</a></li>
  </ul>
</div>

