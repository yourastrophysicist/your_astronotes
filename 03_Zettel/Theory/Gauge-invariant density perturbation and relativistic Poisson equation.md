---
layout: "default"
title: "Gauge-invariant density perturbation and relativistic Poisson equation"
---
{% raw %}
# Gauge-invariant density perturbation and relativistic Poisson equation

> *the comoving-orthogonal energy density perturbation and the universal relativistic Poisson equation valid on all spatial scales.*

---

## core physical intuition

In an arbitrary gauge, the energy density fluctuation $\delta\rho$ depends on the time slicing. To obtain a physically meaningful density perturbation, one must evaluate $\delta\rho$ on spatial hypersurfaces everywhere orthogonal to the fluid 4-velocity.

When combined with the linearly perturbed Einstein equations, this gauge-invariant density perturbation $\epsilon_m$ obeys a clean, relativistic generalization of Poisson's equation that holds on both sub-horizon and super-horizon scales.

---

## key derivation & equations

The **comoving-orthogonal energy density perturbation** is defined as:
$$\epsilon_m \equiv \delta\rho + \rho_0'(v_\parallel + w_\parallel)$$
where $v_\parallel$ is the scalar fluid velocity and $w_\parallel$ is the metric shift.

Under a gauge transformation $\tilde{\delta\rho} = \delta\rho - \alpha\rho_0'$ and $\tilde{v}_\parallel + \tilde{w}_\parallel = v_\parallel + w_\parallel + \alpha$:
$$\tilde{\epsilon}_m = (\delta\rho - \alpha\rho_0') + \rho_0'(v_\parallel + w_\parallel + \alpha) = \epsilon_m$$
$\epsilon_m$ is strictly gauge-invariant.

### Linearly perturbed Einstein equations (longitudinal gauge)
1. Energy constraint ($00$ component):
   $$\nabla^2\Phi - 3\mathcal{H}(\Phi' + \mathcal{H}\Psi) = 4\pi G a^2 \delta\rho$$
2. Momentum constraint ($0i$ component):
   $$\Phi' + \mathcal{H}\Psi = -4\pi G a^2 (\rho_0 + p_0) v_\parallel$$

Substitute the momentum constraint into the energy constraint:
$$\nabla^2\Phi + 3\mathcal{H}\left[ 4\pi G a^2 (\rho_0 + p_0) v_\parallel \right] = 4\pi G a^2 \delta\rho$$
$$\nabla^2\Phi = 4\pi G a^2 \left[ \delta\rho - 3\mathcal{H}(\rho_0 + p_0) v_\parallel \right]$$

Using the background continuity equation $\rho_0' = -3\mathcal{H}(\rho_0 + p_0)$:
$$\nabla^2\Phi = 4\pi G a^2 \left[ \delta\rho + \rho_0' v_\parallel \right] = 4\pi G a^2 \epsilon_m$$

This is the **relativistic Poisson equation**:
$$\nabla^2\Phi = 4\pi G a^2 \epsilon_m$$

---

## astrophysical context

* Valid on all scales, seamlessly bridging the Newtonian regime ($k \gg aH$) and the relativistic super-horizon regime ($k \ll aH$).
* Governs matter clustering and galaxy bias in large-scale structure surveys.

---

## connections & zettel links

* parent moc: [Cosmology_of_the_Early_Universe_MOC](../../04_Atlas/Cosmology_of_the_Early_Universe_MOC.html)
* related zettels:
  - [Gauge transformations and Bardeen potentials](./Gauge%20transformations%20and%20Bardeen%20potentials.html)
  - [Cosmological perturbation theory in General Relativity](./Cosmological%20perturbation%20theory%20in%20General%20Relativity.html)
  - [Part5_GR_Cosmological_Perturbation_Theory](../../02_Literature/Lectures/Cosmology_of_the_Early_Universe/Part5_GR_Cosmological_Perturbation_Theory.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (4)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="./Cosmological%20perturbation%20theory%20in%20General%20Relativity.html" class="backlink-item">Cosmological perturbation theory in General Relativity</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Cosmology_of_the_Early_Universe_MOC.html" class="backlink-item">Cosmology_of_the_Early_Universe_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Gauge%20transformations%20and%20Bardeen%20potentials.html" class="backlink-item">Gauge transformations and Bardeen potentials</a></li>
    <li class="backlink-item-wrap"><a href="../../02_Literature/Lectures/Cosmology_of_the_Early_Universe/Part5_GR_Cosmological_Perturbation_Theory.html" class="backlink-item">Part5_GR_Cosmological_Perturbation_Theory</a></li>
  </ul>
</div>
