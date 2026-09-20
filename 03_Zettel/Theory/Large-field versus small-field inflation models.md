---
layout: "default"
title: "Large-field versus small-field inflation models"
---
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

* parent moc: [[Cosmology_of_the_Early_Universe_MOC]]
* related zettels:
  - [[Lyth bound and field excursion]]
  - [[Starobinsky R-squared inflation]]
  - [[Tensor-to-scalar ratio r and inflation energy scale]]
  - [[Part2_Inflation_Kinematics_Dynamics_and_Models]]



## Linked References

- [[Lyth bound and field excursion]]
- [[Starobinsky R-squared inflation]]
- [[Cosmology_of_the_Early_Universe_MOC]]


