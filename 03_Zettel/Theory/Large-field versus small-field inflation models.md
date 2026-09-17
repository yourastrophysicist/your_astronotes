---
layout: "default"
title: "Large-field versus small-field inflation models"
---
{% raw %}
# Large-field versus small-field inflation models

> *the classification of inflationary potentials based on whether the inflaton rolls across super-Planckian or sub-Planckian field distances.*

---

## core physical intuition

Inflationary models divide fundamentally into two classes depending on the total field displacement $\Delta\phi$ during observable inflation:
1. **Large-field models**: The field traverses a distance in field space exceeding the reduced Planck mass ($\Delta\phi > M_{\rm Pl}$). They predict detectable primordial gravitational waves ($r \gtrsim 0.01$).
2. **Small-field models**: The field traverses a sub-Planckian distance ($\Delta\phi \ll M_{\rm Pl}$). Gravitational waves are unobservably small ($r \ll 10^{-3}$).

This division is physically crucial because super-Planckian excursions challenge the validity of effective field theory, requiring protective symmetries against infinite towers of Planck-suppressed operators.

---

## key derivation & equations

### 1. Large-field models (Chaotic inflation)
Potentials of the form $V(\phi) = \lambda M_{\rm Pl}^4 (\phi/M_{\rm Pl})^p$ with $V'' > 0$:
* $\eta_V > 0$, predicting red-tilted spectra ($n_s < 1$).
* Example ($V = \frac{1}{2}m^2\phi^2$):
  $$\phi_N = \sqrt{4N + 2}\, M_{\rm Pl} \approx 15 M_{\rm Pl} \quad (\text{for } N = 60)$$
  $$\Delta\phi \approx 15 M_{\rm Pl} \gg M_{\rm Pl}$$
  Prediction: $r = 16\epsilon_V = 8/N \approx 0.13$. (Now ruled out by BICEP/Keck $r < 0.032$).

### 2. Small-field models (Hilltop inflation)
Potentials of the form $V(\phi) = V_0 [1 - (\phi/\mu)^p]$ with $\phi < \mu$:
* Inflation occurs near a local maximum where $V'' < 0 \implies \eta_V < 0$.
* Field excursion satisfies $\Delta\phi \ll M_{\rm Pl}$.
* Tensor-to-scalar ratio is suppressed:
  $$r \ll 10^{-3}$$

### 3. Plateau models (Starobinsky-like)
Potentials that asymptote to a flat plateau at large field values:
$$V(\phi) = V_0 \left(1 - e^{-\alpha \phi/M_{\rm Pl}}\right)^2$$
Here $\Delta\phi \sim \mathcal{O}(\text{few } M_{\rm Pl})$, predicting $r \sim 12/N^2 \sim 0.003$, perfectly compatible with current limits.

---

## astrophysical context

* Planck + BICEP/Keck constraints ruling out simple monomials ($m^2\phi^2$, $\lambda\phi^4$).
* Preferred status of plateau models in modern cosmological data.

---

## connections & zettel links

* parent moc: [Cosmology_of_the_Early_Universe_MOC](../../04_Atlas/Cosmology_of_the_Early_Universe_MOC.html)
* related zettels:
  - [Lyth bound and field excursion](./Lyth%20bound%20and%20field%20excursion.html)
  - [Starobinsky R-squared inflation](./Starobinsky%20R-squared%20inflation.html)
  - [Tensor-to-scalar ratio r and inflation energy scale](./Tensor-to-scalar%20ratio%20r%20and%20inflation%20energy%20scale.html)
  - [Part2_Inflation_Kinematics_Dynamics_and_Models](../../02_Literature/Lectures/Cosmology_of_the_Early_Universe/Part2_Inflation_Kinematics_Dynamics_and_Models.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (4)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Cosmology_of_the_Early_Universe_MOC.html" class="backlink-item">Cosmology_of_the_Early_Universe_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Lyth%20bound%20and%20field%20excursion.html" class="backlink-item">Lyth bound and field excursion</a></li>
    <li class="backlink-item-wrap"><a href="../../02_Literature/Lectures/Cosmology_of_the_Early_Universe/Part2_Inflation_Kinematics_Dynamics_and_Models.html" class="backlink-item">Part2_Inflation_Kinematics_Dynamics_and_Models</a></li>
    <li class="backlink-item-wrap"><a href="./Starobinsky%20R-squared%20inflation.html" class="backlink-item">Starobinsky R-squared inflation</a></li>
  </ul>
</div>
