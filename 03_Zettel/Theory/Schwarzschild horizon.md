---
layout: "default"
title: "Schwarzschild horizon"
---
{% raw %}
the **Schwarzschild radius** $r_s = 2GM$ marks the location of the **event horizon** of a Schwarzschild black hole. the metric coefficient $g_{tt} = -(1 - 2GM/r)$ vanishes there, and $g_{rr} = (1 - 2GM/r)^{-1}$ diverges.

## coordinate vs curvature singularity

the apparent divergence at $r = 2GM$ is a **coordinate singularity**, not a curvature singularity:
- the **Kretschmann scalar** $R^{\mu\nu\rho\sigma}R_{\mu\nu\rho\sigma} = 48G^2M^2/r^6$ is finite at $r = 2GM$.
- only at $r = 0$ does the curvature actually diverge: a true singularity.

so the horizon can be removed by a coordinate transformation. **Eddington-Finkelstein** and **Kruskal coordinates** smoothly extend the metric across $r = 2GM$.

## what the horizon does

for a stationary observer outside the horizon, several effects manifest:

### gravitational time dilation
clocks at smaller $r$ tick slower. proper time vs coordinate time:
$$d\tau = \sqrt{1 - 2GM/r}\,dt$$
at $r \to 2GM$, $d\tau \to 0$: clocks freeze relative to infinity.

### infinite redshift
photons climbing out have frequency reduced by $\sqrt{1 - 2GM/r}$. emitted at $r \to 2GM$, redshift $\to \infty$. an observer at infinity sees emission from the horizon as **frozen**: spectrally redshifted to zero, time-stretched to forever.

### one-way membrane
inside the horizon ($r < 2GM$), the role of $r$ and $t$ flip:
- $r$ becomes timelike (decreases monotonically with proper time).
- $t$ becomes spacelike.

so once inside, a particle's proper time inevitably leads to $r = 0$. **no escape**, classically.

## what an infalling observer sees

infalling observer crosses $r = 2GM$ in **finite proper time**. nothing locally dramatic happens at the horizon: spacetime is smooth, curvature is finite. the horizon is detectable only by global causal-structure analysis, not by local measurements.

inside, the observer continues to $r = 0$ in finite proper time, where the **tidal forces diverge** (Riemann $\propto r^{-3}$). spaghettification.

## what an outside observer sees

watching an infalling object from outside infinity:
- redshift $\to \infty$ as object approaches $r = 2GM$.
- exponential time stretching: the object appears to slow down and freeze just above the horizon.
- the object is **never seen to cross**, in the outside observer's frame.

this is **not** a contradiction: the two frames have different time slicings. the outside observer's $t$-coordinate runs to $\infty$ during the object's finite proper time to crossing.

## scales

for typical objects:
- **Sun**: $r_s = 2.95$ km (much smaller than the solar radius $7\times 10^5$ km, no horizon visible).
- **stellar BH** ($10\,M_\odot$): $r_s = 30$ km.
- **Sgr A$^\star$** ($4 \times 10^6\,M_\odot$): $r_s = 1.2 \times 10^7$ km, a bit bigger than the Sun.
- **M87 BH** ($6.5 \times 10^9\,M_\odot$): $r_s = 1.9 \times 10^{10}$ km, ~$130$ AU.

## see also

- [Schwarzschild metric](./Schwarzschild%20metric.html)
- [Schwarzschild Christoffels](./Schwarzschild%20Christoffels.html)
- [Schwarzschild effective potential](./Schwarzschild%20effective%20potential.html)
- [Eddington-Finkelstein and Kruskal](./Eddington-Finkelstein%20and%20Kruskal.html)
- [Photon sphere](./Photon%20sphere.html)
- [Photon trajectories and impact parameter](./Photon%20trajectories%20and%20impact%20parameter.html)
- [Timelike vs null vs spacelike](./Timelike%20vs%20null%20vs%20spacelike.html)
- [General_Relativity_MOC](../../04_Atlas/General_Relativity_MOC.html)
- [Ch 6 - Black Holes](../../02_Literature/Book/Baumann%20GR/Ch%206%20-%20Black%20Holes.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (8)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="./Birkhoff%20theorem.html" class="backlink-item">Birkhoff theorem</a></li>
    <li class="backlink-item-wrap"><a href="../../02_Literature/Book/Baumann%20GR/Ch%206%20-%20Black%20Holes.html" class="backlink-item">Ch 6 - Black Holes</a></li>
    <li class="backlink-item-wrap"><a href="./Eddington-Finkelstein%20and%20Kruskal.html" class="backlink-item">Eddington-Finkelstein and Kruskal</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/General_Relativity_MOC.html" class="backlink-item">General_Relativity_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Radial%20infall.html" class="backlink-item">Radial infall</a></li>
    <li class="backlink-item-wrap"><a href="./Schwarzschild%20Christoffels.html" class="backlink-item">Schwarzschild Christoffels</a></li>
    <li class="backlink-item-wrap"><a href="./Schwarzschild%20metric.html" class="backlink-item">Schwarzschild metric</a></li>
    <li class="backlink-item-wrap"><a href="./Timelike%20vs%20null%20vs%20spacelike.html" class="backlink-item">Timelike vs null vs spacelike</a></li>
  </ul>
</div>
