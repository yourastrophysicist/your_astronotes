---
layout: "default"
title: "Perihelion precession"
---
a planet orbiting a non-rotating mass in Schwarzschild traces an **almost-elliptical** orbit, but the ellipse slowly **precesses** (rotates) over many orbits. for Mercury orbiting the Sun, the GR contribution is exactly $43''$ per century, the famous historical confirmation of GR.

## the orbit equation

for a timelike geodesic in Schwarzschild equatorial plane, with $u = 1/r$:
$$\frac{d^2 u}{d\phi^2} + u = \frac{GM}{L^2} + 3GM u^2$$

the first term on the right is the standard Newtonian orbit equation (giving Kepler's ellipse). the second term, $3GM u^2$, is the **GR correction**.

## perturbation analysis

write $u = u_0 + u_1$ with $u_0$ the Newtonian Kepler orbit:
$$u_0 = \frac{GM}{L^2}\,(1 + e\cos\phi)$$
($e$ = eccentricity). substitute, keep first-order in $GM/L^2$. the perturbation $u_1$ has a secular term:
$$u_1 \propto \phi\sin\phi$$

absorbing this into a precession of the orbit ($\phi \to \phi - \delta\phi$):
$$\boxed{\, \Delta\phi_{\rm prec}\big\vert_{\rm per\,orbit} = \frac{6\pi GM}{a(1 - e^2)} \,}$$

with $a$ the semi-major axis. equivalent forms: $6\pi GM/p$ with $p = a(1 - e^2)$ the semi-latus rectum, or $6\pi GM/c^2 a (1 - e^2)$ in physical units.

## Mercury

Mercury's orbital parameters:
- $a = 5.79 \times 10^{10}$ m.
- $e = 0.206$.
- orbital period $T = 88$ days.
- orbits per century $= 415$.

GR precession per century:
$$\Delta\phi_{\rm prec, century} = 415 \cdot \frac{6\pi GM_\odot}{a(1 - e^2)c^2}$$

with $GM_\odot/c^2 = 1.476$ km, evaluating:
$$\Delta\phi_{\rm prec, century} \approx 43''$$

exactly the residual unexplained by Newtonian gravity. **the predictive triumph of GR**.

historical context: Le Verrier (1859) established the residual but couldn't explain it. various workarounds (a hypothetical inner planet "Vulcan," modifications to the inverse-square law) all failed. Einstein's calculation in November 1915, completed within days of the final field equations, was the first quantitative confirmation of GR.

## generalisation

for any compact orbit around a Schwarzschild source, the precession per orbit is:
$$\Delta\phi = 6\pi\,\frac{GM}{c^2 a(1 - e^2)}$$

so:
- **larger $a$**: smaller precession (further from BH).
- **smaller $e$**: smaller precession (almost-circular orbit precesses slowly).
- **larger $M$**: bigger effect.

other tests:
- **binary pulsar PSR B1913+16**: precession $4.2°/$year, $\sim 10^5$ times Mercury's. confirms GR to high precision.
- **S-stars at Sgr A$^\star$**: S2 has $a \approx 1000$ AU, $e \approx 0.88$. precession $\sim 12'$/orbit, observed by GRAVITY in 2020.

## see also

- [Schwarzschild metric](Schwarzschild%20metric.html)
- [Schwarzschild effective potential](Schwarzschild%20effective%20potential.html)
- [Effective potential approach](Effective%20potential%20approach.html)
- [Photon trajectories and impact parameter](Photon%20trajectories%20and%20impact%20parameter.html)
- [Light deflection](Light%20deflection.html)
- [General_Relativity_MOC](../../04_Atlas/General_Relativity_MOC.html)
- [Ch 6 - Black Holes](../../02_Literature/Book/Baumann%20GR/Ch%206%20-%20Black%20Holes.html)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (4)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="Light%20deflection.html" class="backlink-item">Light deflection</a></li>
    <li class="backlink-item-wrap"><a href="Newtonian%20limit%20of%20GR.html" class="backlink-item">Newtonian limit of GR</a></li>
    <li class="backlink-item-wrap"><a href="Schwarzschild%20metric.html" class="backlink-item">Schwarzschild metric</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/General_Relativity_MOC.html" class="backlink-item">General_Relativity_MOC</a></li>
  </ul>
</div>

