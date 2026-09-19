---
layout: "default"
title: "Flatness problem and dynamical attractor"
---
# Flatness problem and dynamical attractor

> *why the universe today is spatially flat to within 0.5%, and how inflation transforms an unstable fine-tuning into a dynamical attractor.*

---

## core physical intuition

The Friedmann equation reveals that the deviation of the density parameter $\Omega(t)$ from unity ($\Omega_k \equiv 1 - \Omega = -k/a^2 H^2$) grows in any universe dominated by ordinary matter or radiation. In standard cosmology, spatial flatness ($\Omega = 1$) is an unstable repeller. For the universe to remain flat to within $\lvert \Omega - 1\rvert < 0.005$ today after 13.8 billion years of growth, it must have been tuned to $\lvert 1 - \Omega\rvert < 10^{-60}$ at the Planck era.

Cosmic inflation flips the sign of cosmic acceleration. Because $\ddot{a} > 0$ during inflation, $\Omega = 1$ becomes a super-attractor. Any initial curvature is crushed exponentially to zero, explaining the observed flatness naturally without fine-tuning.

---

## key derivation & equations

Differentiating the curvature density parameter $\Omega_k = -k/(aH)^2$:
$$\frac{d\Omega_k}{d\ln a} = \Omega_k \Omega (1 + 3w) = \Omega_k (1 - \Omega_k)(1 + 3w)$$

* In the standard Hot Big Bang:
  - Radiation era ($w = 1/3$): $1 + 3w = 2 > 0 \implies \lvert \Omega_k\rvert \propto a^2$
  - Matter era ($w = 0$): $1 + 3w = 1 > 0 \implies \lvert \Omega_k\rvert \propto a$
  $$\frac{\lvert \Omega_k(t_{\rm Pl})\rvert}{\lvert \Omega_k(t_0)\rvert} \approx \left(\frac{a_{\rm Pl}}{a_{\rm eq}}\right)^2 \left(\frac{a_{\rm eq}}{a_0}\right) \sim 10^{-60}$$
* During inflation ($w < -1/3$):
  $1 + 3w < 0$. For pure de Sitter ($w = -1$), $1 + 3w = -2$:
  $$\frac{d\Omega_k}{d\ln a} = -2\Omega_k \implies \Omega_k(a) \propto a^{-2} \propto e^{-2N}$$
  After $N \approx 60$ e-folds of inflation:
  $$\lvert \Omega_k\rvert \sim e^{-120} \sim 10^{-52}$$

---

## astrophysical context

* Planck 2018 constraint: $\Omega_k = 0.0007 \pm 0.0019$, establishing spatial flatness of the observable universe to high precision.
* CMB acoustic peak positions, where the angular scale $\theta_*$ of the first acoustic peak is exquisitely sensitive to the total spatial curvature.

---

## connections & zettel links

* parent moc: [Cosmology_of_the_Early_Universe_MOC](../../04_Atlas/Cosmology_of_the_Early_Universe_MOC.html)
* related zettels:
  - [Horizon problem and causal structure](Horizon%20problem%20and%20causal%20structure.html)
  - [Single-field slow-roll inflation dynamics](Single-field%20slow-roll%20inflation%20dynamics.html)
  - [Number of e-folds and horizon exit](Number%20of%20e-folds%20and%20horizon%20exit.html)
  - [Part1_Standard_Big_Bang_and_Shortcomings](../../02_Literature/Lectures/Cosmology_of_the_Early_Universe/Part1_Standard_Big_Bang_and_Shortcomings.html)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (3)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="Cosmic%20relics%20and%20Kibble%20mechanism.html" class="backlink-item">Cosmic relics and Kibble mechanism</a></li>
    <li class="backlink-item-wrap"><a href="Horizon%20problem%20and%20causal%20structure.html" class="backlink-item">Horizon problem and causal structure</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Cosmology_of_the_Early_Universe_MOC.html" class="backlink-item">Cosmology_of_the_Early_Universe_MOC</a></li>
  </ul>
</div>

