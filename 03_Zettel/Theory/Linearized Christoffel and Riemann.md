---
layout: "default"
title: "Linearized Christoffel and Riemann"
---
{% raw %}
in linearized GR, both Christoffels and Riemann are **first-order in $h_{\mu\nu}$**, with the $\Gamma\Gamma$ terms in Riemann dropped because they're second-order.

## linearized Christoffel

$$\Gamma^\rho{}_{\mu\nu} = \tfrac{1}{2}\eta^{\rho\sigma}(\partial_\mu h_{\sigma\nu} + \partial_\nu h_{\sigma\mu} - \partial_\sigma h_{\mu\nu})$$

(indices raised with $\eta$, since $g^{-1} \approx \eta - h$ corrections are second order in $\Gamma$.)

## linearized Riemann

dropping $\Gamma\Gamma$:
$$R^\rho{}_{\sigma\mu\nu} = \partial_\mu \Gamma^\rho{}_{\nu\sigma} - \partial_\nu \Gamma^\rho{}_{\mu\sigma}$$

equivalently with all indices down:
$$R_{\rho\sigma\mu\nu} = \tfrac{1}{2}(\partial_\mu\partial_\sigma h_{\rho\nu} - \partial_\mu\partial_\rho h_{\sigma\nu} - \partial_\nu\partial_\sigma h_{\rho\mu} + \partial_\nu\partial_\rho h_{\sigma\mu})$$

## linearized Ricci

contract over $\rho$ and $\mu$ using $\eta^{\rho\mu}$:
$$R_{\sigma\nu} = \eta^{\rho\mu}R_{\rho\sigma\mu\nu}$$
$$= \tfrac{1}{2}(\partial^\rho\partial_\sigma h_{\rho\nu} + \partial^\rho\partial_\nu h_{\rho\sigma} - \Box h_{\sigma\nu} - \partial_\sigma\partial_\nu h)$$

with $\Box = \partial^\mu\partial_\mu$ the d'Alembertian and $h = \eta^{\mu\nu}h_{\mu\nu}$ the trace.

## linearized Ricci scalar

$$R = \eta^{\mu\nu}R_{\mu\nu} = \partial^\mu \partial^\nu h_{\mu\nu} - \Box h$$

so the Ricci scalar in linearized theory is a divergence of $h$ minus its d'Alembertian.

## linearized Einstein tensor

$G_{\mu\nu} = R_{\mu\nu} - \tfrac{1}{2}\eta_{\mu\nu}R$, a clean expression in **trace-reversed** $\bar h_{\mu\nu} = h_{\mu\nu} - \tfrac{1}{2}\eta_{\mu\nu}h$:
$$G_{\mu\nu} = -\tfrac{1}{2}\Box\bar h_{\mu\nu} + \partial^\rho \partial_{(\mu}\bar h_{\nu)\rho} - \tfrac{1}{2}\eta_{\mu\nu}\partial^\rho\partial^\sigma \bar h_{\rho\sigma}$$

in Lorenz gauge $\partial^\mu\bar h_{\mu\nu} = 0$:
$$G_{\mu\nu} = -\tfrac{1}{2}\Box\bar h_{\mu\nu}$$

a clean wave operator on $\bar h$. Einstein's equation becomes:
$$\Box \bar h_{\mu\nu} = -16\pi G T_{\mu\nu}$$

a relativistic Poisson equation, the gravitational analog of $\Box A^\mu = -\mu_0 j^\mu$ in EM (Lorenz gauge).

## what's "first-order" doing here

the dropping of $\Gamma\Gamma$ in Riemann (second-order in $h$) is the key approximation. it means:
- linearized GR captures **gravitational waves** (vacuum solutions of $\Box h = 0$).
- linearized GR captures the **Newtonian limit** of weak gravitational fields.
- linearized GR **misses** non-linear effects (perihelion precession at higher order, GW back-reaction, BH formation).

post-Newtonian (PN) expansion goes to higher order systematically. for binary inspirals, current state-of-the-art is $\sim 4$PN.

## see also

- [Linearized metric perturbation](./Linearized%20metric%20perturbation.html)
- [Linearized gauge transformations](./Linearized%20gauge%20transformations.html)
- [Trace-reversed perturbation](./Trace-reversed%20perturbation.html)
- [Lorenz gauge](./Lorenz%20gauge.html)
- [Newtonian limit of GR](./Newtonian%20limit%20of%20GR.html)
- Q9 - weak-field Christoffel Gamma_i_00
- Q10 - weak-field Ricci scalar
- [General_Relativity_MOC](../../04_Atlas/General_Relativity_MOC.html)
- [Ch 8 - Gravitational Waves](../../02_Literature/Book/Baumann%20GR/Ch%208%20-%20Gravitational%20Waves.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (5)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../02_Literature/Book/Baumann%20GR/Ch%208%20-%20Gravitational%20Waves.html" class="backlink-item">Ch 8 - Gravitational Waves</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/General_Relativity_MOC.html" class="backlink-item">General_Relativity_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Linearized%20metric%20perturbation.html" class="backlink-item">Linearized metric perturbation</a></li>
    <li class="backlink-item-wrap"><a href="./Newtonian%20limit%20of%20GR.html" class="backlink-item">Newtonian limit of GR</a></li>
    <li class="backlink-item-wrap"><a href="./Trace-reversed%20perturbation.html" class="backlink-item">Trace-reversed perturbation</a></li>
  </ul>
</div>
