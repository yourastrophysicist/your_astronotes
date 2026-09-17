---
layout: "default"
title: "Photon sphere"
---
{% raw %}
the **photon sphere** is the radius at which photons can orbit a Schwarzschild black hole on (unstable) circular trajectories. located at $r = 3GM$, exactly $1.5\times$ the Schwarzschild radius.

## the location

for null geodesics, the effective potential is:
$$V_{\rm eff}^{\rm null}(r) = \left(1 - \frac{2GM}{r}\right)\frac{L^2}{r^2}$$

setting $dV_{\rm eff}/dr = 0$:
$$\boxed{\, r_{\rm ph} = 3GM \,}$$

the unique extremum (a maximum, hence unstable). all photons at this radius with the matching impact parameter orbit the BH on a circle.

## the critical impact parameter

related to the photon sphere is the **critical impact parameter** $b_{\rm crit}$. for a photon coming from infinity:
$$b_{\rm crit} = 3\sqrt{3}\,GM \approx 5.196 GM$$

photons with $b > b_{\rm crit}$: scatter (deflected, escape).
photons with $b < b_{\rm crit}$: captured (fall into BH).
photons with $b = b_{\rm crit}$: asymptote to the photon sphere, orbiting indefinitely.

## the physical content: BH shadow

a distant observer looking at a BH against a bright background sees a **dark shadow** of angular size $\sim 5\sqrt{3}\,GM/d$. photons inside $b_{\rm crit}$ fell in; photons outside scattered (sometimes after orbiting). the shadow boundary corresponds to photon-sphere orbits.

EHT 2019 image of M87$^\star$: the shadow is $\sim 42$ μas, consistent with the prediction $5\sqrt{3}\,GM/d$ for $M = 6.5 \times 10^9\,M_\odot$ and $d = 16.8$ Mpc.

## the bright ring

the **bright ring** in EHT images is the photon-sphere flux. photons emitted by the surrounding accretion flow can orbit the BH multiple times via the photon sphere before escaping. each orbit produces a **higher-order image**. the cumulative effect: a sharp bright ring at the photon-sphere radius.

theoretically: an infinite series of images, each $e^{-\pi}$ times fainter than the last (Lyapunov-decay rate of the photon sphere). first ring is the dominant feature in EHT data.

## scales

for typical BHs:
- **stellar-mass BH** ($10\,M_\odot$): $r_{\rm ph} = 44$ km. unresolved.
- **Sgr A$^\star$** ($4 \times 10^6\,M_\odot$): $r_{\rm ph} = 1.78\times 10^7$ km, angular size $\sim 28$ μas at $8$ kpc. resolved by EHT.
- **M87$^\star$** ($6.5 \times 10^9\,M_\odot$): $r_{\rm ph} = 2.9 \times 10^{10}$ km, angular size $\sim 23$ μas at $16.8$ Mpc. resolved by EHT.

## stability

the photon sphere is **unstable**. small perturbations either send the photon to infinity (outward) or into the BH (inward). exponentially growing in time. so no photon can permanently orbit the photon sphere; arbitrarily small fluctuations decide its fate.

## the rotation case

for Kerr (rotating BH), the analog of the photon sphere is **two photon spheres** depending on direction:
- prograde (co-rotating with BH spin): $r_{\rm ph} \to GM$ for maximal spin.
- retrograde: $r_{\rm ph} \to 4GM$ for maximal spin.

so a rotating BH has an asymmetric shadow, slightly squashed. EHT data on M87 + Sgr A$^\star$ are consistent with modest spin.

## see also

- [Schwarzschild metric](./Schwarzschild%20metric.html)
- [Schwarzschild effective potential](./Schwarzschild%20effective%20potential.html)
- [Photon trajectories and impact parameter](./Photon%20trajectories%20and%20impact%20parameter.html)
- [Circular orbits in Schwarzschild](./Circular%20orbits%20in%20Schwarzschild.html)
- [Effective potential approach](./Effective%20potential%20approach.html)
- Q14 - photon trajectory and impact parameter
- [General_Relativity_MOC](../../04_Atlas/General_Relativity_MOC.html)
- [Ch 6 - Black Holes](../../02_Literature/Book/Baumann%20GR/Ch%206%20-%20Black%20Holes.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (11)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../02_Literature/Book/Baumann%20GR/Ch%203%20-%20A%20First%20Look%20at%20Geodesics.html" class="backlink-item">Ch 3 - A First Look at Geodesics</a></li>
    <li class="backlink-item-wrap"><a href="../../02_Literature/Book/Baumann%20GR/Ch%206%20-%20Black%20Holes.html" class="backlink-item">Ch 6 - Black Holes</a></li>
    <li class="backlink-item-wrap"><a href="./Circular%20orbits%20in%20Schwarzschild.html" class="backlink-item">Circular orbits in Schwarzschild</a></li>
    <li class="backlink-item-wrap"><a href="./Effective%20potential%20approach.html" class="backlink-item">Effective potential approach</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/General_Relativity_MOC.html" class="backlink-item">General_Relativity_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Gravitational%20lensing%20-%20intro.html" class="backlink-item">Gravitational lensing - intro</a></li>
    <li class="backlink-item-wrap"><a href="./Light%20deflection.html" class="backlink-item">Light deflection</a></li>
    <li class="backlink-item-wrap"><a href="./Photon%20trajectories%20and%20impact%20parameter.html" class="backlink-item">Photon trajectories and impact parameter</a></li>
    <li class="backlink-item-wrap"><a href="./Schwarzschild%20effective%20potential.html" class="backlink-item">Schwarzschild effective potential</a></li>
    <li class="backlink-item-wrap"><a href="./Schwarzschild%20horizon.html" class="backlink-item">Schwarzschild horizon</a></li>
    <li class="backlink-item-wrap"><a href="./Schwarzschild%20metric.html" class="backlink-item">Schwarzschild metric</a></li>
  </ul>
</div>
