---
layout: "default"
title: "Linearized gauge transformations"
---
{% raw %}
**linearized GR has a gauge symmetry**, just like electromagnetism. an infinitesimal coordinate change $x^\mu \to x^\mu + \xi^\mu$ shifts $h_{\mu\nu}$ in a specific way that leaves all physics invariant. crucial for understanding gravitational waves.

## the transformation

under an infinitesimal coordinate shift $x^\mu \to x'^\mu = x^\mu + \xi^\mu(x)$, with $|\xi| \ll 1$ small, the metric perturbation transforms as:
$$\boxed{\, h_{\mu\nu} \to h_{\mu\nu} + \partial_\mu\xi_\nu + \partial_\nu\xi_\mu = h_{\mu\nu} + 2\partial_{(\mu}\xi_{\nu)} \,}$$

the symmetrised gradient of $\xi$ adds to $h$. note $\xi^\mu$ is a vector, hence has 4 components. so we have **4-parameter family** of gauge transformations, just like the 4 components of $A^\mu$ in EM.

## what's invariant

physical observables don't depend on $\xi$. specifically:
- **the Riemann tensor** is gauge-invariant: under $h \to h + 2\partial \xi$, $R^\rho{}_{\sigma\mu\nu}$ stays the same (to first order).
- **the Einstein tensor** is gauge-invariant.
- **physical predictions** (LIGO strain, perihelion precession, etc.) don't depend on gauge choice.

## the analogy to EM

in EM, the field $A^\mu$ transforms as $A^\mu \to A^\mu + \partial^\mu \chi$ for any scalar $\chi$. **gauge symmetry** with one parameter ($\chi$). reduces 4 components of $A^\mu$ to 2 physical photon polarisations (after fixing gauge + on-shell condition).

in linearized GR, $h_{\mu\nu}$ transforms as $h_{\mu\nu} \to h_{\mu\nu} + 2\partial_{(\mu}\xi_{\nu)}$. **gauge symmetry** with 4 parameters ($\xi^\mu$). reduces 10 components of $h_{\mu\nu}$ to **2 physical graviton polarisations** (after fixing gauge + on-shell condition + traceless-transverse).

## counting the degrees of freedom

starting count: $h_{\mu\nu}$ has 10 components (symmetric $4\times 4$).
- subtract 4 for the 4-parameter gauge freedom (Lorenz, etc.): 10 - 4 = 6.
- subtract 4 more for the 4 wave-equation constraints (vacuum, on-shell): 6 - 4 = 2.

so **2 physical polarisations**: $h_+$ and $h_\times$. the two "tensor" polarisations of GR.

## fixing gauge

common gauges:
- **Lorenz gauge**: $\partial^\mu \bar h_{\mu\nu} = 0$. uses 4 conditions, fixes some of the gauge freedom. Einstein's equation becomes $\Box \bar h_{\mu\nu} = -16\pi G T_{\mu\nu}$. see [Lorenz gauge](./Lorenz%20gauge.html).
- **transverse-traceless (TT) gauge**: in vacuum, additional 4 conditions reduce the perturbation to its 2 physical polarisations. see [Transverse traceless gauge](./Transverse%20traceless%20gauge.html).

the gauge choice is a calculational tool. all observables are invariant.

## the residual gauge freedom

after Lorenz gauge, **residual gauge transformations** are those $\xi^\mu$ with $\Box \xi^\mu = 0$. these are 4 free wave-equation solutions, fixing them in TT gauge gives 4 more conditions.

altogether: 10 (original) - 4 (Lorenz) - 4 (residual) = 2 physical polarisations.

## see also

- [Linearized metric perturbation](./Linearized%20metric%20perturbation.html)
- [Trace-reversed perturbation](./Trace-reversed%20perturbation.html)
- [Lorenz gauge](./Lorenz%20gauge.html)
- [Transverse traceless gauge](./Transverse%20traceless%20gauge.html)
- [Plus and cross polarizations](./Plus%20and%20cross%20polarizations.html)
- Q15 - trace-reversed perturbation and Lorenz gauge
- [General_Relativity_MOC](../../04_Atlas/General_Relativity_MOC.html)
- [Ch 8 - Gravitational Waves](../../02_Literature/Book/Baumann%20GR/Ch%208%20-%20Gravitational%20Waves.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (8)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../02_Literature/Book/Baumann%20GR/Ch%208%20-%20Gravitational%20Waves.html" class="backlink-item">Ch 8 - Gravitational Waves</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/General_Relativity_MOC.html" class="backlink-item">General_Relativity_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Linearized%20Christoffel%20and%20Riemann.html" class="backlink-item">Linearized Christoffel and Riemann</a></li>
    <li class="backlink-item-wrap"><a href="./Linearized%20metric%20perturbation.html" class="backlink-item">Linearized metric perturbation</a></li>
    <li class="backlink-item-wrap"><a href="./Lorenz%20gauge.html" class="backlink-item">Lorenz gauge</a></li>
    <li class="backlink-item-wrap"><a href="./SVT%20decomposition.html" class="backlink-item">SVT decomposition</a></li>
    <li class="backlink-item-wrap"><a href="./Trace-reversed%20perturbation.html" class="backlink-item">Trace-reversed perturbation</a></li>
    <li class="backlink-item-wrap"><a href="./Transverse%20traceless%20gauge.html" class="backlink-item">Transverse traceless gauge</a></li>
  </ul>
</div>
