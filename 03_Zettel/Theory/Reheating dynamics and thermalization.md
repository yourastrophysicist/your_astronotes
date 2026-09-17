---
layout: "default"
title: "Reheating dynamics and thermalization"
---
{% raw %}
# Reheating dynamics and thermalization

> *the thermodynamic transition from the cold, empty post-inflationary universe to the hot radiation-dominated Big Bang.*

---

## core physical intuition

Inflation leaves behind an essentially empty universe at zero temperature, with all energy stored in the classical condensate of the inflaton field. Reheating is the physical process that transfers this energy into relativistic Standard Model particles, creating the thermal plasma of the Hot Big Bang.

At the end of inflation, the inflaton oscillates around the minimum of its potential $V(\phi) \approx \frac{1}{2}m^2\phi^2$, behaving on average like non-relativistic cold matter ($w=0$). Perturbative decays of the inflaton into lighter fermions and bosons gradually fill the universe with radiation until thermalization is complete at $T_{\rm reh}$.

---

## key derivation & equations

The coupled evolution equations are:
$$\dot{\rho}_\phi + 3H\rho_\phi = -\Gamma_\phi\rho_\phi$$
$$\dot{\rho}_r + 4H\rho_r = +\Gamma_\phi\rho_\phi$$
where $\Gamma_\phi$ is the total decay width of the inflaton.

Reheating completes when the expansion rate drops to the decay rate:
$$H \sim \Gamma_\phi$$

Equating the radiation density $\rho_r = 3 M_{\rm Pl}^2 H^2 \approx 3 M_{\rm Pl}^2 \Gamma_\phi^2$ to the blackbody energy density $\rho_r = \frac{\pi^2}{30} g_* T_{\rm reh}^4$:
$$T_{\rm reh} = \left(\frac{90}{\pi^2 g_*}\right)^{1/4} \sqrt{\Gamma_\phi M_{\rm Pl}} \approx 0.55\, g_*^{-1/4} \sqrt{\Gamma_\phi M_{\rm Pl}}$$
where $g_* \sim 106.75$ is the effective relativistic degrees of freedom.

### Physical bounds
* **BBN lower limit**: $T_{\rm reh} \gtrsim 5\text{ MeV}$ to preserve standard Big Bang Nucleosynthesis.
* **Gravitino upper limit**: In supergravity, $T_{\rm reh} \lesssim 10^9\text{ GeV}$ to prevent thermal overproduction of gravitinos.

---

## astrophysical context

* Establishes the initial thermal state of the hot Big Bang plasma.
* Crucial for determining whether GUT-scale or intermediate-scale baryogenesis mechanisms can operate.

---

## connections & zettel links

* parent moc: [Cosmology_of_the_Early_Universe_MOC](../../04_Atlas/Cosmology_of_the_Early_Universe_MOC.html)
* related zettels:
  - [Preheating and parametric resonance](./Preheating%20and%20parametric%20resonance.html)
  - [Sakharov conditions for baryogenesis](./Sakharov%20conditions%20for%20baryogenesis.html)
  - [Dark matter thermal freeze-out and Lee-Weinberg bound](./Dark%20matter%20thermal%20freeze-out%20and%20Lee-Weinberg%20bound.html)
  - [Part6_Reheating_Baryogenesis_and_Dark_Matter](../../02_Literature/Lectures/Cosmology_of_the_Early_Universe/Part6_Reheating_Baryogenesis_and_Dark_Matter.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (4)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Cosmology_of_the_Early_Universe_MOC.html" class="backlink-item">Cosmology_of_the_Early_Universe_MOC</a></li>
    <li class="backlink-item-wrap"><a href="../../02_Literature/Lectures/Cosmology_of_the_Early_Universe/Part6_Reheating_Baryogenesis_and_Dark_Matter.html" class="backlink-item">Part6_Reheating_Baryogenesis_and_Dark_Matter</a></li>
    <li class="backlink-item-wrap"><a href="./Preheating%20and%20parametric%20resonance.html" class="backlink-item">Preheating and parametric resonance</a></li>
    <li class="backlink-item-wrap"><a href="./Sakharov%20conditions%20for%20baryogenesis.html" class="backlink-item">Sakharov conditions for baryogenesis</a></li>
  </ul>
</div>
