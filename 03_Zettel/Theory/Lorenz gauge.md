---
layout: "default"
title: "Lorenz gauge"
---
the **Lorenz gauge** in linearized GR is the condition $\partial^\mu \bar h_{\mu\nu} = 0$. it makes Einstein's equation a clean wave equation. analogous to $\partial^\mu A_\mu = 0$ in electromagnetism.

## the condition

$$\boxed{\, \partial^\mu \bar h_{\mu\nu} = 0 \,}$$

four equations (one for each $\nu$). reduces gauge freedom by 4 of the 4 components of $\xi^\mu$.

equivalently in terms of $h$:
$$\partial^\mu h_{\mu\nu} = \tfrac{1}{2}\partial_\nu h$$

## why it's useful

in Lorenz gauge, the linearized Einstein tensor simplifies dramatically:
$$G_{\mu\nu} = -\tfrac{1}{2}\Box \bar h_{\mu\nu}$$

so Einstein's equation $G_{\mu\nu} = 8\pi G T_{\mu\nu}$ becomes:
$$\boxed{\, \Box \bar h_{\mu\nu} = -16\pi G T_{\mu\nu} \,}$$

a relativistic Poisson equation, with d'Alembertian $\Box = \partial^\mu\partial_\mu$. the gravitational analog of EM's $\Box A^\mu = -\mu_0 j^\mu$ in the Lorenz EM gauge.

## reaching the gauge

start with arbitrary $h_{\mu\nu}$. perform a gauge transformation $h \to h + 2\partial_{(\mu}\xi_{\nu)}$. the trace-reversed quantity transforms as:
$$\bar h_{\mu\nu} \to \bar h_{\mu\nu} + \partial_\mu\xi_\nu + \partial_\nu\xi_\mu - \eta_{\mu\nu}\partial^\rho \xi_\rho$$

taking the divergence:
$$\partial^\mu \bar h_{\mu\nu} \to \partial^\mu \bar h_{\mu\nu} + \Box \xi_\nu$$

so to satisfy $\partial^\mu \bar h_{\mu\nu} = 0$, choose $\xi_\nu$ such that $\Box \xi_\nu = -\partial^\mu \bar h_{\mu\nu}^{\rm initial}$. always possible (well-defined wave equation with source). so the **Lorenz gauge is always reachable**.

## residual gauge freedom

after reaching Lorenz gauge, **further gauge transformations** with $\Box \xi^\mu = 0$ (i.e. wave-equation solutions) preserve Lorenz. so 4 more parameters of residual gauge.

these are typically used to fix the **transverse-traceless (TT) gauge** in vacuum, leaving only 2 physical polarisations. see [Transverse traceless gauge](Transverse%20traceless%20gauge.html).

## the analogy with EM

| feature | EM | linearized GR |
|---|---|---|
| field | $A^\mu$ | $h_{\mu\nu}$ (or $\bar h_{\mu\nu}$) |
| gauge | $A \to A + \partial \chi$ | $h \to h + 2\partial_{(\mu}\xi_{\nu)}$ |
| Lorenz cond. | $\partial^\mu A_\mu = 0$ | $\partial^\mu \bar h_{\mu\nu} = 0$ |
| field eq. (gauge) | $\Box A^\mu = -\mu_0 j^\mu$ | $\Box \bar h_{\mu\nu} = -16\pi G T_{\mu\nu}$ |

both are wave equations sourced by their currents. both have residual gauge freedom that can fix to transverse + (in EM, transverse only; in GR, transverse + traceless).

## practical remarks

- Lorenz gauge is **the** standard for cosmological perturbation theory at the linear level.
- in vacuum, after fixing residual gauge to TT, the remaining $h_{\mu\nu}$ contains exactly the 2 physical GW polarisations.
- in matter, Lorenz gauge solves $\Box \bar h = -16\pi G T$ directly via Green's function (retarded propagator).

## see also

- [Linearized metric perturbation](Linearized%20metric%20perturbation.html)
- [Linearized gauge transformations](Linearized%20gauge%20transformations.html)
- [Trace-reversed perturbation](Trace-reversed%20perturbation.html)
- [Transverse traceless gauge](Transverse%20traceless%20gauge.html)
- [Quadrupole formula](Quadrupole%20formula.html)
- [Newtonian limit of GR](Newtonian%20limit%20of%20GR.html)
- Q15 - trace-reversed perturbation and Lorenz gauge
- [General_Relativity_MOC](../../04_Atlas/General_Relativity_MOC.html)
- [Ch 8 - Gravitational Waves](../../02_Literature/Book/Baumann%20GR/Ch%208%20-%20Gravitational%20Waves.html)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (8)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="Linearized%20Christoffel%20and%20Riemann.html" class="backlink-item">Linearized Christoffel and Riemann</a></li>
    <li class="backlink-item-wrap"><a href="Linearized%20gauge%20transformations.html" class="backlink-item">Linearized gauge transformations</a></li>
    <li class="backlink-item-wrap"><a href="Linearized%20metric%20perturbation.html" class="backlink-item">Linearized metric perturbation</a></li>
    <li class="backlink-item-wrap"><a href="Newtonian%20limit%20of%20GR.html" class="backlink-item">Newtonian limit of GR</a></li>
    <li class="backlink-item-wrap"><a href="SVT%20decomposition.html" class="backlink-item">SVT decomposition</a></li>
    <li class="backlink-item-wrap"><a href="Trace-reversed%20perturbation.html" class="backlink-item">Trace-reversed perturbation</a></li>
    <li class="backlink-item-wrap"><a href="Transverse%20traceless%20gauge.html" class="backlink-item">Transverse traceless gauge</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/General_Relativity_MOC.html" class="backlink-item">General_Relativity_MOC</a></li>
  </ul>
</div>

