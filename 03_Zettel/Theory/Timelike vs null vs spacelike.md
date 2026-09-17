---
layout: "default"
title: "Timelike vs null vs spacelike"
---
{% raw %}
three flavours of geodesic, distinguished by the sign of $g_{\mu\nu}\dot x^\mu\dot x^\nu$:

## timelike

$g_{\mu\nu}\dot x^\mu \dot x^\nu < 0$ (in our $(-,+,+,+)$ convention).

physical: world line of a **massive particle**. moves slower than light. inside the local light cone.

natural parameter: **proper time** $\tau$, defined by $d\tau^2 = -ds^2$. four-velocity $u^\mu = dx^\mu/d\tau$ normalised: $g u u = -1$.

four-momentum: $p^\mu = m u^\mu$, $g pp = -m^2$ (mass-shell).

action: $S = -m\int d\tau$.

## null (lightlike)

$g_{\mu\nu}\dot x^\mu \dot x^\nu = 0$.

physical: world line of a **photon** (or any massless particle). moves at speed of light. follows the local light cone.

natural parameter: **affine parameter** $\lambda$, no proper time ($d\tau = 0$).

four-momentum: $p^\mu$ with $g pp = 0$. for a photon, $p^\mu = (E, \vec p)$ with $\lvert \vec p\rvert = E$. energy as measured by a comoving observer is $E_{\rm obs} = -p^\mu u_\mu$.

action: parametrise as $S = -\frac{1}{2}\int g_{\mu\nu}\dot x^\mu \dot x^\nu d\lambda$ (no square root) for null + timelike alike.

## spacelike

$g_{\mu\nu}\dot x^\mu \dot x^\nu > 0$.

physical: a **spatial path**, not a world line. not realisable as a physical trajectory of any particle (would require faster-than-light travel for massive things).

natural parameter: **proper length** $s$, $ds^2 = +g_{\mu\nu}dx^\mu dx^\nu$. tangent normalised: $g uu = +1$.

usage: spatial geodesics like great circles on a sphere; trajectories of "tachyons" if those existed. mostly relevant for measuring distances on a spatial slice of spacetime.

## the light cone

at any point, the set of all null directions forms the **light cone**: a 3-dimensional cone in the 4D tangent space. inside the cone (timelike): future or past directions of physical particles. outside (spacelike): forbidden for physical signals.

light cones are an invariant feature of Lorentzian spacetime; they're the trace of the metric's $(-)$ eigenvalue. flat metrics have a fixed cone; curved metrics have cones that "tilt" as you move (Schwarzschild near the horizon: the future light cone tilts inward, signaling the one-way membrane).

## conservation across the type

a **timelike** geodesic's tangent stays timelike (length-preserving parallel transport, see [Metric compatibility](./Metric%20compatibility.html)). similarly null and spacelike. the type is preserved.

so a timelike particle never "becomes lightlike" mid-flight: timelike $\to$ timelike, null $\to$ null, etc.

## relativity of "now"

in spacetime, "now" is **not** a uniquely defined slice. different observers see different events as simultaneous. the only causal structure that's universal is the light-cone structure.

events with timelike separation: causally connected (one can affect the other).
events with spacelike separation: causally disconnected (no signal can pass).
events with null separation: connected by light only.

## see also

- [Manifold metric and signature](./Manifold%20metric%20and%20signature.html)
- [Geodesic equation](./Geodesic%20equation.html)
- [Affine parameter](./Affine%20parameter.html)
- [Cosmological redshift](./Cosmological%20redshift.html)
- [Schwarzschild horizon](./Schwarzschild%20horizon.html)
- [General_Relativity_MOC](../../04_Atlas/General_Relativity_MOC.html)
- [Ch 1 - Gravity is Geometry](../../02_Literature/Book/Baumann%20GR/Ch%201%20-%20Gravity%20is%20Geometry.html)
- [Ch 3 - A First Look at Geodesics](../../02_Literature/Book/Baumann%20GR/Ch%203%20-%20A%20First%20Look%20at%20Geodesics.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (5)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="./Affine%20parameter.html" class="backlink-item">Affine parameter</a></li>
    <li class="backlink-item-wrap"><a href="./Eddington-Finkelstein%20and%20Kruskal.html" class="backlink-item">Eddington-Finkelstein and Kruskal</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/General_Relativity_MOC.html" class="backlink-item">General_Relativity_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Geodesic%20equation.html" class="backlink-item">Geodesic equation</a></li>
    <li class="backlink-item-wrap"><a href="./Schwarzschild%20horizon.html" class="backlink-item">Schwarzschild horizon</a></li>
  </ul>
</div>
