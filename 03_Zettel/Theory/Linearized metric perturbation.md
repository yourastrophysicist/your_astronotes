---
layout: "default"
title: "Linearized metric perturbation"
---
{% raw %}
**linearized GR** is the perturbative regime where spacetime is **almost flat**: the metric is Minkowski plus a small perturbation $h_{\mu\nu}$. valid for weak gravitational fields, gravitational waves, and the Newtonian limit.

## the setup

write the full metric as:
$$g_{\mu\nu} = \eta_{\mu\nu} + h_{\mu\nu}, \quad \lvert h_{\mu\nu}\rvert \ll 1$$

with $\eta_{\mu\nu} = {\rm diag}(-1, +1, +1, +1)$ the Minkowski metric. $h_{\mu\nu}$ is the **perturbation**, a small symmetric tensor.

in the linearized theory, **only first-order** terms in $h$ are kept. all $h \cdot h$ terms are dropped. this keeps the equations tractable.

## the inverse metric

to leading order:
$$g^{\mu\nu} \approx \eta^{\mu\nu} - h^{\mu\nu}$$

(with $h^{\mu\nu} = \eta^{\mu\rho}\eta^{\nu\sigma}h_{\rho\sigma}$, so indices are raised + lowered with $\eta$ in the linear theory).

## the linearized Christoffels

$\Gamma$ is first-order in $h$:
$$\Gamma^\rho{}_{\mu\nu} = \tfrac{1}{2}\eta^{\rho\sigma}(\partial_\mu h_{\sigma\nu} + \partial_\nu h_{\sigma\mu} - \partial_\sigma h_{\mu\nu})$$

quadratic terms ($\Gamma\Gamma$ in Riemann) drop out.

## the linearized Riemann

dropping $\Gamma\Gamma$:
$$R^\rho{}_{\sigma\mu\nu} = \partial_\mu \Gamma^\rho{}_{\nu\sigma} - \partial_\nu \Gamma^\rho{}_{\mu\sigma}$$

with the lowered version:
$$R_{\rho\sigma\mu\nu} = \tfrac{1}{2}(\partial_\mu\partial_\sigma h_{\rho\nu} - \partial_\mu\partial_\rho h_{\sigma\nu} - \partial_\nu\partial_\sigma h_{\rho\mu} + \partial_\nu\partial_\rho h_{\sigma\mu})$$

## the linearized Ricci

$$R_{\mu\nu} = \tfrac{1}{2}(\partial^\rho\partial_\mu h_{\nu\rho} + \partial^\rho\partial_\nu h_{\mu\rho} - \Box h_{\mu\nu} - \partial_\mu\partial_\nu h)$$

with $h = \eta^{\mu\nu}h_{\mu\nu}$, the trace, and $\Box = \partial^\mu\partial_\mu$ the d'Alembertian.

## the linearized Einstein tensor

$G_{\mu\nu} = R_{\mu\nu} - \tfrac{1}{2}\eta_{\mu\nu}R$. messy. but rewriting in the **trace-reversed perturbation** $\bar h_{\mu\nu} = h_{\mu\nu} - \tfrac{1}{2}\eta_{\mu\nu}h$:
$$G_{\mu\nu} = -\tfrac{1}{2}\Box\bar h_{\mu\nu} + \partial^\rho \partial_{(\mu}\bar h_{\nu)\rho} - \tfrac{1}{2}\eta_{\mu\nu}\partial^\rho\partial^\sigma \bar h_{\rho\sigma}$$

## linearized Einstein equation

$G_{\mu\nu} = 8\pi G T_{\mu\nu}$. in **Lorenz gauge** $\partial^\mu \bar h_{\mu\nu} = 0$, this reduces to:
$$\boxed{\, \Box \bar h_{\mu\nu} = -16\pi G\, T_{\mu\nu} \,}$$

a **wave equation** with source. like Maxwell's $\Box A_\mu = -j_\mu/c^2$ in EM. the gravitational counterpart of EM.

## what linearized GR contains

1. **Newtonian limit**: slow motion + weak field. $h_{00} = -2\Phi/c^2$ recovers Poisson's equation $\nabla^2\Phi = 4\pi G\rho$. see [Newtonian limit of GR](./Newtonian%20limit%20of%20GR.html).
2. **Gravitational waves**: vacuum solutions $\Box h_{\mu\nu} = 0$ admit travelling-wave solutions, the GWs detected by LIGO. see [Plus and cross polarizations](./Plus%20and%20cross%20polarizations.html) and [Quadrupole formula](./Quadrupole%20formula.html).

## see also

- [Linearized Christoffel and Riemann](./Linearized%20Christoffel%20and%20Riemann.html)
- [Linearized gauge transformations](./Linearized%20gauge%20transformations.html)
- [Trace-reversed perturbation](./Trace-reversed%20perturbation.html)
- [Lorenz gauge](./Lorenz%20gauge.html)
- [Newtonian limit of GR](./Newtonian%20limit%20of%20GR.html)
- [Transverse traceless gauge](./Transverse%20traceless%20gauge.html)
- [Plus and cross polarizations](./Plus%20and%20cross%20polarizations.html)
- [Quadrupole formula](./Quadrupole%20formula.html)
- Q9 - weak-field Christoffel Gamma_i_00
- Q10 - weak-field Ricci scalar
- Q15 - trace-reversed perturbation and Lorenz gauge
- [General_Relativity_MOC](../../04_Atlas/General_Relativity_MOC.html)
- [Ch 8 - Gravitational Waves](../../02_Literature/Book/Baumann%20GR/Ch%208%20-%20Gravitational%20Waves.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (13)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../02_Literature/Book/Baumann%20GR/Ch%208%20-%20Gravitational%20Waves.html" class="backlink-item">Ch 8 - Gravitational Waves</a></li>
    <li class="backlink-item-wrap"><a href="./GW%20energy%20and%20angular%20momentum.html" class="backlink-item">GW energy and angular momentum</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/General_Relativity_MOC.html" class="backlink-item">General_Relativity_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Geodesic%20deviation%20under%20a%20GW.html" class="backlink-item">Geodesic deviation under a GW</a></li>
    <li class="backlink-item-wrap"><a href="./Linearized%20Christoffel%20and%20Riemann.html" class="backlink-item">Linearized Christoffel and Riemann</a></li>
    <li class="backlink-item-wrap"><a href="./Linearized%20gauge%20transformations.html" class="backlink-item">Linearized gauge transformations</a></li>
    <li class="backlink-item-wrap"><a href="./Lorenz%20gauge.html" class="backlink-item">Lorenz gauge</a></li>
    <li class="backlink-item-wrap"><a href="./Newtonian%20limit%20of%20GR.html" class="backlink-item">Newtonian limit of GR</a></li>
    <li class="backlink-item-wrap"><a href="./Plus%20and%20cross%20polarizations.html" class="backlink-item">Plus and cross polarizations</a></li>
    <li class="backlink-item-wrap"><a href="./Quadrupole%20formula.html" class="backlink-item">Quadrupole formula</a></li>
    <li class="backlink-item-wrap"><a href="./SVT%20decomposition.html" class="backlink-item">SVT decomposition</a></li>
    <li class="backlink-item-wrap"><a href="./Trace-reversed%20perturbation.html" class="backlink-item">Trace-reversed perturbation</a></li>
    <li class="backlink-item-wrap"><a href="./Transverse%20traceless%20gauge.html" class="backlink-item">Transverse traceless gauge</a></li>
  </ul>
</div>
