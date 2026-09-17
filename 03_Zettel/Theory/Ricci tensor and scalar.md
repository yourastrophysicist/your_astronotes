---
layout: "default"
title: "Ricci tensor and scalar"
---
{% raw %}
the **Ricci tensor** $R_{\mu\nu}$ is a contraction of Riemann that captures the **matter-relevant part of curvature**. the **Ricci scalar** $R$ is its trace. these are the objects that appear in Einstein's equation.

## the definitions

**Ricci tensor**: trace over the first and third indices of Riemann:
$$\boxed{\, R_{\mu\nu} \equiv R^\rho{}_{\mu\rho\nu} = g^{\rho\sigma}R_{\rho\mu\sigma\nu} \,}$$

**Ricci scalar**: trace of Ricci:
$$\boxed{\, R \equiv g^{\mu\nu}R_{\mu\nu} \,}$$

## key properties

- **Ricci is symmetric**: $R_{\mu\nu} = R_{\nu\mu}$ (consequence of Riemann's pair-exchange symmetry).
- in $n$ dimensions, Ricci has $n(n+1)/2$ independent components: $10$ in 4D.
- Ricci scalar $R$ is a single number per spacetime point, a true scalar.

## the geometric meaning

$R_{\mu\nu}u^\mu u^\nu$ for a unit timelike $u^\mu$ measures the **convergence rate of nearby geodesics**. specifically, the rate of change of a small volume of test particles co-moving with $u^\mu$:
$$\frac{1}{V}\frac{d^2 V}{d\tau^2} \approx -R_{\mu\nu}u^\mu u^\nu$$
(approximate; full Raychaudhuri equation has extra terms).

so positive $R_{\mu\nu}u^\mu u^\nu$ means converging geodesics, attractive gravity. in vacuum ($R_{\mu\nu} = 0$), nearby geodesics neither converge nor diverge **on average**, but Weyl-type tidal forces still operate (the GW polarisations).

## what Ricci does NOT capture

in 4D, Ricci has 10 components but Riemann has 20. the **Weyl tensor**:
$$C_{\rho\sigma\mu\nu} = R_{\rho\sigma\mu\nu} - \text{(Ricci traces)}$$
carries the other 10 components. Weyl is trace-free; it carries pure tidal effects + gravitational waves; Ricci is what couples to matter.

so a vacuum spacetime can have $R_{\mu\nu} = 0$ but non-zero $C$ (gravitational waves, vacuum tidal forces). example: Schwarzschild's exterior has $R_{\mu\nu} = 0$ but $C \ne 0$ (the tidal force is real).

## the trace-reversed Ricci

useful combination:
$$R - \frac{1}{2}g^{\mu\nu} g_{\mu\nu} R = R - 2R = -R\quad?\quad\text{wait}$$

let me redo: actually the **Einstein tensor** $G_{\mu\nu}$ is the relevant trace-reversed object:
$$G_{\mu\nu} \equiv R_{\mu\nu} - \frac{1}{2}g_{\mu\nu}R$$

with the property $\nabla^\mu G_{\mu\nu} = 0$ identically (from Bianchi). Einstein's equation $G_{\mu\nu} = 8\pi G T_{\mu\nu}$ then automatically conserves $T$.

## examples

### flat spacetime
$R_{\mu\nu} = 0$, $R = 0$. trivially.

### Schwarzschild (vacuum)
$R_{\mu\nu} = 0$, $R = 0$ everywhere outside the source. but $R^{\mu\nu\rho\sigma}R_{\mu\nu\rho\sigma} = 48 G^2 M^2/r^6 \ne 0$ (Kretschmann scalar). so Riemann is non-zero (tidal forces present) even though Ricci is zero.

### FLRW
$R_{00} = -3\ddot a/a$, $R_{ij} = (a\ddot a + 2\dot a^2 + 2k)\,\gamma_{ij}$, $R = 6\,(\ddot a/a + (\dot a/a)^2 + k/a^2)$. components depending on $\dot a, \ddot a$.

### gravitational wave (linearised TT)
$R_{\mu\nu} = 0$ to first order in $h$ (vacuum). $R = 0$. but $R_{0x0x} \sim \ddot h_+$ is non-zero (the Weyl part). this is what LIGO measures.

## see also

- [Riemann tensor](./Riemann%20tensor.html)
- [Riemann tensor symmetries](./Riemann%20tensor%20symmetries.html)
- [Counting Riemann components](./Counting%20Riemann%20components.html)
- [Bianchi identities](./Bianchi%20identities.html)
- [Einstein equations](./Einstein%20equations.html)
- [Einstein tensor and Bianchi](./Einstein%20tensor%20and%20Bianchi.html)
- [Sectional and Gaussian curvature](./Sectional%20and%20Gaussian%20curvature.html)
- [General_Relativity_MOC](../../04_Atlas/General_Relativity_MOC.html)
- [Ch 4 - Spacetime Curvature](../../02_Literature/Book/Baumann%20GR/Ch%204%20-%20Spacetime%20Curvature.html)
- Q10 - weak-field Ricci scalar
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (10)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="./Bianchi%20identities.html" class="backlink-item">Bianchi identities</a></li>
    <li class="backlink-item-wrap"><a href="../../02_Literature/Book/Baumann%20GR/Ch%204%20-%20Spacetime%20Curvature.html" class="backlink-item">Ch 4 - Spacetime Curvature</a></li>
    <li class="backlink-item-wrap"><a href="./Counting%20Riemann%20components.html" class="backlink-item">Counting Riemann components</a></li>
    <li class="backlink-item-wrap"><a href="./Einstein%20equations.html" class="backlink-item">Einstein equations</a></li>
    <li class="backlink-item-wrap"><a href="./Einstein%20tensor%20and%20Bianchi.html" class="backlink-item">Einstein tensor and Bianchi</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/General_Relativity_MOC.html" class="backlink-item">General_Relativity_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Geodesic%20deviation.html" class="backlink-item">Geodesic deviation</a></li>
    <li class="backlink-item-wrap"><a href="./Riemann%20tensor.html" class="backlink-item">Riemann tensor</a></li>
    <li class="backlink-item-wrap"><a href="./Riemann%20tensor%20symmetries.html" class="backlink-item">Riemann tensor symmetries</a></li>
    <li class="backlink-item-wrap"><a href="./Sectional%20and%20Gaussian%20curvature.html" class="backlink-item">Sectional and Gaussian curvature</a></li>
  </ul>
</div>
