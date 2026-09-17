---
layout: "default"
title: "Trace-reversed perturbation"
---
{% raw %}
the **trace-reversed perturbation** $\bar h_{\mu\nu}$ is a useful repackaging of $h_{\mu\nu}$ that makes the linearized Einstein equation clean. defined by:
$$\bar h_{\mu\nu} \equiv h_{\mu\nu} - \tfrac{1}{2}\eta_{\mu\nu}h$$

with $h = \eta^{\mu\nu}h_{\mu\nu}$, the trace.

## why "trace-reversed"

take the trace of both sides:
$$\bar h \equiv \eta^{\mu\nu}\bar h_{\mu\nu} = h - \tfrac{1}{2}\eta^{\mu\nu}\eta_{\mu\nu}h = h - 2h = -h$$

so $\bar h = -h$. the trace **flips sign**. this is the trace-reversal.

involution: applying the operation twice gives back $h$:
$$\bar{\bar h}_{\mu\nu} = \bar h_{\mu\nu} - \tfrac{1}{2}\eta_{\mu\nu}\bar h = h_{\mu\nu} - \tfrac{1}{2}\eta_{\mu\nu}h - \tfrac{1}{2}\eta_{\mu\nu}(-h) = h_{\mu\nu}$$

so the operation is its own inverse.

## why we use it

several conveniences:

### 1. linearized Einstein equation

in terms of $h$:
$$G_{\mu\nu} = \tfrac{1}{2}(\partial^\rho\partial_\mu h_{\nu\rho} + \partial^\rho\partial_\nu h_{\mu\rho} - \Box h_{\mu\nu} - \partial_\mu\partial_\nu h - \eta_{\mu\nu}\partial^\rho\partial^\sigma h_{\rho\sigma} + \eta_{\mu\nu}\Box h)$$

ugly. but in $\bar h$:
$$G_{\mu\nu} = -\tfrac{1}{2}\Box\bar h_{\mu\nu} + \partial^\rho \partial_{(\mu}\bar h_{\nu)\rho} - \tfrac{1}{2}\eta_{\mu\nu}\partial^\rho\partial^\sigma \bar h_{\rho\sigma}$$

cleaner. and in **Lorenz gauge** $\partial^\mu \bar h_{\mu\nu} = 0$, all but the first term vanish:
$$G_{\mu\nu} = -\tfrac{1}{2}\Box\bar h_{\mu\nu}$$

so Einstein's equation becomes the simple wave equation:
$$\Box \bar h_{\mu\nu} = -16\pi G T_{\mu\nu}$$

### 2. natural variable for waves

vacuum gravitational waves satisfy $\Box \bar h_{\mu\nu} = 0$ in Lorenz gauge. so $\bar h$ is the natural object that propagates as a wave at the speed of light.

### 3. cosmological perturbation theory

$\bar h$ is also natural for cosmological perturbation theory on FLRW backgrounds, where the trace-reversed metric perturbation simplifies the equations.

## relation to $h$

| $h$ statement | $\bar h$ statement |
|---|---|
| $h_{\mu\nu}$ defined | $\bar h_{\mu\nu} = h_{\mu\nu} - \tfrac{1}{2}\eta_{\mu\nu}h$ |
| trace $h$ | trace $\bar h = -h$ |
| traceless ($h = 0$) | traceless ($\bar h = 0$, equivalent) |
| Lorenz gauge $\partial^\mu h_{\mu\nu} - \tfrac{1}{2}\partial_\nu h$ | Lorenz gauge $\partial^\mu \bar h_{\mu\nu} = 0$ |
| Einstein eq messy | Einstein eq simple wave |

## see also

- [Linearized metric perturbation](./Linearized%20metric%20perturbation.html)
- [Linearized Christoffel and Riemann](./Linearized%20Christoffel%20and%20Riemann.html)
- [Linearized gauge transformations](./Linearized%20gauge%20transformations.html)
- [Lorenz gauge](./Lorenz%20gauge.html)
- [Transverse traceless gauge](./Transverse%20traceless%20gauge.html)
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
    <li class="backlink-item-wrap"><a href="./Linearized%20gauge%20transformations.html" class="backlink-item">Linearized gauge transformations</a></li>
    <li class="backlink-item-wrap"><a href="./Linearized%20metric%20perturbation.html" class="backlink-item">Linearized metric perturbation</a></li>
    <li class="backlink-item-wrap"><a href="./Lorenz%20gauge.html" class="backlink-item">Lorenz gauge</a></li>
    <li class="backlink-item-wrap"><a href="./Newtonian%20limit%20of%20GR.html" class="backlink-item">Newtonian limit of GR</a></li>
    <li class="backlink-item-wrap"><a href="./Transverse%20traceless%20gauge.html" class="backlink-item">Transverse traceless gauge</a></li>
  </ul>
</div>
